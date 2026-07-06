# Identity Database Design

## Purpose

This document defines the database design for the core identity system.

It covers:

- User
- Organization
- Membership
- Role
- Permission
- Session
- AuditLog

---

# Design Choice

Enterprise Workspace uses a membership-based multi-tenant identity model.

```text
User
  ↓
Membership
  ↓
Organization