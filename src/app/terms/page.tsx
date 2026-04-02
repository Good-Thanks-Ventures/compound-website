export default function Terms() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fafafa', minHeight: '100vh', fontFamily: 'var(--font-inter, Inter, ui-sans-serif, system-ui, sans-serif)', WebkitFontSmoothing: 'antialiased' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1e1e1e', backgroundColor: 'rgba(10,10,10,0.90)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontWeight: 900, fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fafafa', textDecoration: 'none' }}>
            COMPOUND
          </a>
          <a href="/" style={{ fontSize: '13px', color: '#888888', textDecoration: 'none' }}>
            Back to home
          </a>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '96px 24px 80px' }}>

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c5d82d', marginBottom: '16px' }}>
          Legal
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '12px' }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '48px' }}>
          Last updated: March 2026
        </p>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Digital Product License
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              When you purchase Compound, you receive a personal and commercial use license. You may use the skill files to create work for yourself and for your clients. This license is granted to a single user.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              One License, One User
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              One purchase covers one user. You may not share your download with others, distribute the skill files to additional team members, or sell access to the product. If you need licenses for multiple team members, please contact us.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              No Redistribution or Resale
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              You may not resell, sublicense, redistribute, or repackage the Compound skill files or any part of the product as your own. This includes uploading the files to public repositories, skill marketplaces, or any other distribution platform.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Product Provided As-Is
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Compound is provided as a digital product without warranty of any kind. We make no guarantees about specific outcomes or results. We do offer a 30-day money-back guarantee; see our{' '}
              <a href="/refund-policy" style={{ color: '#c5d82d', textDecoration: 'none', fontWeight: 600 }}>Refund Policy</a>{' '}
              for details.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Updates to These Terms
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Good Thanks Ventures Pty Ltd (trading as Compound) reserves the right to update these terms at any time. Continued use of the product following any update constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Governing Law
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              These terms are governed by the laws of Queensland, Australia. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Queensland.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Contact
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Questions about these terms? Email us at{' '}
              <a href="mailto:hello@thecompoundagency.com" style={{ color: '#c5d82d', textDecoration: 'none', fontWeight: 600 }}>
                hello@thecompoundagency.com
              </a>
            </p>
          </section>

        </div>

        <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid #1e1e1e', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/refund-policy" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Refund Policy</a>
          <a href="/privacy" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Home</a>
        </div>
      </div>

    </main>
  )
}
