import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

import "./footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/Climeto-Transparent.png" alt="Climeto Logo" className="logo-img" />
         
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/climeto-blog">Blog</Link></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-about">
          <h3>ABOUT</h3>
          <p>
            Plot No. 1A-2A,<br />
            Second Floor, Scheme No. 113,<br />
            KTM Showroom – Near Brilliant Convention Center,<br />
            Vijay Nagar, Indore,<br />
            Madhya Pradesh, India 452010
          </p>
          <a href="mailto:info@climeto.com" className="contact-link">
            info@climeto.com
          </a>
          <br />
          <a href="tel:+919039946410" className="contact-link">
            +91-9039946410
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 | Climeto Sustainable Services Pvt. Ltd. 
        
        </p>
        <div className="social-icons">
 
  <a href="https://x.com/climeto_global" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://www.youtube.com/@climeto5120" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  <a href="https://www.instagram.com/climeto_global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://in.linkedin.com/company/climeto" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
 
</div>
      </div>
    </footer>
  );
}
