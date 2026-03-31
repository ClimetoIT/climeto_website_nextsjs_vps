"use client";

import Head from "next/head";

export default function WaterPollutionBlog() {
  return (
    <>
      <Head>
        <title>Consequences of Water Pollution on Human Health</title>
        <meta
          name="description"
          content="A Growing Global Crisis — how polluted water threatens human health worldwide."
        />

      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f5f2eb;
          color: #1a1a1a;
          font-family: 'Times New Roman', Times, serif;
        }

        .page-wrapper {
          min-height: 100vh;
          background: #f5f2eb;
        }

        /* TOP BAR */
        .topbar {
          border-bottom: 1px solid #c8bfa8;
          padding: 14px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f5f2eb;
        }
        .topbar-label {
          font-family: 'Times New Roman', Times, serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7a6e5f;
        }
        .topbar-date {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9c8f7d;
        }

        /* HERO HEADER */
        .hero {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 32px 48px;
          border-bottom: 1px solid #c8bfa8;
        }
        .hero-category {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #2a6b6b;
          border: 1px solid #2a6b6b;
          padding: 4px 12px;
          margin-bottom: 28px;
        }
        .hero-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.12;
          color: #0f1f1f;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .hero-subtitle {
          font-family: 'Times New Roman', Times, serif;
          font-style: italic;
          font-size: 20px;
          color: #5a5040;
          margin-bottom: 36px;
          line-height: 1.5;
        }
        .hero-meta {
          display: flex;
          gap: 32px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9c8f7d;
        }

        /* IMAGE BLOCK */
        .image-block {
          max-width: 860px;
          margin: 0 auto;
          padding: 40px 32px;
        }

        .image-caption {
          margin-top: 10px;
          font-size: 12px;
          color: #9c8f7d;
          font-style: italic;
          text-align: center;
        }

        /* ARTICLE BODY */
        .article-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 80px;
        }

        /* Intro paragraph */
        .intro-text {
          font-size: 18px;
          line-height: 1.85;
          color: #2e2e2e;
          border-left: 3px solid #2a6b6b;
          padding-left: 24px;
          margin-bottom: 32px;
        }

        /* Section heading */
        .section-label {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2a6b6b;
          margin-bottom: 8px;
        }
        .section-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f1f1f;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        /* Body text */
        .body-text {
          font-size: 16px;
          line-height: 1.9;
          color: #333;
          margin-bottom: 20px;
          font-weight: 300;
        }

        /* Divider */
        .section-divider {
          border: none;
          border-top: 1px solid #c8bfa8;
          margin: 48px 0;
        }

        /* Pull quote */
        .pull-quote {
          font-family: 'Times New Roman', Times, serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.6;
          color: #1a3a3a;
          border-top: 2px solid #2a6b6b;
          border-bottom: 2px solid #2a6b6b;
          padding: 24px 0;
          margin: 40px 0;
          text-align: center;
        }

        /* Inline lists */
        .content-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 24px;
        }
        .content-list li {
          font-size: 15px;
          line-height: 1.7;
          color: #3a3a3a;
          padding: 6px 0 6px 20px;
          position: relative;
          font-weight: 300;
        }
        .content-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #2a6b6b;
          font-weight: 600;
        }

        /* Sub-heading inside section */
        .sub-heading {
          font-family: 'Times New Roman', Times, serif;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 28px 0 10px;
          letter-spacing: 0.02em;
        }

        /* Source links */
        .sources-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }
        .source-link {
          font-size: 13px;
          color: #2a6b6b;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.02em;
        }
        .source-link:hover { text-decoration: underline; }

        /* Conclusion box */
        .conclusion-box {
          background: #1a3a3a;
          color: #e8e0d0;
          padding: 40px 40px;
          margin: 48px 0 0;
        }
        .conclusion-box .section-label { color: #6bb5b5; }
        .conclusion-box .section-title { color: #f0ebe0; }
        .conclusion-box .body-text { color: #c8bfa8; font-size: 15px; }

        @media (max-width: 640px) {
          .topbar { padding: 14px 20px; }
          .hero, .image-block, .article-body { padding-left: 20px; padding-right: 20px; }
          .hero { padding-top: 40px; }
          .conclusion-box { padding: 28px 20px; }
        }
      `}</style>

      <div className="page-wrapper">

        {/* TOP BAR */}
        <div className="topbar">
          <span className="topbar-label">Global Health · Environment</span>
          <span className="topbar-date">2025 · Special Report</span>
        </div>

        {/* HERO */}
        <header className="hero">
          <span className="hero-category">Public Health</span>
          <h1 className="hero-title">
            Consequences of Water Pollution on Human Health: A Growing Global Crisis
          </h1>
          <p className="hero-subtitle">A Growing Global Crisis</p>
          <div className="hero-meta">
            <span>📖 12 min read</span>
            <span>🌍 Global Perspective</span>
          </div>
        </header>

        {/* IMAGE */}
        <div className="image-block">
          <img
            src="/water_pollution.png"
            alt="Consequences of Water Pollution on Human Health"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <p className="image-caption">Water pollution poses a severe and growing threat to human health worldwide.</p>
        </div>

        {/* ARTICLE BODY */}
        <article className="article-body">

          {/* Intro */}
          <p className="intro-text">
            Water is fundamental to life—but today, polluted water has become one of the biggest threats to human health worldwide. From contaminated drinking water to polluted rivers, lakes, and groundwater, water pollution directly and indirectly affects millions of people every year.
          </p>
          <p className="body-text">
            According to global health estimates, unsafe water and poor sanitation contribute to hundreds of thousands of preventable deaths annually, especially in developing economies. The consequences extend far beyond short-term illness, impacting long-term health, productivity, and quality of life.
          </p>
          <p className="body-text">
            This blog explores the major consequences of water pollution on human health, the pollutants responsible, and why addressing water contamination is critical for sustainable development.
          </p>

          <hr className="section-divider" />

          {/* What Is Water Pollution */}
          <div className="section-label">Foundation</div>
          <h2 className="section-title">What Is Water Pollution?</h2>
          <p className="body-text">
            Water pollution occurs when harmful substances—chemical, biological, or physical—enter water bodies, making the water unsafe for drinking, cooking, bathing, agriculture, or industrial use.
          </p>
          <p className="sub-heading">Common Sources of Water Pollution</p>
          <ul className="content-list">
            <li>Industrial effluents and chemical discharge</li>
            <li>Untreated sewage and wastewater</li>
            <li>Agricultural runoff (fertilizers and pesticides)</li>
            <li>Plastic waste and microplastics</li>
            <li>Heavy metals from mining and manufacturing</li>
            <li>Oil spills and urban stormwater runoff</li>
          </ul>

          <hr className="section-divider" />

          {/* Section 1 */}
          <div className="section-label">Consequence 01</div>
          <h2 className="section-title">Waterborne Diseases and Infections</h2>
          <p className="body-text">
            One of the most immediate and severe impacts of water pollution is the spread of waterborne diseases.
            Contaminated water often contains bacteria, viruses, and parasites such as:
          </p>
          <ul className="content-list">
            <li>E. coli</li>
            <li>Vibrio cholerae</li>
            <li>Salmonella</li>
            <li>Giardia</li>
          </ul>
          <p className="sub-heading">Health Impacts:</p>
          <ul className="content-list">
            <li>Diarrhea and dehydration</li>
            <li>Cholera and typhoid fever</li>
            <li>Hepatitis A and E</li>
            <li>Dysentery</li>
          </ul>
          <p className="body-text">
            Children, elderly individuals, and immunocompromised populations are the most vulnerable. Repeated exposure can lead to chronic malnutrition and weakened immunity, especially in children.
          </p>

          <hr className="section-divider" />

          {/* Section 2 */}
          <div className="section-label">Consequence 02</div>
          <h2 className="section-title">Long-Term Exposure to Toxic Chemicals</h2>
          <p className="body-text">
            Industrial and agricultural pollution introduces toxic chemicals into water systems, which accumulate in the human body over time.
          </p>
          <p className="sub-heading">Key Pollutants:</p>
          <ul className="content-list">
            <li>Heavy metals (lead, mercury, arsenic, cadmium)</li>
            <li>Pesticides and herbicides</li>
            <li>Industrial solvents</li>
          </ul>
          <p className="sub-heading">Health Consequences:</p>
          <ul className="content-list">
            <li>Neurological disorders</li>
            <li>Kidney and liver damage</li>
            <li>Developmental delays in children</li>
            <li>Hormonal and endocrine disruption</li>
          </ul>
          <p className="body-text">
            For example, arsenic-contaminated groundwater has been linked to skin lesions, cardiovascular disease, and increased cancer risk.
          </p>

          <hr className="section-divider" />

          {/* Section 3 */}
          <div className="section-label">Consequence 03</div>
          <h2 className="section-title">Increased Cancer Risk</h2>
          <p className="body-text">Certain water pollutants are known carcinogens.</p>
          <p className="body-text">Long-term consumption of polluted water containing:</p>
          <ul className="content-list">
            <li>Arsenic</li>
            <li>Nitrates</li>
            <li>Industrial by-products</li>
          </ul>
          <p className="body-text">can significantly increase the risk of:</p>
          <ul className="content-list">
            <li>Bladder cancer</li>
            <li>Liver cancer</li>
            <li>Skin cancer</li>
            <li>Gastrointestinal cancers</li>
          </ul>
          <p className="body-text">
            The risk is especially high in regions where water quality monitoring and treatment infrastructure is weak.
          </p>

          <div className="pull-quote">
            "The consequences of water pollution on human health are severe, far-reaching, and preventable."
          </div>

          <hr className="section-divider" />

          {/* Section 4 */}
          <div className="section-label">Consequence 04</div>
          <h2 className="section-title">Reproductive and Developmental Health Issues</h2>
          <p className="body-text">Water pollution affects not only individuals but future generations.</p>
          <p className="sub-heading">Impacts Include:</p>
          <ul className="content-list">
            <li>Reduced fertility</li>
            <li>Pregnancy complications</li>
            <li>Low birth weight</li>
            <li>Birth defects</li>
          </ul>
          <p className="body-text">
            Endocrine-disrupting chemicals found in polluted water can interfere with hormonal systems, affecting reproductive health in both men and women.
          </p>

          <hr className="section-divider" />

          {/* Section 5 */}
          <div className="section-label">Consequence 05</div>
          <h2 className="section-title">Neurological and Cognitive Disorders</h2>
          <p className="body-text">Heavy metals like lead and mercury are particularly harmful to the nervous system.</p>
          <p className="sub-heading">Effects on Human Health:</p>
          <ul className="content-list">
            <li>Learning disabilities in children</li>
            <li>Reduced IQ and memory loss</li>
            <li>Behavioral problems</li>
            <li>Neurodegenerative conditions</li>
          </ul>
          <p className="body-text">
            Children exposed to polluted water during early development face irreversible cognitive and neurological damage.
          </p>

          <hr className="section-divider" />

          {/* Section 6 */}
          <div className="section-label">Consequence 06</div>
          <h2 className="section-title">Skin and Eye Disorders</h2>
          <p className="body-text">Using polluted water for bathing, washing, or daily hygiene can lead to:</p>
          <ul className="content-list">
            <li>Skin rashes and infections</li>
            <li>Dermatitis</li>
            <li>Eye irritation and infections</li>
          </ul>
          <p className="body-text">
            In areas with limited access to clean water, these conditions often go untreated, worsening overall health outcomes.
          </p>

          <hr className="section-divider" />

          {/* Section 7 */}
          <div className="section-label">Consequence 07</div>
          <h2 className="section-title">Indirect Health Impacts Through the Food Chain</h2>
          <p className="body-text">Water pollution doesn't stop at drinking water—it enters the food system.</p>
          <p className="sub-heading">Pollutants accumulate in:</p>
          <ul className="content-list">
            <li>Fish and seafood</li>
            <li>Crops irrigated with polluted water</li>
          </ul>
          <p className="body-text">
            When humans consume contaminated food, toxins bioaccumulate in the body, leading to long-term health risks even if drinking water appears safe.
          </p>

          <hr className="section-divider" />

          {/* Social & Economic */}
          <div className="section-label">Wider Impact</div>
          <h2 className="section-title">Social and Economic Consequences of Water Pollution</h2>
          <p className="body-text">Beyond physical health, water pollution creates wider societal impacts:</p>
          <ul className="content-list">
            <li>Increased healthcare costs</li>
            <li>Loss of productivity due to illness</li>
            <li>Reduced access to safe drinking water</li>
            <li>Greater inequality affecting low-income communities</li>
          </ul>
          <p className="body-text">
            Communities dependent on polluted water sources often face cycles of poverty and poor health, making water pollution both a public health and development challenge.
          </p>

          <hr className="section-divider" />

          {/* Prevention */}
          <div className="section-label">Solutions</div>
          <h2 className="section-title">Why Preventing Water Pollution Is a Public Health Priority</h2>
          <p className="body-text">
            Addressing water pollution is not just an environmental issue—it is a human health imperative.
          </p>
          <p className="sub-heading">Key Solutions Include:</p>
          <ul className="content-list">
            <li>Strengthening wastewater treatment systems</li>
            <li>Enforcing industrial discharge regulations</li>
            <li>Promoting responsible agricultural practices</li>
            <li>Reducing plastic and chemical pollution</li>
            <li>Encouraging corporate accountability and compliance</li>
          </ul>
          <p className="body-text">
            Clean water access directly supports public health, economic stability, and sustainable development goals.
          </p>

          {/* Conclusion */}
          <div className="conclusion-box">
            <div className="section-label">Conclusion</div>
            <h2 className="section-title">A Commitment to Human Dignity</h2>
            <p className="body-text">
              The consequences of water pollution on human health are severe, far-reaching, and preventable. From infectious diseases to chronic illnesses and long-term developmental harm, polluted water undermines the very foundation of human well-being.
            </p>
            <p className="body-text" style={{ marginTop: "16px" }}>
              Protecting water resources requires collective action—from policymakers, industries, communities, and individuals. Ensuring clean, safe water is not just an environmental responsibility—it is a commitment to human health, dignity, and a sustainable future.
            </p>
          </div>

          {/* Sources */}
          <hr className="section-divider" />
          <div className="section-label">References</div>
          <h2 className="section-title" style={{ fontSize: "20px", marginBottom: "12px" }}>Further Reading</h2>
          <div className="sources-grid">
            <a
              href="https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health"
              className="source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ WHO — Water, Sanitation and Health
            </a>
            <a
              href="https://cpcb.nic.in/water-pollution/"
              className="source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ CPCB — Water Pollution (India)
            </a>
          </div>

        </article>
      </div>
    </>
  );
}