import React from "react";
import {
  FileText,
  Globe,
  CheckCircle,
  AlertTriangle,
  Building2,
  Users,
  Factory,
  Layers,
  Shield,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function EPRindia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white shadow-xl">
        <div className="max-w-5xl mx-auto px-5 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Extended Producer Responsibility (EPR) in India
          </h1>
          <p className="mt-3 text-lg opacity-90">
            A Complete Guide for Businesses – Responsibilities, Certification,
            Legal Requirements & Benefits
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-5 py-12">
        <article className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">

          {/* INTRO */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                What is Extended Producer Responsibility (EPR)?
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Extended Producer Responsibility (EPR) is a regulatory framework
              ensuring that producers, importers, and brand owners take full
              responsibility for managing post-consumer waste generated from
              their products.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Companies dealing with plastic packaging, electronics, batteries,
              and hazardous materials must ensure collection, recycling, and
              environmentally safe disposal. EPR is legally mandated under
              multiple rules issued by CPCB and MoEFCC.
            </p>
          </section>

          {/* LINKS SECTION */}
          <section className="mb-12">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md">
              <p className="text-indigo-900 font-semibold mb-2">Important References:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-indigo-700">
                  <Globe className="w-5 h-5" /> CPCB – EPR Guidelines
                </li>
                <li className="flex items-center gap-2 text-indigo-700">
                  <Globe className="w-5 h-5" /> MoEFCC – Waste Management Rules
                </li>
              </ul>
            </div>
          </section>

          {/* RULES SECTION */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                EPR Rules & Regulations in India
              </h2>
            </div>

            <div className="space-y-6">

              {/* Plastic Rules */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">
                  Plastic Waste Management Rules, 2016 (Amended 2022)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>EPR mandatory for producers, importers & brand owners.</li>
                  <li>Mandatory recycling targets.</li>
                  <li>Plastic credit mechanism introduced.</li>
                </ul>
              </div>

              {/* E-Waste Rules */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  E-Waste Management Rules, 2022
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Applies to electronics manufacturers & importers.</li>
                  <li>Mandatory collection & recycling systems.</li>
                  <li>Annual reporting to CPCB.</li>
                </ul>
              </div>

              {/* Battery Rules */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  Battery Waste Management Rules, 2022
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Mandatory for lead-acid, lithium-ion & EV batteries.</li>
                  <li>Establish recycling & recovery systems.</li>
                </ul>
              </div>

              {/* Hazardous Waste */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Hazardous & Other Wastes Rules, 2016
                </h3>
                <p className="text-gray-700">
                  Covers medical, chemical & toxic waste — requires safe
                  handling, transportation & disposal.
                </p>
              </div>

            </div>

            <div className="mt-6 bg-red-50 border border-red-200 p-5 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600 inline mr-2" />
              <span className="text-red-700 font-medium">
                Non-compliance can lead to fines, penalties, and license
                cancellation.
              </span>
            </div>
          </section>

          {/* WHO NEEDS EPR */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Who Needs EPR Registration?</h2>
            </div>

            <div className="space-y-4">

              <Card icon={Factory} color="red" title="Producers & Manufacturers" text="Manufacturers of packaging, electronics, batteries & plastic goods." />

              <Card icon={Globe} color="blue" title="Importers" text="Businesses importing electronics, packaged goods & batteries." />

              <Card icon={Building2} color="yellow" title="Brand Owners" text="Companies selling products under their brand name." />

              <Card icon={Shield} color="green" title="Waste Processors" text="Authorized recyclers & waste management companies." />

            </div>
          </section>

          {/* CERTIFICATION PROCESS */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">How to Get EPR Certification?</h2>
            </div>

            <ol className="space-y-6">

              <Step
                number="1"
                title="EPR Registration"
                text="Apply through the CPCB Portal and submit business details, product categories, and waste estimates."
              />

              <Step
                number="2"
                title="Submit EPR Action Plan"
                text="Describe collection, recycling partners & waste processing mechanisms."
              />

              <Step
                number="3"
                title="Approval & Monitoring"
                text="CPCB evaluates and approves plans; businesses must execute them diligently."
              />

              <Step
                number="4"
                title="Annual EPR Reporting"
                text="Submit annual waste recycling reports to CPCB."
              />

            </ol>
          </section>

          {/* BENEFITS */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Benefits of EPR for Businesses</h2>
            </div>

            <ul className="grid md:grid-cols-2 gap-6">
              <Benefit text="Regulatory Compliance – Avoid fines & penalties." />
              <Benefit text="Sustainability leadership & circular economy impact." />
              <Benefit text="Improved brand image & corporate responsibility." />
              <Benefit text="Enhanced consumer trust in eco-friendly brands." />
              <Benefit text="Boosts recycling infrastructure & green innovation." />
            </ul>
          </section>

          {/* WHY CHOOSE US */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li>✔ Expert guidance on documentation & registration.</li>
                <li>✔ End-to-end EPR compliance management.</li>
                <li>✔ Waste management partners across India.</li>
                <li>✔ Customized solutions for plastic, electronics & packaging sectors.</li>
              </ul>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}

/* REUSABLE UI COMPONENTS */

function Card({ icon: Icon, color, title, text }) {
  const colors = {
    red: "text-red-600 border-red-400",
    blue: "text-blue-600 border-blue-400",
    yellow: "text-yellow-600 border-yellow-400",
    green: "text-green-600 border-green-400",
  };

  return (
    <div className={`border-l-4 ${colors[color]} bg-gray-50 p-5 rounded-lg`}>
      <div className="flex items-start gap-4">
        <Icon className={`w-8 h-8 ${colors[color].split(" ")[0]}`} />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <li className="flex gap-4">
      <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </li>
  );
}

function Benefit({ text }) {
  return (
    <li className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm flex items-start gap-3">
      <ArrowRight className="w-5 h-5 text-indigo-600 mt-1" />
      <p className="text-gray-700">{text}</p>
    </li>
  );
}
