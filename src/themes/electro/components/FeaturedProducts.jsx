import React, { useState, useMemo } from "react";
 
 
import { EleProductData as productData } from "../../../constants/indxex";
import SingleProductOffer from "../../electro/components/SingleProductOffer";
import ProductCard from "../../electro/components/productCard";

const categories = ["Featured", "On Sale", "Top Rated"];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
const handleCategoryChange = (category) => {
  setActiveCategory(category);
};

  // Shuffle products whenever category changes
  const getRandomProducts = () => {
    return [...productData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 8); // show 8 products
  };

  const displayedProducts = useMemo(() => {
    return getRandomProducts();
  }, [activeCategory]);

  return (
    <section className="featured-section">
      <div className="featured-container">

        <div className="offer-wrapper">
          <SingleProductOffer />
        </div>

        <div className="products-wrapper">

          { }
          <div className="tabs">
            {categories.map((category) => (
              <h3
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </h3>
            ))}
          </div>

          { }
          <div key={activeCategory} className="product-grid">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;