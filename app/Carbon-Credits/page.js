// pages/carbon-credits.jsx  OR  app/carbon-credits/page.jsx
// Works as a Next.js page component (App Router or Pages Router)

import Head from "next/head";

export default function CarbonCreditsPage() {
  return (
    <>
      <Head>
        {/* ── PRIMARY META ── */}
        <title>Carbon Credits Explained: What They Are, How They Work & Pricing | 2024</title>
        <meta name="description" content="Learn what carbon credits are, how they work, types (compliance vs voluntary), pricing ($3–$20), who can buy them, and their role in net-zero & ESG goals. Complete guide." />
        <meta name="keywords" content="carbon credits, carbon offsets, voluntary carbon market, compliance carbon market, carbon credit price, net zero, carbon neutrality, ESG, carbon trading, VCS, Gold Standard, carbon credit trading India, CCTS India, greenhouse gas, CO2 offset, emission reduction" />
        <meta name="author" content="Your Brand Name" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://climeto.com/carbon-credits-explained" />

      
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --forest: #1a3c2e;
          --leaf: #2d7a4f;
          --mint: #5bbf8a;
          --cream: #f7f3ec;
          --sand: #e8dfc9;
          --bark: #7a5c3a;
          --charcoal: #1e1e1e;
          --mist: #c8ddd1;
        }

        body { background: var(--cream); color: var(--charcoal); font-family: 'DM Sans', sans-serif; }

        .page-wrapper { max-width: 1100px; margin: 0 auto; padding: 0 24px 80px; }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 80px 0 60px;
          align-items: center;
        }
        .hero-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 900;
          line-height: 1.0;
          color: var(--forest);
          letter-spacing: -1px;
        }
        .hero-text h1 span { color: var(--leaf); }
        .hero-text p {
          margin-top: 24px;
          font-size: 1.15rem;
          line-height: 1.75;
          color: #444;
          font-weight: 300;
          max-width: 480px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--forest);
          color: var(--mint);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 24px;
        }
        .hero-badge::before { content: '●'; font-size: 0.5rem; }

        /* IMAGE PLACEHOLDER */
       .hero-image-slot {
  border-radius: 24px;
  aspect-ratio: 3/2;
  position: relative;
  overflow: hidden;
  width: 150%;
}
        .hero-image-slot svg {
          width: 48px; height: 48px;
          opacity: 0.5;
        }
        .hero-image-slot .img-label {
          opacity: 0.6;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* STAT STRIP */
        .stat-strip {
          background: var(--forest);
          color: var(--cream);
          border-radius: 20px;
          padding: 36px 48px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 40px 0;
          text-align: center;
        }
        .stat-item { border-right: 1px solid rgba(255,255,255,0.12); }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--mint);
          display: block;
        }
        .stat-label { font-size: 0.82rem; opacity: 0.7; margin-top: 4px; letter-spacing: 0.5px; }

        /* SECTION HEADERS */
        .section { margin: 72px 0; }
        .section-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--leaf);
          font-weight: 600;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: var(--forest);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .section-body {
          font-size: 1rem;
          line-height: 1.8;
          color: #444;
          font-weight: 300;
          max-width: 720px;
        }

        /* HOW IT WORKS STEPS */
        .steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 36px; }
        .step-card {
          background: #fff;
          border: 1px solid var(--sand);
          border-radius: 16px;
          padding: 28px;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(26,60,46,0.1); }
        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: var(--mist);
          line-height: 1;
          margin-bottom: 12px;
        }
        .step-card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--forest);
          margin-bottom: 8px;
        }
        .step-card p { font-size: 0.9rem; line-height: 1.65; color: #555; font-weight: 300; }

        /* TYPES GRID */
        .types-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; margin-top: 36px; }
        .type-card {
          padding: 32px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }
        .type-card.compliance { background: var(--forest); color: var(--cream); }
        .type-card.voluntary { background: var(--sand); color: var(--charcoal); }
        .type-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .type-card.compliance h3 { color: var(--mint); }
        .type-card.voluntary h3 { color: var(--forest); }
        .type-card p { font-size: 0.9rem; line-height: 1.7; opacity: 0.85; font-weight: 300; }
        .type-tag {
          display: inline-block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .type-card.compliance .type-tag { background: rgba(91,191,138,0.2); color: var(--mint); }
        .type-card.voluntary .type-tag { background: rgba(26,60,46,0.12); color: var(--leaf); }
        .examples-list { margin-top: 16px; }
        .examples-list li {
          font-size: 0.85rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .type-card.voluntary .examples-list li { border-bottom: 1px solid rgba(0,0,0,0.06); }
        .examples-list li::before { content: '→'; font-size: 0.8rem; opacity: 0.6; }

        /* COMPARISON TABLE */
        .compare-table { width: 100%; border-collapse: collapse; margin-top: 32px; border-radius: 16px; overflow: hidden; }
        .compare-table th {
          background: var(--forest);
          color: var(--mint);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 16px 20px;
          text-align: left;
          font-weight: 600;
        }
        .compare-table td {
          padding: 14px 20px;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--sand);
          color: #444;
          background: #fff;
        }
        .compare-table tr:last-child td { border-bottom: none; }
        .compare-table td:first-child { font-weight: 500; color: var(--forest); }

        /* PRICING CARD */
        .pricing-block {
          background: linear-gradient(135deg, var(--leaf) 0%, var(--forest) 100%);
          border-radius: 24px;
          padding: 48px;
          color: var(--cream);
          margin-top: 36px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .pricing-block h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #fff;
        }
        .pricing-block p { font-size: 0.95rem; line-height: 1.75; opacity: 0.85; font-weight: 300; }
        .price-display {
          text-align: center;
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .price-range {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: var(--mint);
          display: block;
        }
        .price-label { font-size: 0.85rem; opacity: 0.7; margin-top: 8px; letter-spacing: 0.5px; }
        .price-note { font-size: 0.75rem; opacity: 0.5; margin-top: 4px; }

        /* STANDARDS */
        .standards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
        .standard-card {
          background: #fff;
          border: 1px solid var(--sand);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.2s;
        }
        .standard-card:hover { border-color: var(--mint); box-shadow: 0 8px 32px rgba(45,122,79,0.1); }
        .standard-icon { font-size: 2rem; margin-bottom: 12px; }
        .standard-card h4 { font-size: 1.05rem; font-weight: 600; color: var(--forest); margin-bottom: 8px; }
        .standard-card p { font-size: 0.82rem; line-height: 1.6; color: #666; font-weight: 300; }

        /* NET ZERO LADDER */
        .ladder { margin-top: 32px; }
        .ladder-step {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px 24px;
          margin-bottom: 8px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid var(--sand);
          transition: all 0.2s;
        }
        .ladder-step:hover { background: var(--cream); border-color: var(--mint); }
        .ladder-step-num {
          min-width: 36px;
          height: 36px;
          background: var(--forest);
          color: var(--mint);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ladder-step-content h4 { font-size: 0.95rem; font-weight: 600; color: var(--forest); margin-bottom: 4px; }
        .ladder-step-content p { font-size: 0.85rem; color: #666; font-weight: 300; line-height: 1.5; }

        /* BUYERS SECTION */
        .buyers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
        .buyer-chip {
          background: var(--cream);
          border: 1.5px solid var(--sand);
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--forest);
          text-align: center;
          transition: all 0.2s;
        }
        .buyer-chip:hover { background: var(--forest); color: var(--mint); border-color: var(--forest); }

        /* FAQ */
        .faq { margin-top: 32px; }
        .faq-item {
          border-bottom: 1px solid var(--sand);
          padding: 24px 0;
        }
        .faq-q {
          font-size: 1rem;
          font-weight: 600;
          color: var(--forest);
          margin-bottom: 12px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .faq-q::before { content: 'Q'; color: var(--mint); font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; flex-shrink: 0; }
        .faq-a { font-size: 0.9rem; line-height: 1.7; color: #555; font-weight: 300; padding-left: 28px; }

        /* INDIA SECTION */
        .india-card {
          background: var(--sand);
          border-radius: 20px;
          padding: 40px;
          margin-top: 36px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .india-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: var(--forest);
          margin-bottom: 16px;
        }
        .india-card p { font-size: 0.9rem; line-height: 1.75; color: #555; font-weight: 300; }
        .india-points { list-style: none; }
        .india-points li {
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-size: 0.9rem;
          color: #444;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .india-points li::before { content: '✦'; color: var(--leaf); font-size: 0.7rem; margin-top: 3px; flex-shrink: 0; }

        /* GREENWASHING BLOCK */
        .green-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 32px;
        }
        .green-card {
          border-radius: 16px;
          padding: 28px;
        }
        .green-card.good { background: rgba(45,122,79,0.08); border: 1px solid rgba(45,122,79,0.2); }
        .green-card.bad { background: rgba(180,60,40,0.06); border: 1px solid rgba(180,60,40,0.15); }
        .green-card h4 { font-size: 1rem; font-weight: 600; margin-bottom: 16px; }
        .green-card.good h4 { color: var(--leaf); }
        .green-card.bad h4 { color: #b43c28; }
        .green-card ul { list-style: none; }
        .green-card ul li {
          font-size: 0.88rem;
          padding: 6px 0;
          color: #555;
          display: flex;
          gap: 8px;
          line-height: 1.5;
        }
        .green-card.good ul li::before { content: '✓'; color: var(--leaf); font-weight: 700; flex-shrink: 0; }
        .green-card.bad ul li::before { content: '✗'; color: #b43c28; font-weight: 700; flex-shrink: 0; }

        /* FUTURE */
        .future-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
        .future-item {
          background: #fff;
          border: 1px solid var(--sand);
          border-radius: 14px;
          padding: 24px;
        }
        .future-item h4 { font-size: 0.95rem; font-weight: 600; color: var(--forest); margin-bottom: 8px; }
        .future-item p { font-size: 0.85rem; color: #666; line-height: 1.6; font-weight: 300; }
        .future-dot {
          width: 8px; height: 8px;
          background: var(--mint);
          border-radius: 50%;
          margin-bottom: 12px;
        }

        /* TAKEAWAY */
        .takeaway {
          background: var(--forest);
          border-radius: 24px;
          padding: 56px;
          text-align: center;
          margin-top: 72px;
        }
        .takeaway h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          color: #fff;
          margin-bottom: 16px;
        }
        .takeaway p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.75; max-width: 600px; margin: 0 auto 32px; font-weight: 300; }
        .takeaway-pills { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .takeaway-pill {
          background: rgba(91,191,138,0.15);
          border: 1px solid rgba(91,191,138,0.3);
          color: var(--mint);
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* DIVIDER */
        .divider {
          width: 60px;
          height: 3px;
          background: var(--mint);
          border-radius: 99px;
          margin: 20px 0;
        }

        /* SOURCES */
        .sources { margin-top: 56px; padding-top: 32px; border-top: 1px solid var(--sand); }
        .sources h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 12px; }
        .sources a { display: block; font-size: 0.78rem; color: var(--leaf); text-decoration: none; margin-bottom: 6px; word-break: break-all; }
        .sources a:hover { text-decoration: underline; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; }
          .stat-strip { grid-template-columns: 1fr; gap: 32px; padding: 32px 24px; }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 24px; }
          .stat-item:last-child { border-bottom: none; }
          .steps, .types-grid, .standards-grid, .buyers-grid, .green-split, .future-grid, .india-card, .pricing-block { grid-template-columns: 1fr; }
          .pricing-block { padding: 32px 24px; }
          .takeaway { padding: 40px 24px; }
        }
      `}</style>

      <div className="page-wrapper">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-text">
            <div className="hero-badge">Climate Finance</div>
            <h1>Carbon<br /><span>Credits</span><br />Explained</h1>
            <p>
              Carbon credits are tradable certificates that represent the reduction, avoidance, or
              removal of one metric tonne of CO₂ or equivalent greenhouse gases from the atmosphere—
              a core market-based mechanism to fight climate change.
            </p>
          </div>

          {/* ── HERO IMAGE ── */}
          <div className="hero-image-slot">
            <img
              src="/carbon_credit.png"
              alt="Carbon Credits Explained"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px", display: "block" }}
            />
          </div>
        </section>

        {/* ── STAT STRIP ── */}
        <div className="stat-strip">
          <div className="stat-item">
            <span className="stat-num">1 t</span>
            <div className="stat-label">CO₂ per credit</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">$3–20</span>
            <div className="stat-label">Voluntary market price per credit</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">2070</span>
            <div className="stat-label">India's net-zero target year</div>
          </div>
        </div>

        {/* ── WHY IMPORTANT ── */}
        <section className="section">
          <div className="section-label">Overview</div>
          <h2 className="section-title">Why Are Carbon Credits Important?</h2>
          <div className="divider"></div>
          <p className="section-body">
            Carbon credits play a critical role in reducing global greenhouse gas emissions,
            financing climate-positive projects, enabling companies to meet climate targets
            cost-effectively, and driving investment into renewable energy, forestry, and waste
            management. They support compliance with national and international regulations and
            create financial incentives for emission reduction projects.
          </p>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section">
          <div className="section-label">Mechanism</div>
          <h2 className="section-title">How Do Carbon Credits Work?</h2>
          <div className="divider"></div>
          <div className="steps">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3>Emission Reduction Project</h3>
              <p>Projects like renewable energy, methane capture, waste-to-energy, and energy efficiency initiatives form the foundation of carbon credit generation.</p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h3>Measurement & Verification</h3>
              <p>Emission reductions are calculated using approved methodologies. Third-party auditors independently validate and verify all reductions.</p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h3>Issuance of Carbon Credits</h3>
              <p>Verified reductions are converted into carbon credits and registered on recognized carbon registries such as VCS and Gold Standard.</p>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <h3>Trading or Retirement</h3>
              <p>Companies buy carbon credits on the market. Credits are then retired—permanently removed from circulation—to offset their emissions.</p>
            </div>
          </div>
        </section>

        {/* ── TYPES ── */}
        <section className="section">
          <div className="section-label">Categories</div>
          <h2 className="section-title">Types of Carbon Credits</h2>
          <div className="divider"></div>
          <div className="types-grid">
            <div className="type-card compliance">
              <div className="type-tag">Compliance</div>
              <h3>Compliance Carbon Credits</h3>
              <p>Used in regulated carbon markets where emissions are capped by law. Participation is mandatory for covered entities.</p>
              <ul className="examples-list">
                <li>EU Emissions Trading System (EU ETS)</li>
                <li>India's Carbon Credit Trading Scheme (CCTS)</li>
                <li>California Cap-and-Trade Program</li>
              </ul>
            </div>
            <div className="type-card voluntary">
              <div className="type-tag">Voluntary</div>
              <h3>Voluntary Carbon Credits</h3>
              <p>Used by companies to meet voluntary climate commitments under standards like VCS and Gold Standard. Optional but widely adopted.</p>
              <ul className="examples-list">
                <li>Corporations with net-zero pledges</li>
                <li>Startups & SMEs</li>
                <li>Brands with ESG goals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="section">
          <div className="section-label">Comparison</div>
          <h2 className="section-title">Carbon Credit vs Carbon Offset</h2>
          <div className="divider"></div>
          <p className="section-body">
            Carbon offsets generate carbon credits, but not all offsets become tradable credits.
            Understanding the distinction is key to accurate climate accounting.
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Carbon Credit</th>
                <th>Carbon Offset</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nature</td>
                <td>Tradable unit</td>
                <td>Action or project</td>
              </tr>
              <tr>
                <td>Basis</td>
                <td>Market-based</td>
                <td>Project-based</td>
              </tr>
              <tr>
                <td>Primary use</td>
                <td>Used for trading</td>
                <td>Used for claiming neutrality</td>
              </tr>
              <tr>
                <td>Registration</td>
                <td>Verified & registered</td>
                <td>May or may not be tradable</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ── PRICING ── */}
        <section className="section">
          <div className="section-label">Market</div>
          <h2 className="section-title">Carbon Credit Pricing</h2>
          <div className="divider"></div>
          <div className="pricing-block">
            <div>
              <h3>How Much Does a Carbon Credit Cost?</h3>
              <p>
                Carbon credit prices vary based on the type of project, location, standard &
                registry, market demand, vintage year, and co-benefits such as social impact and
                biodiversity outcomes. Compliance markets are highly regulated and can differ
                significantly from voluntary markets.
              </p>
            </div>
            <div className="price-display">
              <span className="price-range">$3–$20</span>
              <div className="price-label">Voluntary Market (per credit)</div>
              <div className="price-note">Compliance markets: highly variable</div>
            </div>
          </div>
        </section>

        {/* ── WHO CAN BUY ── */}
        <section className="section">
          <div className="section-label">Buyers</div>
          <h2 className="section-title">Who Can Buy Carbon Credits?</h2>
          <div className="divider"></div>
          <p className="section-body">
            Carbon credits can be purchased by a wide range of entities for purposes including
            carbon neutrality, net-zero claims, ESG reporting, CSR & sustainability goals, and
            supply chain emissions (Scope 3).
          </p>
          <div className="buyers-grid">
            {["Corporates", "Manufacturers", "FMCG Brands", "IT & Service Companies", "Event Organizers", "Governments & Institutions"].map(b => (
              <div key={b} className="buyer-chip">{b}</div>
            ))}
          </div>
        </section>

        {/* ── NET ZERO ── */}
        <section className="section">
          <div className="section-label">Strategy</div>
          <h2 className="section-title">Carbon Credits and Net Zero</h2>
          <div className="divider"></div>
          <p className="section-body">
            Carbon credits are a supporting tool, not a replacement for internal emission reduction.
            The correct net-zero hierarchy prioritizes reducing emissions first, then using
            high-quality credits to offset what remains.
          </p>
          <div className="ladder">
            {[
              { title: "Measure Emissions", desc: "Conduct a thorough audit of all emission sources across scopes 1, 2, and 3." },
              { title: "Reduce Emissions Internally", desc: "Implement operational changes, efficiency upgrades, and cleaner technologies." },
              { title: "Avoid Emissions Through Cleaner Processes", desc: "Switch to renewable energy, low-carbon supply chains, and sustainable practices." },
              { title: "Offset Residual Emissions Using High-Quality Carbon Credits", desc: "Purchase verified credits for unavoidable emissions after all reduction efforts are exhausted." },
            ].map((s, i) => (
              <div key={i} className="ladder-step">
                <div className="ladder-step-num">{i + 1}</div>
                <div className="ladder-step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STANDARDS ── */}
        <section className="section">
          <div className="section-label">Integrity</div>
          <h2 className="section-title">Carbon Credit Standards & Registries</h2>
          <div className="divider"></div>
          <p className="section-body">
            High-quality carbon credits are issued under recognized standards that ensure
            additionality, permanence, no double counting, transparency, and third-party verification.
          </p>
          <div className="standards-grid">
            <div className="standard-card">
              <div className="standard-icon">🌿</div>
              <h4>Verra (VCS)</h4>
              <p>Verified Carbon Standard — one of the most widely used voluntary carbon market standards globally.</p>
            </div>
            <div className="standard-card">
              <div className="standard-icon">⭐</div>
              <h4>Gold Standard</h4>
              <p>Rigorous certification ensuring projects deliver real, measurable, and additional climate and development benefits.</p>
            </div>
            <div className="standard-card">
              <div className="standard-icon">📋</div>
              <h4>ICR</h4>
              <p>International Carbon Registry providing transparent and reliable credit issuance and retirement tracking.</p>
            </div>
          </div>
        </section>

        {/* ── INDIA ── */}
        <section className="section">
          <div className="section-label">India</div>
          <h2 className="section-title">Carbon Credit Trading in India</h2>
          <div className="divider"></div>
          <div className="india-card">
            <div>
              <h3>India's Carbon Credit Trading Scheme (CCTS)</h3>
              <p>
                India is developing its own Carbon Credit Trading Scheme (CCTS) under the Ministry
                of Power and Bureau of Energy Efficiency (BEE), aligned with India's net-zero 2070
                goal.
              </p>
            </div>
            <div>
              <ul className="india-points">
                <li>Focus on emission intensity reduction</li>
                <li>Domestic carbon market development</li>
                <li>Alignment with India's net-zero 2070 goal</li>
                <li>Participation from energy-intensive industries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── GREENWASHING ── */}
        <section className="section">
          <div className="section-label">Credibility</div>
          <h2 className="section-title">Are Carbon Credits Real or Greenwashing?</h2>
          <div className="divider"></div>
          <p className="section-body">
            Poor-quality credits and false claims lead to greenwashing—not the concept itself.
            Carbon credits are legitimate when used responsibly.
          </p>
          <div className="green-split">
            <div className="green-card good">
              <h4>✓ Credible Credits</h4>
              <ul>
                <li>Projects are independently verified</li>
                <li>Credits are transparently retired</li>
                <li>Claims are accurate and not misleading</li>
                <li>Emission reductions are prioritized first</li>
              </ul>
            </div>
            <div className="green-card bad">
              <h4>✗ Greenwashing Risk</h4>
              <ul>
                <li>Unverified or low-quality credits</li>
                <li>Misleading neutrality claims</li>
                <li>Credits used instead of actual reductions</li>
                <li>No transparent retirement or accounting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FUTURE ── */}
        <section className="section">
          <div className="section-label">Outlook</div>
          <h2 className="section-title">Future of Carbon Credits</h2>
          <div className="divider"></div>
          <div className="future-grid">
            {[
              { title: "Stricter Regulations", desc: "Governments and international bodies are tightening standards for credit quality and market integrity." },
              { title: "Higher Integrity Standards", desc: "Demand for removal-based credits over avoidance-based credits is growing rapidly." },
              { title: "AI-Driven MRV", desc: "Artificial intelligence is transforming Measurement, Reporting, and Verification processes for greater accuracy." },
              { title: "ESG Integration", desc: "Carbon credits are increasingly integrated with ESG reporting and supply-chain disclosures." },
            ].map((f) => (
              <div key={f.title} className="future-item">
                <div className="future-dot"></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="section-body" style={{ marginTop: "24px", fontStyle: "italic" }}>
            Carbon credits will increasingly become more regulated, more transparent, more expensive,
            and more outcome-driven as the global climate transition accelerates.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="section">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider"></div>
          <div className="faq">
            {[
              {
                q: "What is a carbon credit in simple words?",
                a: "A carbon credit is a tradable certificate that allows one tonne of carbon dioxide emissions released in the environment to be offset by reducing emissions elsewhere."
              },
              {
                q: "Are carbon credits legally required?",
                a: "Only in compliance markets. Voluntary markets are optional but widely used by companies seeking to meet ESG and climate commitments."
              },
              {
                q: "Can small businesses buy carbon credits?",
                a: "Yes. MSMEs and startups can buy carbon credits to achieve carbon neutrality and demonstrate sustainability credentials."
              },
              {
                q: "Are carbon credits taxable?",
                a: "Tax treatment varies by country and regulation. Consult your local tax authority or a financial advisor for jurisdiction-specific guidance."
              },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TAKEAWAY ── */}
        <div className="takeaway">
          <h2>Key Takeaway</h2>
          <p>
            Carbon credits are a powerful climate finance tool when used responsibly. They enable
            businesses and governments to act on climate change while funding real-world emission
            reduction and removal projects.
          </p>
          <div className="takeaway-pills">
            <span className="takeaway-pill">Support net-zero goals</span>
            <span className="takeaway-pill">Enable ESG compliance</span>
            <span className="takeaway-pill">Drive sustainable development</span>
            <span className="takeaway-pill">Accelerate the energy transition</span>
          </div>
        </div>

        {/* ── SOURCES ── */}
        <div className="sources">
          <h3>Sources</h3>
          <a href="https://en.wikipedia.org/wiki/Carbon_offsets_and_credits" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Carbon_offsets_and_credits</a>
          <a href="https://en.wikipedia.org/wiki/Verified_Carbon_Standard" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Verified_Carbon_Standard</a>
          <a href="https://www.reuters.com/sustainability/climate-energy/carbon-credit-standards-approval-extended-98-market-2024-05-02/" target="_blank" rel="noopener noreferrer">https://www.reuters.com/sustainability/climate-energy/carbon-credit-standards-approval-extended-98-market-2024-05-02/</a>
          <a href="https://www.spglobal.com/energy/en/pricing-benchmarks/our-methodology/subscriber-notes/071723-platts-introduces-reference-bases-for-voluntary-carbon-credit-assessments" target="_blank" rel="noopener noreferrer">https://www.spglobal.com/energy/en/pricing-benchmarks/our-methodology/subscriber-notes/071723-platts-introduces-reference-bases-for-voluntary-carbon-credit-assessments</a>
          <a href="https://edukemy.com/upsc-current-affairs/daily-current-affairs/implementation-of-the-plastic-waste-trading-scheme/22-07-2024" target="_blank" rel="noopener noreferrer">https://edukemy.com/upsc-current-affairs/daily-current-affairs/implementation-of-the-plastic-waste-trading-scheme/22-07-2024</a>
        </div>

      </div>
    </>
  );
}