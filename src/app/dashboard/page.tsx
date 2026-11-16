"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Globe, User, Mail, Network, Building2, Bot } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const usageData = [
  { name: "Mon", investigations: 4 },
  { name: "Tue", investigations: 7 },
  { name: "Wed", investigations: 3 },
  { name: "Thu", investigations: 9 },
  { name: "Fri", investigations: 6 },
  { name: "Sat", investigations: 2 },
  { name: "Sun", investigations: 5 },
];

const recent = [
  { id: "1", module: "Domain", query: "example.com", status: "completed", time: "2h ago" },
  { id: "2", module: "Username", query: "jdoe", status: "completed", time: "5h ago" },
  { id: "3", module: "IP", query: "203.0.113.10", status: "pending", time: "1d ago" },
];

const modules = [
  { href: "/dashboard/domain", label: "Domain", icon: Globe },
  { href: "/dashboard/username", label: "Username", icon: User },
  { href: "/dashboard/email", label: "Email", icon: Mail },
  { href: "/dashboard/ip", label: "IP", icon: Network },
  { href: "/dashboard/company", label: "Company", icon: Building2 },
  { href: "/dashboard/investigator", label: "AI Investigator", icon: Bot },
];

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Demo data shown. Intelligence integrations are not yet connected.
          </p>
        </div>
        <Badge variant="outline">Phase 0</Badge>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              className="border-0 bg-transparent p-0 focus-visible:ring-0"
              placeholder="Global investigation search (demo)..."
            />
            <Button size="sm">Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total investigations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Usage this week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Usage statistics</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData}>
                <XAxis dataKey="name" stroke="oklch(0.68 0.02 255)" fontSize={12} />
                <YAxis stroke="oklch(0.68 0.02 255)" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: "oklch(0.14 0.025 255)", border: "1px solid oklch(1 0 0 / 9%)" }}
                />
                <Bar dataKey="investigations" fill="oklch(0.78 0.17 158)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent investigations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recent.map((r) => (
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

      <Card>
        <CardHeader>
          <CardTitle>Intelligence module cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="flex items-center gap-3 rounded-md border border-border/60 p-3 transition-colors hover:border-primary/40"
              >
                <m.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{m.label}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Dashboard loaded (demo).</li>
            <li>• No live integrations connected.</li>
            <li>• Data shown is illustrative only.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}