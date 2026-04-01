# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **LocalOps Developer Documentation** site, built with **Mintlify**. LocalOps is a cloud-native deployment
platform that enables developers to offer SaaS, BYOC (Bring Your Own Cloud), On-Prem, and Self-hosted versions of their
services.

Documentation site: https://docs.localops.co

## Development Commands

```bash
# Install Mintlify CLI (one-time)
npm i -g mintlify

# Start development server (run from directory with docs.json)
mintlify dev

# If dev server fails, reinstall dependencies
mintlify install
```

**Deployment**: Changes pushed to `main` are automatically deployed via GitHub App.

## Architecture

### Navigation Structure (docs.json)

The site has two main tabs:

1. **Documentation Tab**: Guides, services, environments, CLI, troubleshooting
2. **API Reference Tab**: OpenAPI-based interactive API documentation with `openapi.json`

All content is **MDX format** (Markdown + JSX). Directory structure mirrors the navigation hierarchy in `docs.json`.

### Core Platform Concepts

**ops.json** is the central declarative configuration file users add to their repos. It defines:

- Init jobs, health checks (shell/HTTP/TCP/gRPC), cloud resources (S3, RDS, ElastiCache, SQS, SNS)
- Ephemeral environment dependencies, workers, cron jobs

**Deployment Modes**: Public SaaS, Single Tenant SaaS, BYOC, Self-hosted/On-Prem, Ephemeral (PR previews)

**Cloud Providers**: AWS, GCP, Azure, on-premises

## Writing Documentation

### MDX File Requirements

Every MDX file must have frontmatter:

```yaml
---
title: Page Title
description: Brief description for SEO
---
```

### Key Conventions

- **Internal links**: Use relative paths without extensions: `[text](/environment/services/ops-json)`
- **Navigation**: Update `docs.json` when adding new pages
- **Formatting**: Oxfmt enforces 120 char lines, prose wrap, single quotes

### Mintlify Components

```jsx
<Note>Informational callout</Note>
<Warning>Important warning</Warning>
<Tip>Helpful tip</Tip>
<Steps>
  <Step title="Step Title" icon="icon-name">Content</Step>
</Steps>
```

## Content Guidelines

- Focus on multi-cloud (AWS, GCP, Azure, on-prem)
- Emphasize `ops.json` declarative configuration with complete examples
- Cover how features work across all deployment modes
- Document differences between ephemeral (PR preview) and production environments
