# API Design Document

Version: 0.1  
Status: Draft

---

# Purpose

This document defines REST API standards for Enterprise Workspace.

It applies to all backend modules.

---

# Base URL

Local development:

```text
http://localhost:4000/api/v1
```

---

# API Style

Enterprise Workspace uses REST-first APIs.

GraphQL may be added later for dashboards and reporting.

---

# Resource Naming

Use plural nouns.

Good:

```text
/users
/projects
/tasks
/organizations
```

Avoid:

```text
/getUsers
/createTask
/deleteProject
```

---

# HTTP Methods

| Method | Purpose |
|---|---|
| GET | Read |
| POST | Create |
| PATCH | Partial update |
| PUT | Full replace |
| DELETE | Delete |

---

# Standard Response Format

Successful response:

```json
{
  "success": true,
  "data": {},
  "meta": {}
}
```

Error response:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": []
  }
}
```

---

# Pagination

List APIs must support pagination.

Request:

```text
GET /users?page=1&limit=20
```

Response:

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

# Filtering

Use query parameters:

```text
GET /users?status=ACTIVE&role=ADMIN
```

---

# Sorting

Use:

```text
GET /users?sortBy=createdAt&sortOrder=desc
```

Allowed sort orders:

```text
asc
desc
```

---

# Authentication

Protected APIs require Bearer token:

```http
Authorization: Bearer <access_token>
```

---

# Multi-Tenant Access

Every protected request must resolve:

- userId
- organizationId
- roles
- permissions

Business queries must filter by organizationId.

---

# API Versioning

Versioning is URI-based:

```text
/api/v1/users
/api/v1/projects
```

---

# Status Codes

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# Initial API Modules

## Auth

```text
POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/refresh
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/me
```

## Users

```text
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

## Organizations

```text
GET    /organizations
GET    /organizations/:id
POST   /organizations
PATCH  /organizations/:id
```

## Projects

```text
GET    /projects
GET    /projects/:id
POST   /projects
PATCH  /projects/:id
DELETE /projects/:id
```

## Tasks

```text
GET    /tasks
GET    /tasks/:id
POST   /tasks
PATCH  /tasks/:id
DELETE /tasks/:id
```

---

# Definition of Done for APIs

An API is complete only when:

- Controller implemented
- DTO validation added
- Service logic implemented
- Tenant filtering enforced
- Swagger documented
- Bruno request added
- Tests added or planned
- Error responses standardized