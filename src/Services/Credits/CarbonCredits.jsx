import React, { useState } from 'react';
import { ChevronDown, Recycle, Target, Package, BarChart3, Award, Globe, TrendingDown, FileText, Users, Shield, CheckCircle, ArrowRight, Waves, Sparkles, Layers, AlertCircle, TrendingUp, ListChecks, MapPin } from 'lucide-react';
import pn1 from '../../assets/images/pn1.webp';  // Go up 2 levels
import pn2 from '../../assets/images/pn2.webp';
import pn3 from '../../assets/images/pn3.jpg';
import pn4 from '../../assets/images/pn4.webp';

import newp5 from '../../assets/images/newp5.webp';

export default function PlasticNetworkPage() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
   

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pn1.src}
            alt="Ocean plastic pollution"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">High-Integrity Plastic Responsibility</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
              Plastic<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">Network</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plastic Accounting, Neutrality & Credit Integration—enabling organizations to quantify, reduce,
              neutralize, and transparently disclose plastic impacts across operations, products, and value chains.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: BarChart3, value: "Full Value Chain", label: "Plastic Tracking" },
              { icon: Award, value: "Verra & PCX", label: "Registry Aligned" },
              { icon: Shield, value: "Audit Ready", label: "Documentation" },
              { icon: Globe, value: "India + Global", label: "Market Expertise" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:scale-105">
                <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement with Image */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-blue-500/20 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-auto">
              <img
                src={pn2.src}
                alt="Plastic recycling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
            <div className="p-12 relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">Addressing the Plastic Crisis</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Plastic Network is our dedicated domain for plastic impact measurement, responsibility frameworks,
                  and high-integrity plastic credit integration. We enable organizations to take meaningful action on
                  their plastic footprint through scientifically rigorous measurement and credible neutrality pathways.
                </p>
                <p className="text-lg">
                  Aligned with global voluntary plastic frameworks, corporate ESG requirements, and emerging plastic
                  responsibility regulations, we bring strong implementation capability across India and international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive plastic responsibility solutions</p>
        </div>

        {/* Service 1: Plastic Footprinting & Accounting */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('footprinting')}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Plastic Footprinting & Accounting</h3>
                    <p className="text-blue-400">Comprehensive plastic impact measurement across your value chain</p>
                  </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-blue-400 transition-transform ${activeSection === 'footprinting' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {activeSection === 'footprinting' && (
              <div className="p-8 space-y-8 border-t border-blue-500/20">
                {/* Hero Image for this section */}
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={pn3.src}
                    alt="Plastic waste analysis"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-lg font-semibold">Measure what matters—track every kilogram</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Understanding your plastic footprint is the first step toward meaningful action. Our comprehensive accounting
                  services provide the data foundation you need to make informed decisions, set reduction targets, and demonstrate
                  progress to stakeholders.
                </p>

                {/* Core Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Organizational Plastic Footprint",
                      desc: "Complete operations, suppliers, and value chain assessment"
                    },
                    {
                      title: "Supplier & Value-Chain Risk Assessment",
                      desc: "Identify plastic hotspots and supply chain vulnerabilities"
                    },
                    {
                      title: "Primary vs. Secondary Packaging",
                      desc: "Detailed packaging plastic analysis and optimization"
                    },
                    {
                      title: "Polymer-wise & Application-wise Inventory",
                      desc: "Granular plastic type mapping for targeted interventions"
                    },
                    {
                      title: "Baseline Establishment",
                      desc: "Multi-year tracking and performance monitoring frameworks"
                    },
                    {
                      title: "Plastic Credit Project Development",
                      desc: "Eligibility screening, methodology mapping, registry support"
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-1">{service.title}</h5>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Framework Alignment */}
                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="w-7 h-7 text-cyan-400" />
                    Framework & Registry Alignment
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        framework: "Verra Plastic Program",
                        desc: "Leading plastic waste standard with robust MRV requirements"
                      },
                      {
                        framework: "Plastic Credit Exchange (PCX)",
                        desc: "Advisory aligned with PCX methodologies and credit protocols"
                      },
                      {
                        framework: "Plastic Footprint Network (PFN)",
                        desc: "Standardized footprinting aligned with PFN guidelines"
                      },
                      {
                        framework: "End-to-End Project Development",
                        desc: "Registry support for Verra and PCX credit generation"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-cyan-500/10">
                        <h5 className="text-white font-semibold mb-2">{item.framework}</h5>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment Types */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Package,
                      title: "Packaging Analysis",
                      desc: "Primary, secondary, and tertiary packaging assessment"
                    },
                    {
                      icon: Layers,
                      title: "Polymer Mapping",
                      desc: "PET, HDPE, PVC, LDPE, PP, PS and multi-layer analysis"
                    },
                    {
                      icon: TrendingUp,
                      title: "Application Tracking",
                      desc: "Use-case categorization and lifecycle analysis"
                    }
                  ].map((type, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all">
                      <type.icon className="w-10 h-10 text-blue-400 mb-4" />
                      <h5 className="text-lg font-bold text-white mb-2">{type.title}</h5>
                      <p className="text-gray-400 text-sm">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Service 2: Plastic Neutrality & Offset Strategy */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('neutrality')}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Plastic Neutrality & Offset Strategy</h3>
                    <p className="text-cyan-400">Reduction-led pathways to credible plastic neutrality</p>
                  </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-cyan-400 transition-transform ${activeSection === 'neutrality' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {activeSection === 'neutrality' && (
              <div className="p-8 space-y-8 border-t border-cyan-500/20">
                {/* Hero Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={pn1.src}
                    alt="Circular economy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-lg font-semibold">From linear to circular—the 5Rs in action</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Plastic neutrality is not about offsetting away the problem—it's about fundamentally rethinking your
                  relationship with plastic. Our approach follows a reduction-first hierarchy, using high-integrity credits
                  only for residual plastic that cannot yet be eliminated.
                </p>

                {/* 5Rs Framework */}
                <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-2xl p-8 border border-teal-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <ListChecks className="w-7 h-7 text-teal-400" />
                    The 5Rs Framework: Reduction-Led Strategy
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        r: "Refuse",
                        desc: "Eliminate unnecessary plastic at source—design out waste before it begins",
                        color: "from-red-500 to-orange-500"
                      },
                      {
                        r: "Reduce",
                        desc: "Minimize essential plastic through lightweight design and material optimization",
                        color: "from-orange-500 to-amber-500"
                      },
                      {
                        r: "Reuse",
                        desc: "Shift to reusable systems and circular business models",
                        color: "from-amber-500 to-yellow-500"
                      },
                      {
                        r: "Recycle",
                        desc: "Ensure recyclability and closed-loop material flows",
                        color: "from-yellow-500 to-lime-500"
                      },
                      {
                        r: "Recover",
                        desc: "Invest in collection infrastructure and plastic credit offsets",
                        color: "from-lime-500 to-green-500"
                      }
                    ].map((r, idx) => (
                      <div key={idx} className="flex gap-4 items-start p-5 bg-slate-800/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transition-all">
                        <div className={`w-12 h-12 bg-gradient-to-br ${r.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}>
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-bold mb-1 text-lg">{r.r}</h5>
                          <p className="text-gray-400">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Services */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Plastic Neutrality Roadmap Development",
                      desc: "Strategic 5Rs-based pathways aligned with business objectives"
                    },
                    {
                      title: "PFN-Aligned Footprinting",
                      desc: "Operations, supplier, and value chain plastic risk assessment"
                    },
                    {
                      title: "High-Integrity Plastic Credit Strategy",
                      desc: "Verra and PCX aligned offset portfolios with impact verification"
                    },
                    {
                      title: "Annual Neutrality Maintenance",
                      desc: "Ongoing programs for sustained plastic neutrality claims"
                    },
                    {
                      title: "Double-Counting Risk Assessment",
                      desc: "Traceability protocols and chain-of-custody verification"
                    },
                    {
                      title: "Plastic Leakage Hotspot Identification",
                      desc: "Targeted, high-impact interventions for maximum effectiveness"
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-slate-800/50 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold mb-1">{service.title}</h5>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Development Support */}
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Recycle className="w-7 h-7 text-blue-400" />
                    Plastic Credit Project Development (Verra / PCX)
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Plastic credit project eligibility screening and feasibility",
                      "Methodology mapping to Verra and PCX requirements",
                      "Registry account setup and project registration support",
                      "End-to-end project development from design to issuance",
                      "MRV (Monitoring, Reporting, Verification) system implementation",
                      "Credit issuance and market integration advisory"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Areas */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Leakage Hotspots",
                      desc: "Targeted interventions in high-impact geographies"
                    },
                    {
                      icon: Waves,
                      title: "Recovery Infrastructure",
                      desc: "Collection, sorting, and processing system development"
                    },
                    {
                      icon: Shield,
                      title: "Claims Integrity",
                      desc: "Transparent, auditable neutrality certifications"
                    }
                  ].map((area, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <area.icon className="w-10 h-10 text-cyan-400 mb-4" />
                      <h5 className="text-lg font-bold text-white mb-2">{area.title}</h5>
                      <p className="text-gray-400 text-sm">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Plastic Network */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Why Plastic Network?</h2>
          <p className="text-xl text-gray-400">Expertise that drives real plastic impact</p>
        </div>

        {/* Image Grid with Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <img
              src={pn4.src}
              alt="Recycling facility"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">India-Specific Expertise</h3>
                <p className="text-gray-300">Deep understanding of India's plastic leakage and recovery landscape</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <img
              src={newp5.src}
              alt="Registry standards"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Registry-Aligned Standards</h3>
                <p className="text-gray-300">Verra and PCX aligned accounting and credit integration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: TrendingDown,
              title: "Measurement-Driven",
              desc: "Data-backed strategies starting with accurate footprinting"
            },
            {
              icon: Target,
              title: "Reduction-Led Approach",
              desc: "5Rs hierarchy prioritizing elimination over offsetting"
            },
            {
              icon: Award,
              title: "Registry-Aligned",
              desc: "Verra and PCX compliant credit integration"
            },
            {
              icon: Globe,
              title: "India Expertise",
              desc: "Strong leakage and recovery implementation capability"
            },
            {
              icon: FileText,
              title: "Audit-Ready Documentation",
              desc: "Transparent, verifiable claims and reporting"
            },
            {
              icon: Shield,
              title: "Claims Integrity",
              desc: "Double-counting prevention and traceability assurance"
            },
            {
              icon: Users,
              title: "Stakeholder Engagement",
              desc: "Supply chain collaboration and value chain partnerships"
            },
            {
              icon: Sparkles,
              title: "Innovation Focus",
              desc: "Cutting-edge solutions for circular plastic economy"
            }
          ].map((reason, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
              <reason.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Why Partner with Us?</h2>
          <p className="text-xl text-gray-400">Expertise that drives results</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Technical Excellence", desc: "Deep expertise in carbon accounting and MRV methodologies" },
            { icon: Globe, title: "Global-Local Integration", desc: "International best practices with India-specific knowledge" },
            { icon: Layers, title: "End-to-End Support", desc: "Comprehensive services from inception to certification" },
            { icon: Shield, title: "Integrity-First", desc: "Credible accounting and transparent methodologies" },
            { icon: TrendingUp, title: "Strategic Value", desc: "Transform compliance into competitive advantage" },
            { icon: FileText, title: "Proven Track Record", desc: "Successful engagements across sectors" }
          ].map((reason, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105">
              <reason.icon className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 text-center py-20 px-6">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Address Your Plastic Footprint?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Partner with us to measure, reduce, and neutralize your plastic impact with high-integrity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">


            </div>
          </div>
        </div>
      </section>



    </div>
  );
}