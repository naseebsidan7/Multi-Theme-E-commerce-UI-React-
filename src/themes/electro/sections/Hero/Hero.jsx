
import "swiper/css";
import "swiper/css/navigation";

import "./hero.css";
 
import Promo from "../../components/Promo";
import Banner from "../../components/Banner";
import PromoProducts from "../../components/PromoProducts";

const Hero = () => {
 
  return (
    <section className="hero-wrapper">
       <Banner/>
       <PromoProducts />
       <Promo /> 
    </section>
  );
};

export default Hero;