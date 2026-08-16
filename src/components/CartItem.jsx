import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header.jsx';
import PlantIllustration from './PlantIllustration.jsx';
import {
  selectCartItems,
  selectTotalCost,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../redux/CartSlice.jsx';

function Row({ item }) {
  const dispatch = useDispatch();
  const lineTotal = item.price * item.quantity;

  return (
    <li className="cart-row">
      <div className="cart-row-thumb">
        <PlantIllustration
          variant={item.illustration.variant}
          leaf={item.illustration.leaf}
          pot={item.illustration.pot}
        />
      </div>

      <div className="cart-row-info">
        <h3>{item.name}</h3>
        <p className="unit-price">${item.price} each</p>
      </div>

      <div className="cart-row-qty">
        <button
          type="button"
          aria-label={`Decrease quantity of ${item.name}`}
          onClick={() => dispatch(decrementQuantity(item.id))}
        >
          &minus;
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() => dispatch(incrementQuantity(item.id))}
        >
          +
        </button>
      </div>

      <div className="cart-row-total">${lineTotal}</div>

      <button
        type="button"
        className="remove-btn"
        onClick={() => dispatch(removeItem(item.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default function CartItem() {
  const items = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  return (
    <div className="page cart-page">
      <Header />

      <div className="cart-intro">
        <p className="eyebrow">Your cart</p>
        <h1>
          {items.length === 0
            ? 'Nothing here yet'
            : `${items.length} ${items.length === 1 ? 'plant' : 'plants'} picked out`}
        </h1>
        <p className="lede cart-total-line">
          Total: <span className="mono">${totalCost}</span>
        </p>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Go find something green.</p>
          <Link to="/products" className="btn btn-primary">
            Browse plants
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <Row item={item} key={item.id} />
            ))}
          </ul>

          <div className="cart-actions">
            <Link to="/products" className="btn btn-secondary">
              Continue shopping
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setCheckoutMessage(true)}
            >
              Checkout
            </button>
          </div>

          {checkoutMessage && (
            <p className="checkout-note" role="status">
              Checkout is coming soon &mdash; we&rsquo;re still potting this
              feature.
            </p>
          )}
        </>
      )}
    </div>
  );
}
