import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Paradise Nursery</p>
          <h1>
            A plant for every
            <br />
            windowsill you own.
          </h1>
          <p className="lede">
            Eighteen houseplants picked for people who forget to water on
            schedule. Browse by what they do &mdash; clean air, good scent,
            or almost no effort at all.
          </p>
          <Link to="/products" className="btn btn-primary btn-large">
            Get Started
          </Link>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="hero-svg">
            <ellipse cx="200" cy="360" rx="150" ry="18" fill="#000" opacity="0.15" />
            <path d="M160 360 L172 260 Q200 250 228 260 L240 360 Z" fill="#B9714A" />
            {[
              { d: 'M200 260 C160 230 150 160 190 100 C210 150 210 210 200 260', c: '#3E6B4A' },
              { d: 'M200 260 C240 230 250 160 210 100 C190 150 190 210 200 260', c: '#4F7A52' },
              { d: 'M200 260 C170 220 190 150 200 90 C215 150 230 220 200 260', c: '#6E9B5E' },
            ].map((leaf, i) => (
              <path key={i} d={leaf.d} fill={leaf.c} opacity={0.92} />
            ))}
            <circle cx="200" cy="70" r="10" fill="#D4A24C" />
          </svg>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
