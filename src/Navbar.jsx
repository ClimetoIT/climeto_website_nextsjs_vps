"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isEPROpen, setIsEPROpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width > 768) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsCreditsOpen(false);
        setIsEPROpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsCreditsOpen(false);
    setIsEPROpen(false);
  };

  const isMobile = windowWidth <= 768;

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          gap: 40px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 22px;
          cursor: pointer;
          margin-left: auto;
          z-index: 1001;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-left: 20px;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 94px;
            left: 0;
            right: 0;
            width: 100vw;
            height: calc(100vh - 94px);
            background-color: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            margin: 0;
            gap: 0;
            box-sizing: border-box;
            transform: translateX(${isMobileMenuOpen ? '0' : '-100%'});
            transition: transform 0.3s ease;
            overflow-y: auto;
            overflow-x: hidden;
            box-shadow: ${isMobileMenuOpen ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'};
            z-index: 1000;
          }

          .nav-links a,
          .nav-links .dropdown {
            width: 100%;
            padding: 12px 0;
            border-bottom: 1px solid #f0f0f0;
            margin: 0;
          }

          .dropdown-menu {
            position: static !important;
            box-shadow: none !important;
            padding-left: 20px !important;
            margin-top: 10px !important;
            width: 100% !important;
            left: 0 !important;
          }

          .submenu-wrapper {
            position: static !important;
            width: 100%;
          }

          .submenu {
            position: static !important;
            box-shadow: none !important;
            padding-left: 20px !important;
            margin-left: 0 !important;
            margin-top: 10px !important;
            width: 100% !important;
          }
        }
      `}</style>

      <header style={{
        width: '100vw',
        maxWidth: '100%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '12px 0',
        fontFamily: 'Arial, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        margin: 0,
        left: 0,
        right: 0
      }}>
        <div className="nav-container">
          <div className="nav-logo" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0
          }}>
            <img
              src="/Climeto-Transparent.png"
              alt="Climeto Logo"
              style={{
                height: '70px',
                margin: 0,
                objectFit: 'contain'
              }}
            />
          </div>

          <div onClick={toggleMobileMenu} className="hamburger">
            <div style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#1b355e',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <div style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#1b355e',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#1b355e',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }} />
          </div>

          <nav className="nav-links">
            <Link href="/" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Home
            </Link>

            <Link href="/about-us" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              About Us
            </Link>

            <div
              className="dropdown"
              style={{ position: 'relative' }}
              onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
              onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            >
              <button
                onClick={() => isMobile && setIsServicesOpen(!isServicesOpen)}
                style={{
                  background: 'none',
                  color: '#1b355e',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Services <span style={{ fontSize: '10px' }}>▼</span>
              </button>

              <div style={{
                display: isServicesOpen ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'white',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                borderRadius: '10px',
                minWidth: '220px',
                zIndex: 100,
                padding: '10px 0',
                marginTop: '2px'
              }} className="dropdown-menu">
                <Link href="/plastic-stewardship-program" onClick={closeMobileMenu} style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}>
                  Plastic Stewardship Program
                </Link>

                <div
                  className="submenu-wrapper"
                  style={{ position: 'relative' }}
                  onMouseEnter={() => !isMobile && setIsCreditsOpen(true)}
                  onMouseLeave={() => !isMobile && setIsCreditsOpen(false)}
                >
                  <button
                    onClick={() => isMobile && setIsCreditsOpen(!isCreditsOpen)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      margin: '0 10px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0fdf4';
                      e.target.style.color = '#36a852';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    Climate Change Services <span>›</span>
                  </button>

                  <div style={{
                    display: isCreditsOpen ? 'block' : 'none',
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    minWidth: '180px',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                    padding: '6px 0',
                    marginLeft: '2px'
                  }} className="submenu">
                    <Link href="/carbon-services" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      Carbon-Network
                    </Link>
                    <Link href="/plastic-services" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      Plastic-Network
                    </Link>
                    <Link href="/sustainability-services" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      Sustainability services
                    </Link>
                  </div>
                </div>

                <div
                  className="submenu-wrapper"
                  style={{ position: 'relative' }}
                  onMouseEnter={() => !isMobile && setIsEPROpen(true)}
                  onMouseLeave={() => !isMobile && setIsEPROpen(false)}
                >
                  <button
                    onClick={() => isMobile && setIsEPROpen(!isEPROpen)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      margin: '0 10px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0fdf4';
                      e.target.style.color = '#36a852';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}
                  >
                    EPR <span>›</span>
                  </button>

                  <div style={{
                    display: isEPROpen ? 'block' : 'none',
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    minWidth: '180px',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                    padding: '6px 0',
                    marginLeft: '2px'
                  }} className="submenu">
                    <Link href="/epr-plastic" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      EPR Plastic
                    </Link>

                    <Link href="/epr-battery" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      EPR Battery
                    </Link>
                    
                    <Link href="/epr-tyre" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      EPR Tyre
                    </Link>
                    <Link href="/epr-waste" onClick={closeMobileMenu} style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: '#1b355e',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e6f8ed';
                      e.target.style.color = '#36a852';
                      e.target.style.borderRadius = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#1b355e';
                    }}>
                      EPR E-Waste
                    </Link>
                  </div>
                </div>

                <Link href="/carbon-offset" onClick={closeMobileMenu} style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}>
                  Carbon Offsets
                </Link>
                <Link href="/net-zero" onClick={closeMobileMenu} style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#1b355e',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                  e.target.style.color = '#36a852';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1b355e';
                }}>
                  Net Zero Achievement
                </Link>
              </div>
            </div>

            <Link href="/contact-us" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Contact Us
            </Link>

            <Link href="/climeto-blog" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Blog
            </Link>

            <Link href="/climeto-media" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Climeto Media
            </Link>

            <Link href="/climeto-career" onClick={closeMobileMenu} style={{
              textDecoration: 'none',
              color: '#1b355e',
              fontSize: '15px',
              fontWeight: '500',
              padding: '6px 10px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#36a852';
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1b355e';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Career
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;