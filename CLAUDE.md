# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **LocalOps Developer Documentation** site, built with **Mintlify**. LocalOps is a cloud-native deployment platform that enables developers to offer SaaS, BYOC (Bring Your Own Cloud), On-Prem, and Self-hosted versions of their services.

The documentation is hosted at: https://docs.localops.co

## Development Commands

### Preview Documentation Locally

```bash
# Install Mintlify CLI globally
npm i -g mintlify

# Run development server (must be in directory with docs.json)
mintlify dev
```

### Troubleshooting

```bash
# If mintlify dev fails, reinstall dependencies
mintlify install
```

### Publishing Changes

Changes pushed to the `main` branch are automatically deployed to production via GitHub App integration. No manual deployment commands needed.

## Architecture

### Documentation Structure

The site is organized around a multi-tab navigation structure defined in `docs.json`:

**Main Documentation Tab:**
- **Start here**: Entry points (index, how it works, support, compatibility, security)
- **Usecases**: Deployment modes (Public SaaS, BYOC, Self-hosted, Dedicated, Ephemeral)
- **Guides**: Language-specific tutorials (Node.js, Python, Go) and SPA frameworks (React, Vue, Angular, Next.js, Ember)
- **Connections**: Cloud accounts (AWS, GCP, Azure) and GitHub integration
- **Environments**: Infrastructure management, monitoring, and resources
- **Services**: Core deployment units (web, workers, jobs, cronjobs) and AWS services (S3, RDS, ElastiCache, SQS, SNS)
- **No Access Delivery**: License token management
- **CLI**: Platform installation and usage across macOS, Linux, Windows
- **Team**: User management, roles, audit logs
- **Troubleshooting**: Common issues and solutions
- **Bring your helm charts (soon)**: Advanced Helm chart deployment features (in development)

**Changelog Tab:**
- Release notes for 2024 and 2025

### Key Configuration Files

- **docs.json** (280+ lines): Primary Mintlify configuration
  - Navigation structure (tabs, groups, hierarchical pages)
  - Theme: "almond" with green color scheme (primary: #16A34A)
  - Logo paths for light/dark modes
  - Analytics integrations (PostHog, Intercom, Google Tag Manager)
  - Footer social links and navbar configuration

- **.prettierrc.yml**: Code formatting rules
  - Print width: 120 characters
  - Prose wrap: always
  - Single quotes: enabled

- **.vscode/settings.json**: Workspace settings
  - MDX formatter: Prettier
  - Format on save: enabled

### Content Organization

All documentation is written in **MDX format** (Markdown + JSX), allowing embedded React components. Files are organized by feature area:

- **accounts/** - Cloud provider connection guides
- **environment/** - Core infrastructure docs, services, monitoring, infra resources
- **guides/** - Language and framework-specific tutorials
- **use-cases/** - Real-world deployment scenarios
- **cli/** - Command-line interface docs
- **team/** - User management
- **troubleshoot/** - Issue resolution
- **bring-your-helm-charts/** - Advanced Helm features (in development)
- **changelogs/** - Product updates
- **no-access-delivery/** - License management
- **snippets/** - Reusable code snippets
- **images/** - Static assets (39 image files)
- **logo/** - Logo assets for light/dark themes

### Core Concepts

**ops.json Configuration:**
The documentation extensively covers `ops.json`, a declarative configuration file that users add to their repositories to define:
- Init jobs (database migrations, service dependencies)
- Health checks (shell, HTTP, TCP, gRPC)
- Cloud resource dependencies (S3, RDS, ElastiCache, SQS, SNS)
- Ephemeral preview environment dependencies (databases, caches, queues, workers)
- Processes (workers, sidecar containers)
- Cron jobs

**Deployment Modes:**
LocalOps supports multiple deployment patterns:
1. **Public SaaS** - Deploy in your own cloud for all users
2. **Single Tenant SaaS** - Dedicated clusters for specific customers
3. **BYOC** - Customer brings their own cloud account
4. **Self-hosted/On-Prem** - Kubernetes Helm charts for customer infrastructure
5. **Ephemeral** - PR preview environments

**Cloud Providers:**
Multi-cloud support with specific documentation for AWS, GCP, Azure, and on-premises deployments.

## Writing Documentation

### MDX File Structure

Each MDX file starts with frontmatter:

```mdx
---
title: Page Title
description: Brief description for SEO and navigation
---

## Content starts here
```

### Navigation Updates

When adding new pages, update `docs.json` navigation structure:

```json
{
  "navigation": {
    "tabs": [
      {
        "tab": "Documentation",
        "groups": [
          {
            "group": "Group Name",
            "icon": "icon-name",
            "pages": [
              "path/to/page"
            ]
          }
        ]
      }
    ]
  }
}
```

### Internal Links

Use relative paths without file extensions:
```mdx
[Link text](/environment/services/ops-json)
```

### Code Formatting

Follow Prettier configuration:
- Maximum line length: 120 characters
- Always wrap prose (markdown paragraphs)
- Use single quotes in code examples

### Mintlify Components

The documentation uses Mintlify-specific MDX components:

- `<Note>` - Informational callouts
- `<Warning>` - Important warnings
- Code blocks with language syntax highlighting

## Content Guidelines

- **Focus on multi-cloud**: Document features for AWS, GCP, Azure, and on-premises
- **Emphasize declarative configuration**: ops.json is central to the platform
- **Include practical examples**: Show complete ops.json configurations
- **Cover deployment modes**: Explain how features work across SaaS, BYOC, and self-hosted
- **Security by default**: Highlight production-grade security configurations (encryption at rest, network isolation, least-privilege access)
- **Ephemeral environments**: Document how features differ in PR preview environments vs production

## Deployment Workflow

1. Make documentation changes in MDX files
2. Test locally with `mintlify dev`
3. Commit and push to repository
4. GitHub App automatically deploys to production on merge to `main`

## Analytics and Integrations

The site includes:
- **PostHog** - Product analytics (custom host: watermelon.localops.co)
- **Chatbase** - AI-powered customer support chat widget (ID: nMT5Xl30euyYsq2qhZzVm)
- **Google Tag Manager** - Tracking (GTM-PWH8VTN6)
