
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Globe, Clock, CheckCircle } from "lucide-react";
import rajwada from '../assets/images/rajwada.jpg';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in required fields: Name, Email, Message");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_a2z5zy2",
        "template_p5ivd4k",
        templateParams,
        "4eY9uaRaYhI4OzB-_"
      );

      setShowSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91-9039946410",
      link: "tel:+919039946410",
      gradientStart: "#3b82f6",
      gradientEnd: "#06b6d4"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@climeto.com",
      link: "mailto:info@climeto.com",
      gradientStart: "#10b981",
      gradientEnd: "#059669"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Indore (HQ), India",
      link: null,
      gradientStart: "#a855f7",
      gradientEnd: "#ec4899"
    },
    // {
    //   icon: <Clock className="w-6 h-6" />,
    //   title: "Working Hours",
    //   content: "Mon - Sat: 9AM - 6PM",
    //   link: null,
    //   gradientStart: "#f97316",
    //   gradientEnd: "#ef4444"
    // }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 50%, #fef3c7 100%)" }}>
      {/* Hero Banner */}
      <section style={{
        position: "relative",
        height: isMobile ? "400px" : "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1b355e 0%, #2d5a7b 50%, #36a852 100%)",
        overflow: "hidden"
      }}>
        {/* Animated background shapes */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-15%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(54, 168, 82, 0.2)",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px"
        }}>
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            marginBottom: "24px",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}>
            <span style={{ color: "white", fontWeight: "600", fontSize: "14px" }}>
              📞 We're Here to Help
            </span>
          </div>
          
          <h1 style={{
            fontSize: isMobile ? "40px" : "64px",
            fontWeight: "900",
            color: "white",
            marginBottom: "20px",
            lineHeight: "1.1",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}>
            Let's Start a <span style={{ color: "#7FE5A5" }}>Conversation</span>
          </h1>
          
          <p style={{
            fontSize: isMobile ? "18px" : "22px",
            color: "rgba(255, 255, 255, 0.95)",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div style={{
        maxWidth: "1280px",
        margin: "-80px auto 0",
        padding: "0 24px",
        position: "relative",
        zIndex: 20
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginBottom: "80px"
        }}>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: info.link ? "pointer" : "default",
                border: "2px solid transparent"
              }}
              onClick={() => info.link && window.open(info.link, "_self")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)";
                e.currentTarget.style.borderColor = "#36a852";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${info.gradientStart} 0%, ${info.gradientEnd} 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                color: "white",
                boxShadow: "0 8px 20px rgba(54, 168, 82, 0.3)"
              }}>
                {info.icon}
              </div>
              <h3 style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6b7280",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {info.title}
              </h3>
              <p style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#111827",
                margin: 0
              }}>
                {info.content}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gap: "48px",
          marginBottom: "80px"
        }}>
          {/* Left: Office Info */}
          <div>
            <h2 style={{
              fontSize: isMobile ? "32px" : "40px",
              fontWeight: "900",
              background: "linear-gradient(135deg, #1b355e 0%, #36a852 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "32px"
            }}>
              Our Headquarters
            </h2>

            <div style={{
              background: "white",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              marginBottom: "32px"
            }}>
              <img
                src={rajwada.src}
                alt="Indore Office"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: "24px"
                }}
              />
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1b355e 0%, #36a852 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white"
                }}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "#111827",
                    margin: 0
                  }}>
                    Indore, India
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: 0
                  }}>
                    Headquarters
                  </p>
                </div>
              </div>
              <a
                href="tel:+919039946410"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, #36a852 0%, #2d8a42 100%)",
                  color: "white",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  marginTop: "16px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(54, 168, 82, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Phone className="w-5 h-5" />
                +91-9039946410
              </a>
            </div>

            {/* Why Choose Us */}
            <div style={{
              background: "linear-gradient(135deg, #1b355e 0%, #36a852 100%)",
              padding: "32px",
              borderRadius: "24px",
              color: "white"
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "800",
                marginBottom: "20px"
              }}>
                Why Choose Climeto?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Expert Team", "24/7 Support", "Sustainable Solutions", "Global Reach"].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                    <CheckCircle className="w-6 h-6" style={{ color: "#7FE5A5" }} />
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{
            background: "white",
            padding: isMobile ? "32px 24px" : "48px 40px",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Success Message */}
            {showSuccess && (
              <div style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                right: "24px",
                padding: "16px 20px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                zIndex: 100,
                animation: "slideDown 0.3s ease-out"
              }}>
                <CheckCircle className="w-6 h-6" />
                <span style={{ fontWeight: "600" }}>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <div style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              borderRadius: "50px",
              marginBottom: "20px",
              border: "2px solid #bbf7d0"
            }}>
              <span style={{
                color: "#166534",
                fontWeight: "700",
                fontSize: "14px"
              }}>
                ✨ Get in Touch
              </span>
            </div>

            <h2 style={{
              fontSize: isMobile ? "32px" : "40px",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "12px"
            }}>
              Send Us a Message
            </h2>
            <p style={{
              color: "#6b7280",
              fontSize: "16px",
              marginBottom: "32px",
              lineHeight: "1.6"
            }}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px"
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#36a852"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "16px"
              }}>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px"
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#36a852"}
                    onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px"
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#36a852"}
                    onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px"
                }}>
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.3s ease",
                    resize: "none",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#36a852"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #36a852 0%, #2d8a42 100%)",
                  color: "white",
                  fontWeight: "700",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(54, 168, 82, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid white",
                      borderTopColor: "transparent",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite"
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}