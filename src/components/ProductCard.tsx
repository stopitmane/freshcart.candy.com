import { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-card__badge badge--${product.badge}`}>
            {product.badge === 'sale' ? `${discount}% OFF` : product.badge}
          </span>
        )}
        <button className="product-card__wishlist" aria-label="Wishlist">♡</button>
      </div>

      <div className="product-card__body">
        <span className="product-card__cat">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__unit">{product.unit}</p>

        <div className="product-card__rating">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          <span>{product.rating} ({product.reviews})</span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="price-main">₦{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="price-original">₦{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            className={`product-card__btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </article>
  );
}
