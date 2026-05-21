"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className="space-y-3">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl border border-green-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-slate-800 text-base leading-snug">
                            {faq.question}
                        </span>
                        <ChevronDown
                            size={20}
                            className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-green-50 pt-4">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
