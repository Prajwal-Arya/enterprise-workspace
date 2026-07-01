# ADR-003: Standardize Project Folder Structure

## Status

Accepted

## Decision

Use this monorepo structure:

enterprise-workspace/
├── apps/
│ ├── web/
│ ├── api/
│ └── ai/
├── packages/
│ ├── ui/
│ ├── config/
│ ├── database/
│ ├── types/
│ ├── validation/
│ ├── utils/
│ ├── eslint-config/
│ └── tsconfig/
├── docker/
├── infra/
├── docs/
├── scripts/
└── .github/

## Application Responsibilities

### apps/web

Next.js frontend.

### apps/api

NestJS backend API.

### apps/ai

Python FastAPI AI service, added later.

## Package Responsibilities

### packages/ui

Shared UI components.

### packages/types

Shared TypeScript types.

### packages/validation

Shared validation schemas.

### packages/utils

Shared utility functions.

### packages/config

Shared configuration helpers.

### packages/database

Shared database helpers and Prisma-related code if needed.

### packages/eslint-config

Shared ESLint configuration.

### packages/tsconfig

Shared TypeScript configuration.

## Why

This structure keeps applications and shared libraries clearly separated.
