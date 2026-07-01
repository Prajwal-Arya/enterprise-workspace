# ADR-002: Use Modular Monolith Architecture

## Status

Accepted

## Context

Enterprise Workspace will contain multiple domains:

- Authentication
- User Management
- RBAC
- Organizations
- Projects
- Tasks
- Assets
- Inventory
- Ticketing
- Notifications
- Reports
- AI Assistant

A microservices architecture would add operational complexity too early.

## Decision

Use a modular monolith for the main backend API.

Each business area will be implemented as an independent NestJS module.

## Why

- Easier to develop initially
- Easier to debug
- Easier local setup
- Single database transaction boundary
- Lower deployment complexity
- Still allows future migration to microservices

## Alternatives Considered

### Microservices

Rejected for now because it adds:

- Service discovery
- Distributed tracing
- Multiple deployments
- Inter-service communication
- Distributed transactions

### Simple layered monolith

Rejected because it can become messy as features grow.

## Consequences

Pros:

- Clean module boundaries
- Faster development
- Easier testing
- Lower DevOps overhead

Cons:

- Requires discipline to avoid tight coupling
- Scaling is initially application-wide
