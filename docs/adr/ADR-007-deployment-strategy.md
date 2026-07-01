# ADR-007: Deployment Strategy

## Status

Accepted

## Decision

Use simple cloud deployment first, then evolve to advanced deployment.

## Initial Deployment

- Frontend: Vercel
- Backend: Railway or Render
- Database: Railway PostgreSQL initially
- Redis: Railway/Upstash initially

## Later Deployment

Move toward AWS:

- EC2 or ECS for backend
- RDS PostgreSQL
- ElastiCache Redis
- S3 for files
- CloudFront CDN
- Route53 DNS
- ACM SSL certificates

## Why

Start simple to focus on learning product engineering first.
Add cloud complexity after the core product is stable.

## CI/CD

Use GitHub Actions for:

- Lint
- Test
- Build
- Deployment
