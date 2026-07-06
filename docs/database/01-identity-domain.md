# Identity Domain Design

## Decision

Enterprise Workspace will use a Membership-based identity model.

A User does not directly belong to an Organization.

Instead:

User → Membership → Organization

## Why

This supports a multi-tenant SaaS model where one user can belong to multiple organizations.

## Core Entities

### User

Represents a real person who can authenticate into the system.

### Organization

Represents a company, team, or institution using the platform.

### Membership

Represents a user's relationship with an organization.

Membership contains organization-specific information such as:

- role
- status
- joined date
- invitation status

### Role

Represents a named collection of permissions inside an organization.

### Permission

Represents an allowed action such as:

- user.create
- user.read
- project.create
- task.update

### Session

Represents a login session.

### AuditLog

Represents an immutable record of important system actions.

## Business Rules

- A user can belong to multiple organizations.
- An organization can have multiple users.
- A user accesses organization data only through an active membership.
- Roles are assigned through membership.
- Permissions are resolved from membership roles.
- Every protected request must resolve both userId and organizationId.
- A user must choose an active organization context after login if they belong to more than one organization.

## Example

User: prajwal@example.com

Memberships:

- QNu Labs → Admin
- Client A → Viewer
- Startup B → Project Manager

## JWT Context

The access token should include:

- userId
- activeOrganizationId
- membershipId
- roles
- permissions

## Tenant Isolation Rule

Every organization-owned entity must be queried using organizationId.

Example:

```ts
await prisma.project.findMany({
  where: {
    organizationId: activeOrganizationId,
  },
});