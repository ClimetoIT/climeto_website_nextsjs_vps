// Integrated full article React component combining provided sections
import React from "react";
import { Globe, Building2, Users, AlertTriangle, CheckCircle, Shield, Sparkles, FileText, Factory, Lightbulb, TrendingUp, Eye } from "lucide-react";

export default function ChinaCEPLFullArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Globe className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">China's Circular Economy</h1>
              <p className="text-red-100 text-sm mt-1">Producer Responsibility Extension System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-red-600" />
              <h2 className="text-4xl font-bold text-gray-900">Introduction</h2>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 leading-relaxed">
                China's <strong>Circular Economy Promotion Law (CEPL)</strong> is a cornerstone of the country's legal framework for sustainable development. Enacted by the National People's Congress in 2008 and enforced since January 1, 2009, this law promotes environmentally sound production and consumption.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The law was amended on <strong>October 26, 2018</strong> to enhance regulatory enforcement and expand its applicability in light of China's ecological civilization goals.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                From Linear to Circular
              </h3>
              <p className="text-gray-700">
                Unlike the traditional linear economy model of <strong>"take–make–dispose,"</strong> the CEPL encourages the <strong>3Rs: reduce, reuse, recycle</strong>, aiming for higher resource efficiency, waste minimization, and eco-industrial innovation.
              </p>
            </div>
          </section>

          {/* Terminology Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">Official Terminology</h2>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-xl p-8 mb-6">
              <p className="text-lg mb-4">
                In Chinese official documents, what the world often calls Extended Producer Responsibility (EPR) is officially termed:
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 mb-4">
                <p className="text-3xl font-bold mb-2">生产者责任延伸制度</p>
                <p className="text-xl text-red-100">Shēngchǎnzhě Zérèn Yánshēn Zhìdù</p>
              </div>
              <p className="text-lg"><strong>Literal Meaning:</strong> Producer Responsibility Extension System</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800">
                <strong>Note:</strong> This is codified in <strong>Article 45</strong> of the CEPL. The English term "EPR" is not used in Chinese legal texts but appears in unofficial translations.
              </p>
            </div>
          </section>

          {/* Legal Applicability */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">Who Must Comply?</h2>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-semibold">The following entities bear obligations under CEPL:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-gray-50 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Factory className="w-8 h-8 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Producers & Manufacturers</h3>
                    <p className="text-gray-700">Must ensure eco-design, recyclability, take-back systems, and financing of end-of-life disposal.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-gray-50 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Importers & Cross-Border E-Commerce</h3>
                    <p className="text-gray-700">Foreign sellers importing regulated goods are treated as domestic producers.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 bg-gray-50 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Distributors & Retailers</h3>
                    <p className="text-gray-700">Assist in take-back, information disclosure, and ensuring compliance of products sold.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 bg-gray-50 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authorized Recyclers</h3>
                    <p className="text-gray-700">Must be licensed and follow strict environmental standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="text-red-800"><strong>Important:</strong> Consumers and research institutions do not bear legal obligations.</p>
            </div>
          </section>

          {/* ... Additional integrated sections would continue here ... */}

        </article>
      </main>
    </div>
  );
}
