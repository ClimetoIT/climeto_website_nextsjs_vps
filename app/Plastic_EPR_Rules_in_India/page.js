"use client";
// Place at: app/plastic-epr-rules-india-detailed-guide/page.jsx
// Or pages/plastic-epr-rules-india-detailed-guide.jsx (Pages Router — swap metadata for <Head>)

import { useState } from "react";



// ─── Data ────────────────────────────────────────────────────────────────────



const categories = [
    { label: "Category I", name: "Rigid plastic packaging" },
    { label: "Category II", name: "Flexible plastic packaging" },
    { label: "Category III", name: "Multi-layered plastic (MLP)" },
    { label: "Category IV", name: "Compostable plastic" },
];

const faqs = [
    {
        q: "Q1. Which law governs Plastic EPR in India?",
        a: "The Plastic Waste Management Rules, 2016 and subsequent amendments, including 2022 EPR guidelines.",
    },
    {
        q: "Q2. Is recycling mandatory under EPR?",
        a: "Yes. Minimum recycling targets are defined under the rules.",
    },
    {
        q: "Q3. Can compliance be achieved through certificates?",
        a: "Yes, but only through verified EPR certificates issued by registered processors.",
    },
    {
        q: "Q4. Are targets the same for all plastics?",
        a: "No. Targets are category-specific.",
    },
    {
        q: "Q5. What happens if targets are not met?",
        a: "Environmental compensation is imposed, and shortfall must be fulfilled.",
    },
];



// ─── Subcomponents ────────────────────────────────────────────────────────────

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={s.faqItem}>
            <button style={s.faqBtn} onClick={() => setOpen(!open)}>
                <span style={s.faqQ}>{q}</span>
                <span style={{ ...s.faqIcon, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>
            {open && <div style={s.faqA}>{a}</div>}
        </div>
    );
}

function SectionHeading({ number, title }) {
    return (
        <div style={{ marginBottom: 20 }}>
            <span style={s.sectionNum}>{number}</span>
            <h2 style={s.h2}>{title}</h2>
        </div>
    );
}

function ArrowNote({ children }) {
    return (
        <div style={s.arrowNote}>
            <span style={{ flexShrink: 0 }}>👉</span>
            <span>{children}</span>
        </div>
    );
}

function InfoCard({ icon, title, children }) {
    return (
        <div style={s.infoCard}>
            <div style={s.infoCardIcon}>{icon}</div>
            <div>
                <div style={s.infoCardTitle}>{title}</div>
                <div style={s.infoCardBody}>{children}</div>
            </div>
        </div>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const GREEN = "#2a7a3b";
const GREEN_DARK = "#1d5929";
const GREEN_LIGHT = "#e8f5eb";
const GREEN_MID = "#3a9b50";
const ORANGE = "#e87b2e";
const GRAY_BG = "#f5f7f5";
const BORDER = "#d4e8d8";
const TEXT = "#1a2a1c";
const MUTED = "#5a7060";
const WHITE = "#ffffff";

const s = {
    // Layout
    page: { fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif", background: GRAY_BG, color: TEXT, minHeight: "100vh" },
    container: { maxWidth: 900, margin: "0 auto", padding: "0 20px" },





    // Hero
    hero: {
        background: `linear-gradient(135deg, ${GREEN_DARK} 0%, ${GREEN} 60%, ${GREEN_MID} 100%)`,
        padding: "56px 20px 52px",
        color: WHITE,
    },
    heroInner: { maxWidth: 900, margin: "0 auto" },
    heroBadge: {
        display: "inline-block", background: ORANGE, color: WHITE,
        fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
        textTransform: "uppercase", padding: "4px 12px", borderRadius: 3, marginBottom: 20,
    },
    heroH1: { fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 18, color: WHITE },
    heroSub: { fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, maxWidth: 680, marginBottom: 28 },
    heroMeta: { display: "flex", gap: 24, fontSize: 13, color: "rgba(255,255,255,0.6)", flexWrap: "wrap" },
    heroMetaItem: { display: "flex", alignItems: "center", gap: 6 },

    // Quick Answer
    quickAnswer: {
        background: WHITE, borderLeft: `4px solid ${GREEN}`,
        padding: "28px 32px", margin: "0 auto", maxWidth: 900,
        marginTop: -1, boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
    },
    qaLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: ORANGE, marginBottom: 10 },
    qaText: { fontSize: 15.5, lineHeight: 1.75, color: TEXT },

    // Main content
    main: { maxWidth: 900, margin: "32px auto", padding: "0 20px 80px" },


    // Section card
    card: {
        background: WHITE, border: `1px solid ${BORDER}`,
        borderRadius: 8, padding: "32px 36px", marginBottom: 20,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    },
    featuredImageWrap: {
        width: "100%",
        margin: "24px 0 32px",
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid ${BORDER}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    featuredImage: {
        width: "100%",
        height: "auto",
        display: "block",
    },
    sectionNum: { fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: ORANGE, display: "block", marginBottom: 6 },
    h2: { fontSize: "clamp(19px, 2.5vw, 24px)", fontWeight: 700, color: GREEN_DARK, lineHeight: 1.3, margin: 0 },
    h3: { fontSize: 17, fontWeight: 600, color: GREEN, marginTop: 22, marginBottom: 10 },
    para: { fontSize: 15.5, lineHeight: 1.75, color: "#2e3d30", marginBottom: 14 },
    ul: { paddingLeft: 22, margin: "8px 0 14px" },
    li: { fontSize: 15.5, lineHeight: 1.7, color: "#2e3d30", marginBottom: 6 },

    // Arrow note
    arrowNote: {
        background: GREEN_LIGHT, border: `1px dashed #8fcc9a`,
        borderRadius: 4, padding: "12px 16px", margin: "14px 0",
        fontSize: 15, color: GREEN_DARK, display: "flex", gap: 10, alignItems: "flex-start",
    },

    // Category grid
    catGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, margin: "16px 0" },
    catCell: {
        background: GREEN_LIGHT, border: `1px solid ${BORDER}`,
        borderRadius: 6, padding: "16px 18px",
    },
    catLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: ORANGE, marginBottom: 4 },
    catName: { fontSize: 15, fontWeight: 600, color: GREEN_DARK },

    // Targets block
    targetsBlock: {
        background: GREEN_DARK, borderRadius: 6, padding: "24px 28px", margin: "16px 0",
    },
    targetsTitle: { fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#8fdc9f", marginBottom: 14 },
    targetLi: {
        color: "rgba(255,255,255,0.88)", fontSize: 15, padding: "8px 0",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", gap: 10,
    },
    targetArrow: { color: "#8fdc9f", flexShrink: 0 },

    // Verdict list
    verdictItem: { display: "flex", alignItems: "flex-start", gap: 10, padding: "6px 0", fontSize: 15.5, color: TEXT },

    // Info card
    infoCard: {
        background: GREEN_LIGHT, border: `1px solid ${BORDER}`,
        borderRadius: 6, padding: "18px 20px", margin: "12px 0",
        display: "flex", gap: 14, alignItems: "flex-start",
    },
    infoCardIcon: { fontSize: 24, flexShrink: 0, marginTop: 2 },
    infoCardTitle: { fontSize: 13, fontWeight: 700, color: GREEN_DARK, marginBottom: 4 },
    infoCardBody: { fontSize: 15, color: "#2e3d30", lineHeight: 1.6 },

    // FAQ
    faqItem: { background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 6, marginBottom: 10, overflow: "hidden" },
    faqBtn: {
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
    },
    faqQ: { fontSize: 15.5, fontWeight: 600, color: GREEN_DARK, textAlign: "left" },
    faqIcon: { fontSize: 18, color: GREEN, transition: "transform .25s", flexShrink: 0 },
    faqA: { padding: "0 20px 18px 20px", fontSize: 15, color: TEXT, lineHeight: 1.7 },

    // Climeto perspective
    climetoBlock: {
        background: `linear-gradient(135deg, ${GREEN_DARK} 0%, ${GREEN} 100%)`,
        borderRadius: 8, padding: "36px 40px", color: WHITE, marginBottom: 20,
    },
    climetoH2: { fontSize: 22, fontWeight: 700, color: WHITE, marginBottom: 14, marginTop: 8 },
    climetoPara: { fontSize: 15.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 16 },
    shiftGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 },
    shiftCell: {
        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 6, padding: "16px 18px",
    },
    shiftLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#8fdc9f", marginBottom: 6 },
    shiftText: { fontSize: 15, color: "rgba(255,255,255,0.9)" },



    // Site Footer
    siteFooter: { background: GREEN_DARK, color: WHITE, padding: "40px 20px 24px" },
    footerGrid: { maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 32 },
    footerBrand: { fontSize: 20, fontWeight: 800, color: WHITE, marginBottom: 12 },
    footerText: { fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 },
    footerHeading: { fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#8fdc9f", marginBottom: 14 },
    footerLink: { display: "block", color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", marginBottom: 8 },
    footerBottom: { borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", maxWidth: 1000, margin: "0 auto" },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlasticEPRBlog() {
    return (
        <div style={s.page}>





            {/* ── Hero ── */}
            <div style={s.hero}>
                <div style={s.heroInner}>
                    <span style={s.heroBadge}>Regulatory Guide · 2026</span>
                    <h1 style={s.heroH1}>
                        Plastic EPR Rules in India (2026): Detailed Regulatory Guide with Key Provisions
                    </h1>
                    <p style={s.heroSub}>
                        A comprehensive breakdown of India's Extended Producer Responsibility framework for plastic packaging — targets, categories, credits, and compliance obligations.
                    </p>
                    <div style={s.heroMeta}>

                        <span style={s.heroMetaItem}>📅 Updated: 2026</span>
                        <span style={s.heroMetaItem}>⏱ 10 min read</span>
                        <span style={s.heroMetaItem}>🏢 By Climeto Sustainable Services</span>
                    </div>
                </div>
            </div>

            {/* ── Quick Answer ── */}
            <div style={{ background: GREEN_DARK, paddingBottom: 32 }}>
                <div style={s.quickAnswer}>
                    <div style={s.qaLabel}>⚡ Summary</div>
                    <p style={s.qaText}>
                        Plastic EPR Rules in India are governed under the Plastic Waste Management Rules, 2016 (as amended), with detailed EPR guidelines introduced in 2022. These rules require businesses introducing plastic packaging into the market to ensure collection, recycling, reuse, or end-of-life disposal of equivalent plastic waste, along with meeting recycling targets, using recycled content, and maintaining traceability via the Central Pollution Control Board.
                    </p>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div style={s.main}>
                <div>


                        {/* Section 1 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 01" title="Legal Framework: Exact Rules That Govern EPR" />
                            
                            <div style={s.featuredImageWrap}>
                                <img src="/plastic_epr.png" alt="Plastic EPR Rules in India" style={s.featuredImage} />
                            </div>
                            <p style={s.para}>Plastic EPR in India is legally defined under:</p>
                            <InfoCard icon="📜" title="Core Regulation">
                                Plastic Waste Management Rules, 2016
                            </InfoCard>
                            <h3 style={s.h3}>Key Amendments</h3>
                            <ul style={s.ul}>
                                <li style={s.li}>2018 Amendment</li>
                                <li style={s.li}>2021 Amendment</li>
                                <li style={s.li}>2022 Amendment (Most critical for EPR implementation)</li>
                                <li style={s.li}>Subsequent updates (including 2024–2026 refinements)</li>
                            </ul>
                            <ArrowNote>
                                The 2022 EPR Guidelines for Plastic Packaging introduced: Digital compliance system, Category-wise targets, Credit-based mechanism, and Recycled content obligations.
                            </ArrowNote>
                        </div>

                        {/* Section 2 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 02" title="Scope of Applicability (As Per Rules)" />
                            <p style={s.para}>The rules apply to entities that introduce plastic packaging into the market, including:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Manufacturers of plastic packaging</li>
                                <li style={s.li}>Importers of plastic packaging or packaged goods</li>
                                <li style={s.li}>Brand owners using plastic packaging</li>
                            </ul>
                            <p style={s.para}>Additionally, the framework includes:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Plastic Waste Processors (recyclers, co-processors, waste-to-energy units)</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 03" title="Core EPR Obligations Under the Rules" />

                            <h3 style={s.h3}>3.1 Collection & Processing Obligation</h3>
                            <p style={s.para}>As per EPR provisions:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Entities must ensure collection and processing of plastic packaging waste equivalent to the quantity introduced into the market</li>
                            </ul>
                            <p style={s.para}>Processing includes:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Recycling</li>
                                <li style={s.li}>Co-processing</li>
                                <li style={s.li}>Waste-to-energy</li>
                                <li style={s.li}>Industrial composting (for compostable plastics)</li>
                            </ul>

                            <h3 style={s.h3}>3.2 Category-Wise Compliance</h3>
                            <p style={s.para}>Plastic packaging is divided into:</p>
                            <div style={s.catGrid}>
                                {categories.map((c) => (
                                    <div key={c.label} style={s.catCell}>
                                        <div style={s.catLabel}>{c.label}</div>
                                        <div style={s.catName}>{c.name}</div>
                                    </div>
                                ))}
                            </div>
                            <ArrowNote>Obligations must be met separately for each category.</ArrowNote>
                        </div>

                        {/* Section 4 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 04" title="EPR Targets (Regulatory Structure)" />

                            <h3 style={s.h3}>4.1 Collection Targets</h3>
                            <p style={s.para}>Targets are based on:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Quantity of plastic introduced in previous years</li>
                                <li style={s.li}>Progressive increase over time</li>
                            </ul>
                            <div style={s.targetsBlock}>
                                <div style={s.targetsTitle}>Indicative Structure (as per guideline progression)</div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {["Initial years: ~35%", "Increasing annually", "Moving toward 100% recovery obligation"].map((t) => (
                                        <li key={t} style={s.targetLi}>
                                            <span style={s.targetArrow}>→</span> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h3 style={s.h3}>4.2 Recycling Targets (Critical Requirement)</h3>
                            <p style={s.para}>The rules specify minimum recycling percentages:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Higher for rigid plastics</li>
                                <li style={s.li}>Lower but mandatory for flexible and MLP</li>
                            </ul>
                            <ArrowNote>This ensures not just collection — but actual recycling.</ArrowNote>

                            <h3 style={s.h3}>4.3 End-of-Life Disposal Targets</h3>
                            <p style={s.para}>For non-recyclable plastics:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Allowed methods include co-processing and waste-to-energy</li>
                                <li style={s.li}>Must follow prescribed environmental standards</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 05" title="Mandatory Use of Recycled Content" />
                            <p style={s.para}>A major addition under the 2022 amendment:</p>
                            <ArrowNote>Businesses must use recycled plastic content in packaging.</ArrowNote>
                            <p style={s.para}>This requirement:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Is category-specific</li>
                                <li style={s.li}>Increases over time</li>
                                <li style={s.li}>Applies especially to rigid plastics</li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 06" title="EPR Certificates (Credit Mechanism)" />
                            <p style={s.para}>The rules allow compliance through:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Direct waste management</li>
                                <li style={s.li}>Or EPR certificates issued by registered processors</li>
                            </ul>
                            <InfoCard icon="🔑" title="Key Points">
                                Certificates are generated after verified processing, tracked via the Central Pollution Control Board portal, and must be category-specific.
                            </InfoCard>
                        </div>

                        {/* Section 7 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 07" title="Registration & Compliance System" />

                            <h3 style={s.h3}>7.1 Mandatory Registration</h3>
                            <p style={s.para}>All applicable entities must register on the CPCB EPR portal.</p>

                            <h3 style={s.h3}>7.2 Annual Returns</h3>
                            <p style={s.para}>Entities must submit:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Plastic packaging data</li>
                                <li style={s.li}>Category-wise quantities</li>
                                <li style={s.li}>Compliance details</li>
                            </ul>

                            <h3 style={s.h3}>7.3 Traceability Requirement</h3>
                            <p style={s.para}>The system requires:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Digital tracking of transactions</li>
                                <li style={s.li}>Documentation of waste flow</li>
                                <li style={s.li}>Verification of processing</li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 08" title="Carry Forward & Shortfall Adjustment" />
                            <p style={s.para}>Recent updates introduced:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Carry-forward of unmet targets (up to 3 years)</li>
                                <li style={s.li}>Condition: gradual fulfilment over time</li>
                            </ul>
                            <ArrowNote>This adds flexibility but also ensures eventual compliance.</ArrowNote>
                        </div>

                        {/* Section 9 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 09" title="Environmental Compensation (Penalties)" />
                            <p style={s.para}>Non-compliance leads to:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Environmental compensation charges</li>
                                <li style={s.li}>Based on shortfall in obligations</li>
                                <li style={s.li}>Enforced by the Central Pollution Control Board</li>
                            </ul>
                        </div>

                        {/* Section 10 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 10" title="Key Compliance Risks (Ground Reality)" />
                            <p style={s.para}>Even with strong rules, challenges remain:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Over-reliance on self-reported data</li>
                                <li style={s.li}>Gaps in verification systems</li>
                                <li style={s.li}>Informal sector integration issues</li>
                                <li style={s.li}>Quality concerns in EPR certificates</li>
                            </ul>
                        </div>

                        {/* Section 11 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 11" title="Practical Interpretation (What Businesses Should Understand)" />
                            <p style={s.para}>EPR is <strong>not</strong> just:</p>
                            {[
                                { icon: "❌", text: "A documentation process" },
                                { icon: "❌", text: "A credit purchase exercise" },
                            ].map((v) => (
                                <div key={v.text} style={s.verdictItem}>
                                    <span>{v.icon}</span> {v.text}
                                </div>
                            ))}
                            <p style={{ ...s.para, marginTop: 16 }}>It <strong>is</strong>:</p>
                            {[
                                { icon: "✅", text: "A waste accountability system" },
                                { icon: "✅", text: "A traceability framework" },
                                { icon: "✅", text: "A market-based compliance mechanism" },
                            ].map((v) => (
                                <div key={v.text} style={s.verdictItem}>
                                    <span>{v.icon}</span> {v.text}
                                </div>
                            ))}
                        </div>

                        {/* Section 12 */}
                        <div style={s.card}>
                            <SectionHeading number="Section 12" title="Why These Rules Matter" />
                            <p style={s.para}>The Plastic EPR framework aims to:</p>
                            <ul style={s.ul}>
                                <li style={s.li}>Reduce plastic pollution</li>
                                <li style={s.li}>Improve recycling rates</li>
                                <li style={s.li}>Formalise the waste management ecosystem</li>
                                <li style={s.li}>Enable a circular economy</li>
                            </ul>
                        </div>

                        {/* FAQs */}
                        <div style={s.card}>
                            <SectionHeading number="FAQs" title="Frequently Asked Questions" />
                            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                        </div>

                        {/* Climeto Perspective */}
                        <div style={s.climetoBlock}>
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#8fdc9f" }}>Climeto's Perspective</span>
                            <h2 style={s.climetoH2}>From Compliance to Accountability</h2>
                            <p style={s.climetoPara}>
                                India's Plastic EPR framework is one of the most structured globally in terms of policy design. But its real success depends on:
                            </p>
                            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
                                {["Data accuracy", "Verification strength", "Traceability across the value chain"].map((i) => (
                                    <li key={i} style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 6 }}>{i}</li>
                                ))}
                            </ul>
                            <p style={s.climetoPara}>The shift is already happening:</p>
                            <div style={s.shiftGrid}>
                                <div style={s.shiftCell}>
                                    <div style={s.shiftLabel}>Transition</div>
                                    <div style={s.shiftText}>👉 From compliance → to accountability</div>
                                </div>
                                <div style={s.shiftCell}>
                                    <div style={s.shiftLabel}>Transition</div>
                                    <div style={s.shiftText}>👉 From reporting → to proof of impact</div>
                                </div>
                            </div>
                        </div>


            </div>

            </div>

            {/* ── Site Footer ── */}

        </div>
    );
}