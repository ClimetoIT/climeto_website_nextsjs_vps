"use client";
import { useState } from "react";



const keyFeatures = [
  "Centralized EPR certificate trading platform",
  "Supports multiple waste streams (Plastic, E-waste, Battery, Tyre, Used Oil)",
  "Accessible to registered PIBOs and recyclers",
  "Designed for traceability and compliance monitoring",
  "Operates under CPCB regulatory framework",
];

const whoCanUse = [
  "Producers",
  "Importers",
  "Brand Owners (PIBOs)",
  "Authorized Recyclers",
];

const processSteps = [
  { num: "01", text: "Recyclers generate EPR certificates based on verified recycling" },
  { num: "02", text: "Certificates are listed on the platform" },
  { num: "03", text: "Obligated entities (PIBOs) can procure certificates" },
  { num: "04", text: "Transactions are recorded and tracked digitally" },
  { num: "05", text: "CPCB can monitor compliance through centralized data" },
];

const whyImportant = [
  {
    num: "01",
    title: "Structured EPR Compliance",
    desc: "Moves the ecosystem from fragmented processes to a system-driven compliance mechanism.",
  },
  {
    num: "02",
    title: "Improved Traceability",
    desc: "Helps track certificate generation and usage, reducing risks of duplication and misreporting.",
  },
  {
    num: "03",
    title: "Foundation for Market-Based EPR",
    desc: "Supports a gradual shift toward a market-linked approach for EPR certificate transactions.",
  },
  {
    num: "04",
    title: "Supports Circular Economy in India",
    desc: "Encourages efficient recycling systems, better waste management infrastructure, and increased accountability across stakeholders.",
  },
];

const digitalImpacts = [
  "Enables real-time compliance tracking",
  "Supports data-driven decision making",
  "Standardizes reporting formats",
  "Enhances regulatory oversight",
];

const businessConsiderations = [
  "Understand EPR certificate trading mechanisms",
  "Monitor CPCB regulations and updates",
  "Partner with verified recyclers",
  "Maintain accurate compliance records",
  "Plan procurement strategies for EPR credits",
];

const faqs = [
  {
    q: "What is ETP in EPR?",
    a: "ETP (Electronic Trading Platform) is a CPCB-backed system that facilitates the digital trading and settlement of EPR certificates.",
  },
  {
    q: "Is EPRETP mandatory for EPR compliance?",
    a: "The platform is part of the evolving compliance framework. Stakeholders must follow CPCB guidelines, and usage may depend on applicable regulations for specific waste streams.",
  },
  {
    q: "Which waste categories are covered under EPRETP?",
    a: "Plastic Waste, E-waste, Battery Waste, Tyre Waste, and Used Oil.",
  },
  {
    q: "Who regulates the EPRETP platform?",
    a: "The platform operates under the supervision of the Central Pollution Control Board (CPCB).",
  },
];

const wasteTags = ["Plastic Waste", "E-waste", "Battery Waste", "Tyre Waste", "Used Oil"];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  .climeto-root * { box-sizing: border-box; }

  .climeto-root {
    min-height: 100vh;
    background: #f7f8f5;
    font-family: 'DM Sans', sans-serif;
    color: #1a2a1a;
  }



  /* HERO */
  .c-hero {
    background: linear-gradient(135deg, #0d3d20 0%, #1a6b3c 55%, #2a8a50 100%);
    color: #fff;
    padding: 3.5rem 2rem 3rem;
    position: relative;
    overflow: hidden;
  }
  .c-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .c-hero-inner { max-width: 1000px; margin: 0 auto; position: relative; z-index: 1; }
  .c-hero-meta { display: flex; gap: 0.6rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
  .c-tag {
    font-size: 0.68rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    padding: 4px 12px; border-radius: 20px;
    background: rgba(255,255,255,0.15); color: #d4f0e0;
  }
  .c-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700; line-height: 1.2; margin-bottom: 0.6rem; color: #fff;
  }
  .c-hero-subtitle { font-size: 1rem; color: #a8d8bc; margin-bottom: 1.5rem; font-style: italic; }
  .c-hero-stats { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .c-hero-stat { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #c8eeda; }
  .c-hero-stat svg { width: 16px; height: 16px; opacity: 0.8; }
  .c-hero-img-wrap {
    width: 100%; border-radius: 12px; overflow: hidden;
    border: 2px solid rgba(255,255,255,0.2);
    background: linear-gradient(180deg, #0a2e15 0%, #1a5030 40%, #2a7048 70%);
  }
  .c-hero-img-wrap img { width: 100%; height: auto; display: block; }

  /* MAIN */
  .c-main { max-width: 780px; margin: 0 auto; padding: 2.5rem 2rem 5rem; }

  .c-para { font-size: 1rem; line-height: 1.8; color: #2a3a2a; margin-bottom: 1rem; }
  .c-para-lead { font-size: 1.08rem; font-weight: 500; }

  .c-divider { width: 100%; height: 1px; background: #d4e8d4; margin: 2rem 0; }

  .c-section-label {
    font-size: 0.68rem; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: #1a6b3c; margin-bottom: 0.4rem; margin-top: 2.5rem;
  }
  .c-h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.55rem; font-weight: 700; color: #1a2a1a;
    margin-bottom: 0.75rem; line-height: 1.3;
  }
  .c-h3 {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 600; color: #1a3a1a;
    margin: 1rem 0 0.5rem;
  }

  /* Highlight box */
  .c-highlight-box {
    background: #fff;
    border: 1px solid #d4e8d4;
    border-left: 4px solid #1a6b3c;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    margin: 1.25rem 0;
    font-size: 0.95rem; line-height: 1.7; color: #2a4a2a;
  }
  .c-highlight-box strong { color: #0d3d20; }

  /* Feature list */
  .c-list-box {
    background: #f0f8f2; border-radius: 10px;
    padding: 1.1rem 1.4rem; margin: 0.75rem 0 1.25rem;
    border: 1px solid #d4e8d4;
  }
  .c-list-box ul { list-style: none; display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; }
  .c-list-box li {
    font-size: 0.9rem; color: #2a4a2a;
    padding-left: 1.2rem; position: relative; line-height: 1.55;
  }
  .c-list-box li::before {
    content: '●'; color: #1a6b3c; font-size: 0.45rem;
    position: absolute; left: 0; top: 0.4rem;
  }

  /* Process steps */
  .c-steps { display: flex; flex-direction: column; gap: 10px; margin: 1rem 0; }
  .c-step {
    display: flex; align-items: flex-start; gap: 14px;
    background: #fff; border: 1px solid #d4e8d4;
    border-radius: 8px; padding: 12px 16px;
  }
  .c-step-num {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 1px;
    color: #1a6b3c; background: #e0f4e8;
    border-radius: 4px; padding: 3px 7px; flex-shrink: 0; margin-top: 1px;
  }
  .c-step span { font-size: 0.9rem; color: #2a4a2a; line-height: 1.5; }

  /* Why important grid */
  .c-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 1rem 0; }
  .c-why-card {
    background: #fff; border: 1px solid #d4e8d4;
    border-radius: 10px; padding: 1.1rem;
  }
  .c-why-card-num { font-size: 0.65rem; font-weight: 700; letter-spacing: 1.5px; color: #5a9a6a; margin-bottom: 6px; }
  .c-why-card-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 600; color: #1a2a1a; margin-bottom: 6px; }
  .c-why-card-desc { font-size: 0.85rem; color: #4a6a4a; line-height: 1.55; }

  /* Solution items */
  .c-solution-item {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 10px 0; border-bottom: 1px solid #eaf2ea;
    font-size: 0.9rem; color: #2a4a2a; line-height: 1.55;
  }
  .c-solution-icon {
    width: 26px; height: 26px; border-radius: 50%; background: #e0f4e8;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 0.72rem; color: #1a6b3c; font-weight: 700;
  }

  /* Waste tags */
  .c-waste-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 0.75rem 0; }
  .c-waste-tag {
    font-size: 0.78rem; font-weight: 500; color: #1a6b3c;
    background: #e0f4e8; border: 1px solid #b0d8b8;
    padding: 5px 14px; border-radius: 20px;
  }

  /* Pull quote */
  .c-pull-quote {
    border-left: 4px solid #1a6b3c;
    margin: 1.5rem 0; padding: 1rem 1.5rem;
    background: #f0f8f2; border-radius: 0 8px 8px 0;
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem; font-style: italic; color: #1a4a2a; line-height: 1.65;
  }

  /* FAQ */
  .c-faq { display: flex; flex-direction: column; gap: 1px; margin: 1rem 0; }
  .c-faq-item { border: 1px solid #d4e8d4; border-radius: 8px; overflow: hidden; margin-bottom: 8px; }
  .c-faq-q {
    background: #fff; padding: 14px 16px;
    font-weight: 600; font-size: 0.9rem; color: #1a2a1a;
    display: flex; justify-content: space-between; align-items: center;
    cursor: pointer;
  }
  .c-faq-q:hover { background: #f8fdf9; }
  .c-faq-chevron { color: #1a6b3c; font-size: 1rem; transition: transform 0.2s; }
  .c-faq-chevron.open { transform: rotate(180deg); }
  .c-faq-a {
    background: #f0f8f2; padding: 12px 16px;
    font-size: 0.88rem; color: #3a5a3a; line-height: 1.6;
    border-top: 1px solid #d4e8d4;
  }

  /* References */
  .c-ref-links { display: flex; flex-direction: column; gap: 8px; margin-top: 1rem; }
  .c-ref-link {
    display: flex; align-items: center; gap: 8px;
    padding: 10px 16px; background: #fff;
    border: 1px solid #d4e8d4; border-radius: 8px;
    text-decoration: none; color: #1a6b3c;
    font-size: 0.875rem; font-weight: 500;
    transition: background 0.15s;
  }
  .c-ref-link:hover { background: #f0f8f2; }

  /* CTA */
  .c-cta {
    background: linear-gradient(135deg, #0d3d20, #1a6b3c);
    border-radius: 14px; padding: 2.25rem 2rem;
    margin: 2.5rem 0 0; color: #fff; text-align: center;
  }
  .c-cta h3 { font-family: 'Playfair Display', serif; font-size: 1.45rem; margin-bottom: 0.75rem; }
  .c-cta p { font-size: 0.9rem; color: #a8d8bc; margin-bottom: 1.5rem; line-height: 1.65; }
  .c-cta-list { list-style: none; margin: 0 0 1.25rem; padding: 0; display: flex; flex-direction: column; gap: 6px; }
  .c-cta-list li { font-size: 0.88rem; color: #c8eeda; }
  .c-cta-list li::before { content: '✓ '; opacity: 0.75; }

  /* Footer */
  .c-footer {
    background: #0d3d20; color: #a8d8bc;
    text-align: center; padding: 1.5rem;
    font-size: 0.8rem; letter-spacing: 0.5px;
  }

  @media (max-width: 700px) {
    .c-main { padding: 2rem 1rem 3rem; }
    .c-nav-links { display: none; }
    .c-why-grid { grid-template-columns: 1fr; }
  }
`;



function Hero() {
  return (
    <div className="c-hero">
      <div className="c-hero-inner">
        <div className="c-hero-meta">
          <span className="c-tag">EPR Compliance</span>
          <span className="c-tag">Circular Economy</span>
          <span className="c-tag">2025 · Special Report</span>
          <span className="c-tag">India Regulations</span>
        </div>
        <h1>India's EPR Ecosystem Enters a New Phase with the EPRETP Exchange</h1>
        <div className="c-hero-subtitle">
          A structured, digital, and traceable mechanism for EPR compliance in India
        </div>
        <div className="c-hero-stats">
          <div className="c-hero-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            8 min read
          </div>
          <div className="c-hero-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            India · CPCB · MSTC
          </div>
        </div>
        <div className="c-hero-img-wrap">
          <img
            src="/erpexchange.png"
            alt="India's EPR Ecosystem - EPRETP Exchange"
          />
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="c-faq-item">
      <div className="c-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`c-faq-chevron${open ? " open" : ""}`}>▾</span>
      </div>
      {open && <div className="c-faq-a">{a}</div>}
    </div>
  );
}

export default function ClimetoBlog() {
  return (
    <div className="climeto-root">
      <style>{styles}</style>

      <Hero />

      <main className="c-main">

        {/* Intro */}
        <p className="c-para c-para-lead" style={{ marginTop: "1.75rem" }}>
          India's environmental compliance framework is evolving rapidly.
        </p>
        <p className="c-para">
          A key development in this transition is the Electronic Trading Platform (ETP), developed by MSTC Limited under the guidance of the Central Pollution Control Board. The EPRETP Exchange signals a clear shift towards structured, digital, and traceable mechanisms for managing Extended Producer Responsibility (EPR) obligations in India.
        </p>

        <div className="c-divider" />

        {/* What is EPRETP */}
        <div className="c-section-label">Foundation</div>
        <h2 className="c-h2">What is the EPRETP Exchange?</h2>
        <div className="c-highlight-box">
          The <strong>EPRETP Exchange</strong> is a CPCB-backed electronic trading and settlement platform that enables registered stakeholders to buy, sell, and manage EPR certificates in a regulated and traceable digital environment.
        </div>

        <h3 className="c-h3">Key Features of EPRETP Exchange</h3>
        <div className="c-list-box">
          <ul>{keyFeatures.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>

        <div className="c-divider" />

        {/* Who Can Use */}
        <div className="c-section-label">Eligibility</div>
        <h2 className="c-h2">Who Can Use the EPRETP Platform?</h2>
        <p className="c-para">
          The platform is designed for registered entities under India's EPR framework:
        </p>
        <div className="c-list-box">
          <ul>{whoCanUse.map((w) => <li key={w}>{w}</li>)}</ul>
        </div>
        <p className="c-para">
          These stakeholders can participate in a formalized system for EPR certificate transactions, subject to compliance guidelines.
        </p>

        <div className="c-divider" />

        {/* How It Works */}
        <div className="c-section-label">Process</div>
        <h2 className="c-h2">How Does the EPRETP Exchange Work?</h2>
        <p className="c-para">
          The EPRETP Exchange functions as a digital trading layer within the existing EPR ecosystem.
        </p>
        <h3 className="c-h3">Process Overview:</h3>
        <div className="c-steps">
          {processSteps.map((s) => (
            <div className="c-step" key={s.num}>
              <span className="c-step-num">{s.num}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>
        <p className="c-para">
          This structure improves transparency, accountability, and reporting accuracy across the entire EPR compliance ecosystem.
        </p>

        <div className="c-divider" />

        {/* Why Important */}
        <div className="c-section-label">Significance</div>
        <h2 className="c-h2">Why is the EPRETP Exchange Important?</h2>
        <div className="c-why-grid">
          {whyImportant.map((w) => (
            <div className="c-why-card" key={w.num}>
              <div className="c-why-card-num">Point {w.num}</div>
              <div className="c-why-card-title">{w.title}</div>
              <div className="c-why-card-desc">{w.desc}</div>
            </div>
          ))}
        </div>

        <div className="c-divider" />

        {/* Digital Platforms */}
        <div className="c-section-label">Digital Transformation</div>
        <h2 className="c-h2">Role of Digital Platforms in EPR Compliance</h2>
        <p className="c-para">
          Digital infrastructure like the EPRETP Exchange is transforming how EPR compliance is managed in India:
        </p>
        <div className="c-list-box">
          <ul>{digitalImpacts.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
        <blockquote className="c-pull-quote">
          "This reflects a broader shift toward verified environmental outcomes over manual documentation."
        </blockquote>

        <div className="c-divider" />

        {/* What it Means for Businesses */}
        <div className="c-section-label">Business Impact</div>
        <h2 className="c-h2">What Does EPRETP Mean for Businesses?</h2>
        <p className="c-para">
          Organizations with EPR obligations must adapt to a more transparent and data-driven compliance ecosystem.
        </p>
        <h3 className="c-h3">Key Considerations:</h3>
        {businessConsiderations.map((s, i) => (
          <div className="c-solution-item" key={s}>
            <div className="c-solution-icon">{i + 1}</div>
            <span>{s}</span>
          </div>
        ))}
        <p className="c-para" style={{ marginTop: "1rem" }}>
          <strong>Compliance is no longer just operational—it is becoming strategic and measurable.</strong>
        </p>

        <div className="c-divider" />

        {/* Waste Categories */}
        <div className="c-section-label">Coverage</div>
        <h2 className="c-h2">Waste Categories Covered</h2>
        <p className="c-para">The EPRETP platform covers multiple waste streams under India's EPR framework:</p>
        <div className="c-waste-tags">
          {wasteTags.map((t) => <span className="c-waste-tag" key={t}>{t}</span>)}
        </div>

        <div className="c-divider" />

        {/* FAQ */}
        <div className="c-section-label">FAQs</div>
        <h2 className="c-h2">Frequently Asked Questions</h2>
        <div className="c-faq">
          {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>

        <div className="c-divider" />

        {/* Final Thought */}
        <div className="c-section-label">Conclusion</div>
        <h2 className="c-h2">Final Thought</h2>
        <p className="c-para">
          The EPRETP Exchange is not an overnight transformation—but it represents a clear move towards a more transparent, accountable, and digitally enabled EPR ecosystem in India.
        </p>
        <p className="c-para">
          As regulations evolve, businesses must ask: <em>Is your EPR strategy aligned with the future of compliance?</em>
        </p>

        <div className="c-divider" />

        {/* References */}
        <div className="c-section-label">References</div>
        <h2 className="c-h2">Further Reading</h2>
        <div className="c-ref-links">
          <a href="https://cpcb.nic.in" className="c-ref-link">
            <span>↗</span> CPCB — Central Pollution Control Board, India
          </a>
          <a href="https://www.mstcindia.co.in" className="c-ref-link">
            <span>↗</span> MSTC Limited — Electronic Trading Platform
          </a>
        </div>

        {/* CTA */}
        <div className="c-cta">
          <h3>♻️ Climeto: Your EPR Compliance Partner</h3>
          <p>
            As EPR frameworks become more structured and digitally driven, organizations need expert support to stay compliant and efficient.
          </p>
          <ul className="c-cta-list">
            <li>End-to-end EPR compliance management</li>
            <li>Access to verified recycler networks</li>
            <li>Strategic support for EPR credit procurement</li>
            <li>Data-driven tracking and CPCB-aligned reporting</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Looking to simplify your EPR compliance and stay ahead of regulatory changes?{" "}
            <strong style={{ color: "#fff" }}>Connect with Climeto today.</strong>
          </p>
        </div>

      </main>


    </div>
  );
}