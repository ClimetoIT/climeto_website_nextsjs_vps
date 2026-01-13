import React from 'react';
import newp1 from '../assets/images/newp1.webp';
import newp4 from '../assets/images/newp4.png';
import newp2 from '../assets/images/newp2.webp';
import newp3 from '../assets/images/newp3.png';
import newp5 from '../assets/images/newp5.webp';
export default function PlasticStewardshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">

        <img
          src={newp1.src}
          alt="Ocean conservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/60 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
            Plastic Stewardship Program
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A Plastic Stewardship Program is a structured framework that enables organizations to take accountable
            responsibility for plastic across its lifecycle from material use and packaging design to leakage risk, recovery, and
            disclosure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The program integrates plastic accounting, reduction planning, neutrality pathways, and responsible plastic credit
            mechanisms, supporting organizations in meeting ESG expectations, voluntary plastic responsibility commitments,
            and emerging plastic governance requirements across India and global markets.
          </p>
        </div>

        {/* What Is Plastic Stewardship Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <img
                src={newp4.src}
                alt="Sustainable materials"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-teal-800 mb-6">What Is Plastic Stewardship?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plastic stewardship refers to a systematic, data-driven approach to understanding and managing plastic impacts
                across operations, products, and value chains.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Unlike traditional waste management, plastic stewardship focuses on:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Upstream material decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Lifecycle plastic risk and leakage assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Reduction-first strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Credible neutrality and responsibility claims</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                It enables organizations to move from ad-hoc initiatives to measurable, auditable plastic responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Core Elements */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-8 text-center">Core Elements of a Plastic Stewardship Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">An effective Plastic Stewardship Program typically includes:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Plastic footprint measurement and accounting across organizational and value-chain boundaries</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Packaging-level assessment, including primary and secondary plastics</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Supplier and value-chain plastic risk analysis, particularly leakage hotspots</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Reduction and circularity planning aligned with the 5R hierarchy</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Plastic neutrality strategies, where applicable, supported by high-integrity plastic credits</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Transparent reporting and audit-ready documentation for ESG and sustainability disclosures</span>
              </div>
            </div>
          </div>
        </div>

        {/* Program Architecture */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-8 text-center">Program Architecture</h2>
          <img
            src={newp2.src}
            alt="Circular economy concept"
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
          />
          <p className="text-gray-700 leading-relaxed mb-8 text-center text-lg">
            Plastic stewardship is implemented through interconnected solution layers:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Plastic Accounting & Footprinting</h3>
              <p className="text-gray-700 leading-relaxed">
                Establishing defensible plastic baselines, polymer-wise inventories, and multi-year tracking systems aligned with
                global plastic accounting frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Reduction & Circularity Strategies</h3>
              <p className="text-gray-700 leading-relaxed">
                Identifying priority reduction opportunities through packaging redesign, material optimisation, and circular
                economy interventions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Plastic Neutrality Pathways</h3>
              <p className="text-gray-700 leading-relaxed">
                Designing reduction-first neutrality approaches and determining the responsible role of plastic credits in
                addressing residual plastic footprints.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Claims Integrity & Disclosure</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring traceability, avoiding double counting, and supporting credible, verifiable plastic responsibility claims.
              </p>
            </div>
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">Frameworks, Standards & Methodological Alignment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A robust Plastic Stewardship Program aligns with globally recognised voluntary frameworks and methodologies,
            including:
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-semibold">Plastic Footprint Network (PFN)</span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">Verra plastic credit methodologies</span>
            <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">PCX guidance and accounting principles</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Such alignment strengthens credibility, comparability, and stakeholder trust.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={newp1.src}
                alt="Environmental responsibility"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-teal-800 mb-6">Why Plastic Stewardship Matters</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Increasing scrutiny on plastic claims and greenwashing risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Rising expectations from investors, regulators, and consumers on plastic responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Growing need for data-backed, transparent disclosures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span>Complex global value chains requiring consistent plastic governance</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                A structured Plastic Stewardship Program enables organizations to respond with clarity, credibility, and long-
                term impact.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-6 text-center">Who Plastic Stewardship Is For</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">Plastic Stewardship Programs are relevant for:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🏭</div>
              <p className="text-gray-700 font-semibold">FMCG and consumer goods companies</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-gray-700 font-semibold">Retail, e-commerce, and packaging-intensive businesses</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🔧</div>
              <p className="text-gray-700 font-semibold">Manufacturers with multi-tier supplier networks</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-gray-700 font-semibold">Organizations pursuing plastic neutrality, ESG leadership, or voluntary responsibility commitments</p>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">Moving from intent to implementation</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Organizations adopting a Plastic Stewardship Program benefit from clear measurement, prioritized reduction,
            and credible accountability mechanisms creating long-term environmental and business value.
          </p>
        </div>

        {/* Plastic Credits Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white mb-8">
            <h2 className="text-5xl font-bold mb-4 text-center">Plastic Credits</h2>
            <p className="text-2xl text-center opacity-90">Understanding, Mechanisms & Benefits</p>
          </div>

          <img
            src={newp5.src}
            alt="Recycling innovation"
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-12"
          />

          {/* What Are Plastic Credits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-bold text-teal-800 mb-4">What Are Plastic Credits?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plastic credits are a market-based mechanism enabling organizations to take responsibility for residual plastic
              waste after prioritizing reduction and circularity measures. One plastic credit typically represents a verified unit of
              plastic waste collected, recycled, or properly managed, beyond business-as-usual scenarios.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Plastic credits are increasingly used by corporates, FMCG brands, and manufacturers to support plastic neutrality
              goals while maintaining traceability, credibility, and audit-ready documentation.
            </p>
          </div>

          {/* How Plastic Credits Work */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-teal-800 mb-6">How Plastic Credits Work</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Project Implementation:</h4>
                  <p className="text-gray-700">Plastic recovery or recycling initiatives are deployed in areas with high leakage risk.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Measurement & Verification:</h4>
                  <p className="text-gray-700">Outcomes (e.g., tonnes of recovered plastic) are tracked and independently verified.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Credit Issuance:</h4>
                  <p className="text-gray-700">Verified credits are registered through recognized frameworks (e.g., Verra, PCX).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Corporate Utilization:</h4>
                  <p className="text-gray-700">Organizations purchase credits to offset residual plastic footprint and make credible responsibility claims.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-bold text-teal-800 mb-6">Principles of High-Integrity Plastic Credits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-2">Additionality:</h4>
                <p className="text-gray-700">Credits must represent plastic recovery beyond business-as-usual.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-2">Traceability:</h4>
                <p className="text-gray-700">Clear tracking from collection to recycling or disposal.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-2">Avoid Double Counting:</h4>
                <p className="text-gray-700">Each credit is unique and claimable once.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-2">Transparency & Reporting:</h4>
                <p className="text-gray-700">Clearly defined boundaries, project documentation, and claim verification.</p>
              </div>
            </div>
          </div>

          {/* Credits vs Reduction */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">Plastic Credits vs Plastic Reduction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plastic credits complement, not replace, reduction efforts:
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 text-xl">•</span>
                <span>Packaging redesign and lightweighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 text-xl">•</span>
                <span>Material substitution</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 text-xl">•</span>
                <span>Reuse, refill, and circular economy solutions</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Organizations are encouraged to prioritize reduction, using credits only for residual plastic footprints
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-teal-800 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg opacity-90">
            Building a sustainable future through responsible plastic stewardship
          </p>
        </div>
      </div>
    </div>
  );
}
