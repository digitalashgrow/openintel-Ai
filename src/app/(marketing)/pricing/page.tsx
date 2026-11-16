import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  { name: "Starter", price: "Free", features: ["Basic modules", "Limited investigations", "Community support"] },
  { name: "Pro", price: "$29/mo", features: ["All modules", "Higher limits", "Report exports", "Priority support"] },
  { name: "Enterprise", price: "Custom", features: ["SSO", "Dedicated support", "Custom limits", "Audit logs"] },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Indicative plans for Phase 0. Billing is not yet active.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <div className="text-2xl font-bold">{p.price}</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full" render={<Link href="/register" />}>
                Get started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}