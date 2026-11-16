import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Network,
  Globe,
  User,
  Mail,
  Building2,
  Brain,
  CheckCircle2,
} from "lucide-react";

const modules = [
  { icon: Globe, title: "Domain Intelligence", desc: "Registration, DNS, IP and SSL layouts for any domain." },
  { icon: User, title: "Username Intelligence", desc: "Possible public profile matches with confidence indicators." },
  { icon: Mail, title: "Email Intelligence", desc: "Exposure report layouts and security recommendations." },
  { icon: Network, title: "IP Intelligence", desc: "ASN, network ownership and geolocation estimates." },
  { icon: Building2, title: "Company Intelligence", desc: "Public company and website information layouts." },
  { icon: Brain, title: "AI Investigator", desc: "Investigation workspace with evidence and AI analysis panels." },
];

const steps = [
  { n: "01", title: "Enter a query", desc: "Search a domain, username, email, IP or company." },
  { n: "02", title: "Collect public data", desc: "Gather publicly available information through secure backend services." },
  { n: "03", title: "Analyze & connect", desc: "Use the intelligence graph to understand relationships." },
  { n: "04", title: "Generate reports", desc: "Export structured findings and investigation summaries." },
];

const faqs = [
  {
    q: "Is OpenIntel AI free to use?",
    a: "Phase 0 provides the foundation and UI. Pricing tiers are displayed for planning; billing is not yet active.",
  },
  {
    q: "Does it collect private data?",
    a: "No. Only lawful, authorized research on publicly available information is supported. No password harvesting or credential theft.",
  },
  {
    q: "Are intelligence integrations live?",
    a: "Not yet. Module pages are UI foundations and clearly mark integrations as unavailable or demo until implemented.",
  },
  {
    q: "Can I self-host?",
    a: "The project is built with Next.js and Supabase. Deployment instructions are in the README.",
  },
];

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.17_158/0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              Cybersecurity Intelligence Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Investigate the Digital World with Intelligence.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover, connect and understand publicly available digital information with AI-powered intelligence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="/register" />}>
                Start Investigating
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/features" />}>
                Explore Features
              </Button>
            </div>
          </div>

          {/* Investigation search interface */}
          <div className="mx-auto mt-14 max-w-2xl">
            <Card className="border-primary/20 shadow-lg shadow-primary/5">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    placeholder="Search a domain, username, email, IP or company..."
                    readOnly
                  />
                  <Button size="sm">Investigate</Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Demo interface only. Integrations are not yet connected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product introduction */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">A serious research platform</h2>
            <p className="mt-4 text-muted-foreground">
              OpenIntel AI is being built as a modular OSINT SaaS. Phase 0 delivers the foundation: design system,
              authentication architecture, dashboard, module interfaces and database schema.
            </p>
          </div>
        </div>
      </section>

      {/* Intelligence modules */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Intelligence modules</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <Card key={m.title} className="transition-colors hover:border-primary/40">
                <CardHeader>
                  <m.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-2 text-base">{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-lg border border-border/60 bg-card/40 p-5">
                <div className="text-sm font-mono text-primary">{s.n}</div>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security and privacy */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Security and privacy</h2>
              <p className="mt-4 text-muted-foreground">
                Built with secure server-side authorization, RLS-protected data, and clear boundaries around lawful
                research. No password harvesting, credential theft or unauthorized access features.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Server-side input validation with Zod",
                "Supabase RLS policies per user",
                "No secrets exposed to the client",
                "Audit logging architecture",
                "Basic rate limiting",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Pricing</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Plans are indicative for Phase 0. Billing is not yet active.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Starter", price: "Free", features: ["Basic modules", "Limited investigations", "Community support"] },
              { name: "Pro", price: "$29/mo", features: ["All modules", "Higher limits", "Report exports", "Priority support"] },
              { name: "Enterprise", price: "Custom", features: ["SSO", "Dedicated support", "Custom limits", "Audit logs"] },
            ].map((p) => (
              <Card key={p.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                  <div className="text-2xl font-bold">{p.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <Card key={f.q}>
                <CardHeader>
                  <CardTitle className="text-base">{f.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Ready to investigate?</h2>
          <div className="mt-6 flex justify-center gap-3">
            <Button render={<Link href="/register" />}>
              Start Investigating
            </Button>
            <Button variant="outline" render={<Link href="/features" />}>
              Explore Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}