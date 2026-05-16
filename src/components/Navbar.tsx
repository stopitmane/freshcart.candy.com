import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartCount } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar">
        🚚 Free delivery on orders over ₦10,000 &nbsp;|&nbsp; 📞 Support: 0800-FRESHCART
      </div>

      <header className="navbar">
        <div className="navbar__inner">
          <a href="/" className="navbar__logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">Fresh<strong>cart</strong></span>
          </a>

          <div className="navbar__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search for food, vegetables, proteins..." />
          </div>

          <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
            <a href="#" className="navbar__link active">Home</a>
            <a href="#" className="navbar__link">Shop</a>
            <a href="#" className="navbar__link">Deals</a>
            <a href="#" className="navbar__link">About</a>
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
