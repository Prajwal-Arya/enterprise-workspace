# Entity Relationship Diagram (ERD)

Version: 0.1

---

# Identity Domain

```text
Tenant
│
└──────────────┐
               │
               ▼
Organization
│
├──────────────┐
│              │
▼              ▼
Department   Project
│
▼
Team
│
▼
User
│
├──────────────┐
│              │
▼              ▼
Role         Session
│
▼
Permission
```

---

# Work Domain

```text
Project
│
├──────────────┐
│              │
▼              ▼
Milestone   ProjectMember
│              │
│              ▼
▼            User
Task
│
├──────────────┐
│              │
▼              ▼
Comment    TaskAssignment
│              │
│              ▼
▼            User
Attachment
```

---

# Operations Domain

```text
Organization
│
├──────────────┐
│              │
▼              ▼
Asset      InventoryItem
│              │
▼              ▼
Category    Supplier
```

---

# Support Domain

```text
Organization
│
▼
Ticket
│
├──────────────┐
│              │
▼              ▼
Comment   Attachment
```

---

# Platform Domain

```text
User
│
├──────────────┐
│              │
▼              ▼
Notification AuditLog
```

---

# Cardinality

Tenant

1 → N Organizations

Organization

1 → N Users

Organization

1 → N Projects

Organization

1 → N Assets

Organization

1 → N Tickets

Project

1 → N Tasks

Task

1 → N Comments

Task

1 → N Attachments

Role

N → N Permissions

User

N → N Roles

Project

N → N Users

Task

N → N Users

---

# Multi-Tenant Rule

Every business entity belongs to exactly one Organization.

Organization belongs to exactly one Tenant.

Queries must always filter by Organization.

---

# Soft Delete Policy

Support soft delete for

- User
- Organization
- Project
- Task
- Asset
- Ticket

Fields

deletedAt

deletedBy

---

# Audit Fields

Every business table should include

id

createdAt

createdBy

updatedAt

updatedBy

deletedAt

deletedBy