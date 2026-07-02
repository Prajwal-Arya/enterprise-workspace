# Enterprise Workspace aliases

alias ew='cd ~/Workspace/enterprise-workspace'
alias ewweb='cd ~/Workspace/enterprise-workspace/apps/web'
alias ewapi='cd ~/Workspace/enterprise-workspace/apps/api'

alias ewd='cd ~/Workspace/enterprise-workspace && pnpm dev'
alias ewwebdev='cd ~/Workspace/enterprise-workspace && pnpm dev:web'
alias ewapidev='cd ~/Workspace/enterprise-workspace && pnpm dev:api'

alias ewup='cd ~/Workspace/enterprise-workspace && pnpm docker:up'
alias ewdown='cd ~/Workspace/enterprise-workspace && pnpm docker:down'
alias ewlogs='cd ~/Workspace/enterprise-workspace && pnpm docker:logs'

alias ewlint='cd ~/Workspace/enterprise-workspace && pnpm lint'
alias ewbuild='cd ~/Workspace/enterprise-workspace && pnpm build'
alias ewstatus='cd ~/Workspace/enterprise-workspace && git status'
