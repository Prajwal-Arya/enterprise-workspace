# ADR-005: Authentication Strategy

## Status

Accepted

## Decision

Use JWT access tokens with refresh tokens.

## Initial Approach

- Access token: short-lived
- Refresh token: longer-lived
- Password hashing: Argon2 or bcrypt
- Refresh token stored securely
- Backend validates user status on protected operations

## Frontend Storage Strategy

Prefer secure HTTP-only cookies for refresh tokens.

Access token can be kept in memory.

## Features

- Register
- Login
- Logout
- Refresh token
- Forgot password
- Reset password
- Email verification
- Change password
- Device/session tracking later

## Security Concerns

- Token theft
- XSS
- CSRF
- Brute-force login
- Weak passwords
- Session invalidation

## Mitigations

- HTTP-only cookies
- Rate limiting
- Password hashing
- Refresh token rotation
- Audit logs
- Account lock rules later
