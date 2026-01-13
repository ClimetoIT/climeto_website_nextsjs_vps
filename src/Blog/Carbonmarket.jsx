import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Target, Award, Globe, Lightbulb, ChevronRight, BarChart3, Recycle, Factory, Sprout, CheckCircle2 } from 'lucide-react';

export default function CarbonMarketLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectors = [
    { name: 'Cement', icon: Factory },
    { name: 'Aluminium', icon: Factory },
    { name: 'Iron & Steel', icon: Factory },
    { name: 'Fertiliser', icon: Sprout },
    { name: 'Textile', icon: Recycle },
    { name: 'Petroleum', icon: Factory },
    { name: 'Pulp & Paper', icon: Recycle },
    { name: 'Chlor Alkali', icon: Factory },
  ];

  const opportunities = [
    { title: 'New Revenue Streams', desc: 'Earn tradable carbon credits', icon: TrendingUp },
    { title: 'Green Investments', desc: 'Attract sustainable project funding', icon: Sprout },
    { title: 'Tech Innovation', desc: 'Drive cleaner technologies', icon: Lightbulb },
    { title: 'Global Access', desc: 'Connect to international markets', icon: Globe },
  ];

  const stats = [
    { value: '2070', label: 'Net Zero Target', icon: Target },
    { value: '9+', label: 'Initial Sectors', icon: Factory },
    { value: '1 tCO₂e', label: 'Per Credit', icon: Leaf },
    { value: '2023-24', label: 'Baseline Year', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.15}px)`, animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
            <span className="text-emerald-300 text-sm font-semibold">🇮🇳 India's Climate Action Initiative</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Decoding India's<br />Carbon Market
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A bold step towards a greener future through the Carbon Credit Trading Scheme
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Explore CCTS
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button> */}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-emerald-300 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Two Pillars Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Two Pillars of Action
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A dual mechanism approach to drive comprehensive emission reductions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Compliance Mechanism */}
            <div className="group relative p-10 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-orange-300">Compliance Mechanism</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mandatory program for energy-intensive industries with government-set GHG emission intensity targets. Companies meeting targets earn Carbon Credit Certificates.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Transition from PAT Scheme for 9 initial sectors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Establishes national Emission Trading System</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Baseline year: 2023-24 for uniformity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offset Mechanism */}
            <div className="group relative p-10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-emerald-300">Offset Mechanism</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Voluntary project-based mechanism for non-obligated entities. Register emission reduction projects to earn Carbon Credit Certificates.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Phase 1: Energy, Industries, Waste, Agriculture, Forestry, Transport</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Fosters growth of Voluntary Carbon Market</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Open to SMEs and individual participants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sectors Section */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Initial Target Sectors</h2>
            <p className="text-xl text-gray-400">Energy-intensive industries leading the transition</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-500/30 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <sector.icon className="w-10 h-10 text-gray-400 group-hover:text-emerald-400 mb-4 mx-auto transition-colors" />
                <p className="text-center font-semibold text-gray-300 group-hover:text-white transition-colors">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Opportunities on the Horizon
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unlocking potential for sustainable growth and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opp, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:translateY-[-8px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <opp.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-teal-300">{opp.title}</h3>
                  <p className="text-gray-400 text-sm">{opp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Update Section */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl border border-purple-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
            
            <div className="relative z-10">
              <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                <span className="text-purple-300 text-sm font-semibold">📢 Latest Update - April 2025</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                Emission Targets Announced
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                MoEFCC released draft notification for <span className="text-purple-300 font-semibold">Greenhouse Gas Emission Intensity Target Rules, 2025</span>, marking the official implementation kickoff of CCTS 2023.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Compliance Period
                  </h4>
                  <p className="text-gray-300 text-sm">2025-26 to 2026-27 (First Cycle)</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    <Factory className="w-5 h-5" />
                    Initial Sectors
                  </h4>
                  <p className="text-gray-300 text-sm">Cement, Aluminium, Chlor-Alkali, Pulp & Paper</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <p className="text-gray-200 italic">
                  "Climate action is no longer a side conversation — it's central to how we do business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">The Path Forward</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            India's Carbon Credit Trading Scheme is a bold and necessary step towards achieving climate goals and fostering a sustainable future. Join the journey to realize the vision of a greener, more prosperous India.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button> */}
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Bureau of Energy Efficiency
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 India Carbon Market Initiative | Administered by Bureau of Energy Efficiency</p>
          <p className="mt-2">Net Zero India 2070 • Paris Agreement Aligned • CCTS 2023</p>
        </div>
      </div>
    </div>
  );
}