'use client';
import type { ReactNode } from 'react'
import { ReactTyped } from 'react-typed'
import { RainingLetters } from '@/components/ui/modern-animated-hero-section'
import { ShapeLandingHero } from '@/components/ui/shape-landing-hero'
import { GridHeroBackground } from '@/components/ui/grid-hero-animated'
import { MouseRibbons } from '@/components/ui/mouse-ribbons'
import { WavePath } from '@/components/ui/wave-path'
import { FlowButton } from '@/components/ui/flow-button'
import CybercoreBackground from '@/components/ui/cybercore-section-hero'
import { ShineBorder } from '@/components/ui/shine-border'

// ─── Icons ────────────────────────────────────────────────────────────────────

function BrandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden>
      <rect x="1" y="1" width="9" height="9" />
      <rect x="12" y="1" width="9" height="9" opacity="0.55" />
      <rect x="1" y="12" width="9" height="9" opacity="0.3" />
      <rect x="12" y="12" width="9" height="9" opacity="0.75" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden>
      <polyline points="7,3 2,11 7,19" />
      <polyline points="15,3 20,11 15,19" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>
  )
}

function AppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden>
      <rect x="1" y="2" width="20" height="4" />
      <rect x="1" y="9" width="20" height="4" opacity="0.6" />
      <rect x="1" y="16" width="20" height="4" opacity="0.35" />
    </svg>
  )
}

function ContentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden>
      <rect x="1" y="1" width="6" height="6" />
      <rect x="8" y="1" width="6" height="6" />
      <rect x="15" y="1" width="6" height="6" />
      <rect x="1" y="8" width="6" height="6" opacity="0.5" />
      <rect x="8" y="8" width="6" height="6" opacity="0.7" />
      <rect x="15" y="8" width="6" height="6" opacity="0.35" />
      <rect x="1" y="15" width="6" height="6" opacity="0.65" />
      <rect x="8" y="15" width="6" height="6" opacity="0.45" />
      <rect x="15" y="15" width="6" height="6" opacity="0.8" />
    </svg>
  )
}

function SystemIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden>
      <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" />
      <polyline points="7,11 10,14 15,8" />
    </svg>
  )
}

function GrowthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden>
      <polyline points="1,17 7,10 12,13 21,3" />
      <polyline points="16,3 21,3 21,8" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    title: 'Book',
    description:
      'Schedule a 30-minute discovery call. Pick a time that works and bring whatever you have got.',
  },
  {
    title: 'Build',
    description:
      'We extract your design DNA and build your complete brand identity system. Delivered within 48 hours.',
  },
  {
    title: 'Create',
    description:
      'Use your brand system to produce perfect on-brand creative. Plug it into Claude Code or OpenClaw. Every output, on-brand, every time.',
  },
]

const curators = [
  {
    initials: 'SB',
    photo: '/team/simon.jpg',
    name: 'Simon Beard',
    role: 'Co-founded Culture Kings',
    bio: 'Co-founded Culture Kings with his wife Tahnee, building it from a Gold Coast market stall into a $600M+ exit. Spent over $100M on advertising. Knows what world-class brand looks like at every stage because he built one from scratch.',
  },
  {
    initials: 'GM',
    photo: '/team/graham.jpg',
    name: 'Graham Muir',
    role: 'Co-founder, Compound',
    bio: '20+ years building category-defining brands across fashion, tech, and consumer goods. The creative systems behind $1B+ in streetwear sales. Compound is built on the frameworks Graham has used to scale brands that sell on design alone.',
  },
  {
    initials: 'TP',
    photo: '/team/tyler.jpg',
    name: 'Tyler Pinn',
    role: 'Creative Director',
    bio: 'Tyler personally builds every Compound brand system. Thousands of pieces of art across streetwear and sports licensing brands globally. The same eye that created designs people paid $100 to wear. When you book, Tyler is on the call and Tyler does the work.',
  },
]

const features = [
  { name: '30-min brand audit Zoom', description: 'We review your assets, guidelines, and existing creative' },
  { name: 'Custom SKILL.md', description: 'Your bespoke AI Creative Director skill file' },
  { name: 'Brand reference library', description: 'Curated examples specific to your industry and aesthetic' },
  { name: 'Quality gate', description: 'Pre-ship checklist built around your brand standards' },
  { name: 'Growth playbook', description: 'SEO, CRO, and conversion patterns for your market' },
  { name: 'Complete brand identity system', description: 'Ad creative templates, social content playbook, and website design direction included' },
  { name: 'AI-ready brand skill', description: 'Plug into Claude Code or OpenClaw' },
  { name: '1x revision session', description: 'Refinements after you have used the skill in the real world' },
]

const faqs = [
  {
    question: 'What happens after I book?',
    answer:
      'Our team reaches out to schedule your discovery call within 24 hours. Pick a time that works and bring whatever you have got.',
  },
  {
    question: 'What do I need to prepare?',
    answer:
      'Nothing specific. We review your existing brand assets during the call. If you have a website, a brand guide, or examples you love, have them handy. That is it.',
  },
  {
    question: 'How long until I receive my brand system?',
    answer:
      'Within 48 hours of your discovery call. We build it, review it, and deliver it directly to you.',
  },
  {
    question: 'What if I need changes?',
    answer:
      'One revision session is included. After you have used your brand system in the real world and know what needs refining, book your revision and we make it right.',
  },
  {
    question: 'Can I use this with AI tools?',
    answer:
      'Yes. Your brand system is delivered as an AI-ready skill file. Plug it into Claude Code or OpenClaw and produce perfect on-brand creative yourself. Landing pages, PDFs, ads, presentations. That is the whole point.',
  },
  {
    question: 'Is this a subscription?',
    answer:
      'No. $995 AUD one-time. You own your brand system forever. No monthly fees, no renewal notices, no surprise charges.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Mouse ribbon canvas */}
        <MouseRibbons />

        {/* Noise grain overlay */}
        <div className="noise-overlay" />

        {/* Ambient glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-[0.07] bg-accent" />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-[0.06] bg-accent animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full blur-[80px] pointer-events-none bg-accent [animation-delay:2s] animate-pulse"
          style={{ opacity: 0.04 }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-24 md:pb-10">
          <img src="/logos/compound.png" alt="Compound" className="h-6 md:h-8 w-auto mx-auto mb-10 opacity-60" />
          <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-black leading-[1.05] tracking-tight mb-6 text-[#fafafa]">
            The Design Eye Behind $1B+ in Streetwear.
            <br />
            <span className="text-accent">Now Applied to Your Brand.</span>
          </h1>

          <div className="mb-8">
            <ReactTyped
              strings={['Your Brand System', 'Your Ad Creative', 'Your Social Content', 'Your Website', 'Your Pitch Decks']}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1800}
              loop
              className="text-[#c5d82d] text-2xl md:text-4xl font-semibold"
              cursorChar="|"
            />
          </div>

          <p className="text-xl md:text-2xl font-semibold text-[#fafafa] mb-4 tracking-tight">
            Most businesses pay $10K+ for brand identity that takes 6 weeks. We build yours in 48 hours. $995.
          </p>

          <div className="mb-4">
            <ShineBorder color={['#c5d82d', '#a8b820', '#d4e645']} borderRadius={0} className="inline-grid p-0">
              <FlowButton text="Book Your Session" href="https://buy.stripe.com/5kQ6oHdwz2bXbJn4oE2wU01" className="rounded-none" />
            </ShineBorder>
          </div>

          <p className="text-muted text-xs mt-2 tracking-wide">
            $995 AUD · One-time investment · 48-hour delivery
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-[#fafafa] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-[#fafafa] animate-pulse" />
        </div>
      </section>

      {/* ── Why Compound ── */}
      <section
        id="capabilities"
        className="relative z-10 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-16">
            <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              The Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Built by the team behind $1B in streetwear.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p className="text-lg text-[#ccc] leading-relaxed">
              Most brand agencies give you a PDF and a Pantone code. Compound gives you the same design eye that built the brands people lined up for.
            </p>
            <p className="text-lg text-[#ccc] leading-relaxed">
              Thousands of pieces of art. Logos that moved product at $100 a t-shirt. Creative systems that powered Culture Kings from a market stall to a $600M exit. That was not luck. That was skill.
            </p>
            <p className="text-lg text-[#ccc] leading-relaxed">
              We take that exact skill and apply it to your brand. Your colours, your typography, your visual system, all built to the standard of brands that sell on design alone.
            </p>
            <p className="text-lg text-[#ccc] leading-relaxed">
              The best part: we build it as a skill you own. Talk to your own AI agent and produce perfect on-brand landing pages, PDFs, documents, billboards. Every time. You never need us again.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section id="deliverables" className="relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-16">
            <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Deliverables
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-px bg-transparent md:bg-border/40">
            {([
              { title: 'Your Brand Audit', desc: 'We jump on a 30-min Zoom. Review your website, assets, guidelines, existing creative. Extract what works, flag what does not.' },
              { title: 'Your Design DNA', desc: 'We distill your brand into a complete design system. Colours, typography, spacing, tone of voice, visual hierarchy. All codified into a skill your AI understands.' },
              { title: 'Your Creative Rules', desc: 'The things that make your brand yours. Layout preferences, image style, copy tone, do and do not lists. We capture the nuance that generic tools miss.' },
              { title: 'Your Reference Library', desc: 'We curate a set of reference examples specific to your industry and aesthetic. Your AI learns from what good looks like for YOUR brand.' },
              { title: 'Your Quality Gate', desc: 'A custom pre-ship checklist built around your brand standards. Your AI self-reviews every output against YOUR criteria before delivering.' },
              { title: 'Your Growth Playbook', desc: 'SEO, CRO, and conversion patterns tailored to your market. Not generic best practices. Built around your actual customer journey.' },
            ] as { title: string; desc: string }[]).map((card, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 md:p-8 hover:bg-surface transition-colors">
                <h3 className="text-xl font-black mb-4 text-[#fafafa]">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="relative"
        style={{ background: '#0a0a0a' }}
      >
        {/* Animated grid background - bleeds into adjacent sections with fade */}
        <div className="absolute -top-[200px] -bottom-[200px] left-0 right-0 pointer-events-none" style={{ zIndex: 0 }}>
          <GridHeroBackground />
          <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Dark gradient overlay so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.60) 50%, rgba(10,10,10,0.72) 100%)',
          }}
        />

        {/* Section content */}
        <div className="relative z-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10 md:mb-16">
              <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
                Process
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px bg-transparent md:bg-border/40">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-[#0a0a0a] p-6 md:p-8 hover:bg-surface transition-colors"
                >
                  <p className="text-accent font-black text-3xl md:text-5xl leading-none mb-5 md:mb-8 tabular-nums">
                    0{i + 1}
                  </p>
                  <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Curated By ── */}
      <section
        id="curated-by"
        className="relative z-10 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-16 max-w-2xl">
            <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
              Curated By
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Built by operators who have spent decades in the trenches. Not
              consultants. Not theorists. People who have actually done it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px bg-transparent md:bg-border">
            {curators.map((person, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] p-6 md:p-8 hover:bg-surface transition-colors"
              >
                {/* Photo avatar */}
                {person.photo ? (
                  <img src={person.photo} alt={person.name} className="w-20 h-20 rounded-full object-cover mb-7 grayscale border-2 border-[#333]" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)' }} />
                ) : (
                  <div className="w-14 h-14 border border-border flex items-center justify-center mb-7 bg-accent/8">
                    <span className="text-accent font-black text-base tracking-wider">
                      {person.initials}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-black mb-1">{person.name}</h3>
                <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-5">
                  {person.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Already Built For ── */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-8">
            Already Built For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <img src="/logos/one-life-club.png" alt="One Life Club" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/ghost-builder.png" alt="Ghost Builder" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/otto.png" alt="Otto" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/creator-army.png" alt="Creator Army" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/beard-com.png" alt="Beard.Com" className="h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/finishr.png" alt="Finishr" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/logos/cao-v1.png" alt="CAO Partners" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="py-16 md:py-24 bg-[#0a0a0a]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              One Session.
              <br />
              Your Brand. Forever.
            </h2>
          </div>

          {/* Product card */}
          <div className="max-w-xl mx-auto">
            <div className="border border-border hover:border-accent/25 transition-colors">
              {/* Card header */}
              <div className="p-8 md:p-10 border-b border-border">
                <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
                  Compound Bespoke
                </p>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-[5rem] leading-none font-black tracking-tighter text-[#fafafa]">
                    $995
                  </span>
                  <span className="text-muted text-xl pb-3 font-semibold">AUD</span>
                </div>
                <p className="text-muted text-sm">
                  One-time investment. Your complete brand identity system, built by our creative team.
                </p>
              </div>

              {/* Feature list */}
              <div className="p-8 md:p-10">
                <ul className="space-y-5 mb-10">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-accent font-black mt-0.5 leading-none">→</span>
                      <div className="text-sm leading-snug">
                        <span className="font-semibold text-[#fafafa]">{f.name}</span>
                        {f.description && (
                          <span className="text-[#888]">. {f.description}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <FlowButton text="Book Your Session" href="https://buy.stripe.com/5kQ6oHdwz2bXbJn4oE2wU01" className="w-full justify-center" />

                <p className="text-muted text-xs text-center mt-5 leading-relaxed">
                  One-time investment. No subscriptions. No surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cybercore Background Wrapper ── */}
      <div className="relative overflow-hidden">
        <CybercoreBackground beamCount={50} />

      {/* ── FAQ ── */}
      <section id="faq" className="relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 md:mb-16">
            <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-7">
                <summary className="flex items-center justify-between gap-6">
                  <span className="font-bold text-lg text-[#fafafa] group-hover:text-accent transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="faq-icon text-accent text-3xl font-light leading-none flex-shrink-0 w-7 text-center">
                    +
                  </span>
                </summary>
                <p className="text-muted leading-relaxed mt-5 pr-12 text-sm md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {([
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5d82d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:'drop-shadow(0 0 6px rgba(197,216,45,0.4))'}}>
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                label: '48-hour delivery',
                desc: 'From call to your inbox',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5d82d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:'drop-shadow(0 0 6px rgba(197,216,45,0.4))'}}>
                    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
                  </svg>
                ),
                label: '$1B+ in brands built',
                desc: 'The same eye, your brand',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5d82d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:'drop-shadow(0 0 6px rgba(197,216,45,0.4))'}}>
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                ),
                label: 'One revision included',
                desc: 'We get it right',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5d82d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:'drop-shadow(0 0 6px rgba(197,216,45,0.4))'}}>
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
                label: 'Direct support',
                desc: 'hello@thecompoundagency.com',
              },
            ] as {icon: ReactNode; label: string; desc: string}[]).map((t, i) => (
              <div key={i} className="text-center min-w-0">
                <div className="flex justify-center mb-3">{t.icon}</div>
                <div className="text-sm font-semibold text-[#fafafa] mb-1">{t.label}</div>
                <div className="text-xs text-[#888] break-all">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ── Footer ── */}
      <footer className="relative z-10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <span className="font-black text-xs tracking-[0.3em] uppercase text-[#fafafa]">
              COMPOUND
            </span>
            <a
              href="mailto:hello@thecompoundagency.com"
              className="text-muted text-xs tracking-wide hover:text-[#fafafa] transition-colors"
            >
              hello@thecompoundagency.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border-t border-border pt-5">
            <a href="/refund-policy" className="text-muted text-xs tracking-wide hover:text-[#fafafa] transition-colors">
              Refund Policy
            </a>
            <span className="text-border text-xs hidden sm:inline">·</span>
            <a href="/terms" className="text-muted text-xs tracking-wide hover:text-[#fafafa] transition-colors">
              Terms
            </a>
            <span className="text-border text-xs hidden sm:inline">·</span>
            <a href="/privacy" className="text-muted text-xs tracking-wide hover:text-[#fafafa] transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-muted text-xs text-center">
            © 2026 Compound. Built by operators, for operators.
          </p>
        </div>
      </footer>
      </div>{/* End Cybercore Background Wrapper */}
    </main>
  )
}
