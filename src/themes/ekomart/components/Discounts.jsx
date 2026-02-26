import React from 'react';
import { discount1, discount4, discount5, discount6 } from '../../../assets/Ekomart_Assets';

const discountData = [
  { id: 1, tag: "Weekend Discount", title: "Drink Fresh Corn Juice", subtitle: "Good Taste", color: "#ffffc9", img: discount1 },
  { id: 2, tag: "Weekend Discount", title: "Organic Lemon", subtitle: "Flavored Banana Chips", color: "#e5ede0", img: discount4 },
  { id: 3, tag: "Weekend Discount", title: "Nozes Pecanera", subtitle: "Brasil Chocolate Snacks", color: "#f9eee0", img: discount5 },
  { id: 4, tag: "Weekend Discount", title: "Strawberry Water", subtitle: "Drinks Flavors Awesome", color: "#e5e5e5", img: discount6 },
];

const Discounts = () => {
  return (
    <section className="discount-section">
      <div className="discount-grid">
        {discountData.map((item) => (
          <div key={item.id} className="discount-card" style={{ backgroundColor: item.color }}>
            <div className="discount-content">
              <span className="discount-tag">{item.tag}</span>
              <h3>{item.title} <br /> <span className="subtitle">{item.subtitle}</span></h3>
              <button className="shop-btn">
                <span className="plus-icon">+</span> Shop Now
              </button>
            </div>
            { }
            <div className="card-image-wrapper">
               <img src={item.img} alt={item.title} className="bg-product-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discounts;