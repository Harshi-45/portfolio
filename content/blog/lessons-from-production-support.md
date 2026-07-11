---
title: "What Production Support Taught Me About Writing Better Code"
date: "2026-03-02"
excerpt: "Being on the hook for a system after it ships changes how you write it in the first place."
tags: ["Production", "Reliability"]
---

Writing code that works is one thing. Writing code you're comfortable being paged for at 2am is a different discipline entirely. A few habits I picked up from carrying production support for integration-heavy systems.

## Log the decision, not just the event

"Order failed" is not a useful log line. "Order 4821 failed: downstream WMS returned 503, exceeded 3 retries" tells you exactly where to look. Every failure path should log enough context to diagnose without attaching a debugger.

## Treat third-party integrations as unreliable by default

When your service depends on SAP, Manhattan, or any external system, assume it will be slow, down, or return malformed data at some point. Build explicit timeouts, circuit breakers, and fallback behavior around those calls rather than trusting the happy path.

## Make rollbacks boring

The scariest incidents are the ones where rolling back a deploy is itself risky. Keep database migrations backward-compatible for at least one release, and avoid deploys that require a specific rollout order across services.

None of this shows up in a feature demo. It shows up six months later when something breaks at an inconvenient time — and it's the reason the fix takes ten minutes instead of two hours.
