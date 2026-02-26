import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

  
import { bannerGlass, bannerImage, bannerPhone, bannerWatch } from '../../../assets/Electro_Assets';

const HeroSlider = () => {
  const slides = [
    { img: bannerWatch, title: "THE NEW STANDARD", subtitle: "UNDER FAVORABLE SMARTWATCHES", price: "749", cents: "99" },
    { img: bannerPhone, title: "LATEST SMARTPHONES", subtitle: "EXPLORE THE NEW GENERATION", price: "999", cents: "00" },
    { img: bannerGlass, title: "PREMIUM EYEWEAR", subtitle: "STYLE MEETS TECHNOLOGY", price: "299", cents: "50" },
  ];

  return (
    <div className="hero-slider-container" style={{ backgroundImage: `url(${bannerImage})` }}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={600} // Fast right-to-left transition speed
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            { }
            {({ isActive }) => (
              <div className={`slide-inner ${isActive ? 'animate-content' : ''}`}>
               
                <div className="slide-text">
                  <h2 className="main-title">{slide.title}</h2>
                  <p className="sub-title">{slide.subtitle}</p>
                  <div className="price-tag">
                    <span className="from">FROM</span>
                    <div className="amount">
                      <span className="currency">$</span>
                      <span className="dollars">{slide.price}</span>
                      <span className="cents">{slide.cents}</span>
                    </div>
                  </div>
                  <button className="buy-btn">Start Buying</button>
                </div>
                
                <div className="slide-image">
                  <img src={slide.img} alt="Product" className="floating-img" />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;