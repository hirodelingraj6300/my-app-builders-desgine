import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Company Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@yourcompany.com</p>
          <p><FaMapMarkerAlt /> Bangalore, India</p>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
