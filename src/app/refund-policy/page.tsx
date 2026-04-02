export default function RefundPolicy() {
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
          Refund Policy
        </h1>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '48px' }}>
          Last updated: March 2026
        </p>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              30-Day Money-Back Guarantee
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              We stand behind Compound. If you are not satisfied for any reason, email us within 30 days of your purchase and we will refund you in full. No questions asked.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              How to Request a Refund
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Send an email to{' '}
              <a href="mailto:hello@thecompoundagency.com" style={{ color: '#c5d82d', textDecoration: 'none', fontWeight: 600 }}>
                hello@thecompoundagency.com
              </a>{' '}
              with the subject line "Refund Request" and include the email address used at checkout. We will process your refund within 5 business days.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Processing Time
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Refunds are processed within 5 business days of your request. Depending on your bank or card issuer, funds may take an additional 3 to 10 business days to appear in your account.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              After 30 Days
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Compound is a digital product. After the 30-day window has passed, we are unable to offer refunds. We encourage you to reach out if you have any issues before that period ends.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: '#fafafa' }}>
              Contact
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Questions about this policy? Email us at{' '}
              <a href="mailto:hello@thecompoundagency.com" style={{ color: '#c5d82d', textDecoration: 'none', fontWeight: 600 }}>
                hello@thecompoundagency.com
              </a>
            </p>
          </section>

        </div>

        <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid #1e1e1e', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/terms" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Terms</a>
          <a href="/privacy" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>Home</a>
        </div>
      </div>

    </main>
  )
}
