# AnchorPath Insurance Services: website reference for Claude

Read this first in any session about this site. It describes how the site is built and the rules it operates under. It also records decisions the owner has already made; don't reopen these unless the owner asks.

## The business and the owner

- **AnchorPath Insurance Services** is an independent, California-licensed Medicare insurance agency at anchorpathinsurance.com.
- **Agents:** Chris (Christopher Archibald, CA license #4543885) and Helga (Helga Saito-Archibald, CA license #4549646).
- **Contact:** (408) 365-4412, Monday–Friday, 9 a.m.–5 p.m. Pacific. chris@anchorpathinsurance.com and helga@anchorpathinsurance.com.
- **Response promise:** "within one business day".
- **Location:** San Jose, California. **Never publish a street address**, on the site or in any document linked from it.
- **FMO:** Spark Advisors. CMS compliance wording comes from them.
- **Audience:** Medicare beneficiaries 65 and older, many with low vision, reduced dexterity or hearing loss. Treat usability for older adults as a priority.
- **Working with the owner, Chris:** he isn't a developer. Explain things in plain language. Act as a candid, independent advisor: give a recommendation, flag risks and weak assumptions, and don't just agree. Stop at the approval points he sets.

## Architecture (summary)

```
Browser ──▶ Vercel CDN (static React app) ──▶ /api/schedule-request (serverless) ──▶ Resend ──▶ lead inbox
GitHub repo ──push──▶ Vercel builds: main = production, other branches = preview URLs
```

| Layer | Technology |
|---|---|
| UI | React 19 single-page app; React Router v6 (`BrowserRouter`); `react-helmet-async` for page titles and meta tags |
| Build | Vite 8. `vite.config.js` defines `__SITE_LIVE__` and runs the launch guard |
| Styling | One plain stylesheet, `src/styles.css`, with brand tokens on `:root`. **No Tailwind** (only the old `main`-branch Coming Soon code uses it) |
| Fonts | Self-hosted via `@fontsource`: Atkinson Hyperlegible (body, 18px base) and Source Serif 4 (headings). No Google Fonts |
| Hosting | Vercel. Team "archiesvibeprojects", project `anchorpath-insurance` (`prj_Yx2tHB3xBXHl0OWcSmvJKrd0ScBh`, team `team_zbmBAjF0OmQMcVch9EpbWDSm`) |
| Form backend | `api/schedule-request.js`, a Vercel serverless function (see "Contact form" below) |
| Email delivery | Resend, sending from the verified domain anchorpathinsurance.com |
| Analytics | `@vercel/analytics`: cookieless page views plus events (CTA, call clicks, form start/complete/error) |
| Source control | GitHub `cjarchibald-sys/anchorpath-insurance` |
| Database / CMS | **None.** Content lives in code, and leads exist only as emails |

`vercel.json` sets `trailingSlash: true`, redirects (`/about`, `/contact`, `/medicare-plans`), the single-page-app rewrite (everything except `/api/` goes to `index.html`) and security headers (HSTS, CSP, `frame-ancestors 'none'`, Permissions-Policy).

## File map

- `src/site.config.js`: **the single source of truth** for identity, contact details, license numbers, the TPMO disclaimer, privacy facts and `accessibilityReviewed`. Change these values here and nowhere else.
- `src/content/pages.js`: per-page record with a `reviewed` date (the owner's fact-check). It's internal only and never shown on the site.
- `src/content/consent.js`: consent text, `CONSENT_VERSION`, form options and warnings. Bump `CONSENT_VERSION` whenever the wording changes.
- `src/content/validateLead.js`: form validation, shared by the browser form and the server function.
- `src/content/links.js`: official external links (Medicare, SSA, HICAP, CDI and others).
- `src/components/`:
  - `SiteHeader.jsx`: menus and drop-downs.
  - `SiteFooter.jsx`: holds `LegalIdentity` (the Cal. Ins. Code §1726 block) and `TpmoDisclaimer`.
  - `ui.jsx`: `ExtLink`, `TelLink`, `CtaLink`, `PageHero`, `ReviewNote`, `CtaBand` and others.
  - `EduPage.jsx`: the shared educational page shell.
  - `Layout.jsx`: skip link, and moves focus to the page heading on each route change.
  - `Diagrams.jsx`, `Seo.jsx`, `Breadcrumbs.jsx`, `BackToTop.jsx`.
- `src/routes/`: one file per page.
  - Home, MedicareBasics, CoverageChoices, Turning65, RetiringAfter65, AlreadyOnMedicare, CaliforniaResources.
  - Faq, Resources, MeetUs, Schedule.
  - LicensingDisclosures, Privacy, Accessibility, Terms, NotFound.
  - Prelaunch: the Coming Soon page shown in production before launch.
- `public/`: photos (`images/`), logos (`logo/`), favicons, `robots.txt`, `sitemap.xml`.
- `ACCESSIBILITY_AUDIT.md`: WCAG 2.1 AA audit, its findings and the post-fix results.

## Launch gating

- **`__SITE_LIVE__`** is true locally and on Vercel previews. In production (`VERCEL_ENV=production`) it is false unless `VITE_PUBLIC_LAUNCH=true`. When it's false, the app renders only `Prelaunch`.
- **The launch guard** (in `vite.config.js`) makes a build with `VITE_PUBLIC_LAUNCH=true` fail while any of these is unresolved:
  - `principalPlaceOfBusiness` or `tpmoDisclaimer` in `site.config.js`;
  - `privacy.effectiveDate` or `privacy.leadRetention`;
  - `accessibilityReviewed`;
  - any page's `reviewed` date in `pages.js`;
  - `public/robots.txt` still containing `Disallow: /`.
- **Launch steps (planned for October 5, 2026), done only on the owner's explicit go-ahead:**
  1. Merge the launch branch into `main`.
  2. The owner re-enters the real Resend key as Production `RESEND_API_KEY`, marked Sensitive. It's currently set to `DISABLED_UNTIL_LAUNCH`.
  3. Set `VITE_PUBLIC_LAUNCH=true` in Production.
  4. Open `robots.txt` to search engines.
  5. Redeploy.

## Contact form (`/schedule/` → `api/schedule-request.js`)

- The server repeats the browser's validation.
- **Spam filtering:** a hidden "website" field that only bots fill in, plus a minimum fill-time check.
- It rejects any submission whose `consentVersion` doesn't match the current consent wording.
- It emails the lead through Resend. **Environment variables:** `RESEND_API_KEY`, `LEAD_TO_EMAIL` (comma-separated) and `FROM_EMAIL`. Never write their values into code or docs.
- **Responses:** 200 delivered (or silently filtered as spam), 400 invalid, 409 consent wording changed, 503 not configured, 502 Resend failure.
- The logs record only "delivered" plus the message ID, never the person's details.

## Compliance rules (non-negotiable)

- **Minimal footprint for compliance work.** Don't refactor, restyle, rename or "improve" anything that wasn't asked for. Cite the requirement behind every compliance change (for example 42 CFR 422.2267(e)(41) or Cal. Ins. Code §1726).
- **Never invent** license numbers, phone numbers, carrier names, plan counts or legal text. Use a visible `TODO` placeholder and tell the owner.
- **TPMO disclaimer** (`site.tpmoDisclaimer`): use the owner-confirmed wording **verbatim**; never paraphrase it. It appears in the footer of every page (including Schedule), on Licensing & Disclosures, in the FAQ and on Prelaunch.
- **§1726 identity block** (`LegalIdentity`): name, license numbers, state of domicile and principal place of business, all in **one font size**.
- **Never alter** compliance copy without the owner's sign-off: the TPMO disclaimer, license language, the "California-licensed independent insurance agent" wording, consent text, or carrier-provided notices. If a fix would touch them, flag it instead.
- **Deploy to Vercel previews only. Never merge to `main` or touch production without the owner's explicit approval.**
- **Never add accessibility overlay widgets** such as accessiBe or UserWay.

## Decisions already made (don't reopen unless asked)

| Date | Decision |
|---|---|
| 2026-09-30 | Disclose city and state only (San Jose, California); never a street address. |
| 2026-09-30 | No do-it-yourself tools (Plan Finder, HICAP nudges) and no "compare every option yourself" box. |
| 2026-10-01 | **Privacy:** effective date October 1, 2026. Lead retention: "10 years after our last contact with you". Section title: "How Long Do We Keep Your Information?". The page is titled "Privacy Policy". |
| 2026-10-01 | **Medicare.gov is plain text, not a link** (CMS doesn't require a link). The footer has no "Official Medicare help" column. The only Medicare.gov links kept are the authorization-form link in the FAQ and the California Medicare Resources page. |
| 2026-10-01 | **No visible "Last reviewed" dates** on pages, and no "Last accessibility review" line. The dates are still recorded internally in `pages.js` and `site.accessibilityReviewed` and still gate the launch. |
| 2026-10-03 | **TPMO disclaimer, confirmed by the owner:** "We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1–800–MEDICARE to get information on all of your options." Claude flagged that this matches the pre-2024 CMS wording; the owner is getting written confirmation from Spark Advisors for CY2027. |
| 2026-10-05 | **Schedule page sidebar:** removed the second copy of the TPMO disclaimer and the sentence "Both are independent, California-licensed insurance agents, not Medicare." The disclaimer still appears in the footer on the Schedule page. |
| 2026-10-03 | **Accessibility:** fixed audit items F1 (gold focus outline on dark backgrounds), F2 (Escape returns focus to the menu button), F3 (Email/Phone grouped with "at least one is required") and F13 (accessibility reports go to email or phone, never the Schedule form). Items F4–F12 are deferred. CMS doesn't require WCAG; the motivation is California's Unruh Act, the ADA, possible Section 504/1557 obligations via carrier contracts, and the audience. |

## Branches (as of 2026-10-03)

- `main`: production. The old Tailwind Coming Soon page is live.
- `claude/blissful-dirac-8vhwa0`: the main site build.
- `compliance-cy2027`: the site plus the CY2027 compliance work. **This is the launch candidate.**
- `a11y-audit`: built from `compliance-cy2027`; adds the audit report, the four accessibility fixes and this file. Bring it into `compliance-cy2027` before launch.
- **Preview address pattern:** `https://anchorpath-insurance-git-<branch>-archiesvibeprojects.vercel.app`. Long branch names are shortened.

## Commands and checks

- `npm run dev`: local development server.
- `npm run build`: production build into `dist/`.
- `npm run preview`: serve the build locally.
- `npm run lint`: ESLint. Must pass before every commit.
- **Before pushing a page or layout change:** run axe-core through Playwright (tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`) on every route at 320, 768 and 1280px. Check for no sideways scrolling and exactly one `h1` per page. Install these test tools outside the repo unless the owner approves adding dev dependencies.
- **Routes:**
  - Content pages: `/`, `/medicare-basics/`, `/medicare-coverage-choices/`, `/turning-65/`, `/retiring-after-65/`, `/already-on-medicare/`, `/california-medicare-resources/`, `/faq/`, `/resources/`, `/meet-chris-and-helga/`, `/schedule/`.
  - Legal and other pages: `/licensing-disclosures/`, `/privacy/`, `/accessibility/`, `/terms/`, plus the 404 page.

## Still open before launch

- Written confirmation from Spark Advisors of the TPMO wording for CY2027.
- Page fact-check dates (`pages.js`) and the manual accessibility review date (`site.accessibilityReviewed`).
- The owner's go-ahead, then the launch steps above.
