import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import "./hero.css";
import { banner1, banner2 } from "../../../../assets/Ekomart_Assets";
import { categories } from "../../../../constants/indxex";
import Promo from "../../components/Promo";

const Hero = () => {
  const banners = [banner1, banner2];

  return (
    <section className="hero-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero"
              style={{ backgroundImage: `url(${banner})` }}
            >
              { }

              <div className="hero-content">
                <span className="hero-subtitle">
                  Get up to 30% off on your first $150 purchase
                </span>

                <h1>
                  Do not miss our amazing <br />
                  grocery deals
                </h1>

                <button className="hero-btn">
                  Shop Now →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        { }
        <div className="hero-arrow hero-prev">
          <FaArrowLeft />
        </div>

        <div className="hero-arrow hero-next">
          <FaArrowRight />
        </div>
      </Swiper>

      { }
      
     
   <div className="category-section">
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={800}
      spaceBetween={20}
      slidesPerView={"auto"} // Let CSS define the width
    >
      {categories.map((cat, index) => (
        <SwiperSlide key={index} className="category-slide">
          <div className="category-card">
            <img src={cat.img} alt={cat.title} />
            <span>{cat.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

       <Promo />
    </section>
  );
};

export default Hero;