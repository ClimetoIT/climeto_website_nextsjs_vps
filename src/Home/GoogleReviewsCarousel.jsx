import { useState, useEffect } from 'react';

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Adhithyan Packers",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AP&backgroundColor=ff6b6b",
      time: "a year ago",
      rating: 5,
      text: "Good co-ordination and response from climeto."
    },
    {
      id: 2,
      name: "AS Polywood Industries",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=4ecdc4",
      time: "a year ago",
      rating: 5,
      text: "Service delivered as per commitment. Highly recommend their company."
    },
    {
      id: 3,
      name: "Ravi Kumar",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RK&backgroundColor=95e1d3",
      time: "8 months ago",
      rating: 5,
      text: "Excellent service and professional team. Very satisfied with their work."
    },
    {
      id: 4,
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=a8e6cf",
      time: "6 months ago",
      rating: 5,
      text: "Outstanding sustainability solutions! The team was knowledgeable and implemented everything smoothly."
    },
    {
      id: 5,
      name: "Mehta Industries",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MI&backgroundColor=ffd3b6",
      time: "5 months ago",
      rating: 5,
      text: "Highly professional approach to environmental compliance. They exceeded our expectations."
    },
    {
      id: 6,
      name: "Ankit Patel",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AP2&backgroundColor=ffaaa5",
      time: "4 months ago",
      rating: 5,
      text: "Great experience working with Climeto. Their expertise in sustainability is unmatched."
    },
    {
      id: 7,
      name: "Sunita Reddy",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SR&backgroundColor=ff8b94",
      time: "3 months ago",
      rating: 5,
      text: "Impressed with their prompt service and detailed reporting. Highly recommended for any business."
    },
    {
      id: 8,
      name: "Vikram Enterprises",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=VE&backgroundColor=c7ceea",
      time: "2 months ago",
      rating: 5,
      text: "Professional team with deep knowledge of environmental regulations. Made our compliance journey easy."
    },
    {
      id: 9,
      name: "Neha Gupta",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=NG&backgroundColor=b5ead7",
      time: "1 month ago",
      rating: 5,
      text: "Fantastic service! They helped us achieve our sustainability goals efficiently and effectively."
    },
    {
      id: 10,
      name: "Rajesh Manufacturing",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RM&backgroundColor=e2f0cb",
      time: "3 weeks ago",
      rating: 5,
      text: "Climeto provided excellent guidance and support throughout our certification process. Top-notch service!"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const StarRating = ({ rating }) => (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          style={{ width: '16px', height: '16px' }}
          fill="#ff9800"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  const ChevronLeft = () => (
    <svg 
      style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px' }}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 19l-7-7 7-7" 
      />
    </svg>
  );

  const ChevronRight = () => (
    <svg 
      style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px' }}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  );

  // Calculate card dimensions and gap based on screen size
  const cardWidth = isMobile ? 280 : isTablet ? 300 : 320;
  const cardGap = isMobile ? 12 : 16;
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const translateAmount = (cardWidth + cardGap) * cardsToShow;

  return (
    <div style={{
      minHeight: isMobile ? '50vh' : '60vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '12px' : '16px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: isMobile ? '100%' : isTablet ? '900px' : '1400px', 
        width: '100%' 
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '24px' : '32px' }}>
          <h1 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            marginBottom: '8px',
            color: '#111827',
            fontWeight: '400',
            lineHeight: '1.2'
          }}>
            The Trust We've Earned
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '18px',
            color: '#2563eb',
            fontWeight: '500'
          }}>Google Reviews</p>
        </div>

        {/* Reviews Section */}
        <div style={{ position: 'relative' }}>
          {isMobile ? (
            // Mobile Layout - Stack vertically
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center'
            }}>
              {/* Company Info Card - Mobile */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '16px',
                width: '100%',
                maxWidth: '320px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  Climeto Sustainability Services Pvt. Ltd.
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#f97316'
                  }}>5.0</span>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        style={{ width: '14px', height: '14px' }}
                        fill="#ff9800"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p style={{
                  fontSize: '11px',
                  color: '#4b5563',
                  marginBottom: '8px'
                }}>Based on 28 reviews</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '10px',
                  color: '#6b7280'
                }}>
                  <span>powered by</span>
                  <svg style={{ height: '10px' }} viewBox="0 0 272 92" fill="none">
                    <text x="0" y="70" fill="#4285f4" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">G</text>
                    <text x="60" y="70" fill="#ea4335" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">o</text>
                    <text x="115" y="70" fill="#fbbc04" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">o</text>
                    <text x="170" y="70" fill="#4285f4" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">g</text>
                    <text x="220" y="70" fill="#34a853" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">l</text>
                    <text x="245" y="70" fill="#ea4335" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">e</text>
                  </svg>
                </div>
              </div>

              {/* Reviews Carousel - Mobile */}
              <div style={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                maxWidth: '320px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: `${cardGap}px`,
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`
                }}>
                  {reviews.map((review) => (
                    <div key={review.id} style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      padding: '16px',
                      flexShrink: 0,
                      width: `${cardWidth}px`,
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <img
                            src={review.avatar}
                            alt={review.name}
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              objectFit: 'cover'
                            }}
                          />
                          <div>
                            <h4 style={{
                              fontWeight: '600',
                              color: '#2563eb',
                              fontSize: '11px',
                              marginBottom: '2px'
                            }}>
                              {review.name}
                            </h4>
                            <p style={{
                              fontSize: '10px',
                              color: '#6b7280',
                              margin: 0
                            }}>{review.time}</p>
                          </div>
                        </div>
                        <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                      <StarRating rating={review.rating} />
                      <p style={{
                        color: '#374151',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        margin: 0,
                        marginTop: '8px',
                        flex: 1,
                        overflow: 'auto'
                      }}>
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Mobile */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center'
              }}>
                <button
                  onClick={prevSlide}
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Previous review"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Next review"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          ) : (
            // Desktop/Tablet Layout
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              {/* Company Info Card */}
              <div style={{
                backgroundColor: 'transparent',
                borderRadius: '8px',
                padding: '16px',
                flexShrink: 0,
                width: isTablet ? '180px' : '220px',
                alignSelf: 'flex-start',
                marginTop: '20px'
              }}>
                <h3 style={{
                  fontSize: isTablet ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  Climeto Sustainability Services Pvt. Ltd.
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <span style={{
                    fontSize: isTablet ? '26px' : '30px',
                    fontWeight: '700',
                    color: '#f97316'
                  }}>5.0</span>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        style={{ width: '16px', height: '16px' }}
                        fill="#ff9800"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p style={{
                  fontSize: '12px',
                  color: '#4b5563',
                  marginBottom: '8px'
                }}>Based on 28 reviews</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  <span>powered by</span>
                  <svg style={{ height: '12px' }} viewBox="0 0 272 92" fill="none">
                    <text x="0" y="70" fill="#4285f4" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">G</text>
                    <text x="60" y="70" fill="#ea4335" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">o</text>
                    <text x="115" y="70" fill="#fbbc04" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">o</text>
                    <text x="170" y="70" fill="#4285f4" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">g</text>
                    <text x="220" y="70" fill="#34a853" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">l</text>
                    <text x="245" y="70" fill="#ea4335" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">e</text>
                  </svg>
                </div>
              </div>

              {/* Navigation Button - Left */}
              <button
                onClick={prevSlide}
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Previous review"
              >
                <ChevronLeft />
              </button>

              {/* Reviews Container */}
              <div style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                maxWidth: isTablet ? '616px' : `${(cardWidth * 3) + (cardGap * 2)}px`
              }}>
                <div style={{
                  display: 'flex',
                  gap: `${cardGap}px`,
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`
                }}>
                  {reviews.map((review) => (
                    <div key={review.id} style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      padding: '20px',
                      flexShrink: 0,
                      width: `${cardWidth}px`,
                      height: '320px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <img
                            src={review.avatar}
                            alt={review.name}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              objectFit: 'cover'
                            }}
                          />
                          <div>
                            <h4 style={{
                              fontWeight: '600',
                              color: '#2563eb',
                              fontSize: '12px',
                              marginBottom: '2px'
                            }}>
                              {review.name}
                            </h4>
                            <p style={{
                              fontSize: '12px',
                              color: '#6b7280',
                              margin: 0
                            }}>{review.time}</p>
                          </div>
                        </div>
                        <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24">
                          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                      <StarRating rating={review.rating} />
                      <p style={{
                        color: '#374151',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        margin: 0,
                        marginTop: '12px',
                        flex: 1,
                        overflow: 'auto'
                      }}>
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Button - Right */}
              <button
                onClick={nextSlide}
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Next review"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}