# ADR-006: Use PostgreSQL with Prisma

## Status

Accepted

## Decision

Use PostgreSQL as the primary database and Prisma as the ORM.

## Why PostgreSQL

- Strong relational model
- Transactions
- Indexing
- JSONB support
- Mature ecosystem
- Good for enterprise systems

## Why Prisma

- Type-safe database access
- Good migration workflow
- Great TypeScript support
- Easy developer experience

## Initial Database Domains

- Users
- Roles
- Permissions
- Organizations
- Projects
- Tasks
- Tickets
- Assets
- Inventory
- Notifications
- Audit Logs

## Future Considerations

- Read replicas
- Partitioning
- Search indexing
- Database backups
- Migration review process
