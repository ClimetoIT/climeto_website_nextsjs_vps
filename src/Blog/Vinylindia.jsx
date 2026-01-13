import React from 'react';
import { AlertCircle, TrendingUp, Shield, Recycle, Users, Lightbulb, CheckCircle, Leaf, Flame, Trash2, Package } from 'lucide-react';

export default function VinylIndia() {
  const actionPlan = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tighten EPR Enforcement",
      description: "Introduce real-time digital tracking, cancel fraudulent certificates, and penalize repeat offenders. The rules are only as strong as their enforcement."
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Invest in Smart Recycling",
      description: "For PVC, chemical recycling and dechlorination technologies are essential. Research and scale-up of low-temperature and non-toxic recycling methods must be accelerated."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Upgrade Infrastructure Nationwide",
      description: "Expand door-to-door collection, install modern Material Recovery Facilities (MRFs), and build systems that serve rural, urban, and underserved regions equally."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empower the Informal Sector",
      description: "Formalize the role of waste pickers with ID cards, fair wages, health insurance, and training. Recognize them as essential environmental workers."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Drive Public Participation",
      description: "Launch nationwide awareness campaigns that show people the real impact of poor plastic habits — and empower them to act. Start with schools, communities, and digital platforms."
    }
  ];

  const alternatives = [
    { icon: <Package className="w-5 h-5" />, text: "Fabric-based posters that are reusable and durable" },
    { icon: <Leaf className="w-5 h-5" />, text: "Paper posters with eco-friendly inks that can degrade naturally" },
    { icon: <Recycle className="w-5 h-5" />, text: "Biodegradable plastic options" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Digital advertising that skips physical waste altogether" }
  ];

  const environmentalImpacts = [
    "Blocked drains",
    "Choked waterways",
    "Stray animals ingesting plastic",
    "Visual clutter in our cities"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-6 shadow-lg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Environmental Action Blog</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's Vinyl Waste Crisis: A Real Problem, A Real Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-red-50 leading-relaxed">
              India generates an estimated 9.3 million tonnes of plastic waste every year, expected to surge to 46 million tonnes by 2035. We're on a collision course unless we change direction — and soon.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
       
        {/* Introduction */}
        <article className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              India is growing fast. With a thriving economy, a booming population, and a culture of innovation, it's one of the world's most dynamic nations. But behind this momentum lies a silent but escalating crisis: plastic waste. At this rate, our existing waste management systems simply won't cope.
            </p>
           
            {/* Stats Highlight */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">9.3M</div>
                <div className="text-gray-700 font-semibold">Tonnes of plastic waste annually</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">46M</div>
                <div className="text-gray-700 font-semibold">Expected by 2035</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Why PVC Matters More Than You Think</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Among the different types of plastics choking our environment, Polyvinyl Chloride (PVC) is particularly complex. It's everywhere — in food packaging, IV bags, pipes, window frames, and electrical cables. Its durability is unmatched, but that same resilience makes it a nightmare to recycle.
            </p>
           
            <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 leading-relaxed">
                  <strong>Health Warning:</strong> Improper handling of PVC releases toxic substances like dioxins and phthalates, which are linked to cancers, hormone disruptions, and reproductive issues.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ironically, despite these risks, PVC dominates India's plastic recycling market. This makes it both the biggest challenge and the biggest opportunity for circular waste management in the country.
            </p>
          </div>
        </article>

        {/* Policies Section */}
        <article className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Where We Stand: Policies vs. Practice</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              India isn't ignoring the problem. We've introduced a strong regulatory framework, from the Plastic Waste Management Rules, 2016, to the Extended Producer Responsibility (EPR) Guidelines of 2022. These policies are designed to make producers accountable for the plastic they put into the market.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>But enforcement is weak.</strong> The informal sector still manages the lion's share of our waste, and reports show a shocking rise in fake EPR certificates — over 7 lakh fraudulent entries, undermining genuine recyclers and distorting compliance data.
            </p>
           
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Meanwhile, microplastics are infiltrating every part of our environment — from the air we breathe to the water we drink — even showing up in human blood, lungs, and reproductive organs. <strong>The consequences are no longer theoretical. They're here, and they're harmful.</strong>
              </p>
            </div>
          </div>
        </article>

        {/* Action Plan */}
        <article className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Needs to Change: The Action Plan</h2>
            <p className="text-gray-300 text-lg mb-10">Five critical steps to transform India's plastic waste management</p>
           
            <div className="space-y-6">
              {actionPlan.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Future Section */}
        <article className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future Is Circular — If We Make It</h2>
            <p className="text-lg text-green-50 leading-relaxed mb-6">
              PVC and plastic waste are not just environmental issues — they're economic, social, and public health issues. But they're also an opportunity to build a new kind of economy: a circular one that creates jobs, boosts innovation, and protects our health and planet.
            </p>
            <p className="text-lg text-green-50 leading-relaxed mb-6">
              India has the brains, the tools, and the momentum to lead the way globally. But it's going to take bold policy, smarter infrastructure, stronger enforcement, and people-powered change.
            </p>
            <p className="text-xl font-bold text-white">
              We can either drown in our own waste or rise by turning it into value. The choice — and the future — is ours to shape.
            </p>
          </div>
        </article>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="text-gray-400 text-2xl">•••</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Second Article - Vinyl Posters */}
        <article className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              The Hidden Afterlife of Vinyl Posters — And Why It's Time for a Change
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              You've seen them everywhere — on walls, electric poles, roadside fences, and even on trees. Bold, colourful, and attention-grabbing, vinyl posters are a staple of public campaigns in India. From political rallies and movie promotions to festive greetings and commercial ads, they shout their message loud and clear. But what happens after their message is no longer needed?
            </p>
           
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
              <p className="text-gray-800 text-lg font-semibold">
                Here's the truth: most of these posters don't just disappear.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">What Are Vinyl Posters Made Of?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Vinyl posters are usually made of PVC (Polyvinyl Chloride) — a type of plastic that's flexible, waterproof, and built to last. That's great for weather resistance, but not so great for the planet. These posters are designed for visibility, not sustainability.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Flame className="w-7 h-7 text-red-600" />
              The Problem with Disposal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Here's where the problem begins. Burning vinyl releases highly toxic gases like dioxins, which pollute the air, water, and soil — and pose serious health risks. On the other hand, dumping them in landfills is no better. PVC doesn't decompose. It just sits there. For years.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              And what about recycling? Technically, yes, vinyl can be recycled — but it's not easy. Posters need to be cleaned, stripped of ink, glue, and fabric, sorted properly, and then shredded into tiny pellets. Only a few specialised recycling units in India can handle that. As a result, very few vinyl posters actually get recycled.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Recycle className="w-6 h-6 text-green-600" />
                When Trash Becomes Treasure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite these challenges, there's a silver lining. Some NGOs, local communities, and small enterprises are turning old vinyl posters into something useful. Think bags, folders, wallets, raincoats, ground sheets, and tent covers. This kind of upcycling gives the material a second life and helps reduce plastic waste.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It's a small but inspiring way to fight the problem. These grassroots innovations show that every banner doesn't have to end up in a landfill — with creativity and effort, we can make something beautiful and useful from waste.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Trash2 className="w-7 h-7 text-red-600" />
              The Bigger Picture: Environmental Impact
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Let's not sugarcoat it — vinyl posters are non-biodegradable, and when they're left in the open, they cause real harm:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {environmentalImpacts.map((impact, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{impact}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              And don't forget the hidden health costs. When burnt, PVC can release toxins that affect the lungs, hormones, and even increase cancer risks. That's a high price to pay for a few weeks of visibility.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">So, What's the Alternative?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Thankfully, we're seeing a slow but steady shift. People and businesses are waking up to the impact and switching to eco-friendly alternatives:
            </p>
            <div className="space-y-4 mb-8">
              {alternatives.map((alt, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-blue-50 p-5 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                    {alt.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{alt.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              These options might take a little more effort or cost slightly more upfront — but the long-term environmental gains are worth it.
            </p>
          </div>
        </article>

        {/* Call to Action */}
        <article className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 md:p-12 text-white text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Call to Action</h2>
            <p className="text-lg md:text-xl text-indigo-50 leading-relaxed mb-6 max-w-3xl mx-auto">
              Next time you see a banner fluttering on a pole, think beyond the message it carries. Ask: What will happen to this after it's taken down? As citizens, organisers, and businesses, we can demand and adopt better practices.
            </p>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-xl font-semibold mb-3">Because awareness is step one, but action is what really creates change.</p>
              <p className="text-lg text-indigo-100 leading-relaxed">
                It's time we reimagine our posters not just as tools of communication, but as part of a larger ecosystem that needs protecting. Let's make space for creativity, sustainability, and responsibility — in every poster we print.
              </p>
            </div>
          </div>
        </article>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">Together for a Sustainable Future</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join the movement to transform India's waste crisis into an opportunity for circular economy and environmental regeneration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>© 2024 Environmental Action</span>
              <span>•</span>
              <span>Building a waste-free India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}