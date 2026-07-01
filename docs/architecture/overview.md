# Enterprise Workspace Architecture Overview

## Architecture Style

The system uses a monorepo with a modular monolith backend.

## Applications

- apps/web: Next.js frontend
- apps/api: NestJS backend
- apps/ai: FastAPI AI service, added later

## Core Backend Modules

- AuthModule
- UsersModule
- RolesModule
- PermissionsModule
- OrganizationsModule
- ProjectsModule
- TasksModule
- AssetsModule
- InventoryModule
- TicketsModule
- NotificationsModule
- AuditModule
- ReportsModule

## Data Stores

- PostgreSQL: primary relational database
- Redis: cache, queues, rate limiting, temporary tokens
- Object Storage: file uploads, added later
- Vector Database: AI search, added later

## Communication

- Web to API: REST over HTTPS
- API to PostgreSQL: Prisma
- API to Redis: Redis client/BullMQ
- API to AI service: HTTP later

## Initial Deployment

- Vercel: frontend
- Railway/Render: backend
- PostgreSQL: managed database
- Redis: managed cache

## Future Deployment

- AWS EC2/ECS
- RDS
- ElastiCache
- S3
- CloudFront
- Route53
