import React, { useState } from 'react';
import { Leaf, Calendar, User, AlertTriangle, TrendingDown, TrendingUp, DollarSign, FileText, Mail, ArrowRight, Scale } from 'lucide-react';

export default function RevisedGuidePage() {
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

  const categories = [
    { 
      cat: 'Category 1', 
      rate: '₹2,900', 
      change: 'decrease',
      icon: TrendingDown,
      color: 'green'
    },
    { 
      cat: 'Category 2', 
      rate: '₹5,000', 
      change: 'stable',
      icon: DollarSign,
      color: 'blue'
    },
    { 
      cat: 'Category 3', 
      rate: '₹7,900', 
      change: 'increase',
      icon: TrendingUp,
      color: 'orange'
    },
    { 
      cat: 'Category 4', 
      rate: '₹7,900', 
      change: 'increase',
      icon: TrendingUp,
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-slate-800">Climeto Insights</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 md:p-16 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6 text-green-100 flex-wrap">
                <Calendar className="w-5 h-5" />
                <span>September 2, 2024</span>
                <span className="mx-2">•</span>
                <User className="w-5 h-5" />
                <span>By Devesh Malu</span>
                <span className="mx-2">•</span>
                <span>1 Comment</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Revised Guidelines for Environmental Compensation on Plastic Waste Management Violations
              </h1>
              
              <div className="flex items-center gap-3 mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 w-fit">
                <AlertTriangle className="w-6 h-6 text-yellow-300" />
                <p className="text-green-50 font-medium">Updated Compliance Requirements</p>
              </div>
            </div>

            <div className="absolute top-8 right-8 opacity-20 hidden md:block">
              <Scale className="w-20 h-20" />
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Recent updates to the Environmental Compensation (EC) structure for violations of the <span className="font-semibold">Plastic Waste Management Rules, 2016</span>, have brought changes to the rates for different categories. Here's a quick overview:
                </p>
              </div>

              {/* Rate Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {categories.map((item, idx) => {
                  const Icon = item.icon;
                  const colorClasses = {
                    green: 'from-green-500 to-emerald-600 border-green-300',
                    blue: 'from-blue-500 to-cyan-600 border-blue-300',
                    orange: 'from-orange-500 to-amber-600 border-orange-300',
                    red: 'from-red-500 to-rose-600 border-red-300'
                  };
                  
                  return (
                    <div key={idx} className={`bg-gradient-to-br ${colorClasses[item.color]} text-white rounded-xl p-6 shadow-lg border-2 transform hover:scale-105 transition-transform duration-200`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{item.cat}</h3>
                          <p className="text-white/80 text-sm">per metric ton (MT)</p>
                        </div>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      <div className="text-4xl font-bold mb-3">{item.rate}</div>
                      
                      {item.change === 'decrease' && (
                        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 w-fit">
                          <TrendingDown className="w-4 h-4" />
                          <span className="text-sm font-medium">Rate Decreased</span>
                        </div>
                      )}
                      {item.change === 'increase' && (
                        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 w-fit">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">Rate Increased</span>
                        </div>
                      )}
                      {item.change === 'stable' && (
                        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 w-fit">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm font-medium">Standard Rate</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Key Changes Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                Key Changes in the Revised Guidelines
              </h2>

              <div className="space-y-6">
                <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-green-900 mb-3">New EPR Credit Pricing Rules</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The Environmental Compensation (EC) has introduced new rules for different categories, stipulating a <span className="font-semibold text-green-700">minimum price for EPR credit, set at 30% of the EPR charges</span>.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-800 font-medium">
                      <span className="text-2xl font-bold">30%</span> minimum EPR credit price requirement
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">Impact Analysis</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The implication of this revision is that while <span className="font-semibold text-green-700">Category 1 will see a decrease in rates</span>, <span className="font-semibold text-orange-700">Categories 3 and 4 will experience an increase</span>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-4 border border-green-300">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">Rate Decrease</span>
                      </div>
                      <p className="text-sm text-slate-600">Category 1 benefits from reduced compensation rates</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-orange-300">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-orange-900">Rate Increase</span>
                      </div>
                      <p className="text-sm text-slate-600">Categories 3 & 4 face higher compensation costs</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
           
            {/* Compliance Notice */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-yellow-900 mb-2">Stay Informed & Compliant</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Stay informed to ensure compliance and avoid increased costs due to violations. Regular updates to environmental regulations require ongoing attention to maintain adherence to the latest standards.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12">
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