---
name: ux-web-design
description: UX and web design skill for building high-converting, brand-aligned websites. Use when designing landing pages, building Next.js sites, creating component systems, or implementing dark-themed premium web experiences. Built from the Compound design system and proven patterns across $1B+ in streetwear brands. Covers layout architecture, typography systems, animation patterns, responsive design, and conversion-optimized page structure.
---

# UX / Web Design Skill

## Design Philosophy

Build sites that sell on design alone. Every pixel earns its place. No decoration for decoration's sake. The goal: visitors feel the brand before they read a word.

### Core Principles

1. **Dark-first**: Dark backgrounds (#0a0a0a) with high-contrast text (#fafafa). Accent colour draws the eye to CTAs and key information.
2. **Typography hierarchy**: Font weight and size create visual flow. Bold headlines (font-black), medium body text, muted secondary content. One font family, multiple weights.
3. **Breathing room**: Generous padding (py-16 md:py-24 on sections). Content never feels cramped. White space is a design element.
4. **Motion with purpose**: Animations reinforce hierarchy and guide attention. Never decorative. Canvas backgrounds, typed text, hover transitions. Keep them performant.
5. **Conversion architecture**: Every section moves the visitor closer to the CTA. Hero sells the outcome, body builds trust, pricing removes friction.

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion, custom canvas components, CSS transitions
- **Deployment**: Vercel (auto-deploy from Git)
- **Font**: System font stack or single brand font (e.g., Inter, Syne)

## Page Architecture

### Section Order (proven high-converting flow)

1. **Hero**: Headline, subhead, rotating typed text, primary CTA, social proof hint
2. **The Difference**: Why this is different. Narrative copy, not bullet points.
3. **Deliverables / What You Get**: Card grid showing tangible outputs (2-col mobile, 3-col desktop)
4. **How It Works**: 3-step numbered process. Simple, clear, removes uncertainty.
5. **Team / Social Proof**: Photos, names, credentials. Real people, real results.
6. **Client Logos**: "Already Built For" section. Logo images, not text.
7. **Pricing**: Single product card. Price prominent. Feature list with arrows. CTA button.
8. **FAQ**: Expandable details/summary. Addresses objections before they form.
9. **Trust Strip**: 4 icons with stats. Reinforces key selling points.
10. **Footer**: Minimal. Contact email, legal links, copyright.

### Section Styling Patterns

```
Section backgrounds: alternate between bg-[#0a0a0a] and bg-surface
Section labels: text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4
Section headings: text-3xl md:text-5xl font-black tracking-tight
Body text: text-muted text-sm md:text-base leading-relaxed
Cards: bg-[#0a0a0a] p-6 md:p-8 hover:bg-surface transition-colors
CTAs: accent background (#c8ff00 or #c5d82d), dark text, font-black, uppercase tracking
```

## Design Token System

### Colours

```css
--background: #0a0a0a      /* Primary background */
--surface: #111111          /* Card/elevated surfaces */
--foreground: #fafafa       /* Primary text */
--muted: #888888            /* Secondary text */
--border: #222222           /* Borders and dividers */
--accent: #c5d82d           /* CTA, highlights, active states */
--accent-hover: #a8b820    /* Accent hover state */
```

### Typography Scale

```
text-xs:   0.75rem   (12px)  - Labels, fine print
text-sm:   0.875rem  (14px)  - Body text, descriptions
text-base: 1rem      (16px)  - Standard body
text-lg:   1.125rem  (18px)  - Intro paragraphs
text-xl:   1.25rem   (20px)  - Card titles
text-2xl:  1.5rem    (24px)  - Sub-headings
text-3xl:  1.875rem  (30px)  - Section headings (mobile)
text-5xl:  3rem      (48px)  - Section headings (desktop)
```

### Spacing

```
py-16 md:py-24  - Standard section padding
p-6 md:p-8      - Card padding
gap-4 md:gap-px  - Grid gaps (px creates subtle divider effect)
mb-4             - Label to heading
mb-10 md:mb-16   - Heading to content
```

## Component Patterns

### Hero Section
- Full viewport height (min-h-screen)
- Centred content with max-w-5xl
- Canvas animation background (e.g., MouseRibbons, particle effects)
- Noise grain overlay for texture
- Ambient glow blobs (accent colour, blur-[180px], low opacity)
- Typed text rotation for dynamic feel
- ShineBorder wrapped CTA button
- Scroll hint at bottom

### Card Grids
- CSS Grid: grid-cols-1 md:grid-cols-3
- gap-4 md:gap-px with bg-border/40 parent (creates thin divider lines on desktop)
- Each card: bg-[#0a0a0a] with hover:bg-surface transition
- Consistent padding p-6 md:p-8

### Team Section
- Circular photos: w-20 h-20 rounded-full grayscale border-2 border-[#333]
- Name: text-xl font-black
- Role: text-accent text-xs font-bold tracking-[0.2em] uppercase
- Bio: text-muted text-sm leading-relaxed

### Pricing Card
- Single centred card, max-w-xl
- Border with hover glow: border border-border hover:border-accent/25
- Price: text-[5rem] font-black
- Feature list: arrow prefix, bold feature name, muted description
- Full-width CTA at bottom

### FAQ Section
- HTML details/summary (native, no JS needed)
- Plus icon that rotates on open
- Question: font-bold text-lg, hover changes to accent
- Answer: text-muted, indented with pr-12

### Trust Strip
- 4-column grid (2-col mobile)
- SVG icons in accent colour with drop-shadow glow
- Bold label, muted description below

## Animation Library

### Canvas Backgrounds
- **MouseRibbons**: Follows cursor movement, creates flowing ribbon trails
- **GridHeroBackground**: Animated grid lines, used behind "How It Works"
- **CybercoreBackground**: Beam/light effects, wraps FAQ through footer

### CSS Animations
- **animate-pulse**: Subtle breathing on glow elements
- **transition-colors**: Smooth hover states on cards
- **transition-opacity**: Logo hover effects

### Integration Rules
- Canvas elements: absolute positioned, pointer-events-none, z-0
- Content: relative z-10 or z-20 to sit above canvas
- Gradient overlays between canvas and content for readability
- Never remove or replace existing animations without explicit instruction

## Responsive Strategy

### Breakpoints
- **Mobile first**: Default styles target 320px+
- **sm (640px)**: Minor adjustments (show/hide dot separators)
- **md (768px)**: Switch to multi-column grids, larger text, more padding
- **lg (1024px)**: Max-width containers kick in
- **xl (1280px)**: Rarely needed, max-w-6xl handles it

### Mobile Patterns
- Single column layouts
- Smaller section padding (py-16 vs py-24)
- Reduced font sizes via clamp()
- Touch-friendly tap targets (min 44px)
- Stack horizontal layouts vertically

## Conversion Optimisation

### CTA Placement
1. Hero: Primary CTA above the fold
2. Pricing section: Main conversion point
3. Never more than 2 scroll-lengths between CTAs

### CTA Styling
- Always use the FlowButton component (or equivalent animated button)
- Accent background with dark text
- Uppercase, tracked, font-black
- Wrap in ShineBorder for hero prominence

### Trust Signals
- Real team photos (greyscale for consistency)
- Client logos (real companies, not placeholder)
- Specific numbers ($1B+, $600M+, 48 hours)
- FAQ that pre-answers objections

### Copy Rules
- NO em-dashes anywhere. Use periods, commas, or colons.
- Short paragraphs (2-3 sentences max)
- Active voice, direct language
- Numbers are more credible than adjectives

## Git Workflow

1. Read current page.tsx before making ANY changes
2. Create feature branch: git checkout -b fix/description
3. Commit with clear message describing what changed
4. Push to main for auto-deploy (or PR for preview)
5. Never override existing animations, backgrounds, or theme without explicit instruction

## Quality Checklist

Before shipping any page:
- [ ] All CTAs link to correct destination (Stripe, Calendly, etc.)
- [ ] No empty HTML tags or orphaned whitespace
- [ ] Responsive: test at 375px, 768px, 1280px
- [ ] All images have alt text
- [ ] No em-dashes in any copy
- [ ] Animations load smoothly, no layout shift
- [ ] Lighthouse performance score > 90
- [ ] All text readable against backgrounds (contrast ratio)
- [ ] Meta tags: title, description, OG tags, favicon
