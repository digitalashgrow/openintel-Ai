import { describe, it, expect } from "vitest";
import { loginSchema, registerSchema, domainQuerySchema, ipQuerySchema } from "@/lib/validation/schemas";

describe("validation schemas", () => {
  it("accepts valid login", () => {
    const r = loginSchema.safeParse({ email: "a@b.com", password: "password1" });
    expect(r.success).toBe(true);
  });

  it("rejects invalid email login", () => {
    const r = loginSchema.safeParse({ email: "not-email", password: "password1" });
    expect(r.success).toBe(false);
  });

  it("rejects mismatched registration passwords", () => {
    const r = registerSchema.safeParse({
      fullName: "Test",
      email: "a@b.com",
      password: "password1",
      confirmPassword: "password2",
    });
    expect(r.success).toBe(false);
  });

  it("validates domain", () => {
    expect(domainQuerySchema.safeParse({ domain: "example.com" }).success).toBe(true);
    expect(domainQuerySchema.safeParse({ domain: "bad" }).success).toBe(false);
  });

  it("validates ip", () => {
    expect(ipQuerySchema.safeParse({ ip: "203.0.113.10" }).success).toBe(true);
    expect(ipQuerySchema.safeParse({ ip: "999.999.999.999" }).success).toBe(false);
  });
});