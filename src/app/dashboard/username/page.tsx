"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { usernameQuerySchema } from "@/lib/validation/schemas";
import { toast } from "sonner";

export default function UsernamePage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [deep, setDeep] = useState(false);
  const form = useForm<{ username: string }>({ resolver: zodResolver(usernameQuerySchema), defaultValues: { username: "" } });

  const onSubmit = (values: { username: string }) => {
    setSubmitted(values.username);
    toast.info("Username intelligence integration is not implemented yet (demo).");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Username Intelligence</h1>
        <p className="text-sm text-muted-foreground">UI foundation only. Integrations are unavailable.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Username input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="jdoe" {...form.register("username")} />
              {form.formState.errors.username && (
                <p className="text-xs text-destructive">{form.formState.errors.username.message}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={deep} onCheckedChange={setDeep} id="deep" />
              <Label htmlFor="deep">Deep search (demo)</Label>
            </div>
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      {submitted && (
        <Card>
          <CardHeader>
            <CardTitle>Possible profile matches</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Unavailable — integration not implemented. Query: {submitted}
            <div className="mt-3 space-y-2">
              <div className="rounded-md border border-border/60 p-3">
                Source links and confidence indicators will appear here once implemented.
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}