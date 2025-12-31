# AGENTS.md - LocalOps Developer Documentation

This file provides instructions for AI agents working on the LocalOps Developer Documentation site.

## Project Overview

This is a Mintlify-based documentation site for LocalOps, a cloud-native deployment platform. The site is hosted at <https://docs.localops.co> and contains comprehensive documentation for developers using the LocalOps platform.

## Development Environment

- **Framework**: Mintlify (static site generator for documentation)
- **Content Format**: MDX (Markdown + JSX)
- **Theme**: Almond theme with green color scheme (#16A34A primary)
- **Hosting**: Automatic deployment on push to main branch via GitHub App

## Build/Lint/Test Commands

### Development Server

```bash
mintlify dev
```

Starts the development server with hot reloading. Must be run from directory containing `docs.json`.

### Troubleshooting Build Issues

```bash
mintlify install
```

Reinstalls dependencies if `mintlify dev` fails.

### No Traditional Testing

- This is a documentation site with no unit tests
- No linting commands (Mintlify handles validation internally)
- No build artifacts to test - site is static

### Single File Validation

- MDX syntax is validated automatically by Mintlify
- Check individual files by opening in development server
- Navigation structure validated via `docs.json`

## Code Style Guidelines

### File Structure and Naming

#### MDX Files

- All documentation files use `.mdx` extension
- File names use kebab-case: `custom-domain.mdx`, `ops-json.mdx`
- Directory structure mirrors navigation hierarchy in `docs.json`

#### Frontmatter (Required)

Every MDX file must start with frontmatter:

```yaml
---
title: Page Title
description: Brief description for SEO and navigation
---
```

#### Directory Organization

- `accounts/` - Cloud provider connection guides
- `environment/` - Infrastructure and service management
- `guides/` - Language and framework tutorials
- `use-cases/` - Deployment scenarios
- `cli/` - Command-line interface docs
- `team/` - User management
- `troubleshoot/` - Issue resolution
- `changelogs/` - Product updates
- `bring-your-helm-charts/` - Advanced Helm features

### Formatting and Style

#### Prettier Configuration (.prettierrc.yml)

```yaml
printWidth: 120
proseWrap: always
singleQuote: true
```

#### Markdown Conventions

- Use single quotes in code examples
- Maximum line length: 120 characters
- Always wrap prose (paragraphs) in markdown
- Use ATX-style headers: `# ## ###`

#### Code Blocks

- Use language-specific syntax highlighting
- JSON code blocks for configuration examples
- Shell commands in bash blocks
- Include language identifier: ```json,```bash, ```javascript

### MDX Components and Syntax

#### Custom Components

Use Mintlify's built-in MDX components:

- `<Note>` - Informational callouts
- `<Warning>` - Important warnings
- `<Tip>` - Helpful tips
- `<Info>` - General information
- `<Steps>` - Numbered step lists
- `<Step>` - Individual steps with titles and icons

#### Step Components

```jsx
<Steps>
  <Step title="Step Title" icon="icon-name">
    Step content here
  </Step>
</Steps>
```

#### Link Formatting

- Internal links use relative paths without `.mdx` extension
- External links use full URLs
- Reference links for cross-references: `[text](/path/to/page)`

### Content Guidelines

#### Writing Style

- Focus on multi-cloud support (AWS, GCP, Azure, on-premises)
- Emphasize declarative configuration via `ops.json`
- Include practical examples with complete configurations
- Explain features across deployment modes (SaaS, BYOC, self-hosted, ephemeral)
- Highlight security by default (encryption, isolation, least-privilege)
- Use active voice and imperative mood for instructions

#### Technical Content

- `ops.json` is central to the platform - document it extensively
- Cover all deployment modes: Public SaaS, BYOC, Self-hosted, Dedicated, Ephemeral
- Document cloud-specific features and limitations
- Include troubleshooting sections for common issues

#### Navigation and Structure

- Update `docs.json` when adding new pages
- Follow hierarchical organization in navigation
- Use consistent grouping and iconography
- Ensure breadcrumb navigation works correctly

### Error Handling and Validation

#### Common Issues

- Frontmatter validation errors - ensure title and description present
- Broken internal links - use relative paths without extensions
- Invalid MDX syntax - test in development server
- Navigation structure errors - validate `docs.json` syntax

#### Quality Checks

- All links must be functional
- Code examples must be syntactically correct
- Screenshots/images must have alt text and proper paths
- Cross-references must point to existing pages

### Git Workflow

#### Commits

- Changes pushed to `main` branch deploy automatically
- No manual deployment commands needed
- Follow conventional commit messages
- Test changes locally with `mintlify dev` before pushing

#### File Conventions

- Never commit secrets or sensitive information
- All images go in appropriate subdirectories under `images/`
- Update navigation in `docs.json` for new pages
- Format all files with Prettier before committing

### VS Code Configuration

#### Recommended Extensions (.vscode/extensions.json)

```json
{
  "recommendations": ["esbenp.prettier-vscode"]
}
```

#### Workspace Settings (.vscode/settings.json)

```json
{
  "[mdx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true
}
```

### Analytics and Integrations

#### PostHog Analytics

- API Key: phc_T54pQDyo3sFjCz7a3fm2XCCoDAt7iA0l2KM9qBKauF3
- API Host: <https://watermelon.localops.co>

#### Google Tag Manager

- Tag ID: GTM-PWH8VTN6

#### Chat Widget

- Chatbase ID: nMT5Xl30euyYsq2qhZzVm

### Deployment

#### Automatic Deployment

- Changes to `main` branch deploy automatically via GitHub App
- No manual intervention required
- Production URL: <https://docs.localops.co>

#### Preview Changes

- Use `mintlify dev` for local preview
- Test all navigation and links
- Verify on multiple screen sizes

### Security Considerations

- Never include real API keys or credentials in documentation
- Use placeholder values in examples
- Document security best practices prominently
- Highlight LocalOps security features (encryption, isolation, etc.)

### Performance and SEO

- Keep page load times optimal
- Use descriptive titles and descriptions for SEO
- Include relevant keywords naturally
- Optimize images for web delivery

This AGENTS.md file should be updated whenever development workflows, coding standards, or project structure changes.</content>

