import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Admin</h1>
      <p className="text-sm text-muted-foreground">
        Secure admin area. Access is verified server-side. Role assignment is never client-controlled.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>System overview</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Phase 0 admin foundation only.
        </CardContent>
      </Card>
    </div>
  );
}