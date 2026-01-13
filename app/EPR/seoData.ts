

export interface CityData {
  title: string;
  description: string;
  heading: string;
  content: string;
  image: string;
}

export interface StateData {
  [city: string]: CityData;
}

export interface CitySEOData {
  [state: string]: StateData;
}

export const citySEOData: CitySEOData = {
  Maharashtra: {
    Mumbai: {
      title: "EPR Compliance Services in Mumbai",
      description: "Expert support for EPR registration, compliance, and reporting in Mumbai.",
      heading: "EPR Compliance & Registration in Mumbai",
      content: " Mumbai-based producers and brand owners must comply with  EPR regulations to avoid penalties. We support EPR registration, annual returns, credit procurement,annual Return Filing and BESTcompliance management.This includes compliance support across Battery EPR, E-waste, Plastic Waste, Used Oil, Tyres, End-of-Life Vehicles (ELV), C&D waste, non-ferrous metal waste, paper & packaging, and sanitary products.",
      image: "/cities/Mumbai.jpg",
    },
    Pune: {
      title: "EPR Compliance Consultancy in Pune",
      description: "Simplified EPR compliance solutions for Pune-based businesses.",
      heading: "BEST EPR Compliance in Pune",
      content: " EPR compliance in Pune requires accurate reporting, timely Annual Return filings, and credits Fulfillment. We help organizations meet  guidelines through structured compliance planning and documentation support. Our services reduce compliance risk and regulatory delays.",
      image: "/cities/pune.jpg",
    },
    Nagpur: {
      title: "EPR Compliance Services in Nagpur",
      description: "Reliable EPR compliance assistance aligned with CPCB norms.",
      heading: "CPCB-Aligned EPR Compliance in Nagpur",
      content: " Nagpur entities covered under EPR rules must ensure proper registration and annual compliance. We assist with Epr Compliance  EPR Registration, credit fulfillment, and  Annual return filings. Our compliance framework ensures transparency and regulatory confidence.",
      image: "/cities/Nagpur.jpg",
    },
    Nashik: {
      title: "EPR Compliance Services in Nashik",
      description: "Professional EPR compliance solutions in Nashik.",
      heading: "EPR Registration & Compliance in Nashik",
      content: "Nashik-based businesses must comply with CPCB EPR regulations. We provide structured compliance support including registration, reporting, and credit reconciliation.",
      image: "/cities/Comman.jpg",
    },
    Aurangabad: {
      title: "EPR Compliance Services in Aurangabad",
      description: "Expert EPR compliance support in Aurangabad.",
      heading: "CPCB EPR Compliance in Aurangabad",
      content: "Aurangabad organizations must ensure timely EPR registration and reporting. We help manage compliance requirements efficiently.",
      image: "/cities/Comman.jpg",
    },
    Thane: {
      title: "EPR Compliance Management in Thane",
      description: "Professional EPR compliance solutions for Thane.",
      heading: "Complete EPR Compliance Support in Thane",
      content: "Thane-based businesses must comply with evolving EPR obligations under CPCB regulations. We provide structured compliance support including registration, reporting, and credit reconciliation. Our process ensures timely and penalty-free compliance.",
      image: "/cities/Thane.webp",
    },
  },
  Gujarat: {
    Ahmedabad: {
      title: "EPR Compliance Services in Ahmedabad",
      description: "Expert-led EPR compliance and registration support.",
      heading: "EPR Registration & Compliance in Ahmedabad",
      content: "Ahmedabad organizations falling under EPR regulations must ensure accurate filings and credit management. We help streamline EPR registration, compliance tracking, and annual returns. Our solutions align fully with CPCB requirements.",
      image: "/cities/Ahamdabad.png",
    },
    Surat: {
      title: "EPR Compliance Consultancy in Surat",
      description: "BEST EPR compliance solutions for Surat.",
      heading: "CPCB-Compliant EPR Services in Surat",
      content: "EPR compliance in Surat demands proper documentation and verified EPR credits. We assist in meeting regulatory timelines and maintaining compliance records. Our services help reduce regulatory risks and non-compliance exposure.",
      image: "/cities/Surat.png",
    },
    Vadodara: {
      title: "EPR Compliance Support in Vadodara",
      description: "Simplified EPR compliance aligned with national regulations.",
      heading: "EPR Compliance & Reporting in Vadodara",
      content: "Vadodara-based entities must follow CPCB EPR guidelines for waste responsibility. We provide complete support for registration, compliance monitoring, and annual submissions. Our approach ensures consistency and regulatory clarity.",
      image: "/cities/vadodara.png",
    },
    Rajkot: {
      title: "EPR Compliance Services in Rajkot",
      description: "Trusted EPR compliance solutions for Rajkot.",
      heading: "BEST EPR Compliance in Rajkot",
      content: "Rajkot organizations covered under EPR rules require structured compliance systems. We assist with registration, EPR credit fulfillment, and reporting. Our services ensure smooth regulatory alignment with CPCB norms.",
      image: "/cities/Rajkot.png",
    },
    Vapi: {
      title: "EPR Compliance Consultancy in Vapi",
      description: "Professional EPR compliance assistance in Vapi.",
      heading: "CPCB EPR Compliance Support in Vapi",
      content: "EPR compliance in Vapi requires timely filings and accurate data reporting. We help organizations manage EPR obligations, credits, and returns efficiently. Our compliance support minimizes regulatory uncertainty.",
      image: "/cities/Vapi.png",
    },
    Ankleshwar: {
      title: "EPR Compliance Services in Ankleshwar",
      description: "Reliable EPR compliance support in Ankleshwar.",
      heading: "EPR Registration & Compliance in Ankleshwar",
      content: "Ankleshwar entities must comply with CPCB EPR regulations through timely registration and reporting.",
      image: "/cities/Comman2.png",
    },
    Bharuch: {
      title: "EPR Compliance Services in Bharuch",
      description: "Professional EPR compliance solutions in Bharuch.",
      heading: "CPCB EPR Compliance in Bharuch",
      content: "Bharuch businesses must ensure proper EPR Registration and compliance tracking.",
      image: "/cities/Comman2.png",
    },
  },
  Karnataka: {
    Bengaluru: {
      title: "EPR Compliance Services in Bengaluru",
      description: "Expert EPR compliance and registration support in Bengaluru.",
      heading: "EPR Registration & Compliance in Bengaluru",
      content: "Bengaluru-based entities must adhere to CPCB EPR regulations for continued operations. We support EPR registration, compliance reporting, and credit management. Our solutions ensure audit-ready compliance.",
      image: "/cities/Karnatak.webp",
    },
    Mysuru: {
      title: "EPR Compliance Consultancy in Mysuru",
      description: "Simplified EPR compliance solutions for Mysuru.",
      heading: "CPCB-Compliant EPR Services in Mysuru",
      content: "Mysuru organizations under EPR rules require consistent regulatory compliance. We assist with EPR Registration, filings, and annual returns. Our structured approach ensures smooth compliance management.",
      image: "/cities/Mysuru.png",
    },
    HubballiDharwad: {
      title: "EPR Compliance Services in Hubballi–Dharwad",
      description: "Professional EPR compliance support in Hubballi–Dharwad.",
      heading: "EPR Registration & Compliance in Hubballi–Dharwad",
      content: "Hubballi–Dharwad businesses must comply with CPCB EPR regulations through proper registration and reporting.",
      image: "/cities/Comman2.png",
    },
    Mangaluru: {
      title: "EPR Compliance Services in Mangaluru",
      description: "Reliable EPR compliance support in Mangaluru.",
      heading: "BEST EPR Compliance in Mangaluru",
      content: "EPR compliance in Mangaluru involves accurate reporting and credit fulfillment. We help manage CPCB registration and compliance timelines. Our services ensure transparency and regulatory alignment.",
      image: "/cities/Mangaluru.png",
    },
    Belagavi: {
      title: "EPR Compliance Services in Belagavi",
      description: "Expert EPR compliance assistance in Belagavi.",
      heading: "CPCB EPR Compliance in Belagavi",
      content: "Belagavi entities must ensure proper EPR registration and annual compliance with CPCB norms.",
      image: "/cities/Comman2.png",
    },
  },
  TamilNadu: {
    Chennai: {
      title: "EPR Compliance Services in Chennai",
      description: "Comprehensive EPR compliance solutions for Chennai.",
      heading: "CPCB EPR Compliance in Chennai",
      content: "Chennai-based organizations must comply with EPR rules set by CPCB. We assist with EPR registration, reporting, and credit compliance. Our approach reduces compliance burden and regulatory risks.",
      image: "/cities/epr-compliance-chennai.webp",
    },
    Coimbatore: {
      title: "EPR Compliance Consultancy in Coimbatore",
      description: "Expert-led EPR compliance support in Coimbatore.",
      heading: "EPR Registration & Reporting in Coimbatore",
      content: "EPR compliance in Coimbatore requires timely submissions and accurate documentation. We support organizations through registration, filings, and compliance tracking. Our services ensure uninterrupted regulatory adherence.",
      image: "/cities/Tamilnadu.webp",
    },
    Hosur: {
      title: "EPR Compliance Services in Hosur",
      description: "Professional EPR compliance solutions in Hosur.",
      heading: "CPCB EPR Compliance in Hosur",
      content: "Hosur businesses must comply with CPCB EPR regulations through timely registration and reporting.",
      image: "/cities/Comman2.png",
    },
    Tiruppur: {
      title: "EPR Compliance Services in Tiruppur",
      description: "Structured EPR compliance solutions in Tiruppur.",
      heading: "CPCB-Compliant EPR Support in Tiruppur",
      content: "Tiruppur entities covered under EPR regulations must maintain verified compliance records. We assist with EPR registration, returns, and credit fulfillment. Our solutions ensure consistency with CPCB guidelines.",
      image: "/cities/Tripura.jpg",
    },
    Madurai: {
      title: "EPR Compliance Consultancy in Madurai",
      description: "Professional EPR compliance assistance in Madurai.",
      heading: "BEST EPR Compliance in Madurai",
      content: "EPR compliance in Madurai involves proper Registration and annual reporting. We help organizations meet CPCB requirements through systematic compliance management. Our services reduce compliance complexity.",
      image: "/cities/Madurrai.png",
    },
    Salem: {
      title: "EPR Compliance Services in Salem",
      description: "Reliable EPR compliance support in Salem.",
      heading: "CPCB EPR Compliance in Salem",
      content: "Salem entities must ensure proper EPR registration and compliance tracking with CPCB norms.",
      image: "/cities/Comman2",
    },
  },
  Telangana: {
    Hyderabad: {
      title: "EPR Compliance Services in Hyderabad",
      description: "Expert EPR compliance and registration solutions.",
      heading: "EPR Registration & Compliance in Hyderabad",
      content: "Hyderabad-based organizations must follow CPCB EPR regulations for waste responsibility. We support registration, reporting, and EPR credit management. Our services ensure regulatory readiness and compliance clarity.",
      image: "/cities/Telangna.jpg",
    },
    Warangal: {
      title: "EPR Compliance Consultancy in Warangal",
      description: "Simplified EPR compliance support in Warangal.",
      heading: "CPCB EPR Compliance in Warangal",
      content: "Warangal entities under EPR obligations require structured compliance processes. We assist with registration, filings, and annual returns. Our approach ensures smooth regulatory adherence.",
      image: "/cities/Comman2.png",
    },
    Karimnagar: {
      title: "EPR Compliance Services in Karimnagar",
      description: "Professional EPR compliance solutions in Karimnagar.",
      heading: "EPR Registration & Compliance in Karimnagar",
      content: "Karimnagar businesses must comply with CPCB EPR regulations through proper registration and reporting.",
      image: "/cities/Comman2.png",
    },
  },
  AndhraPradesh: {
    Vishakhapatnam: {
      title: "EPR Compliance Services in Visakhapatnam",
      description: "Reliable EPR compliance support aligned with CPCB norms.",
      heading: "BEST EPR Compliance in Visakhapatnam",
      content: "Visakhapatnam-based organizations must ensure timely EPR registration and reporting. We help manage compliance requirements and EPR credits efficiently. Our solutions ensure consistent regulatory alignment.",
      image: "/cities/Andhra pradesh.jpg",
    },
    Vijayawada: {
      title: "EPR Compliance Consultancy in Vijayawada",
      description: "Professional EPR compliance solutions in Vijayawada.",
      heading: "CPCB-Compliant EPR Services in Vijayawada",
      content: "EPR compliance in Vijayawada requires accurate documentation and regulatory tracking. We assist with EPR registration, filings, and compliance monitoring. Our services help avoid regulatory delays.",
      image: "/cities/Comman2.png",
    },
    Guntur: {
      title: "EPR Compliance Services in Guntur",
      description: "BEST EPR compliance support in Guntur.",
      heading: "EPR Registration & Reporting in Guntur",
      content: "Guntur entities covered under EPR rules must maintain proper compliance records. We support registration, annual returns, and EPR credit fulfillment. Our approach ensures CPCB-aligned compliance.",
      image: "/cities/Guntur.png",
    },
    Tirupati: {
      title: "EPR Compliance Consultancy in Tirupati",
      description: "Simplified EPR compliance solutions for Tirupati.",
      heading: "CPCB EPR Compliance Support in Tirupati",
      content: "EPR compliance in Tirupati involves timely filings and proper Registration. We help organizations manage EPR obligations efficiently. Our services ensure smooth regulatory compliance.",
      image: "/cities/Tirupati.png",
    },
    Nellore: {
      title: "EPR Compliance Services in Nellore",
      description: "Expert EPR compliance assistance in Nellore.",
      heading: "BEST EPR Compliance in Nellore",
      content: "Nellore-based organizations must comply with CPCB EPR guidelines. We assist with registration, reporting, and compliance tracking. Our solutions ensure consistent and transparent compliance management.",
      image: "/cities/Nellore.png",
    },
  },
  Delhi: {
    NewDelhi: {
      title: "EPR Compliance Services in New Delhi",
      description: "Professional EPR compliance support aligned with CPCB regulations.",
      heading: "EPR Registration & Compliance in New Delhi",
      content: "New Delhi-based entities covered under EPR regulations must ensure timely registration and accurate reporting. We assist with CPCB EPR compliance, annual returns, and credit fulfillment. Our structured process helps avoid notices and penalties.",
      image: "/cities/Delhi.png",
    },
    NorthDelhi: {
      title: "EPR Compliance Services in North Delhi",
      description: "Expert EPR compliance solutions in North Delhi.",
      heading: "CPCB EPR Compliance in North Delhi",
      content: "North Delhi businesses must ensure proper EPR registration and compliance with CPCB norms.",
      image: "/cities/Comman2.png",
    },
    SouthDelhi: {
      title: "EPR Compliance Services in South Delhi",
      description: "Professional EPR compliance support in South Delhi.",
      heading: "EPR Registration & Compliance in South Delhi",
      content: "South Delhi entities must comply with CPCB EPR regulations through timely registration and reporting.",
      image: "/cities/Comman2.png",
    },
    EastDelhi: {
      title: "EPR Compliance Services in East Delhi",
      description: "Reliable EPR compliance assistance in East Delhi.",
      heading: "CPCB EPR Compliance in East Delhi",
      content: "East Delhi businesses must ensure accurate EPR registration and compliance tracking.",
      image: "/cities/Comman2.png",
    },
    WestDelhi: {
      title: "EPR Compliance Services in West Delhi",
      description: "Expert EPR compliance solutions in West Delhi.",
      heading: "EPR Registration & Compliance in West Delhi",
      content: "West Delhi entities must comply with CPCB EPR regulations through proper Registration and reporting.",
      image: "/cities/Comman2.png",
    },
  },
  Haryana: {
    Gurugram: {
      title: "EPR Compliance Consultancy in Gurugram",
      description: "BEST EPR compliance solutions in Gurugram.",
      heading: "CPCB-Compliant EPR Services in Gurugram",
      content: "EPR compliance in Gurugram requires precise documentation and timely filings. We support EPR registration, compliance tracking, and annual submissions. Our services ensure regulatory clarity and audit readiness.",
      image: "/cities/Haryana.jpg",
    },
    Faridabad: {
      title: "EPR Compliance Services in Faridabad",
      description: "Reliable EPR compliance assistance under CPCB norms.",
      heading: "EPR Registration & Reporting in Faridabad",
      content: "Faridabad entities must comply with CPCB EPR guidelines to maintain regulatory standing. We help manage EPR Registration, reporting, and credit obligations. Our approach ensures smooth and consistent compliance.",
      image: "/cities/Faridabad.jpg",
    },
    Manesar: {
      title: "EPR Compliance Services in Manesar",
      description: "Professional EPR compliance solutions in Manesar.",
      heading: "CPCB EPR Compliance in Manesar",
      content: "Manesar businesses must ensure proper EPR registration and compliance with CPCB regulations.",
      image: "/cities/Comman2.png",
    },
    Panipat: {
      title: "EPR Compliance Services in Panipat",
      description: "Professional EPR compliance management in Panipat.",
      heading: "BEST EPR Compliance in Panipat",
      content: "Panipat-based organizations under EPR rules must maintain transparent compliance records. We support registration, reporting, and ongoing compliance monitoring. Our services ensure CPCB-aligned adherence.",
      image: "/cities/Comman2.png",
    },
    Sonipat: {
      title: "EPR Compliance Consultancy in Sonipat",
      description: "Expert-led EPR compliance solutions in Sonipat.",
      heading: "EPR Registration & Compliance in Sonipat",
      content: "EPR compliance in Sonipat requires timely submissions and proper Registration. We help manage CPCB EPR requirements through structured compliance support. Our process ensures consistency and regulatory confidence.",
      image: "/cities/Comman2.png",
    },
  },
  UttarPradesh: {
    Noida: {
      title: "EPR Compliance Services in Noida",
      description: "Complete EPR compliance support for Noida-based entities.",
      heading: "CPCB-Compliant EPR Services in Noida",
      content: "Noida organizations must comply with CPCB EPR regulations for continued operations. We assist with EPR registration, reporting, and credit fulfillment. Our services ensure timely and penalty-free compliance.",
      image: "/cities/Comman2.png",
    },
    GreaterNoida: {
      title: "EPR Compliance Consultancy in Greater Noida",
      description: "Structured EPR compliance solutions in Greater Noida.",
      heading: "EPR Registration & Reporting in Greater Noida",
      content: "EPR compliance in Greater Noida requires accurate documentation and regular filings. We help manage CPCB registrations and annual returns. Our approach ensures regulatory alignment and transparency.",
      image: "/cities/Comman2.png",
    },
    Ghaziabad: {
      title: "EPR Compliance Services in Ghaziabad",
      description: "Reliable EPR compliance assistance in Ghaziabad.",
      heading: "BEST EPR Compliance in Ghaziabad",
      content: "Ghaziabad-based entities must meet CPCB EPR obligations through timely compliance. We support EPR registration, filings, and compliance monitoring. Our solutions reduce regulatory uncertainty.",
      image: "/cities/Ghaziabad.jpg",
    },
    Lucknow: {
      title: "EPR Compliance Consultancy in Lucknow",
      description: "Expert EPR compliance support aligned with CPCB norms.",
      heading: "EPR Registration & Compliance in Lucknow",
      content: "Lucknow organizations covered under EPR rules must ensure proper Registration and reporting. We assist with EPR registration, annual returns, and credit management. Our services ensure smooth regulatory compliance.",
      image: "/cities/Lucknow.jpg",
    },
    Kanpur: {
      title: "EPR Compliance Services in Kanpur",
      description: "Simplified EPR compliance solutions in Kanpur.",
      heading: "CPCB-Compliant EPR Services in Kanpur",
      content: "EPR compliance in Kanpur involves accurate filings and timely submissions. We support CPCB registration, reporting, and compliance tracking. Our approach ensures consistent regulatory adherence.",
      image: "/cities/kanpur.webp",
    },
    Agra: {
      title: "EPR Compliance Consultancy in Agra",
      description: "Professional EPR compliance support in Agra.",
      heading: "BEST EPR Compliance in Agra",
      content: "Agra-based entities must follow CPCB EPR regulations to avoid penalties. We assist with EPR registration, reporting, and credit fulfillment. Our services simplify compliance management.",
      image: "/cities/Agra.jpg",
    },
    Meerut: {
      title: "EPR Compliance Services in Meerut",
      description: "Reliable EPR compliance assistance for Meerut.",
      heading: "EPR Registration & Reporting in Meerut",
      content: "EPR compliance in Meerut requires structured documentation and regulatory tracking. We help manage CPCB EPR requirements effectively. Our solutions ensure transparency and compliance continuity.",
      image: "/cities/Meerut.webp",
    },
  },
  Rajasthan: {
    Jaipur: {
      title: "EPR Compliance Services in Jaipur",
      description: "BEST EPR compliance solutions in Jaipur.",
      heading: "CPCB EPR Compliance in Jaipur",
      content: "Jaipur-based organizations must comply with CPCB EPR norms for waste responsibility. We support registration, reporting, and credit management. Our approach ensures timely and accurate compliance.",
      image: "/cities/Rajasthan.png",
    },
    Udaipur: {
      title: "EPR Compliance Consultancy in Udaipur",
      description: "Simplified EPR compliance support in Udaipur.",
      heading: "EPR Registration & Compliance in Udaipur",
      content: "EPR compliance in Udaipur involves accurate reporting and proper Registration. We assist with CPCB EPR registration and annual returns. Our services ensure regulatory alignment.",
      image: "/cities/Udaipur.jpg",
    },
    Jodhpur: {
      title: "EPR Compliance Services in Jodhpur",
      description: "Professional EPR compliance assistance in Jodhpur.",
      heading: "BEST EPR Compliance in Jodhpur",
      content: "Jodhpur entities covered under EPR rules must maintain verified compliance records. We support EPR registration, filings, and credit obligations. Our solutions reduce compliance complexity.",
      image: "/cities/Jodhpur.webp",
    },
    Kota: {
      title: "EPR Compliance Consultancy in Kota",
      description: "Expert-led EPR compliance solutions in Kota.",
      heading: "CPCB-Compliant EPR Services in Kota",
      content: "EPR compliance in Kota requires timely submissions and documentation accuracy. We help manage EPR registration and annual compliance. Our approach ensures smooth regulatory adherence.",
      image: "/cities/Kota.png",
    },
    Bhiwadi: {
      title: "EPR Compliance Services in Bhiwadi",
      description: "Reliable EPR compliance support in Bhiwadi.",
      heading: "EPR Registration & Compliance in Bhiwadi",
      content: "Bhiwadi businesses must ensure proper EPR registration and compliance with CPCB norms.",
      image: "/cities/Comman2.png",
    },
  },
  MadhyaPradesh: {
    Indore: {
      title: "EPR Compliance Services in Indore",
      description: "CPCB-aligned EPR compliance support in Indore.",
      heading: "EPR Registration & Compliance in Indore",
      content: "Indore-based entities under EPR regulations must ensure accurate registration and timely filings. We support CPCB EPR compliance, annual returns, and credit management. Our services ensure smooth regulatory adherence.",
      image: "/cities/Indore.jpg",
    },
    Bhopal: {
      title: "EPR Compliance Consultancy in Bhopal",
      description: "Structured EPR compliance solutions in Bhopal.",
      heading: "CPCB-Compliant EPR Services in Bhopal",
      content: "EPR compliance in Bhopal requires proper Registration and reporting. We assist with EPR registration, compliance tracking, and annual submissions. Our approach reduces regulatory risks.",
      image: "/cities/Bhopal.png",
    },
    Pithampur: {
      title: "EPR Compliance Services in Pithampur",
      description: "Professional EPR compliance support in Pithampur.",
      heading: "EPR Registration & Compliance in Pithampur",
      content: "Pithampur entities must ensure proper EPR Registration and compliance with CPCB regulations.",
      image: "/cities/Comman2.png",
    },
    Gwalior: {
      title: "EPR Compliance Services in Gwalior",
      description: "Professional EPR compliance support in Gwalior.",
      heading: "BEST EPR Compliance in Gwalior",
      content: "Gwalior entities covered under EPR rules must maintain transparent compliance records. We help manage CPCB registration, filings, and credit obligations. Our services ensure consistency and clarity.",
      image: "/cities/Gwalior.webp",
    },
    Jabalpur: {
      title: "EPR Compliance Consultancy in Jabalpur",
      description: "Reliable EPR compliance assistance in Jabalpur.",
      heading: "EPR Registration & Reporting in Jabalpur",
      content: "EPR compliance in Jabalpur involves timely submissions and proper documentation. We support EPR registration, annual returns, and compliance monitoring. Our solutions ensure CPCB-aligned adherence.",
      image: "/cities/Jabalpur.png",
    },
  },
  WestBengal: {
    Kolkata: {
      title: "EPR Compliance Services in Kolkata",
      description: "BEST EPR compliance solutions in Kolkata.",
      heading: "CPCB EPR Compliance in Kolkata",
      content: "Kolkata-based organizations must comply with CPCB EPR regulations. We assist with EPR registration, reporting, and credit fulfillment. Our services ensure smooth and timely compliance.",
      image: "/cities/Comman2.png",
    },
    Howrah: {
      title: "EPR Compliance Services in Howrah",
      description: "Professional EPR compliance support in Howrah.",
      heading: "EPR Registration & Compliance in Howrah",
      content: "Howrah businesses must ensure proper EPR registration and compliance with CPCB norms.",
      image: "/cities/Comman2.png",
    },
    Durgapur: {
      title: "EPR Compliance Services in Durgapur",
      description: "Professional EPR compliance assistance in Durgapur.",
      heading: "CPCB-Compliant EPR Services in Durgapur",
      content: "Durgapur entities under EPR rules must follow structured compliance processes. We support registration, reporting, and compliance tracking. Our services reduce regulatory uncertainty.",
      image: "/cities/Comman2.png",
    },
    Siliguri: {
      title: "EPR Compliance Consultancy in Siliguri",
      description: "Reliable EPR compliance support in Siliguri.",
      heading: "BEST EPR Compliance in Siliguri",
      content: "EPR compliance in Siliguri involves timely Registration and reporting. We assist with CPCB registration and annual submissions. Our solutions ensure transparent compliance management.",
      image: "/cities/Comman2.png",
    },
    Asansol: {
      title: "EPR Compliance Services in Asansol",
      description: "Expert EPR compliance support in Asansol.",
      heading: "CPCB EPR Compliance in Asansol",
      content: "Asansol entities must ensure proper EPR registration and compliance tracking with CPCB norms.",
      image: "/cities/Comman2.png",
    },
  },
  Punjab: {
    Ludhiana: {
      title: "EPR Compliance Services in Ludhiana",
      description: "CPCB-aligned EPR compliance support in Ludhiana.",
      heading: "EPR Registration & Compliance in Ludhiana",
      content: "EPR compliance in Ludhiana requires accurate documentation and timely filings. We support CPCB registration, reporting, and compliance monitoring. Our services ensure regulatory clarity.",
      image: "/cities/Ludhiana.jpg",
    },
    Amritsar: {
      title: "EPR Compliance Consultancy in Amritsar",
      description: "Simplified EPR compliance solutions in Amritsar.",
      heading: "CPCB-Compliant EPR Services in Amritsar",
      content: "Amritsar entities covered under EPR rules must ensure proper Registration. We assist with EPR registration, annual returns, and compliance tracking. Our approach reduces compliance risks.",
      image: "/cities/Amritsar.webp",
    },
    Jalandhar: {
      title: "EPR Compliance Services in Jalandhar",
      description: "Reliable EPR compliance assistance in Jalandhar.",
      heading: "BEST EPR Compliance in Jalandhar",
      content: "EPR compliance in Jalandhar involves structured reporting and filings. We help manage CPCB EPR obligations efficiently. Our services ensure consistent regulatory adherence.",
      image: "/cities/Comman2.png",
    },
    Mohali: {
      title: "EPR Compliance Consultancy in Mohali",
      description: "Professional EPR compliance support in Mohali.",
      heading: "EPR Registration & Reporting in Mohali",
      content: "Mohali-based organizations must comply with CPCB EPR guidelines. We assist with registration, reporting, and credit fulfillment. Our solutions ensure smooth compliance management.",
      image: "/cities/Mohali.jpg",
    },
  },
  Kerala: {
    Thiruvananthapuram: {
      title: "EPR Compliance Services in Thiruvananthapuram",
      description: "BEST EPR compliance solutions in Kerala.",
      heading: "CPCB EPR Compliance in Thiruvananthapuram",
      content: "EPR compliance in Thiruvananthapuram requires accurate registration and reporting. We support CPCB EPR filings, annual returns, and compliance tracking. Our approach ensures regulatory alignment.",
      image: "/cities/Comman2.png",
    },
  },
  Odisha: {
    Bhubaneswar: {
      title: "EPR Compliance Services in Bhubaneswar",
      description: "Professional EPR compliance support in Bhubaneswar.",
      heading: "EPR Registration & Compliance in Bhubaneswar",
      content: "Bhubaneswar entities must adhere to CPCB EPR regulations. We assist with registration, reporting, and compliance monitoring. Our services ensure timely and accurate compliance.",
      image: "/cities/Odisha.jpg",
    },
    Cuttack: {
      title: "EPR Compliance Consultancy in Cuttack",
      description: "Simplified EPR compliance solutions in Cuttack.",
      heading: "CPCB-Compliant EPR Services in Cuttack",
      content: "EPR compliance in Cuttack involves proper Registration and documentation. We help manage CPCB registration and annual filings. Our approach ensures compliance continuity.",
      image: "/cities/Comman2.png",
    },
  },
  Chhattisgarh: {
    Raipur: {
      title: "EPR Compliance Services in Raipur",
      description: "Reliable EPR compliance assistance in Raipur.",
      heading: "BEST EPR Compliance in Raipur",
      content: "Raipur-based organizations must comply with CPCB EPR requirements. We support registration, reporting, and compliance tracking. Our services reduce regulatory complexity.",
      image: "/cities/Comman2.png",
    },
  },
  Jharkhand: {
    Ranchi: {
      title: "EPR Compliance Consultancy in Ranchi",
      description: "CPCB-aligned EPR compliance support in Ranchi.",
      heading: "EPR Registration & Reporting in Ranchi",
      content: "EPR compliance in Ranchi requires timely filings and accurate records. We assist with CPCB registration and annual compliance. Our solutions ensure regulatory adherence.",
      image: "/cities/Jharkhand.jpg",
    },
  },
  Bihar: {
    Patna: {
      title: "EPR Compliance Services in Patna",
      description: "BEST EPR compliance solutions in Patna.",
      heading: "CPCB EPR Compliance in Patna",
      content: "Patna-based entities under EPR rules must ensure proper registration and reporting. We support CPCB EPR filings and compliance monitoring. Our approach ensures smooth compliance management.",
      image: "/cities/Bihar.jpg",
    },
  },
  Assam: {
    Guwahati: {
      title: "EPR Compliance Consultancy in Guwahati",
      description: "Professional EPR compliance support in Guwahati.",
      heading: "EPR Registration & Compliance in Guwahati",
      content: "EPR compliance in Guwahati involves accurate documentation and timely submissions. We assist with CPCB registration and annual returns. Our services ensure regulatory clarity.",
      image: "/cities/Comman2.png",
    },
  },
  Goa: {
    Panaji: {
      title: "EPR Compliance Services in Panaji",
      description: "Simplified EPR compliance solutions in Panaji.",
      heading: "CPCB-Compliant EPR Services in Panaji",
      content: "Panaji-based organizations must comply with CPCB EPR regulations. We support registration, reporting, and compliance tracking. Our approach ensures consistent regulatory adherence.",
      image: "/cities/Comma2.png",
    },
  },
  ArunachalPradesh: {
    Itanagar: {
      title: "EPR Compliance Services in Itanagar",
      description: "Reliable EPR compliance support in Itanagar.",
      heading: "EPR Registration & Compliance in Itanagar",
      content: "EPR compliance in Itanagar requires proper Registration and reporting. We assist with CPCB registration and annual filings. Our services ensure smooth compliance management.",
      image: "/cities/Arunachal pradesh.jpg",
    },
  },
  Manipur: {
    Imphal: {
      title: "EPR Compliance Consultancy in Imphal",
      description: "Professional EPR compliance assistance in Imphal.",
      heading: "CPCB EPR Compliance in Imphal",
      content: "Imphal entities under EPR regulations must ensure timely compliance. We support registration, reporting, and compliance monitoring. Our solutions ensure regulatory alignment.",
      image: "/cities/Comman2.png",
    },
  },
  Meghalaya: {
    Shillong: {
      title: "EPR Compliance Services in Shillong",
      description: "BEST EPR compliance solutions in Shillong.",
      heading: "EPR Registration & Reporting in Shillong",
      content: "EPR compliance in Shillong involves accurate filings and documentation. We assist with CPCB registration and annual compliance. Our approach ensures consistency and transparency.",
      image: "/cities/Comman2.png",
    },
  },
  Mizoram: {
    Aizawl: {
      title: "EPR Compliance Consultancy in Aizawl",
      description: "Simplified EPR compliance support in Aizawl.",
      heading: "CPCB-Compliant EPR Services in Aizawl",
      content: "Aizawl-based entities must comply with CPCB EPR guidelines. We help manage registration, reporting, and compliance tracking. Our services ensure smooth regulatory adherence.",
      image: "/cities/Comman2.png",
    },
  },
  Nagaland: {
    Kohima: {
      title: "EPR Compliance Services in Kohima",
      description: "Reliable EPR compliance assistance in Kohima.",
      heading: "BEST EPR Compliance in Kohima",
      content: "EPR compliance in Kohima requires proper registration and reporting. We support CPCB filings and compliance monitoring. Our solutions reduce compliance challenges.",
      image: "/cities/Nagaland.jpg",
    },
  },
  Tripura: {
    Agartala: {
      title: "EPR Compliance Consultancy in Agartala",
      description: "Professional EPR compliance support in Agartala.",
      heading: "EPR Registration & Compliance in Agartala",
      content: "Agartala entities covered under EPR rules must ensure accurate documentation. We assist with CPCB registration, reporting, and annual compliance. Our approach ensures regulatory clarity.",
      image: "/cities/Comman2.png",
    },
  },
};

export interface StateSEOInfo {
  name: string;
  title: string;
  description: string;
  heading: string;
  content: string;
  image: string;
}

export interface StateSEOData {
  [state: string]: StateSEOInfo;
}

export const stateSEOData: StateSEOData = {
  Maharashtra: {
    name: "Maharashtra",
    title: "EPR Compliance Services in Maharashtra",
    description: "CPCB-compliant EPR compliance solutions across Maharashtra.",
    heading: "EPR Registration & Reporting in Maharashtra",
    content: "EPR compliance in Maharashtra involves timely CPCB registration and mandatory annual reporting. We support registration, compliance , and ongoing monitoring. Our approach ensures smooth regulatory adherence.",
    image: "/cities/Maharastra.jpg"
  },
  Gujarat: {
    name: "Gujarat",
    title: "EPR Compliance Services in Gujarat",
    description: "Professional EPR registration and compliance support in Gujarat.",
    heading: "CPCB-Aligned EPR Services in Gujarat",
    content: "Entities operating in Gujarat must adhere to CPCB EPR requirements through accurate filings and documentation. We support registration, annual reporting, and compliance tracking. Our services ensure clarity and consistency.",
    image: "/cities/Gujrat.jpg"
  },
  Karnataka: {
    name: "Karnataka",
    title: "EPR Compliance Services in Karnataka",
    description: "CPCB-aligned EPR registration and compliance support in Karnataka.",
    heading: "EPR Registration & Compliance in Karnataka",
    content: "Entities operating in Karnataka must follow CPCB EPR regulations through timely registration and accurate annual reporting. We assist with EPR Registration, compliance filings, and documentation management. Our approach ensures consistent regulatory adherence.",
    image: "/cities/Karnatak.webp"
  },
  TamilNadu: {
    name: "Tamil Nadu",
    title: "EPR Compliance Services in Tamil Nadu",
    description: "BEST EPR registration and compliance in Tamil Nadu.",
    heading: "EPR Registration & Reporting in Tamil Nadu",
    content: "Entities in Tamil Nadu must adhere to CPCB EPR requirements through accurate registration and timely annual returns. We assist with Registration, compliance monitoring, and documentation management. Our approach ensures regulatory continuity.",
    image: "/cities/Tamilnadu.webp"
  },
  Telangana: {
    name: "Telangana",
    title: "EPR Compliance Services in Telangana",
    description: "CPCB-aligned EPR compliance support across Telangana.",
    heading: "EPR Registration & Compliance in Telangana",
    content: "EPR compliance in Telangana involves CPCB registration and mandatory reporting. We support Registration, annual filings, and compliance tracking. Our services ensure transparency and reduced compliance risk.",
    image: "/cities/Telangna.jpg"
  },
  AndhraPradesh: {
    name: "Andhra Pradesh",
    title: "EPR Compliance Services in Andhra Pradesh",
    description: "CPCB-compliant EPR registration and reporting in Andhra Pradesh.",
    heading: "EPR Registration & Compliance in Andhra Pradesh",
    content: "Entities operating in Andhra Pradesh must comply with CPCB EPR regulations through timely registration and accurate annual returns. We support EPR Registration, compliance reporting, and documentation management. Our approach ensures smooth and penalty-free compliance.",
    image: "/cities/Andhra pradesh.jpg"
  },
  Delhi: {
    name: "Delhi (NCT)",
    title: "EPR Compliance Services in Delhi (NCT)",
    description: "CPCB-aligned EPR registration and reporting in Delhi (NCT).",
    heading: "EPR Registration & Compliance in Delhi (NCT)",
    content: "Entities operating in Delhi (NCT) must follow CPCB EPR regulations through accurate registration and annual filings. We assist with Registration, compliance monitoring, and documentation management. Our approach ensures penalty-free compliance.",
    image: "/cities/Delhi.png"
  },
  Haryana: {
    name: "Haryana",
    title: "EPR Compliance Services in Haryana",
    description: "CPCB-compliant EPR compliance solutions across Haryana.",
    heading: "EPR Registration & Compliance in Haryana",
    content: "EPR compliance in Haryana involves timely CPCB registration and mandatory annual returns. We assist with Registration, reporting, and compliance monitoring. Our approach minimizes regulatory risks.",
    image: "/cities/Haryana.jpg"
  },
  UttarPradesh: {
    name: "Uttar Pradesh",
    title: "EPR Compliance Services in Uttar Pradesh",
    description: "Professional EPR registration and compliance support in Uttar Pradesh.",
    heading: "EPR Registration & Reporting in Uttar Pradesh",
    content: "EPR compliance in Uttar Pradesh requires accurate CPCB registration and timely annual filings. We support Registration, documentation, and compliance tracking. Our services help maintain uninterrupted regulatory compliance.",
    image: "/cities/Comman.png"
  },
  Rajasthan: {
    name: "Rajasthan",
    title: "EPR Compliance Services in Rajasthan",
    description: "CPCB-aligned EPR registration and compliance support in Rajasthan.",
    heading: "EPR Registration & Compliance in Rajasthan",
    content: "Entities operating in Rajasthan must comply with CPCB EPR regulations through timely registration and accurate reporting. We assist with EPR Registration, annual returns, and compliance documentation. Our approach ensures smooth regulatory adherence.",
    image: "/cities/Rajasthan.png"
  },
  MadhyaPradesh: {
    name: "Madhya Pradesh",
    title: "EPR Compliance Services in Madhya Pradesh",
    description: "BEST EPR registration and reporting in Madhya Pradesh.",
    heading: "EPR Registration & Compliance in Madhya Pradesh",
    content: "Entities in Madhya Pradesh must comply with CPCB EPR rules through accurate filings and documentation. We assist with registration, annual returns, and compliance monitoring. Our structured process reduces compliance risk.",
    image: "/cities/Mp.jpg"
  },
  WestBengal: {
    name: "West Bengal",
    title: "EPR Compliance Services in West Bengal",
    description: "BEST EPR compliance assistance in West Bengal.",
    heading: "EPR Registration & Reporting in West Bengal",
    content: "EPR compliance in West Bengal involves CPCB registration and mandatory annual reporting. We support Registration, compliance filings, and documentation management. Our services ensure timely regulatory adherence.",
    image: "/cities/Comman2.png"
  },
  Punjab: {
    name: "Punjab",
    title: "EPR Compliance Services in Punjab",
    description: "CPCB-compliant EPR registration and reporting in Punjab.",
    heading: "EPR Registration & Reporting in Punjab",
    content: "EPR compliance in Punjab requires proper CPCB registration and accurate annual filings. We support Registration, compliance tracking, and documentation management. Our structured approach minimizes regulatory risk.",
    image: "/cities/Comman2.png"
  },
  Kerala: {
    name: "Kerala",
    title: "EPR Compliance Services in Kerala",
    description: "Professional EPR compliance solutions across Kerala.",
    heading: "CPCB-Compliant EPR Services in Kerala",
    content: "EPR compliance in Kerala requires proper CPCB registration and periodic reporting. We support Registration, annual returns, and compliance tracking. Our services ensure clarity and smooth regulatory compliance.",
    image: "/cities/Kerala.jpg"
  },
  Odisha: {
    name: "Odisha",
    title: "EPR Compliance Services in Odisha",
    description: "BEST EPR compliance assistance across Odisha.",
    heading: "EPR Registration & Compliance in Odisha",
    content: "Entities in Odisha must adhere to CPCB EPR requirements through accurate registration and reporting. We assist with Registration, annual returns, and compliance monitoring. Our services ensure timely regulatory adherence.",
    image: "/cities/Odisha.jpg"
  },
  Chhattisgarh: {
    name: "Chhattisgarh",
    title: "EPR Compliance Services in Chhattisgarh",
    description: "Reliable EPR compliance support across Chhattisgarh.",
    heading: "CPCB-Compliant EPR Services in Chhattisgarh",
    content: "Entities in Chhattisgarh must comply with CPCB EPR regulations through proper registration and reporting. We support compliance filings, documentation, and ongoing monitoring. Our services ensure timely and accurate adherence.",
    image: "/cities/Comman2.png"
  },
  Jharkhand: {
    name: "Jharkhand",
    title: "EPR Compliance Services in Jharkhand",
    description: "BEST EPR registration and compliance support in Jharkhand.",
    heading: "EPR Registration & Reporting in Jharkhand",
    content: "EPR compliance in Jharkhand requires CPCB Registration and accurate annual filings. We assist with registration, reporting, and compliance monitoring. Our approach ensures transparency and regulatory alignment.",
    image: "/cities/Jharkhand.jpg"
  },
  Bihar: {
    name: "Bihar",
    title: "EPR Compliance Services in Bihar",
    description: "CPCB-aligned EPR registration and compliance in Bihar.",
    heading: "EPR Registration & Compliance in Bihar",
    content: "EPR compliance in Bihar involves structured registration and mandatory reporting as per CPCB guidelines. We assist with Registration, annual returns, and compliance tracking. Our approach ensures seamless regulatory adherence.",
    image: "/cities/Bihar.jpg"
  },
  Assam: {
    name: "Assam",
    title: "EPR Compliance Services in Assam",
    description: "Professional EPR compliance solutions across Assam.",
    heading: "EPR Registration & Reporting in Assam",
    content: "Entities in Assam covered under EPR rules must ensure timely CPCB registration and accurate filings. We support annual returns, compliance monitoring, and regulatory documentation. Our services reduce compliance risk and delays.",
    image: "/cities/Assam.jpg"
  },
  Goa: {
    name: "Goa",
    title: "EPR Compliance Services in Goa",
    description: "BEST EPR compliance solutions across Goa.",
    heading: "EPR Registration & Reporting in Goa",
    content: "EPR compliance in Goa requires CPCB registration and submission of annual EPR returns. We assist with Registration, reporting, and compliance management. Our structured process ensures regulatory alignment.",
    image: "/cities/goa.jpg"
  },
  ArunachalPradesh: {
    name: "Arunachal Pradesh",
    title: "EPR Compliance Services in Arunachal Pradesh",
    description: "BEST EPR compliance support across Arunachal Pradesh.",
    heading: "CPCB-Aligned EPR Services in Arunachal Pradesh",
    content: "EPR compliance in Arunachal Pradesh requires proper CPCB registration and periodic reporting. We assist with Registration, annual returns, and compliance tracking. Our services ensure regulatory clarity and consistent adherence.",
    image: "/cities/Arunachal pradesh.jpg"
  },
  Manipur: {
    name: "Manipur",
    title: "EPR Compliance Services in Manipur",
    description: "Reliable EPR compliance support across Manipur.",
    heading: "CPCB-Aligned EPR Services in Manipur",
    content: "Entities in Manipur covered under EPR regulations must ensure proper CPCB registration and reporting. We assist with Registration, annual returns, and compliance tracking. Our services ensure consistent regulatory alignment.",
    image: "/cities/Manipur.jpg"
  },
  Meghalaya: {
    name: "Meghalaya",
    title: "EPR Compliance Services in Meghalaya",
    description: "Simplified EPR compliance solutions in Meghalaya.",
    heading: "EPR Registration & Compliance in Meghalaya",
    content: "EPR compliance in Meghalaya requires structured registration and accurate reporting as per CPCB norms. We support Registration, annual filings, and compliance monitoring. Our approach ensures clear regulatory adherence.",
    image: "/cities/Meghlaya.jpg"
  },
  Mizoram: {
    name: "Mizoram",
    title: "EPR Compliance Services in Mizoram",
    description: "CPCB-aligned EPR registration and compliance in Mizoram.",
    heading: "EPR Registration & Reporting in Mizoram",
    content: "Entities in Mizoram must comply with CPCB EPR regulations through timely registration and reporting. We assist with Registration, documentation, and compliance tracking. Our services ensure seamless regulatory compliance.",
    image: "/cities/Mizoram.jpg"
  },
  Nagaland: {
    name: "Nagaland",
    title: "EPR Compliance Services in Nagaland",
    description: "Professional EPR compliance support across Nagaland.",
    heading: "CPCB-Compliant EPR Services in Nagaland",
    content: "EPR compliance in Nagaland involves CPCB registration and mandatory annual returns. We support Registration, compliance reporting, and documentation management. Our approach ensures regulatory clarity and consistency.",
    image: "/cities/Nagaland.jpg"
  },
  Tripura: {
    name: "Tripura",
    title: "EPR Compliance Services in Tripura",
    description: "Reliable EPR compliance solutions across Tripura.",
    heading: "CPCB-Compliant EPR Services in Tripura",
    content: "Entities in Tripura covered under EPR rules must ensure proper CPCB registration and reporting. We assist with Registration, annual returns, and compliance monitoring. Our approach ensures consistent regulatory adherence.",
    image: "/cities/Tripura.jpg"
  },
  HimachalPradesh: {
    name: "Himachal Pradesh",
    title: "EPR Compliance Services in Himachal Pradesh",
    description: "Reliable EPR compliance assistance across Himachal Pradesh.",
    heading: "CPCB-Compliant EPR Services in Himachal Pradesh",
    content: "Entities in Himachal Pradesh must comply with CPCB EPR regulations through proper documentation and reporting. We support registration, annual returns, and compliance tracking. Our services ensure smooth regulatory adherence.",
    image: "/cities/Comman2.png"
  },
  Sikkim: {
    name: "Sikkim",
    title: "EPR Compliance Services in Sikkim",
    description: "Simplified EPR compliance solutions across Sikkim.",
    heading: "CPCB-Compliant EPR Services in Sikkim",
    content: "EPR compliance in Sikkim requires CPCB registration and periodic reporting. We support Registration, annual filings, and compliance tracking. Our services ensure clarity and consistent regulatory alignment.",
    image: "/cities/Sikkim.jpg"
  },
  Uttarakhand: {
    name: "Uttarakhand",
    title: "EPR Compliance Services in Uttarakhand",
    description: "CPCB-compliant EPR compliance solutions across Uttarakhand.",
    heading: "EPR Registration & Compliance in Uttarakhand",
    content: "Entities in Uttarakhand must comply with CPCB EPR regulations through proper registration and reporting. We assist with Registration, annual returns, and compliance monitoring. Our approach ensures smooth regulatory alignment.",
    image: "/cities/uttrakhand.png"
  },
  Chandigarh: {
    name: "Chandigarh",
    title: "EPR Compliance Services in Chandigarh",
    description: "Simplified EPR compliance solutions across Chandigarh.",
    heading: "CPCB-Compliant EPR Services in Chandigarh",
    content: "EPR compliance in Chandigarh requires timely CPCB registration and structured reporting. We support Registration, annual returns, and compliance tracking. Our services ensure clear and consistent regulatory adherence.",
    image: "/cities/Chandigarh.jpg"
  },
  JammuKashmir: {
    name: "Jammu & Kashmir",
    title: "EPR Compliance Services in Jammu & Kashmir",
    description: "CPCB-aligned EPR registration and compliance support in Jammu & Kashmir.",
    heading: "EPR Registration & Compliance in Jammu & Kashmir",
    content: "Entities operating in Jammu & Kashmir must comply with CPCB EPR regulations through timely registration and accurate reporting. We assist with Registration, annual returns, and compliance monitoring. Our approach ensures smooth regulatory adherence.",
    image: "/cities/J& K.png"
  },
  Ladakh: {
    name: "Ladakh",
    title: "EPR Compliance Services in Ladakh",
    description: "Reliable EPR compliance solutions across Ladakh.",
    heading: "CPCB-Compliant EPR Services in Ladakh",
    content: "EPR compliance in Ladakh requires CPCB registration and structured documentation. We support Registration, reporting, and compliance tracking. Our services ensure consistent regulatory alignment in remote regions.",
    image: "/cities/Ladakh.jpg"
  },
  Puducherry: {
    name: "Puducherry",
    title: "EPR Compliance Services in Puducherry",
    description: "BEST EPR registration and compliance in Puducherry.",
    heading: "EPR Registration & Reporting in Puducherry",
    content: "Entities in Puducherry must adhere to CPCB EPR requirements through accurate registration and annual returns. We assist with Registration, compliance filings, and documentation management. Our approach ensures regulatory clarity.",
    image: "/cities/Comman2.png"
  },
  AndamanNicobar: {
    name: "Andaman & Nicobar Islands",
    title: "EPR Compliance Services in Andaman & Nicobar Islands",
    description: "CPCB-aligned EPR compliance support across the islands.",
    heading: "EPR Registration & Compliance in Andaman & Nicobar Islands",
    content: "EPR compliance in the Andaman & Nicobar Islands involves proper Registration and timely CPCB reporting. We support registration, compliance tracking, and documentation. Our services ensure transparent regulatory adherence.",
    image: "/cities/Adandman and nicobar.jpg"
  },
  Lakshadweep: {
    name: "Lakshadweep",
    title: "EPR Compliance Services in Lakshadweep",
    description: "Simplified EPR compliance solutions across Lakshadweep.",
    heading: "CPCB-Compliant EPR Services in Lakshadweep",
    content: "Entities in Lakshadweep must comply with CPCB EPR regulations through timely filings and accurate documentation. We assist with registration, annual returns, and compliance monitoring. Our approach ensures smooth regulatory alignment.",
    image: "/cities/lakshyadeep.jpg"
  },
  DadraNagarHaveliDamanDiu: {
    name: "Dadra & Nagar Haveli and Daman & Diu",
    title: "EPR Compliance Services in Dadra & Nagar Haveli and Daman & Diu",
    description: "Professional EPR compliance support across DNHD & Daman & Diu.",
    heading: "EPR Registration & Compliance in Dadra & Nagar Haveli and Daman & Diu",
    content: "Entities operating in Dadra & Nagar Haveli and Daman & Diu must follow CPCB EPR regulations through proper registration and reporting. We assist with Registration, compliance filings, and documentation management. Our services ensure uninterrupted regulatory compliance.",
    image: "/cities/DadarAnd daman.jpg"
  },
};