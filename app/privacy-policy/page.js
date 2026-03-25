"use client";
import { useState } from "react";

const sections = [
    { id: "contact", title: "Data Fiduciary and Contact Details", number: "1" },
    { id: "data-collected", title: "Personal Data We Collect", number: "2" },
    { id: "minimization", title: "Data Minimization and Purpose Limitation", number: "4" },
    { id: "disclosure", title: "Disclosure and Sharing of Personal Data", number: "6" },
    { id: "retention", title: "Data Retention", number: "7" },
    { id: "rights", title: "Your Rights as a Data Principal", number: "8" },
    { id: "security", title: "Data Security", number: "9" },
    { id: "cross-border", title: "Cross-Border Data Transfers", number: "11" },
    { id: "children", title: "Children's Privacy", number: "12" },
    { id: "updates", title: "Policy Updates", number: "13" },
];

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState(null);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green-primary: #2d7a4f;
          --green-dark: #1a5235;
          --green-light: #e8f5ee;
          --green-mid: #4aaa6e;
          --green-accent: #6fcf97;
          --text-dark: #1a2e23;
          --text-body: #3d5044;
          --text-muted: #6b8074;
          --border: #cce4d4;
          --white: #ffffff;
          --bg-page: #f7fbf9;
          --shadow-sm: 0 1px 3px rgba(45,122,79,0.08);
          --shadow-md: 0 4px 16px rgba(45,122,79,0.12);
          --radius: 12px;
          --radius-lg: 20px;
        }

        body {
          font-family: 'Nunito Sans', sans-serif;
          background: var(--bg-page);
          color: var(--text-body);
          line-height: 1.7;
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, var(--green-dark) 0%, var(--green-primary) 55%, var(--green-mid) 100%);
          padding: 64px 24px 56px; position: relative; overflow: hidden;
          border-radius: var(--radius-lg);
        }
        .hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }
        .hero::after {
          content: ''; position: absolute; bottom: -40px; left: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }
        .hero-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          padding: 5px 14px; border-radius: 20px; margin-bottom: 20px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 52px); font-weight: 700;
          color: white; line-height: 1.15; margin-bottom: 16px; letter-spacing: -0.5px;
        }
        .hero-sub {
          color: rgba(255,255,255,0.8); font-size: 16px;
          max-width: 660px; line-height: 1.65; margin-bottom: 28px;
        }
        .hero-chips { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-chip {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; padding: 8px 16px;
        }
        .hero-chip-val { font-size: 13px; font-weight: 700; color: white; }
        .hero-chip-label { font-size: 11px; color: rgba(255,255,255,0.6); }

        /* LAYOUT */
        .layout {
          max-width: 1200px; margin: 0 auto;
          padding: 48px 24px 80px;
          display: grid; grid-template-columns: 260px 1fr;
          gap: 40px; align-items: start;
        }
        @media (max-width: 900px) {
          .layout { grid-template-columns: 1fr; }
          .sidebar { display: none; }
        }

        /* SIDEBAR */
        .sidebar {
          position: sticky; top: 88px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px; box-shadow: var(--shadow-sm);
          max-height: calc(100vh - 120px); overflow-y: auto;
        }
        .sidebar-title {
          font-size: 11px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1.2px;
          color: var(--green-primary); margin-bottom: 16px;
          padding-bottom: 12px; border-bottom: 2px solid var(--green-light);
        }
        .sidebar-link {
          display: flex; align-items: center; gap: 8px;
          width: 100%; padding: 8px 10px;
          font-size: 13px; font-weight: 600;
          color: var(--text-body); border-radius: 8px;
          cursor: pointer; transition: all 0.2s;
          border: none; background: none; text-align: left; margin-bottom: 2px;
        }
        .sidebar-link:hover, .sidebar-link.active {
          background: var(--green-light); color: var(--green-primary);
        }
        .sidebar-link.active { font-weight: 700; border-left: 3px solid var(--green-primary); padding-left: 7px; }
        .sidebar-num {
          min-width: 22px; height: 22px; border-radius: 50%;
          font-size: 10px; font-weight: 700;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          background: var(--green-light); color: var(--text-muted);
          transition: all 0.2s;
        }
        .sidebar-link.active .sidebar-num,
        .sidebar-link:hover .sidebar-num {
          background: var(--green-primary); color: white;
        }

        /* MAIN CONTENT */
        .section-block { margin-bottom: 48px; scroll-margin-top: 90px; }
        .section-header-row {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px;
        }
        .section-num-badge {
          min-width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, var(--green-primary), var(--green-mid));
          color: white; display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; flex-shrink: 0; margin-top: 2px;
        }
        .section-title {
          font-size: 20px; font-weight: 700; color: var(--text-dark);
          margin: 0; line-height: 1.3; padding-top: 6px;
          font-family: 'Nunito Sans', sans-serif;
        }
        .section-title.no-num { padding-top: 0; }
        .section-body-wrap { padding-left: 50px; }
        .section-body-wrap.no-num { padding-left: 0; }

        p.para {
          font-size: 15px; line-height: 1.8;
          color: var(--text-body); margin: 0 0 12px 0;
        }
        p.para:last-child { margin-bottom: 0; }

        .bullet-list { margin: 12px 0; padding-left: 0; list-style: none; }
        .bullet-list li {
          display: flex; gap: 10px; margin-bottom: 8px;
          font-size: 15px; line-height: 1.7; color: var(--text-body);
        }
        .bullet-dot {
          margin-top: 8px; min-width: 6px; height: 6px;
          border-radius: 50%; background: var(--green-accent);
          display: inline-block; flex-shrink: 0;
        }

        .info-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
        .info-table td {
          padding: 10px 16px 10px 0;
          border-bottom: 1px solid var(--border);
          vertical-align: top; color: var(--text-body);
        }
        .info-table td:first-child {
          color: var(--text-muted); font-weight: 600;
          white-space: nowrap; width: 35%;
        }

        .subsection { margin-bottom: 20px; }
        .subsection h3 {
          font-size: 15px; font-weight: 700;
          color: var(--text-dark); margin: 0 0 8px 0;
        }

        .divider { height: 1px; background: var(--border); margin: 0 0 40px 0; }

        .intro-banner {
          background: linear-gradient(135deg, rgba(45,122,79,0.08), rgba(74,170,110,0.05));
          border: 1px solid rgba(45,122,79,0.2);
          border-radius: var(--radius-lg); padding: 28px 32px; margin-bottom: 40px;
        }
        .banner-tag {
          font-size: 11px; font-weight: 700; color: var(--green-primary);
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
        }
        .banner-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 700;
          color: var(--text-dark); margin: 0 0 10px 0; line-height: 1.2;
        }
        .banner-sub {
          font-size: 15px; color: var(--text-muted);
          margin: 0 0 16px 0; line-height: 1.6;
        }
        .banner-chips { display: flex; gap: 12px; flex-wrap: wrap; }
        .banner-chip {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px; padding: 8px 14px;
        }
        .banner-chip-val { font-size: 13px; font-weight: 700; color: var(--text-dark); }
        .banner-chip-label { font-size: 11px; color: var(--text-muted); }

        .footer-note {
          margin-top: 40px; padding: 20px 24px;
          background: var(--green-light);
          border-radius: var(--radius); border: 1px solid var(--border);
          text-align: center;
        }
        .footer-note p { font-size: 13px; color: var(--text-muted); margin: 0; line-height: 1.6; }

        .consent-banner {
          background: var(--white);
          border: 1px solid var(--green-accent);
          border-left: 4px solid var(--green-primary);
          border-radius: 8px;
          padding: 14px 18px;
          font-size: 13.5px;
          color: var(--text-dark);
          font-weight: 600;
          margin-top: 16px;
        }
` }} />


            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-tag">
                        <span>🔒</span> Legal &amp; Compliance
                    </div>
                    <h1>Privacy Policy</h1>
                    <p className="hero-sub">
                        This Privacy Policy describes how Climeto Sustainable Services
                        Private Limited collects, uses, stores, and protects your personal
                        data. As a Data Fiduciary, Climeto is committed to processing
                        personal data lawfully, fairly, and transparently.
                    </p>
                    <div className="hero-chips">
                        {[["Indore, MP", "Jurisdiction"], ["2025", "Effective Year"], ["English", "Language"]].map(([val, label]) => (
                            <div key={label} className="hero-chip">
                                <div className="hero-chip-val">{val}</div>
                                <div className="hero-chip-label">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LAYOUT */}
            <div className="layout">
                {/* SIDEBAR */}
                <aside className="sidebar">
                    <div className="sidebar-title">Table of Contents</div>
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            className={`sidebar-link${activeSection === s.id ? " active" : ""}`}
                            onClick={() => scrollTo(s.id)}
                        >
                            {s.number && <span className="sidebar-num">{s.number}</span>}
                            <span style={{ lineHeight: 1.3 }}>{s.title}</span>
                        </button>
                    ))}
                </aside>

                {/* MAIN */}
                <main>
                    {/* Intro Banner */}
                    <div className="intro-banner">
                        <div className="banner-tag">Legal &amp; Compliance</div>
                        <h2 className="banner-title">Privacy Policy</h2>
                        <p className="banner-sub">
                            This Privacy Policy describes how Climeto Sustainable
                            Services Private Limited (&quot;Climeto&quot;, &quot;Company&quot;, &quot;we&quot;,
                            &quot;us&quot;, or &quot;our&quot;) collects, processes, stores, and protects personal
                            data obtained when you access or use our website, Desktop application,
                            or services (collectively, the &quot;Platform&quot;).
                        </p>
                        <div className="consent-banner">
                            ⚠️ By accessing, downloading, registering on, or using the
                            Platform, you consent to the collection and processing of your data
                            as described in this Privacy Policy. If you do not agree to this
                            Policy, please do not use the Platform.
                        </div>
                    </div>

                    <div className="divider" />

                    {/* 1 */}
                    <Block id="contact" number="1" title="Data Fiduciary and Contact Details" onVisible={setActiveSection}>
                        <p className="para">Climeto Sustainable Services Private Limited acts as the Data Fiduciary in respect of personal data collected through the Platform. For all data-related queries, you may contact us at:</p>
                        <InfoTable rows={[
                            ["Phone", "+91 9039946410"],
                            ["Address", "Plot No 1A-2A, Second Floor, Scheme No 113, Vijay Nagar, Indore, Madhya Pradesh-452010"],
                        ]} />
                    </Block>

                    <div className="divider" />

                    {/* 2 */}
                    <Block id="data-collected" number="2" title="Personal Data We Collect" onVisible={setActiveSection}>
                        <p className="para">We collect personal data only to the extent necessary for the purposes described in this Policy. The categories of personal data we may collect include, but are not limited to:</p>
                        <div className="subsection">
                            <h3>2.1 Data You Provide Directly</h3>
                            <BulletList items={[
                                "Identity Information: Full name, designation, and organisation name",
                                "Contact Information: Email address, mobile number, postal address",
                                "Compliance & Business Data: EPR-related invoices, waste generation data, registration details, and regulatory filing information voluntarily submitted for compliance processing",
                                "Communications: Emails, support queries, and messages submitted through the Platform",
                            ]} />
                        </div>
                        <div className="subsection">
                            <h3>2.2 Sensitive Data Policy</h3>
                            <p className="para">Climeto does not collect sensitive personal data such as biometric data, financial account credentials, or health data unless specifically necessary for a service and with your explicit consent.</p>
                        </div>
                    </Block>

                    <div className="divider" />

                    {/* 4 */}
                    <Block id="minimization" number="4" title="Data Minimization and Purpose Limitation" onVisible={setActiveSection}>
                        <p className="para">Climeto collects and processes only such personal data as is necessary for the specific purpose for which it is collected. We do not process personal data for purposes incompatible with those stated in this Privacy Policy without your prior consent. Compliance data submitted through the Application Platform is used exclusively for the regulatory and advisory services subscribed by you and is not used for any unrelated commercial purpose.</p>
                    </Block>

                    <div className="divider" />

                    {/* 6 */}
                    <Block id="disclosure" number="6" title="Disclosure and Sharing of Personal Data" onVisible={setActiveSection}>
                        <p className="para">Climeto does not sell, rent, or trade your personal data to any third party for commercial purposes. We may share personal data in the following limited circumstances:</p>
                        <BulletList items={[
                            "Service Providers: With authorised technology vendors, payment gateways, and infrastructure providers engaged in the delivery of our services, subject to strict confidentiality and data processing obligations.",
                            "Regulatory Authorities: With CPCB, SPCB, and other competent government bodies as required for EPR portal submissions and regulatory compliance.",
                            "Legal Obligations: Where disclosure is required under applicable law, court order, or direction of a competent authority.",
                            "Fraud and Security: Where necessary to prevent fraud, protect the security of the Platform, or enforce our rights.",
                        ]} />
                        <p className="para">Any third party to whom personal data is disclosed is required to maintain its confidentiality and use it solely for the authorised purpose.</p>
                    </Block>

                    <div className="divider" />

                    {/* 7 */}
                    <Block id="retention" number="7" title="Data Retention" onVisible={setActiveSection}>
                        <p className="para">Climeto retains personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law, whichever is longer. The following general retention guidelines apply:</p>
                        <BulletList items={[
                            "Account data: Retained for the duration of your account and for a reasonable period thereafter to facilitate any service-related queries or legal obligations.",
                            "Compliance and EPR data: Retained for the period required under applicable environmental regulations and thereafter for a minimum period consistent with statutory limitation periods.",
                            "Communication data: Retained for a reasonable period to address any follow-up queries or disputes.",
                        ]} />
                        <p className="para">Upon the expiry of applicable retention periods, personal data is securely deleted or anonymised.</p>
                    </Block>

                    <div className="divider" />

                    {/* 8 */}
                    <Block id="rights" number="8" title="Your Rights as a Data Principal" onVisible={setActiveSection}>
                        <p className="para">Subject to applicable law, you have the following rights in respect of your personal data held by Climeto:</p>
                        <BulletList items={[
                            "Right to Access: You may request a summary of personal data we hold about you and information on how it is being processed.",
                            "Right to Correction: You may request that inaccurate or incomplete personal data be corrected or updated.",
                            "Right to Erasure: You may request deletion of your personal data where processing is no longer necessary for the original purpose, subject to overriding legal obligations.",
                            "Right to Withdraw Consent: Where processing is based on consent, you may withdraw consent at any time. Withdrawal will not affect the lawfulness of processing carried out before withdrawal.",
                            "Right to Grievance Redressal: You have the right to have your grievances addressed by our Grievance Officer.",
                            "Right to Nominate: You may nominate another individual to exercise your data rights in the event of your death or incapacity.",
                        ]} />
                        <p className="para">To exercise any of these rights, please contact us at support@climeto.com. We will respond within 2 working days, except where the volume or complexity of requests necessitates an extension, of which we will inform you.</p>
                        <p className="para">Please note that certain rights may be subject to limitations where overriding legal obligations, public interest, or third-party rights are involved.</p>
                    </Block>

                    <div className="divider" />

                    {/* 9 */}
                    <Block id="security" number="9" title="Data Security" onVisible={setActiveSection}>
                        <p className="para">Climeto implements appropriate technical, administrative, and organisational measures to protect personal data from unauthorised access, disclosure, alteration, loss, or destruction. These measures include:</p>
                        <BulletList items={[
                            "Encryption of data in transit using TLS/HTTPS protocols",
                            "Access controls restricting data access to authorised personnel on a need-to-know basis",
                            "Regular security assessments and vulnerability testing",
                            "Employee training on data handling and security obligations",
                            "Secure storage of payment data exclusively through PCI-DSS compliant payment gateways",
                        ]} />
                        <p className="para">While we take reasonable and appropriate precautions, no system transmitting data over the internet can be guaranteed to be completely secure. In the event of a personal data breach likely to cause harm to Users, Climeto will take prompt remedial action and notify affected Users and relevant authorities in accordance with applicable law.</p>
                    </Block>

                    <div className="divider" />

                    {/* 11 */}
                    <Block id="cross-border" number="11" title="Cross-Border Data Transfers" onVisible={setActiveSection}>
                        <p className="para">Climeto&apos;s primary data processing operations are conducted within India. In the event that any personal data is transferred outside India, for example through cloud infrastructure providers, such transfers will be made in accordance with applicable law and subject to appropriate contractual safeguards to ensure equivalent levels of data protection.</p>
                    </Block>

                    <div className="divider" />

                    {/* 12 */}
                    <Block id="children" number="12" title="Children's Privacy" onVisible={setActiveSection}>
                        <p className="para">The Application Platform is not directed at individuals below the age of 18. Climeto does not knowingly collect personal data from minors. If we become aware that personal data of a minor has been collected without verifiable parental consent, we will take prompt steps to delete such data.</p>
                    </Block>

                    <div className="divider" />

                    {/* 13 */}
                    <Block id="updates" number="13" title="Policy Updates" onVisible={setActiveSection}>
                        <p className="para">Climeto reserves the right to modify or update this Privacy Policy at any time to reflect changes in applicable law, technology, or our business practices. Material changes will be communicated to registered Users through email or in-Platform notifications prior to the effective date of such changes. The most current version of this Privacy Policy will always be available on the Platform. We encourage you to review this Policy periodically.</p>
                    </Block>

                    {/* Footer note */}
                    <div className="footer-note">
                        <p>© 2025 Climeto Sustainable Services Private Limited. All rights reserved.<br />By using our Platform, you agree to this Privacy Policy.</p>
                    </div>
                </main>
            </div>
        </>
    );
}

function Block({ id, number, title, children, onVisible }) {
    return (
        <section
            id={id}
            className="section-block"
            ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(
                    ([entry]) => { if (entry.isIntersecting) onVisible(id); },
                    { rootMargin: "-20% 0px -70% 0px" }
                );
                obs.observe(el);
            }}
        >
            <div className="section-header-row">
                {number && <div className="section-num-badge">{number}</div>}
                <h2 className={`section-title${number ? "" : " no-num"}`}>{title}</h2>
            </div>
            <div className={`section-body-wrap${number ? "" : " no-num"}`}>{children}</div>
        </section>
    );
}

function BulletList({ items }) {
    return (
        <ul className="bullet-list">
            {items.map((item, i) => (
                <li key={i}>
                    <span className="bullet-dot" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function InfoTable({ rows }) {
    return (
        <table className="info-table">
            <tbody>
                {rows.map(([label, value], i) => (
                    <tr key={i}>
                        <td>{label}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}