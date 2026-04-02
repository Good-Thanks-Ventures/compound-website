"use client";
export default function SuccessPage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fafafa', minHeight: '100vh', fontFamily: 'var(--font-inter, Inter, ui-sans-serif, system-ui, sans-serif)', WebkitFontSmoothing: 'antialiased' }}>

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1e1e1e', backgroundColor: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: 900, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' as const }}>COMPOUND</span>
          </div>
          <a
            href="mailto:hello@thecompoundagency.com"
            style={{ fontSize: '13px', color: '#888888', textDecoration: 'none' }}
          >
            Need help?
          </a>
        </div>
      </nav>

      {/* Main */}
      <main style={{ paddingTop: '56px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '56px 24px 80px', position: 'relative' }}>

        {/* Ambient glow */}
        <div aria-hidden style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(197,216,45,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '560px', width: '100%', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,216,45,0.08)', border: '1px solid rgba(197,216,45,0.2)', borderRadius: '100px', padding: '6px 14px', marginBottom: '32px' }}>
            <span style={{ fontSize: '13px', color: '#c5d82d', fontWeight: 500, letterSpacing: '0.02em' }}>Payment confirmed</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
            You are in.
          </h1>

          <p style={{ fontSize: '18px', color: '#888888', lineHeight: 1.6, marginBottom: '40px' }}>
            Your Compound build starts now. Book your 30-minute discovery call with the team.
          </p>

          {/* Calendly booking button */}
          <a
            href="https://calendly.com/d/cxt2-cpb-tzw/compound-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#c5d82d',
              color: '#0a0a0a',
              fontWeight: 800,
              fontSize: '16px',
              letterSpacing: '-0.01em',
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              marginBottom: '56px',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Your Discovery Call
          </a>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#1e1e1e', marginBottom: '40px' }} />

          {/* What happens next */}
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#888888', textTransform: 'uppercase' as const, marginBottom: '20px' }}>
              What Happens Next
            </p>

            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  n: '01',
                  title: 'Book your call',
                  detail: 'Pick a time that works. 30 minutes on Zoom with Graham and Tyler.',
                },
                {
                  n: '02',
                  title: 'Discovery session',
                  detail: 'Tyler reviews your brand assets, website, and existing creative. We extract your design DNA.',
                },
                {
                  n: '03',
                  title: 'We build your brand system',
                  detail: 'Tyler builds your complete brand identity, creative templates, and AI-ready skill file. Delivered within 48 hours.',
                },
                {
                  n: '04',
                  title: 'Start creating',
                  detail: 'Plug your skill into Claude Code or OpenClaw. Everything you produce is on-brand from day one.',
                },
              ].map(({ n, title, detail }) => (
                <li key={n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#111111', border: '1px solid #1e1e1e', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#c5d82d', letterSpacing: '0.05em', marginTop: '1px' }}>
                    {n}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em', marginBottom: '4px' }}>{title}</p>
                    <p style={{ fontSize: '14px', color: '#888888', lineHeight: 1.55 }}>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Footer note */}
          <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid #1e1e1e', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#555555' }}>
              Questions?{' '}
              <a href="mailto:hello@thecompoundagency.com" style={{ color: '#888888', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                hello@thecompoundagency.com
              </a>
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}
