export default function AboutPage() {
  const team = [
    { name: 'Ajayi Taiwo',   role: 'Founder & Developer',  emoji: '👨‍💻' },
    { name: 'Adunola Bello', role: 'Operations Lead',       emoji: '👩‍💼' },
    { name: 'Chidi Okafor',  role: 'Logistics Manager',     emoji: '🚚' },
  ];

  const stats = [
    { value: '500+',  label: 'Products listed' },
    { value: '50+',   label: 'Verified farmers' },
    { value: '5,000+', label: 'Happy customers' },
    { value: '24hr',  label: 'Delivery SLA' },
  ];

  return (
    <main className="page-content">

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="about-hero__tag">🌾 Our Story</span>
          <h1>Fresh from the farm.<br /><span>Straight to your kitchen.</span></h1>
          <p>Freshcart was built to cut out the middlemen and connect Nigerian families directly with the farmers who grow their food.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map(s => (
              <div key={s.label} className="about-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="container about-two-col">
          <div className="about-text">
            <span className="about-label">Our Mission</span>
            <h2>Fair prices for farmers.<br />Fresh food for families.</h2>
            <p>The traditional market chain adds 3–5 middlemen between a farmer in Ogun State and a family in Lagos — each one taking a cut and adding days of transit time. We remove that chain entirely.</p>
            <p>Every seller on Freshcart is a verified local farmer or cooperative. We inspect produce before listing, pay farmers within 48 hours of sale, and deliver to your door within 24 hours of harvest.</p>
          </div>
          <div className="about-values">
            {[
              { icon: '🌱', title: 'Farm Fresh',    desc: 'Every product sourced directly from verified farmers across Nigeria.' },
              { icon: '🤝', title: 'Fair Trade',    desc: 'Farmers set their own prices. We charge a flat 8% platform fee — nothing more.' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Lagos same-day delivery. Abuja and Port Harcourt within 24 hours.' },
              { icon: '🔒', title: 'Quality Pledge',desc: 'Not satisfied? Full refund within 7 days, no questions asked.' },
            ].map(v => (
              <div key={v.title} className="about-value">
                <span className="about-value__icon">{v.icon}</span>
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section about-section--alt">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>The Team</h2>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.emoji}</div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to shop fresh?</h2>
          <p>Join over 5,000 families already buying direct from Nigerian farmers.</p>
          <a href="/" className="btn-primary">Shop Now →</a>
        </div>
      </section>

    </main>
  );
}
