"use client";
import { useState } from "react";

const sections = [
    { id: "scope", title: "Scope of Policy", number: "1" },
    { id: "subscription", title: "Subscription Services", number: "2" },
    { id: "refund", title: "Refund Policy", number: "3" },
    { id: "cancellation", title: "Cancellation of Subscription", number: "4" },
    { id: "failed", title: "Failed Payments & Billing Errors", number: "5" },
    { id: "upgrades", title: "Subscription Downgrades and Upgrades", number: "6" },
    { id: "modification", title: "Modification of Plans and Services", number: "7" },
    { id: "dispute", title: "Dispute Resolution", number: "8" },
    { id: "updates", title: "Policy Updates", number: "9" },
    { id: "contact", title: "Contact Information", number: "10" },
];

export default function RefundPolicy() {
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
          border-radius: 100px; padding: 8px 16px;
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

        /* ── INTRO BANNER ── */
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
          font-size: 26px; font-weight: 700;
          color: var(--text-dark); margin: 0 0 10px 0; line-height: 1.2;
        }
        .banner-sub {
          font-size: 15px; color: var(--text-muted);
          margin: 0 0 16px 0; line-height: 1.6;
        }
        .banner-note {
          background: var(--white);
          border: 1px solid var(--green-accent);
          border-left: 4px solid var(--green-primary);
          border-radius: 8px; padding: 12px 16px;
          font-size: 13.5px; color: var(--text-dark); font-weight: 600;
        }

        /* ── SECTION BLOCKS ── */
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
        .section-body-wrap { padding-left: 50px; }

        p.para {
          font-size: 15px; line-height: 1.8;
          color: var(--text-body); margin: 0 0 12px 0;
        }
        p.para:last-child { margin-bottom: 0; }

        .subsection { margin-bottom: 20px; }
        .subsection h3 {
          font-size: 15px; font-weight: 700;
          color: var(--text-dark); margin: 0 0 8px 0;
        }

        /* ── BULLET LIST ── */
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

        /* ── SPECIAL CARDS ── */
        .info-card {
          border-radius: 10px; padding: 16px 20px; margin: 16px 0;
          border: 1px solid;
        }
        .info-card.green {
          background: var(--green-light);
          border-color: var(--border);
        }
        .info-card.yellow {
          background: rgba(251,191,36,0.07);
          border-color: rgba(251,191,36,0.3);
        }
        .info-card.red {
          background: rgba(239,68,68,0.05);
          border-color: rgba(239,68,68,0.2);
        }
        .card-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 8px;
        }
        .card-label.green { color: var(--green-primary); }
        .card-label.yellow { color: #d97706; }
        .card-label.red { color: #dc2626; }

        /* ── INFO TABLE ── */
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

        /* ── DIVIDER ── */
        .divider { height: 1px; background: var(--border); margin: 0 0 40px 0; }

        /* ── FOOTER NOTE ── */
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
                        <span>💳</span> Billing &amp; Payments
                    </div>
                    <h1>Refund and Cancellation Policy</h1>
                    <p className="hero-sub">
                        This Policy governs refunds, cancellations, and billing matters for all services
                        offered by Climeto. Users are encouraged to read this Policy carefully before
                        subscribing to any paid service.
                    </p>
                    <div className="hero-chips">
                        {[["INR", "Billing Currency"], ["7 Days", "Refund Window"], ["Indore, MP", "Jurisdiction"]].map(([val, label]) => (
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
                        <div className="banner-tag">Billing &amp; Payments</div>
                        <h2 className="banner-title">Refund and Cancellation Policy</h2>
                        <p className="banner-sub">
                            This Refund and Cancellation Policy ("Policy") sets out the terms governing
                            refunds, cancellations, subscription management, and billing adjustments for
                            services provided by Climeto Sustainable Services Private Limited ("Climeto",
                            "Company", "we", "us", or "our").
                        </p>
                        <div className="banner-note">
                            ⚠️ By purchasing or subscribing to any service on the Platform, you agree to this
                            Policy along with our Terms and Conditions and Privacy Policy.
                        </div>
                    </div>

                    {/* 1 */}
                    <Block id="scope" number="1" title="Scope of Policy" onVisible={setActiveSection}>
                        <p className="para">This Policy applies to all subscription  services, and digital compliance solutions provided through the Climeto Platform. It governs refund eligibility, cancellation procedures, and billing practices for all paid service engagements.</p>
                    </Block>

                    <div className="divider" />

                    {/* 2 */}
                    <Block id="subscription" number="2" title="Subscription Services" onVisible={setActiveSection}>

                        <div className="subsection">
                            <h3>2.1 Pricing Transparency</h3>
                            <p className="para">All subscription pricing is displayed clearly on the Application Platform in Indian Rupees (INR) prior to payment, including the applicable billing cycle, features included, processing limits, and any applicable taxes. Climeto will provide reasonable advance notice of any price revision, which will take effect from the next billing cycle.</p>
                        </div>
                        <div className="subsection">
                            <h3>2.2 Automatic Renewal</h3>
                            <p className="para">Subscriptions automatically renew at the end of each billing period unless cancelled by you before the renewal date. You will receive a reminder notification prior to renewal. Renewal charges will be applied to the payment method on file. By subscribing, you authorize Climeto (or its payment gateway partner) to charge renewal fees automatically unless you cancel in advance.</p>
                            <p className="para">If you wish to discontinue automatic renewal, you must cancel your subscription at least 48 hours before the next renewal date to avoid being charged for the subsequent billing period.</p>
                            <div className="info-card yellow">
                                <div className="card-label yellow">⚠ Important — Auto-Renewal Notice</div>
                                <p className="para" style={{ marginBottom: 0 }}>Climeto reserves the right, at its sole discretion, to modify, revise, or restructure subscription plans, features, and applicable fees at the time of or prior to any automatic renewal. This includes the right to increase subscription fees, alter plan inclusions, or discontinue existing plan tiers. Users will be notified of any such changes prior to the renewal date. If the User does not cancel their subscription at least 48 hours before the renewal date after receiving such notice, the User shall be deemed to have accepted the revised plan and fees, and Climeto shall be authorized to charge the updated renewal amount to the payment method on file. Climeto shall not be liable for any claim arising from plan modifications or fee revisions made in accordance with this clause.</p>
                            </div>
                        </div>
                    </Block>

                    {/* 3 */}
                    <Block id="refund" number="3" title="Refund Policy" onVisible={setActiveSection}>
                        <div className="subsection">
                            <h3>3.1 General Principle</h3>
                            <p className="para">Given the digital  nature of our services, and the fact that costs are incurred upon service activation, subscription fees are generally non-refundable once the subscription has been activated and Application platform access has been granted.</p>
                        </div>

                        <div className="subsection">
                            <h3>3.4 Refund Processing</h3>
                            <p className="para">Approved refunds will be processed to the original payment method within 7 to 10 business days from the date of approval. All refunds shall be credited back to the same payment source used by the User at the time of the original transaction. Processing times may vary depending on the User's bank or payment service provider. Climeto shall not be responsible for any delays in refund crediting attributable to third-party payment systems.</p>
                        </div>
                    </Block>

                    {/* 4 */}
                    <Block id="cancellation" number="4" title="Cancellation of Subscription" onVisible={setActiveSection}>
                        <div className="subsection">
                            <h3>4.1 How to Cancel</h3>
                            <p className="para">Users may cancel their subscription at any time through:</p>
                            <BulletList items={[
                                "the Application Platform dashboard under subscription settings;",
                                "by contacting Climeto support at Support@Climeto.com with the request to cancel.",
                            ]} />
                            <p className="para">Cancellation requests submitted via email will be acknowledged within 48 hours and processed within 2 business days.</p>
                        </div>
                        <div className="subsection">
                            <h3>4.2 Effect of Cancellation</h3>
                            <p className="para">Upon cancellation:</p>
                            <BulletList items={[
                                "You will retain access to subscribed services until the end of the current billing period,",
                                "No further subscription charges will be levied after the cancellation becomes effective,",
                                "Previously paid fees will not be refunded, except as provided under Section 3.2 above,",
                                "Any data submitted through the Application Platform will be retained in accordance with our data retention policy and may be accessed by you during the remainder of the billing period.",
                            ]} />
                        </div>
                    </Block>

                    {/* 5 */}
                    <Block id="failed" number="5" title="Failed Payments and Billing Errors" onVisible={setActiveSection}>
                        <p className="para">If a subscription renewal payment fails, Climeto will notify you via email and may suspend access to the Application Platform until the outstanding amount is settled. We will make reasonable attempts to recover the payment before suspending access.</p>
                        <p className="para">If you believe a payment has been processed incorrectly, including in cases of duplicate charges, unauthorized transactions, or technical billing errors, please notify us at Support@Climeto.com within 7 days of the transaction. Climeto will investigate the matter and, where verified, issue a correction or refund as appropriate.</p>
                        <p className="para">Payments processed through third-party payment gateways are also subject to the dispute resolution procedures of the relevant payment service provider. You may raise a dispute directly with your bank or payment provider in accordance with their policies.</p>
                    </Block>

                    {/* 6 */}
                    <Block id="upgrades" number="6" title="Subscription Downgrades and Upgrades" onVisible={setActiveSection}>
                        <p className="para">Users may request to upgrade or downgrade their subscription plan. Upgrades will take effect immediately upon payment of the applicable differential. Downgrades will take effect from the next billing cycle. Credits or adjustments for the remainder of a billing period will be applied at Climeto's discretion on a pro-rata basis, and no cash refund will be issued for downgrades unless the circumstances in Section 3.2 apply.</p>
                    </Block>

                    {/* 7 */}
                    <Block id="modification" number="7" title="Modification of Plans and Services" onVisible={setActiveSection}>
                        <p className="para">Climeto reserves the right to modify subscription plans, features, processing limits, or pricing at any time. Where such modifications are material and adversely affect an active subscription, we will provide 7 days' prior notice to affected Users. If you do not wish to continue under the revised terms, you may cancel your subscription before the changes take effect.</p>
                    </Block>

                    {/* 8 */}
                    <Block id="dispute" number="8" title="Dispute Resolution" onVisible={setActiveSection}>
                        <p className="para">In the event of any dispute arising out of a refund claim or billing matter, you are encouraged to first contact our Support Team at support@Climeto.com. If your concern is not satisfactorily resolved within 10-15 days, you may escalate the matter through applicable consumer dispute resolution mechanisms or seek redressal through competent courts in Indore, Madhya Pradesh, India.</p>
                    </Block>

                    {/* 9 */}
                    <Block id="updates" number="9" title="Policy Updates" onVisible={setActiveSection}>
                        <p className="para">Climeto may update or revise this Policy periodically to reflect operational, regulatory, or product changes. Updated versions will be published on the Application Platform with a revised effective date. Continued use of the Application Platform after such updates constitutes acceptance of the revised Policy.</p>
                    </Block>

                    {/* 10 */}
                    <Block id="contact" number="10" title="Contact Information" onVisible={setActiveSection}>
                        <p className="para">For questions regarding refunds, billing, subscription cancellations, or any matter covered by this Policy, please contact:</p>
                        <InfoTable rows={[
                            ["Company", "Climeto Sustainable Services Private Limited"],
                            ["Email", ""],
                            ["Address", "Plot No 1A-2A, Second Floor, Scheme No 113, Vijay Nagar, Indore, MP — 452010"],
                        ]} />
                    </Block>

                    {/* Footer note */}
                    <div className="footer-note">
                        <p>© 2025 Climeto Sustainable Services Private Limited. All rights reserved.<br />By using our Platform, you agree to this Refund and Cancellation Policy.</p>
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
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="section-body-wrap">{children}</div>
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