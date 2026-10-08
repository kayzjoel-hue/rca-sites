# Non-RCA Cleanup Pass

## Goal

Stabilize the remaining repo portfolio outside the canonical RCA web repo so that each project family has a single active source of truth.

## Active repos to keep

### Kaizrug / brand
- `kaizrug-hq` — primary brand hub and command center
- `kaizrug-site` — active brand website
- `Kaizrug-os` — active concept / showroom / workshop
- `kaizrug-app` — active app
- `kaizrug-cv` — active CV / portfolio unless merged into kaizrug-hq

### Business / client work
- `booking-system` — active business booking system
- `house-of-maria` — active business site / marketplace
- `azizfitness` — active brand site
- `sandra-sis` — active personal/brand project

### Automation / tools
- `pipeline-pro` — active automation / operations tooling
- `hotel-task-cli` — active task automation / CLI utility

## Repos to archive or clarify

### Likely duplicates
- `joel-kaizire-cv` — duplicate of kaizrug-cv
- `kaizrug-capsule` — unclear; likely experimental or archive

### Legacy / experimental / templates
- `legacy-manifest` — legacy utility; archive unless still in actively used workflow
- `template-page` — template page; archive
- `turbo-broccoli` — template experiment; archive
- `portflio-edition` — portfolio variant; archive or merge into kaizrug-hq
- `Formspree` — integration snippet; archive unless still in use

## Recommended repo-family rules

### Rule 1: one canonical repo per project family
- `rca-sites` = canonical RCA web repo
- `kaizrug-hq` = canonical Kaizrug brand hub
- `booking-system` = booking business system
- `house-of-maria` = business site
- `pipeline-pro` = automation tool

### Rule 2: archive historical variants
If a repo uses the same brand name, same product concept, or repeated pages, it should either:
- be archived, or
- be merged into the canonical repo

### Rule 3: keep repo purpose visible
Every active repo should have a short README with:
- purpose
- status
- owner
- canonical relationship (if any)
- deployment target or workflow

## Clean-up execution checklist

1. Keep the active group as-is
2. Archive the duplicate CV and template repos
3. Clarify the purpose of `legacy-manifest`
4. Decide whether `kaizrug-cv` stays separate or becomes part of `kaizrug-hq`
5. Decide whether `kaizrug-app` and `Kaizrug-os` are separate products or concept work
6. Keep the automation repos in a dedicated tooling family

## Execution mode

This pass is about structure, naming, and housekeeping. The actual archive step should be done in the GitHub UI for each repo to avoid accidentally losing a working project.

## Suggested order of operations

1. Archive `joel-kaizire-cv`
2. Archive `kaizrug-capsule`
3. Archive `template-page`
4. Archive `turbo-broccoli`
5. Archive `Formspree`
6. Archive `portflio-edition` if not merged
7. Review `legacy-manifest` and decide active vs archive

## Final recommendation

The repo family is now mostly manageable. The remaining cleanup is low-risk and should be done in a controlled pass rather than all at once.

This pass reduces duplicate clutter while preserving historical work and keeping active projects clearly separated.
