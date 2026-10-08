# Complete Repository Portfolio Audit

## Audit Date
2026-10-08

## Summary
- Total repos: 30
- Canonical repos: 1 (rca-sites)
- Active business repos: 7
- Active brand/portfolio repos: 5
- Automation/tools repos: 3
- Legacy/experimental repos: 14

---

## Family 1: Royal Connect Africa (RCA)

### Canonical
- `rca-sites` (HTML) — active canonical public website
  - Status: keep active
  - Purpose: RCA public web implementation
  - Rule: all RCA web work must happen here

### Archived/Legacy (11 repos)
- `rca-site` (HTML) — duplicate
- `rca-main` (HTML) — duplicate
- `rca-live-2026` (null) — variant
- `rca-upgrade` (HTML) — variant
- `rca-upgrade-edition` (null) — variant
- `r-c-a` (null) — old variant
- `Royal-Connect-Africa` (HTML) — original
- `royal-connect-africa-2026` (null) — variant
- `royal-connect-african` (null) — variant
- `royale-connect-african` (HTML) — variant
- `royalconnect` (null) — variant

Status: These are all duplicates/historical. Archive or freeze them.

---

## Family 2: Kaizrug Ecosystem (Brand/Portfolio)

### Active Portfolio Repos
1. `kaizrug-hq` (HTML) — Digital command center
   - Status: keep active
   - Purpose: brand hub / command center
   - Keep as primary portfolio

2. `kaizrug-site` (HTML) — brand website
   - Status: keep active
   - Purpose: brand landing page
   - Consider: merge with kaizrug-hq or keep separate by design

3. `Kaizrug-os` (HTML) — OS showroom and workshop
   - Status: keep active
   - Purpose: brand concept/platform
   - Consider: experimental or core product?

4. `kaizrug-app` (JavaScript) — app
   - Status: keep active
   - Purpose: web app or tool
   - Clarify: what does this app do?

5. `kaizrug-cv` (HTML) — CV/resume
   - Status: keep active or archive
   - Purpose: personal portfolio
   - Consider: merge into kaizrug-hq or keep separate

### Duplicate/Legacy Kaizrug Repos
- `joel-kaizire-cv` (null) — old CV variant
  - Status: archive (duplicate of kaizrug-cv)
- `kaizrug-capsule` (null) — experimental
  - Status: unclear; archive or clarify purpose

Recommendation: Keep kaizrug-hq as primary brand hub. Archive or consolidate the CV variants.

---

## Family 3: Business/Service Projects

### Active Business Repos
1. `booking-system` (TypeScript) — new business
   - Status: keep active
   - Purpose: booking/reservation system
   - Keep as active business project

2. `house-of-maria` (CSS) — Online Market
   - Status: keep active
   - Purpose: e-commerce or marketplace
   - Keep as active business project

3. `azizfitness` (Astro) — fitness brand
   - Status: keep active
   - Purpose: fitness/wellness brand site
   - Keep as active business project

4. `sandra-sis` (HTML) — chef journey
   - Status: keep active
   - Purpose: chef/culinary brand
   - Keep as active business project

Recommendation: These are separate client/business projects. Keep all active. Organize with clear README files and documentation.

---

## Family 4: Automation/Tools/Operations

### Active Tools Repos
1. `pipeline-pro` (TypeScript) — automation/operations
   - Status: keep active
   - Purpose: pipeline/deployment tool
   - Keep as primary automation tool

2. `hotel-task-cli` (Python) — task utility
   - Status: keep active
   - Purpose: CLI task management for hospitality
   - Keep as active automation tool

3. `legacy-manifest` (Python) — legacy system
   - Status: archive or clarify
   - Purpose: legacy utility or data manifest
   - Recommendation: archive unless actively used

Recommendation: Keep pipeline-pro and hotel-task-cli active. Archive legacy-manifest unless it's still actively used.

---

## Family 5: Templates/Experiments/Pages

### Low-Priority/Experimental
1. `template-page` (HTML) — template/test
   - Status: archive
   - Purpose: generic template for Pages
   - Recommendation: keep as archive reference

2. `turbo-broccoli` (HTML) — turbo templates
   - Status: archive
   - Purpose: template experiments
   - Recommendation: archive

3. `portflio-edition` (HTML) — portfolio variant
   - Status: archive or merge
   - Purpose: portfolio test/variant
   - Recommendation: merge into kaizrug-hq or archive

4. `Formspree` (null) — form endpoint
   - Status: archive
   - Purpose: form integration snippet
   - Recommendation: archive

Recommendation: Archive all template/experimental repos. They're not active business or core portfolio work.

---

## Recommended Clean Structure

### Keep Active (11 repos)
**RCA:**
- rca-sites

**Kaizrug Ecosystem:**
- kaizrug-hq
- kaizrug-site
- Kaizrug-os
- kaizrug-app
- kaizrug-cv

**Business Projects:**
- booking-system
- house-of-maria
- azizfitness
- sandra-sis

**Automation/Tools:**
- pipeline-pro
- hotel-task-cli

### Archive (19 repos)
**RCA duplicates (11):**
- rca-site, rca-main, rca-live-2026, rca-upgrade, rca-upgrade-edition, r-c-a, Royal-Connect-Africa, royal-connect-africa-2026, royal-connect-african, royale-connect-african, royalconnect

**Kaizrug/Portfolio duplicates (2):**
- joel-kaizire-cv, kaizrug-capsule

**Business/Experimental (6):**
- legacy-manifest, portflio-edition, template-page, turbo-broccoli, Formspree

---

## Next Actions

1. **Archive the 19 legacy/duplicate repos** — one by one via GitHub UI
2. **Add governance README to each active repo family** — document purpose and rules
3. **Create master index** — document the active portfolio structure
4. **Map automation connections** — show how pipeline-pro and hotel-task-cli connect to other repos

---

## Naming Convention (For Future)

Use this pattern to avoid future duplication:

- `rca-sites` — canonical RCA public website
- `kaizrug-hq` — canonical Kaizrug brand hub
- `booking-system` — business project (specific name)
- `pipeline-pro` — automation tool (specific name)

Rule: One canonical repo per project family. No variants or duplicates without explicit governance decision.

---

## Memory Layer

This document establishes the portfolio audit and organization plan for all 30 repos. Use this as the single source of truth for what is active, what is archived, and why.
