import React, { useState } from 'react';
import { Wind, Globe, Scale, TrendingUp, FileText, Users, Leaf, ArrowRight, Calendar, User, Mail, ExternalLink } from 'lucide-react';

export default function Article6Blog() {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Comment submitted! (This is a demo - no data is actually saved)');
    setFormData({ comment: '', name: '', email: '', website: '', saveInfo: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-slate-800">Climeto Insights</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Banner */}
          <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 p-12 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSigZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4 text-blue-100">
                <Calendar className="w-5 h-5" />
                <span>September 23, 2025</span>
                <span className="mx-2">•</span>
                <User className="w-5 h-5" />
                <span>By Devesh Malu</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Article 6 of the Paris Agreement & Carbon Markets
              </h1>
              <p className="text-xl text-blue-50">Detailed Guide for 2025</p>
            </div>
            <div className="absolute top-8 right-8 flex gap-4">
              <Wind className="w-12 h-12 opacity-30" />
              <Globe className="w-12 h-12 opacity-30" />
              <Scale className="w-12 h-12 opacity-30" />
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Carbon markets are no longer just a policy discussion — they are becoming the backbone of how countries and businesses plan to reach net zero emissions. The Paris Agreement, signed in 2015, set the stage for global climate cooperation. At its core, Article 6 provides the framework that allows countries to trade carbon credits, cooperate across borders, and even work together without markets to achieve their climate goals.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Understanding Article 6 is critical for policymakers, businesses, and sustainability leaders. It defines how carbon markets will work, how credits will be traded, and what safeguards exist to protect environmental integrity. For countries like India, it also opens major opportunities for climate finance and green investment.
              </p>
            </div>

            {/* What is Article 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                What is Article 6 of the Paris Agreement?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Article 6 enables countries to cooperate voluntarily in implementing their Nationally Determined Contributions (NDCs) — their official climate pledges. Cooperation can take the form of:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Trading emission reductions through markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Launching projects that generate international credits</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Working together without markets, through finance, technology, or capacity-building</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-slate-700 italic">
                  In simple terms, if it's cheaper for Country A to fund emission reductions in Country B, then Article 6 allows that — as long as the reduction is real, transparent, and not counted twice.
                </p>
              </div>
            </section>

            {/* Article 6.2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Article 6.2 – Cooperative Approaches Explained</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Article 6.2 sets the rules for bilateral or multilateral trading of carbon credits. These credits are called Internationally Transferred Mitigation Outcomes (ITMOs).
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Example:
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Japan invests in a solar project in Vietnam. Vietnam reduces emissions beyond its NDC target. Japan can purchase those reductions as ITMOs and use them towards its own NDC.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-amber-900 mb-2">Key Condition:</h3>
                <p className="text-slate-700">
                  Both countries must make a "corresponding adjustment" — meaning Vietnam subtracts the reductions from its own count so that they aren't double counted.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Why it matters:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Flexible and cost-efficient for countries with high abatement costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Encourages cross-border cooperation and technology transfer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Builds trust through transparent accounting.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Article 6.4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Article 6.4 – The UN-Crediting Mechanism</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Article 6.4 establishes a global carbon market mechanism overseen by the UN. It is often compared to the Clean Development Mechanism (CDM) from the Kyoto Protocol but with stronger rules.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-4">How it works:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Projects (renewable energy, reforestation, methane capture, etc.) can apply to be registered.</li>
                    <li>• Verified emission reductions generate Article 6.4 carbon credits.</li>
                    <li>• These credits can be bought by countries, companies, or even used in voluntary markets.</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-4">Safeguards built in:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Stronger MRV (Monitoring, Reporting, Verification) standards.</li>
                    <li>• Protections for communities and ecosystems.</li>
                    <li>• A share of proceeds goes to help vulnerable countries adapt to climate change.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Why it matters:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Provides a transparent, UN-backed supply of credits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Increases private sector confidence in carbon projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Ensures global consistency in crediting rules.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Article 6.8 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Article 6.8 – Non-Market Approaches</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Not everything needs trading. Article 6.8 encourages non-market cooperation such as:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-5 text-center">
                  <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Technology Transfer</p>
                  <p className="text-sm text-slate-600 mt-2">Renewable energy know-how</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5 text-center">
                  <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Climate Finance</p>
                  <p className="text-sm text-slate-600 mt-2">Investment support</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 text-center">
                  <Leaf className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Capacity Building</p>
                  <p className="text-sm text-slate-600 mt-2">Adaptation & resilience</p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                This pathway is especially important for countries that may not yet have the infrastructure for full carbon market participation.
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Features That Make Article 6 Different</h2>
              <div className="space-y-4">
                {[
                  { title: 'Corresponding Adjustments', desc: 'Ensures emission reductions are only counted once.' },
                  { title: 'Transparency Framework', desc: 'Countries must report transfers in detail to the UN.' },
                  { title: 'Global Oversight', desc: 'Especially for Article 6.4 projects.' },
                  { title: 'Adaptation Funding', desc: 'A portion of revenues supports climate adaptation in developing nations.' },
                  { title: 'Sustainable Development Goals (SDGs)', desc: 'Projects must show social and environmental benefits.' }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white border-l-4 border-green-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Opportunities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
                Opportunities: Why Article 6 is a Game-Changer
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Cheaper Emission Reductions</h3>
                    <p className="text-slate-700">Countries can meet their NDCs more cost-effectively by purchasing credits where mitigation is cheaper.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Boost to Green Investments</h3>
                    <p className="text-slate-700">Companies can invest in renewable, forestry, or waste management projects that now generate internationally recognized credits.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Global Integration of Carbon Markets</h3>
                    <p className="text-slate-700">Article 6 helps connect different national and voluntary carbon markets, creating a larger and more liquid system.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Finance for Developing Nations</h3>
                    <p className="text-slate-700">Nations like India, Brazil, or Kenya can attract climate finance by hosting projects.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">Private Sector Confidence</h3>
                    <p className="text-slate-700">Clearer rules reduce the risk of "junk credits," encouraging corporations to use markets to reach net zero.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Latest Updates on Article 6 (COP26–COP28)</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <h3 className="font-bold text-blue-900 mb-2">COP26 (Glasgow, 2021):</h3>
                  <p className="text-slate-700">Finalized the Article 6 Rulebook, ending years of negotiation.</p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
                  <h3 className="font-bold text-teal-900 mb-2">COP27 (Sharm El-Sheikh, 2022):</h3>
                  <p className="text-slate-700">Developed technical standards for authorizations, tracking, and registries.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <h3 className="font-bold text-green-900 mb-2">COP28 (Dubai, 2023):</h3>
                  <p className="text-slate-700">Focused on operationalizing Article 6.4 and enhancing transparency frameworks.</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <h3 className="font-bold text-purple-900 mb-2">Looking Ahead:</h3>
                  <p className="text-slate-700">Future COPs will refine methodologies, approve registries, and expand participation.</p>
                </div>
              </div>
            </section>

            {/* India Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-orange-600" />
                What Article 6 Means for India
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                India stands at a strategic advantage:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 mb-4">Opportunities:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Large potential to generate credits through renewable energy, forestry, waste management, and industrial efficiency projects.</li>
                    <li>• Can attract billions in climate finance and foreign investment.</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-900 mb-4">Challenges:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Needs to strengthen domestic MRV and governance systems.</li>
                    <li>• Must balance between using credits for India's own climate targets vs selling them abroad.</li>
                    <li>• Ensuring community safeguards so that local populations benefit.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4">Policy Steps:</h3>
                <p className="text-slate-700 mb-3">
                  India has introduced the Carbon Credit Trading Scheme (CCTS) to build a national framework aligned with Article 6.
                </p>
                <p className="text-slate-700">
                  More clarity is expected on how voluntary markets and compliance markets will interact.
                </p>
              </div>
            </section>

            {/* Global Outlook */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Global Outlook for Carbon Markets under Article 6</h2>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Rising Demand:</span>
                      <span className="text-slate-700"> As countries and corporations push for net zero, demand for high-quality credits will grow.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Voluntary Markets Integration:</span>
                      <span className="text-slate-700"> Article 6 may merge with voluntary markets, creating stronger credibility.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Digital Tracking Systems:</span>
                      <span className="text-slate-700"> Registries and blockchain may ensure transparency and prevent double counting.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Focus on Quality:</span>
                      <span className="text-slate-700"> Buyers are increasingly demanding credits with co-benefits (biodiversity, community upliftment).</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Article 6 is one of the most important parts of the Paris Agreement. It provides a clear pathway for countries to trade carbon credits, cooperate internationally, and mobilize finance for climate action. If implemented strongly, it could unlock billions of dollars in green investment and significantly speed up global decarbonization.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  For India, Article 6 offers both a challenge and an opportunity: to establish itself as a leader in the global carbon market while ensuring transparency, equity, and sustainability.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  The world will be watching closely — because how we use Article 6 will decide whether carbon markets become a real climate solution or just another missed opportunity.
                </p>
              </div>
            </section>

           
            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <p className="text-sm text-amber-900">
                <span className="font-semibold">Disclaimer:</span> Above content does not constitute any legal advice and is only provided for educational purpose.
              </p>
            </div>

            {/* Comment Section */}
           
          </div>
        </article>
      </main>

    
    </div>
  );
}