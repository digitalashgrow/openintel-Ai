export type Role = "user" | "admin";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: Role;
  created_at: string;
  updated_at: string;
}

export type InvestigationStatus = "pending" | "running" | "completed" | "failed";

export type ModuleType =
  | "domain"
  | "username"
  | "email"
  | "ip"
  | "company"
  | "investigator";

export interface Investigation {
  id: string;
  user_id: string;
  module: ModuleType;
  query: string;
  status: InvestigationStatus;
  summary: string | null;
  created_at: string;
  updated_at: string;
}

export interface Finding {
  id: string;
  investigation_id: string;
  user_id: string;
  type: string;
  value: string;
  confidence: number | null;
  source_id: string | null;
  created_at: string;
}

export interface Source {
  id: string;
  investigation_id: string;
  url: string;
  title: string | null;
  retrieved_at: string;
}

export interface Report {
  id: string;
  user_id: string;
  investigation_id: string | null;
  title: string;
  format: "pdf" | "json" | "csv";
  status: "draft" | "ready" | "exported";
  created_at: string;
}

export interface UsageLog {
  id: string;
  user_id: string;
  action: string;
  module: ModuleType | null;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan: "free" | "pro" | "enterprise";
  status: "active" | "canceled" | "past_due";
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  actor_id: string | null;
  action: string;
  target_type: string | null;
  target_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}