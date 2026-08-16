# Paradise Nursery

A shopping cart web application for a small online houseplant shop. Built
with React, React Router, and Redux Toolkit as a final project applying the
skills from earlier practice projects: dynamic rendering, component
composition, and centralized state management.

## Project name

**Paradise Nursery** — "a plant for every windowsill."

## What it does

- **Landing page** — introduces the shop and its story, with a
  "Get Started" button into the catalog.
- **Product listing** — 18 houseplants across 3 categories
  (Air-Purifying, Aromatic & Flowering, Low-Maintenance Succulents), each
  with a thumbnail, name, and price. "Add to Cart" adds the plant, disables
  itself, and updates the cart icon count in the navbar.
- **Shopping cart** — lists every item with its thumbnail, name, unit
  price, and line total; lets you increase/decrease quantity, delete an
  item, see the running total cost, continue shopping, or check out (shows
  a "coming soon" message).

State (what's in the cart, and each item's quantity) is managed globally
with a Redux Toolkit slice (`CartSlice.jsx`) so the cart count in the
navbar, the product list's "Added to Cart" state, and the cart page all
stay in sync automatically.

## Tech stack

- React 18 + Vite
- React Router (`/`, `/products`, `/cart`)
- Redux Toolkit + React-Redux
- Plain CSS (no UI framework) — design tokens in `src/App.css`
- All plant thumbnails are hand-built inline SVG (`PlantIllustration.jsx`)
  — no external image files required

## Project structure

```
src/
  App.jsx                  # routes + landing page (hero + Get Started)
  App.css                  # design tokens & all component styling
  index.css                # global reset
  main.jsx                 # entry point (Provider + BrowserRouter)
  components/
    Header.jsx              # navbar: Home / Plants / Cart + live cart count
    AboutUs.jsx              # "About Paradise Nursery" section
    ProductList.jsx          # product listing page (all categories)
    CartItem.jsx             # shopping cart page
    PlantIllustration.jsx    # reusable SVG plant thumbnail component
  data/
    plants.js                # catalog: 18 plants, 3 categories
  redux/
    store.js                 # Redux store
    CartSlice.jsx             # cart state: add/remove/inc/dec + selectors
```

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Building for production

```bash
npm run build
npm run preview
```
