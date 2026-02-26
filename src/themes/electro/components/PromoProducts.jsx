 
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import { categories } from "../../../constants/indxex";
import { promo1, promo2, promo3, promo4 } from "../../../assets/Electro_Assets";
import { FaChevronRight } from "react-icons/fa";
 

 
 
const PromoProducts = () => {
      const promoData = [
        { img: promo1, title: "THE NEW STANDARD", },
        { img: promo2, title: "LATEST SMARTPHONES",  },
        { img: promo3, title: "PREMIUM EYEWEAR", },
          { img: promo4, title: "PREMIUM EYEWEAR", },
      ];
  return (
    <div>
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
      {promoData.map((promo, index) => (
        <SwiperSlide key={index} className="category-slide">
          <div className="promoProduct-card  ">
            <img src={promo.img} alt={promo.title} />
             <div className="promoProduct-details">
                   <span className="promoProduct-name">{promo.title}</span>
                  <div className="shop-now"> Shop now <span className="promoProduct-btnwrapper"> <FaChevronRight className="promoProduct-arrow" /> </span></div>
             </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

    </div>
  )
}

export default PromoProducts