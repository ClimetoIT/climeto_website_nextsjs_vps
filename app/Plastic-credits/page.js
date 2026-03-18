"use client";

import { useState } from "react";

const tableData = [
  {
    standard: "Verra Plastic Waste Reduction Standard (PWRS)",
    issuer: "Verra",
    scope: "Plastic waste collection and recycling; Waste Collection Credits (WCC) & Waste Recycling Credits (WRC)",
    verification: "Independent third-party validation & verification; registry tracking",
    notes: "Structured, robust, transparent; voluntary",
  },
  {
    standard: "Plastic Pollution Reduction Standard (PPRS)",
    issuer: "PCX Solutions",
    scope: "Plastic cleanup, waste prevention",
    verification: "Third-party verification, additionality criteria",
    notes: "Credible, growing standard",
  },
  {
    standard: "Verified Plastic Credit Schemes (Registry-specific)",
    issuer: "Multiple platforms (PlasticCredits.org)",
    scope: "Projects aligned with ISEAL best practices",
    verification: "Audited by independent bodies",
    notes: "Quality varies by registry",
  },
  {
    standard: "ISO / Third-Party Verified Systems (CleanHub, TÜV SÜD)",
    issuer: "TÜV SÜD",
    scope: "Verifies program integrity, not a credit per se",
    verification: "ISO 14064 / ISO 17029 verification",
    notes: "Ensures program accuracy and transparency",
  },
];

const faqData = [
  {
    q: "Who can buy plastic credits?",
    a: "Producers, importers, and brand owners — especially those with packaging containing plastic.",
  },
  {
    q: "Are plastic credits mandatory in India?",
    a: "Voluntary plastic credits are optional, but EPR credits under PWM Rules are mandatory for compliance.",
  },
  {
    q: "How are credits verified?",
    a: "Through independent third-party audits and digital registry tracking.",
  },
  {
    q: "Can plastic credits be reused?",
    a: "No, credits are retired once used to prevent double-counting.",
  },
];

export default function PlasticCreditsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif", background: "#f5f0e8", minHeight: "100vh", color: "#1a1a1a" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page { font-family: 'Times New Roman', Times, serif; background: #f5f0e8; }

        /* HERO */
        .hero {
          background: #1c3d2e;
          color: #e8dfc8;
          padding: 80px 48px 60px;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -40px; left: 10%;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }
        .hero-eyebrow {
          font-family: 'Times New Roman', Times, serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #8ab89a;
          margin-bottom: 20px;
        }
        .hero-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -1px;
          margin-bottom: 24px;
          width: 100%;
        }
        .hero-subtitle {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.7;
          color: #c5d8cc;
          width: 100%;
        }
        .hero-badge {
          display: inline-block;
          margin-top: 36px;
          background: rgba(138, 184, 154, 0.18);
          border: 1px solid rgba(138, 184, 154, 0.35);
          color: #8ab89a;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          letter-spacing: 0.5px;
        }

        /* MAIN LAYOUT */
        .main { width: 100%; padding: 60px 48px; }

        /* SECTIONS */
        .section { margin-bottom: 72px; }
        .section-label {
          font-size: 10px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #6b9e7a;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 700;
          line-height: 1.2;
          color: #1c3d2e;
          margin-bottom: 28px;
        }
        .prose {
          font-size: 17px;
          line-height: 1.8;
          color: #3a3a3a;
          font-weight: 300;
          width: 100%;
        }
        .prose p { margin-bottom: 16px; }

        /* OVERVIEW WITH IMAGE */
        .overview-layout {
          display: flex;
          gap: 48px;
          align-items: center;
        }
        .overview-image {
          flex-shrink: 0;
          width: 45%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(28,61,46,0.15);
        }
        .overview-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .overview-text { flex: 1; }
        @media (max-width: 768px) {
          .overview-layout { flex-direction: column; }
          .overview-image { width: 100%; }
        }

        /* PURPOSE CARDS */
        .purpose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }
        .purpose-card {
          background: #fff;
          border: 1px solid #ddd8cc;
          border-radius: 4px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .purpose-card:hover { box-shadow: 0 8px 32px rgba(28,61,46,0.10); }
        .purpose-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: #1c3d2e;
        }
        .purpose-card-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 18px;
          font-weight: 700;
          color: #1c3d2e;
          margin-bottom: 12px;
        }
        .purpose-card-body {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          font-weight: 300;
        }

        /* HOW IT WORKS STEPS */
        .steps { margin-top: 32px; }
        .step {
          display: flex;
          gap: 28px;
          margin-bottom: 32px;
          align-items: flex-start;
        }
        .step-number {
          flex-shrink: 0;
          width: 48px; height: 48px;
          background: #1c3d2e;
          color: #e8dfc8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Times New Roman', Times, serif;
          font-size: 19px;
          font-weight: 700;
        }
        .step-content {}
        .step-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1c3d2e;
          margin-bottom: 8px;
        }
        .step-body {
          font-size: 15.5px;
          line-height: 1.75;
          color: #555;
          font-weight: 300;
        }

        /* DIVIDER */
        .divider {
          border: none;
          border-top: 1px solid #d6cfbf;
          margin: 72px 0;
        }

        /* TABLE */
        .table-note {
          font-size: 13.5px;
          color: #777;
          font-style: italic;
          margin-top: 20px;
          font-weight: 300;
        }
        .table-wrap { overflow-x: auto; margin-top: 28px; width: 100%; }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14.5px;
          background: #fff;
          border: 1px solid #ddd8cc;
        }
        thead {
          background: #1c3d2e;
          color: #e8dfc8;
        }
        thead th {
          padding: 16px 18px;
          text-align: left;
          font-family: 'Times New Roman', Times, serif;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 0.3px;
        }
        tbody tr { border-bottom: 1px solid #e8e2d6; }
        tbody tr:last-child { border-bottom: none; }
        tbody tr:hover { background: #faf7f2; }
        tbody td {
          padding: 16px 18px;
          vertical-align: top;
          line-height: 1.6;
          color: #3a3a3a;
          font-weight: 300;
        }
        tbody td:first-child { font-weight: 600; color: #1c3d2e; }

        /* CREDIBILITY CHECKLIST */
        .checklist { margin-top: 28px; }
        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid #e0dbd0;
          font-size: 16px;
          line-height: 1.65;
          color: #3a3a3a;
          font-weight: 300;
        }
        .check-item:last-child { border-bottom: none; }
        .check-icon {
          flex-shrink: 0;
          width: 26px; height: 26px;
          background: #e8f3ec;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          margin-top: 1px;
        }
        .check-label { font-weight: 600; color: #1c3d2e; }

        /* BEST PRACTICES */
        .bp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 28px;
        }
        .bp-card {
          background: #1c3d2e;
          color: #e8dfc8;
          border-radius: 4px;
          padding: 28px 24px;
        }
        .bp-num {
          font-family: 'Times New Roman', Times, serif;
          font-size: 38px;
          font-weight: 900;
          color: rgba(232,223,200,0.18);
          line-height: 1;
          margin-bottom: 10px;
        }
        .bp-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #c5d8cc;
        }
        .bp-body {
          font-size: 14px;
          line-height: 1.7;
          font-weight: 300;
          color: #a8c4b2;
        }

        /* FAQ */
        .faq { margin-top: 28px; }
        .faq-item {
          border-bottom: 1px solid #d6cfbf;
          overflow: hidden;
        }
        .faq-q {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          text-align: left;
          font-family: 'Times New Roman', Times, serif;
          font-size: 18px;
          font-weight: 700;
          color: #1c3d2e;
          gap: 16px;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border: 1.5px solid #1c3d2e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 300;
          transition: transform 0.25s;
        }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-a {
          font-size: 15.5px;
          line-height: 1.75;
          color: #555;
          font-weight: 300;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s;
          padding-bottom: 0;
        }
        .faq-a.open {
          max-height: 200px;
          padding-bottom: 20px;
        }

        /* TAKEAWAYS */
        .takeaway-box {
          background: #fff;
          border: 1px solid #ddd8cc;
          border-left: 5px solid #1c3d2e;
          padding: 36px 36px;
          border-radius: 4px;
          margin-top: 20px;
        }
        .takeaway-intro {
          font-size: 16.5px;
          line-height: 1.8;
          color: #3a3a3a;
          font-weight: 300;
          margin-bottom: 24px;
        }
        .takeaway-list {
          list-style: none;
          margin-bottom: 20px;
        }
        .takeaway-list li {
          padding: 9px 0 9px 24px;
          position: relative;
          font-size: 15.5px;
          color: #3a3a3a;
          line-height: 1.65;
          font-weight: 300;
        }
        .takeaway-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #6b9e7a;
          font-weight: 400;
        }
        .takeaway-close {
          font-size: 16px;
          line-height: 1.8;
          color: #3a3a3a;
          font-weight: 300;
        }

        /* SOURCES */
        .sources {
          background: #ece7db;
          padding: 40px 48px;
          border-top: 1px solid #d6cfbf;
          width: 100%;
        }
        .sources-inner { width: 100%; }
        .sources-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 18px;
          font-weight: 700;
          color: #1c3d2e;
          margin-bottom: 16px;
        }
        .sources-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sources-list a {
          color: #3a6b4e;
          font-size: 13.5px;
          font-weight: 300;
          text-decoration: none;
          word-break: break-all;
          transition: color 0.2s;
        }
        .sources-list a:hover { color: #1c3d2e; text-decoration: underline; }

        @media (max-width: 640px) {
          .hero { padding: 56px 20px 44px; }
          .main { padding: 40px 16px; }
          .sources { padding: 40px 16px; }
          .step { flex-direction: column; gap: 14px; }
          thead th, tbody td { padding: 12px 10px; }
          .takeaway-box { padding: 24px 16px; }
        }
      `}</style>

      <div className="page">
        {/* HERO */}
        <header className="hero">
          <p className="hero-eyebrow">Sustainability · Circular Economy · EPR</p>
          <h1 className="hero-title">Plastic Credits in India and Globally</h1>
          <p className="hero-subtitle">Meaning, Standards, and Best Practices</p>
          <span className="hero-badge">Credynova.com Reference Guide</span>
        </header>

        <main className="main">

          {/* WHAT ARE PLASTIC CREDITS */}
          <section className="section">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What Are Plastic Credits?</h2>
            <div className="overview-layout">
              <div className="overview-image">
                <img src="/plastic_credits.png" alt="Plastic Credits Explained — Reducing Waste Through Circular Economy" />
              </div>
              <div className="overview-text prose">
                <p>
                  A plastic credit is a tradable certificate representing a specific amount of plastic collected, recovered, recycled, or responsibly managed. Each credit typically corresponds to 1 kilogram or tonne of plastic waste removed from the environment or processed.
                </p>
                <p>
                  Plastic credits are similar in concept to carbon credits — instead of offsetting emissions, they offset plastic footprint. (credynova.com)
                </p>
                <p>
                  <strong>Note:</strong> In India, plastic credits often intersect with EPR (Extended Producer Responsibility) compliance, while globally they also exist as voluntary sustainability tools.
                </p>
              </div>
            </div>
          </section>

          <hr className="divider" />

          {/* WHY PLASTIC CREDITS EXIST */}
          <section className="section">
            <p className="section-label">Purpose</p>
            <h2 className="section-title">Why Plastic Credits Exist</h2>
            <p className="prose">Plastic credits serve several key purposes:</p>
            <div className="purpose-grid">
              {[
                {
                  title: "Funding Waste Management",
                  body: "Projects that collect, sort, or recycle plastic waste often lack sufficient funding. Credits provide economic value for these activities.",
                },
                {
                  title: "Corporate Sustainability",
                  body: "Companies can support verified plastic collection and recycling to meet sustainability goals.",
                },
                {
                  title: "Circular Economy Promotion",
                  body: "Plastic credits create demand for recycled materials and support infrastructure development.",
                },
              ].map((c) => (
                <div className="purpose-card" key={c.title}>
                  <div className="purpose-card-title">{c.title}</div>
                  <div className="purpose-card-body">{c.body}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* HOW PLASTIC CREDITS WORK */}
          <section className="section">
            <p className="section-label">Process</p>
            <h2 className="section-title">How Plastic Credits Work</h2>
            <div className="steps">
              {[
                {
                  n: "1",
                  title: "Step 1: Plastic Waste Collection",
                  body: "Registered recyclers or NGOs collect post-consumer plastic from urban, industrial, or informal sources.",
                },
                {
                  n: "2",
                  title: "Step 2: Recycling or Recovery",
                  body: "Waste is sorted, cleaned, and converted into reusable raw materials or repurposed products. Some credits may also come from waste-to-energy projects.",
                },
                {
                  n: "3",
                  title: "Step 3: Verification & Certification",
                  body: "Credits are issued after third-party verification, ensuring transparency and traceability.",
                },
                {
                  n: "4",
                  title: "Step 4: Purchase & Retirement",
                  body: "Companies purchase credits to offset their plastic footprint or fulfill compliance requirements. Once used, credits are retired to prevent double counting.",
                },
              ].map((s) => (
                <div className="step" key={s.n}>
                  <div className="step-number">{s.n}</div>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-body">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* GLOBAL STANDARDS TABLE */}
          <section className="section">
            <p className="section-label">Standards</p>
            <h2 className="section-title">Global Plastic Credit Standards: Comparison</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Standard / Framework</th>
                    <th>Issuer / Owner</th>
                    <th>Scope & Focus</th>
                    <th>Verification / Quality Control</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.standard}>
                      <td>{row.standard}</td>
                      <td>{row.issuer}</td>
                      <td>{row.scope}</td>
                      <td>{row.verification}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-note">
              Note: There is no single globally accepted standard yet; verification, traceability, and additionality are key indicators of credibility.
            </p>
          </section>

          <hr className="divider" />

          {/* CREDIBILITY CHECKLIST */}
          <section className="section">
            <p className="section-label">Evaluation</p>
            <h2 className="section-title">What Makes a Plastic Credit Standard Credible?</h2>
            <p className="prose">When evaluating plastic credits, look for:</p>
            <div className="checklist">
              {[
                { icon: "✅", label: "Quantifiable Units", desc: "kg or tonnes of plastic recycled or collected" },
                { icon: "✅", label: "Independent Verification", desc: "accredited third-party auditors" },
                { icon: "✅", label: "Transparency & Registry", desc: "public ledger of issued/retired credits" },
                { icon: "✅", label: "Additionality", desc: 'impact goes beyond "business as usual"' },
                { icon: "✅", label: "Social & Environmental Safeguards", desc: "worker safety, local impact considered" },
              ].map((item) => (
                <div className="check-item" key={item.label}>
                  <div className="check-icon">{item.icon}</div>
                  <span><span className="check-label">{item.label}</span> – {item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* BEST PRACTICES */}
          <section className="section">
            <p className="section-label">Guidance</p>
            <h2 className="section-title">Best Practices for Companies Using Plastic Credits</h2>
            <div className="bp-grid">
              {[
                {
                  n: "01",
                  title: "Prioritize Reduction",
                  body: "Reduce plastic at the source before buying credits.",
                },
                {
                  n: "02",
                  title: "Choose Verified Credits",
                  body: "Only from credible, audited projects.",
                },
                {
                  n: "03",
                  title: "Link Credits to Real Impact",
                  body: "Support projects that improve collection infrastructure or recycling systems.",
                },
                {
                  n: "04",
                  title: "Integrate with Broader Sustainability Plans",
                  body: "Combine with EPR compliance, eco-design, and circular economy initiatives.",
                },
              ].map((b) => (
                <div className="bp-card" key={b.n}>
                  <div className="bp-num">{b.n}</div>
                  <div className="bp-title">{b.title}</div>
                  <div className="bp-body">{b.body}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* FAQ */}
          <section className="section">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq">
              {faqData.map((item, i) => (
                <div className="faq-item" key={i}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{i + 1}. {item.q}</span>
                    <span className={`faq-icon${openFaq === i ? " open" : ""}`}>+</span>
                  </button>
                  <div className={`faq-a${openFaq === i ? " open" : ""}`}>{item.a}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* KEY TAKEAWAYS */}
          <section className="section">
            <p className="section-label">Conclusion</p>
            <h2 className="section-title">Key Takeaways</h2>
            <div className="takeaway-box">
              <p className="takeaway-intro">
                Plastic credits are a strategic tool to finance waste collection, support sustainability goals, and strengthen circular systems. However, they must complement reduction and recycling efforts, not replace them.
              </p>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#1c3d2e", marginBottom: 12, fontFamily: "'Times New Roman', Times, serif" }}>
                Companies should focus on:
              </p>
              <ul className="takeaway-list">
                <li>Reduction at source</li>
                <li>Using credible, third-party verified credits</li>
                <li>Linking purchases to tangible environmental impact</li>
                <li>Integrating with EPR compliance and ESG initiatives</li>
              </ul>
              <p className="takeaway-close">
                By doing so, plastic credits can truly advance sustainability and the circular economy while supporting corporate and regulatory goals.
              </p>
            </div>
          </section>

        </main>

        {/* SOURCES */}
        <footer className="sources">
          <div className="sources-inner">
            <p className="sources-title">Sources</p>
            <ul className="sources-list">
              {[
                "https://en.wikipedia.org/wiki/Plastic_credits",
                "https://thedocs.worldbank.org/en/doc/411ebaec936068e4bb62a0e40ebce522-0320072024/original/Product-Overview-Plastic-Credits-FINAL.pdf",
                "https://verra.org/programs/plastic-waste-reduction-standard/",
                "https://verra.org/programs/plastic-waste-reduction-standard/plastic-credits-and-extended-producer-responsibility/",
                "https://www.plasticsforchange.org/blog/how-plastic-credits-could-reshape-corporate-responsibility-in-the-circular-economy-of-waste-and-packaging",
              ].map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}