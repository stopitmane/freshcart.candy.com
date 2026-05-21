import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

type Page = 'home' | 'shop' | 'deals' | 'about';

interface Props {
  page: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ page, onNavigate }: Props) {
  const { cartCount } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = (p: Page) => { onNavigate(p); setMenuOpen(false); };

  return (
    <>
      <div className="announcement-bar">
        🚚 Free delivery on orders over ₦10,000 &nbsp;|&nbsp; 📞 Support: 0800-FRESHCART
      </div>

      <header className="navbar">
        <div className="navbar__inner">
          <button className="navbar__logo" onClick={() => nav('home')}>
            <span className="logo-icon">🛒</span>
            <span className="logo-text">Fresh<strong>cart</strong></span>
          </button>

          <div className="navbar__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search for food, vegetables, proteins..." />
          </div>

          <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
            <button className={`navbar__link ${page === 'home'  ? 'active' : ''}`} onClick={() => nav('home')}>Home</button>
            <button className={`navbar__link ${page === 'shop'  ? 'active' : ''}`} onClick={() => nav('shop')}>Shop</button>
            <button className={`navbar__link ${page === 'deals' ? 'active' : ''}`} onClick={() => nav('deals')}>Deals</button>
            <button className={`navbar__link ${page === 'about' ? 'active' : ''}`} onClick={() => nav('about')}>About</button>
          </nav>

          <div className="navbar__actions">
            <button className="navbar__icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button className="navbar__cart-btn" onClick={() => setDrawerOpen(true)} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </header>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
