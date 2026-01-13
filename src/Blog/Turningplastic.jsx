import React from 'react';
import { TrendingUp, Shield, BarChart3, Users, CheckCircle, Target, Globe, Award, ArrowRight, Briefcase, LineChart } from 'lucide-react';

export default function Turningplastic() {
  const strategicEdges = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Simplified Yet Scalable Compliance",
      description: "Plastic credits allow brands to meet their recovery obligations without building separate infrastructure in every region. This is particularly valuable for businesses with diverse footprints across urban and semi-urban India.",
      color: "blue"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Quantified ESG Integration",
      description: "Each credit represents 1 tonne of plastic recovered, recycled, or safely disposed. These verified outcomes contribute to ESG dashboards, BRSR filings, and investor-grade reporting—backed by audit trails, traceability, and certification.",
      color: "purple"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Brand Purpose and Consumer Trust",
      description: "With consumers demanding accountability, credits allow brands to tell authentic stories: \"We recovered 5,000 tonnes of plastic and supported 1,000 waste workers across 7 states.\" These narratives humanize sustainability, turning compliance into emotional engagement.",
      color: "green"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Inclusion and Local Impact",
      description: "Many credit-backed projects integrate India's informal waste sector, offering fair wages, safer conditions, and gender-equitable employment. This creates inclusive circularity, where environmental recovery also uplifts livelihoods.",
      color: "orange"
    }
  ];

  const bestPractices = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Prioritize CPCB-registered partners",
      description: "Ensure legal alignment and platform-based credit transfers"
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Demand full traceability",
      description: "From waste sourcing to processing to final reporting. Blockchain-backed platforms and GPS-tagged recoveries are emerging norms"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Balance reduction and offsetting",
      description: "Focus on packaging redesign, recycled content, and waste minimization first. Credits should address the residual footprint"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Communicate impact clearly",
      description: "Quantify your results and communicate them internally and externally. Avoid vague \"green\" claims"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaborate across departments",
      description: "Ensure alignment between sustainability, compliance, procurement, and marketing teams"
    }
  ];

  const eprComponents = [
    "Mandatory registration of PIBOs and processors on the CPCB EPR portal",
    "Use of Plastic Waste Processing Certificates (PWPCs) issued by CPCB-approved processors",
    "Defined collection, recycling, reuse, and end-of-life disposal targets—tiered by material category and plastic type",
    "Increased scrutiny of data reporting, including GST reconciliation and third-party verification"
  ];

  const marketTrends = [
    "FMCG giants are integrating credit-backed recovery with packaging circularity",
    "Homegrown startups are scaling localized collection and blockchain-based credit platforms",
    "Global brands are customizing their international sustainability playbooks for India's compliance-led ecosystem"
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Business Sustainability Insights</h1>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-300">
              <TrendingUp className="w-4 h-4" />
              <span>Strategic ESG & Compliance</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>Strategic Business Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Turning Plastic Waste into Value: How Indian Brands Can Leverage Plastic Credits for Scalable Impact
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-3xl">
              Transform compliance into competitive advantage with plastic credits—the strategic tool for ESG leadership and stakeholder trust
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
       
        {/* Introduction */}
        <article className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              India's plastic waste challenge is no longer just an environmental concern—<strong>it's a business imperative.</strong> With over 3.4 million tonnes of plastic waste generated annually and consumption rising rapidly through e-commerce, FMCG, and urban growth, the pressure on brands to act has intensified.
            </p>
           
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-8 rounded-lg my-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                But amidst these challenges lies a powerful, underutilized opportunity: <strong className="text-indigo-700">plastic credits.</strong>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Plastic credits are transforming from a regulatory checkbox into a strategic enabler. For Indian companies navigating the evolving landscape of sustainability, ESG, and compliance, credits offer a way to align operational responsibility with environmental impact—and most importantly, with stakeholder trust.
            </p>
          </div>
        </article>

        {/* EPR Landscape */}
        <article className="mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">India's EPR Landscape</h2>
                <p className="text-slate-300 mt-1">A World-Leading Compliance Architecture</p>
              </div>
            </div>
           
            <p className="text-lg text-slate-200 leading-relaxed mb-8">
              India's Plastic Waste Management Rules (2016, amended in 2022) provide one of the most structured and enforceable Extended Producer Responsibility (EPR) frameworks globally. Under these rules, Producers, Importers, and Brand Owners (PIBOs) must account for every gram of plastic they introduce into the market.
            </p>

            <h3 className="text-xl font-bold mb-6 text-blue-300">Noteworthy Components:</h3>
            <div className="space-y-4">
              {eprComponents.map((component, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-100 leading-relaxed">{component}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-500/20 border border-blue-400/30 rounded-lg p-6">
              <p className="text-slate-100 leading-relaxed text-lg">
                This legal architecture has positioned plastic credits as a formal compliance mechanism, giving brands a credible path to meet obligations across fragmented supply chains and geographies.
              </p>
            </div>
          </div>
        </article>

        {/* Strategic Edge */}
        <article className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Plastic Credits: The Strategic Edge for Indian Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a compliance tool—a powerful engine for business resilience, transparency, and stakeholder engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategicEdges.map((edge, idx) => {
              const colorParts = getColorClasses(edge.color).split(' ');
              const gradientClass = colorParts[0] + ' ' + colorParts[1];
              const bgClass = colorParts[2];
              const textClass = colorParts[3];
              const borderClass = colorParts[4];
             
              return (
                <div key={idx} className={`bg-white rounded-xl shadow-lg border-2 ${borderClass} overflow-hidden hover:shadow-xl transition-all duration-300`}>
                  <div className={`bg-gradient-to-r ${gradientClass} p-6`}>
                    <div className="flex items-center gap-3 text-white">
                      <div className="bg-white/20 backdrop-blur p-3 rounded-lg">
                        {edge.icon}
                      </div>
                      <h3 className="text-xl font-bold">{edge.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">{edge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* Best Practices */}
        <article className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Best Practices for India-Focused Plastic Credit Strategy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Go beyond transactional offsets and adopt an integrated sustainability approach
              </p>
            </div>

            <div className="space-y-5">
              {bestPractices.map((practice, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    {practice.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{practice.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Market Momentum */}
        <article className="mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-10 h-10" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Momentum Is Building</h2>
                <p className="text-emerald-100 mt-1">Market Leaders Are Moving</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {marketTrends.map((trend, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-lg p-5">
                  <div className="bg-emerald-400 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-emerald-50 leading-relaxed text-lg">{trend}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/20 backdrop-blur border-2 border-white/30 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-white">
                India is no longer in pilot mode—it's at the forefront of plastic credit policy, infrastructure, and innovation.
              </p>
            </div>
          </div>
        </article>

        {/* Conclusion */}
        <article className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Compliance into Competitive Advantage
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                For Indian brands, plastic waste doesn't have to be a liability. When viewed strategically, it becomes an opportunity to demonstrate leadership, innovation, and accountability.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-xl p-8 mb-6">
                <p className="text-lg leading-relaxed text-white">
                  Plastic credits offer a bridge between regulatory duty and positive brand action—helping companies align compliance with conscience, and impact with innovation.
                </p>
              </div>
              <p className="text-2xl font-bold text-white">
                As India accelerates toward a circular economy, now is the moment to move from reactive reporting to proactive responsibility.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
     

      </main>

      {/* Footer */}
     
    </div>
  );
}