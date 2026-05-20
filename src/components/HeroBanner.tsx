import { useState, useEffect } from 'react';
import { banners } from '../data/products';

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % banners.length), 4500);
    return () => clearInterval(t);
  }, []);

  const b = banners[active];

  return (
    <section className="hero-banner">
      <div
        className="hero-banner__bg"
        style={{ backgroundImage: `url(${b.bg})` }}
      />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content">
        <span className="hero-banner__tag">🔥 Limited Offer</span>
        <h1>{b.title}</h1>
        <p>{b.subtitle}</p>
        <button className="btn-primary hero-banner__btn">{b.cta} →</button>
      </div>
      <div className="hero-banner__dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
