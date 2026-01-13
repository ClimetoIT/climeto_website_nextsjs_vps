import React, { useState } from 'react';
import { Leaf, Calendar, User, TrendingUp, Zap, Wind, Factory, Car, Flame, Globe, Target, ArrowRight, Mail, ExternalLink, Award, AlertCircle } from 'lucide-react';

export default function IndiaCommitmentPage() {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = () => {
    if (comment && name && email) {
      alert('Comment submitted! (This is a demo - no data is actually saved)');
      setComment('');
      setName('');
      setEmail('');
      setWebsite('');
      setSaveInfo(false);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const goals2030 = [
    { icon: Zap, text: 'Increase non-fossil energy capacity to 500 GW', color: 'yellow' },
    { icon: Wind, text: 'Meet 50% of energy requirements from renewable sources', color: 'blue' },
    { icon: TrendingUp, text: 'Reduce projected carbon emissions by one billion tons', color: 'green' },
    { icon: Target, text: 'Lower carbon intensity of economy by more than 45%', color: 'purple' }
  ];

  const decarbonization = [
    { title: 'Coal Phase-Out', desc: 'Phase out coal in industrial sector by 2065 and eliminate all other uses by 2060', icon: Factory, year: '2060-2065' },
    { title: 'Renewable Energy', desc: 'Wind electricity growth of 14% in 2022, targeting 17% annual growth with fourfold capacity by 2030', icon: Wind, year: '2030' },
    { title: 'Nuclear Power', desc: 'Expand nuclear energy from minor role to 68 GW capacity', icon: Zap, year: '2050' },
    { title: 'Electric Vehicles', desc: '84% of car sales to be electric, 79% of trucks electric or hydrogen-powered', icon: Car, year: '2050' },
    { title: 'Biofuels', desc: 'Provide up to 27% of world transportation fuel', icon: Flame, year: '2050' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-green-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Climeto Insights</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Hero Section with Indian Flag Colors */}
          <div className="relative overflow-hidden">
            {/* Flag Stripes Background */}
            <div className="absolute inset-0">
              <div className="h-1/3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-gradient-to-r from-green-500 to-green-600"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-10 md:p-16">
              <div className="flex items-center gap-4 mb-6 text-orange-300 flex-wrap">
                <Calendar className="w-5 h-5" />
                <span>August 30, 2024</span>
                <span className="mx-2">•</span>
                <User className="w-5 h-5" />
                <span>By Devesh Malu</span>
                <span className="mx-2">•</span>
                <span>1 Comment</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                India's Commitment to Achieving Net-Zero Emissions by 2070
              </h1>
              
              <p className="text-xl text-slate-200 leading-relaxed max-w-4xl">
                India, the third-largest CO2 emitter globally, has set an ambitious target to achieve net-zero emissions by 2070, positioning itself as a potential global leader in the fight against climate change.
              </p>

              <div className="flex items-center gap-3 mt-8 bg-orange-500/20 backdrop-blur-sm rounded-xl p-5 w-fit border border-orange-400/30">
                <Globe className="w-8 h-8 text-orange-400" />
                <div>
                  <p className="text-orange-200 font-medium text-sm">Global Ranking</p>
                  <p className="text-white text-2xl font-bold">3rd Largest Emitter</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
              <svg className="w-40 h-40" viewBox="0 0 200 200" fill="white">
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="4" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12">
            {/* Climate Crisis Introduction */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-l-4 border-red-500 rounded-r-2xl p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">The Climate Crisis</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Climate change is an imminent global threat, manifesting in melting glaciers, extreme weather patterns, and the depletion of natural resources. As the world grapples with these critical challenges, nations are setting ambitious targets to curb their carbon emissions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Carbon Footprint Stats */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                <Globe className="w-10 h-10 text-orange-600" />
                India's Carbon Footprint
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold mb-2">2,830</div>
                  <div className="text-red-100 text-lg">Million Metric Tons</div>
                  <div className="text-sm text-red-100 mt-2">CO2 Emissions (2022)</div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold mb-2">44%</div>
                  <div className="text-slate-300 text-lg">Coal Dependency</div>
                  <div className="text-sm text-slate-300 mt-2">Current Energy Mix</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold mb-2">15%</div>
                  <div className="text-blue-100 text-lg">Natural Gas Target</div>
                  <div className="text-sm text-blue-100 mt-2">By 2030</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Current Energy Mix</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Coal</span>
                      <span className="text-slate-600">44%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-slate-800 h-3 rounded-full" style={{width: '44%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Petroleum & Other Liquids</span>
                      <span className="text-slate-600">24%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width: '24%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Natural Gas</span>
                      <span className="text-slate-600">6%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Net Zero Commitment */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="text-7xl font-bold mb-2">2070</div>
                    <div className="text-green-100 text-xl">Net Zero Target</div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Commitment to Net Zero</h2>
                    <p className="text-lg text-green-50 leading-relaxed mb-4">
                      At the Glasgow COP26 climate summit in November 2021, Indian Prime Minister Narendra Modi announced India's commitment to achieving net-zero emissions by 2070.
                    </p>
                    <p className="text-green-100">
                      This target is set 20 years later than those of North America and Europe and 10 years after China. Despite the delayed timeline, India's commitment is significant, given its development needs and reliance on coal.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2030 Goals */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                <Target className="w-10 h-10 text-green-600" />
                India's 2030 Goals
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {goals2030.map((goal, idx) => {
                  const Icon = goal.icon;
                  const colorClasses = {
                    yellow: 'from-yellow-400 to-orange-500 border-yellow-300',
                    blue: 'from-blue-400 to-cyan-500 border-blue-300',
                    green: 'from-green-400 to-emerald-500 border-green-300',
                    purple: 'from-purple-400 to-pink-500 border-purple-300'
                  };
                  
                  return (
                    <div key={idx} className={`bg-gradient-to-br ${colorClasses[goal.color]} text-white rounded-2xl p-6 shadow-lg border-2 transform hover:scale-105 transition-transform`}>
                      <Icon className="w-12 h-12 mb-4" />
                      <p className="text-lg font-semibold leading-relaxed">{goal.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Key Insight Box */}
            <section className="mb-16">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Award className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Carbon Neutral vs Net Zero</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      As both Carbon Neutral and Net Zero are vital—Carbon Neutral manages immediate impacts, while Net Zero, guided by SBTi, aims for deep, long-term sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Decarbonization Goals */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Decarbonization Goals: A Strategic Roadmap</h2>
              
              <div className="space-y-6">
                {decarbonization.map((item, idx) => {
                  const Icon = item.icon;
                  const colors = ['orange', 'blue', 'yellow', 'green', 'red'];
                  const color = colors[idx % colors.length];
                  const colorClasses = {
                    orange: 'border-orange-400 bg-orange-50',
                    blue: 'border-blue-400 bg-blue-50',
                    yellow: 'border-yellow-400 bg-yellow-50',
                    green: 'border-green-400 bg-green-50',
                    red: 'border-red-400 bg-red-50'
                  };
                  const iconColors = {
                    orange: 'text-orange-600',
                    blue: 'text-blue-600',
                    yellow: 'text-yellow-600',
                    green: 'text-green-600',
                    red: 'text-red-600'
                  };
                  
                  return (
                    <div key={idx} className={`${colorClasses[color]} border-l-4 rounded-r-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
                      <div className="flex items-start gap-6">
                        <div className={`${iconColors[color]} bg-white rounded-xl p-4 shadow-sm`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                            <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                            <span className={`${iconColors[color]} font-bold text-lg bg-white px-4 py-1 rounded-full`}>
                              {item.year}
                            </span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Challenges and Opportunities */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Challenges and Opportunities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-md">
                  <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <AlertCircle className="w-7 h-7" />
                    Challenges
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Economic Growth vs. Emissions</p>
                        <p className="text-slate-600 text-sm">Balancing economic growth with emissions reduction as energy demands rise</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Technological Advancements</p>
                        <p className="text-slate-600 text-sm">Need for significant progress in renewable energy, EVs, and storage solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Investment Needs</p>
                        <p className="text-slate-600 text-sm">Massive investments required in infrastructure, technology, and capacity building</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-md">
                  <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7" />
                    Opportunities
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Global Leadership</p>
                        <p className="text-slate-600 text-sm">Potential to become a model for other developing nations in climate action</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Renewable Energy Deployment</p>
                        <p className="text-slate-600 text-sm">Large-scale implementation of clean energy technologies</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Strategic Investments</p>
                        <p className="text-slate-600 text-sm">Development of robust policy frameworks and international cooperation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* India's Potential */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">India's Potential to Lead</h2>
                  <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                    India's commitment to achieving net-zero emissions by 2070 positions it as a potential global leader in the fight against climate change. The large-scale deployment of renewable energy and strategic investments in clean technology in the country could serve as a model for other developing nations.
                  </p>
                  <p className="text-center text-slate-600 italic">
                    India's success will depend on robust policy frameworks, international cooperation, and the active participation of all stakeholders.
                  </p>
                </div>
              </div>
            </section>

            {/* References */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">References</h2>
              <div className="space-y-3">
                {[
                  { num: 1, url: 'https://www.weforum.org/agenda/2022/08/carbon-neutral-net-zero-sustainability-climate-change/', text: 'World Economic Forum - Carbon Neutral vs Net Zero' },
                  { num: 2, url: 'https://www.investopedia.com/articles/investing/092915/5-countries-produce-most-carbon-dioxide-co2.asp', text: 'Investopedia - Top CO2 Producing Countries' },
                  { num: 3, url: 'https://flow.db.com/more/esg/india-s-path-to-net-zero', text: 'Deutsche Bank - India\'s Path to Net Zero' },
                  { num: 4, url: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1945472', text: 'Press Information Bureau - India\'s Climate Commitment' },
                  { num: 5, url: 'https://www.iea.org/energy-system/renewables/wind', text: 'IEA - Wind Energy Systems' },
                  { num: 6, url: 'https://flow.db.com/more/esg/india-s-path-to-net-zero', text: 'Deutsche Bank - Nuclear Power Expansion' }
                ].map((ref) => (
                  <a key={ref.num} href={ref.url} target="_blank" rel="noopener noreferrer"
                     className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:shadow-md hover:border-green-300 transition-all group">
                    <span className="font-bold text-green-600 text-lg flex-shrink-0">[{ref.num}]</span>
                    <div className="flex-1">
                      <p className="text-slate-700 group-hover:text-green-600 transition-colors">{ref.text}</p>
                      <p className="text-xs text-slate-400 mt-1 break-all">{ref.url}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-800">Disclaimer:</span> Above content does not constitute any legal advice and is only provided for educational purpose.
              </p>
            </div>

            {/* Comment Section */}
           
          </div>
        </article>
      </main>

      {/* Footer */}
     
    </div>
  );
}