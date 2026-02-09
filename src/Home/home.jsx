import "./Home.css";
import BrandsTrust from "../Home/BrandsTrust";
import GoogleReviewsCarousel  from "./GoogleReviewsCarousel";
import Bluesection from "./Bluesection";
import MembershipSection from "./MembershipSection";
import banner from "../assets/images/banner2.jpg"; 
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useRef } from "react";


import TestCarousel from "./casousel";

const Home = () => {
  const logoRefs = useRef([]);
  const serviceCardsRef = useRef([]); // Add this ref for service cards
  
  // Define services array - FIX: Use .src for webpack imported images
  const services = [
    { 
      title: "Green Credit", 
      description: "Green CR (Green Credits) are rewards given to entities for eco-friendly actions like tree planting and renewable energy projects. They recognize environmental efforts, aid in meeting regulations, and boost CSR and ESG leadership.", 
      image: s1.src || s1 // Handle both Next.js and React
    },
    { 
      title: "Carbon Credit", 
      description: "As carbon trading specialists, we assist in earning carbon credits through emissions reduction projects. These credits signify greenhouse gas reductions, directly or indirectly, typically measured in CO2 reductions, helping combat climate change and environmental impact.", 
      image: s2.src || s2
    },
    { 
      title: "Plastic Credit", 
      description: "Plastic credits are tradable units signifying the collection or recycling of specific plastic quantities. We support your plastic management goals with measurable, verifiable, and transferable solutions, ensuring optimal results at any stage of your journey.", 
      image: s3.src || s3
    },
    { 
      title: "EPR Consultancy", 
      description: "The Extended Responsibility (EPR) Producer is an environmental policy, which holds Producers, Importers, and Brand Owners accountable for the introduction of plastic into the environment or any resulting pollution caused by plastic.", 
      image: s4.src || s4
    },
  ];

  // Define stats array for statistics section
  const stats = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 28c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z" />
          <path d="M32 32c-8.8 0-16 5.4-16 12v4h32v-4c0-6.6-7.2-12-16-12z" />
          <path d="M22 38l-4 4 4 4" />
          <path d="M42 38l4 4-4 4" />
          <path d="M18 42h-6l3-8z" />
          <path d="M46 42h6l-3-8z" />
        </svg>
      ),
      number: "550+",
      label: "Clients"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="20" width="32" height="28" rx="2" />
          <path d="M24 20v-4c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4" />
          <path d="M16 28h32" />
          <circle cx="32" cy="36" r="3" />
        </svg>
      ),
      number: "16+",
      label: "Services"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 12l-8 8h6v12h4V20h6l-8-8z" />
          <path d="M42 28v16c0 2.2-1.8 4-4 4H26c-2.2 0-4-1.8-4-4V28" />
          <circle cx="44" cy="38" r="8" />
          <path d="M44 34v8m-4-4h8" />
          <rect x="48" y="44" width="3" height="8" rx="1" />
          <rect x="52" y="40" width="3" height="12" rx="1" />
          <rect x="56" y="36" width="3" height="16" rx="1" />
        </svg>
      ),
      number: "1M+",
      label: "Credit Traded"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="16" width="28" height="36" rx="2" />
          <path d="M26 24h16m-16 6h16m-16 6h12" />
          <path d="M52 20v24" />
        </svg>
      ),
      number: "4",
      label: "Global Presence"
    }
  ];

  // Add Intersection Observer for service cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <TestCarousel/>
      
      {/* Marquee Section */}
      <section className="marquee-section">
        <marquee direction="left" behavior="scroll" loop="infinite" scrollamount="6">
          1000% Plastic Neutral Organization
        </marquee>
      </section>

      <section className="services-section">
        <div className="decorative-circle"></div>
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => {
            const directions = ['right', 'left', 'up', 'down'];
            const direction = directions[index % 4];
            return (
              <div 
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className={`service-card animate-from-${direction} overlay-from-${direction}`}
              >
                {/* Card Image - FIX: Added error handling */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${service.title}`, e.target.src);
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                  }}
                />

                {/* Text visible on card */}
                <div className="card-text">
                  <h4>{service.title}</h4>
                </div>

                {/* Hover Overlay */}
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              {/* Icon Circle */}
              <div className="icon-circle">
                {stat.icon}
              </div>
              
              {/* Number */}
              <h3 className="stat-number">{stat.number}</h3>
              
              {/* Label */}
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <MembershipSection/>
      <BrandsTrust />
      <GoogleReviewsCarousel/>
      <Bluesection />
    </div>
  );
};

export default Home;