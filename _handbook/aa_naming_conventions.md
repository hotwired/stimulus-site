---
slug: /naming-conventions
section: appendix
prefix: A
---

# Naming Conventions

Stimulus adopts a philosophy of _convention over configuration_ concerning where things go and how they should be named. These conventions are designed to help you work faster by reducing the number of decisions you need to make when writing a controller.

Familiarize yourself with the guidelines here…

## Filenames and Identifiers

- put files in a directory called controllers
- use underscores or dashes, whichever you prefer
- Stimulus converts filenames to dashes for identifiers
- identifiers use kebab-case because HTML attributes use kebab-case

## Targets and Actions

- targets map directly to properties
- actions map directly to methods
- use camelCase for these because they connect directly to javascript names
