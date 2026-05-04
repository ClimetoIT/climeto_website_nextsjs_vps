export const metadata = {
  title: "Scope 3 Emissions: The Biggest Blind Spot in Corporate Climate Strategy",
  description:
    "For most companies, Scope 3 emissions represent 70–90% of their total carbon footprint—yet remain under-measured and under-managed. Learn why it matters and how to act.",
  keywords: [
    "Scope 3 emissions",
    "corporate climate strategy",
    "ESG",
    "net zero",
    "carbon footprint",
    "value chain emissions",
    "sustainability reporting",
    "GHG Protocol",
    "TCFD",
    "ISSB",
    "supply chain sustainability",
  ],
  authors: [{ name: "Climeto Sustainable Services" }],
  openGraph: {
    title: "Scope 3 Emissions: The Biggest Blind Spot in Corporate Climate Strategy",
    description:
      "For most companies, Scope 3 emissions represent 70–90% of their total carbon footprint—yet remain under-measured and under-managed.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    authors: ["Climeto Sustainable Services"],
    tags: ["Scope 3", "ESG", "Net Zero", "Climate Strategy", "Sustainability"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scope 3 Emissions: The Biggest Blind Spot in Corporate Climate Strategy",
    description:
      "For most companies, Scope 3 emissions represent 70–90% of their carbon footprint—yet remain ignored. Here&apos;s why that must change.",
  },
  alternates: {
    canonical: "/blog/scope3-emissions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Scope 3 Emissions: The Biggest Blind Spot in Corporate Climate Strategy",
  description:
    "For most companies, Scope 3 emissions represent 70–90% of their total carbon footprint—yet remain under-measured and under-managed.",
  author: {
    "@type": "Organization",
    name: "Climeto Sustainable Services",
    url: "https://climeto.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Climeto Sustainable Services",
    url: "https://climeto.com",
  },
  datePublished: "2024-01-15T00:00:00.000Z",
  keywords:
    "Scope 3 emissions, corporate climate strategy, ESG, net zero, carbon footprint, value chain emissions",
  articleSection: "Sustainability",
  inLanguage: "en-US",
};

export default function Scope3BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Merriweather:ital,wght@0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <div className="page-root">
        {/* ══ ARTICLE BODY ══ */}
        <main className="article-wrap" itemProp="articleBody">
          <div className="article-intro">
            <p>
              In boardrooms, sustainability conversations are evolving fast—targets are being set, 
              disclosures are improving, and net zero commitments are becoming mainstream.
            </p>
            <p>
              Yet, one area continues to remain underestimated, under-measured, and often under-managed:
            </p>
            <div className="intro-highlight">
              <span className="emoji">👉</span> <strong>Scope 3 emissions</strong>
            </div>
            <p>
              For most companies, this is not just a gap. It’s the largest share of their 
              carbon footprint—and the hardest to control.
            </p>
          </div>

          {/* ── Section 1: What Are ── */}
          <section className="section" aria-labelledby="what-are">

            <h2 id="what-are" className="section-title">What Are Scope 3 Emissions?</h2>

            <p className="body-text">
              Under the Greenhouse Gas Protocol, emissions are classified into three categories:
            </p>

            <div className="scope-grid">
              {[
                {
                  num: "Scope 1",
                  icon: "🏭",
                  desc: "Direct emissions from owned operations",
                  color: "#4caf82",
                },
                {
                  num: "Scope 2",
                  icon: "⚡",
                  desc: "Indirect emissions from purchased energy",
                  color: "#2196a0",
                },
                {
                  num: "Scope 3",
                  icon: "🌐",
                  desc: "All other indirect emissions across the value chain",
                  color: "#1a6e3c",
                  highlight: true,
                },
              ].map((s) => (
                <div key={s.num} className={`scope-card ${s.highlight ? "scope-card--hl" : ""}`}
                  style={{ "--c": s.color }}>
                  <span className="scope-icon" aria-hidden="true">{s.icon}</span>
                  <strong className="scope-name">{s.num}</strong>
                  <p className="scope-desc">{s.desc}</p>
                  {s.highlight && <span className="scope-badge">Focus Area</span>}
                </div>
              ))}
            </div>

            <div className="featured-image-wrap">
              <img src="/scope3.png" alt="Scope 3 Emissions Overview" className="featured-image" />
            </div>

            <p className="body-text">Scope 3 includes emissions from:</p>

            <ul className="green-list">
              {[
                "Purchased goods and services",
                "Transportation and distribution",
                "Business travel",
                "Waste generated in operations",
                "Use of sold products",
                "End-of-life treatment",
              ].map((item) => (
                <li key={item}>
                  <span className="list-dot" aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="pullquote">
              <span className="quote-mark" aria-hidden="true">"</span>
              Everything that happens outside your direct control—but <strong>because of your business.</strong>
            </blockquote>
          </section>

          {/* ── Section 2: Largest Contributor ── */}
          <section className="section section-alt" aria-labelledby="largest">

            <h2 id="largest" className="section-title">Why Scope 3 Is the Largest Contributor</h2>
            <p className="body-text">
              Across industries, Scope 3 can account for <strong>70% to 90% of total emissions</strong>.
            </p>

            <div className="industry-row">
              {[
                {
                  industry: "FMCG",
                  icon: "🛒",
                  drivers: "Packaging + supply chain + product use",
                  pct: "85%",
                },
                {
                  industry: "Automotive",
                  icon: "🚗",
                  drivers: "Raw materials + product lifecycle (fuel/energy use)",
                  pct: "90%",
                },
                {
                  industry: "Electronics",
                  icon: "💻",
                  drivers: "Manufacturing + end-of-life disposal",
                  pct: "75%",
                },
              ].map((row) => (
                <div key={row.industry} className="industry-card">
                  <div className="industry-top">
                    <span className="industry-icon" aria-hidden="true">{row.icon}</span>
                    <strong className="industry-name">{row.industry}</strong>
                    <span className="industry-pct">{row.pct}</span>
                  </div>
                  <div className="industry-bar">
                    <div className="industry-bar-fill" style={{ width: row.pct }} />
                  </div>
                  <p className="industry-drivers">{row.drivers}</p>
                </div>
              ))}
            </div>

            <div className="callout-box">
              <span aria-hidden="true">💡</span>
              <p>A company can reduce its internal emissions significantly—and still leave the majority of its climate impact untouched.</p>
            </div>
          </section>

          {/* ── Section 3: Blind Spot ── */}
          <section className="section" aria-labelledby="blind-spot">

            <h2 id="blind-spot" className="section-title">Why It Remains a Blind Spot</h2>

            <div className="reasons-grid">
              {[
                {
                  n: "1",
                  icon: "📊",
                  title: "Data Complexity",
                  body: "Scope 3 requires data from suppliers, vendors, logistics partners, and customers—often across geographies and varying standards.",
                },
                {
                  n: "2",
                  icon: "🔗",
                  title: "Limited Control",
                  body: "Unlike Scope 1 and 2, companies don&apos;t own these emissions. They must rely on influence, collaboration, and procurement decisions.",
                },
                {
                  n: "3",
                  icon: "📏",
                  title: "Measurement Challenges",
                  body: "Many companies still depend on industry averages, emission factors, and estimates instead of primary data—creating accuracy gaps in reporting.",
                },
                {
                  n: "4",
                  icon: "🎯",
                  title: "Lack of Accountability",
                  body: "Scope 3 often sits outside operational KPIs, making it harder to track, manage, or incentivize internally.",
                },
              ].map((r) => (
                <div key={r.n} className="reason-card">
                  <div className="reason-header">
                    <span className="reason-icon" aria-hidden="true">{r.icon}</span>
                    <span className="reason-n" aria-hidden="true">0{r.n}</span>
                  </div>
                  <h3 className="reason-title">{r.title}</h3>
                  <p className="reason-body">{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Can't Be Ignored ── */}
          <section className="section section-alt" aria-labelledby="ignored">

            <h2 id="ignored" className="section-title">Why Scope 3 Can&apos;t Be Ignored Anymore</h2>

            <div className="drivers-list">
              {[
                {
                  icon: "📈",
                  color: "#1a6e3c",
                  title: "Investor Expectations",
                  body: "ESG-focused investors are increasingly asking: &ldquo;What about your value chain emissions?&rdquo;",
                },
                {
                  icon: "⚖️",
                  color: "#2196a0",
                  title: "Regulatory Direction",
                  body: "Global disclosure frameworks like TCFD and evolving standards from ISSB are pushing companies toward full value chain transparency.",
                },
                {
                  icon: "🎯",
                  color: "#4caf82",
                  title: "Net Zero Integrity",
                  body: "Without Scope 3, net zero claims risk being incomplete—and climate strategies lose credibility.",
                },
                {
                  icon: "🌍",
                  color: "#e67e22",
                  title: "Real Impact Lies in Scope 3",
                  body: "If the goal is actual emission reduction (not just reporting)—Scope 3 is where the biggest opportunities exist.",
                },
              ].map((d) => (
                <div key={d.title} className="driver-item" style={{ "--dc": d.color }}>
                  <div className="driver-icon-wrap">
                    <span aria-hidden="true">{d.icon}</span>
                  </div>
                  <div>
                    <h3 className="driver-title">{d.title}</h3>
                    <p className="driver-body" dangerouslySetInnerHTML={{ __html: d.body }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5: How To ── */}
          <section className="section" aria-labelledby="how-to">

            <h2 id="how-to" className="section-title">How Companies Can Start Addressing Scope 3</h2>

            <div className="steps-wrap">
              {[
                {
                  title: "Map the Value Chain",
                  body: "Identify the most material emission categories. Not all 15 categories will be equally relevant.",
                  icon: "🗺️",
                },
                {
                  title: "Prioritise High-Impact Areas",
                  body: "Focus on raw materials, logistics, and the product use phase—where the greatest volume sits.",
                  icon: "🎯",
                },
                {
                  title: "Engage Suppliers",
                  body: "Move from transactional relationships to collaborative sustainability partnerships—supplier data sharing, emission reduction targets, sustainable procurement policies.",
                  icon: "🤝",
                },
                {
                  title: "Improve Data Quality",
                  body: "Shift from secondary data to primary data: supplier-specific emissions, lifecycle assessments, and digital tracking tools.",
                  icon: "📊",
                },
                {
                  title: "Integrate Into Business Strategy",
                  body: "Scope 3 should not sit in sustainability teams alone. It must connect with procurement, operations, product design, and leadership KPIs.",
                  icon: "🏗️",
                },
              ].map((step, i) => (
                <div key={step.title} className="step-card">
                  <div className="step-left">
                    <div className="step-num-wrap">
                      <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    {i < 4 && <div className="step-connector" aria-hidden="true" />}
                  </div>
                  <div className="step-body-wrap">
                    <div className="step-icon-title">
                      <span className="step-icon" aria-hidden="true">{step.icon}</span>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <p className="step-body">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Strategic Opportunity ── */}
          <section className="section section-green" aria-labelledby="opportunity">

            <h2 id="opportunity" className="section-title section-title-white">The Strategic Opportunity</h2>
            <p className="body-text body-text-white">
              Scope 3 is often seen as a challenge. But for forward-looking companies, it&apos;s
              actually a <strong>competitive advantage</strong>—because it enables:
            </p>

            <div className="advantage-grid">
              {[
                { icon: "🔗", text: "More resilient supply chains" },
                { icon: "💰", text: "Lower long-term costs" },
                { icon: "📊", text: "Stronger ESG positioning" },
                { icon: "🌍", text: "Credible climate leadership" },
              ].map((a) => (
                <div key={a.text} className="advantage-card">
                  <span className="adv-icon" aria-hidden="true">{a.icon}</span>
                  <span className="adv-text">{a.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing ── */}
          <section className="closing" aria-label="Conclusion">
            <div className="closing-inner">
              <p>
                Scope 3 emissions are not just a reporting requirement. They are a reflection of how
                deeply a company understands its impact.
              </p>
              <p>
                Ignoring them may simplify short-term reporting—but addressing them defines{" "}
                <strong>long-term sustainability leadership.</strong>
              </p>

            </div>
          </section>
        </main>

        {/* ══ FOOTER ══ */}

      </div>

      <style>{`
        /* ── Design Tokens ── */
        :root {
          --green-dark:   #1a6e3c;
          --green-mid:    #2d8a54;
          --green-light:  #4caf82;
          --green-pale:   #e8f5ee;
          --green-faint:  #f3faf6;
          --teal:         #2196a0;
          --orange:       #e67e22;
          --text-dark:    #1a2e1e;
          --text-body:    #3d4f42;
          --text-muted:   #6b7f72;
          --border:       #d4e8db;
          --white:        #ffffff;
          --bg:           #f9fdf9;
          --font-head:    'Merriweather', Georgia, serif;
          --font-body:    'Nunito', 'Segoe UI', sans-serif;
          --radius-sm:    8px;
          --radius-md:    14px;
          --radius-lg:    20px;
          --shadow-sm:    0 2px 8px rgba(26,110,60,0.08);
          --shadow-md:    0 6px 24px rgba(26,110,60,0.12);
          --shadow-lg:    0 16px 48px rgba(26,110,60,0.15);
          --max-w:        820px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg);
          color: var(--text-body);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.75;
          -webkit-font-smoothing: antialiased;
        }

        /* ── PAGE ROOT ── */
        .page-root { min-height: 100vh; display: flex; flex-direction: column; }

        /* ══ NAVBAR ══ */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }
        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .logo-leaf { font-size: 1.4rem; }
        .logo-text {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--green-dark);
          letter-spacing: -0.03em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-links a {
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--green-dark); }
        .nav-cta {
          background: var(--green-dark) !important;
          color: var(--white) !important;
          padding: 8px 20px;
          border-radius: 999px;
          transition: background 0.2s !important;
        }
        .nav-cta:hover { background: var(--green-mid) !important; }

        /* ══ HERO ══ */
        .hero {
          position: relative;
          background: linear-gradient(160deg, var(--green-dark) 0%, #0f4a27 55%, #1a3d20 100%);
          color: var(--white);
          overflow: hidden;
          padding: 72px 24px 48px;
        }
        .hero-bg-leaves {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .leaf {
          position: absolute;
          font-size: 4rem;
          opacity: 0.07;
          user-select: none;
        }
        .leaf-1 { top: 10%; left: 5%; font-size: 6rem; transform: rotate(-20deg); }
        .leaf-2 { top: 60%; left: 2%; transform: rotate(15deg); }
        .leaf-3 { top: 15%; right: 8%; font-size: 5rem; transform: rotate(30deg); }
        .leaf-4 { bottom: 10%; right: 4%; font-size: 3rem; transform: rotate(-10deg); }

        .hero-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .breadcrumb {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
        }
        .breadcrumb a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .breadcrumb a:hover { color: rgba(255,255,255,0.9); }

        .tag-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
        }
        .tag-green { background: var(--green-light); color: var(--green-dark); }
        .tag-outline { border: 1px solid rgba(255,255,255,0.35); color: rgba(255,255,255,0.8); }

        .hero-title {
          font-family: var(--font-head);
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          font-weight: 700;
          line-height: 1.25;
          color: var(--white);
          margin-bottom: 20px;
        }
        .title-highlight {
          color: #7dd9a8;
          font-style: italic;
        }

        .hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.75);
          max-width: 640px;
          margin-bottom: 28px;
          line-height: 1.7;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
        }
        .meta-avatar {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }
        .meta-author { display: block; font-weight: 700; color: rgba(255,255,255,0.9); font-size: 0.9rem; }
        .meta-row { display: flex; align-items: center; gap: 8px; }
        .meta-sep { opacity: 0.4; }

        /* Stat circle */
        .hero-stat-wrap {
          max-width: var(--max-w);
          margin: 40px auto 0;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }
        .hero-stat {
          display: flex;
          align-items: center;
          gap: 28px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          padding: 28px 32px;
          flex-wrap: wrap;
        }
        .stat-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--green-light), #7dd9a8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 0 6px rgba(76,175,130,0.25);
        }
        .stat-pct {
          font-family: var(--font-head);
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--green-dark);
          line-height: 1;
        }
        .stat-sub {
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--green-dark);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }
        .stat-caption {
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
          max-width: 380px;
          line-height: 1.6;
        }

        /* ══ ARTICLE ══ */
        .article-wrap {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 24px 80px;
          flex: 1;
        }

        .article-intro {
          padding: 40px 0 20px;
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-body);
        }
        .article-intro p {
          margin-bottom: 20px;
        }
        .intro-highlight {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.4rem;
          color: var(--green-dark);
          margin: 24px 0;
          padding: 16px 20px;
          background: var(--green-pale);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--green-mid);
        }
        .intro-highlight .emoji { font-size: 1.6rem; }

        .featured-image-wrap {
          width: 100%;
          margin: 24px 0 40px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
        }
        .featured-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Sections ── */
        .section { padding: 60px 0; border-bottom: 1px solid var(--border); }
        .section:first-of-type { padding-top: 20px; }
        .section-alt { background: transparent; }
        .section:last-of-type { border-bottom: none; }


        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.4rem, 3.5vw, 1.9rem);
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
          line-height: 1.3;
          position: relative;
          padding-left: 16px;
        }
        .section-title::before {
          content: '';
          position: absolute;
          left: 0; top: 4px;
          width: 4px;
          height: calc(100% - 8px);
          background: var(--green-light);
          border-radius: 4px;
        }

        .body-text { color: var(--text-body); margin-bottom: 24px; font-size: 1rem; }

        /* ── Scope cards ── */
        .scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
          margin: 24px 0 28px;
        }
        .scope-card {
          padding: 22px;
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          border-top: 4px solid var(--c, var(--green-light));
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }
        .scope-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .scope-card--hl {
          background: var(--green-faint);
          border-color: var(--green-light);
        }
        .scope-icon { font-size: 1.8rem; display: block; margin-bottom: 10px; }
        .scope-name { font-size: 1rem; font-weight: 800; color: var(--text-dark); display: block; margin-bottom: 6px; }
        .scope-desc { font-size: 0.875rem; color: var(--text-muted); margin: 0; }
        .scope-badge {
          position: absolute;
          top: 12px; right: 12px;
          background: var(--green-dark);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 999px;
        }

        /* ── Green list ── */
        .green-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
          margin: 16px 0 28px;
        }
        .green-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: var(--green-faint);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .list-dot { color: var(--green-light); font-size: 0.6rem; flex-shrink: 0; }

        /* ── Pullquote ── */
        .pullquote {
          position: relative;
          padding: 24px 28px 24px 48px;
          background: var(--green-pale);
          border-left: 4px solid var(--green-mid);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin: 24px 0 0;
          font-size: 1.05rem;
          color: var(--text-dark);
          font-style: italic;
        }
        .quote-mark {
          position: absolute;
          left: 14px; top: 12px;
          font-size: 2.5rem;
          color: var(--green-light);
          font-family: var(--font-head);
          line-height: 1;
          font-style: normal;
        }

        /* ── Industry cards ── */
        .industry-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: 24px 0 20px;
        }
        .industry-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          box-shadow: var(--shadow-sm);
        }
        .industry-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .industry-icon { font-size: 1.5rem; }
        .industry-name { font-weight: 800; color: var(--text-dark); font-size: 1rem; flex: 1; }
        .industry-pct {
          font-family: var(--font-head);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--green-dark);
        }
        .industry-bar {
          height: 6px;
          background: var(--green-pale);
          border-radius: 999px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .industry-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--green-light), var(--green-dark));
          border-radius: 999px;
        }
        .industry-drivers { font-size: 0.875rem; color: var(--text-muted); margin: 0; }

        /* ── Callout box ── */
        .callout-box {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px 22px;
          background: #fff9f0;
          border: 1.5px solid #f0d4b0;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          color: var(--text-body);
        }
        .callout-box span { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
        .callout-box p { margin: 0; }

        /* ── Reasons grid ── */
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        .reason-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .reason-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .reason-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .reason-icon { font-size: 1.6rem; }
        .reason-n {
          font-family: var(--font-head);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--green-pale);
          line-height: 1;
        }
        .reason-title { font-weight: 800; font-size: 1rem; color: var(--text-dark); margin-bottom: 8px; }
        .reason-body { font-size: 0.875rem; color: var(--text-muted); margin: 0; line-height: 1.65; }

        /* ── Drivers list ── */
        .drivers-list { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
        .driver-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 20px 22px;
          background: var(--white);
          border: 1.5px solid var(--border);
          border-left: 4px solid var(--dc, var(--green-mid));
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s;
        }
        .driver-item:hover { box-shadow: var(--shadow-md); }
        .driver-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--green-faint);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .driver-title { font-weight: 800; color: var(--text-dark); margin-bottom: 4px; font-size: 0.95rem; }
        .driver-body { font-size: 0.875rem; color: var(--text-muted); margin: 0; line-height: 1.6; }

        /* ── Steps ── */
        .steps-wrap { margin-top: 24px; }
        .step-card {
          display: flex;
          gap: 0;
          margin-bottom: 0;
        }
        .step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 56px;
          flex-shrink: 0;
        }
        .step-num-wrap {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--green-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-num {
          font-weight: 800;
          font-size: 0.8rem;
          color: white;
          font-family: var(--font-body);
        }
        .step-connector {
          width: 2px;
          flex: 1;
          min-height: 32px;
          background: var(--border);
          margin: 4px 0;
        }
        .step-body-wrap {
          padding: 0 0 36px 20px;
          flex: 1;
        }
        .step-icon-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          margin-top: 8px;
        }
        .step-icon { font-size: 1.3rem; }
        .step-title { font-weight: 800; font-size: 1rem; color: var(--text-dark); }
        .step-body { font-size: 0.9rem; color: var(--text-muted); margin: 0; line-height: 1.65; }

        /* ── Strategic Opportunity (green section) ── */
        .section-green {
          background: linear-gradient(135deg, var(--green-dark) 0%, #0f4a27 100%);
          border-radius: var(--radius-lg);
          padding: 52px 44px;
          margin: 40px 0;
          border: none;
        }

        .section-title-white {
          color: white;
        }
        .section-title-white::before { background: var(--green-light); }
        .body-text-white { color: rgba(255,255,255,0.8); }

        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 14px;
          margin-top: 28px;
        }
        .advantage-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 22px 16px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--radius-md);
          text-align: center;
          transition: background 0.2s;
          cursor: default;
        }
        .advantage-card:hover { background: rgba(255,255,255,0.18); }
        .adv-icon { font-size: 1.8rem; }
        .adv-text { font-size: 0.875rem; font-weight: 700; color: rgba(255,255,255,0.9); line-height: 1.4; }

        /* ── Closing ── */
        .closing {
          padding: 52px 0 0;
        }
        .closing-inner {
          background: var(--green-pale);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 44px;
          text-align: center;
        }
        .closing-inner p {
          font-size: 1.1rem;
          color: var(--text-body);
          margin-bottom: 16px;
          line-height: 1.8;
        }
        .closing-inner p:last-of-type { margin-bottom: 0; }



        /* ── Responsive ── */
        @media (max-width: 640px) {
          .hero { padding: 52px 20px 32px; }
          .hero-stat { flex-direction: column; gap: 16px; }
          .stat-circle { width: 110px; height: 110px; }
          .stat-pct { font-size: 1.3rem; }
          .article-wrap { padding: 0 20px 60px; }
          .section-green { padding: 36px 24px; }
          .closing-inner { padding: 32px 24px; }

          .scope-grid { grid-template-columns: 1fr; }
          .reasons-grid { grid-template-columns: 1fr; }
          .advantage-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}