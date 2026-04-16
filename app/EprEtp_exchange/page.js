"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Career", href: "#" },
];

const serviceLinks = [
  "Plastic Stewardship Program",
  "Carbon-Network",
  "Plastic-Network",
  "Sustainability Services",
  "EPR Plastic",
  "EPR Battery",
  "EPR Tyre",
  "EPR E-Waste",
  "Carbon Offsets",
  "Net Zero Achievement",
];

const consequences = [
  {
    num: "01",
    title: "Waterborne Diseases and Infections",
    intro:
      "One of the most immediate and severe impacts of water pollution is the spread of waterborne diseases. Contaminated water often contains bacteria, viruses, and parasites such as:",
    list1: ["E. coli", "Vibrio cholerae", "Salmonella", "Giardia"],
    subheading: "Health Impacts:",
    list2: [
      "Diarrhea and dehydration",
      "Cholera and typhoid fever",
      "Hepatitis A and E",
      "Dysentery",
    ],
    footer:
      "Children, elderly individuals, and immunocompromised populations are the most vulnerable. Repeated exposure can lead to chronic malnutrition and weakened immunity, especially in children.",
  },
  {
    num: "02",
    title: "Long-Term Exposure to Toxic Chemicals",
    intro:
      "Industrial and agricultural pollution introduces toxic chemicals into water systems, which accumulate in the human body over time.",
    subheading1: "Key Pollutants:",
    list1: [
      "Heavy metals (lead, mercury, arsenic, cadmium)",
      "Pesticides and herbicides",
      "Industrial solvents",
    ],
    subheading: "Health Consequences:",
    list2: [
      "Neurological disorders",
      "Kidney and liver damage",
      "Developmental delays in children",
      "Hormonal and endocrine disruption",
    ],
    footer:
      "For example, arsenic-contaminated groundwater has been linked to skin lesions, cardiovascular disease, and increased cancer risk.",
  },
  {
    num: "03",
    title: "Increased Cancer Risk",
    intro:
      "Certain water pollutants are known carcinogens. Long-term consumption of polluted water containing:",
    list1: ["Arsenic", "Nitrates", "Industrial by-products"],
    subheading: "can significantly increase the risk of:",
    list2: [
      "Bladder cancer",
      "Liver cancer",
      "Skin cancer",
      "Gastrointestinal cancers",
    ],
    footer:
      "The risk is especially high in regions where water quality monitoring and treatment infrastructure is weak.",
    quote:
      '"The consequences of water pollution on human health are severe, far-reaching, and preventable."',
  },
  {
    num: "04",
    title: "Reproductive and Developmental Health Issues",
    intro:
      "Water pollution affects not only individuals but future generations.",
    subheading: "Impacts Include:",
    list2: [
      "Reduced fertility",
      "Pregnancy complications",
      "Low birth weight",
      "Birth defects",
    ],
    footer:
      "Endocrine-disrupting chemicals found in polluted water can interfere with hormonal systems, affecting reproductive health in both men and women.",
  },
  {
    num: "05",
    title: "Neurological and Cognitive Disorders",
    intro:
      "Heavy metals like lead and mercury are particularly harmful to the nervous system.",
    subheading: "Effects on Human Health:",
    list2: [
      "Learning disabilities in children",
      "Reduced IQ and memory loss",
      "Behavioral problems",
      "Neurodegenerative conditions",
    ],
    footer:
      "Children exposed to polluted water during early development face irreversible cognitive and neurological damage.",
  },
  {
    num: "06",
    title: "Skin and Eye Disorders",
    intro:
      "Using polluted water for bathing, washing, or daily hygiene can lead to:",
    list2: [
      "Skin rashes and infections",
      "Dermatitis",
      "Eye irritation and infections",
    ],
    footer:
      "In areas with limited access to clean water, these conditions often go untreated, worsening overall health outcomes.",
  },
  {
    num: "07",
    title: "Indirect Health Impacts Through the Food Chain",
    intro:
      "Water pollution doesn't stop at drinking water—it enters the food system.",
    subheading: "Pollutants accumulate in:",
    list2: ["Fish and seafood", "Crops irrigated with polluted water"],
    footer:
      "When humans consume contaminated food, toxins bioaccumulate in the body, leading to long-term health risks even if drinking water appears safe.",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  /* Page-scoped reset only */

  /* Hero */
  .hero {
    background: linear-gradient(135deg, #0d3d20 0%, #1a6b3c 50%, #2a8a50 100%);
    color: #fff;
    padding: 3rem 2rem 2.5rem;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .hero-inner {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .hero-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 20px;
    background: rgba(255,255,255,0.15);
    color: #d4f0e0;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    color: #fff;
  }

  .hero-subtitle {
    font-size: 1rem;
    color: #a8d8bc;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .hero-stats {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .hero-stat {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    color: #c8eeda;
  }

  .hero-stat svg { width: 16px; height: 16px; opacity: 0.8; }

  .hero-img {
    width: 100%;
    border-radius: 12px;
    height: 280px;
    object-fit: cover;
    border: 2px solid rgba(255,255,255,0.2);
  }

  .hero-img-placeholder {
    width: 100%;
    border-radius: 12px;
    height: auto;
    background: linear-gradient(180deg, #0a2e15 0%, #1a5030 40%, #2a7048 70%, #1a4028 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,255,255,0.15);
    position: relative;
    overflow: hidden;
  }

  /* Main layout */
  .main {
    max-width: 780px;
    margin: 0 auto;
    padding: 2.5rem 2rem 4rem;
  }

  /* Intro section */
  .intro-para {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #2a3a2a;
    margin-bottom: 1rem;
  }

  /* Section dividers */
  .section-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #1a6b3c;
    margin-bottom: 0.5rem;
    margin-top: 2.5rem;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background: #d4e8d4;
    margin: 2rem 0;
  }

  /* What is section */
  .what-is-box {
    background: #fff;
    border: 1px solid #d4e8d4;
    border-left: 4px solid #1a6b3c;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .what-is-box h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #1a2a1a;
    margin-bottom: 0.75rem;
  }

  /* Feature cards */
  .feature-list {
    background: #f0f8f2;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    margin: 1rem 0 1.5rem;
    border: 1px solid #d4e8d4;
  }

  .feature-list ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .feature-list li {
    font-size: 0.9rem;
    color: #2a4a2a;
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.5;
  }

  .feature-list li::before {
    content: '●';
    color: #1a6b3c;
    font-size: 0.5rem;
    position: absolute;
    left: 0;
    top: 0.35rem;
  }

  /* Section heading */
  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a2a1a;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .section-h3 {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1a3a1a;
    margin: 1rem 0 0.5rem;
  }

  /* Consequence blocks */
  .consequence-block {
    border-top: 1px solid #d4e8d4;
    padding-top: 2rem;
    margin-top: 2rem;
  }

  .consequence-num {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #5a9a6a;
    margin-bottom: 0.4rem;
  }

  /* Quote block */
  .pull-quote {
    border-left: 4px solid #1a6b3c;
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    background: #f0f8f2;
    border-radius: 0 8px 8px 0;
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-style: italic;
    color: #1a4a2a;
    line-height: 1.6;
  }

  /* Social/wider impact */
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin: 1rem 0;
  }

  .impact-card {
    background: #fff;
    border: 1px solid #d4e8d4;
    border-radius: 8px;
    padding: 1rem;
    font-size: 0.875rem;
    color: #2a4a2a;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  }

  .impact-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1a6b3c;
    margin-top: 4px;
    flex-shrink: 0;
  }

  /* Solutions */
  .solution-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #eaf2ea;
    font-size: 0.9rem;
    color: #2a4a2a;
    line-height: 1.5;
  }

  .solution-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #e0f4e8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.75rem;
    color: #1a6b3c;
    font-weight: 700;
  }

  /* References */
  .ref-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1rem;
  }

  .ref-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #fff;
    border: 1px solid #d4e8d4;
    border-radius: 8px;
    text-decoration: none;
    color: #1a6b3c;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background 0.2s;
  }

  .ref-link:hover { background: #f0f8f2; }

  .ref-link-icon {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  /* CTA */
  .cta-box {
    background: linear-gradient(135deg, #0d3d20, #1a6b3c);
    border-radius: 12px;
    padding: 2rem;
    margin: 2.5rem 0 0;
    color: #fff;
    text-align: center;
  }

  .cta-box h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }

  .cta-box p {
    font-size: 0.9rem;
    color: #a8d8bc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .cta-btn {
    display: inline-block;
    background: #fff;
    color: #1a6b3c;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 10px 24px;
    border-radius: 24px;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .cta-btn:hover { transform: scale(1.03); }

  @media (max-width: 700px) {
    .main { padding: 2rem 1rem 3rem; }
  }
`;

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div>
          <span className="logo-text">Climeto</span>
          <span className="logo-sub">Sustainable Services</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <button className="services-btn">Services ▾</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-meta">
          <span className="tag">Global Health</span>
          <span className="tag">Environment</span>
          <span className="tag">2025 · Special Report</span>
          <span className="tag">Public Health</span>
        </div>
        <h1>Consequences of Water Pollution on Human Health: A Growing Global Crisis</h1>
        <div className="hero-subtitle">A Growing Global Crisis</div>
        <div className="hero-stats">
          <div className="hero-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            12 min read
          </div>
          <div className="hero-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            Global Perspective
          </div>
        </div>
        <div className="hero-img-placeholder">
          <img
            src="/erpexchange.png"
            alt="India's EPR Ecosystem - EPRETP Exchange"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  );
}

function ConsequenceBlock({ item }) {
  return (
    <div className="consequence-block">
      <div className="consequence-num">Consequence {item.num}</div>
      <h2 className="section-h2">{item.title}</h2>
      <p className="intro-para">{item.intro}</p>
      {item.list1 && (
        <div className="feature-list">
          <ul>
            {item.list1.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      )}
      {item.subheading1 && <h3 className="section-h3">{item.subheading1}</h3>}
      {item.subheading && <h3 className="section-h3">{item.subheading}</h3>}
      {item.list2 && (
        <div className="feature-list">
          <ul>
            {item.list2.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      )}
      {item.footer && <p className="intro-para" style={{ marginTop: "0.75rem" }}>{item.footer}</p>}
      {item.quote && <blockquote className="pull-quote">{item.quote}</blockquote>}
    </div>
  );
}

export default function ClimetoBlog() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8f5" }}>
      <style>{styles}</style>
      <Hero />

      <main className="main">
        {/* Intro */}
        <p className="intro-para" style={{ marginTop: "1.5rem", fontWeight: 500, fontSize: "1.1rem" }}>
          Water pollution poses a severe and growing threat to human health worldwide.
        </p>
        <p className="intro-para">
          Water is fundamental to life—but today, polluted water has become one of the biggest threats to human health worldwide. From contaminated drinking water to polluted rivers, lakes, and groundwater, water pollution directly and indirectly affects millions of people every year.
        </p>
        <p className="intro-para">
          According to global health estimates, unsafe water and poor sanitation contribute to hundreds of thousands of preventable deaths annually, especially in developing economies. The consequences extend far beyond short-term illness, impacting long-term health, productivity, and quality of life.
        </p>
        <p className="intro-para">
          This blog explores the major consequences of water pollution on human health, the pollutants responsible, and why addressing water contamination is critical for sustainable development.
        </p>

        <div className="section-divider" />

        {/* What is Water Pollution */}
        <div className="section-label">Foundation</div>
        <h2 className="section-h2">What Is Water Pollution?</h2>
        <div className="what-is-box">
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a4a2a", marginBottom: "0.75rem" }}>
            Water pollution occurs when harmful substances—chemical, biological, or physical—enter water bodies, making the water unsafe for drinking, cooking, bathing, agriculture, or industrial use.
          </p>
        </div>
        <h3 className="section-h3">Common Sources of Water Pollution</h3>
        <div className="feature-list">
          <ul>
            {[
              "Industrial effluents and chemical discharge",
              "Untreated sewage and wastewater",
              "Agricultural runoff (fertilizers and pesticides)",
              "Plastic waste and microplastics",
              "Heavy metals from mining and manufacturing",
              "Oil spills and urban stormwater runoff",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {/* All Consequence Blocks */}
        {consequences.map((c) => (
          <ConsequenceBlock key={c.num} item={c} />
        ))}

        {/* Social & Economic */}
        <div className="consequence-block">
          <div className="section-label">Wider Impact</div>
          <h2 className="section-h2">Social and Economic Consequences of Water Pollution</h2>
          <p className="intro-para">Beyond physical health, water pollution creates wider societal impacts:</p>
          <div className="impact-grid">
            {[
              "Increased healthcare costs",
              "Loss of productivity due to illness",
              "Reduced access to safe drinking water",
              "Greater inequality affecting low-income communities",
            ].map((item) => (
              <div key={item} className="impact-card">
                <div className="impact-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="intro-para" style={{ marginTop: "0.75rem" }}>
            Communities dependent on polluted water sources often face cycles of poverty and poor health, making water pollution both a public health and development challenge.
          </p>
        </div>

        {/* Solutions */}
        <div className="consequence-block">
          <div className="section-label">Solutions</div>
          <h2 className="section-h2">Why Preventing Water Pollution Is a Public Health Priority</h2>
          <p className="intro-para">
            Addressing water pollution is not just an environmental issue—it is a human health imperative.
          </p>
          <h3 className="section-h3">Key Solutions Include:</h3>
          {[
            "Strengthening wastewater treatment systems",
            "Enforcing industrial discharge regulations",
            "Promoting responsible agricultural practices",
            "Reducing plastic and chemical pollution",
            "Encouraging corporate accountability and compliance",
          ].map((s, i) => (
            <div key={s} className="solution-item">
              <div className="solution-icon">{i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
          <p className="intro-para" style={{ marginTop: "1rem" }}>
            Clean water access directly supports public health, economic stability, and sustainable development goals.
          </p>
        </div>

        {/* Conclusion */}
        <div className="consequence-block">
          <div className="section-label">Conclusion</div>
          <h2 className="section-h2">A Commitment to Human Dignity</h2>
          <p className="intro-para">
            The consequences of water pollution on human health are severe, far-reaching, and preventable. From infectious diseases to chronic illnesses and long-term developmental harm, polluted water undermines the very foundation of human well-being.
          </p>
          <p className="intro-para">
            Protecting water resources requires collective action—from policymakers, industries, communities, and individuals. Ensuring clean, safe water is not just an environmental responsibility—it is a commitment to human health, dignity, and a sustainable future.
          </p>
        </div>

        <div className="section-divider" />

        {/* References */}
        <div className="section-label">References</div>
        <h2 className="section-h2">Further Reading</h2>
        <div className="ref-links">
          <a href="https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health" className="ref-link">
            <span className="ref-link-icon">↗</span>
            WHO — Water, Sanitation and Health
          </a>
          <a href="https://cpcb.nic.in/water-pollution/" className="ref-link">
            <span className="ref-link-icon">↗</span>
            CPCB — Water Pollution (India)
          </a>
        </div>

        {/* Climeto CTA */}
        <div className="cta-box">
          <h3>♻️ Climeto: Your EPR Compliance Partner</h3>
          <p>
            As EPR frameworks become more structured and digitally driven, organizations need expert support to stay compliant and efficient. Climeto helps businesses with end-to-end EPR compliance management, access to verified recycler networks, strategic support for EPR credit procurement, and data-driven tracking and CPCB-aligned reporting.
          </p>
          {/* <a href="#" className="cta-btn">Connect with Climeto Today</a> */}
        </div>
      </main>

      {/* Footer */}

    </div>
  );
}