import React, { useState } from 'react';
import { ChevronDown, Leaf, Target, Scale, Award, Globe, TrendingUp, FileText, Users, Shield, CheckCircle, ArrowRight, Zap, Building2, Factory, Wind, Sparkles, BarChart3, Layers } from 'lucide-react';

export default function CarbonNetworkPage() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-slate-900" />
            </div>
            <span className="text-xl font-bold text-white">Carbon Network</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a>
            <a href="#expertise" className="text-gray-300 hover:text-emerald-400 transition-colors">Expertise</a>
            <a href="#icm" className="text-gray-300 hover:text-emerald-400 transition-colors">ICM & CCTS</a>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold">Credible Neutrality Without Greenwashing</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
              Carbon<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">Network</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive carbon management ecosystem delivering end-to-end solutions for project development,
              carbon neutrality pathways, and India's compliance carbon market framework.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Award, value: "ISO Certified", label: "Global Standards" },
              { icon: Globe, value: "5+ Registries", label: "Market Access" },
              { icon: BarChart3, value: "All Sectors", label: "CDM Coverage" },
              { icon: Shield, value: "Deep MRV", label: "Technical Expertise" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all hover:scale-105">
                <stat.icon className="w-8 h-8 text-emerald-400 mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 border border-emerald-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Navigating the Carbon Economy</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
              <p className="text-lg">
                In an era where climate action is no longer optional, organizations need more than just compliance—they need
                strategic carbon management that drives real impact. Carbon Network bridges the gap between ambition and
                achievement, offering scientifically rigorous, market-ready solutions across the entire carbon value chain.
              </p>
              <p className="text-lg">
                From project inception to credit issuance, from footprint measurement to neutrality certification, we provide
                the technical depth and market intelligence that transforms carbon challenges into opportunities for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive carbon solutions for every stage of your journey</p>
        </div>

        {/* Service 1: Carbon Credit Project Development */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('project')}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Carbon Credit Project Development</h3>
                    <p className="text-emerald-400">End-to-end technical carbon ecosystem with deep MRV expertise</p>
                  </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-emerald-400 transition-transform ${activeSection === 'project' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {activeSection === 'project' && (
              <div className="p-8 space-y-8 border-t border-emerald-500/20">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Carbon markets are complex, evolving rapidly, and demand precision. Our project development services span the complete
                  lifecycle—from initial feasibility through validation, monitoring, and credit issuance.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Project Screening & Pre-feasibility Assessment (CDM/VCS/GS/ICR)",
                    "Baseline & Additionality Demonstration",
                    "Leakage, Permanence & Risk Analysis",
                    "Monitoring Plans & MRV System Design",
                    "Stakeholder Consultations & Engagement",
                    "End-to-End Project Development Support"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Documentation Support */}
                <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-2xl p-8 border border-teal-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileText className="w-7 h-7 text-teal-400" />
                    Documentation & Registry Support
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "PDD / ER & MR Development",
                      "SDG Evaluation & Impact Assessment",
                      "Validation & Verification Support",
                      "Registry Account Management",
                      "Issuance & Credit Structuring",
                      "Forward Sale & Monetization Advisory"
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-teal-400" />
                        <span className="text-gray-300">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sectoral Expertise */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Wind, title: "Renewable Energy", desc: "Solar, wind, hydro, biomass & energy efficiency" },
                    { icon: Zap, title: "Waste Heat Recovery", desc: "Industrial optimization & cogeneration systems" },
                    { icon: Leaf, title: "Nature-Based Solutions", desc: "Forestry, REDD+, blue carbon & soil carbon" }
                  ].map((sector, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                      <sector.icon className="w-10 h-10 text-emerald-400 mb-4" />
                      <h5 className="text-lg font-bold text-white mb-2">{sector.title}</h5>
                      <p className="text-gray-400 text-sm">{sector.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Service 2: Carbon Neutrality Pathway */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-teal-500/20 hover:border-teal-500/40 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('neutrality')}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Carbon Neutrality Pathway</h3>
                    <p className="text-teal-400">Structured, defensible approach to carbon neutrality claims</p>
                  </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-teal-400 transition-transform ${activeSection === 'neutrality' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {activeSection === 'neutrality' && (
              <div className="p-8 space-y-8 border-t border-teal-500/20">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Carbon neutrality is not a marketing claim—it's a commitment backed by rigorous science, transparent accounting,
                  and credible offsetting. Our approach prioritizes emissions reduction first, strategic offsetting second.
                </p>

                {/* Services */}
                <div className="space-y-4">
                  {[
                    { title: "Carbon Neutrality Baseline Establishment", desc: "Comprehensive emissions inventory and baseline year reference" },
                    { title: "Emission Reduction Hierarchy Planning", desc: "Strategic roadmaps aligned with science-based targets" },
                    { title: "Offset Portfolio Design", desc: "Quality-screened carbon offsets with co-benefits" },
                    { title: "Annual Neutrality Maintenance", desc: "Ongoing tracking and certification renewal support" },
                    { title: "Third-party Assurance", desc: "Independent validation of neutrality claims" },
                    { title: "Multi-year Emissions Trend Analysis", desc: "Performance tracking and improvement strategies" }
                  ].map((service, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transition-all">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-1">{service.title}</h5>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carbon Footprinting */}
                <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-2xl p-8 border border-cyan-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-cyan-400" />
                    Carbon Footprinting & GHG Accounting
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Scope 1, 2, 3 Footprint", tag: "Organization" },
                      { title: "Facility & Asset-level", tag: "Operational" },
                      { title: "Product Carbon Footprint", tag: "Product" },
                      { title: "Supply Chain Mapping", tag: "Value Chain" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-cyan-500/10">
                        <div className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-xs font-semibold mb-3">
                          {item.tag}
                        </div>
                        <h5 className="text-white font-semibold">{item.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standards */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "ISO 14064-1 (Organizational GHG Inventories)",
                    "ISO 14064-2 (Project-level GHG Accounting)",
                    "ISO 14067 (Product Carbon Footprint)",
                    "GHG Protocol & IPCC Guidelines"
                  ].map((standard, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-teal-500/10">
                      <Award className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Service 3: ICM & CCTS */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('icm')}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">ICM & CCTS</h3>
                    <p className="text-cyan-400">India's Compliance Carbon Market & Decarbonization Framework</p>
                  </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-cyan-400 transition-transform ${activeSection === 'icm' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {activeSection === 'icm' && (
              <div className="p-8 space-y-8 border-t border-cyan-500/20">
                <p className="text-gray-300 text-lg leading-relaxed">
                  India's Carbon Credit Trading Scheme represents a landmark shift in the country's approach to climate mitigation.
                  We provide end-to-end advisory, technical readiness, and operational support for entities participating in ICM and CCTS.
                </p>

                {/* Market Overview */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Compliance Mechanism", desc: "Mandatory reporting and offsetting for designated sectors" },
                    { title: "Credit Generation", desc: "Compliance-grade credits through approved methodologies" },
                    { title: "Trading Platform", desc: "Regulated marketplace for efficient transactions" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 border border-cyan-500/20">
                      <h5 className="text-white font-bold mb-3">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Strategic Advisory */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Users className="w-7 h-7 text-cyan-400" />
                    ICM & CCTS Strategic Advisory
                  </h4>
                  {[
                    "ICM applicability assessment for sectors and facilities",
                    "CCTS compliance roadmap development",
                    "Sector-wise decarbonization opportunity assessment",
                    "Advisory on VCM and ICM interaction",
                    "Risk assessment for double counting & claim integrity"
                  ].map((advisory, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{advisory}</span>
                    </div>
                  ))}
                </div>

                {/* Credit Generation */}
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Zap className="w-7 h-7 text-blue-400" />
                    Carbon Credit Generation under ICM
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Identification of eligible mitigation activities under ICM",
                      "Project conceptualization aligned with Indian methodologies",
                      "Baseline scenario development (India-specific)",
                      "Additionality & regulatory surplus analysis",
                      "Monitoring & MRV framework design for compliance credits",
                      "Documentation support for credit registration & issuance"
                    ].map((credit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        <span>{credit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stakeholders */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { type: "Obligated Entities", desc: "Industrial facilities with mandatory compliance requirements" },
                    { type: "Voluntary Participants", desc: "Organizations seeking early-mover advantages" },
                    { type: "Project Developers", desc: "Credit generation and monetization opportunities" },
                    { type: "Policy Stakeholders", desc: "Framework design and implementation support" }
                  ].map((stakeholder, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <h5 className="text-white font-bold mb-2">{stakeholder.type}</h5>
                      <p className="text-gray-400 text-sm">{stakeholder.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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


    </div>
  );
}
