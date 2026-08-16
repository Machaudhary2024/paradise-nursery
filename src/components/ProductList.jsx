import { useSelector, useDispatch } from 'react-redux';
import Header from './Header.jsx';
import PlantIllustration from './PlantIllustration.jsx';
import { categories, plants } from '../data/plants.js';
import { addItem, selectCartItems } from '../redux/CartSlice.jsx';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  const handleAdd = (plant) => {
    const { illustration, ...rest } = plant;
    dispatch(addItem({ ...rest, illustration }));
  };

  return (
    <div className="page product-page">
      <Header />

      <div className="product-page-intro">
        <p className="eyebrow">The full catalog</p>
        <h1>Find your next plant</h1>
        <p className="lede">
          Eighteen houseplants, grouped by what they do best. Everything here
          has survived our own apartments first.
        </p>
      </div>

      {categories.map((category) => (
        <section
          key={category.id}
          className="category-section"
          aria-labelledby={`${category.id}-heading`}
        >
          <div className="category-header">
            <h2 id={`${category.id}-heading`}>{category.label}</h2>
            <p>{category.tagline}</p>
          </div>

          <ul className="plant-grid">
            {plants
              .filter((plant) => plant.category === category.id)
              .map((plant) => {
                const inCart = cartIds.has(plant.id);
                return (
                  <li className="plant-card" key={plant.id}>
                    <div className="plant-thumb">
                      <PlantIllustration
                        variant={plant.illustration.variant}
                        leaf={plant.illustration.leaf}
                        pot={plant.illustration.pot}
                      />
                    </div>
                    <div className="plant-card-body">
                      <h3>{plant.name}</h3>
                      <p className="plant-blurb">{plant.blurb}</p>
                      <div className="plant-card-footer">
                        <span className="price">${plant.price}</span>
                        <button
                          type="button"
                          className="add-to-cart-btn"
                          disabled={inCart}
                          onClick={() => handleAdd(plant)}
                        >
                          {inCart ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      ))}
    </div>
  );
}
