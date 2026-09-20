# RCA v2 deployment checklist

## Local preflight

- [x] Root, booking, and trade HTML routes exist.
- [x] Static routes parse and return successfully from a local server.
- [x] API JavaScript parses.
- [x] Secrets and generated dependency folders are ignored.
- [ ] Replace the four `REPLACE_WITH_*` values with verified production endpoints.

## External integrations

### Booking

- [ ] Set the real Calendly event URL in `booking/index.html`.
- [ ] Set the real Stripe Payment Link in `booking/index.html`.
- [ ] Configure Stripe webhook delivery for successful payments.
- [ ] Map the webhook to KX-DB-10 with date, currency, gross, fees, net, reference, and reconciliation status.
- [ ] Test one successful payment in test mode before enabling live mode.

### Trade

- [ ] Set the verified Google Drive PDF file ID in `trade/index.html`.
- [ ] Set the approved Formspree endpoint in `trade/index.html`.
- [ ] Connect Formspree to Make → Notion KX-DB-11.
- [ ] Keep human approval before quotes, commitments, or shipment instructions.
- [ ] Submit one test inquiry and verify the complete record path.

### AI Concierge

- [ ] Add `GEMINI_API_KEY` only as a hosting-provider secret.
- [ ] Verify `GET /api/health` reports `apiKeyConfigured: true` without exposing the key.
- [ ] Test both `safari` and `trade` modes.
- [ ] Confirm invalid, oversized, upstream-error, and missing-key responses are visible to the caller.

## Git and hosting

- [ ] Review `git diff --cached` and confirm no `.env`, credentials, exports, or `node_modules`.
- [ ] Push the project root to the intended repository.
- [ ] Configure the hosting project with this folder as the deployment root.
- [ ] Verify `/`, `/booking/`, `/trade/`, and `/api/health` after deployment.
- [ ] Recheck the canonical URL and redirect/rewrite behavior.
