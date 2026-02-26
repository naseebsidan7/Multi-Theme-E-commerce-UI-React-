import { imgController2 } from "../../../assets/Electro_Assets";

 
const SingleProductOffer = () => {
  return (
    <div className="offer-card">

      <div className="offer-header">
        <h2>Special <br /> Offer</h2>
        <div className="save-badge">
          <span>Save</span>
          <strong>$120</strong>
        </div>
      </div>

      <div className="offer-image">
        <img src={imgController2} alt="Game Controller" />
      </div>

      <h3 className="offer-title">
        Game Console Controller <br /> + USB 3.0 Cable
      </h3>

      <div className="price-section">
        <span className="old-price">$99,00</span>
        <span className="new-price">$79,00</span>
      </div>

      <div className="stock-info">
        <span>Available: <strong>6</strong></span>
        <span>Already Sold: <strong>28</strong></span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <p className="countdown-text">Hurry Up! Offer ends in:</p>

      <div className="countdown">
        <div className="time-box">
          <h4>00</h4>
          <span>HOURS</span>
        </div>
        <div className="time-box">
          <h4>00</h4>
          <span>MINS</span>
        </div>
        <div className="time-box">
          <h4>00</h4>
          <span>SECS</span>
        </div>
      </div>

    </div>
  );
};

export default SingleProductOffer;