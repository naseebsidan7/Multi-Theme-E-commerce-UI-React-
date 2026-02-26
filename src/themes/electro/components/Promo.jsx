import { promoSp } from "../../../constants/indxex";

 
const Promo = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        {promoSp.map((item) => (
          <div className="promo-card" key={item.id}>
            <div className="promo-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="promo-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promo;