import React, { useState, useMemo } from "react";
import TextHeading from "../../../common/components/TextHeading";
import { productData } from "../../../constants/indxex";

const categories = [
  "Frozen Foods",
  "Diet Foods",
  "Healthy Foods",
  "Vitamin Items",
];

const WeeklyBest = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

 
const getRandomProducts = () => {
  return [...productData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 12);
};

const displayedProducts = useMemo(() => getRandomProducts(), [activeCategory]);
  return (
    <section className="featured-section">
      { }
      <div className="featured-header">
        <TextHeading title="Weekly Best Selling Groceries" />

        <div className="featured-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active-btn" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

     
      <div className="product-grid">
          {displayedProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img">
                <img src={item.productImage} alt={item.title} />
              </div>

              <div className="product-content">
                <h4>{item.title}</h4>
                <p className="product-weight">{item.weight}</p>

                <div className="price-row">
                  <span className="new-price">${item.price}</span>
                </div>

                <div className="cart-row">
                  <input type="number" defaultValue={1} min={1} />
                  <button className="add-btn">Add 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default WeeklyBest;