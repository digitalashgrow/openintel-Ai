"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const demoReports = [
  { id: "1", title: "Domain report: example.com", format: "pdf", status: "ready", created: "2026-11-10" },
  { id: "2", title: "Username report: jdoe", format: "json", status: "draft", created: "2026-11-12" },
];

export default function ReportsPage() {
  const [query, setQuery] = useState("");
  const filtered = demoReports.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. Export is not connected.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Reports table</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Input placeholder="Search reports..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export (demo)</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.title}</TableCell>
                  <TableCell>{r.format}</TableCell>
                  <TableCell>
                    <Badge variant={r.status === "ready" ? "default" : "secondary"}>{r.status}</Badge>
                  </TableCell>
                  <TableCell>{r.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}