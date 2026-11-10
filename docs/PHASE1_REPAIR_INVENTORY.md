# RCA Phase 1 — Daily Repair Inventory

**Loop:** KX-LP-093  
**Authorization:** User-approved Phase 1 preview-only scope, 2026-11-10  
**Branch:** `kaizrug/rca-phase1-preview-2026-11-10`  
**Base:** `main` at branch creation  
**Release boundary:** Preview PR only. No merge, production deploy, live integration, or schema/permission change.

## Work inventory

| Priority | Area | Phase 1 change | State | Evidence / remaining gate |
|---|---|---|---|---|
| P0 | Mobile navigation | Add accessible mobile menu, close-on-link and Escape behavior, expanded state | Implemented in source | Browser test at 320/375/390/430 px still required |
| P0 | AI concierge | Remove false AI capability and replace with honest contact route | Implemented in source | Confirm no stale AI entry points remain |
| P0 | Booking | Remove placeholder Calendly and Stripe actions; state that online booking/payment are unavailable | Implemented in source | Confirm route renders in preview |
| P0 | Trade | Remove placeholder Drive embed and nonfunctional Formspree action; direct enquiry route only | Implemented in source | Confirm route renders in preview |
| P1 | Catalogue truth | Align service and journey copy to current RCA Services Catalog; mark subscription as coming soon | Implemented in source | Owner to confirm public wording and service readiness |
| P1 | Claims | Remove unsubstantiated traffic/summit and 100% direct-trade metrics | Implemented in source | Review remaining public claims before release |
| P1 | Form accessibility | Associate labels to fields at runtime; add live status semantics | Implemented in source | Test keyboard, screen reader, validation and actual delivery separately |
| P1 | Response promise | Remove unsupported 24-hour response promise | Implemented in source | Confirm remaining copy |
| P2 | Motion | Add reduced-motion handling for reveal and carousel effects | Implemented in source | Browser preference test required |
| P2 | Images | Add lazy loading to non-hero images and async decoding | Implemented in source | Measure actual image payload and LCP; rights/source review remains |
| P2 | Metadata / SEO | Reconcile canonical URL, sitemap, robots, social metadata | Not started | Confirm Cloudflare canonical and SEO policy |

## Daily operating loop

1. **Detect:** inspect user reports, preview runtime, route health, console errors, accessibility, and current source changes.
2. **Capture:** add a dated evidence note to this inventory and KX-DB-10; do not create duplicate loops.
3. **Triage:** assign P0/P1/P2 and classify each finding VERIFIED / NOT REPRODUCED / INFERRED / BLOCKED.
4. **Repair:** smallest change on this isolated branch; preserve current brand and existing architecture.
5. **Validate:** source checks first, then viewport, keyboard, form, route, performance, and claims checks.
6. **Preview:** inspect preview URL and record commit SHA + screenshots/logs where available.
7. **Authorize release:** human approval required before merge or production promotion.
8. **Verify outcome:** independently confirm deployed SHA and real-world behavior; do not mark Done from code presence alone.

## Validation gates

- [ ] HTML parses for homepage, booking, and trade routes.
- [ ] Inline JavaScript parses and no console errors occur.
- [ ] Mobile menu works with touch, keyboard, Escape, and screen readers.
- [ ] Layout has no horizontal overflow at 320, 375, 390, 430, 768, 1024, and desktop widths.
- [ ] Reduced-motion preference removes nonessential movement.
- [ ] Contact/trade forms are keyboard-usable and expose validation/error/success states.
- [ ] No external form submission is sent without a separately approved test.
- [ ] Booking and trade routes contain no actionable placeholder URLs or fake payment/form controls.
- [ ] Every public offer and claim matches current source-of-truth evidence.
- [ ] Images have appropriate dimensions, compression, rights/source provenance, and measured loading behavior.
- [ ] Preview deployment is confirmed and matches the reviewed PR head SHA.
- [ ] Production deployment remains untouched.

## Governance and dependencies

- KX-DB-10 is the work authority; KX-DB-11 governs integration runtime state.
- Formspree, Make, Zapier, Stripe, AI backend, and automated lead sync remain OFF / unconfigured / unverified.
- KX-DB-15 is not automatically written by this site in Phase 1.
- Existing PR #4 (RCA Atlas) remains separate and untouched.
- No new database, repository, schema, or permission changes are authorized.
- Phase 1 does not include production deployment or merge authority.
