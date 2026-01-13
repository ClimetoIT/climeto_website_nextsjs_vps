import React, { useState } from 'react';
import { Cpu, Shield, TrendingDown, Award, Zap, Recycle, CheckCircle } from 'lucide-react';

export default function EPREWastePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    orgName: '',
    email: '',
    companySize: '',
    contact: '',
    altContact: '',
    message: ''
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.orgName || !formData.email || !formData.companySize || !formData.contact || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you! We will get in touch with you soon.');
    setFormData({
      fullName: '',
      orgName: '',
      email: '',
      companySize: '',
      contact: '',
      altContact: '',
      message: ''
    });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is E-Waste Extended Producer Responsibility (EPR)?",
      answer: "E-Waste Extended Producer Responsibility (EPR) is a policy framework that holds manufacturers, importers, and sometimes retailers of electronic products responsible for the entire life cycle of their products, including collection, recycling, and proper disposal of electronic waste."
    },
    {
      question: "How does E-Waste EPR work?",
      answer: "Under E-Waste EPR, manufacturers and importers are obligated to finance and/or manage the collection and recycling of electronic products at the end of their useful life. This typically involves setting up collection points, recycling facilities, and ensuring the safe disposal of hazardous materials found in electronics."
    },
    {
      question: "Why is E-Waste EPR important?",
      answer: "E-Waste EPR is important because it helps prevent environmental pollution and health hazards caused by improper disposal of electronic waste. By holding producers accountable for their products throughout their life cycle, EPR encourages better product design, recycling, and resource conservation."
    },
    {
      question: "Who is responsible under E-Waste EPR?",
      answer: "Manufacturers, importers, and sometimes retailers of electronic products are primarily responsible under E-Waste EPR. These entities are required to take financial and operational responsibility for managing the electronic waste generated from their products."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>
        </div>
       
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                Extended Producer Responsibility
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                We Handle <span className="text-blue-200">EVERYTHING</span> For You!
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-50">
                Comprehensive EPR E-Waste Management Solutions
              </p>
            </div>
           
            {/* Banner Image */}
            <div className="relative order-first md:order-last">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20">
                <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595514535116-c1e5bbbb4d0f?w=800&h=600&fit=crop"
                    alt="Electronic Waste Recycling and EPR Management"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="flex flex-col items-center justify-center h-full text-white p-4"><svg class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg><p class="text-lg sm:text-xl font-semibold text-center">E-Waste Management</p></div>';
                    }}
                  />
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-emerald-100">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">Sustainable E-Waste Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is EPR E-Waste Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
            What is EPR E-Waste?
          </h2>
          <div className="text-sm sm:text-base md:text-lg max-w-none text-slate-600 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Extended Producer Responsibility EPR E-waste is the responsibility of every producer of electrical and electronic equipment (EEE) for channeling e-waste to an authorized dismantler/recycler to ensure environmentally sound management of such waste.
            </p>
            <p>
              EPR authorization is mandatory and has to be obtained by all the producers, including importers, e-retailers/online sellers/e-bay, etc. of EEE covered in E-Waste. A producer can implement its EPR either through a take-back system by setting up collection centers or both to channel e-waste/end-of-life products to authorized dismantlers/recyclers.
            </p>
            <p>
              The producers are required to have arrangements with authorized dismantlers/recyclers either individually or collectively or through a Producer Responsibility Organization (PRO) or E-Waste Exchange system as spelled in their EPR Plan, which is approved/authorized by Central Pollution Control Board (CPCB).
            </p>
            <p>
              These rules apply to every producer, consumer or bulk consumer, collection center, dismantler, and recycler of e-waste involved in the manufacture, sale, purchase, and processing of electrical and electronic equipment or components specified in Schedule 1 of these Rules.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-slate-100 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8 sm:mb-12 md:mb-16">
            Benefits of EPR Registration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Reduced E-Waste</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                EPR registration leads to improved environmental performance and significantly reduced electronic waste through proper management practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Competitive Advantage</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Companies registered for EPR gain a competitive edge by appealing to environmentally conscious consumers and businesses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 md:col-span-1">
              <div className="bg-teal-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Reduced Risk of Penalty</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Stay compliant with CPCB regulations and avoid penalties through proper EPR management and authorization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8 sm:mb-12 md:mb-16">
          EPR Registration Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-emerald-400 to-green-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 opacity-50">01</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">EPR Registration</h3>
            <p className="text-sm sm:text-base text-emerald-50">
              EPR Registration on Centralized Portal of Central Pollution Control Board
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 opacity-50">02</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">EPR Compliance</h3>
            <p className="text-sm sm:text-base text-green-50">
              Fulfilment of EPR Compliance including Monthly, Quarterly and Annual Compliances
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-400 to-cyan-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 opacity-50">03</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">EPR Target Fulfillment</h3>
            <p className="text-sm sm:text-base text-teal-50">
              Purchase EPR credits from registered Recyclers and Co-Processors
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 opacity-50">04</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Annual Return Report</h3>
            <p className="text-sm sm:text-base text-cyan-50">
              Filing of Annual Return Report and Monthly Reports
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <div className="bg-gradient-to-b from-white to-slate-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-center text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
              Let us help you with your EPR E-Waste compliance journey
            </p>
           
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Company Size *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Alternative Contact Number
                  </label>
                  <input
                    type="tel"
                    name="altContact"
                    value={formData.altContact}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  How can we help you? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your EPR E-Waste requirements..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-start sm:items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-xl sm:text-2xl text-emerald-500 transform transition-transform duration-300 flex-shrink-0"
                  style={{ transform: activeAccordion === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: activeAccordion === index ? '500px' : '0',
                  opacity: activeAccordion === index ? '1' : '0'
                }}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}