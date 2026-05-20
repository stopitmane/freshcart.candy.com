import { useCart } from '../context/CartContext';

interface Props { open: boolean; onClose: () => void; }

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, cartTotal, updateQty, removeFromCart, clearCart } = useCart();

  return (
    <>
      <div className={`drawer-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-drawer__header">
          <h3>Your Cart <span>({cart.reduce((s,i)=>s+i.qty,0)})</span></h3>
          <button onClick={onClose} className="drawer-close">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer__empty">
            <span>🛒</span>
            <p>Your cart is empty</p>
            <button onClick={onClose} className="btn-primary">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__img" />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">₦{item.price.toLocaleString()}</p>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total</span>
                <strong>₦{cartTotal.toLocaleString()}</strong>
              </div>
              <button className="btn-primary btn-full">Checkout with Paystack</button>
              <button className="btn-ghost btn-full" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
