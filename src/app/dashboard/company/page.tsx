"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { companyQuerySchema } from "@/lib/validation/schemas";
import { toast } from "sonner";

export default function CompanyPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm<{ name: string; website?: string }>({
    resolver: zodResolver(companyQuerySchema),
    defaultValues: { name: "", website: "" },
  });

  const onSubmit = (values: { name: string; website?: string }) => {
    setSubmitted(values.name);
    toast.info("Company intelligence integration is not implemented yet (demo).");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Company Intelligence</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. Integrations are unavailable.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Company input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company name</Label>
              <Input id="name" placeholder="Acme Corp" {...form.register("name")} />
              {form.formState.errors.name && (
                <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website (optional)</Label>
              <Input id="website" placeholder="https://example.com" {...form.register("website")} />
              {form.formState.errors.website && (
                <p className="text-xs text-destructive">{form.formState.errors.website.message}</p>
              )}
            </div>
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      {submitted && (
        <Card>
          <CardHeader>
            <CardTitle>Public information</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Unavailable — integration not implemented. Query: {submitted}
          </CardContent>
        </Card>
      )}
    </div>
  );
}