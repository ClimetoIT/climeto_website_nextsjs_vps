import Image from "next/image";
import { notFound } from "next/navigation";
import { citySEOData, stateSEOData, CityData } from "../seoData";
import { Metadata } from "next";

import img1 from "../../../src/assets/images/crompton.webp";
import img2 from "../../../src/assets/images/tata.png";
import img3 from "../../../src/assets/images/skoda.png";
import img4 from "../../../src/assets/images/jsw.png";
import img5 from "../../../src/assets/images/lbe.png";
import img6 from "../../../src/assets/images/rid.png";
import img7 from "../../../src/assets/images/mg.png";
import img8 from "../../../src/assets/images/img56.jpg";
import img9 from "../../../src/assets/images/img44.jpg";
import img10 from "../../../src/assets/images/pushp.png";
import img11 from "../../../src/assets/images/img11.png";
import img12 from "../../../src/assets/images/img32.png";
import img13 from "../../../src/assets/images/img48.jpg";
import img14 from "../../../src/assets/images/new-logo-jk.webp";
import img15 from "../../../src/assets/images/img51.jpg";
import img16 from "../../../src/assets/images/img16.png";
import img17 from "../../../src/assets/images/img17.png";
import img18 from "../../../src/assets/images/img41.jpg";
import img19 from "../../../src/assets/images/img35.jpg";
import img32 from "../../../src/assets/images/img45.jpg";

// 1. Generate Static Params
export async function generateStaticParams() {
    const params: { slug: string[] }[] = [];

    Object.keys(stateSEOData).forEach((stateVal) => {
        params.push({ slug: [stateVal.toLowerCase()] });
    });

    Object.keys(citySEOData).forEach((state) => {
        Object.keys(citySEOData[state]).forEach((city) => {
            params.push({ slug: [state.toLowerCase(), city.toLowerCase()] });
            params.push({ slug: [city.toLowerCase()] });
        });
    });

    return params;
}

// 2. Helper to resolve data
function getSEOData(slug: string[] | undefined): { data: CityData | null; city: string; state: string } {
    console.log('[DEBUG] getSEOData slug:', slug);
    if (!slug || slug.length === 0) return { data: null, city: "", state: "" };

    const findKey = (obj: any, target: string) =>
        Object.keys(obj).find(key => key.toLowerCase() === target.toLowerCase()) || "";

    let matchedStateKey = "";
    let matchedCityKey = "";
    let isStatePage = false;

    if (slug.length === 2) {
        const [urlState, urlCity] = slug;
        matchedStateKey = findKey(citySEOData, urlState);
        if (matchedStateKey) {
            matchedCityKey = findKey(citySEOData[matchedStateKey], urlCity);
        }
    } else if (slug.length === 1) {
        const segment = slug[0];
        const potentialStateKey = findKey(stateSEOData, segment);
        if (potentialStateKey) {
            matchedStateKey = potentialStateKey;
            isStatePage = true;
        } else {
            for (const stKey of Object.keys(citySEOData)) {
                const potentialCityKey = findKey(citySEOData[stKey], segment);
                console.log(`[DEBUG] Checking state ${stKey} for city ${segment}:`, potentialCityKey);
                if (potentialCityKey) {
                    matchedStateKey = stKey;
                    matchedCityKey = potentialCityKey;
                    break;
                }
            }
        }
    }

    console.log('[DEBUG] Result:', { matchedStateKey, matchedCityKey, isStatePage });

    let cityData: CityData | null = null;
    let cityDisplay = "";

    if (isStatePage && matchedStateKey) {
        cityData = (stateSEOData as any)[matchedStateKey] as CityData;
        cityDisplay = (cityData as any).name || matchedStateKey;
    } else if (matchedStateKey && matchedCityKey) {
        cityData = citySEOData[matchedStateKey][matchedCityKey];
        cityDisplay = matchedCityKey;
    }

    return { data: cityData, city: cityDisplay, state: matchedStateKey };
}

// 3. Generate Metadata
export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
    const { data } = getSEOData(params.slug);
    if (!data) return { title: "EPR Services | Climeto" };

    return {
        title: data.title,
        description: data.description,
    };
}

// 4. Main Page Component
export default function Page({ params }: { params: { slug?: string[] } }) {
    const { data: cityData, city, state } = getSEOData(params.slug);

    if (!cityData) {
        notFound();
    }

    const cityDisplay = city.charAt(0).toUpperCase() + city.slice(1);

    const services = [
        {
            icon: "📋",
            title: "Registration & Compliance",
            description: "Plastic EPR registration and ongoing compliance management"
        },
        {
            icon: "📊",
            title: "Target Calculation",
            description: "EPR target calculation and annual planning specific to local production volumes"
        },
        {
            icon: "🎯",
            title: "Credit Procurement",
            description: "Credit procurement support for plastic, e-waste, and battery waste where applicable"
        },
        {
            icon: "📝",
            title: "CPCB Portal Filings",
            description: "CPCB portal filings, returns submission, and timely statutory documentation"
        },
        {
            icon: "✅",
            title: "Audit-Ready Records",
            description: "Audit-ready compliance records ensuring continuity and traceability"
        }
    ];

    const businessTypes = [
        {
            icon: "🏭",
            title: "Packaging Manufacturers",
            description: "Plastic packaging manufacturers and converters operating locally"
        },
        {
            icon: "🛍️",
            title: "FMCG Brands",
            description: `FMCG brands with distribution networks in ${cityDisplay}`
        },
        {
            icon: "📱",
            title: "Electronics Importers",
            description: "Importers and distributors of electronic products"
        },
        {
            icon: "🛒",
            title: "E-commerce Platforms",
            description: "E-commerce platforms and local sellers managing product packaging"
        },
        {
            icon: "🔋",
            title: "Battery Companies",
            description: "Battery manufacturing or trading companies with city-wide supply chains"
        }
    ];

    const implementationSteps = [
        {
            number: "01",
            title: "Data Assessment",
            description: `Review production volumes, packaging types, and distribution channels in ${cityDisplay}.`
        },
        {
            number: "02",
            title: "Target Calculation",
            description: "Determine annual EPR obligations aligned with local waste generation data."
        },
        {
            number: "03",
            title: "Registration & Documentation",
            description: "Prepare filings on the CPCB portal, maintain SPCB correspondence, and document recycling arrangements."
        },
        {
            number: "04",
            title: "Credit Procurement",
            description: "Acquire required EPR credits for plastic, e-waste, and battery categories to ensure regulatory alignment."
        },
        {
            number: "05",
            title: "Ongoing Reporting",
            description: "Submit annual returns, manage vendor compliance, and maintain audit-ready records for city operations."
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-green-50">
      
    {/* HERO SECTION - Smoother, more gradual gradient */}
<section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #5fa033 0%, #4f9527 20%, #3d6f1f 35%, #3d7a4a 50%, #4081b8 65%, #3578ad 80%, #1f5a8a 100%)'}}>
    <div className="absolute inset-0 bg-black/15"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-green-700 shadow-sm">
                    ✨ Premium EPR Solutions
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                    {cityData.heading}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/95 drop-shadow-md">
                    {cityData.description}
                </p>
                {cityData.content && (
                    <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md">
                        {cityData.content}
                    </p>
                )}
            </div>
            <div className="relative order-first lg:order-last">
                <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40" style={{background: 'linear-gradient(135deg, #5fa033 0%, #3d7a4a 50%, #1f5a8a 100%)'}}></div>
                <Image
                    src={cityData.image}
                    alt={`EPR Consultancy in ${cityDisplay}`}
                    width={600}
                    height={400}
                    className="relative rounded-2xl sm:rounded-3xl shadow-2xl object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px] border-4 border-white/80"
                    priority
                />
            </div>
        </div>
    </div>
</section>

            {/* STATS BANNER - WHITE BACKGROUND with Climeto colors */}
            <section className="relative py-8 sm:py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border-4" style={{borderColor: '#36a852'}}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                            {/* Trophy Icon */}
                            <div className="flex-shrink-0">
                                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border-2 border-gray-100">
                                    <span className="text-5xl sm:text-6xl">🏆</span>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white mb-3 shadow-md" style={{background: '#1b355e'}}>
                                    ✨ TRUSTED BY INDUSTRY LEADERS
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 leading-tight" style={{color: '#1b355e'}}>
                                    CLIMETO Serving <span style={{color: '#36a852'}}>50+</span> Precisely Clients
                                </h3>
                                <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-700">
                                    Across the {cityDisplay} Region
                                </p>
                            </div>

                            {/* Green Badge */}
                            <div className="flex-shrink-0">
                                <div className="rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-white" style={{background: 'linear-gradient(135deg, #36a852 0%, #5fc77a 100%)'}}>
                                    <div className="text-4xl sm:text-5xl font-black text-white">50+</div>
                                    <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20">
                {/* EPR SERVICES CARDS - Updated colors */}
                <section className="space-y-8 sm:space-y-10">
                    <div className="text-center space-y-3 sm:space-y-4 px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                            EPR Compliance Services Tailored for {cityDisplay}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                            Comprehensive solutions designed specifically for businesses in {cityDisplay}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 hover:border-green-400"
                                style={{borderColor: '#e8f4f0'}}
                            >
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors" style={{color: '#1b355e'}}>
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BUSINESSES THAT REQUIRE EPR - Updated colors */}
                <section className="space-y-8 sm:space-y-10">
                    <div className="text-center space-y-3 sm:space-y-4 px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                            Who Needs EPR Support in {cityDisplay}?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            These businesses require comprehensive EPR compliance solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {businessTypes.map((business, index) => (
                            <div 
                                key={index}
                                className="rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border"
                                style={{background: 'linear-gradient(135deg, #f8fbfa 0%, #e8f4f0 100%)', borderColor: '#d4ebe4'}}
                            >
                                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                                    {business.icon}
                                </div>
                                <h3 className="text-base sm:text-lg font-bold mb-2" style={{color: '#1b355e'}}>
                                    {business.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {business.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* IMPLEMENTATION STEPS - Updated colors */}
                <section className="space-y-8 sm:space-y-10">
                    <div className="text-center space-y-3 sm:space-y-4 px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                            Our Implementation Process
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            A streamlined approach to EPR compliance for {cityDisplay} companies
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        {implementationSteps.map((step, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4"
                                style={{borderLeftColor: '#1b355e'}}
                            >
                                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)'}}>
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors" style={{color: '#1b355e'}}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CHALLENGES - Updated with Climeto colors */}
                <section className="space-y-8 sm:space-y-10">
                    <div className="text-center space-y-3 sm:space-y-4 px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                            Common Challenges We Solve
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            EPR compliance obstacles specific to {cityDisplay}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                icon: "📊",
                                title: "Data Accuracy",
                                desc: "Maintaining accurate data from distributed manufacturing units"
                            },
                            {
                                icon: "🏛️",
                                title: "SPCB Coordination",
                                desc: "Coordinating with the local SPCB for timely approvals"
                            },
                            {
                                icon: "🔍",
                                title: "Vendor Traceability",
                                desc: "Ensuring traceability of recyclers and credit vendors"
                            },
                            {
                                icon: "📈",
                                title: "Target Reconciliation",
                                desc: "Reconciling EPR targets with production spikes in local industries"
                            },
                            {
                                icon: "⏰",
                                title: "Deadline Management",
                                desc: "Meeting statutory deadlines while managing operational constraints"
                            },
                            {
                                icon: "🎯",
                                title: "Compliance Strategy",
                                desc: "Developing comprehensive compliance strategies for complex operations"
                            }
                        ].map((challenge, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2"
                                style={{borderColor: '#e8f4f0'}}
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, #f0f8f5 0%, #e0f2eb 100%)'}}></div>
                                
                                {/* Icon with animated background */}
                                <div className="relative mb-4 sm:mb-6">
                                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)'}}></div>
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)'}}>
                                        {challenge.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="relative text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300" style={{color: '#1b355e'}}>
                                    {challenge.title}
                                </h3>
                                <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {challenge.desc}
                                </p>

                                {/* Decorative corner element */}
                                <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-5 rounded-bl-full transform translate-x-10 sm:translate-x-12 -translate-y-10 sm:-translate-y-12 group-hover:translate-x-6 group-hover:sm:translate-x-8 group-hover:-translate-y-6 group-hover:sm:-translate-y-8 transition-transform duration-500" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)'}}></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* REGULATORY ALIGNMENT - Updated colors */}
                <section className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2" style={{background: 'linear-gradient(135deg, #f0f8f5 0%, #e0f2eb 100%)', borderColor: '#d4ebe4'}}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#1b355e'}}>
                        📜 Regulatory Oversight and Compliance in {cityDisplay}
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                        EPR compliance in {cityDisplay} aligns with CPCB guidelines, including
                        mandated registration, target fulfillment, and reporting. Local SPCB
                        authorities oversee adherence to recycling obligations, while businesses
                        maintain records to demonstrate statutory compliance year-on-year.
                    </p>
                </section>

                {/* FAQs - Updated colors */}
                <section className="space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center px-4" style={{background: 'linear-gradient(135deg, #1b355e 0%, #36a852 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3 sm:space-y-4">
                        {[
                            {
                                q: `Which businesses in ${cityDisplay} must comply with EPR?`,
                                a: "Manufacturers, importers, distributors, and e-commerce sellers handling plastic, e-waste, or batteries need EPR registration."
                            },
                            {
                                q: `How are EPR targets calculated for ${cityDisplay}-based companies?`,
                                a: "Targets are based on production volume, type of packaging, and local distribution networks, with credit adjustments applied where necessary."
                            },
                            {
                                q: `What happens if EPR returns are delayed in ${cityDisplay}?`,
                                a: "Delays can trigger SPCB notices and penalties, highlighting the importance of audit-ready records and timely filings."
                            }
                        ].map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2"
                                style={{borderColor: '#e8f4f0'}}
                            >
                                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3" style={{color: '#1b355e'}}>
                                    <span className="flex-shrink-0 text-lg sm:text-xl" style={{color: '#36a852'}}>Q:</span>
                                    <span className="pt-0.5">{faq.q}</span>
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base pl-6 sm:pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* CLOSING SECTION WITH CLIENT LOGOS - Updated colors */}
            <section className="py-12 sm:py-16 border-t-4" style={{background: 'linear-gradient(135deg, #f0f8f5 0%, #e8f4f0 50%, #d4ebe4 100%)', borderTopColor: '#36a852'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold px-4" style={{color: '#1b355e'}}>
                            🌟 Long-Term EPR Compliance Support in {cityDisplay}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
                            Businesses operating in {cityDisplay} benefit from continuous year-on-year
                            guidance to meet Extended Producer Responsibility obligations, maintain CPCB
                            registration, and ensure consistent adherence to recycling requirements.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <h3 className="text-center text-xl sm:text-2xl font-semibold mb-6 sm:mb-8" style={{color: '#1b355e'}}>Trusted by Leading Brands</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                            {[
                                img1, img2, img3, img4, img5,
                                img6, img7, img8, img9, img10,
                                img11, img12, img13, img14, img15,
                                img16, img17, img18, img19, img32
                            ].map((logo, i) => (
                                <div 
                                    key={i} 
                                    className="group bg-white rounded-lg sm:rounded-xl h-16 sm:h-20 w-full flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 p-2 border-2"
                                    style={{borderColor: '#e8f4f0'}}
                                >
                                    <Image
                                        src={logo}
                                        alt={`Client Logo ${i + 1}`}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}