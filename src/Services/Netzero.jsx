import React from 'react';
import { TrendingDown, Target, Zap, BarChart3, Shield, CheckCircle, Globe, Leaf, Factory, Wind } from 'lucide-react';

export default function NetZeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&h=600&fit=crop"
            alt="Net Zero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Net Zero</h1>
            <p className="text-xl max-w-3xl mx-auto text-slate-200">
              Science-aligned, long-term transformation strategy for deep decarbonization
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* What Is Net Zero */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <TrendingDown className="w-10 h-10 text-slate-700 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">What Is Net Zero?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Net zero refers to the state where an organization reduces greenhouse gas emissions to the lowest feasible level across its value chain and neutralizes only residual emissions using verified carbon removals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike carbon neutrality, net zero requires a science-aligned, long-term transformation strategy covering Scope 1, Scope 2, and Scope 3 emissions, and prioritizes deep decarbonization over offsetting.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop"
                alt="Net zero transformation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Core Components of a Net Zero Strategy</h2>
          <div className="h-1 w-24 bg-slate-700 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-slate-700">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-slate-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GHG Inventory & Baseline</h3>
              <p className="text-gray-700">
                Comprehensive measurement of emissions across operations, assets, suppliers, and downstream activities.
              </p>
            </div>

            {/* Component 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-slate-700">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-slate-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Science-Based Targets</h3>
              <p className="text-gray-700">
                Emission reduction targets aligned with climate science and sector-specific decarbonization pathways.
              </p>
            </div>

            {/* Component 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-slate-700">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Zap className="w-8 h-8 text-slate-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decarbonization Roadmap</h3>
              <p className="text-gray-700">
                A prioritized action plan covering energy efficiency, process optimization, renewable energy adoption, low-carbon materials, and logistics transformation.
              </p>
            </div>

            {/* Component 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-slate-700">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Leaf className="w-8 h-8 text-slate-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residual Emissions Management</h3>
              <p className="text-gray-700">
                Use of high-quality carbon removals and limited offsets for emissions that are technically or economically infeasible to eliminate in the near term.
              </p>
            </div>

            {/* Component 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-slate-700 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-slate-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring, Reporting & Assurance</h3>
              <p className="text-gray-700">
                Ongoing tracking, disclosure, and third-party assurance to maintain credibility, regulatory readiness, and stakeholder confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Separator */}
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=500&fit=crop"
            alt="Renewable energy infrastructure"
            className="w-full h-64 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Importance of Net Zero */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-2xl p-12 text-white">
            <div className="flex items-center mb-8">
              <Globe className="w-12 h-12 mr-4" />
              <h2 className="text-4xl font-bold">Importance of Net Zero</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg">Demonstrates long-term and science-based climate leadership</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg">Aligns businesses with global climate goals and evolving ESG expectations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg">Enhances investor confidence and access to sustainable finance</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg">Strengthens organizational resilience against climate, regulatory, and transition risks</p>
              </div>
            </div>
          </div>
        </section>

        {/* India's Net Zero Pathway */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl shadow-xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">India's Net Zero Pathway</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                India has committed to achieving net zero emissions by 2070, with intermediate milestones focusing on:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Wind className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Renewable Energy Expansion</h3>
                    <p className="text-gray-700">Rapid expansion of renewable energy capacity</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficiency</h3>
                    <p className="text-gray-700">Energy efficiency improvements across industry and buildings</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Factory className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Transport Electrification</h3>
                    <p className="text-gray-700">Electrification of transport and adoption of alternative fuels</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Low-Carbon Technologies</h3>
                    <p className="text-gray-700">Promotion of low-carbon technologies and domestic carbon markets</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop"
                  alt="India renewable energy"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  For Indian organizations, net zero strategies must balance growth, development priorities, and climate responsibility, making phased decarbonization pathways especially critical.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Net Zero Journey?</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Transform your organization with a science-aligned decarbonization strategy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-slate-300">Science-Based</p>
                <p className="text-2xl font-bold">Targets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-slate-300">Long-Term</p>
                <p className="text-2xl font-bold">Strategy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-slate-300">Deep</p>
                <p className="text-2xl font-bold">Decarbonization</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}


    </div>
  );
}