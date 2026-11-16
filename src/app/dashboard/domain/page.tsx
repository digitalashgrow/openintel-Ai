"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { domainQuerySchema } from "@/lib/validation/schemas";
import { toast } from "sonner";

type FormValues = { domain: string };

export default function DomainPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm<FormValues>({ resolver: zodResolver(domainQuerySchema), defaultValues: { domain: "" } });

  const onSubmit = (values: FormValues) => {
    setSubmitted(values.domain);
    toast.info("Domain intelligence integration is not implemented yet (demo).");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Domain Intelligence</h1>
        <p className="text-sm text-muted-foreground">
          UI foundation only. Integrations are unavailable.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Domain input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="domain">Domain</Label>
              <Input id="domain" placeholder="example.com" {...form.register("domain")} />
              {form.formState.errors.domain && (
                <p className="text-xs text-destructive">{form.formState.errors.domain.message}</p>
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
              <CardTitle>Registration information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Unavailable — integration not implemented. Query: {submitted}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>DNS records</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>IP information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SSL information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Unavailable.</CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}