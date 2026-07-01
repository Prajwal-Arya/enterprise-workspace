# Architecture Overview

## Project

Enterprise Workspace is a modular enterprise platform containing:

- User Management
- Authentication
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

## Architecture Style

Initial architecture: Modular Monolith + Monorepo.

## Applications

- apps/frontend: Next.js frontend
- apps/backend: NestJS backend
- apps/ai-service: Python FastAPI service, added later

## Shared Packages

- packages/types
- packages/utils
- packages/validation
- packages/config
