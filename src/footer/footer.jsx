"use client";

import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

import "./footer.css";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/Climeto-Transparent.png" alt="Climeto Logo" className="logo-img" />
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/climeto-blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-about">
            <h3>ABOUT</h3>
            <p>
              Plot No. 1A-2A,<br />
              Second Floor, Scheme No. 113,<br />
              KTM Showroom – Near Brilliant Convention Center,<br />
              Vijay Nagar, Indore,<br />
              Madhya Pradesh, India 452010
            </p>
            <a href="mailto:info@climeto.com" className="contact-link">info@climeto.com</a>
            <br />
            <a href="tel:+919039946410" className="contact-link">+91-9039946410</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 | Climeto Sustainable Services Pvt. Ltd.</p>
          <div className="social-icons">
            <a href="https://x.com/climeto_global" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/@climeto5120" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/climeto_global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://in.linkedin.com/company/climeto" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>

      {show && (
        <button onClick={scrollToTop} style={{position:"fixed",bottom:"100px",right:"30px",width:"50px",height:"50px",background:"linear-gradient(135deg,#36a852,#10b981)",color:"white",border:"none",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",boxShadow:"0 4px 12px rgba(16,185,129,0.4)",zIndex:1000}} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}