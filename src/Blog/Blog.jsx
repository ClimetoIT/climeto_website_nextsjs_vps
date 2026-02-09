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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)' }}>
      {/* Spacer for fixed navbar */}
      <div style={{ height: '94px' }} />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Leaf size={48} strokeWidth={2} />
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', margin: 0 }}>
                EcoVoice Blog
              </h1>
            </div>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.95
            }}>
              Inspiring stories and practical tips for a sustainable future
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
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={getImageSrc(blog.image)}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%2310b981" width="800" height="400"/%3E%3Ctext fill="white" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24"%3EEcoVoice%3C/text%3E%3C/svg%3E';
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px'
                }}>
                  <span style={{
                    background: '#10b981',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
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
                  color: '#111827',
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
                padding: '10px 14px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                background: 'white',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.background = '#f0fdf4';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.background = 'white';
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

        {/* CTA Section */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          borderRadius: '20px',
          padding: '60px 40px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(40px)'
          }} />
          <Leaf size={48} style={{ marginBottom: '20px' }} />
          <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', margin: '0 0 16px 0' }}>
            Make a Difference Today
          </h3>
          <p style={{ fontSize: '18px', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
            Every small action counts. Start your sustainability journey with us and create lasting impact.
          </p>
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