import JSZip from 'jszip'

export async function GET() {
  const zip = new JSZip()
  const root = zip.folder('compound-creative-director')!

  // ─── SKILL.md ──────────────────────────────────────────────────────────────

  root.file('SKILL.md', `# Compound Creative Director

**Name:** Compound Creative Director
**Version:** 1.0.0
**Description:** World-class AI creative director curated by Simon Beard, Graham Muir, and Tyler Pinn

---

## Identity & Role

You are a world-class creative director with 20+ years of brand-building experience across startups, scale-ups, and global brands. You think in systems, not one-offs. Every decision — colour, type, spacing, copy — is intentional and defensible. You balance aesthetic ambition with commercial performance. You never settle for generic.

When activated, you bring this expertise to every output: websites, apps, brands, content, and campaigns. You ask the right questions, push back on weak briefs, and always deliver above expectations.

---

## Design Principles

- **Bold typography** — type carries the brand, not decoration
- **Intentional whitespace** — space is a design element, not absence
- **Mobile-first** — design for the constraint, then scale up
- **Dark themes as default** — they communicate sophistication and reduce eye strain
- **Consistency over cleverness** — a coherent system beats clever one-offs every time
- **Performance is design** — a slow site is a broken site

---

## Brand System Builder

When given a brief, build a complete brand identity:

1. **Extract the essence** — what does this brand stand for? What's the single idea?
2. **Name & tagline** — if needed, propose options with rationale
3. **Colour palette** — primary, secondary, accent, neutral, semantic (success/warning/error)
4. **Typography** — heading face, body face, mono face; weights and sizes
5. **Spacing system** — 4px base unit, defined scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
6. **Border radius scale** — from sharp (0) to pill (9999px)
7. **Shadow scale** — subtle to dramatic
8. **Tone of voice** — 3–5 adjectives, do/don't examples
9. **Component patterns** — buttons, cards, inputs, badges
10. **Logo concept** — describe the concept, mark type, and usage rules

---

## Website Builder

Stack defaults:
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Variable fonts via next/font
- **Images:** next/image with WebP
- **Deployment:** Vercel

Standards:
- Lighthouse 90+ across all four categories
- WCAG AA contrast compliance
- Semantic HTML (nav, main, article, section, aside, footer)
- Open Graph + Twitter Card meta tags on every page
- Structured data (JSON-LD) for key pages
- Responsive at 375px, 768px, 1024px, 1440px
- Keyboard navigable — all interactive elements focusable
- Loading and error states for all async content

---

## App UI/UX

- **Component-driven** — build atoms → molecules → organisms → templates
- **Design tokens** — all values (colour, spacing, radius, shadow) from a token system
- **Consistent spacing** — use the 4px scale religiously
- **Micro-interactions** — hover states, focus rings, transition durations (150ms default)
- **Empty states** — every list/grid needs an empty state design
- **Error boundaries** — graceful degradation, never blank screens
- **Loading skeletons** — prefer skeletons over spinners for layout content

---

## Content Engine

Generate at scale without losing quality:

- **Social assets** — platform-native sizing (1:1, 4:5, 16:9, 9:16), consistent brand treatment
- **Ad creatives** — hook in first 3 seconds, clear CTA, brand lockup
- **Email templates** — single-column mobile-first, max 600px, text fallbacks for images
- **Batch generation** — generate 5–10 variants per asset, ranked by predicted performance

---

## Quality Gate

Before shipping anything, self-review against these criteria:

- [ ] Visual hierarchy is immediately clear — one dominant element per section
- [ ] Consistent spacing — no magic numbers, all from the scale
- [ ] Responsive — tested at 375px, 768px, 1440px
- [ ] Colour contrast — all text passes WCAG AA (4.5:1 body, 3:1 large)
- [ ] All interactive elements have visible hover + focus states
- [ ] Loading states designed for all async content
- [ ] Error states designed — not just \`console.error\`
- [ ] Meta tags set — title, description, OG image, canonical URL
- [ ] Performance — images optimised, no layout shift, fast TTFB

---

## Typography Rules

**System font stack (fallback):**
\`\`\`
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif
\`\`\`

**Type scale (major third — 1.25 ratio):**
| Token | Size |
|-------|------|
| xs    | 12px |
| sm    | 14px |
| base  | 16px |
| lg    | 20px |
| xl    | 25px |
| 2xl   | 31px |
| 3xl   | 39px |
| 4xl   | 49px |
| 5xl   | 61px |

**Line height rules:**
- Headings: 1.1–1.2
- Subheadings: 1.3–1.4
- Body: 1.6–1.7
- UI labels: 1.0–1.2

**Max width for readability:** 65–72 characters (approximately 680px at 16px base)

**Font weight conventions:**
- 400 — body copy
- 500 — UI labels, captions
- 600 — subheadings, emphasis
- 700 — headings
- 800–900 — display/hero headings

---

## Colour Theory

**Building a palette:**
1. Start with the brand's emotional intent (energy, trust, luxury, etc.)
2. Choose a primary — this is the brand colour, used sparingly
3. Build a neutral scale (11 stops: 50–950) anchored to the primary's hue
4. Add semantic colours (success green, warning amber, error red)
5. Define dark and light mode variants

**Contrast ratios (WCAG):**
- Body text on background: minimum 4.5:1
- Large text (18px+ bold): minimum 3:1
- UI components (borders, icons): minimum 3:1

**Dark mode patterns:**
- Background: #0a0a0a → #111111 → #1a1a1a (surface layers)
- Text: #fafafa (primary) → #aaaaaa (secondary) → #666666 (muted)
- Never use pure black (#000000) or pure white (#ffffff) — too harsh

---

## Layout Patterns

**Grid systems:**
- 12-column grid, 24px gutters, max-width 1280px
- 4-column on mobile, 8-column on tablet

**Card pattern:**
\`\`\`
border: 1px solid [border-color]
background: [surface]
border-radius: 6px
padding: 24px
\`\`\`

**Hero sections:**
- Headline (max 10 words)
- Subline (max 25 words)
- Primary CTA + optional secondary CTA
- Social proof element (logos, stat, or testimonial)

**Feature grids:**
- 3-up on desktop, 2-up on tablet, 1-up on mobile
- Icon or visual + heading + 1–2 sentence description

**Pricing tables:**
- Max 3 tiers
- Highlight the recommended tier
- Feature comparison list — use checkmarks not paragraphs
- CTA on each tier

---

## Growth Architecture

- **SEO meta tags:** title (50–60 chars), description (150–160 chars), canonical URL
- **Open Graph:** og:title, og:description, og:image (1200×630px), og:url, og:type
- **Twitter Card:** twitter:card, twitter:title, twitter:description, twitter:image
- **Structured data (JSON-LD):** Organization, WebPage, Product, Article as appropriate
- **Analytics hooks:** page views, CTA clicks, scroll depth, form submissions
- **CRO patterns:** above-fold CTA, social proof near purchase, urgency/scarcity, trust signals

---

## Anti-Patterns

Never do these:

- **Gradients on text** — illegible and dated
- **Stock photography** — kills brand authenticity immediately
- **Generic templates** — if it could be anyone's, it's no one's
- **Comic Sans, Papyrus, or Curlz** — obvious
- **Centred body copy over 3 lines** — kills readability
- **Pure black backgrounds (#000000)** — too harsh, use #0a0a0a or similar
- **Overusing accent colours** — if everything is highlighted, nothing is
- **Infinite scrolling without pagination option** — accessibility and UX nightmare
- **Auto-playing video/audio** — instant user hostility
- **Hamburger menus on desktop** — lazy navigation design
- **Inconsistent border radius** — pick a scale and stick to it
- **Mixing more than 2 typefaces** — almost always a mistake
`)

  // ─── references/ ──────────────────────────────────────────────────────────

  const refs = root.folder('references')!

  refs.file('brand-system-template.md', `# Brand System Template

Use this template to document any brand system. Fill in each section before building any assets.

---

## Brand Foundation

| Field | Value |
|-------|-------|
| Brand name | |
| Tagline | |
| Founded / context | |
| Target audience | |
| Core value proposition | |

### Tone of voice

**Adjectives (pick 3–5):**
-
-
-

**We are / We are not:**

| We are | We are not |
|--------|-----------|
| Bold   | Aggressive |
| Warm   | Sentimental |
| Smart  | Condescending |

---

## Colour Palette

### Primary
| Name | Hex | Usage |
|------|-----|-------|
| Primary 500 | #000000 | Main brand colour |
| Primary 700 | #000000 | Hover / active states |
| Primary 300 | #000000 | Light tints |

### Neutral
| Name | Hex | Usage |
|------|-----|-------|
| Gray 950 | #0a0a0a | Page background |
| Gray 900 | #111111 | Surface |
| Gray 800 | #1a1a1a | Elevated surface |
| Gray 600 | #444444 | Border |
| Gray 400 | #888888 | Muted text |
| Gray 200 | #cccccc | Secondary text |
| Gray 50  | #fafafa | Primary text |

### Semantic
| Name | Hex | Usage |
|------|-----|-------|
| Success | #22c55e | Confirmations |
| Warning | #f59e0b | Caution states |
| Error   | #ef4444 | Error states |
| Info    | #3b82f6 | Informational |

### Accent
| Name | Hex | Usage |
|------|-----|-------|
| Accent | | Highlight, CTA, emphasis |

---

## Typography

### Typefaces
| Role | Family | Source |
|------|--------|--------|
| Heading | | Google Fonts / Variable |
| Body | | Google Fonts / System |
| Mono | | Google Fonts / System |

### Scale
| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| display | 56–80px | 900 | 1.05 | Hero headlines |
| h1 | 40–48px | 800 | 1.1  | Page titles |
| h2 | 28–36px | 700 | 1.2  | Section headings |
| h3 | 20–24px | 600 | 1.3  | Sub-sections |
| body-lg | 18px | 400 | 1.65 | Lead paragraphs |
| body | 16px | 400 | 1.6  | Body copy |
| sm | 14px | 400–500 | 1.55 | Captions, UI labels |
| xs | 12px | 500–700 | 1.4  | Badges, overlines |

---

## Spacing Scale

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| 1 | 4px | Micro gaps |
| 2 | 8px | Tight spacing |
| 3 | 12px | Form elements |
| 4 | 16px | Default padding |
| 6 | 24px | Card padding, gutters |
| 8 | 32px | Section sub-spacing |
| 12 | 48px | Component separation |
| 16 | 64px | Section padding |
| 24 | 96px | Large section padding |
| 32 | 128px | Hero padding |

---

## Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Sharp / structured |
| sm | 2px | Subtle rounding |
| DEFAULT | 4px | Buttons, cards |
| md | 6px | Modals, panels |
| lg | 8px | Large cards |
| xl | 12px | Feature cards |
| 2xl | 16px | Floating elements |
| full | 9999px | Badges, pills |

---

## Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| sm | 0 1px 2px rgba(0,0,0,0.4) | Subtle lift |
| DEFAULT | 0 2px 8px rgba(0,0,0,0.5) | Cards |
| md | 0 4px 16px rgba(0,0,0,0.6) | Dropdowns |
| lg | 0 8px 32px rgba(0,0,0,0.7) | Modals |
| xl | 0 16px 64px rgba(0,0,0,0.8) | Overlays |

---

## Component Patterns

### Button — Primary
\`\`\`css
background: [accent]
color: [background]
font-weight: 700
padding: 12px 24px
border-radius: 4px
transition: opacity 150ms
\`\`\`
Hover: opacity 0.88

### Button — Secondary
\`\`\`css
background: transparent
color: [primary-text]
border: 1px solid [border]
font-weight: 600
padding: 11px 23px
border-radius: 4px
\`\`\`
Hover: border-color [muted]

### Card
\`\`\`css
background: [surface]
border: 1px solid [border]
border-radius: 6px
padding: 24px
\`\`\`

### Badge / Tag
\`\`\`css
background: rgba([accent], 0.1)
border: 1px solid rgba([accent], 0.2)
color: [accent]
font-size: 11px
font-weight: 700
letter-spacing: 0.08em
text-transform: uppercase
padding: 4px 10px
border-radius: 9999px
\`\`\`
`)

  refs.file('landing-page-patterns.md', `# Landing Page Patterns

Best practices for high-converting landing pages. Every pattern here is backed by conversion data.

---

## Hero Patterns

### Anatomy of a great hero

\`\`\`
[Overline / badge — optional, adds credibility]
[HEADLINE — 6–10 words, the single most important idea]
[Subline — 15–25 words, expand on the headline, address the 'so what']
[Primary CTA] [Secondary CTA — optional]
[Trust signal — logo strip, stat, or one-line testimonial]
\`\`\`

### Headline formulas

| Formula | Example |
|---------|---------|
| Outcome-first | "Ship production-ready UI in hours, not weeks" |
| Contrast | "Design like a senior. Build like a 10x engineer." |
| Question | "What if your AI knew design as well as you do?" |
| Bold claim | "The last design system you'll ever need" |
| For [audience] | "Built for founders who can't afford a design team" |

### CTA copy

**Good:**
- Get started
- Download now
- Start free
- See it in action

**Bad:**
- Submit
- Click here
- Learn more (as primary)
- Get your free [long phrase]

---

## Social Proof Placement

**Above the fold:** Logo strip ("Used by teams at X, Y, Z")

**After hero:** 1–3 short testimonials with real names, titles, photos

**Near CTA:** Star rating + review count, or a single powerful quote

**In pricing section:** "Join X+ teams already using..."

### Testimonial anatomy
\`\`\`
"[Specific outcome or experience — not generic praise]"
— [Full Name], [Title] at [Company]
[Optional: before/after stat]
\`\`\`

---

## Feature Grid Layouts

### 3-up grid (most common)

\`\`\`
[Icon]         [Icon]         [Icon]
Heading        Heading        Heading
1–2 sentence   1–2 sentence   1–2 sentence
description.   description.   description.
\`\`\`

- Icons should be consistent in style (outline or filled, not mixed)
- Headings: 3–5 words
- Descriptions: max 2 sentences
- Use a 3px accent line or dot above each feature to anchor visually

### Alternating feature (for deeper features)

\`\`\`
[Visual / screenshot]    Heading
                         Body copy (3–4 sentences)
                         [Bullet list of specifics]
                         [CTA link →]

Heading                  [Visual / screenshot]
Body copy
...
\`\`\`

---

## Pricing Table Patterns

### Single-tier (focus page)
- Remove cognitive load — one price, one CTA
- List 5–8 features as checkmarks
- Add FAQ below to handle objections

### 3-tier (most common)
\`\`\`
[Starter]    [★ Pro — highlighted]    [Enterprise]
$X/mo        $Y/mo                    Contact us
[Feature ✓]  [Feature ✓]              [Feature ✓]
[Feature ✗]  [Feature ✓]              [Feature ✓]
[Feature ✗]  [Feature ✓]              [Feature ✓]
[CTA]        [CTA — prominent]        [CTA]
\`\`\`

**Rules:**
- Highlight the middle/recommended tier with a border or background
- Annual/monthly toggle increases conversions
- Show savings on annual plan ("Save 20%")
- Include money-back guarantee near the CTA

---

## FAQ Accordion

**Questions to always include:**
1. "Is this right for me?" — qualification question
2. "What happens after I purchase?" — post-purchase anxiety
3. "Can I get a refund?" — risk reversal
4. "How is this different from [main alternative]?" — competitive differentiation
5. "Do I need [prerequisite skill]?" — barrier question

**Design:**
- Chevron or + icon, rotates on open
- Border between items, no outer border
- Answer fades in, don't jump layout
- Keep answers to 2–4 sentences

---

## Footer Patterns

### Marketing page footer

\`\`\`
[Logo + 1-line description]

[Column 1 — Product]    [Column 2 — Company]    [Column 3 — Legal]
Link                    Link                    Privacy Policy
Link                    Link                    Terms of Service
Link                    Link                    Cookie Policy

[Social icons]          [Copyright notice]
\`\`\`

### Minimal (single product)

\`\`\`
[Logo]    [Nav links]    [Social icons]    © 2024 Company
\`\`\`

**Always include:**
- Privacy Policy link (legal requirement in most jurisdictions)
- Copyright notice
- Contact / support link
`)

  refs.file('quality-checklist.md', `# Pre-Ship Quality Checklist

Run through this before every release. No exceptions.

---

## Visual Hierarchy

- [ ] One dominant element per section — the eye knows where to go first
- [ ] Heading sizes are clearly differentiated (not just bold vs regular)
- [ ] CTAs stand out — contrast ratio vs background is at least 3:1
- [ ] No competing focal points fighting for attention

---

## Responsiveness

- [ ] Tested at 375px (iPhone SE) — nothing overflows or breaks
- [ ] Tested at 768px (iPad) — layout adapts gracefully
- [ ] Tested at 1440px (desktop) — content doesn't stretch too wide
- [ ] Images don't distort or pixelate at any breakpoint
- [ ] Text remains readable (min 14px) at all sizes
- [ ] Touch targets are at least 44×44px on mobile

---

## Performance (Lighthouse 90+)

- [ ] Lighthouse Performance score ≥ 90
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Images use next/image or equivalent with proper sizing
- [ ] No render-blocking resources
- [ ] Fonts loaded with \`font-display: swap\` or variable font

---

## Accessibility

- [ ] All text passes WCAG AA contrast (4.5:1 body, 3:1 large text)
- [ ] All images have descriptive \`alt\` text (or \`alt=""\` for decorative)
- [ ] All interactive elements are keyboard focusable (Tab order makes sense)
- [ ] Focus indicators are visible — don't suppress \`outline\` without replacement
- [ ] Form inputs have associated \`<label>\` elements
- [ ] Page has a logical heading hierarchy (one \`<h1>\`, then \`<h2>\`, etc.)
- [ ] \`aria-label\` on icon-only buttons
- [ ] No content relies solely on colour to convey meaning

---

## Interactive Elements

- [ ] All buttons/links have hover states
- [ ] All buttons/links have focus states (keyboard navigation)
- [ ] Active/pressed states for buttons
- [ ] Disabled states styled and using \`disabled\` attribute (not just visually)
- [ ] Transition durations feel natural (100–300ms for most UI)

---

## Content & Loading States

- [ ] Loading states designed for all async content
- [ ] Skeleton screens or spinners — never a blank space
- [ ] Empty states designed for all lists/grids
- [ ] Error states designed — message is human-readable, not an error code
- [ ] Success states confirmed (form submissions, purchases, etc.)

---

## SEO & Meta

- [ ] \`<title>\` tag set — 50–60 characters, includes primary keyword
- [ ] \`<meta name="description">\` set — 150–160 characters
- [ ] Canonical URL set
- [ ] \`og:title\`, \`og:description\`, \`og:image\` (1200×630px) set
- [ ] \`twitter:card\`, \`twitter:title\`, \`twitter:image\` set
- [ ] Structured data (JSON-LD) implemented where relevant
- [ ] No duplicate \`<h1>\` tags
- [ ] Internal links use descriptive anchor text (not "click here")

---

## Final Sign-Off

- [ ] Checked in Chrome, Firefox, Safari
- [ ] Checked on real iOS and Android device (or simulator)
- [ ] Spell-checked all copy
- [ ] All placeholder content removed
- [ ] All console errors resolved
- [ ] Environment variables confirmed for production
`)

  // ─── templates/ ───────────────────────────────────────────────────────────

  const templates = root.folder('templates')!
  const landing = templates.folder('nextjs-landing')!

  landing.file('README.md', `# Next.js Landing Page — Quick Start

A minimal, high-performance Next.js landing page template following Compound design standards.

---

## Stack

- **Next.js 14+** — App Router
- **Tailwind CSS v4** — utility-first styling
- **TypeScript** — type safety
- **next/font** — optimised font loading (Inter)
- **Vercel** — recommended deployment

---

## Setup

\`\`\`bash
npx create-next-app@latest my-landing --typescript --tailwind --app
cd my-landing
npm run dev
\`\`\`

---

## File Structure

\`\`\`
src/
  app/
    layout.tsx        # Root layout — metadata, fonts, global styles
    page.tsx          # Landing page
    globals.css       # @theme tokens + base styles
  components/
    Nav.tsx           # Fixed navigation bar
    Hero.tsx          # Hero section
    Features.tsx      # Feature grid
    Pricing.tsx       # Pricing section
    FAQ.tsx           # FAQ accordion
    Footer.tsx        # Footer
\`\`\`

---

## Design Tokens (globals.css)

\`\`\`css
@theme {
  --color-accent: #c5d82d;      /* Brand accent — lime */
  --color-surface: #111111;     /* Card / surface background */
  --color-elevated: #1a1a1a;    /* Elevated surfaces */
  --color-muted: #888888;       /* Muted text */
  --color-border: #1e1e1e;      /* Borders */
}

body {
  background-color: #0a0a0a;
  color: #fafafa;
}
\`\`\`

---

## Sections Checklist

- [ ] Nav — logo, links, CTA button
- [ ] Hero — headline, subline, CTA, social proof
- [ ] Features — 3–6 feature cards
- [ ] How It Works — 3-step process
- [ ] Testimonials — 2–3 quotes
- [ ] Pricing — 1–3 tiers
- [ ] FAQ — 5–8 questions
- [ ] Footer — links, social, legal

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| FCP | < 1.8s |

---

## Deployment

\`\`\`bash
# Push to GitHub, then:
vercel --prod
\`\`\`

Set environment variables in Vercel dashboard before deploying.

---

## Compound Creative Director

This template is part of the Compound skill package.
Questions: hello@thecompoundagency.com
`)

  // ─── README.md ─────────────────────────────────────────────────────────────

  root.file('README.md', `# Compound Creative Director

**Version:** 1.0.0
**Curated by:** Simon Beard, Graham Muir & Tyler Pinn
**Website:** thecompoundagency.com

A world-class AI creative director skill for OpenClaw, Claude Code, Cursor, and any AI coding tool that supports custom instructions.

---

## What's Inside

\`\`\`
compound-creative-director/
  SKILL.md                                    # The core skill — activate this
  README.md                                   # This file
  references/
    brand-system-template.md                  # Brand identity documentation template
    landing-page-patterns.md                  # High-converting landing page patterns
    quality-checklist.md                      # Pre-ship quality checklist
  templates/
    nextjs-landing/
      README.md                               # Next.js landing page quick start
\`\`\`

---

## Installation

### OpenClaw

\`\`\`bash
# Copy the entire folder to your skills directory
cp -r compound-creative-director ~/.openclaw/skills/
\`\`\`

Then activate in any session:
\`\`\`
/skill compound-creative-director
\`\`\`

Or set it as your default skill in OpenClaw settings.

---

### Claude Code

Copy the skill folder to your project root:

\`\`\`bash
cp -r compound-creative-director ./
\`\`\`

Reference it in your prompt:
\`\`\`
Use the instructions in compound-creative-director/SKILL.md as your creative direction framework.
\`\`\`

Or add to your \`CLAUDE.md\`:
\`\`\`markdown
## Creative Direction
Follow the principles in compound-creative-director/SKILL.md for all design and UI decisions.
\`\`\`

---

### Cursor / Windsurf / Other AI Tools

1. Open \`compound-creative-director/SKILL.md\`
2. Copy the full contents
3. Paste into your tool's system prompt / rules / instructions field

---

## Quick Start

Once activated, you can give natural language instructions:

\`\`\`
Build me a landing page for a SaaS product called "Flowdesk" — project management for freelancers.
\`\`\`

\`\`\`
Create a complete brand system for a luxury coffee brand called "Noir". Dark, minimal, premium.
\`\`\`

\`\`\`
Design a pricing section with 3 tiers. Highlight the middle tier. Dark theme.
\`\`\`

\`\`\`
Review this component against the quality checklist and fix any issues.
\`\`\`

---

## Support

Questions, feedback, or custom engagements:
**hello@thecompoundagency.com**

---

© ${new Date().getFullYear()} The Compound Agency. All rights reserved.
`)

  // ─── Getting-Started.html ──────────────────────────────────────────────────

  root.file('Getting-Started.html', `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Getting Started - Compound Creative Director</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0a;
      --surface: #111111;
      --elevated: #1a1a1a;
      --border: #1e1e1e;
      --text: #fafafa;
      --muted: #888888;
      --subtle: #444444;
      --accent: #c5d82d;
      --font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    html { font-size: 16px; scroll-behavior: smooth; }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font);
      font-size: 1rem;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .page {
      max-width: 760px;
      margin: 0 auto;
      padding: 80px 32px 120px;
    }

    /* ── Header ── */
    .header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 72px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--border);
    }

    .logo-mark {
      width: 48px;
      height: 48px;
      background-color: var(--accent);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--bg);
      letter-spacing: -0.02em;
      flex-shrink: 0;
    }

    .logo-text {
      font-size: 1.375rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text);
    }

    .logo-sub {
      font-size: 0.8125rem;
      color: var(--muted);
      margin-top: 2px;
      letter-spacing: 0.01em;
    }

    /* ── Sections ── */
    .section {
      margin-bottom: 64px;
    }

    .section-label {
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 16px;
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 1.375rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
      color: var(--text);
    }

    p {
      color: #cccccc;
      margin-bottom: 16px;
      max-width: 640px;
    }

    p:last-child { margin-bottom: 0; }

    /* ── Divider ── */
    .divider {
      border: none;
      border-top: 1px solid var(--border);
      margin: 64px 0;
    }

    /* ── What You Downloaded ── */
    .file-list {
      list-style: none;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      margin-top: 8px;
    }

    .file-list li {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      background-color: var(--surface);
    }

    .file-list li:last-child { border-bottom: none; }

    .file-icon {
      font-size: 1rem;
      line-height: 1.65;
      flex-shrink: 0;
    }

    .file-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 2px;
      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    }

    .file-desc {
      font-size: 0.8125rem;
      color: var(--muted);
      line-height: 1.5;
    }

    /* ── Steps ── */
    .steps {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .step {
      display: flex;
      gap: 24px;
      position: relative;
    }

    .step-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    .step-number {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--accent);
      color: var(--bg);
      font-size: 0.875rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .step-line {
      width: 1px;
      flex: 1;
      background-color: var(--border);
      margin-top: 8px;
      min-height: 24px;
    }

    .step:last-child .step-line { display: none; }

    .step-body {
      padding-top: 6px;
      padding-bottom: 40px;
      flex: 1;
    }

    .step:last-child .step-body { padding-bottom: 0; }

    .step-title {
      font-size: 1.0625rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 12px;
      color: var(--text);
    }

    .step-body p {
      margin-bottom: 12px;
    }

    /* ── Tool list ── */
    .tool-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .tool-list li {
      font-size: 0.875rem;
      color: #cccccc;
      padding-left: 16px;
      position: relative;
    }

    .tool-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 1px;
      background-color: var(--accent);
    }

    .tool-list li strong {
      color: var(--text);
      font-weight: 600;
    }

    /* ── Code / command blocks ── */
    .cmd-block {
      background-color: var(--elevated);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 14px 18px;
      margin: 12px 0;
      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
      font-size: 0.8125rem;
      color: var(--accent);
      line-height: 1.7;
      overflow-x: auto;
      white-space: pre;
    }

    /* ── Prompt examples ── */
    .prompt-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 12px 0;
    }

    .prompt-list li {
      background-color: var(--surface);
      border: 1px solid var(--border);
      border-left: 3px solid var(--accent);
      border-radius: 0 6px 6px 0;
      padding: 10px 16px;
      font-size: 0.875rem;
      color: #cccccc;
      font-style: italic;
    }

    /* ── Tips ── */
    .tips-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 8px;
    }

    @media (max-width: 560px) {
      .tips-grid { grid-template-columns: 1fr; }
      h1 { font-size: 1.75rem; }
      .page { padding: 48px 20px 80px; }
    }

    .tip-card {
      background-color: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px;
    }

    .tip-card-icon {
      font-size: 1.25rem;
      margin-bottom: 10px;
      display: block;
    }

    .tip-card-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
    }

    .tip-card-body {
      font-size: 0.8125rem;
      color: var(--muted);
      line-height: 1.6;
    }

    /* ── Support ── */
    .support-box {
      background-color: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 8px;
    }

    .support-box p {
      margin-bottom: 8px;
    }

    .support-link {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }

    .support-link:hover {
      text-decoration: underline;
    }

    /* ── Footer ── */
    .footer {
      margin-top: 80px;
      padding-top: 32px;
      border-top: 1px solid var(--border);
      font-size: 0.8125rem;
      color: var(--subtle);
      text-align: center;
      letter-spacing: 0.01em;
    }
  </style>
</head>
<body>
  <div class="page">

    <!-- Header -->
    <header class="header">
      <div class="logo-mark">C</div>
      <div>
        <div class="logo-text">Compound</div>
        <div class="logo-sub">Creative Director</div>
      </div>
    </header>

    <!-- Welcome -->
    <section class="section">
      <div class="section-label">Welcome</div>
      <h1>The most advanced AI Creative Director skill available.</h1>
      <p>You now have access to a system built to think in brand systems, not one-offs. Every decision it makes -- colour, type, spacing, copy -- is intentional and defensible.</p>
      <p>Curated by Simon Beard, Graham Muir, and Tyler Pinn.</p>
    </section>

    <hr class="divider">

    <!-- What You Downloaded -->
    <section class="section">
      <div class="section-label">What You Just Downloaded</div>
      <h2>Everything you need to get started</h2>
      <ul class="file-list">
        <li>
          <span class="file-icon">&#9632;</span>
          <div>
            <div class="file-name">SKILL.md</div>
            <div class="file-desc">The core brain. This is what you load into your AI tool. Contains design principles, brand system builder, component patterns, and quality gates.</div>
          </div>
        </li>
        <li>
          <span class="file-icon">&#9632;</span>
          <div>
            <div class="file-name">references/</div>
            <div class="file-desc">Design patterns, landing page formulas, and brand documentation templates. Reference material to get from brief to build faster.</div>
          </div>
        </li>
        <li>
          <span class="file-icon">&#9632;</span>
          <div>
            <div class="file-name">templates/</div>
            <div class="file-desc">Starter kits for common project types. Skip the boilerplate and start with something already aligned to the system.</div>
          </div>
        </li>
        <li>
          <span class="file-icon">&#9632;</span>
          <div>
            <div class="file-name">Getting-Started.html</div>
            <div class="file-desc">This guide.</div>
          </div>
        </li>
      </ul>
    </section>

    <hr class="divider">

    <!-- Quick Start -->
    <section class="section">
      <div class="section-label">Quick Start</div>
      <h2>Up and running in three steps</h2>

      <div class="steps">

        <div class="step">
          <div class="step-left">
            <div class="step-number">1</div>
            <div class="step-line"></div>
          </div>
          <div class="step-body">
            <div class="step-title">Choose Your Tool</div>
            <ul class="tool-list">
              <li><strong>OpenClaw:</strong> Copy the compound-creative-director folder to ~/.openclaw/skills/</li>
              <li><strong>Claude Code:</strong> Copy the folder to your project root</li>
              <li><strong>Cursor:</strong> Open Settings &gt; Rules, paste the contents of SKILL.md</li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-left">
            <div class="step-number">2</div>
            <div class="step-line"></div>
          </div>
          <div class="step-body">
            <div class="step-title">Start a Project</div>
            <p>Open your tool and say something like:</p>
            <ul class="prompt-list">
              <li>'Build me a landing page for a premium coffee brand'</li>
              <li>'Create a complete brand system for a fitness startup'</li>
              <li>'Design a SaaS dashboard layout with dark theme'</li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-left">
            <div class="step-number">3</div>
            <div class="step-line"></div>
          </div>
          <div class="step-body">
            <div class="step-title">Iterate</div>
            <p>The skill knows how to take feedback. Say things like:</p>
            <ul class="prompt-list">
              <li>'Make the typography bolder'</li>
              <li>'Switch to a warmer colour palette'</li>
              <li>'Add more whitespace between sections'</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <hr class="divider">

    <!-- Tips -->
    <section class="section">
      <div class="section-label">Tips for Best Results</div>
      <h2>Get more out of every session</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <span class="tip-card-icon">&#9670;</span>
          <div class="tip-card-title">Be specific about your brand</div>
          <div class="tip-card-body">Name your audience, tone, and competitors. The more context you give, the more opinionated and accurate the output.</div>
        </div>
        <div class="tip-card">
          <span class="tip-card-icon">&#9670;</span>
          <div class="tip-card-title">Use the templates folder</div>
          <div class="tip-card-body">The starter kits are already aligned to the design system. Start there for common project types and customise from a solid base.</div>
        </div>
        <div class="tip-card">
          <span class="tip-card-icon">&#9670;</span>
          <div class="tip-card-title">Run the quality checklist</div>
          <div class="tip-card-body">The pre-ship checklist in references/ is your safety net before anything goes live. Paste it and ask the skill to self-review.</div>
        </div>
        <div class="tip-card">
          <span class="tip-card-icon">&#9670;</span>
          <div class="tip-card-title">Brand system first</div>
          <div class="tip-card-body">Establish colour, type, and spacing before building pages. A consistent foundation makes every component faster to produce.</div>
        </div>
      </div>
    </section>

    <hr class="divider">

    <!-- Support -->
    <section class="section">
      <div class="section-label">Support</div>
      <h2>We are here if you need us</h2>
      <div class="support-box">
        <p>Email: <a class="support-link" href="mailto:hello@thecompoundagency.com">hello@thecompoundagency.com</a></p>
        <p>Website: <a class="support-link" href="https://thecompoundagency.com" target="_blank" rel="noopener">thecompoundagency.com</a></p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      Built by operators, for operators. &copy; 2026 Compound.
    </footer>

  </div>
</body>
</html>`)

  const zipBuffer = await zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' })

  return new Response(zipBuffer as BodyInit, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=compound-creative-director.zip',
      'Content-Length': String(zipBuffer.length),
    },
  })
}
