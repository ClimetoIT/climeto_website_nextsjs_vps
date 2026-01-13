import React, { useState } from 'react';
import { Leaf, Search, Calendar, User, ArrowRight, Filter, Tag, TrendingUp, Mail, Globe, Wind, Scale, Target, Factory } from 'lucide-react';

export default function ExploreMorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const categories = ['All', 'Climate Policy', 'Regulations', 'Sustainability', 'Carbon Markets', 'Net Zero'];
  const years = ['All', '2025', '2024', '2023'];

  const blogPosts = [
    {
      id: 1,
      title: 'Article 6 of the Paris Agreement & Carbon Markets: Detailed Guide for 2025',
      excerpt: 'Carbon markets are becoming the backbone of how countries and businesses plan to reach net zero emissions. Article 6 provides the framework for international cooperation.',
      author: 'Devesh Malu',
      date: 'September 23, 2025',
      category: 'Carbon Markets',
      readTime: '12 min',
      icon: Globe,
      gradient: 'from-blue-500 to-green-500',
      image: '🌍'
    },
    {
      id: 2,
      title: 'Revised Guidelines for Environmental Compensation on Plastic Waste Management Violations',
      excerpt: 'Recent updates to the Environmental Compensation structure for violations of the Plastic Waste Management Rules, 2016, have brought significant changes to rates.',
      author: 'Devesh Malu',
      date: 'September 2, 2024',
      category: 'Regulations',
      readTime: '6 min',
      icon: Scale,
      gradient: 'from-green-500 to-emerald-500',
      image: '⚖️'
    },
    {
      id: 3,
      title: "India's Commitment to Achieving Net-Zero Emissions by 2070",
      excerpt: 'India has set an ambitious target to achieve net-zero emissions by 2070, positioning itself as a potential global leader in the fight against climate change.',
      author: 'Devesh Malu',
      date: 'August 30, 2024',
      category: 'Net Zero',
      readTime: '15 min',
      icon: Target,
      gradient: 'from-orange-500 to-green-500',
      image: '🇮🇳'
    },
    {
      id: 4,
      title: 'Understanding Extended Producer Responsibility (EPR) in India',
      excerpt: 'EPR is a policy approach where producers take responsibility for the environmental impact of their products throughout the product lifecycle.',
      author: 'Devesh Malu',
      date: 'July 15, 2024',
      category: 'Regulations',
      readTime: '10 min',
      icon: Factory,
      gradient: 'from-purple-500 to-pink-500',
      image: '🏭'
    },
    {
      id: 5,
      title: 'Renewable Energy Transition: Challenges and Opportunities',
      excerpt: 'The shift to renewable energy sources presents both significant challenges and unprecedented opportunities for sustainable development.',
      author: 'Devesh Malu',
      date: 'June 20, 2024',
      category: 'Sustainability',
      readTime: '11 min',
      icon: Wind,
      gradient: 'from-cyan-500 to-blue-500',
      image: '💨'
    },
    {
      id: 6,
      title: 'Climate Finance: Mobilizing Investment for Green Projects',
      excerpt: 'Understanding how climate finance works and how developing nations can access funding for environmental projects and green infrastructure.',
      author: 'Devesh Malu',
      date: 'May 10, 2024',
      category: 'Climate Policy',
      readTime: '9 min',
      icon: TrendingUp,
      gradient: 'from-green-500 to-teal-500',
      image: '💰'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || post.date.includes(selectedYear);
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-slate-800">Climeto Insights</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-slate-600 hover:text-green-600 transition-colors">Home</a>
              <a href="/explore" className="text-green-600 font-semibold">Explore</a>
              <a href="/about" className="text-slate-600 hover:text-green-600 transition-colors">About</a>
              <a href="/contact" className="text-slate-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore Our Blog</h1>
            <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-3xl mx-auto">
              Discover insights on climate policy, sustainability, and environmental regulations
            </p>
            <div className="flex items-center justify-center gap-4 text-green-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>{categories.length - 1} Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>Expert Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-1">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Filter */}
            <div className="md:col-span-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'All' || selectedYear !== 'All' || searchTerm) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-slate-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-green-900">×</button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="hover:text-blue-900">×</button>
                </span>
              )}
              {selectedYear !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {selectedYear}
                  <button onClick={() => setSelectedYear('All')} className="hover:text-purple-900">×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'} Found
          </h2>
          <p className="text-slate-600">
            {selectedCategory !== 'All' && `in ${selectedCategory} `}
            {selectedYear !== 'All' && `from ${selectedYear}`}
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No articles found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedYear('All');
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                    </div>
                    <div className="relative z-10 text-white">
                      <div className="text-6xl mb-2">{post.image}</div>
                      <Icon className="w-12 h-12 mx-auto opacity-80" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-xs">{post.readTime} read</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => alert(`Navigate to post ${post.id}`)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

     

     
    </div>
  );
}