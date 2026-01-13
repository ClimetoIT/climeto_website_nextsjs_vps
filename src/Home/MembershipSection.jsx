import { useState, useEffect, useRef } from 'react';
import logo1 from "../assets/images/BCGPT_Endorser_logo_CMYK__1_-removebg-preview-150x150.png";
import logo2 from "../assets/images/Logo-ZPO-Blue.png";
import logo3 from "../assets/images/AIPMA-removebg-preview-150x150.png";
import logo4 from "../assets/images/PFN_logo-removebg-preview.png";
import logo5 from "../assets/images/GSP-removebg-preview.png";
import logo6 from "../assets/images/pmar-300x213.png";
import logo7 from "../assets/images/LOGO_PREVENT_MO_green_RGB-150x150.png";

export default function MembershipSection() {
  const [visibleLogos, setVisibleLogos] = useState([]);
  const sectionRef = useRef(null);

  // FIX: Use .src property for webpack/Next.js imported images
  const topRowLogos = [
    { name: 'BCGPT', url: logo1.src || logo1 },
    { name: 'Zero Plastic Ocean', url: logo2.src || logo2 },
    { name: 'AIPMA', url: logo3.src || logo3 },
    { name: 'PFN', url: logo4.src || logo4 }
  ];

  const bottomRowLogos = [
    { name: 'GSP', url: logo5.src || logo5 },
    { name: 'PMAR', url: logo6.src || logo6 },
    { name: 'Prevent', url: logo7.src || logo7 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleLogos.length === 0) {
            const allLogos = [...topRowLogos, ...bottomRowLogos];
            allLogos.forEach((_, index) => {
              setTimeout(() => {
                setVisibleLogos((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [visibleLogos.length]);

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&q=80)',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: isMobile ? '50px 16px' : isTablet ? '70px 24px' : '100px 32px',
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Georgia, serif',
        minHeight: isMobile ? '60vh' : '70vh',
        overflow: 'hidden'
      }}
    >
      {/* Semi-transparent white overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '24px' : isTablet ? '36px' : '48px',
            fontWeight: '400',
            marginBottom: isMobile ? '40px' : isTablet ? '60px' : '80px',
            textTransform: 'none',
            textAlign: 'center',
            color: '#1a1a1a',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
            padding: '0 10px'
          }}
        >
          Membership and Collaboration
        </h2>

        {/* Top Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? 'repeat(2, 1fr)' 
              : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(4, 1fr)',
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
            gap: isMobile ? '30px 20px' : isTablet ? '40px 30px' : '50px 60px',
            marginBottom: isMobile ? '40px' : isTablet ? '60px' : '80px',
            maxWidth: '100%'
          }}
        >
          {topRowLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                opacity: visibleLogos.includes(idx) ? 1 : 0,
                transform: visibleLogos.includes(idx) ? 'translateY(0)' : 'translateY(-80px)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: isMobile ? '70px' : isTablet ? '100px' : '130px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08))',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.target.style.transform = 'scale(1)';
                }}
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo.name}`);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? 'repeat(1, 1fr)' 
              : isTablet 
              ? 'repeat(3, 1fr)' 
              : 'repeat(3, 1fr)',
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
            gap: isMobile ? '30px 20px' : isTablet ? '40px 40px' : '50px 80px',
            maxWidth: isMobile ? '300px' : '100%',
            margin: '0 auto'
          }}
        >
          {bottomRowLogos.map((logo, idx) => {
            const actualIdx = idx + topRowLogos.length;
            return (
              <div
                key={actualIdx}
                style={{
                  opacity: visibleLogos.includes(actualIdx) ? 1 : 0,
                  transform: visibleLogos.includes(actualIdx) ? 'translateY(0)' : 'translateY(-80px)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%'
                }}
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: isMobile ? '80px' : isTablet ? '110px' : '140px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08))',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) e.target.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    console.error(`Failed to load logo: ${logo.name}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}