---
title: "Designing Resilient REST APIs with Spring Boot"
date: "2026-05-12"
excerpt: "A few practical patterns for making Spring Boot APIs hold up in production: idempotency, retries, and sane error contracts."
tags: ["Java", "Spring Boot", "REST"]
---

Most REST API advice stops at CRUD endpoints and status codes. In production, the interesting problems start once real traffic, retries, and partial failures show up. Here are a few patterns that have made a real difference in services I've worked on.

## Idempotency keys for write endpoints

Any `POST` that creates a resource should accept an idempotency key. Clients retrying after a timeout shouldn't create duplicate records.

```java
@PostMapping("/orders")
public ResponseEntity<OrderResponse> createOrder(
        @RequestHeader("Idempotency-Key") String idempotencyKey,
        @RequestBody CreateOrderRequest request) {
    return orderService.createOrGet(idempotencyKey, request);
}
```

Store the key alongside the created resource ID, and short-circuit if the same key comes in again.

## Consistent error contracts

Returning ad-hoc error shapes from different endpoints makes clients brittle. A single `ProblemDetail`-style response (title, status, detail, and a machine-readable `code`) keeps consumers predictable.

## Retries belong on the client, timeouts belong on the server

Set explicit timeouts on outbound calls (database, downstream services) rather than relying on defaults, and document what a client should safely retry versus not.

None of this is exotic — it's mostly discipline. But it's the difference between a service that degrades gracefully and one that falls over under load.
