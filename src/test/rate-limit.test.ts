import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/security/rate-limit";

describe("rate limit", () => {
  it("allows then blocks", () => {
    const key = "test-" + Math.random();
    const r1 = rateLimit(key, 1, 10000);
    expect(r1.allowed).toBe(true);
    const r2 = rateLimit(key, 1, 10000);
    expect(r2.allowed).toBe(false);
  });
});