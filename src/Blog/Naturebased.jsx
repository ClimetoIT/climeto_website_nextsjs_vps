import React from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, Trees, Waves, Mountain, Book, ChevronRight } from "lucide-react";

export default function NatureBasedSolutionsBlog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
          Nature-Based Solutions: The World's Most Powerful Yet Underutilized Climate Tool
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Nature-Based Solutions (NbS) are not just climate tools—they are the foundation of a stable planet.
        </p>
      </motion.div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mt-10">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80"
          alt="Nature"
          className="rounded-3xl shadow-lg w-full"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto mt-12 space-y-10">
        {/* Section */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700">What Are Nature-Based Solutions?</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Nature-Based Solutions (NbS) leverage natural ecosystems to remove carbon, build climate resilience,
            enhance biodiversity, and improve human well-being. Unlike engineered solutions, NbS operate on
            ecological logic—delivering multiple benefits with a single intervention.
          </p>
        </section>

        {/* Ecosystem Cards */}
        <section className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            { icon: Trees, title: "Forests", desc: "Massive aboveground carbon stores; critical for REDD+ projects." },
            { icon: Mountain, title: "Peatlands", desc: "Store over 30% of soil carbon despite covering only 3% of land." },
            { icon: Waves, title: "Mangroves", desc: "Capture carbon 3–5× more efficiently than forests." },
            { icon: Globe, title: "Soils", desc: "Largest terrestrial carbon bank; essential for regenerative farming." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <item.icon className="h-10 w-10 text-green-600" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Core Categories */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700">Core Categories of Nature-Based Solutions</h2>
          <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
            <p><strong>1. Forests</strong> – Protecting and restoring forests avoids massive emissions and supports biodiversity.</p>
            <p><strong>2. Soil Organic Carbon</strong> – Regenerative agriculture rebuilds soil carbon and improves yields.</p>
            <p><strong>3. Blue Carbon Ecosystems</strong> – Mangroves, salt marshes, and seagrasses store carbon rapidly.</p>
            <p><strong>4. Peatlands</strong> – The world’s most carbon-dense ecosystems; require urgent protection.</p>
            <p><strong>5. Agroforestry</strong> – Integrates trees into farming systems for long-term resilience.</p>
          </div>
        </section>

        {/* Carbon Markets */}
        <section className="bg-green-50 p-6 rounded-3xl border border-green-200">
          <h2 className="text-2xl font-semibold text-green-800">The Role of NbS in Carbon Markets</h2>
          <p className="mt-3 text-gray-700">
            High-quality nature-based carbon credits are becoming a key part of the voluntary carbon market.
            Verified through trusted standards like Verra, Gold Standard and ART TREES, NbS credits must be
            additional, permanent, community-led, and scientifically robust.
          </p>
        </section>

        {/* Co-Benefits */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700">The Co-Benefit Multiplier of NbS</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {["Climate Resilience", "Biodiversity", "Livelihoods", "Water Systems", "Human Wellbeing"].map(
              (benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-xl shadow border border-gray-100 flex items-center gap-3"
                >
                  <ChevronRight className="h-6 w-6 text-green-600" />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700">The Path Forward: Investing in Nature with Integrity</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Nature-Based Solutions are not optional — they are essential to any credible climate pathway. Governments,
            companies, and communities must collaborate to scale NbS with strong safeguards, scientific MRV, and
            long-term stewardship.
          </p>
        </section>

        {/* Sources */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2"><Book /> Sources</h3>
          <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-2">
            <li>PNAS – Natural climate solutions can provide ~30% of mitigation needed by 2030.</li>
            <li>UNEP/IUCN – NbS receive 3% of climate finance despite huge impact.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
