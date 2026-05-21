import { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import DealsPage from './components/DealsPage';
import AboutPage from './components/AboutPage';
import { products } from './data/products';
import type { Category } from './types';
import './App.css';

type Page = 'home' | 'shop' | 'deals' | 'about';

const CATEGORIES: Category[] = ['All', 'Grains', 'Vegetables', 'Proteins', 'Oils', 'Spices', 'Drinks'];
const CAT_ICONS: Record<string, string> = {
  All: '🛍️', Grains: '🌾', Vegetables: '🥬', Proteins: '🍗', Oils: '🫙', Spices: '🌶️', Drinks: '🥤',
};

function ShopPage() {
  const [category, setCategory] = useState<Category>('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');

  const filtered = useMemo(() => {
    let list = products
      .filter(p => category === 'All' || p.category === category)
      .filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    if (sort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating')     list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, search, sort]);

  return (
    <main>
      <HeroBanner />

      <section className="categories-bar">
        <div className="container">
          <div className="categories-scroll">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`cat-chip ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                <span>{CAT_ICONS[cat]}</span> {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-section">
        <div className="container">
          <div className="shop-toolbar">
            <div className="shop-toolbar__left">
              <h2>{category === 'All' ? 'All Products' : category}</h2>
              <span className="count">{filtered.length} items</span>
            </div>
            <div className="shop-toolbar__right">
              <div className="search-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className="sort-select" value={sort} onChange={e => setSort(e.target.value as typeof sort)}>
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>🔍</span>
              <p>No products found for "<strong>{search}</strong>"</p>
              <button onClick={() => setSearch('')} className="btn-outline">Clear search</button>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <div className="trust-strip__grid">
            {[
              { icon: '🚚', title: 'Free Delivery',    sub: 'Orders over ₦10,000' },
              { icon: '✅', title: 'Verified Quality', sub: 'Every product tested' },
              { icon: '🔄', title: '7-Day Returns',    sub: 'No questions asked' },
              { icon: '🔒', title: 'Secure Checkout',  sub: 'Powered by Paystack' },
            ].map(t => (
              <div key={t.title} className="trust-item">
                <span className="trust-icon">{t.icon}</span>
                <div><strong>{t.title}</strong><p>{t.sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built by <a href="https://groovyjwttp-portfolio.vercel.app" target="_blank" rel="noreferrer">Ajayi Taiwo John</a> · Freshcart © 2026</p>
      </footer>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <CartProvider>
      <Navbar page={page} onNavigate={setPage} />
      {page === 'home'  && <ShopPage />}
      {page === 'shop'  && <ShopPage />}
      {page === 'deals' && <DealsPage />}
      {page === 'about' && <AboutPage />}
    </CartProvider>
  );
}
