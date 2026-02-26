import { payment } from "../../../assets/Ekomart_Assets";
import { Logo } from "../components";

 import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-left">
            <span className="plane">✈</span>
            <h3>
              Sign up to Newsletter
              <span> ...and receive <strong>$20 coupon for first shopping.</strong></span>
            </h3>
          </div>

          <div className="newsletter-right">
            <input type="email" placeholder="Email address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col brand">
           <Logo />

            <p className="support-text">Got questions? Call us 24/7!</p>
            <h3 className="phone">(800) 8001-8588, (0600) 874 548</h3>

            <h4 className="Contact">Contact info</h4>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>

           <div className="socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Find it Fast</h4>
            <ul>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>TV & Audio</li>
              <li>Gadgets</li>
              <li>Car Electronic & GPS</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul>
              <li>Printers & Ink</li>
              <li>Software</li>
              <li>Office Supplies</li>
              <li>Computer Components</li>
              <li>Accesories</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul>
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wish List</li>
              <li>Customer Service</li>
              <li>Returns / Exchange</li>
              <li>FAQs</li>
              <li>Product Support</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© <span style={{fontWeight:'700'}}> Electro</span>  - All rights Reserved</p>

          <div className="payments">
             <img src={payment} alt="payment" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;