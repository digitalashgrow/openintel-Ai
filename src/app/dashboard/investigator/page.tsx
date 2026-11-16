import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InvestigatorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Investigator</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. AI analysis not connected.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Investigation workspace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="query">Investigation query</Label>
              <Input id="query" placeholder="Describe the investigation..." />
            </div>
            <Button>Run (demo)</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Evidence panel</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">No evidence collected.</CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AI analysis panel</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="AI analysis will appear here." rows={6} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Report preview</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">No report generated.</CardContent>
        </Card>
      </div>
    </div>
  );
}