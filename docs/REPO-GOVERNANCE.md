# RCA Repository Governance

## Canonical source of truth

This repository, `kayzjoel-hue/rca-sites`, is the canonical public website implementation for Royal Connect Africa (RCA).

The public-web function is owned here. Any future RCA website, landing page, public brand page, or web-facing route must be aligned to this repository before promotion to production.

## Governance rule

- `rca-sites` is the only active public website source of truth.
- Historical, duplicate, or variant RCA repositories must not be used as active production websites.
- Any new RCA web feature must begin here and be reviewed before deployment.

## Archive policy

The following repositories are duplicate or historical variants of the same RCA public-web work and should be archived or explicitly assigned a different function:

- `kayzjoel-hue/rca-site`
- `kayzjoel-hue/rca-main`
- `kayzjoel-hue/rca-live-2026`
- `kayzjoel-hue/rca-upgrade`
- `kayzjoel-hue/rca-upgrade-edition`
- `kayzjoel-hue/r-c-a`
- `kayzjoel-hue/Royal-Connect-Africa`
- `kayzjoel-hue/royal-connect-africa-2026`
- `kayzjoel-hue/royal-connect-african`
- `kayzjoel-hue/royale-connect-african`
- `kayzjoel-hue/royalconnect`

## Allowed repo states

- `canonical`: active source of truth
- `archive`: historical/duplicate repo retained for reference only
- `separate`: a repo with a distinct non-public-web purpose

## Naming rule

Use one canonical naming pattern per project family:

- `rca-sites` = canonical public website
- `rca-backend` = separate backend service (if created)
- `rca-booking` = separate booking system (if created)
- `rca-operations` = internal tools or automation

## Decision log

This document establishes the current repo decision for RCA and protects against drift caused by duplicate repo creation.
