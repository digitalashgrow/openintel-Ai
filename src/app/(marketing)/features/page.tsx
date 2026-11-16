import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, User, Mail, Network, Building2, Brain, FileText, Activity } from "lucide-react";

const features = [
  { icon: Globe, title: "Domain Intelligence", desc: "Domain input with registration, DNS, IP and SSL information layouts." },
  { icon: User, title: "Username Intelligence", desc: "Username input, search configuration, possible profile matches and confidence indicators." },
  { icon: Mail, title: "Email Intelligence", desc: "Email input with exposure report layout and security recommendations." },
  { icon: Network, title: "IP Intelligence", desc: "IP input with ASN, network ownership and public geolocation estimates." },
  { icon: Building2, title: "Company Intelligence", desc: "Company name and website inputs with public information layout." },
  { icon: Brain, title: "AI Investigator", desc: "Investigation workspace with evidence panel, AI analysis panel and report preview." },
  { icon: FileText, title: "Reports", desc: "Reports table with search, filters and export UI." },
  { icon: Activity, title: "Investigation History", desc: "Track and revisit past investigations." },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Features</h1>
      <p className="mt-3 text-muted-foreground">
        Phase 0 provides UI foundations and architecture. Intelligence integrations are not yet live.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <f.icon className="h-6 w-6 text-primary" />
              <CardTitle className="mt-2 text-base">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}