import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";


import TextHeading from "../../../common/components/TextHeading";
import { productData } from "../../../constants/indxex";

const FeaturedProducts = ( ) => {
    
  return (
    <section className="featured-section">
      
      { }
      <div className="featured-header">
        <TextHeading title="Featured Grocery" />

        <div className="featured-arrows">
          <div className="featured-prev">
            <FaArrowLeft />
          </div>
          <div className="featured-next">
            <FaArrowRight />
          </div>
        </div>
      </div>

      { }
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".featured-next",
          prevEl: ".featured-prev",
        }}
        className="swiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        speed={600}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
      >
       {productData.map((item) => (
  <SwiperSlide key={item.id}>
    <div className="product-card">

      { }
      <div className="product-img">
        <img src={item.productImage} alt={item.title} />
      </div>

      { }
      <div className="product-content">
        <h4>{item.title}</h4>
        <p className="product-weight">{item.weight}</p>

        <div className="price-row">
          <span className="new-price">${item.price}</span>
          <span className="old-price">$36.00</span>
        </div>

        <div className="cart-row">
          <input type="number" defaultValue={1} min={1} />
          <button className="add-btn">Add 🛒</button>
        </div>
      </div>

    </div>
  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;