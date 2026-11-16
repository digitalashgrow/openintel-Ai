import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  { id: "1", module: "Domain", query: "example.com", status: "completed", time: "2h ago" },
  { id: "2", module: "Username", query: "jdoe", status: "completed", time: "5h ago" },
  { id: "3", module: "IP", query: "203.0.113.10", status: "pending", time: "1d ago" },
];

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Investigation History</h1>
        <p className="text-sm text-muted-foreground">Demo data.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent investigations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-md border border-border/60 p-3">
                <div>
                  <div className="text-sm font-medium">{r.query}</div>
                  <div className="text-xs text-muted-foreground">{r.module} · {r.time}</div>
                </div>
                <Badge variant={r.status === "completed" ? "default" : "secondary"}>{r.status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}