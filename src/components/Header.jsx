import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice.jsx';

export default function Header() {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M12 21c0-6 4-8 4-13a4 4 0 0 0-8 0c0 5 4 7 4 13Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Paradise Nursery
      </NavLink>

      <nav className="main-nav" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="cart-link">
            Cart
            <span className="cart-count" aria-label={`${totalQuantity} items in cart`}>
              {totalQuantity}
            </span>
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
