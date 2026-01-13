import { useRef, useEffect, useState } from 'react';
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import img19 from "../assets/images/img19.png";
import img20 from "../assets/images/img20.png";
import img21 from "../assets/images/img21.png";
import img22 from "../assets/images/img22.jpg";
import img23 from "../assets/images/img23.png";
import img24 from "../assets/images/img24.png";
import img25 from "../assets/images/img25.png";
import img26 from "../assets/images/img26.png";
import img27 from "../assets/images/img27.png";
import img28 from "../assets/images/img28.png";
import img29 from "../assets/images/img29.png";
import img30 from "../assets/images/img30.png";
import img32 from "../assets/images/img32.png";
import img33 from "../assets/images/img33.jpg";
import img34 from "../assets/images/img34.jpg";
import img35 from "../assets/images/img35.jpg";
import img36 from "../assets/images/img36.jpg";
import img37 from "../assets/images/img37.jpg";
import img38 from "../assets/images/img38.jpg";
import img39 from "../assets/images/img39.jpg";
import img40 from "../assets/images/img40.jpg";
import img41 from "../assets/images/img41.jpg";
import img42 from "../assets/images/img42.jpg";
import img43 from "../assets/images/img43.jpg";
import img44 from "../assets/images/img44.jpg";
import img45 from "../assets/images/img45.jpg";
import img46 from "../assets/images/img46.jpg";
import img47 from "../assets/images/img47.jpg";
import img48 from "../assets/images/img48.jpg";
import img49 from "../assets/images/img49.jpg";
import img50 from "../assets/images/img50.jpg";
import img51 from "../assets/images/img51.jpg";
import img52 from "../assets/images/img52.jpg";
import img53 from "../assets/images/img53.jpg";
import img54 from "../assets/images/img54.jpg";
import img55 from "../assets/images/img55.jpg";
import img56 from "../assets/images/img56.jpg";
import img57 from "../assets/images/img57.jpg";
import img58 from "../assets/images/img58.jpg";
import img59 from "../assets/images/img59.jpg";
import img60 from "../assets/images/img60.jpg";
import img61 from "../assets/images/img61.jpg";
import img62 from "../assets/images/img62.jpg";
import img63 from "../assets/images/img63.jpg";
import img64 from "../assets/images/img64.jpg";
import img65 from "../assets/images/img65.jpg";
import img66 from "../assets/images/img66.jpg";
import img67 from "../assets/images/img67.jpg";
import img68 from "../assets/images/img68.jpg";
import img69 from "../assets/images/img69.jpg";
import img70 from "../assets/images/img70.jpg";
import img71 from "../assets/images/img71.jpg";
import img72 from "../assets/images/img72.jpg";
import img73 from "../assets/images/img73.jpg";
import img74 from "../assets/images/img74.jpg";
import img75 from "../assets/images/img75.jpg";
import img76 from "../assets/images/img76.jpg";
import img77 from "../assets/images/img77.jpg";
import img78 from "../assets/images/img78.jpg";
import img79 from "../assets/images/img79.jpg";
import img80 from "../assets/images/img80.jpg";
import img81 from "../assets/images/img81.jpg";
import img82 from "../assets/images/img82.jpg";
import img83 from "../assets/images/img83.jpg";
import img84 from "../assets/images/img84.jpg";

export default function BrandsTrust() {
  const normalizeSrc = (asset) => (typeof asset === "string" ? asset : asset?.src || "");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const headingRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);
  
  const logosRow1 = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img17,img29,img3,img4,img5,img6,img7,img8,img9,img10,img11,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27];
  const logosRow2 = [img13,img16,img32,img33,img34,img50,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56,img20,img15,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56];
  const logosRow3 = [img57,img58,img59,img60,img61,img62,img63,img64,img65,img66,img67,img68,img69,img70,img71,img72,img73,img16,img75,img76,img77,img78,img79,img80,img81,img82,img83,img84,img57,img58,img59,img60,img61,img62,img63,img64,img65,img66,img67,img68,img69,img70,img71,img72,img73,img74,img75,img76,img77,img78,img79,img80,img81,img82,img83,img84];
  
  const renderRow = (logos, rowIndex) => {
    // Faster, consistent speed - adjust this value to change speed (lower = faster)
    const duration = isMobile ? 30 : isTablet ? 35 : 40;
    
    return (
      <div
        key={rowIndex}
        style={{
          overflow: 'hidden',
          width: '100%',
          marginBottom: isMobile ? '20px' : isTablet ? '25px' : '30px',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'fit-content',
            animation: `scrollLeft${rowIndex} ${duration}s linear infinite`,
            willChange: 'transform'
          }}
          className="logo-animation"
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                marginRight: isMobile ? '15px' : isTablet ? '20px' : '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={normalizeSrc(logo)}
                alt={`Brand ${idx + 1}`}
                style={{
                  maxHeight: isMobile ? '60px' : isTablet ? '100px' : '140px',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
                  filter: 'brightness(1)',
                  cursor: 'pointer',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.filter = 'brightness(1.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(1)';
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollLeft0 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes scrollLeft1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes scrollLeft2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes circlePulse {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          }

          .logo-animation {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        `}} />
      
      <section
        style={{
          background: 'transparent',
          padding: isMobile ? '40px 16px' : isTablet ? '50px 20px' : '60px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <h2
          ref={headingRef}
          style={{
            fontSize: isMobile ? '20px' : isTablet ? '28px' : '40px',
            fontWeight: '700',
            marginBottom: isMobile ? '30px' : isTablet ? '40px' : '50px',
            textTransform: 'uppercase',
            width: '100%',
            color: '#000',
            fontFamily: "'Courier New', Courier, monospace",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            lineHeight: '1.3',
            padding: '0 10px'
          }}
        >
          Businesses Who Proudly{' '}
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              color: '#00ff9d',
              padding: isMobile ? '2px 8px' : isTablet ? '3px 10px' : '4px 12px'
            }}
          >
            Trust
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '130%',
                height: '140%',
                border: '3px solid #08c230',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 0.6,
                animation: 'circlePulse 2s ease-in-out infinite',
                pointerEvents: 'none'
              }}
            />
          </span>
        </h2>

        {renderRow(logosRow1, 0)}
        {renderRow(logosRow2, 1)}
        {renderRow(logosRow3, 2)}
      </section>
    </>
  );
}