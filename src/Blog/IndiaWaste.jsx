import React from 'react';
import { Recycle, Factory, Smartphone, Heart, AlertTriangle, BarChart3, Target, ExternalLink } from 'lucide-react';

export default function Indiawaste() {
  const sections = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Municipal Solid Waste (MSW): A Mixed Bag of Progress and Challenges",
      content: "India generates about 160,039 TPD of MSW (~58–59 million tonnes annually), with 95.4% collected but only ~50% treated. Nearly 32% remains unprocessed—dumped, burned, or left in the open. Major gaps exist in segregation, treatment infrastructure, and collection efficiency, particularly in Tier-2 and Tier-3 cities.",
      keyIssues: [
        "Lack of source segregation hampers composting and recycling",
        "Over 3,000 dump sites, often unlined and polluting",
        "Poor coverage in small towns; uncollected waste remains high"
      ],
      solution: {
        title: "Solutions in Action:",
        text: "Indore demonstrates what's possible. The city has achieved 100% door-to-door waste collection and segregation at source. It treats the majority of organic waste via composting and bio-methanation, while dry waste is sorted and processed through Material Recovery Facilities. Its comprehensive system includes citizen awareness, GPS-tracked collection trucks, and decentralized composting units—making it a national model under the Swachh Bharat Mission."
      }
    }
  ];

  const references = [
    { name: "Ministry of Environment, Forest and Climate Change (MoEFCC)", url: "https://moef.gov.in" },
    { name: "Central Pollution Control Board (CPCB) - Annual Reports", url: "https://cpcb.nic.in/annual-reports/" },
    { name: "CPCB - Plastic & E-waste Data", url: "https://cpcb.nic.in/plastic-waste/" },
    { name: "Press Information Bureau (PIB)", url: "https://pib.gov.in" },
    { name: "EACPM - Municipal Waste Data", url: "https://eacpm.gov.in" },
    { name: "Smart City Indore (Best Practices)", url: "https://smartcityindore.org" },
    { name: "Swachh Survekshan Rankings & Reports", url: "https://swachhsurvekshan.mohua.gov.in" },
    { name: "Bangalore Mirror", url: "https://bangaloremirror.indiatimes.com" },
    { name: "Doughnut Economics", url: "https://doughnuteconomics.org" }
  ];

  const tags = ["Climeto", "CircularEconomy", "WasteToWealth", "EPR", "SustainabilityIndia", "WasteManagement", "UrbanResilience", "EnvironmentalCompliance", "PlasticCredits", "CleanIndia"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <Recycle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Climeto Blog</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            India's Waste Management Landscape: Challenges, Reforms, and a Path Toward Circularity
          </h1>
          <p className="text-xl text-green-50 leading-relaxed">
            India's rapid urbanization and consumption patterns have led to a steep rise in waste generation—posing significant environmental and logistical challenges. While the country generates approximately 62 million tonnes of waste annually, data from the Central Pollution Control Board (CPCB) and Ministry of Environment highlight concerning trends: over 30 million tonnes go untreated each year, ending up in landfills, water bodies, or open dumps.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          This blog provides a comprehensive look at India's waste streams—including municipal, plastic, electronic, biomedical, and hazardous waste—alongside key policies, gaps, and innovative solutions shaping India's circular economy ambitions.
        </p>

        {/* Section 1: MSW */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Recycle className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Municipal Solid Waste (MSW): A Mixed Bag of Progress and Challenges
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India generates about 160,039 TPD of MSW (~58–59 million tonnes annually), with 95.4% collected but only ~50% treated. Nearly 32% remains unprocessed—dumped, burned, or left in the open. Major gaps exist in segregation, treatment infrastructure, and collection efficiency, particularly in Tier-2 and Tier-3 cities.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Issues:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Lack of source segregation hampers composting and recycling</li>
            <li>Over 3,000 dump sites, often unlined and polluting</li>
            <li>Poor coverage in small towns; uncollected waste remains high</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions in Action:</h3>
            <p className="text-gray-700 leading-relaxed">
              Indore demonstrates what's possible. The city has achieved 100% door-to-door waste collection and segregation at source. It treats the majority of organic waste via composting and bio-methanation, while dry waste is sorted and processed through Material Recovery Facilities. Its comprehensive system includes citizen awareness, GPS-tracked collection trucks, and decentralized composting units—making it a national model under the Swachh Bharat Mission.
            </p>
            <p className="text-sm text-gray-600 mt-3 italic">Reference: Swachh Survekshan 2023 and smartcityindore.org</p>
          </div>
        </section>

        {/* Section 2: Plastic Waste */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Plastic Waste: A Rising Crisis
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Plastic waste in India rose from 0.66 million tonnes (2017–18) to 4.13 million tonnes (2020–21). Major contributors are packaging, multi-layer plastics (MLPs), and single-use items. Despite EPR rules under the Plastic Waste Management Rules, recycling rates remain uneven due to contamination, collection gaps, and difficulty recycling flexible packaging.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Regulations:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Plastic Waste Management Rules (2016, amended 2022) enforce EPR for brand owners and ban several single-use plastic items. Plastic Credit Market being piloted: registered recyclers issue credits for plastic processed, which producers can purchase.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Informal Sector's Role:</h3>
            <p className="text-gray-700 leading-relaxed">
              Informal waste pickers recover 60–80% of recyclable plastics, a vital contribution that must be formally integrated.
            </p>
          </div>
        </section>

        {/* Section 3: E-Waste */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. E-Waste: Fastest Growing Stream
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India generated 1.6 million tonnes of e-waste in 2021–22, with only a fraction processed formally. Most e-waste is handled by informal recyclers using unsafe methods (burning, acid leaching).
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">New E-Waste Management Rules (2022):</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Centralized EPR portal for registration of producers and recyclers</li>
            <li>Mandatory reporting and stricter targets</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Low consumer awareness</li>
            <li>Lack of convenient collection points</li>
            <li>Informal recycling dominates (~75% of e-waste handling)</li>
          </ul>
        </section>

        {/* Section 4: Bio-Medical Waste */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Bio-Medical Waste (BMW): Public Health Risk
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India generates over 743 TPD of BMW, most of which is treated via Common Bio-Medical Waste Treatment Facilities (CBWTFs). However, states like Karnataka report only 62% treatment coverage, indicating large volumes of untreated hazardous waste.
          </p>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Solutions:</h3>
            <p className="text-gray-700 leading-relaxed">
              GPS-tracked trucks and color-coded segregation. Staff training, real-time emissions monitoring, and expansion of CBWTFs are key priorities.
            </p>
          </div>
        </section>

        {/* Section 5: Hazardous Industrial Waste */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Factory className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Hazardous Industrial Waste: A Ticking Time Bomb
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India produces over 10 million tonnes of hazardous waste annually from thermal plants, chemicals, and pharmaceuticals. While many industries are covered under the Hazardous Waste Management Rules (2016), challenges like under-reporting, inadequate treatment facilities, and illegal dumping persist.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovations:</h3>
            <p className="text-gray-700 leading-relaxed">
              Waste exchange platforms promote industrial symbiosis. GPS-tracked waste transport and real-time e-manifests.
            </p>
          </div>
        </section>

        {/* Section 6: Policy Frameworks */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Policy Frameworks Supporting a Circular Economy
              </h2>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            India has laid down extensive legislation covering all major waste categories:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Solid Waste Management Rules, 2016</li>
            <li>Plastic Waste Management Rules, 2016 (amended 2022)</li>
            <li>E-Waste Management Rules, 2022</li>
            <li>Battery and Hazardous Waste Rules</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Additionally, Swachh Bharat Mission (Urban) and schemes like GOBARdhan (for biogas from cow dung) provide targeted interventions.
          </p>
        </section>

        {/* Section 7: EPR */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. The Role of EPR and Market Mechanisms
              </h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Extended Producer Responsibility (EPR) is increasingly becoming central to India's waste strategy. Plastic credits, e-waste targets, and battery recycling obligations are shifting responsibility to producers. Digital platforms for credit trading, EPR tracking, and registry-based compliance are transforming oversight.
          </p>
        </section>

        {/* Section 8: Case Study */}
        <section className="mb-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            8. Circular Economy in Action: Case Study
          </h2>
          <h3 className="text-xl font-semibold mb-3">Indore: A National Best Practice</h3>
          <p className="leading-relaxed mb-4">
            A national best practice in municipal solid waste management. With 100% segregation, composting, and robust dry waste processing, Indore leads India in sustainable urban sanitation. Its success stems from community engagement, decentralized treatment, efficient transport, and civic pride.
          </p>
          <p className="text-sm text-green-100 italic">
            Reference: smartcityindore.org, Swachh Survekshan 2023 (pib.gov.in)
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Final Thoughts</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India stands at a pivotal moment in its waste management journey. While challenges remain in segregation, infrastructure, and formalization, the combination of robust policy, technological innovations, and community-led models is driving real change.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To move toward a zero-waste, circular economy, the focus must remain on:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Strengthening compliance</li>
            <li>Formalizing informal sectors</li>
            <li>Enhancing decentralized processing</li>
            <li>Supporting innovation and monitoring</li>
          </ul>
          <p className="text-xl font-semibold text-green-600">Let's transform waste into opportunity.</p>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-green-700 to-emerald-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need help building your EPR, plastic credit or circular economy roadmap?</h3>
          <p className="text-lg mb-6">Partner with Climeto for compliance, strategy and impact.</p>
          <a href="https://www.climeto.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Visit www.climeto.com
          </a>
        </section>

        {/* References */}
        <section className="mb-12 bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Verified Sources & Reference Links</h2>
          <div className="space-y-3">
            {references.map((ref, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">{ref.name}</p>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 hover:underline break-all">
                    {ref.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300">© 2024 Climeto. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Building a sustainable, circular future for India</p>
        </div>
      </footer>
    </div>
  );
}