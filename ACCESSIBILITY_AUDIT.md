# Accessibility Audit: AnchorPath Insurance Services

**Standard:** WCAG 2.1 Level AA
**Date:** October 3, 2026
**What was tested:** the new site on branch `compliance-cy2027` (the version planned for the October 5 launch), plus the "Coming Soon" page that is live at anchorpathinsurance.com today (branch `main`).
**Status:** findings only. No site files have been changed. Fixes wait for your approval.

---

## 1. Executive summary

**New site (launching October 5): Partially compliant.**
The new site is in good shape. Automated testing found no WCAG failures on any of the 16 pages at phone, tablet, or desktop width, and Lighthouse scored every page 100. A hands-on review found one clear WCAG 2.1 AA failure (the keyboard focus outline is too faint on the dark blue "call to action" sections) and a handful of smaller problems, mostly in the menus and the scheduling form. All of them are fixable in about half a day, and none require a redesign.

**Live "Coming Soon" page (today): Not compliant.**
Its small grey disclaimer line ("Not affiliated with or endorsed by the U.S. government…") fails the contrast requirement badly (2.14:1, where 4.5:1 is required). This page is replaced at launch, so it only matters if the launch slips.

---

## Step 1: Inventory

### Pages (16 routes, plus the live Coming Soon page)

| Page | Address |
|---|---|
| Home | `/` |
| Medicare Basics (includes a glossary of expandable terms) | `/medicare-basics/` |
| Your Coverage Choices (includes a comparison table) | `/medicare-coverage-choices/` |
| Turning 65 (includes an enrollment-period diagram) | `/turning-65/` |
| Retiring After 65 | `/retiring-after-65/` |
| Already on Medicare | `/already-on-medicare/` |
| California Medicare Resources | `/california-medicare-resources/` |
| FAQ (expandable questions) | `/faq/` |
| Resources & Checklists (has a Print button) | `/resources/` |
| Meet Chris & Helga | `/meet-chris-and-helga/` |
| Schedule a Conversation (the contact form) | `/schedule/` |
| Licensing & Disclosures | `/licensing-disclosures/` |
| Privacy Policy | `/privacy/` |
| Accessibility | `/accessibility/` |
| Terms / Website Notice | `/terms/` |
| Page not found | any unknown address |
| Coming Soon (shown on production until launch) | `/` on the live domain |

### Interactive parts

| Component | Where | Notes |
|---|---|---|
| Skip-to-content link | every page | first thing a keyboard user reaches |
| Top menu with two drop-downs ("Learn Medicare", "Your Situation") | every page | click/Enter/Space to open |
| Phone-width "Menu" button | every page under ~1020px wide | opens the same menu |
| "Back to top" button | long pages, after scrolling | |
| Breadcrumbs and "On this page" links | educational pages | |
| Expandable questions (FAQ, glossary) | FAQ, Medicare Basics | built with the browser's native `details` element |
| Comparison table | Coverage Choices | turns into stacked cards on phones |
| Schedule form | Schedule | text fields, radio buttons, drop-down, text box, consent checkbox, error summary, success/failure messages |
| Print button | Resources | |
| Tappable phone links and email links | header, footer, several pages | |
| Links to outside websites (open in a new tab) | several pages | announced as "opens an external website in a new tab" |

**Not present:** pop-up windows (modals), carousels/sliders, plan-finder or calculator tools, video or audio, PDFs, chat widgets, or third-party scheduling widgets. The only third-party script is Vercel's page-view counter, which has nothing on screen.

**Note on your context:** the request mentions Tailwind. The new site no longer uses Tailwind; it uses one plain stylesheet (`src/styles.css`). Tailwind is only in the old `main` branch that serves the live Coming Soon page. I checked the new site's actual color pairs instead of Tailwind's defaults.

---

## Step 2: Automated testing

### What I installed
Nothing was added to your project or its `package.json`. In my own scratch folder, outside the repository, I installed **Lighthouse 12** and its Chrome launcher. **axe-core 4.13 with @axe-core/playwright** and **Playwright** were already in that scratch folder. To test the live Coming Soon page, I copied the `main` branch into the scratch folder and built it there; that did not change your repository either.

### axe-core (WCAG 2.0/2.1, Levels A and AA)
Every page was tested at **320px, 768px, and 1280px** widths. Each page was tested twice: once as it loads, and once with every expandable FAQ and glossary item opened so the hidden content was also checked.

| | Result |
|---|---|
| New site, all 16 pages × 3 widths (96 tests, plus 96 with expandables open) | **0 violations** |
| Schedule form showing all of its error messages | **0 violations** |
| Live Coming Soon page | **1 violation:** color contrast (see F14) |
| "Needs review" items | Home page hero text over its soft gradient. I checked these by hand: the lowest is 6.0:1, which passes. |

### Lighthouse accessibility (mobile and desktop)

| | Mobile | Desktop |
|---|---|---|
| All 16 pages of the new site | 100 on every page | 100 on every page |
| Live Coming Soon page | 100 | 100 |

Lighthouse raised one warning that doesn't affect the score: the logo link's spoken name doesn't exactly match its visible words (see F5). Note that Lighthouse scored the Coming Soon page 100 even though axe found its contrast failure. That's a good example of why one tool is not enough.

---

## Step 3: Manual and code review: what I checked

| Area | Result |
|---|---|
| **Keyboard:** every control reachable with Tab, Enter, Space | Pass |
| Visible focus outline | Pass on light backgrounds; **fails on the dark blue band** (F1) |
| No keyboard traps | Pass |
| Logical focus order | Pass, with one form issue (F4) |
| Escape key in the menus | **Problem:** the cursor position is lost (F2) |
| Skip-to-content link | Pass: moves focus into the main content |
| One h1 per page, no skipped heading levels | Pass on all 16 pages |
| Landmarks (header, nav, main, footer), all navigation areas labeled | Pass |
| Buttons vs. links used correctly | Pass |
| Image descriptions | Pass: the three photos have good descriptions; logos and icons are correctly hidden from screen readers |
| Color contrast of text | Pass everywhere on the new site (lowest body-text pair 4.94:1, white on teal buttons) |
| Contrast of focus outlines and form borders | Input borders pass (3.26:1); **focus outline fails on navy** (F1) |
| Information shown by color alone | Pass (the diagrams and errors also use words and shapes) |
| Form labels, required fields marked in words, error messages | Mostly pass; **email/phone instruction problem** (F3) |
| Errors announced | Pass: error summary is announced and receives focus; each error links to its field |
| Autocomplete on name, email, phone, ZIP | Pass |
| 200% zoom (1280px screen) and reflow at 320px | Pass: no sideways scrolling, nothing cut off |
| Text-spacing override (WCAG 1.4.12) | Pass, except one small overflow at 320px (F6) |
| Base font size | Good: 18px body text. A few labels are smaller (F11) |
| Page changes inside the site | Pass: page title updates and focus moves to the new page heading |
| Expandable FAQ/glossary | Pass: native element, Enter and Space both work, state announced |
| Motion | Pass: no auto-playing motion; animations turn off when the device asks for reduced motion |
| Video/audio captions | Not applicable (none on the site) |
| Link text | Pass: no "click here"; links opening a new tab are announced |
| PDFs | None linked |
| Page language (`lang="en"`) | Pass; no other-language content on the site |
| Phone numbers tappable | Your main number is, almost everywhere. **Several other numbers are not** (F9) |
| TTY/relay option | Shown for Medicare and Social Security, **not for your own line** (F10) |

---

## 2. Findings

**Severity scale:**
- **Critical:** blocks some people from completing a task.
- **Serious:** a WCAG failure that causes real difficulty.
- **Moderate:** a WCAG failure or near-failure with a workaround, or a confusing experience.
- **Minor:** small friction, or a best practice that WCAG 2.1 AA doesn't strictly require (these are marked *advisory*).

**No Critical findings.** Everything below can be worked around today, but the Serious and Moderate items should be fixed before launch.

| ID | WCAG criterion | Severity | Page / component | What's wrong | Who it affects | File and line |
|---|---|---|---|---|---|---|
| F1 | 1.4.11 Non-text Contrast | **Serious** | Dark navy "call to action" band at the bottom of most pages | The blue keyboard focus outline is only 2.81:1 against the navy background (3:1 required), so it's hard to see where you are when tabbing through those buttons. In the footer and top phone bar it's 3.15:1, which barely passes. | Keyboard users with low vision | `src/styles.css:63-67` (outline color), `src/styles.css:234` (navy band) |
| F2 | 2.4.3 Focus Order; 2.1.1 Keyboard | **Moderate** | Top menu drop-downs and the phone-width Menu | Pressing Escape closes the menu but sends the keyboard cursor back to the very top of the page, so the person has to start tabbing over again. | Keyboard and screen reader users | `src/components/SiteHeader.jsx:71-87` |
| F3 | 3.3.2 Labels or Instructions; 1.3.1 Info and Relationships | **Moderate** | Schedule form, Email and Phone fields | Both fields say "(optional)", but one of them is required. The instruction "Please give us an email address, a phone number, or both" is separate text that a screen reader skips when tabbing between fields, so the person hears "Email, optional" and then gets an error. | Screen reader users; anyone who skims labels | `src/routes/Schedule.jsx:184-192` |
| F4 | 2.4.3 Focus Order (usability) | Minor | Schedule form, error summary | The error list doesn't follow the order of the form. The first question ("What kind of conversation…") is listed 8th of 10. | Screen reader and keyboard users fixing errors | `src/content/validateLead.js:17-37`, `src/routes/Schedule.jsx:150-159` |
| F5 | 2.5.3 Label in Name | Minor | Logo link (every page) | The link's spoken name is "AnchorPath Insurance Services, home", but its visible words run together in the code ("AnchorPathInsurance Services"), so automated tools flag a mismatch. The real-world effect for voice-control users is small. | Voice-control users | `src/components/SiteHeader.jsx:101` |
| F6 | 1.4.12 Text Spacing | Minor | Header on very narrow phones | When a user turns on wider letter and word spacing at 320px width, the Menu button pushes 9px past the screen edge, causing a slight sideways scroll. | Low-vision and dyslexic users who customize spacing | `src/styles.css:111`, `src/styles.css:144` |
| F7 | 1.3.1 Info and Relationships | Moderate *(needs hand check)* | Coverage Choices comparison table, on phones | On phones the table is restyled into stacked cards. Chrome keeps it readable as a table, which I verified. Safari on iPhone is known to sometimes stop treating restyled tables as tables, so VoiceOver may read the cells without their row and column headings. | iPhone VoiceOver users | `src/routes/CoverageChoices.jsx:74-94`, `src/styles.css:314-320` |
| F8 | Best practice (relates to 2.4.7 Focus Visible) | Minor *(advisory)* | Top menu drop-downs and phone-width Menu | If you tab away from an open drop-down or the phone menu, it stays open and covers part of the page. | Keyboard users, people using magnification | `src/components/SiteHeader.jsx:27-54`, `:105-148` |
| F9 | Usability (not a 2.1 AA requirement) | Minor *(advisory)* | Several pages | Some phone numbers are plain text, not tappable. **Your own number** on the Privacy page (twice) and in the Accessibility page's closing band. **Others:** 1-800-MEDICARE and its TTY line (bottom of every educational page, FAQ, Licensing), the CA Dept. of Insurance hotline (Licensing), and the Social Security TTY (CA Resources). | People with reduced dexterity or low vision on phones | `src/routes/Privacy.jsx:21,130`; `src/routes/Accessibility.jsx:14`; `src/components/ui.jsx:84-87`; `src/routes/Faq.jsx:190-191`; `src/routes/LicensingDisclosures.jsx:70-71,82`; `src/routes/CaliforniaResources.jsx:109,146` |
| F10 | Usability (not a 2.1 AA requirement) | Minor *(advisory)* | Header, footer, Accessibility page | No TTY or relay option is listed for your phone line. Callers who are deaf or hard of hearing can reach any number by dialing **711** (California Relay Service), but the site doesn't say so. | Deaf and hard-of-hearing callers | `src/site.config.js` (phone), `src/components/SiteFooter.jsx`, `src/routes/Accessibility.jsx` |
| F11 | Usability for older adults (WCAG has no minimum font size) | Minor *(advisory)* | Several | Some text is below 16px: the small uppercase labels above page titles (14.4px), the enrollment diagram's month labels (14.4px), breadcrumbs (15.2px), and the "(required)"/"(optional)" markers (15.2px). | Older adults with low vision | `src/styles.css:168, 174, 287, 341` |
| F12 | Usability for older adults (target size is AAA in 2.1) | Minor *(advisory)* | Footer "Quick links" on phones | The footer links on phones are about 20px tall, which is small for people with tremor or arthritis. This passes WCAG 2.1 AA; it's a usability issue only. | People with reduced dexterity | `src/styles.css:387` |
| F13 | Not a WCAG item; affects your accessibility statement and consent practices | Moderate | Accessibility page | The "Contact us" button for reporting an accessibility problem goes to the Schedule form, which is an insurance solicitation form that requires agreeing to be contacted by a licensed agent. Someone reporting a barrier shouldn't have to request a sales contact to do it. | Anyone reporting a problem | `src/routes/Accessibility.jsx:12-16` |
| F14 | 1.4.3 Contrast (Minimum) | **Serious** *(live today; goes away at launch)* | Live Coming Soon page | The disclaimer line is light grey, small (11.2px) and partly transparent: 2.14:1 contrast where 4.5:1 is required. The page also has no main heading or main landmark, and the anchor emoji is read aloud as "anchor". | Low-vision visitors to the live site | `main` branch: `src/pages/ComingSoon.jsx:31, 73-86` |

**Compliance-copy flags (per your guardrails):**
- **F14:** the disclaimer is compliance text. A fix would change only its color and size, never its words.
- **F9:** making 1-800-MEDICARE tappable doesn't change any words, but it sits inside the educational disclaimer note, and you recently chose to keep Medicare.gov as plain text, so I'm treating it as your call.
- **F10:** would add a sentence near, but not inside, the TPMO disclaimer and license block.

---

## 3. What's already working well

- **Zero automated failures** across 16 pages at three widths, and Lighthouse 100 on every page, mobile and desktop.
- **Body text is 18px** in Atkinson Hyperlegible, a typeface designed for low-vision readers, with generous line spacing.
- **Strong color contrast:** every text color pair on the new site passes, most by a wide margin.
- **Keyboard support is solid:** a skip link, visible focus outlines on light backgrounds, no traps, and native buttons and expandable elements instead of custom widgets.
- **Page changes are announced:** when you move to a new page, the title updates and focus moves to the new heading. Many React sites get this wrong.
- **The form is well built:** visible labels, "(required)" spelled out in words, an error summary that is announced, focused and linked to each field, autocomplete on the personal fields, and a success or failure message that gets focus.
- **Everything reflows at 320px** and at 200% zoom with no sideways scrolling.
- **Reduced-motion settings are respected,** and nothing moves on its own.
- **External links are announced** as opening in a new tab.
- **The diagrams have text equivalents,** and color is never the only signal.
- **No PDFs, video or overlay widgets,** which avoids three of the most common sources of accessibility complaints.

---

## 4. Recommended fixes

"Visible change" means the fix changes what sighted visitors see. Everything else is behind the scenes.

### (a) Quick wins: under 1 hour each (about 2½ hours total)

| Fix | For | Effort | Visible change? |
|---|---|---|---|
| Use a **gold focus outline on dark backgrounds** (navy band, footer, top phone bar). Gold `#eeac2e` on navy is 8.2:1. See before/after below. | F1 | 15 min | Yes: focus outline color on dark areas only |
| Return focus to the menu button when Escape closes a menu; close drop-downs and the phone menu when focus moves out of them. | F2, F8 | 45 min | Menus close when you tab away |
| Group Email and Phone under one heading such as "How can we reach you? Email, phone, or both (at least one is required)", and connect that instruction to both fields. | F3 | 30 min | Yes: form wording (not compliance copy) |
| List errors in the same order as the form. | F4 | 15 min | Order of the error list only |
| Fix the logo link's spoken name so it matches the visible words. | F5 | 10 min | No |
| Let the header wrap so the Menu button can't push past the screen edge. | F6 | 15 min | No, except under extreme text spacing |
| Make **your own** phone number tappable on the Privacy and Accessibility pages. | F9 (your number) | 10 min | Number appears as a link |
| Point the Accessibility page's button to phone and email (or remove it) instead of the Schedule form. | F13 | 15 min | Yes: button text and destination |

**F1 before and after:**

| | Before | After (proposed) |
|---|---|---|
| Focus outline on navy band | blue `#0b5fd6` on `#011f47`: **2.81:1, fails** | gold `#eeac2e` on `#011f47`: **8.21:1, passes** |
| Focus outline in footer and phone bar | blue on `#01152f`: 3.15:1, barely passes | gold on `#01152f`: **9.20:1** |
| Focus outline on light backgrounds | blue on white: 5.80:1 | unchanged |

Gold is already your logo's accent color, so this stays on brand.

### (b) Moderate effort: 1 to 2 hours each

| Fix | For | Effort | Visible change? |
|---|---|---|---|
| Make the phone-width comparison table hold its structure in Safari. I'd add explicit table roles in the code, then confirm with VoiceOver on an iPhone. | F7 | 1–2 h | No |
| Raise the small labels to 16px (uppercase page labels, diagram months, breadcrumbs, required/optional markers). | F11 | 1 h | Yes: slightly larger small text |
| Give the phone-width footer links more space so they're easier to tap. | F12 | 30–45 min | Yes: footer links spaced out |
| Add "TTY: dial 711 (California Relay Service)" next to your phone number in the header, footer and Accessibility page. | F10 | 30 min | Yes: new line of copy |
| Make 1-800-MEDICARE, its TTY line and the other agency numbers tappable. *Your call; see the compliance-copy flags above.* | F9 (others) | 30 min | Numbers appear as links |

### (c) Larger changes: optional, half a day or more

| Item | Effort | Notes |
|---|---|---|
| Add the axe tests to the project so they run on every change and catch regressions. | 2–3 h | Adds test-only dev dependencies to `package.json`. |
| A full screen-reader pass with VoiceOver (iPhone and Mac) and NVDA (Windows) by a person, ideally an experienced screen-reader user. | 2–4 h | The best way to confirm F7 and anything automated tools can't see. |
| Fix the live Coming Soon page's contrast. | 20 min plus a production deploy | **Only if the launch slips.** It's replaced on October 5 anyway. |

**My recommendation:** do all of group (a) plus the F7 table fix and the 711 line before launch. The others can follow in the first week.

---

## 5. What to check by hand

Automated tools can't hear a screen reader or feel a keyboard. These take about 30 minutes in total. Use the preview link, not the live site.

**A. Keyboard only (desktop or laptop, 10 minutes)**
1. Open the home page and put the mouse aside.
2. Press **Tab** once. A "Skip to main content" box should appear at the top left. Press **Enter**, then Tab again: you should land inside the page, not on the menu.
3. Keep pressing Tab. Every link and button should show an outline, and you should never get stuck.
4. Tab to "Learn Medicare" and press **Enter**: the drop-down opens. Press **Tab** to move into it and **Escape** to close it. *(Today the cursor jumps back to the top of the page. That's F2.)*
5. Go to **Schedule a Conversation**, Tab to "Submit request", and press Enter with the form empty. A red box should list the problems, and the cursor should land on it. Press Tab and Enter on the first problem: the cursor should jump to that question.
6. Go to the **FAQ** and press Enter or Space on a question: the answer should open and close.

**B. VoiceOver on iPhone (15 minutes)**
1. Turn on VoiceOver: **Settings → Accessibility → VoiceOver**, or ask Siri "Turn on VoiceOver". Swipe right to move to the next item; double-tap to activate.
2. Open the preview home page. Swipe through the top area: you should hear the logo, "Menu, button, collapsed", and the phone number.
3. Open **Your Coverage Choices** and swipe to the comparison table. **Key test for F7:** when you reach a cell, does VoiceOver say the row and column (such as "Doctors and hospitals, Original Medicare…")? Or does it just read the text? Note which.
4. On **Schedule**, swipe to the Email field and listen to what it says. Submit the empty form: you should hear the error summary read out.
5. To turn VoiceOver off, triple-click the side button (if you set that shortcut) or use Siri.

**C. Zoom and text size (5 minutes)**
1. On a computer, press **Ctrl** and **+** (or **Cmd** and **+** on a Mac) until the browser shows 200%. Browse a few pages: nothing should be cut off, and you shouldn't need to scroll sideways.
2. On an iPhone, go to **Settings → Display & Brightness → Text Size**, make it larger, and reload the site.

**D. Real-world test (recommended)**
Ask one or two people from your actual audience, such as a client in their 70s, to request a conversation on their own phone while you watch without helping. Their hesitations will tell you more than any tool.

---

## 6. Draft accessibility statement (for your review)

Two decisions are needed before this replaces the current Accessibility page:
1. **Which standard to name.** Your current page says WCAG **2.2** AA. This audit tested **2.1** AA, which is the version referenced by the federal ADA rule for government sites and the one courts use most. I recommend naming 2.1 AA as the standard you meet and 2.2 AA as the one you're working toward, so the statement claims only what has been tested.
2. **The date.** You recently removed visible "last reviewed" dates. This statement date is different: it says when the statement itself was last updated, which is standard for accessibility statements and shows you keep the page current. Keep it or drop it; the statement works either way.

> ### Accessibility
>
> **Our commitment**
> AnchorPath Insurance Services wants everyone to be able to learn about Medicare and reach us easily, including people who use screen readers, magnification, voice control, captions, or a keyboard instead of a mouse.
>
> **The standard we follow**
> We design and test this website to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, and we work toward WCAG 2.2 Level AA. We test with automated tools and by hand, including keyboard-only and screen-reader testing, and we fix problems we find.
>
> **What we do**
> - Large, readable text and strong color contrast
> - Full keyboard navigation with a visible focus outline
> - Pages that work at 200% zoom and on small phone screens
> - Plain-language explanations, with diagrams that also have written descriptions
> - Educational information provided as web pages, not PDFs
>
> **Known limitations**
> - Websites we link to, such as Medicare.gov and Social Security, are run by others and have their own accessibility practices.
> - *[Add any audit items not yet fixed at launch, for example: "On some iPhones, the comparison table on Your Coverage Choices may be read without its column headings. The same information appears in the text above and below it."]*
>
> **Get help or tell us about a problem**
> Call **(408) 365-4412** (Monday–Friday, 9 a.m.–5 p.m. Pacific). If you are deaf, hard of hearing, or have a speech disability, dial **711** for the California Relay Service and ask for (408) 365-4412.
> Email **chris@anchorpathinsurance.com**.
> Please tell us the page and what went wrong. We will respond within one business day and can give you the information another way while we work on a fix. Reporting a problem never requires you to request an insurance appointment or agree to be contacted about insurance.
>
> **Other formats**
> If you need any information on this website in another format, such as large print or read aloud by phone, contact us and we will provide it.
>
> *This statement was last updated on [DATE].*

---

*Stopped here as requested. No fixes have been made. Tell me which fixes to implement, for example "all of (a) plus F7 and F10". I'll then work on a new branch, commit in logical groups, re-run the axe tests, and add a "Post-fix results" section to this report.*
