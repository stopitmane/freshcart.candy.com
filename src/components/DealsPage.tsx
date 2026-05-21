import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function DealsPage() {
  const [claimed, setClaimed] = useState<Record<string, boolean>>({});

  const deals = products.filter(p => p.badge === 'sale' || p.badge === 'popular');
  const flashDeals = products.filter(p => p.badge === 'sale');

  const handleClaim = (code: string) => {
    setClaimed(prev => ({ ...prev, [code]: true }));
  };

  const coupons = [
    { code: 'SAVE10',    discount: '10% off',    min: '₦5,000',  color: '#16a34a' },
    { code: 'FRESH20',   discount: '20% off',    min: '₦10,000', color: '#2563eb' },
    { code: 'NEWUSER15', discount: '15% off',    min: 'First order', color: '#7c3aed' },
  ];

  return (
    <main className="page-content">
      {/* Hero */}
      <section className="deals-hero">
        <div className="container">
          <div className="deals-hero__inner">
            <div>
              <span className="deals-hero__tag">🔥 Limited Time</span>
              <h1>Super Value Deals</h1>
              <p>Save big on fresh Nigerian produce — deals updated daily.</p>
            </div>
            <div className="deals-hero__stat">
              <strong>{deals.length}</strong>
              <span>Active deals today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon strip */}
      <section className="coupons-section">
        <div className="container">
          <h2 className="section-title">Your Coupons</h2>
          <div className="coupons-grid">
            {coupons.map(c => (
              <div key={c.code} className="coupon-card" style={{ borderLeftColor: c.color }}>
                <div className="coupon-card__left">
                  <span className="coupon-discount" style={{ color: c.color }}>{c.discount}</span>
                  <span className="coupon-min">Min. order: {c.min}</span>
                </div>
                <div className="coupon-card__right">
                  <div className="coupon-code">{c.code}</div>
                  <button
                    className={`coupon-btn ${claimed[c.code] ? 'claimed' : ''}`}
                    style={!claimed[c.code] ? { background: c.color } : {}}
                    onClick={() => handleClaim(c.code)}
                  >
                    {claimed[c.code] ? '✓ Claimed' : 'Claim'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash deals */}
      <section className="deals-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">⚡ Flash Sales</h2>
            <span className="section-sub">Limited stock — order now</span>
          </div>
          <div className="products-grid">
            {flashDeals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="deals-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🏆 Most Popular</h2>
            <span className="section-sub">What customers are buying most</span>
          </div>
          <div className="products-grid">
            {products.filter(p => p.badge === 'popular').map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
