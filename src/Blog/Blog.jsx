"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Leaf, Droplet, TreePine, Recycle } from 'lucide-react';
import Link from "next/link";
import blogImg from "../assets/images/blog.png";
import bioplastic from "../../public/bioplastic.jpg";

// Helper to handle imported images
const getImageSrc = (img) => {
  if (typeof img === "string") return img;
  if (img?.src) return img.src;
  if (img?.default) return img.default;
  return "";
};

const allBlogs = [
  {
    id: 1,
    title: "Plastic EPR Rules in India (2026)",
    excerpt: " These rules require businesses introducing plastic packaging into the market to ensure collection, recycling, reuse, or end-of-life disposal of equivalent plastic waste, along with meeting recycling targets, using recycled content, and maintaining traceability via the Central Pollution Control Board.",
    image: "/plastic_epr.png",
    category: "Plastic EPR",
    date: "May 4, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/Plastic_EPR_Rules_in_India",

  },
  {
    id: 2,
    title: "Scope 3 Emissions",
    excerpt: "For most companies, this is not just a gap.It’s the largest share of their carbon footprint—and the hardest to control.",
    image: "/scope3.png",
    category: "Emission",
    date: "April 4, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/Scope_3_Emissions",

  },
  {
    id: 3,
    title: "India’s EPR Ecosystem Enters a New Phase with the EPRETP Exchange",
    excerpt: "India’s environmental compliance framework is evolving rapidly. A key development in this transition is the Electronic Trading Platform (ETP)",
    image: "/erpexchange.png",
    category: "ERPETR Exchange",
    date: "April 16, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/EprEtp_exchange",

  },
  {
    id: 4,
    title: "Consequences of Water Pollution on Human Health: A Growing Global Crisis",
    excerpt: "Water is fundamental to life—but today, polluted water has become one of the biggest threats to human health worldwide.",
    image: "/water_pollution.png",
    category: "Water Pollution",
    date: "March 31, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "leaf",
    route: "/Consequences_Water_Pollution_on_Human_Health",

  },
  {
    id: 5,
    title: "Plastic Credits in India and Globally",
    excerpt: "A plastic credit is a tradable certificate representing a specific amount of plastic collected, recovered, recycled, or responsibly managed.",
    image: "/plastic_credits.png",
    category: "EPR",
    date: "March 18, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/Plastic-credits",

  },
  {
    id: 6,
    title: "Carbon Credits Explained",
    excerpt: "Carbon credits are tradable certificates that represent the reduction, avoidance, or removal of one metric tonne of carbon dioxide (CO₂) or equivalent greenhouse gases (GHGs) from the atmosphere.",
    image: "/carbon_credit.png",
    category: "Bioplastics",
    date: "Feb 21, 2026",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/Carbon-Credits",

  },
  {
    id: 7,
    title: "Are Bioplastics Really Better for India?",
    excerpt: "The world is drowning in plastic. From overflowing landfills to microplastic-laden oceans, the scale of this crisis is staggering.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=400&fit=crop",
    category: "Bioplastics",
    date: "Feb 9, 2026",
    readTime: "5 min read",
    author: "Devesh Malu",
    icon: "leaf",
    route: "/are-bioplastics-better-for-india",

  },
  {
    id: 8,
    title: "Article 6 of the Paris Agreement & Carbon Markets: Detailed Guide for 2025",
    excerpt: "Carbon markets are no longer just a policy discussion — they are becoming the backbone of how countries and businesses plan to reach net zero emissions.",
    image: blogImg,
    category: "Climate Action",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    author: "Devesh Malu",
    icon: "leaf",
    route: "/paris",
  },
  {
    id: 9,
    title: "Decoding India's Carbon Market: A Bold Step Towards a Greener Future",
    excerpt: "India, a nation balancing rapid economic growth with a deep commitment to environmental responsibility, is taking significant strides in the fight against climate change.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
    category: "Green Future",
    date: "Nov 12, 2025",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/carbonMarketLanding",
  },
  {
    id: 10,
    title: "CPCB's SIMP Portal: A Step Towards Streamlined Plastic Waste Management Compliance",
    excerpt: "The Central Pollution Control Board (CPCB) has launched the Sellers, Importers, and Manufacturers of Plastic Raw Materials (SIMP) Portal.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
    category: "CPCB PORTAL",
    date: "Nov 10, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "tree",
    route: "/cpcbsimp",
  },
  {
    id: 11,
    title: "Extended Producer Responsibility (EPR) in the UK: A Step Towards Sustainability",
    excerpt: "The United Kingdom is implementing a transformative approach to managing packaging waste through the Extended Producer Responsibility (EPR) system.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
    category: "EPR",
    date: "Nov 8, 2025",
    readTime: "8 min read",
    author: "Devesh Malu",
    icon: "recycle",
    route: "/extended-producer",
  },
  {
    id: 12,
    title: "China's Circular Economy and Producer Responsibility Extension System",
    excerpt: "China's Circular Economy Promotion Law (CEPL) is a cornerstone of the country's legal framework for sustainable development.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    category: "China EPR",
    date: "Nov 5, 2025",
    readTime: "10 min read",
    author: "Devesh Malu",
    icon: "leaf",
    route: "/China-EPR",
  },
  {
    id: 13,
    title: "Extended Producer Responsibility (EPR) in India: A Complete Guide for Businesses",
    excerpt: "Extended Producer Responsibility (EPR) in India: A Complete Guide for Businesses.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop",
    category: "Business",
    date: "Nov 3, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "leaf",
    route: "/EPR-india",
  },
  {
    id: 14,
    title: "India's Strategic Environmental Reforms in 2025: Advancing Climate Action and Waste Management",
    excerpt: "In 2025, India has accelerated environmental reforms to drive sustainability across industries.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=400&fit=crop",
    category: "Waste Management",
    date: "Nov 1, 2025",
    readTime: "9 min read",
    author: "Devesh Malu",
    icon: "tree",
    route: "/India-Strategy",
  },
  {
    id: 15,
    title: "Nature-Based Solutions: The World's Most Powerful Yet Underutilized Climate Tool",
    excerpt: "In the escalating race against climate change, the world is investing in technology: carbon capture machines, green hydrogen.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
    category: "Climate Tool",
    date: "Oct 28, 2025",
    readTime: "7 min read",
    author: "Devesh Malu",
    icon: "tree",
    route: "/Nature-based",
  },
  {
    id: 16,
    title: "Turning Plastic Waste into Value: How Indian Brands Can Leverage Plastic Credits for Scalable Impact",
    excerpt: "India's plastic waste challenge is no longer just an environmental concern—it's a business imperative.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Plastic Waste",
    date: "Oct 25, 2025",
    readTime: "8 min read",
    author: "Devesh Malu",
    icon: "droplet",
    route: "/Turning-platic"
  },
  {
    id: 17,
    title: "India's Vinyl Waste Crisis: A Real Problem, A Real Opportunity",
    excerpt: "India is growing fast. With a thriving economy, a booming population, and a culture of innovation, it's one of the world's most dynamic nations.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=400&fit=crop",
    category: "Pollution",
    date: "Oct 22, 2025",
    readTime: "6 min read",
    author: "Devesh Malu",
    icon: "recycle",
    route: "/Vinyl-India",
  },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const getIcon = (iconName) => {
    const icons = {
      leaf: <Leaf className="w-4 h-4" />,
      droplet: <Droplet className="w-4 h-4" />,
      tree: <TreePine className="w-4 h-4" />,
      recycle: <Recycle className="w-4 h-4" />
    };
    return icons[iconName] || icons.leaf;
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>



      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        @keyframes meshMove {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mesh-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
          animation: meshMove 15s ease-in-out infinite alternate;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
        }
        .hero-container {
          font-family: 'Outfit', sans-serif;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 10px 32px;
          border-radius: 20px;
          display: inline-block;
          box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.04);
          animation: revealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .blog-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          height: '100%';
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
          border-color: #dcfce7;
        }
        .card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .blog-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-container">
        {/* Mesh Gradient Background */}
        <div className="mesh-circle" style={{ width: '250px', height: '250px', background: '#dcfce7', top: '-50px', left: '-50px' }} />
        <div className="mesh-circle" style={{ width: '200px', height: '200px', background: '#f0fdf4', bottom: '-20px', right: '10%', animationDelay: '-5s' }} />
        <div className="mesh-circle" style={{ width: '180px', height: '180px', background: '#ccfbf1', top: '0', right: '-40px', animationDelay: '-10s' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '4px' }}>
              <div style={{ color: '#059669', display: 'flex' }}>
                <Leaf size={24} />
              </div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#064e3b', margin: 0 }}>
                EcoVoice <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#10b981' }}>Blog</span>
              </h1>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: '#64748b',
              maxWidth: '500px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              Insights for a sustainable, carbon-conscious future
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              className="blog-card"
              onClick={() => window.location.href = blog.route}
            >
              {/* Image */}
              <div className="card-image-wrap">
                <img
                  src={getImageSrc(blog.image)}
                  alt={blog.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%2310b981" width="800" height="400"/%3E%3Ctext fill="white" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24"%3EEcoVoice%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px'
                }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#064e3b',
                    padding: '6px 14px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                  }}>
                    {getIcon(blog.icon)}
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  fontFamily: 'Outfit, sans-serif',
                  color: '#0f172a',
                  marginBottom: '12px',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {blog.title}
                </h2>

                <p style={{
                  color: '#6b7280',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid #e5e7eb',
                  fontSize: '13px',
                  color: '#6b7280'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    {blog.author}
                  </span>
                  <Link
                    href={blog.route}
                    style={{
                      color: '#10b981',
                      fontWeight: '600',
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '8px'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '4px'}
                  >
                    Read more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: '10px 14px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                background: 'white',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.background = '#f0fdf4';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.background = 'white';
                }
              }}
            >
              <ChevronLeft size={20} style={{ color: '#10b981' }} />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: currentPage === pageNumber ? '#10b981' : '#e5e7eb',
                    background: currentPage === pageNumber ? '#10b981' : 'white',
                    color: currentPage === pageNumber ? 'white' : '#374151',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    minWidth: '44px'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== pageNumber) {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.background = '#f0fdf4';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== pageNumber) {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: 'white',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <ChevronRight size={20} style={{ color: '#10b981' }} />
            </button>
          </div>
        )}

        {/* Page Info */}
        <p style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#6b7280',
          fontSize: '15px'
        }}>
          Showing {indexOfFirstBlog + 1} - {Math.min(indexOfLastBlog, allBlogs.length)} of {allBlogs.length} articles
        </p>

        {/* Compliance Solutions Section */}
        <div style={{
          marginTop: '60px',
          padding: '40px 20px',
          textAlign: 'center',
          fontFamily: 'Outfit, sans-serif',
          borderTop: '1px solid #f1f5f9'
        }}>
          <h4 style={{ 
            fontSize: '13px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: '#94a3b8', 
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            Explore Our Compliance Solutions
          </h4>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '12px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              { name: 'Plastic EPR', icon: <Recycle size={16} />, href: '/epr-plastic' },
              { name: 'Carbon Offsets', icon: <Leaf size={16} />, href: '/carbon-offset' },
              { name: 'E-Waste Solutions', icon: <Droplet size={16} />, href: '/epr-waste' },
              { name: 'Sustainability Strategy', icon: <TreePine size={16} />, href: '/sustainability-services' },
              { name: 'Battery Waste EPR', icon: <ArrowRight size={16} />, href: '/epr-battery' }
            ].map((service) => (
              <Link 
                key={service.name}
                href={service.href}
                style={{
                  padding: '12px 24px',
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#064e3b',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  e.currentTarget.style.color = '#064e3b';
                }}
              >
                {service.icon}
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 40px 16px !important;
          }
          
          article {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .pagination {
            gap: 4px !important;
          }
          
          button {
            min-width: 36px !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;