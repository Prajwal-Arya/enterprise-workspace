# ADR-001: Use Monorepo Architecture

## Status

Accepted

## Context

The project contains multiple applications:

- Frontend
- Backend
- AI service
- Shared libraries

Managing them in separate repositories would make code sharing, versioning, and development workflow harder.

## Decision

Use a monorepo managed with pnpm workspaces and Turborepo.

## Alternatives Considered

### Separate repositories

Pros:
- Clear separation
- Independent deployments

Cons:
- More setup overhead
- Harder shared types
- More CI/CD duplication

### Monorepo without Turborepo

Pros:
- Simpler initially

Cons:
- Slower builds later
- No task caching

## Consequences

Pros:
- Shared TypeScript types
- Unified tooling
- Easier refactoring
- One CI/CD pipeline

Cons:
- Requires discipline in folder structure
- Initial setup is slightly more complex
