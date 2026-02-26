 
import { discount2, discount3 } from "../../../assets/Ekomart_Assets";
import TextHeading from "../../../common/components/TextHeading";
import { productData } from "../../../constants/indxex";

const DiscountProducts = () => {
  const items = productData.slice(0, 4);

  return (
    <section className="discount-section">

      { }
      <div className="discount-header">
        <TextHeading title="Products With Discounts" />
        <span className="expired-text">Sorry, expired!</span>
      </div>

      <div className="discount-layout">

        { }
        <div className="discount-left">

          <div
            className="banner banner-orange"
            style={{ backgroundImage: `url(${discount2})` }}
          >
            <div className="banner-content">
              <h3>Alpro Organic Flavored Fresh Juice</h3>
              <p>Only</p>
              <h2>$15.00</h2>
            </div>
          </div>

         <div
            className="banner banner-green"
            style={{ backgroundImage: `url(${discount3})` }}
          >
            <div className="banner-content">
              <h3>Alpro Organic Flavored Fresh Juice</h3>
              <p>Only</p>
              <h2>$15.00</h2>
            </div>
          </div>
        </div>

        { }
        <div className="discount-right">
          {items.map((item) => (
            <div className="horizontal-card" key={item.id}>

              <div className="card-image">
                <div className="ribbon">25% Off</div>
                <img src={item.productImage} alt={item.title} />
              </div>

              <div className="card-details">
                <h4>{item.title}</h4>
                <span className="weight">{item.weight}</span>

                <div className="price">
                  <span className="new">${item.price}</span>
                  <span className="old">$36.00</span>
                </div>

                <div className="cart-row">
                  <input type="number" defaultValue={1} min={1} />
                  <button>Add 🛒</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiscountProducts;