# MEMORY

Living record of the ArcOn Brands website project. Updated every session.

---

## Project Overview

**Goal:** Build a simple website for ArcOn Brands that clearly explains what we do and
provides initial information on entering the Chinese market — plus an AI tool that gives
visitors immediate insights on their brand's prospects in China.

**Owner:** Jack Harrison (first website build — keep the stack simple and explain choices)

**References:**
- Current website: https://www.arconbrands.com/
- LinkedIn: https://hk.linkedin.com/company/arcon-brands-hongkong

---

## Progress

### 2026-09-21 — Session 1
- Set up the project folder (`Website/`) with `CLAUDE.md` for context and `MEMORY.md` for
  ongoing documentation.
- Confirmed the project brief and worked through the open questions (see Decisions).
- Agreed a two-phase plan: brochure site first, AI tool second.
- Chose the AI tool concept (Chinese naming), hosting (GitHub Pages, after weighing Netlify), and audience (Western brands entering China).
- Pulled content from arconbrands.com (home + team) and LinkedIn: headline, services,
  clients, testimonial, full team bios, office addresses.
- **Built the Phase 1 site** in `docs/`: `index.html`, `what-we-do.html`,
  `entering-china.html`, `team.html`, `styles.css`. Plain HTML/CSS, no build step.
  Previewed on desktop and mobile — layout holds; mobile menu works after a quoting fix.
- Design: warm off-white paper, near-black ink, one vermilion accent; Fraunces (serif)
  headings + Inter body via Google Fonts. Numbered "steps" layout for services and the
  primer; each primer point ends with a "How ArcOn helps" line.
- Added a "Coming soon: what is your brand called in Chinese?" teaser on Home and the
  primer page as a bridge to Phase 2.
- **Published to GitHub Pages.** GitHub account `jackharrison0505` created; GitHub CLI
  installed to `~/.local/bin/gh` (no Homebrew on this Mac); signed in via browser device
  flow. Repo: https://github.com/jackharrison0505/jackharrison0505.github.io — Pages serves
  `main` branch, `/docs` folder → **https://jackharrison0505.github.io/**
- Git identity set per-repo as "Jack Harrison" with GitHub's no-reply address (keeps the
  real email out of public commit history).
- Contact email left as **TBC** (Jack's call, 2026-09-21). The contact button points to
  LinkedIn in the meantime so nothing on the live site is broken.
- No code or content written yet.

---

### 2026-09-21 — Session 1, later: v2 redesign (Jack's feedback: "cool, but feels the same as before")
- **Bold hero:** the home page now opens with "What's your brand called in China?" — dark
  panel, giant faint 名 glyph, an input box. Powered today by `docs/names.js`, a curated set
  of ~22 well-documented brand names (Coca-Cola 可口可乐, BMW 宝马, Airbnb 爱彼迎 …) each with
  pinyin, meaning, naming-type tag and a one-paragraph note. Unknown names get an honest
  "not yet — this is why it matters + AI tool coming soon" panel. A scrolling ticker of
  examples sits under the input. Phase 2 swaps `lookup()` for the AI call; UI stays.
- **Message evolved** from "you must be in China" to **"You don't need to be in China. You
  need to understand it."** New home sections: thesis strap; a "China, 2020 → now" then/now
  comparison (cross-border testing, Douyin livestreams, AI assistants shaping discovery,
  confident domestic brands, AI-assisted market reads); services reframed as
  **Understand · Enter · Operate**; dark CTA band "Get a China read on your brand".
- Copy on the other pages nudged the same way (primer intro, channels point mentions AI
  assistants; What-we-do step 1 mentions AI-assisted analysis; new "Current, not nostalgic"
  principle).
- Added `favicon.svg` (名 on ink) and Open Graph title/description tags on every page so
  shared links preview properly. No OG image yet (needs a 1200×630 PNG).
- **⚠ Claims for Jack to verify** — I wrote these as evolved positioning, not from ArcOn
  material: "AI-assisted market reads", social-listening data in the analysis, "pay with
  their face", "answer on WeChat in minutes", the 2020→now comparison lines. Soften or cut
  anything ArcOn doesn't actually do.

### 2026-09-21 — Session 1, later still: v3 — the evolved offering
Jack: "have a hard look back on previous documents and pitches to really evolve our offering
— we are strategic partners to help you access and then operate the market."

**Sources read** (Drive `My Drive/AO/…`, `Downloads/`): *Where We Go* + *What's Next* (Jul/Aug
2026 strategy papers), *Business Model & Strategy Proposal v2.1* (Mel, Jul 2026), *2025 About
Us* deck (Nov 2025), RSG Hospitality proposal (Aug 2026), Little Moons Chinese Naming
Workshop (Jun 2026), *ArcOn on the Rise* workshop 2026, WTM flyer. PDFs extracted with a tiny
Swift/PDFKit tool (no poppler on this Mac) at scratchpad `pdf2txt`.

**The offering, as the documents actually say it** (now the spine of the site):
- Positioning: founder-led **strategic partner for established consumer brands growing
  through China — access, then operate.** Not an agency, not a strategy house.
- The gap: strategy firms give PowerPoint not execution; local agencies know culture not
  operations; boutiques sell PDFs not partnerships. *"If you don't have local arms — we are."*
- **Three engines / three ways in:** (1) Strategy Sprint — founder-led 2-day War Room,
  commercial blueprint, go/no-go, 10–14 wks; (2) Build & Operate — assets + partnerships,
  delivered through a **vetted Alliance Network we select, contract and govern**; one point
  of contact, one P&L, strategic retainer with founder access; (3) The Venture — "a partner,
  not a vendor": stake alongside a modest fee, board seat, we choose the operators.
- Delivery doctrine: **"strategists, not executioners"** — architect and guardian, never the
  operator. Public phrasing reconciles Jack's "operate the market" with this: *we operate it
  for you through governed specialists.*
- Two audiences: brands entering China; **hotels/destinations reaching Chinese travellers**
  (Aman, MO, Explora, Oman, RSG — the bulk of the book). Unified as "China's consumer — at
  home and when they travel". China-out mentioned lightly.
- **AI visibility** as a real, new product line: Doubao, DeepSeek, Kimi, Yuanbao, Tongyi
  Qianwen; 440M MAU AI-native apps Q1 2026; 90%+ on domestic models; Audit + Monitoring,
  partner-delivered, ArcOn owns interpretation. This is the "evolve with AI" hook Jack wanted.
- Naming methodology (Little Moons deck): phonetic / semantic / hybrid pathways; the
  "three-second shelf test"; master name + defensive family; dual word-mark, full-class TM.
  Now reflected in the naming demo tags and the primer.
- Sectors: ultra-luxury hospitality & wellness, premium F&B, fashion/accessories/lifestyle.
  Client standard: established brands (internal docs say ~$100M+; site says it softly).

**Site changes:** new nav — Home · How we work · Work · Entering China · Team & contact.
`what-we-do.html` → `how-we-work.html` (three engines in depth, Alliance Network, principles,
AI visibility, who we work with). New `work.html` with 8 case studies from the About Us deck
(Aman & Janu, Mandarin Oriental, Explora Journeys, Little Moons, Varley, Villeroy & Boch,
Charbonnel et Walker, Oman/Gulf). Home rebuilt: naming hero → "strategic partner: access →
operate" thesis → the gap → three engines → two audiences → AI band → clients → CTA. Primer
point 1 now teaches the three naming pathways; point 3 adds AI assistants as a channel;
point 6 reframed as "you need a partner who stays". Team updated to the Nov 2025 deck roster.
Contact email set to **hello@arconbrands.com** (public on the WTM flyer) — Jack had said TBC.

**⚠ Confidentiality rule applied:** nothing from the strategy papers about revenue, margins,
fees, pipeline names, founder economics or internal critique goes on the site. Only
positioning, offer structure and clients already public in the About Us deck / flyer.

**⚠ For Jack to check:** the team roster (2025 deck vs. current); Janu and Oman Tourism named
as clients; "Little Moons — domestic-launch planning now in scope"; the AI stats (from Mel's
deck — confirm sources before they go further); "sold his first China project at 25" (from
the workshop story) — fine to cut if too personal.

## Key Decisions

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-09-21 | Keep project context in `CLAUDE.md`, running notes in `MEMORY.md` | Both files are read at the start of every session so context carries across sessions |
| 2026-09-21 | **Pages (v1):** Home, What We Do, Entering China, Team / Contact | Covers the brief; a fifth page/section for the AI tool comes in Phase 2 |
| 2026-09-21 | **Entering China = short primer** | One page: key considerations, common pitfalls, how ArcOn helps. Positions ArcOn as the guide without giving everything away |
| 2026-09-21 | **Design: fresh, minimal look** → **v2: bold** | Started minimal; Jack's reaction to v1 was "feels the same as before", so v2 leads with the interactive Chinese-name hero on dark ink. Inner pages stay calm |
| 2026-09-21 | **Positioning = strategic partner, access → operate** | Jack's brief plus every internal strategy doc since Jul 2026. Replaces "understand China first" (v2), which was my construction; this one is theirs |
| 2026-09-21 | **Reuse ArcOn's own frameworks verbatim where possible** | Three engines, the gap, Alliance Network, naming pathways, AI visibility — all from their decks. Their language, their thinking; the site should sound like the pitch room |
| 2026-09-21 | **Naming demo ships before the AI tool** | A curated, fact-checked set of famous names makes the hero genuinely interactive today with zero hallucination risk; the AI version slots in behind the same UI |
| 2026-09-21 | **Stack: plain HTML/CSS/JS for the site + one serverless function for the AI tool** | Jack hasn't built a site before, so the site itself stays as simple as possible (files you can open and read). The AI tool needs a server-side piece so the API key is never exposed in the browser — a single serverless function (Vercel/Netlify/Cloudflare) is the smallest way to do that |
| 2026-09-21 | **Two phases** | Phase 1: brochure site, deployable on its own. Phase 2: AI Brand Insight tool. Ship value early; the tool has more unknowns |
| 2026-09-21 | **Audience: Western brands looking to enter China** | Shapes copy tone — assume no China presence yet, explain the market from the outside in |
| 2026-09-21 | **AI tool = "Your name in Chinese"** (not "how is your brand performing") | Performance needs real market data an LLM doesn't have — hallucination risk is high and the audience has no China performance yet. Naming is generative, interactive, shareable, and teaches the audience the real lesson (naming strategy + first-to-file trademark) ending in a CTA |
| 2026-09-21 | **Hosting: GitHub Pages** (changed from Netlify) | Both free. Chosen for learning value: publishing via git/GitHub teaches the fundamentals (repo, commit, push) that all software work — including AI-agent work — builds on, and matches the training Jack followed. Phase 2's function will need a separate free host (e.g. Cloudflare Worker) — a useful lesson in itself: static hosts serve files, function hosts run code |
| 2026-09-21 | **Site files live in `docs/`** | GitHub Pages can serve from a `/docs` folder, which keeps `CLAUDE.md` and `MEMORY.md` in the repo but out of the published site |

---

## What We Are Learning

_Insights, research findings, and useful references picked up along the way._

- **Why a static site can't call the Claude API directly:** anything in the browser is
  public, including API keys. A serverless function sits between the page and the API,
  holds the key, and does the call — the page only ever talks to the function.
- **Trademark checks in China are not a public API problem.** CNIPA (China's trademark
  office) has a search site but no official public API. Automated "is my trademark clean"
  answers need either a paid trademark-data provider or a human agent. The tool should
  frame its output as an *initial insight*, not clearance.
- **Local preview:** `python3 -m http.server 8765` run from `docs/` serves the site at
  http://localhost:8765 — no install needed. (The desktop app's own preview launcher
  couldn't read the Google Drive folder, so the server is started from the terminal.)
- **Shell quoting bites:** two bugs came from generating HTML through bash — `&` in a sed
  replacement expands to the match, and `\x27` isn't a quote outside `$'…'`. Worth knowing
  when Claude generates files this way; always preview.
- **Publishing flow (the thing worth remembering):** `git init` → `git add` → `git commit`
  (a snapshot with a message) → `gh repo create` (makes the empty remote repo) →
  `git push` (uploads the snapshot) → enable Pages. From now on, changes go live with
  just `git add -A && git commit -m "…" && git push`. Pages takes ~1 min to rebuild.
- **User site vs. project site:** a repo named `<username>.github.io` publishes at the
  root address; any other repo name publishes at `<username>.github.io/<repo>/`.
- **Browser-pane gotcha:** screenshots of a background tab (or taken mid smooth-scroll in
  a shrunken pane) come back blank paper — it looked like a rendering bug and wasn't. Front
  the tab and use `scroll-behavior:auto` / read_page to verify.
- **Static host vs. function host:** GitHub Pages and Netlify both serve static files for
  free, but only Netlify (and Cloudflare, Vercel) can also *run code* server-side. Two
  different jobs; a site can use one of each.
- **Generative vs. factual AI features:** a tool that *creates* (name options, explanations)
  is low-risk; a tool that *reports facts* (sales, sentiment) is only as good as the data
  behind it. For a credibility-led business, prefer the former until real data is wired in.

---

## Ideas & Takeaways

_Ideas discussed together — including ones we have not acted on yet._

- **AI tool "Your Name in Chinese" (Phase 2):** visitor enters brand name (+ optional
  category / brand personality), gets:
  - 2–3 Chinese name options — transliteration, meaning-based, and hybrid — with characters,
    pinyin, literal meaning, and connotation
  - A short note on what makes each work (tones, character associations, category fit)
  - Famous examples for context (Coca-Cola 可口可乐 ✓, BMW 宝马 ✓, Airbnb 爱彼迎 ✗)
  - Why this matters: China is first-to-file — register before someone else does
  - CTA: "Talk to ArcOn about naming and trademark strategy" (lead capture)
- Possible later extension: light "market readiness" considerations by category — opinion,
  not statistics.
- Rejected for now: "How is your brand performing in China" — needs real market data.

---

## Open Questions

- **Custom domain** — when the trial is done, replace arconbrands.com or use a subdomain
  such as `china.arconbrands.com`? (GitHub Pages supports custom domains.)
- **Contact email** — the current site's address is hidden behind an obfuscation script;
  which address should the new site show?
- **Trademark data source (Phase 2)** — AI-generated guidance only, or budget for a
  trademark-data API to give real search results?
- **Lead capture (Phase 2)** — ask for an email before or after showing the Chinese name
  results?

---

## Next Steps

- [x] Phase 1: build the four-page brochure site (plain HTML/CSS)
- [x] Draft content for "What We Do" and the "Entering China" primer
- [ ] Jack reviews v3 — especially the ⚠ items above (team roster, client names, AI stats)
- [ ] OG share image (1200×630) so links preview with a picture
- [x] Contact email → hello@arconbrands.com (from the public flyer; revert if wrong)
- [x] Publish to GitHub Pages → https://jackharrison0505.github.io/
- [x] Decide hosting → GitHub Pages
- [ ] Phase 2: design and build the "Your Name in Chinese" tool
