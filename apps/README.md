# Applications

Version: 1.0.0

Status: Active

Owner: BD Universe LLC

---

# Overview

The **Applications** directory contains deployable software products built on the BD Universe platform.

Unlike reusable libraries and Blueprints, applications contain business-specific content, branding, configuration, and user experiences.

Applications assemble the reusable layers provided by the platform into complete products.

```
BDOS
    ↓
BDDS
    ↓
BDUI
    ↓
Blueprints
    ↓
Application
```

---

# Purpose

Applications transform reusable systems into real products.

Each application represents a unique business while sharing the same engineering foundation.

---

# Current Applications

## BD Universe

The flagship application of the BD Universe platform.

Purpose:

- Public website
- Platform documentation
- Design system showcase
- Founder knowledge
- BrandOS gateway

---

## BDUI Lab

Internal development environment for the BDUI Component Library.

Purpose:

- Component development
- Component testing
- Documentation
- Accessibility review
- Engineering validation

---

# Planned Applications

- xColor
- WrapGenes
- KartGenes
- Onnento
- Client Workspace
- Founder Academy

---

# Responsibilities

Applications may include:

- Business logic
- Branding
- Page layouts
- Content
- Configuration
- Assets
- Routing
- Deployment settings

Applications should **not** duplicate reusable code that belongs in BDUI or BDDS.

---

# Relationship to the Platform

Applications consume:

- BDOS
- BDDS
- BDUI Components
- Blueprints

Applications may contribute feedback that improves the shared platform, but reusable improvements should always be implemented in the platform itself rather than copied into individual applications.

---

# Guiding Principle

> Build reusable systems once.

> Assemble applications many times.

---

© 2026 BD Universe LLC

Build Better.
Learn Forever.