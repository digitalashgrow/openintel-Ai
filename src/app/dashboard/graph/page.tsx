import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GraphPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Intelligence Graph</h1>
        <p className="text-sm text-muted-foreground">UI foundation only.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Graph canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
            Graph canvas placeholder
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Entity cards</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">No entities yet.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Relationship legend</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="space-y-1">
              <li>— owns</li>
              <li>— resolves to</li>
              <li>— associated with</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}