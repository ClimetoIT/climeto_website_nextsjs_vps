import React from 'react';
import { Leaf, TrendingUp, Shield, Recycle, Building2, Award, CheckCircle, Calendar, BarChart3, Sparkles, ArrowRight, FileText, Target, DollarSign, Lightbulb } from 'lucide-react';

export default function EnvironmentalReformsBlog() {
  const cctsFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Sectoral Coverage",
      description: "The CCTS covers multiple sectors, including cement, steel, aluminum, and power, mandating emission reduction targets. Entities exceeding targets can generate carbon credits; those below targets must purchase credits to comply."
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Voluntary Offset Mechanism",
      description: "Companies can invest in emission reduction projects beyond their direct operations, channeling capital toward high-impact climate mitigation efforts."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Implementation Timeline",
      description: "The first phase begins in FY2026, with baseline emissions from 2023–24 determining reduction targets."
    }
  ];

  const plasticProvisions = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Mandatory Recycled Content",
      description: "Producers, importers, and brand owners must incorporate recycled plastic in packaging, starting at 30% for rigid packaging in 2025–26, increasing progressively.",
      highlight: "30%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Traceability & Compliance",
      description: "Packaging must include QR codes or barcodes to track plastic waste and ensure recycling compliance.",
      highlight: "QR"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Penalties for Non-Compliance",
      description: "Violations attract penalties, strengthening EPR enforcement.",
      highlight: "⚠️"
    }
  ];

  const corporateOpportunities = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Carbon Market Participation",
      description: "Businesses can generate or trade carbon credits, creating financial value while meeting regulatory requirements.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "ESG Enhancement",
      description: "Compliance with EPR rules and adoption of circular economy principles improves brand reputation and attracts sustainability-focused investors.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Operational Efficiency & Innovation",
      description: "Sustainable packaging and low-carbon strategies reduce material costs, optimize resource use, and encourage product innovation.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Preparedness",
      description: "Early alignment with new frameworks helps companies mitigate risks of non-compliance and stay ahead of evolving environmental regulations.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Businesses leading in carbon neutrality and waste management gain differentiation in the market, aligning with consumer and investor expectations.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-6 shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur p-2 rounded-lg">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Policy & Regulatory Insights</h1>
                <p className="text-blue-200 text-sm">India 2025</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">2025 Reforms</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
       
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>New Policy Framework</span>
            </div>
            <div className="bg-blue-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
              2025
            </div>
          </div>
         
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            India's Strategic Environmental Reforms in 2025
          </h1>
          <p className="text-2xl text-blue-100 leading-relaxed max-w-3xl mb-8">
            Advancing Climate Action and Waste Management Through Market-Based Mechanisms and Enhanced Corporate Accountability
          </p>
         
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">CCTS</div>
              <div className="text-blue-200 text-sm">Carbon Trading</div>
            </div>
            <div className="bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">EPR</div>
              <div className="text-blue-200 text-sm">Plastic Rules</div>
            </div>
            <div className="bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">FY2026</div>
              <div className="text-blue-200 text-sm">Implementation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
       
        {/* Introduction */}
        <article className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-100">
            <p className="text-xl text-gray-700 leading-relaxed">
              In 2025, India has accelerated environmental reforms to drive sustainability across industries. Key initiatives include the <strong className="text-blue-700">Carbon Credit Trading Scheme (CCTS)</strong> and amendments to the <strong className="text-purple-700">Plastic Waste Management Rules</strong>, aimed at reducing greenhouse gas emissions, promoting a circular economy, and enhancing corporate accountability.
            </p>
          </div>
        </article>

        {/* CCTS Section */}
        <article className="mb-20">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
           
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur p-4 rounded-xl">
                  <BarChart3 className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">Carbon Credit Trading Scheme (CCTS)</h2>
                  <p className="text-green-100 text-lg">Driving Market-Based Climate Action</p>
                </div>
              </div>

              <p className="text-lg text-green-50 leading-relaxed mb-8">
                India's Carbon Credit Trading Scheme (CCTS), launched in 2025, replaces the Perform, Achieve, and Trade (PAT) scheme. The CCTS is a market-driven framework to reduce greenhouse gas (GHG) emissions across sectors such as energy, industry, agriculture, waste management, forestry, and transport.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-white">Key Features:</h3>
             
              <div className="space-y-5">
                {cctsFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-400 text-green-900 p-3 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                        <p className="text-green-50 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/20 backdrop-blur border-2 border-white/30 rounded-xl p-6">
                <p className="text-lg leading-relaxed text-white font-medium">
                  The CCTS creates a transparent carbon market, incentivizing businesses to adopt low-carbon practices and align with India's climate goals.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-green-100">
                <FileText className="w-5 h-5" />
                <p className="text-sm">
                  <strong>Source:</strong> Press Information Bureau (PIB), Ministry of Power, 2025
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Plastic Waste Management Section */}
        <article className="mb-20">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur p-4 rounded-xl">
                <Recycle className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">Plastic Waste Management (Amendment) Rules, 2025</h2>
                <p className="text-purple-100 text-lg">Strengthening Extended Producer Responsibility</p>
              </div>
            </div>

            <p className="text-lg text-purple-50 leading-relaxed mb-8">
              The Plastic Waste Management (Amendment) Rules, 2025, issued by the Ministry of Environment, Forest and Climate Change (MoEFCC), aim to reduce plastic pollution and enforce Extended Producer Responsibility (EPR).
            </p>

            <h3 className="text-2xl font-bold mb-6 text-white">Key Provisions:</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {plasticProvisions.map((provision, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <div className="bg-pink-400 text-pink-900 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
                    {provision.highlight}
                  </div>
                  <div className="mb-4 text-pink-100">
                    {provision.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white">{provision.title}</h4>
                  <p className="text-purple-50 leading-relaxed text-sm">{provision.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/20 backdrop-blur border-2 border-white/30 rounded-xl p-6">
              <p className="text-lg leading-relaxed text-white font-medium">
                These rules promote a circular economy, reduce environmental impact, and encourage corporate alignment with sustainability goals.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-purple-100">
              <FileText className="w-5 h-5" />
              <p className="text-sm">
                <strong>Source:</strong> Press Information Bureau (PIB), MoEFCC, 2025
              </p>
            </div>
          </div>
        </article>

        {/* Corporate Opportunities */}
        <article className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Corporate Implications and Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's 2025 environmental reforms present significant opportunities for corporates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateOpportunities.map((opportunity, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${opportunity.color} p-6`}>
                  <div className="bg-white/20 backdrop-blur w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl p-8 text-white text-center">
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              By proactively implementing these reforms, companies can transform regulatory obligations into strategic opportunities, driving both environmental and economic benefits.
            </p>
          </div>
        </article>

        {/* Conclusion */}
        <article className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">Key Takeaways</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              India's environmental reforms in 2025 reflect a comprehensive approach to climate action and sustainable waste management. The CCTS incentivizes measurable emissions reduction, while the Plastic Waste Management Rules enforce accountability and circular economy adoption.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
              <p className="text-gray-800 leading-relaxed">
                For corporates, these frameworks offer <strong>regulatory clarity</strong>, <strong>operational opportunities</strong>, and a platform to strengthen <strong>ESG leadership</strong>. Early adaptation and active participation in these initiatives will be critical for long-term sustainability and business resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="font-bold text-gray-800 mb-1">Carbon Trading</div>
                <div className="text-sm text-gray-600">Market-based mechanism</div>
              </div>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5 text-center">
                <Recycle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="font-bold text-gray-800 mb-1">EPR Enhanced</div>
                <div className="text-sm text-gray-600">Circular economy focus</div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-800 mb-1">ESG Leadership</div>
                <div className="text-sm text-gray-600">Competitive advantage</div>
              </div>
            </div>
          </div>
        </article>

        {/* Sources */}
        <article className="mb-16">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-slate-600" />
              <h3 className="text-2xl font-bold text-gray-800">Authoritative Sources</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Press Information Bureau (PIB) – Ministry of Power</p>
                  <p className="text-gray-600 text-sm">CCTS Launch and Implementation Guidelines</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Press Information Bureau (PIB) – MoEFCC</p>
                  <p className="text-gray-600 text-sm">Plastic Waste Management Amendment Rules 2025</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
       

      </main>

      {/* Footer */}
     
    </div>
  );
}



