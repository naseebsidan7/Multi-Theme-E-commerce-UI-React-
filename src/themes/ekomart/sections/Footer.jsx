import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { applestore, payment, playstore } from '../../../assets/Ekomart_Assets';

const footerLinks = {
  ourStores: ["Delivery Information", "Privacy Policy", "Terms & Conditions", "Support Center", "Careers"],
  shopCategories: ["Contact Us", "Information", "About Us", "Careers", "Nest Stories"],
  usefulLinks: ["Cancellation & Returns", "Report Infringement", "Payments", "Shipping", "FAQ"]
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-containerEk">
        { }
        <div className="footer-col about">
          <h4>About Company</h4>
          <div className="contact-info">
            <div className="phone-icon"><FaPhoneAlt /></div>
            <div>
              <p>Have Question? Call Us 24/7</p>
              <span className="phone-number">+258 3692 2569</span>
            </div>
          </div>
          <div className="hours">
            <p>Monday - Friday: <strong>8:00am - 6:00pm</strong></p>
            <p>Saturday: <strong>8:00am - 6:00pm</strong></p>
            <p>Sunday: <span className="closed">Service Close</span></p>
          </div>
        </div>

        { }
        <div className="footer-col">
          <h4>Our Stores</h4>
          <ul>{footerLinks.ourStores.map(link => <li key={link}>{link}</li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Shop Categories</h4>
          <ul>{footerLinks.shopCategories.map(link => <li key={link}>{link}</li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>{footerLinks.usefulLinks.map(link => <li key={link}>{link}</li>)}</ul>
        </div>

        { }
        <div className="footer-col-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to the mailing list to receive updates on the new arrivals and other discounts</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <p className="sub-text">I would like to receive news and special offer</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <span>Follow Us:</span>
          <div className="icons">
            <div className="icon-circle"><FaFacebookF /></div>
            <div className="icon-circle"><FaTwitter /></div>
            <div className="icon-circle"><FaYoutube /></div>
            <div className="icon-circle"><FaWhatsapp /></div>
            <div className="icon-circle"><FaInstagram /></div>
          </div>
        </div>

        <div className="payment-methods">
          <span>Payment Accepts:</span>
          <img src={payment} alt="Payments" />
        </div>

        { }
<div className="footer-copyright-bar">
  <div className="copyright-container">
    <p>Copyright 2025 ©<strong>Ekomart</strong>. All rights reserved.</p>
    
    <div className="download-app">
      <span>Download App</span>
      <div className="app-buttons">
        <img src={playstore} alt="Get it on Google Play" />
        <img src={applestore} alt="Download on the App Store" />
      </div>
    </div>
  </div>
  

</div>
      </div>
    </footer>
  );
};

export default Footer;