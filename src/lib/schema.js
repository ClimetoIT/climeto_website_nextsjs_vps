export const SITE_URL = "https://climeto.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Climeto",
  legalName: "Climeto Sustainable Services Private Limited",
  alternateName: "Climeto Sustainable Services",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/Climeto-Transparent.png`,
  },
  image: `${SITE_URL}/Climeto-Transparent.png`,
  foundingDate: "2022",
  description:
    "Climeto Sustainable Services Private Limited is an environmental services, sustainability, Extended Producer Responsibility (EPR), plastic stewardship, carbon credits, and climate change consulting firm headquartered in Indore, Madhya Pradesh, India.",
  email: "info@climeto.com",
  telephone: "+91-9039946319",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Plot No. 1A-2A, Second Floor, Scheme No. 113, KTM Showroom – Near Brilliant Convention Center, Vijay Nagar",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9039946319",
      email: "info@climeto.com",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "support@climeto.com",
      contactType: "technical support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-7225018883",
      contactType: "human resources",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  member: [
    {
      "@type": "Person",
      name: "Keshav Bhootda",
      jobTitle: "Director",
    },
    {
      "@type": "Person",
      name: "Devesh Malu",
      jobTitle: "Director",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/climeto/",
    "https://www.instagram.com/climeto.official/",
    "https://www.youtube.com/channel/UCfDCy2RHjWjb1HPW9yIJ11g",
    "https://www.instagram.com/theclimetotv/",
    "https://www.justdial.com/Indore/Climeto",
  ],
  knowsAbout: [
    "Environmental Services",
    "Sustainability Consulting",
    "Climate Change Consulting",
    "Extended Producer Responsibility (EPR)",
    "Plastic Waste Management",
    "E-Waste Management",
    "Battery Waste Management",
    "Tyre Waste Management",
    "Carbon Credits",
    "Plastic Credits",
    "Carbon Offsetting",
    "Net Zero Strategy",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Climeto Sustainability & EPR Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EPR Plastic Waste Management",
          url: `${SITE_URL}/epr-plastic`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EPR Battery Waste Management",
          url: `${SITE_URL}/epr-battery`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EPR Tyre Waste Management",
          url: `${SITE_URL}/epr-tyre`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EPR E-Waste Management",
          url: `${SITE_URL}/epr-waste`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plastic Stewardship Program",
          url: `${SITE_URL}/plastic-stewardship-program`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carbon Credits & Green Credits Consulting",
          url: `${SITE_URL}/carbon-services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plastic Credits & Sustainability Services",
          url: `${SITE_URL}/sustainability-services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carbon Offsets",
          url: `${SITE_URL}/carbon-offset`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Net Zero Achievement",
          url: `${SITE_URL}/net-zero`,
        },
      },
    ],
  },
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Climeto",
  alternateName: "Climeto Sustainable Services Private Limited",
  publisher: {
    "@id": ORG_ID,
  },
};

export function createFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function createServiceSchema({
  name,
  slug,
  description,
  serviceType,
  image = `${SITE_URL}/Climeto-Transparent.png`,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType || name,
    description,
    url: `${SITE_URL}/${slug}`,
    image,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export const HOME_FAQ_SCHEMA = createFaqSchema([
  {
    question: "What does Climeto Sustainable Services Private Limited do?",
    answer:
      "Climeto is an environmental services, sustainability, and climate change consulting company founded in 2022 and headquartered in Indore, Madhya Pradesh, India. We provide Extended Producer Responsibility (EPR) compliance for plastic, e-waste, battery, and tyre waste, along with carbon credits, plastic credits, carbon offsetting, plastic stewardship, and Net Zero advisory.",
  },
  {
    question: "Which EPR compliance services does Climeto offer in India?",
    answer:
      "Climeto offers end-to-end CPCB and SPCB Extended Producer Responsibility (EPR) registration, target fulfillment, annual return filing, and credit procurement for Plastic Packaging Waste, E-Waste, Battery Waste, and Tyre Waste across India.",
  },
  {
    question: "How does Climeto help businesses achieve Net Zero and carbon neutrality?",
    answer:
      "Climeto helps organizations measure their carbon footprint across Scope 1, 2, and 3 emissions, develop actionable decarbonization roadmaps, and offset residual emissions using verified carbon credits and green credits.",
  },
  {
    question: "Where is Climeto headquartered and how can I contact a consultant?",
    answer:
      "Climeto is headquartered at Plot No. 1A-2A, Second Floor, Scheme No. 113, Vijay Nagar, Indore, Madhya Pradesh, India – 452010. You can reach our business team at +91-9039946319 or email info@climeto.com.",
  },
]);

export const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Climeto Sustainable Services Private Limited",
  url: `${SITE_URL}/about-us`,
  mainEntity: {
    "@id": ORG_ID,
  },
};

export const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Climeto Sustainable Services Private Limited",
  url: `${SITE_URL}/contact-us`,
  mainEntity: {
    "@id": ORG_ID,
  },
};

export const SERVICE_SCHEMAS = {
  eprPlastic: {
    service: createServiceSchema({
      name: "EPR Plastic Waste Management",
      slug: "epr-plastic",
      serviceType: "Extended Producer Responsibility (EPR) Plastic Compliance",
      description:
        "End-to-end CPCB EPR registration, plastic waste credit fulfillment, recycling network management, and annual return filing for PIBOs across India.",
      image: `${SITE_URL}/plastic_epr.png`,
    }),
    faq: createFaqSchema([
      {
        question: "Who needs EPR Plastic registration in India?",
        answer:
          "Producers, Importers, and Brand Owners (PIBOs) introducing plastic packaging into the Indian market are mandated by CPCB under the Plastic Waste Management Rules to obtain EPR registration and meet annual recycling targets.",
      },
      {
        question: "How does Climeto assist with EPR Plastic compliance?",
        answer:
          "Climeto manages CPCB portal registration, EPR target calculation, verified plastic credit procurement from registered PWPs, and timely quarterly and annual compliance filings.",
      },
    ]),
  },
  eprBattery: {
    service: createServiceSchema({
      name: "EPR Battery Waste Management",
      slug: "epr-battery",
      serviceType: "Extended Producer Responsibility (EPR) Battery Compliance",
      description:
        "Comprehensive CPCB EPR registration, battery waste collection, recycling certificates, and compliance reporting under India's Battery Waste Management Rules.",
    }),
    faq: createFaqSchema([
      {
        question: "Who is required to comply with Battery Waste EPR Rules in India?",
        answer:
          "Manufacturers, importers, assemblers, and brand owners placing portable, automotive, industrial, or EV batteries in the Indian market must register on the CPCB Battery EPR portal and fulfill recycling targets.",
      },
      {
        question: "Does Climeto handle Battery EPR certificate procurement and filings?",
        answer:
          "Yes, Climeto provides complete support from CPCB registration and target planning to procuring verified EPR certificates from authorized recyclers and filing annual returns.",
      },
    ]),
  },
  eprTyre: {
    service: createServiceSchema({
      name: "EPR Tyre Waste Management",
      slug: "epr-tyre",
      serviceType: "Extended Producer Responsibility (EPR) Tyre Compliance",
      description:
        "End-to-end CPCB EPR registration, waste tyre recycling credit procurement, and statutory compliance management for tyre producers and importers in India.",
    }),
    faq: createFaqSchema([
      {
        question: "Who needs EPR registration for waste tyres in India?",
        answer:
          "Tyre manufacturers, importers of new or waste tyres, and vehicle manufacturers importing fitted tyres are required to register on the CPCB Waste Tyre EPR portal and fulfill annual recycling obligations.",
      },
      {
        question: "How does Climeto help with Waste Tyre EPR compliance?",
        answer:
          "Climeto streamlines CPCB registration, verifies authorized tyre recyclers, facilitates EPR credit transfers, and ensures accurate annual return submissions.",
      },
    ]),
  },
  eprWaste: {
    service: createServiceSchema({
      name: "EPR E-Waste Management",
      slug: "epr-waste",
      serviceType: "Extended Producer Responsibility (EPR) E-Waste Compliance",
      description:
        "Complete CPCB E-Waste EPR registration, recycling target fulfillment, certificate trading, and regulatory compliance for electronics producers and importers in India.",
    }),
    faq: createFaqSchema([
      {
        question: "Which businesses require E-Waste EPR registration in India?",
        answer:
          "Manufacturers, producers, importers, and brand owners of electrical and electronic equipment (EEE) listed under the E-Waste (Management) Rules must obtain CPCB EPR registration and fulfill annual recycling targets.",
      },
      {
        question: "What E-Waste compliance services does Climeto provide?",
        answer:
          "Climeto handles CPCB portal onboarding, target computation, procurement of verified E-Waste EPR certificates from authorized recyclers, and quarterly/annual compliance filings.",
      },
    ]),
  },
  plasticStewardship: {
    service: createServiceSchema({
      name: "Plastic Stewardship Program",
      slug: "plastic-stewardship-program",
      serviceType: "Plastic Waste Reduction & Circular Economy Consulting",
      description:
        "Traceable plastic footprint assessment, recovery, recycling, and plastic neutrality programs designed for sustainability-focused brands.",
      image: `${SITE_URL}/plastic_credits.png`,
    }),
    faq: createFaqSchema([
      {
        question: "What is Climeto's Plastic Stewardship Program?",
        answer:
          "Climeto's Plastic Stewardship Program helps businesses measure their plastic footprint, recover and recycle equivalent plastic waste through verified networks, and achieve measurable plastic neutrality.",
      },
    ]),
  },
  carbonServices: {
    service: createServiceSchema({
      name: "Carbon & Green Credits Services",
      slug: "carbon-services",
      serviceType: "Carbon Credits & Green Credit Program Advisory",
      description:
        "Advisory, project development, verification, and trading support for Carbon Credits and Green Credits to help enterprises meet climate and ESG goals.",
      image: `${SITE_URL}/carbon_credit.png`,
    }),
    faq: createFaqSchema([
      {
        question: "How can Climeto help with Carbon Credits and Green Credits?",
        answer:
          "Climeto assists organizations with project registration, MRV verification, credit issuance, and sourcing high-integrity carbon and green credits aligned with national and international standards.",
      },
    ]),
  },
  plasticServices: {
    service: createServiceSchema({
      name: "Carbon Credit Consulting",
      slug: "plastic-services",
      serviceType: "Carbon Credits & Climate Finance Consulting",
      description:
        "Strategic guidance on carbon credit generation, registry verification, and credit procurement for corporate decarbonization.",
      image: `${SITE_URL}/carbon_credit.png`,
    }),
  },
  sustainabilityServices: {
    service: createServiceSchema({
      name: "Plastic Credits & Sustainability Services",
      slug: "sustainability-services",
      serviceType: "Plastic Credits & Corporate Sustainability Consulting",
      description:
        "Verified plastic credit solutions, ESG reporting, and corporate sustainability consulting to build circular and compliant value chains.",
      image: `${SITE_URL}/plastic_credits.png`,
    }),
  },
  carbonOffset: {
    service: createServiceSchema({
      name: "Carbon Offset Solutions",
      slug: "carbon-offset",
      serviceType: "Carbon Footprint Measurement & Offsetting",
      description:
        "End-to-end GHG accounting and verified carbon offset portfolios to neutralize corporate operational and supply-chain emissions.",
      image: `${SITE_URL}/carbon_credit.png`,
    }),
  },
  netZero: {
    service: createServiceSchema({
      name: "Net Zero Achievement Consulting",
      slug: "net-zero",
      serviceType: "Net Zero Strategy & Decarbonization Consulting",
      description:
        "Science-based Net Zero roadmaps, Scope 1, 2 & 3 emissions management, and climate transition consulting for enterprises.",
    }),
  },
};

