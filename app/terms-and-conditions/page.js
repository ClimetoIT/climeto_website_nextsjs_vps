"use client";
import { useState } from "react";

const sections = [
    { id: "intro", title: "Introduction", number: null },
    { id: "definitions", title: "Definitions", number: "1" },
    { id: "acceptance", title: "Acceptance of Terms", number: "2" },
    { id: "eligibility", title: "Eligibility", number: "3" },
    { id: "services", title: "Description of Services", number: "4" },
    { id: "accounts", title: "User Accounts", number: "5" },
    { id: "payments", title: "Payments and Fees", number: "6" },
    { id: "processing", title: "Payment Processing", number: "7" },
    { id: "responsibilities", title: "User Responsibilities", number: "8" },
    { id: "permitted", title: "Permitted Use & Restrictions", number: "8A" },
    { id: "grievance", title: "Grievance Redressal", number: "9" },
    { id: "confidentiality", title: "Confidentiality", number: "10" },
    { id: "accuracy", title: "Data Accuracy Disclaimer", number: "11" },
    { id: "ip", title: "Intellectual Property", number: "12" },
    { id: "regulatory", title: "Regulatory Disclaimer", number: "13" },
    { id: "thirdparty", title: "Third-Party Services", number: "14" },
    { id: "portal", title: "Govt. Portal Dependency", number: "15" },
    { id: "liability", title: "Limitation of Liability", number: "16" },
    { id: "termination", title: "Termination of Access", number: "17" },
    { id: "amendments", title: "Amendments to Terms", number: "18" },
    { id: "governing", title: "Governing Law", number: "19" },
    { id: "contact", title: "Contact Information", number: "20" },
];

export default function TermsAndConditions() {
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

        /* ── HERO ── */
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

        /* ── LAYOUT ── */
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

        /* ── SIDEBAR ── */
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

        /* ── MAIN CONTENT ── */
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
          margin: 0; line-height: 1.3;
          padding-top: 6px;
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
          vertical-align: top;
          color: var(--text-body);
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

        .warning-box {
          background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.3);
          border-radius: 10px; padding: 14px 18px; margin-bottom: 16px;
        }
        .warning-label { font-size: 12px; font-weight: 700; color: #d97706; margin-bottom: 6px; }

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
` }} />


            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-tag">
                        <span>📋</span> Legal Agreement
                    </div>
                    <h1>Terms and Conditions</h1>
                    <p className="hero-sub">
                        These Terms and Conditions constitute a legally binding contract between the User and
                        Climeto Sustainable Services Private Limited. Users are advised to read this document
                        carefully before accessing or using the Platform.
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
                        <div className="banner-tag">Legal Agreement</div>
                        <h2 className="banner-title">Terms and Conditions</h2>
                        <p className="banner-sub">
                            These Terms and Conditions constitute a legally binding contract between the User and
                            Climeto Sustainable Services Private Limited. Users are advised to read this document
                            carefully before accessing or using the Platform.
                        </p>
                        <div className="banner-chips">
                            {[["Indore, MP", "Jurisdiction"], ["2025", "Effective Year"], ["English", "Language"]].map(([val, label]) => (
                                <div key={label} className="banner-chip">
                                    <div className="banner-chip-val">{val}</div>
                                    <div className="banner-chip-label">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Intro */}
                    <Block id="intro" title="Welcome to Climeto" onVisible={setActiveSection}>
                        <p className="para">These Terms and Conditions ("Terms") govern your access to, and use of the services, software, and digital platform operated by Climeto Sustainable Services Private Limited ("Climeto", "Company", "we", "us", or "our"). By accessing, registering on, or using our platform, website, or services, you agree to be legally bound by these Terms.</p>
                        <p className="para">If you do not agree to any part of these Terms, you must immediately cease use of the Platform. Use of the Application Platform is also governed by our Privacy Policy and Refund and Cancellation Policy, each of which is incorporated herein by reference.</p>
                        <p className="para">These Terms are published electronically in accordance with applicable rules governing electronic records and digital contracts in India.</p>
                    </Block>

                    <div className="divider" />

                    {/* 1 */}
                    <Block id="definitions" number="1" title="Definitions" onVisible={setActiveSection}>
                        <p className="para">For the purposes of these Terms, the following terms shall have the meanings ascribed to them below:</p>
                        <BulletList items={[
                            '"Platform" means the website, Desktop application, and all digital tools operated by Climeto.',
                            '"User" or "you" means any individual or legal entity that accesses or uses the Platform.',
                            '"Services" means all compliance Automation/Smart Digital Solution, advisory, documentation, and reporting services provided by Climeto through the Platform.',
                            '"Personal Data" means any information that identifies or can identify a natural person, as defined under applicable data protection law.',
                            '"Data Fiduciary" means Climeto in its capacity as the entity that determines the purpose and means of processing Personal Data.',
                            '"Subscription" means a paid plan that grants Users access to defined service features for a specified billing period.',
                        ]} />
                    </Block>

                    {/* 2 */}
                    <Block id="acceptance" number="2" title="Acceptance of Terms" onVisible={setActiveSection}>
                        <p className="para">By accessing, registering for, or using the Platform, you confirm that you have read, understood, and agreed to these Terms. If you accept these Terms on behalf of a legal entity, you represent and warrant that you have the authority to bind that entity.</p>
                        <p className="para">These Terms are displayed prominently on our Application Platform prior to any registration or transaction. Your continued use of the application Platform following any revision of these Terms will constitute acceptance of the amended Terms. We will provide reasonable notice of material changes.</p>
                    </Block>

                    {/* 3 */}
                    <Block id="eligibility" number="3" title="Eligibility" onVisible={setActiveSection}>
                        <p className="para">Use of the application Platform is available only to persons and entities who are competent to enter binding contracts under applicable law. By using the Platform, you represent that:</p>
                        <BulletList items={[
                            "You are at least 18 years of age, or are a duly authorized representative of a business entity,",
                            "You are not prohibited from using the Application/Portal Platform under any applicable law or regulation,",
                            "All information provided during registration is accurate, complete, and current.",
                        ]} />
                    </Block>

                    {/* 4 */}
                    <Block id="services" number="4" title="Description of Services" onVisible={setActiveSection}>
                        <p className="para">Climeto provides environmental compliance support and advisory services through its digital Platform. </p>

                        <p className="para">The Company reserves the right to modify, suspend, or discontinue any part of the Application Platform or Services at any time, with reasonable prior notice to Users where practicable.</p>
                    </Block>

                    {/* 5 */}
                    <Block id="accounts" number="5" title="User Accounts" onVisible={setActiveSection}>
                        <p className="para">Access to certain Application Platform features requires Users to create an account. When registering, you agree to:</p>
                        <BulletList items={[
                            "Provide accurate, complete, and current information, and promptly update it if it changes.",
                            "Maintain the security and confidentiality of your login credentials.",
                            "Not share your credentials with any third party.",
                            "Notify Climeto immediately at Support@Climeto.com upon becoming aware of any unauthorized use of your account or any other breach of security.",
                        ]} />
                        <p className="para">If a User loses, forgets, or is unable to access their login credentials and requests Climeto to initiate a password reset or credential recovery process, Climeto shall endeavor to process such requests within a reasonable timeframe. However, Climeto shall not be held liable for any loss, damage, regulatory penalty, compliance failure, missed deadline, or any other injury, whether direct, indirect, or consequential, suffered by the User during the pendency of such credential recovery or password reset process. The User acknowledges that the safeguarding of login credentials is their sole responsibility, and any disruption to Platform access resulting from lost, forgotten, or compromised credentials shall not give rise to any claim, liability, or obligation on the part of Climeto.</p>
                        <p className="para">You are solely responsible for all activities that occur under your account. Climeto shall not be liable for any loss or damage arising from unauthorized use of your account where such use results from your failure to maintain credential security.</p>
                        <p className="para">Climeto reserves the right to suspend or terminate accounts where the information provided is inaccurate, misleading, or where the account is used in violation of these Terms.</p>
                    </Block>

                    {/* 6 */}
                    <Block id="payments" number="6" title="Payments and Fees" onVisible={setActiveSection}>
                        <p className="para">Certain Services on the Application Platform are subject to the payment of subscription fees or service charges. By subscribing to or purchasing any paid Service, you agree to pay all applicable fees in accordance with the pricing terms presented at the time of purchase.</p>
                        <p className="para">All prices are displayed in Indian Rupees (INR). We reserve the right to revise our pricing, and any changes will apply from the next billing cycle.</p>
                        <p className="para">Unless expressly stated otherwise in writing, fees paid for Services are non-refundable once the service engagement has commenced, subject to the provisions of our Refund and Cancellation Policy.</p>
                    </Block>

                    {/* 7 */}
                    <Block id="processing" number="7" title="Payment Processing" onVisible={setActiveSection}>
                        <p className="para">Payments on the Application Platform are processed through authorized and regulated third-party payment gateway service providers. By making a payment, you agree to comply with the terms and conditions of the applicable payment service provider.</p>
                        <p className="para">Climeto does not store, process, or transmit complete payment card data. All payment card data is handled exclusively by PCI-DSS compliant payment gateways. Climeto shall not be responsible for transaction failures, security incidents, or processing errors arising from third-party payment gateway systems, provided we have taken reasonable steps to engage reputable and compliant payment partners.</p>
                        <p className="para">In the event of any payment dispute or failed transaction, you may contact us at Support@Climeto.com or reach out directly to your payment service provider. We shall make reasonable efforts to facilitate resolution.</p>
                    </Block>

                    {/* 8 */}
                    <Block id="responsibilities" number="8" title="User Responsibilities" onVisible={setActiveSection}>
                        <p className="para">You agree to use the Application Platform responsibly, lawfully, and in compliance with all applicable regulations, including environmental compliance obligations. You agree not to:</p>
                        <BulletList items={[
                            "Provide false, inaccurate, or misleading information.",
                            "Upload or transmit malicious software, harmful code, or any material that disrupts Application Platform functionality.",
                            "Attempt to gain unauthorized access to the Platform, its servers, or related systems.",
                            "Engage in any activity that is unlawful, fraudulent, abusive, or contrary to public policy.",
                            "Use the Application Platform in a manner that infringes on the rights of any third party.",
                            "Engage in data scraping, reverse engineering, or any unauthorized extraction of Application Platform content or data.",
                        ]} />
                        <p className="para">You remain solely responsible for the accuracy, completeness, and legality of all compliance data, documentation, and information submitted through the Platform.</p>
                    </Block>

                    {/* 8A */}
                    <Block id="permitted" number="8A" title="Permitted Use, Subscription Restrictions and Conflict of Interest" onVisible={setActiveSection}>
                        <div className="subsection">
                            <h3>8A.1 Permitted Use Only</h3>
                            <p className="para">The Platform is licensed solely for the User's own internal regulatory compliance purposes. Any use beyond this scope, including reselling, sublicensing, white-labeling, or offering Platform features or outputs as a service to third parties, is strictly prohibited. Climeto reserves the right to immediately suspend or terminate access upon detection of any unauthorized use, without prior notice and without refund.</p>
                        </div>
                        <div className="subsection">
                            <h3>8A.2 Prohibition on Commercial Exploitation</h3>
                            <p className="para">The Platform shall not be used for any commercial purpose, including:</p>
                            <BulletList items={[
                                "Offering compliance services to third parties using the Platform",
                                "Using Platform outputs, reports, or data to provide advisory or consulting services to any other individual or entity",
                                "Commercializing or replicating the Platform's features, workflows, or methodologies for any external business purpose",
                            ]} />
                            <p className="para">Any such use constitutes a material breach of these Terms and entitles Climeto to immediately terminate access without notice or refund.</p>
                        </div>
                        <div className="subsection">
                            <h3>8A.3 One Subscription Per Legal Entity</h3>
                            <p className="para">Each subscription is valid for one legal entity only. The User agrees that:</p>
                            <BulletList items={[
                                "A single subscription cannot be used to manage compliance for more than one company, firm, partnership, trust, or legal entity",
                                "A separate subscription must be purchased for each additional legal entity",
                                "Multi-entity use under a single subscription constitutes unauthorized use and a material breach, entitling Climeto to suspend access and forfeit the subscription fee without refund",
                            ]} />
                        </div>
                        <div className="subsection">
                            <h3>8A.4 Conflict of Interest</h3>
                            <p className="para">The User agrees that they shall not, directly or indirectly, engage with, be employed by, invest in, or be associated in any capacity with any individual or entity engaged in the same or substantially similar business as Climeto, including environmental compliance automation, EPR compliance management, or sustainability regulatory technology. Upon discovery of any such association, Climeto shall have the absolute right to immediately block or terminate the User's access without notice, liability, or refund.</p>
                        </div>
                        <div className="subsection">
                            <h3>8A.5 User Declaration</h3>
                            <p className="para">By registering on the Platform, the User hereby declares and confirms that:</p>
                            <BulletList items={[
                                "(a) The Platform is being used solely for the User's own internal compliance purposes and not for any commercial or third-party service purpose",
                                "(b) The User is not engaged with, employed by, or associated with any entity in the same field of business as Climeto",
                                "(c) The User shall purchase separate subscriptions for each legal entity whose compliance they intend to manage",
                                "(d) Any breach of this declaration entitles Climeto to immediately terminate access without notice, refund, or liability",
                                "(e) The User shall promptly notify Climeto at Support@Climeto.com if any of the above declarations cease to be accurate",
                            ]} />
                            <p className="para">This declaration is deemed renewed at the time of each subscription renewal.</p>
                        </div>
                        <div className="subsection">
                            <h3>8A.6 Consequences of Breach</h3>
                            <p className="para">Upon any breach of this Clause, Climeto shall be entitled to:</p>
                            <BulletList items={[
                                "Immediately suspend or permanently terminate Platform access",
                                "Forfeit all subscription fees paid, without obligation of refund",
                                "Initiate legal proceedings for damages, injunctive relief, or any other available remedy",
                                "Report the breach to relevant authorities where applicable",
                            ]} />
                        </div>
                    </Block>

                    {/* 9 */}
                    <Block id="grievance" number="9" title="Grievance Redressal" onVisible={setActiveSection}>
                        <p className="para">In accordance with applicable consumer protection and information technology regulations, Climeto has designated a Grievance Officer to address concerns raised by Users.</p>
                        <InfoTable rows={[
                            ["Designation", "Grievance Officer, Climeto Sustainable Services Private Limited"],
                            ["Email", "support@climeto.com"],
                            ["Expected Response Time", "Within 2 Working days"],
                            ["Address", "Plot No 1A-2A, Second Floor, Scheme No 113, Vijay Nagar, Indore, MP - 452010"],
                        ]} />
                        <p className="para">Users may submit grievances in writing to the Grievance Officer. All complaints will be acknowledged within 2 working days and resolved within 15 days of receipt, to the extent practicable.</p>
                    </Block>

                    {/* 10 */}
                    <Block id="confidentiality" number="10" title="Confidentiality" onVisible={setActiveSection}>
                        <p className="para">Users may submit regulatory filings, EPR data, compliance documents, and other business records through the Application Platform. Climeto will maintain the confidentiality of such information and use it solely for:</p>
                        <BulletList items={[
                            "Delivering compliance support and advisory services,",
                            "Facilitating regulatory submissions to CPCB, SPCB, and other authorities,",
                            "Improving Application Platform functionality and service quality,",
                            "Assisting with environmental compliance processes as subscribed by the User.",
                        ]} />
                        <p className="para">Climeto will not disclose such information to third parties except where required for service delivery with User consent, mandated by competent regulatory authorities or courts, or as expressly permitted under applicable law.</p>
                    </Block>

                    {/* 11 */}
                    <Block id="accuracy" number="11" title="Data Accuracy Disclaimer" onVisible={setActiveSection}>
                        <p className="para">Users acknowledge and agree that they are solely responsible for ensuring the accuracy, completeness, and regulatory compliance of all information and documents submitted through the Platform. Climeto's role is limited to processing and transmitting data as submitted by the User.</p>
                        <p className="para">Climeto shall not be responsible for penalties, regulatory actions, rejection of submissions, or compliance failures resulting from inaccurate, incomplete, or misleading information provided by Users. Users are advised to verify all data before submission.</p>
                    </Block>

                    {/* 12 */}
                    <Block id="ip" number="12" title="Intellectual Property" onVisible={setActiveSection}>
                        <p className="para">All content on the Platform, including text, graphics, logos, trademarks, software, documentation, algorithms, and design elements, is the intellectual property of Climeto Sustainable Services Private Limited or its respective licensors and is protected under applicable intellectual property law.</p>
                        <p className="para">Users are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Application Platform solely for their own compliance purposes. Users may not copy, reproduce, distribute, adapt, modify, publicly display, reverse-engineer, or commercially exploit any Application Platform content without prior written authorization from Climeto.</p>
                    </Block>

                    {/* 13 */}
                    <Block id="regulatory" number="13" title="Regulatory Disclaimer" onVisible={setActiveSection}>
                        <p className="para">Climeto provides  tools and advisory services to assist organizations in managing environmental compliance obligations. However, Climeto does not guarantee the grant of any approval, certificate, credit, or registration by any government authority. All final regulatory decisions remain within the exclusive authority of the relevant statutory bodies.</p>
                        <p className="para">Users should seek independent legal or regulatory advice where required. Climeto's services are supplementary and do not replace the User's own compliance obligations under applicable environmental law.</p>
                    </Block>

                    {/* 14 */}
                    <Block id="thirdparty" number="14" title="Third-Party Services" onVisible={setActiveSection}>
                        <p className="para">The Application Platform may interact with external systems, regulatory portals, and other third-party service providers. Climeto does not control the availability, performance, accuracy, or security of such external systems or third parties.</p>
                        <p className="para">Users acknowledge that any transactions or engagements with third parties are undertaken at their own risk and are subject to the terms and conditions of such third parties. Climeto shall not be liable for any loss or damage arising from User engagement with third-party services.</p>
                    </Block>

                    {/* 15 */}
                    <Block id="portal" number="15" title="Third-Party Government Portal Dependency" onVisible={setActiveSection}>
                        <div className="warning-box">
                            <div className="warning-label">⚠ Important Notice</div>
                            <p className="para" style={{ marginBottom: 0 }}>The Platform's functionality is contingent upon the availability, accessibility, and operational integrity of third-party government-operated portals and servers, including but not limited to the CPCB Centralized EPR Portal, State Pollution Control Board portals, and any other regulatory digital infrastructure operated by competent authorities. Climeto does not own, operate, or exercise any control over such portals. In the event of any change, modification, updation, migration, downtime, discontinuation, restructuring, or alteration in the functionality, architecture, data format, or access protocols of such government portals, whether with or without prior notice, Climeto shall not be held liable for any resulting disruption, delay, inaccuracy, unavailability of Application Platform features, or consequential compliance failure, including any regulatory penalties or Environmental Compensation levied upon the User by any competent authority. The User acknowledges and accepts sole responsibility for independently monitoring and fulfilling their regulatory compliance obligations during any such period.</p>
                        </div>
                    </Block>

                    {/* 16 */}
                    <Block id="liability" number="16" title="Limitation of Liability" onVisible={setActiveSection}>
                        <p className="para">To the fullest extent permitted by applicable law, Climeto Sustainable Services Private Limited and its directors, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
                        <BulletList items={[
                            "Use of or inability to use the Application Platform,",
                            "Inaccuracies in User-submitted information,",
                            "Regulatory decisions taken by competent authorities.",
                            "Unauthorized access to User accounts arising from User negligence,",
                            "Technical failures or interruptions of the EPR Portal/ Application Platform beyond Climeto's reasonable control.",
                        ]} />
                        <p className="para">Where Climeto is found liable, its aggregate liability to a User for any claim arising out of or related to these Terms shall be limited to the total fees paid by the user</p>
                    </Block>

                    {/* 17 */}
                    <Block id="termination" number="17" title="Termination of Access" onVisible={setActiveSection}>
                        <p className="para">Climeto reserves the right to suspend or terminate User accounts or restrict Application Platform access, with or without prior notice, in the event of:</p>
                        <BulletList items={[
                            "Material breach of these Terms,",
                            "Submission of fraudulent, inaccurate, or unlawful information,",
                            "Conduct that endangers the integrity, security, or reputation of the Application Platform or other Users,",
                            "Non-payment of applicable fees.",
                        ]} />
                        <p className="para">Upon termination, your right to access the Application Platform ceases immediately. Provisions of these Terms that by their nature should survive termination, including intellectual property, limitation of liability, and governing law, shall continue to apply.</p>
                    </Block>

                    {/* 18 */}
                    <Block id="amendments" number="18" title="Amendments to Terms" onVisible={setActiveSection}>
                        <p className="para">Climeto may update or revise these Terms from time to time to reflect changes in our services, applicable law, or operational requirements. Updated versions will be published on the Application Platform with a revised effective date.</p>
                        <p className="para">For material changes, Climeto will provide reasonable advance notice through email or in-Platform notifications. Your continued use of the Application Platform following the effective date of any revision constitutes acceptance of the amended Terms. We encourage Users to review these Terms periodically.</p>
                    </Block>

                    {/* 19 */}
                    <Block id="governing" number="19" title="Governing Law and Jurisdiction" onVisible={setActiveSection}>
                        <p className="para">These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or in connection with these Terms, or the breach, termination, or invalidity thereof, shall be subject to the exclusive jurisdiction of the competent courts located in Indore, Madhya Pradesh, India.</p>
                    </Block>

                    {/* 20 */}
                    <Block id="contact" number="20" title="Contact Information" onVisible={setActiveSection}>
                        <p className="para">For questions, concerns, or notices in connection with these Terms and Conditions, please contact:</p>
                        <InfoTable rows={[
                            ["Company", "Climeto Sustainable Services Private Limited"],
                            ["Email", "support@climeto.com"],
                            ["Phone", "+91 9039946410"],
                        ]} />
                    </Block>

                    {/* Footer note */}
                    <div className="footer-note">
                        <p>© 2025 Climeto Sustainable Services Private Limited. All rights reserved.<br />By using our Platform, you agree to these Terms and Conditions.</p>
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