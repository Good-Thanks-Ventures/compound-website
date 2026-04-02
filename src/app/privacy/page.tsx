export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '48px' }}>
          Last updated: March 2026
        </p>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              What We Collect
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              When you purchase Compound, we collect your name, email address, and payment information. Payment details are handled entirely by Stripe and are never stored on our servers. We only retain what is necessary to fulfill your order and provide support.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              How We Use Your Information
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              We use your email address to deliver your purchase, send download instructions, and occasionally notify you of product updates or new releases related to Compound. You can opt out of marketing emails at any time.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Payment Processing
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              All payments are processed securely by Stripe. We do not see or store your full card number. Stripe's privacy policy governs the handling of your payment data. You can read it at{' '}
              <span style={{ color: '#c5d82d' }}>stripe.com/privacy</span>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              We Do Not Sell Your Data
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information is used solely to operate and improve the Compound product and provide you with support.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Data Retention
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              We retain your purchase records and contact information for as long as necessary to provide support and comply with legal obligations. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Contact
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Questions about this policy or your data? Email us at{' '}
              <a href="mailto:hello@thecompoundagency.com" style={{ color: '#c5d82d', textDecoration: 'none', fontWeight: 600 }}>
                hello@thecompoundagency.com
              </a>
            </p>
          </section>

        </div>

        <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid #1e1e1e', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/refund-policy" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Refund Policy</a>
          <a href="/terms" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Terms</a>
          <a href="/" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Home</a>
        </div>
      </div>

    </main>
  )
}
