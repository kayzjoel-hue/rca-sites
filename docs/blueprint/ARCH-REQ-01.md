# ARCH-REQ-01

## RCA upgrade runtime proof

The clean starter now exposes two static deployment routes:

- `/booking/` — Calendly event link followed by the AED 49 Stripe Payment Link.
- `/trade/` — Drive catalogue preview and a trade inquiry form intended for Formspree → Make → Notion KX-DB-11.

Before publishing, replace every `REPLACE_WITH_*` value in the page source with a verified production endpoint. Keep Stripe webhook logging mapped to KX-DB-10 so KX-LP-080 is not marked complete without a reconciled ledger entry. Keep a human approval step before any quote, itinerary, or trade commitment.
