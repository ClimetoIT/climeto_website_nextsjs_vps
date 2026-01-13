import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import eprbattery from '../../assets/images/eprbattery.png';
export default function EPRBatteryPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibleSections, setVisibleSections] = useState([]);
  
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

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
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    [benefitsRef, processRef, faqRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Reduced Plastic Waste",
      description: "EPR registration can lead to improved environmental performance and a reduced plastic waste.",
      icon: "🌱"
    },
    {
      title: "Competitive Advantage",
      description: "Companies registered for EPR can gain a competitive advantage by appealing to environment conscious consumers",
      icon: "🏆"
    },
    {
      title: "Reduced Risk Of Penalty",
      description: "Most of the vehicles get damaged just because of maintenance neglect you take",
      icon: "⚖️"
    }
  ];

  const processSteps = [
    {
      title: "EPR Registration",
      description: "EPR Registration on Centralized Portal of Central Pollution Control Board",
      step: "01"
    },
    {
      title: "EPR Compliance",
      description: "Fulfilment of EPR Compliance including Monthly, Quarterly and Annual Compliances",
      step: "02"
    },
    {
      title: "EPR Target Fulfillment",
      description: "Target Fulfillment requires Producers importers, Brand Owners (PIBOs) to purchase EPR Plastic credits from EPR registered Recyclers, Co-Processors (PWPs)",
      step: "03"
    },
    {
      title: "Annual Return Report",
      description: "Filing of Annual Return Report Monthly Report",
      step: "04"
    }
  ];

  const faqs = [
    {
      question: "What is Battery Extended Producer Responsibility (EPR)?",
      answer: "Battery Extended Producer Responsibility (EPR) is a policy approach that holds battery producers responsible for managing the collection, recycling, and disposal of batteries at the end of their life cycle."
    },
    {
      question: "How does Battery EPR work?",
      answer: "Under Battery EPR, battery producers are obligated to finance and/or manage the collection and recycling of batteries, ensuring they are properly disposed of or recycled at the end of their useful life. This includes setting up collection points and recycling facilities."
    },
    {
      question: "Who is responsible under Battery EPR?",
      answer: "Battery EPR typically holds battery manufacturers, importers, and sometimes retailers responsible for managing the end-of-life disposal or recycling of batteries. These entities are required to take financial and operational responsibility for proper battery waste management."
    },
    {
      question: "What types of batteries are covered under Battery EPR?",
      answer: "Battery EPR typically covers all types of batteries, including rechargeable batteries (e.g., lithium-ion, nickel-metal hydride) and single-use batteries (e.g., alkaline, zinc-carbon)."
    },
    {
      question: "Is collaboration between stakeholders necessary for Battery EPR?",
      answer: "Yes, collaboration between battery producers, government agencies, recyclers, retailers, and consumers is essential for the successful implementation of Battery EPR. Effective coordination ensures efficient collection, recycling, and proper disposal of batteries while minimizing environmental and health impacts."
    }
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
 <section style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${eprbattery.src})`, // Updated line
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: isMobile ? 'scroll' : 'fixed',
  padding: isMobile ? '80px 20px' : isTablet ? '100px 40px' : '120px 40px',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden'
}}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: isMobile ? '36px' : isTablet ? '48px' : '64px',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            Extended Producer Responsibility
          </h1>
          <p style={{
            fontSize: isMobile ? '20px' : isTablet ? '24px' : '32px',
            fontWeight: '600',
            opacity: 0.95
          }}>
            We handle EVERYTHING for you!
          </p>
        </div>
      </section>

      {/* What is EPR Section */}
      <section style={{
        padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            What is EPR for Battery?
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '1.8',
            color: '#4a5568',
            textAlign: 'justify'
          }}>
            EPR (Extended Producer Responsibility) of Battery is the responsibility of the Producer, Importer, and Manufacturer to manage waste batteries in an environmentally safe manner to prevent any adverse effects that could harm human health or the environment from any substances contained in the waste batteries. The Ministry of Environment, Forests and Climate Change in India has issued a notification titled "Battery Waste Management Rules, 2022" to promote the safe and eco-friendly processing of waste batteries. These new rules replace the previous "Batteries (Management and Handling) Rules, 2001" and apply to Producers, Manufacturers and Importers engaged in the collection, segregation, transportation, reprocessing and recycling of waste batteries.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        ref={benefitsRef}
        style={{
          padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: isMobile ? '40px' : '60px',
            textAlign: 'center'
          }}>
            Benefits of EPR Registration
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  opacity: visibleSections.includes('benefits') ? 1 : 0,
                  transform: visibleSections.includes('benefits') ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.2}s`,
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '700',
                  color: '#667eea',
                  marginBottom: '16px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#4a5568'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        ref={processRef}
        style={{
          padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: isMobile ? '40px' : '60px',
            textAlign: 'center'
          }}>
            EPR Registration Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  opacity: visibleSections.includes('process') ? 1 : 0,
                  transform: visibleSections.includes('process') ? 'scale(1)' : 'scale(0.9)',
                  transition: 'all 0.5s ease',
                  transitionDelay: `${index * 0.15}s`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  fontSize: '72px',
                  fontWeight: '900',
                  color: '#667eea',
                  opacity: 0.1
                }}>
                  {step.step}
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '900',
                  color: '#667eea',
                  marginBottom: '16px'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#4a5568'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        style={{
          padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: isMobile ? '40px' : '60px',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  opacity: visibleSections.includes('faq') ? 1 : 0,
                  transform: visibleSections.includes('faq') ? 'translateX(0)' : 'translateX(-30px)',
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: activeAccordion === index ? '0 8px 16px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '20px' : '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    flex: 1,
                    paddingRight: '16px'
                  }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    style={{
                      width: '24px',
                      height: '24px',
                      color: '#667eea',
                      transition: 'transform 0.3s ease',
                      transform: activeAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: activeAccordion === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                  }}
                >
                  <p style={{
                    padding: isMobile ? '0 20px 20px' : '0 24px 24px',
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: '#4a5568'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            marginBottom: '32px',
            opacity: 0.95
          }}>
            Let us handle your EPR compliance requirements
          </p>
       
       
        </div>
      </section>
    </div>
  );
}