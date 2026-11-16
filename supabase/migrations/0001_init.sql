-- OpenIntel AI Phase 0 database foundation
-- Run with: supabase db push (or psql)

create extension if not exists "pgcrypto";

-- profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- investigations
create table if not exists public.investigations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module text not null,
  query text not null,
  status text not null default 'pending' check (status in ('pending','running','completed','failed')),
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- findings
create table if not exists public.findings (
  id uuid primary key default gen_random_uuid(),
  investigation_id uuid not null references public.investigations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  value text not null,
  confidence numeric,
  source_id uuid,
  created_at timestamptz not null default now()
);

-- sources
create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),
  investigation_id uuid not null references public.investigations(id) on delete cascade,
  url text not null,
  title text,
  retrieved_at timestamptz not null default now()
);

alter table public.findings
  add constraint findings_source_fk foreign key (source_id) references public.sources(id) on delete set null;

-- reports
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  investigation_id uuid references public.investigations(id) on delete set null,
  title text not null,
  format text not null check (format in ('pdf','json','csv')),
  status text not null default 'draft' check (status in ('draft','ready','exported')),
  created_at timestamptz not null default now()
);

-- usage_logs
create table if not exists public.usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  module text,
  created_at timestamptz not null default now()
);

-- subscriptions
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null default 'free' check (plan in ('free','pro','enterprise')),
  status text not null default 'active' check (status in ('active','canceled','past_due')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- audit_logs
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  target_type text,
  target_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

-- indexes
create index if not exists idx_investigations_user on public.investigations(user_id);
create index if not exists idx_investigations_created on public.investigations(created_at desc);
create index if not exists idx_findings_investigation on public.findings(investigation_id);
create index if not exists idx_findings_user on public.findings(user_id);
create index if not exists idx_sources_investigation on public.sources(investigation_id);
create index if not exists idx_reports_user on public.reports(user_id);
create index if not exists idx_usage_logs_user on public.usage_logs(user_id);
create index if not exists idx_audit_logs_actor on public.audit_logs(actor_id);

-- updated_at trigger
create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

drop trigger if exists investigations_touch on public.investigations;
create trigger investigations_touch before update on public.investigations
  for each row execute function public.touch_updated_at();

drop trigger if exists subscriptions_touch on public.subscriptions;
create trigger subscriptions_touch before update on public.subscriptions
  for each row execute function public.touch_updated_at();

-- auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', null), 'user')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- RLS
alter table public.profiles enable row level security;
alter table public.investigations enable row level security;
alter table public.findings enable row level security;
alter table public.sources enable row level security;
alter table public.reports enable row level security;
alter table public.usage_logs enable row level security;
alter table public.subscriptions enable row level security;
alter table public.audit_logs enable row level security;

-- profiles policies
create policy "profiles_select_own" on public.profiles for select
  using (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update
  using (auth.uid() = id) with check (auth.uid() = id and role = (select role from public.profiles where id = auth.uid()));
-- role cannot be self-assigned: enforce via check above (role unchanged)

-- investigations policies
create policy "investigations_select_own" on public.investigations for select
  using (auth.uid() = user_id);
create policy "investigations_insert_own" on public.investigations for insert
  with check (auth.uid() = user_id);
create policy "investigations_update_own" on public.investigations for update
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "investigations_delete_own" on public.investigations for delete
  using (auth.uid() = user_id);

-- findings policies
create policy "findings_select_own" on public.findings for select
  using (auth.uid() = user_id);
create policy "findings_insert_own" on public.findings for insert
  with check (auth.uid() = user_id);
create policy "findings_update_own" on public.findings for update
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "findings_delete_own" on public.findings for delete
  using (auth.uid() = user_id);

-- sources policies (via investigation ownership)
create policy "sources_select_own" on public.sources for select
  using (exists (select 1 from public.investigations i where i.id = investigation_id and i.user_id = auth.uid()));
create policy "sources_insert_own" on public.sources for insert
  with check (exists (select 1 from public.investigations i where i.id = investigation_id and i.user_id = auth.uid()));
create policy "sources_delete_own" on public.sources for delete
  using (exists (select 1 from public.investigations i where i.id = investigation_id and i.user_id = auth.uid()));

-- reports policies
create policy "reports_select_own" on public.reports for select
  using (auth.uid() = user_id);
create policy "reports_insert_own" on public.reports for insert
  with check (auth.uid() = user_id);
create policy "reports_update_own" on public.reports for update
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "reports_delete_own" on public.reports for delete
  using (auth.uid() = user_id);

-- usage_logs policies
create policy "usage_logs_select_own" on public.usage_logs for select
  using (auth.uid() = user_id);
create policy "usage_logs_insert_own" on public.usage_logs for insert
  with check (auth.uid() = user_id);

-- subscriptions policies
create policy "subscriptions_select_own" on public.subscriptions for select
  using (auth.uid() = user_id);

-- audit_logs: no client writes; admins read via service role only
create policy "audit_logs_no_client" on public.audit_logs for select
  using (false);