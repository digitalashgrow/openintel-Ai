"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailQuerySchema } from "@/lib/validation/schemas";
import { toast } from "sonner";

export default function EmailPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm<{ email: string }>({ resolver: zodResolver(emailQuerySchema), defaultValues: { email: "" } });

  const onSubmit = (values: { email: string }) => {
    setSubmitted(values.email);
    toast.info("Email intelligence integration is not implemented yet (demo).");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Email Intelligence</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. Integrations are unavailable.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Email input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="user@example.com" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
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
              <CardTitle>Exposure report</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Unavailable — integration not implemented. Query: {submitted}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security recommendations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Recommendations will appear here once implemented.
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}