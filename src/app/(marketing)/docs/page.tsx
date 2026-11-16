export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
      <p className="mt-4 text-muted-foreground">
        Phase 0 documentation covers installation, environment configuration, database setup and deployment. See the
        project README for full instructions.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Quick start</h2>
      <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
{`npm install
cp .env.example .env.local
# configure Supabase credentials
npm run dev`}
      </pre>
    </div>
  );
}