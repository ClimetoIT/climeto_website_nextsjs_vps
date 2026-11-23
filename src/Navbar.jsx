"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import ConsultationModal from "./components/ConsultationModal";

const CONSULTANT_PHONE = "+919039946410";
const DISPLAY_PHONE = "+91-9039946410";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
    }

    return () => {
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
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
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          gap: 14px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 22px;
          cursor: pointer;
          z-index: 1001;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 6px;
        }

        .call-consultant-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 14px 7px 10px;
          border: none;
          border-radius: 9999px;
          background: linear-gradient(135deg, #36a852 0%, #15803d 100%);
          color: #ffffff;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(54, 168, 82, 0.38);
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          flex-shrink: 0;
        }

        .call-consultant-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(54, 168, 82, 0.55);
          filter: brightness(1.06);
          color: #ffffff;
        }

        .call-consultant-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .call-consultant-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
          flex-shrink: 0;
          animation: headerCallPulse 2s infinite;
        }

        .call-consultant-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
        }

        .call-consultant-label {
          font-size: 10.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          letter-spacing: 0.2px;
        }

        .call-consultant-number {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.4px;
        }

        @keyframes headerCallPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.65);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        @media (max-width: 1180px) {
          .nav-container {
            padding: 0 14px;
            gap: 8px;
          }

          .nav-links {
            gap: 4px;
            margin-left: 0;
          }

          .call-consultant-btn {
            padding: 6px 12px 6px 8px;
            gap: 8px;
          }

          .call-consultant-label {
            font-size: 10px;
          }

          .call-consultant-number {
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 14px;
            gap: 8px;
            flex-wrap: wrap;
          }

          .nav-logo {
            order: 1;
          }

          .nav-logo img {
            height: 44px !important;
          }

          .hamburger {
            display: flex;
            order: 2;
            margin-left: auto;
            width: 26px;
            height: 20px;
          }

          .call-consultant-btn {
            order: 3;
            width: 100%;
            justify-content: center;
            padding: 7px 12px;
            gap: 8px;
            border-radius: 10px;
          }

          .call-consultant-icon {
            width: 24px;
            height: 24px;
          }

          .call-consultant-content {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 5px;
          }

          .call-consultant-label {
            font-size: 11.5px;
          }

          .call-consultant-number {
            font-size: 12.5px;
          }

          .nav-links {
            position: fixed;
            top: 112px;
            left: 0;
            right: 0;
            width: 100vw;
            height: calc(100vh - 112px);
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
            overscroll-behavior: contain;
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

          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              setIsConsultModalOpen(true);
            }}
            className="call-consultant-btn"
            aria-label={`Book Your Consultation Call: ${DISPLAY_PHONE}`}
            title={`Book Your Consultation Call: ${DISPLAY_PHONE}`}
          >
            <span className="call-consultant-icon">
              <Phone size={15} strokeWidth={2.4} />
            </span>
            <span className="call-consultant-content">
              <span className="call-consultant-label">Book Your Consultation Call:</span>
              <span className="call-consultant-number">9039946410</span>
            </span>
          </button>

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
        </div>
      </header>

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        phoneNumber={CONSULTANT_PHONE}
        displayPhone="9039946410"
      />
    </>
  );
};

export default Navbar;