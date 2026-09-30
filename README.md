# AnchorPath Insurance Services website

Education-first Medicare website for Chris Archibald and Helga Saito-Archibald, built from the
*Website Strategy & Requirements Document* (v1.4). React + Vite, deployed on Vercel.

```bash
npm install
npm run dev      # full site at http://localhost:5173
npm run lint
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Identity, licenses, address, phone, TPMO counts, Medigap flag | `src/site.config.js` |
| Page content records (classification, review dates) | `src/content/pages.js` |
| Form consent text/version, sensitive-data warning, options | `src/content/consent.js` |
| Official resource links (check quarterly) | `src/content/links.js` |
| Pages | `src/routes/*.jsx` |
| Form endpoint (interim lead routing) | `api/schedule-request.js` |

## Launch gating

Production (`VERCEL_ENV=production`) shows a "Coming soon" page until `VITE_PUBLIC_LAUNCH=true` is set.
Local dev and Vercel preview deployments always show the full site for review.

A launch build fails until the required placeholders are resolved: the principal place of business
(city and state only; the street address is never published), privacy effective date and retention period, accessibility review date, a fact-check date for
every page in `src/content/pages.js`, and `public/robots.txt` no longer blocking crawlers.

## Compliance switches

- **TPMO disclaimer**: the exact text lives in `tpmoDisclaimer` in `src/site.config.js` and renders in the
  footer, on Licensing & Disclosures, on Schedule, and in the FAQ. Never paraphrase it; change it only to
  FMO/compliance-approved wording.
- **Medigap notice**: set `advertisesMedigap: true` only when Medicare Supplement advertising is approved.
- **Consent wording**: any change to `CONSENT_TEXT` must bump `CONSENT_VERSION`. The API rejects
  submissions made against an older version.

## Form routing (interim)

`/api/schedule-request` validates server-side (shared rules in `src/content/validateLead.js`), filters spam
with a honeypot and a minimum fill time, and emails the request plus consent evidence to the agents'
own mailboxes through Resend. Set `RESEND_API_KEY`, `LEAD_TO_EMAIL` and `FROM_EMAIL` in Vercel. Replace
this with the FMO-approved CRM once it is selected (FR-05).
