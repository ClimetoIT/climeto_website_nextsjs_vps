import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import eprplastic from '../../assets/images/eprplastic.jpg';
export default function EPRPlasticPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibleSections, setVisibleSections] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    companySize: '',
    contactNumber: '',
    alternativeContact: '',
    message: ''
  });
  
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);
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

    [benefitsRef, processRef, contactRef, faqRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  

  const benefits = [
    {
      title: "Reduced Plastic Waste",
      description: "EPR registration can lead to improved environmental performance and a reduced plastic waste.",
      icon: "♻️"
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
      description: "EPR Target Fulfillment requires Producers importers, Brand Owners (PIBOs) to purchase EPR Plastic credits from EPR registered Recyclers, Co-Processors (PWPs)",
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
      question: "What is Extended Producer Responsibility (EPR) for plastic?",
      answer: "Extended Producer Responsibility (EPR) for plastic is a policy approach that holds producers responsible for the entire life cycle of the plastic products they manufacture, including post-consumer disposal and recycling."
    },
    {
      question: "How does EPR for plastic work?",
      answer: "Under EPR for plastic, producers are required to take financial and/or operational responsibility for the collection, recycling, or safe disposal of the plastic products they introduce into the market. This often involves setting up collection systems, funding recycling programs, or ensuring proper disposal of plastic waste."
    },
    {
      question: "Why is EPR for plastic important?",
      answer: "EPR for plastic is important because it shifts the burden of managing plastic waste from taxpayers and municipalities to the producers who are in the best position to minimize waste generation and increase recycling rates. It incentivizes producers to design more sustainable products and packaging and invest in recycling infrastructure."
    },
    {
      question: "Who is responsible under EPR for plastic?",
      answer: "Producers of plastic products or packaging are primarily responsible under EPR for plastic. This includes manufacturers, importers, brand owners, and retailers who introduce plastic products into the market."
    }
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
    
    <section style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${eprplastic.src})`, // Updated line
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
            textShadow: '0 4px 6px rgba(0,0,0,0.3)'
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
            What is EPR Plastic?
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '1.8',
            color: '#4a5568',
            textAlign: 'justify'
          }}>
            The Extended Producer Responsibility (EPR) is an environmental policy, which holds Producers, Importers, and Brand Owners accountable for the introduction of plastic into the environment or any resulting pollution caused by plastic. EPR Registration is mandatory for producers of certain products, such as plastic packaging, under the guidelines set by the Central Pollution Control Board (CPCB) in India. EPR registration ensures compliance with these regulations, and requires producers to establish systems for the collection, transportation, and disposal of end-of-life products. EPR Compliance involves meeting the specified targets for waste collection recycling, and disposal. Producers must submit annual reports on their EPR implementation, and failure to comply with the CPCB EPR guidelines can result in penalties and legal action. EPR Target Fulfillment requires Producers, Importers, Brand Owners (PIBOs) to purchase EPR Plastic credits from EPR registered Recyclers, Co-Processors (PWPs). The CPCB's EPR guidelines specify the responsibilities of various stakeholders, including PIBOs & PWPs and local authorities. By fulfilling EPR targets, PIBOs can demonstrate a commitment to environmental sustainability, improve their environmental performance, and reduce their liability for any environmental damage caused by their products.
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
                  color: '#10b981',
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
                  color: '#10b981',
                  opacity: 0.1
                }}>
                  {step.step}
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '900',
                  color: '#10b981',
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

      {/* Contact Form Section */}
      {/* <section
        id="contact"
        ref={contactRef}
        style={{
          padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            GET IN TOUCH
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Fill out the form below and we'll get back to you soon
          </p>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '24px' : '40px',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            opacity: visibleSections.includes('contact') ? 1 : 0,
            transform: visibleSections.includes('contact') ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <input
                type="text"
                name="organizationName"
                placeholder="Organization Name *"
                required
                value={formData.organizationName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <input
                type="email"
                name="email"
                placeholder="Work Email Address *"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white',
                  color: formData.companySize ? '#1a1a1a' : '#9ca3af'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value="">Company size *</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number *"
                required
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <input
                type="tel"
                name="alternativeContact"
                placeholder="Alternative Contact Number"
                value={formData.alternativeContact}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <textarea
                name="message"
                placeholder="How can we help you? *"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#059669';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#10b981';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                }}
              >
                Submit
              </button>

             
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        style={{
          padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 40px',
          backgroundColor: '#f8f9fa'
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
            FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
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
                      color: '#10b981',
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
    </div>
  );
}