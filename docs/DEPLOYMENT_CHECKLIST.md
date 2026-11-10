# RCA deployment and release gates

## Current Phase 1 boundary (2026-11-10)

- Phase 1 work is isolated to `kaizrug/rca-phase1-preview-2026-11-10`.
- The homepage now provides an accessible mobile menu and an honest enquiry path instead of claiming an active AI planner.
- Booking and trade pages explicitly state that online booking, payment, catalogue embed, and automated trade form are not configured.
- The site does not have verified Formspree → Make → KX-DB-15 lead routing.
- No external submissions, payment transactions, or production deployment are authorized in this phase.
- Do not merge this branch or promote a production deployment without separate human authorization.
- PR #4 (RCA Atlas) is independent and must remain untouched.

## Preview validation checklist

- [ ] Confirm preview deployment exists for the exact PR head SHA.
- [ ] Verify homepage, `/booking/`, and `/trade/` return successfully.
- [ ] Test navigation at 320, 375, 390, 430, 768, 1024, and desktop widths.
- [ ] Test keyboard focus, menu expanded state, Escape close, and link close.
- [ ] Test reduced-motion preference.
- [ ] Check no horizontal overflow, clipped controls, or inaccessible contrast.
- [ ] Confirm the AI planner is not presented as functional.
- [ ] Confirm no placeholder Calendly, Stripe, Drive, or Formspree URLs remain actionable.
- [ ] Review public service copy against the current RCA Services Catalog.
- [ ] Check forms without submitting externally; a separately authorized test is required to verify delivery.
- [ ] Check browser console and network errors.
- [ ] Record preview URL, commit SHA, test date, viewport, and evidence in KX-DB-10.

## Integration gates — not authorized in Phase 1

- [ ] Obtain separate approval before configuring or testing Formspree.
- [ ] Obtain separate approval before any Make/Zapier workflow changes.
- [ ] Verify KX-DB-11 state and permissions before considering any integration.
- [ ] Add human review and duplicate prevention before any KX-DB-15 write.
- [ ] Obtain separate approval for AI backend credentials, endpoints, and data handling.
- [ ] Obtain separate approval for Calendly, Stripe, payment, or webhook configuration.
- [ ] Verify supplier, travel, pricing, legal, and delivery claims before publishing them.

## Production release — not authorized in Phase 1

- [ ] Human approval to merge.
- [ ] Human approval to deploy production.
- [ ] Confirm Cloudflare production project, branch, build settings, and canonical domain.
- [ ] Verify deployed SHA equals the approved main commit.
- [ ] Run post-deploy smoke tests and retain evidence.
- [ ] Update source-of-truth records only after independent verification.
