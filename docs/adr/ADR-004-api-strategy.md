# ADR-004: Use REST First, Add GraphQL Later

## Status

Accepted

## Context

The platform needs APIs for:

- Authentication
- Users
- Roles
- Projects
- Tasks
- Tickets
- Assets
- Inventory
- Reports

## Decision

Start with REST APIs.

Add GraphQL later only if the frontend needs flexible querying across multiple resources.

## Why REST First

- Easier to learn and debug
- Works well with NestJS
- Simple HTTP semantics
- Easier with Bruno/Postman testing
- Good fit for CRUD-heavy enterprise systems

## API Conventions

Use plural resource names:

- /users
- /roles
- /projects
- /tasks
- /tickets

Use standard methods:

- GET
- POST
- PATCH
- DELETE

Use pagination for list APIs.

Use consistent response format.

## Future

GraphQL may be added for dashboards or complex reporting queries.
