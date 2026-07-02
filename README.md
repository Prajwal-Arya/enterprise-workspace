## Developer Workflow

### Start local services

```bash
pnpm docker:up
```

### Start backend

```bash
pnpm dev:api
```

### Start frontend

```bash
pnpm dev:web
```

### Run checks

```bash
pnpm lint
pnpm build
pnpm check-format
```

### Useful aliases

After sourcing `scripts/dev-aliases.sh`:

```bash
ew
ewup
ewapidev
ewwebdev
ewlint
ewbuild
ewstatus
```

## Engineering Rituals

- Create an issue before starting a feature.
- Create a feature branch.
- Keep commits small.
- Use Conventional Commits.
- Update documentation after each feature.
- Write a milestone review after each sprint.
