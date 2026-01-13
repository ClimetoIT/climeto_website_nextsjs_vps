import React, { useState } from 'react';
import { Leaf, Shield, TrendingDown, Award, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function EPRTirePage() {
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
      question: "How does Tyre EPR work?",
      answer: "Under Tyre EPR, tyre producers are obligated to finance and/or manage the collection, recycling, and proper disposal of tyres once they reach the end of their useful life. This typically involves setting up collection systems, recycling facilities, and ensuring proper disposal of tyres."
    },
    {
      question: "Why is Tyre EPR important?",
      answer: "Tyre EPR is important because it helps prevent environmental pollution and health hazards caused by improper disposal of tyres, such as tyre fires and the release of harmful chemicals. By holding producers accountable, EPR encourages proper tyre recycling and disposal practices."
    },
    {
      question: "Does Tyre EPR exist globally?",
      answer: "Yes, Tyre EPR exists in various forms and degrees of implementation around the world. Many countries and regions have adopted EPR policies for tyres to address the environmental and public health risks associated with tyre waste."
    },
    {
      question: "How does Tyre EPR promote recycling?",
      answer: "Tyre EPR promotes recycling by creating financial incentives for tyre producers to invest in tyre collection infrastructure, recycling technologies, and public awareness campaigns. This encourages consumers to properly dispose of tyre and facilitates their recycling into new products or materials."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                Extended Producer Responsibility
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We Handle <span className="text-emerald-200">EVERYTHING</span> For You!
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-50">
                Comprehensive EPR Tire Management Solutions
              </p>
           
            </div>
            
            {/* Banner Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop" 
                  alt="Tire Recycling and EPR Management"
                  className="w-full h-80 object-cover rounded-xl shadow-xl"
                />
                <div className="mt-4 flex items-center justify-center gap-2 text-emerald-100">
                  <Leaf className="w-5 h-5" />
                  <span className="text-sm font-medium">Sustainable Tire Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is EPR Tire Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center">
            What is EPR Tire?
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
            <p className="mb-4">
              Extended Producer Responsibility (EPR) for tires necessitates manufacturers to actively manage the environmental impact across the entire product life cycle, encompassing crucial stages such as collection, recycling, and proper disposal.
            </p>
            <p className="mb-4">
              Tire manufacturers are mandated to register on the Central Pollution Control Board's (CPCB) portal, diligently meeting specified waste targets. Non-compliance with these regulations subjects producers to environmental compensation determined by the CPCB.
            </p>
            <p className="mb-4">
              Entities involved in tire production or distribution must complete the Registration process on the CPCB portal, regularly filing comprehensive annual returns detailing their Waste Tyre obligations.
            </p>
            <p>
              The implementation of EPR significantly mitigates the environmental footprint by promoting the reuse and recycling of tires, thereby curbing the demand for new raw materials and minimizing adverse environmental impacts. Producers, including manufacturers, sellers, and importers, bear the responsibility of ensuring environmentally sound waste management practices for tires.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-slate-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Benefits of EPR Registration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingDown className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Reduced Waste</h3>
              <p className="text-slate-600 leading-relaxed">
                EPR registration can lead to improved environmental performance and significantly reduced tire waste through better management practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Competitive Advantage</h3>
              <p className="text-slate-600 leading-relaxed">
                Companies registered for EPR can gain a competitive advantage by appealing to environmentally conscious consumers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Reduced Risk of Penalty</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay compliant with CPCB regulations and avoid environmental compensation penalties through proper EPR management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          EPR Registration Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-5xl font-bold mb-4 opacity-50">01</div>
            <h3 className="text-xl font-bold mb-3">EPR Registration</h3>
            <p className="text-emerald-50">
              EPR Registration on Centralized Portal of Central Pollution Control Board
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-5xl font-bold mb-4 opacity-50">02</div>
            <h3 className="text-xl font-bold mb-3">EPR Compliance</h3>
            <p className="text-blue-50">
              Fulfilment of EPR Compliance including Monthly, Quarterly and Annual Compliances
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-5xl font-bold mb-4 opacity-50">03</div>
            <h3 className="text-xl font-bold mb-3">EPR Target Fulfillment</h3>
            <p className="text-purple-50">
              Purchase EPR credits from registered Recyclers and Co-Processors
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-5xl font-bold mb-4 opacity-50">04</div>
            <h3 className="text-xl font-bold mb-3">Annual Return Report</h3>
            <p className="text-orange-50">
              Filing of Annual Return Report and Monthly Reports
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section
      <div className="bg-gradient-to-b from-white to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Let us help you with your EPR compliance journey
            </p>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Size *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Alternative Contact Number
                  </label>
                  <input
                    type="tel"
                    name="altContact"
                    value={formData.altContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How can we help you? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your EPR requirements..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-lg">
                  {faq.question}
                </span>
                <span className="text-2xl text-emerald-600 transform transition-transform duration-300"
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
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}