import React, { useState } from 'react';
import { ChevronDown, Leaf, Target, TrendingUp, Award, Globe, Shield, CheckCircle, ArrowRight, Sparkles, Layers, BarChart3, Users, Factory, Wind, TreePine, Recycle, FileText, Map, Compass, Network, AlertCircle, Zap } from 'lucide-react';
import pn1 from '../../assets/images/sus1.jpg';  // Go up 2 levels
import pn2 from '../../assets/images/sus2.webp';
import pn3 from '../../assets/images/sus3.jpeg';
import pn4 from '../../assets/images/sus4.webp';
export default function SustainabilityServicesPage() {
  const [activePillar, setActivePillar] = useState(null);

  const togglePillar = (pillar) => {
    setActivePillar(activePillar === pillar ? null : pillar);
  };

  const pillars = [
    {
      id: 'strategy',
      icon: Compass,
      title: 'Strategy & Transition',
      color: 'from-emerald-500 to-green-500',
      borderColor: 'emerald',
      services: [
        'Corporate sustainability strategy development',
        'Net-zero transition roadmap',
        'Climate transition planning',
        'Sectoral decarbonization pathways',
        'ESG advisory and framework alignment'
      ],
      src: {pn1}
    },
    {
      id: 'measurement',
      icon: BarChart3,
      title: 'Measurement & MRV',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'blue',
      services: [
        'GHG Accounting (ISO 14064-1, 14064-2)',
        'Carbon footprinting across Scope 1, 2, 3',
        'MRV system design and implementation',
        'Performance tracking and reporting',
        'Baseline and target setting'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
    },
    {
      id: 'markets',
      icon: TrendingUp,
      title: 'Markets & Instruments',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'purple',
      services: [
        'REC and I-REC advisory',
        'Carbon credit market strategy',
        'Green tariff and PPA structuring',
        'Renewable energy certificate procurement',
        'Market intelligence and price discovery'
      ],
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80'
    },
    {
      id: 'supply',
      icon: Network,
      title: 'Supply Chain & Operations',
      color: 'from-orange-500 to-amber-500',
      borderColor: 'orange',
      services: [
        'Supply chain emissions mapping',
        'Operational efficiency and resource optimization',
        'Supplier engagement programs',
        'Scope 3 value chain interventions',
        'Circular procurement strategies'
      ],
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80'
    },
    {
      id: 'nature',
      icon: TreePine,
      title: 'Nature & Circularity',
      color: 'from-green-500 to-teal-500',
      borderColor: 'green',
      services: [
        'Nature-based solutions advisory',
        'Circular economy transition roadmaps',
        'GRS & RCS certification support',
        'Biodiversity impact assessment',
        'Regenerative business model design'
      ],
      image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=1200&q=80'
    },
    {
      id: 'assurance',
      icon: Shield,
      title: 'Assurance & Integrity',
      color: 'from-slate-500 to-gray-500',
      borderColor: 'slate',
      services: [
        'Third-party verification support',
        'Climate risk and scenario analysis',
        'Claims verification and validation',
        'Sustainability reporting assurance',
        'Greenwashing risk mitigation'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
            alt="Sustainable landscape"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold">Strategy, Compliance & Transition Enablement</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
              Sustainability<br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-transparent bg-clip-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Supporting organizations in integrating climate action, resource efficiency, and responsible growth into
              core business strategy through data-driven analysis, regulatory alignment, and implementation-focused advisory.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Award, value: "End-to-End", label: "Strategy to Execution" },
              { icon: Globe, value: "India + Global", label: "Market Coverage" },
              { icon: BarChart3, value: "Data-Driven", label: "Analytics & MRV" },
              { icon: Shield, value: "Credible", label: "Verified Outcomes" }
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

      {/* Mission Statement with Image Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-emerald-500/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-6">Enabling Credible Sustainability Outcomes</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  We combine data-driven analysis, regulatory alignment, and implementation-focused advisory to enable
                  credible sustainability outcomes across India and global markets.
                </p>
                <p className="text-lg">
                  Our approach integrates climate action, resource efficiency, and responsible growth into core business
                  strategy—transforming sustainability from a compliance exercise into a competitive advantage.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={pn1.src}
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={pn2.src}
                  alt="Solar panels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={pn3.src}
                  alt="Recycling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={pn4.src}
                  alt="Wind energy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* Core Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Core Services</h2>
          <p className="text-xl text-gray-400">Comprehensive sustainability solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Sustainability Consulting",
              desc: "Strategic advisory for sustainability integration",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
            },
            {
              icon: BarChart3,
              title: "ESG Advisory",
              desc: "Framework alignment and ESG performance",
              image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80"
            },
            {
              icon: FileText,
              title: "GHG Accounting",
              desc: "ISO 14064-1, 14064-2 based inventories",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
            },
            {
              icon: Compass,
              title: "Climate Transition Planning",
              desc: "Roadmaps to low-carbon operations",
              image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80"
            },
            {
              icon: AlertCircle,
              title: "Climate Risk & Scenario Analysis",
              desc: "TCFD-aligned risk assessment",
              image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80"
            },
            {
              icon: Zap,
              title: "REC & I-REC Advisory",
              desc: "Renewable energy certificate strategy",
              image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
            },
            {
              icon: Factory,
              title: "Sectoral Decarbonization",
              desc: "Industry-specific pathways",
              image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80"
            },
            {
              icon: TreePine,
              title: "Nature-Based Solutions",
              desc: "Ecosystem-based climate action",
              image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80"
            },
            {
              icon: Award,
              title: "GRS & RCS Certification",
              desc: "Global Recycled Standard support",
              image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80"
            },
            {
              icon: Target,
              title: "Corporate Sustainability Strategy",
              desc: "Integrated sustainability frameworks",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            },
            {
              icon: TrendingUp,
              title: "Net-Zero Transition Roadmap",
              desc: "Science-based pathway to net-zero",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
            },
            {
              icon: Shield,
              title: "Sustainability Assurance",
              desc: "Third-party verification support",
              image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
            }
          ].map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              </div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <service.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Six Pillars Section */}
      <section id="pillars" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Six Pillars of Excellence</h2>
          <p className="text-xl text-gray-400">Comprehensive sustainability expertise across every dimension</p>
        </div>

        <div className="space-y-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="group">
              <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-${pillar.borderColor}-500/20 hover:border-${pillar.borderColor}-500/40 transition-all`}>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-10`}></div>
                  <div className="relative p-8 flex items-center justify-between cursor-pointer" onClick={() => togglePillar(pillar.id)}>
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <pillar.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{pillar.title}</h3>
                        <p className={`text-${pillar.borderColor}-400 text-sm`}>
                          {pillar.services.length} specialized services
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`w-8 h-8 text-${pillar.borderColor}-400 transition-transform ${activePillar === pillar.id ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {activePillar === pillar.id && (
                  <div className={`p-8 space-y-8 border-t border-${pillar.borderColor}-500/20`}>
                    {/* Hero Image */}
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-6">
                        <p className="text-white text-lg font-semibold">{pillar.title}</p>
                      </div>
                    </div>

                    {/* Services List */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {pillar.services.map((service, idx) => (
                        <div key={idx} className={`flex items-start gap-3 p-5 bg-slate-800/50 rounded-xl border border-${pillar.borderColor}-500/10 hover:border-${pillar.borderColor}-500/30 transition-all`}>
                          <CheckCircle className={`w-5 h-5 text-${pillar.borderColor}-400 mt-1 flex-shrink-0`} />
                          <span className="text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

   
      {/* Our Approach */}
      <section id="approach" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-xl text-gray-400">Implementation-focused, data-driven, integrity-led</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Assess & Baseline",
              desc: "Comprehensive measurement of current state, risks, and opportunities",
              points: ["Data collection", "Baseline establishment", "Gap analysis", "Risk mapping"]
            },
            {
              step: "02",
              title: "Strategy & Roadmap",
              desc: "Development of actionable, science-aligned transition pathways",
              points: ["Target setting", "Scenario analysis", "Initiative prioritization", "Resource planning"]
            },
            {
              step: "03",
              title: "Implement & Assure",
              desc: "Execution support with continuous tracking and third-party validation",
              points: ["Project execution", "MRV systems", "Reporting", "Verification"]
            }
          ].map((phase, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all h-full">
                <div className="text-6xl font-black text-emerald-500/20 mb-4">{phase.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-400 mb-6">{phase.desc}</p>
                <ul className="space-y-2">
                  {phase.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-3xl p-12 border border-emerald-500/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Sustainability Services?</h2>
            <p className="text-xl text-gray-300">Expertise that delivers measurable impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: "Data-Driven", desc: "Evidence-based strategies" },
              { icon: Award, title: "Framework Aligned", desc: "ISO, GHG Protocol, SBTi" },
              { icon: Globe, title: "Market Intelligence", desc: "India + global expertise" },
              { icon: Target, title: "Results-Oriented", desc: "Implementation focus" },
              { icon: Shield, title: "Integrity-Led", desc: "Credible, verifiable outcomes" },
              { icon: Users, title: "Collaborative", desc: "Cross-functional engagement" },
              { icon: Layers, title: "Holistic View", desc: "End-to-end solutions" },
              { icon: TrendingUp, title: "Future-Ready", desc: "Regulatory foresight" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                <item.icon className="w-10 h-10 text-emerald-400 mb-3" />
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80"
              alt="Sustainability"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Sustainability Journey?</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              From strategy to execution, from measurement to assurance—we provide the expertise and support
              you need to achieve credible sustainability outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

            </div>
          </div>
        </div>
      </section>


    </div>
  );
}