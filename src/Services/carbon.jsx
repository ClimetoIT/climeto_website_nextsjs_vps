import React from 'react';
import { Recycle, Target, LineChart, Shield, CheckCircle, Leaf, Globe, TrendingDown } from 'lucide-react';

export default function PlasticStewardshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Introduction */}


        {/* What Is Plastic Stewardship */}



        {/* Core Elements */}



        {/* Program Architecture */}



        {/* Frameworks & Standards */}

        {/* Why It Matters */}


        {/* Who It's For */}

        {/* Implementation */}


        {/* Plastic Credits Section */}



        {/* Carbon Neutrality Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-lg p-12 mb-12">
            <h2 className="text-4xl font-bold mb-4 text-center">Carbon Neutrality Pathway</h2>
            <p className="text-xl text-center text-green-100">Measurement, Offsets & Verification</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is Carbon Neutrality?</h3>
              <p className="text-gray-700 mb-4">
                Carbon neutrality is achieved when an organization quantifies its greenhouse gas (GHG) emissions, implements feasible reduction measures, and compensates residual emissions through the retirement of verified carbon credits, resulting in net-zero emissions for a defined boundary and reporting period.
              </p>
              <p className="text-gray-700">
                Carbon neutrality is commonly applied to organizations, products, services, events, or facilities seeking credible, short- to medium-term climate action while progressing toward long-term decarbonization goals.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"

                alt="Carbon neutrality concept"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* How Carbon Neutrality Works */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Carbon Neutrality Works</h3>
            <p className="text-gray-700 mb-6">A credible carbon neutrality approach follows a structured and auditable pathway:</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Carbon Footprint Assessment</h4>
                  <p className="text-gray-700">Measurement of GHG emissions across defined organizational, operational, or product boundaries and a specified time period, in line with globally accepted accounting frameworks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Emission Reduction Measures</h4>
                  <p className="text-gray-700">Identification and implementation of feasible emission reduction actions across operations, energy consumption, logistics, procurement, and supply chains.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Offsetting Residual Emissions</h4>
                  <p className="text-gray-700">Neutralization of unavoidable emissions through the purchase and retirement of high-integrity, independently verified carbon credits sourced from recognized registries.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Claims, Disclosure & Reporting</h4>
                  <p className="text-gray-700">Transparent documentation and communication of the neutrality claim, ensuring traceability, auditability, and alignment with international reporting standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Principles of Carbon Neutrality</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High-Integrity Credits</h4>
                    <p className="text-gray-700">Use carbon credits that are additional, permanent, conservative, and independently verified</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Traceability</h4>
                    <p className="text-gray-700">Ensure full traceability of credits from issuance to final retirement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Double Counting</h4>
                    <p className="text-gray-700">Each carbon credit is retired once and claimed by a single entity only</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Disclosure</h4>
                    <p className="text-gray-700">Clearly define scope, boundary, timeframe, and offset volumes in line with GHG Protocol, ISO standards, and other global best practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Carbon Neutrality</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Enables credible and immediate climate action</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Strengthens sustainability, ESG, and climate disclosures</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Builds stakeholder trust through auditable and verifiable claims</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Provides a structured framework for managing short-term emissions while transitioning toward net zero</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


    </div>
  );
}


