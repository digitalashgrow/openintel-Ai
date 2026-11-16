"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ipQuerySchema } from "@/lib/validation/schemas";
import { toast } from "sonner";

export default function IpPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm<{ ip: string }>({ resolver: zodResolver(ipQuerySchema), defaultValues: { ip: "" } });

  const onSubmit = (values: { ip: string }) => {
    setSubmitted(values.ip);
    toast.info("IP intelligence integration is not implemented yet (demo).");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">IP Intelligence</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. Integrations are unavailable.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>IP input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="ip">IP address</Label>
              <Input id="ip" placeholder="203.0.113.10" {...form.register("ip")} />
              {form.formState.errors.ip && (
                <p className="text-xs text-destructive">{form.formState.errors.ip.message}</p>
              )}
            </div>
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      {submitted && (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>ASN information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable. Query: {submitted}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Network ownership</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Public geolocation estimates</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable.</CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}