# BD Studio Constitution

Version: 1.0
Status: Active
Owner: BD Universe LLC
Founder: Borislav Dimitrov

---

# Mission

Build BD Studio into the operating system of the BD Universe ecosystem.

BD Studio exists to help founders design, build, organize, document, automate, and scale products through one unified workspace.

---

# Vision

One application.

Unlimited products.

BD Studio will become the development platform powering:

• xColor
• Custooom
• KartGenes
• Founder OS
• AI Agents
• Future BD Universe products

---

# Core Principles

1. Simplicity before complexity.

2. Build once.
Reuse forever.

3. Every feature must solve a real problem.

4. Architecture comes before implementation.

5. Never sacrifice maintainability for speed.

6. Every release must compile.

7. Every release must be shippable.

---

# Development Philosophy

Small releases.

Small files.

Single responsibility.

Professional quality.

---

# Folder Structure

apps/

bd-studio/

assets/

js/

config.js

kernel.js

navigation.js

repository.js

views.js

dashboard.js

explorer.js

viewer.js

index.html

app.css

app.js

---

# Responsibilities

app.js

Application bootstrap only.

Never contains business logic.

---

config.js

Single source of truth.

Stores:

Application name

Version

Environment

Theme

Company

---

kernel.js

Application heart.

Responsible for:

Initialization

Application State

Module Registry

Services

Events

Future AI communication

---

repository.js

Repository data.

Never renders UI.

---

views.js

Application pages.

Contains HTML templates only.

---

navigation.js

Sidebar navigation.

Routing.

Button activation.

---

dashboard.js

Dashboard rendering.

Dashboard logic only.

---

explorer.js

Repository explorer.

Folder tree.

Inspector.

---

viewer.js

Displays:

Markdown

Text

Documentation

Blueprints

Future code preview.

---

# Maximum File Size

JavaScript

150 lines target

250 maximum

CSS

300 lines target

HTML

200 lines target

Functions

40 lines target

If exceeded:

Create a new module.

---

# Coding Standards

Use ES Modules.

Never use global variables.

Never duplicate logic.

Always export reusable functions.

Always write descriptive names.

---

# UI Principles

Dark first.

Desktop first.

Minimal.

Professional.

Fast.

No unnecessary animations.

---

# Release Process

Every release contains:

Goal

Files

Actions

Test

Commit

Next Release

Nothing else.

---

# Semantic Versioning

Major

2.0.0

Architecture changes.

Minor

1.3.0

New feature.

Patch

1.3.1

Bug fixes.

---

# Commit Convention

feat(...)

New feature

refactor(...)

Architecture

fix(...)

Bug

release(...)

Stable release

docs(...)

Documentation

---

# Testing Rules

Every release must pass:

Application starts

No console errors

Navigation works

Kernel initializes

Explorer works

Dashboard works

Status bar updates

---

# Architecture Rule

Every module owns exactly one responsibility.

No module may directly depend on another module unless through the Kernel.

The Kernel becomes the communication center.

---

# AI Integration

Future AI Agents will communicate through Kernel Services.

No AI Agent may modify application state directly.

---

# Long-Term Modules

Workspace

Explorer

Viewer

Packages

Blueprints

Documentation

Knowledge

Marketplace

Founder OS

AI

Settings

Deployment

---

# Success Metric

Every new release should make BD Studio more useful than yesterday.

Not more complicated.

---

# Definition of Done

A release is complete only when:

The application runs.

The code is clean.

The feature works.

The commit is created.

The release is documented.

---

# Motto

Build Once.
Improve Forever.

---

End of Constitution