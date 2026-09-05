# P1 — RCA Runtime Verification

**Status:** P1 EXECUTION GATE — live runtime verification pending
**Canonical web repository:** `kayzjoel-hue/rca-sites`

## Canonical boundary

`rca-sites` is the canonical public-web implementation for Royal Connect Africa. Other RCA repositories must not become competing canonical websites without an explicit governance decision.

## P1 acceptance gates

1. Confirm the intended production URL resolves publicly.
2. Confirm the deployed artifact corresponds to the current `main` implementation.
3. Test primary navigation and core calls-to-action.
4. Test lead/contact forms and confirm successful submission behavior.
5. Test any AI Concierge or draft-generation flow exposed by the public site.
6. Verify external links and WhatsApp/contact handoffs.
7. Capture timestamped runtime evidence.
8. Record any broken path as an execution issue rather than assuming deployment equals usage.

## Evidence boundary

A GitHub commit proves implementation history. A hosting status proves deployment/hosting state. Neither alone proves that users can successfully complete the intended RCA journey.

## Completion rule

RCA P1 is complete only after the canonical public runtime has been manually or programmatically exercised and the observed outcomes are recorded.