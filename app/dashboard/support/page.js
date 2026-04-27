/* app/dashboard/support/page.js */
"use client";

import React, { useState } from 'react';
import {
    LifeBuoy,
    Mail,
    MessageSquare,
    Phone,
    ChevronDown,
    ChevronUp,
    Send,
    CheckCircle
} from 'lucide-react';

const faqs = [
    {
        question: 'How do I activate my desktop application?',
        answer: 'After downloading the installer from the "Get App" section, run the .exe file and enter your unique License Key when prompted. You can find your License Key in the Get App page.'
    },
    {
        question: 'Can I use the app on multiple devices?',
        answer: 'Your current plan supports a single device. Upgrade to the Professional or Enterprise plan to unlock multi-device support.'
    },
    {
        question: 'How do I upgrade my subscription?',
        answer: 'Navigate to the "Subscription" page from the sidebar and click "Upgrade Now" on any plan that fits your needs.'
    },
    {
        question: 'What happens when my trial expires?',
        answer: 'When your trial expires, you will be downgraded to the Free plan. Your data will be safe but some premium features will be restricted.'
    },
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-100 rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-slate-800 text-sm pr-4">{question}</span>
                {isOpen
                    ? <ChevronUp className="w-5 h-5 text-[#0d5c3a] flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                }
            </button>
            {isOpen && (
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed bg-slate-50 border-t border-slate-100">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function SupportPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In real app: send to API
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ subject: '', message: '' });
    };

    return (
        <div className="space-y-10">
            {/* PAGE HEADER */}
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Support Center</h1>
                <p className="text-slate-500 font-medium">
                    We're here to help. Send us a message or browse the FAQ below.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT: CONTACT FORM */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-100 p-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h2>
                        <p className="text-sm text-slate-400 mb-8">Our team typically responds within 24 hours.</p>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-[#22c773]" />
                                </div>
                                <p className="font-bold text-slate-800 text-lg">Message Sent!</p>
                                <p className="text-slate-400 text-sm">We'll get back to you at your registered email shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                        Subject
                                    </label>
                                    <select
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-[#22c773] outline-none transition-all"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="installation">Installation Issue</option>
                                        <option value="license">License Key Problem</option>
                                        <option value="billing">Billing & Subscription</option>
                                        <option value="bug">Report a Bug</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                        Message
                                    </label>
                                    <textarea
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        required
                                        rows={5}
                                        placeholder="Describe your issue in detail..."
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-[#22c773] outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center gap-3 bg-[#0d5c3a] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#22c773] transition-all shadow-lg shadow-emerald-900/10"
                                >
                                    <Send className="w-5 h-5" />
                                    Submit Ticket
                                </button>
                            </form>
                        )}
                    </div>

                    {/* FAQ SECTION */}
                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-100 p-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.question} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: CONTACT CARDS */}
                <div className="space-y-6">
                    <div className="bg-[#0d5c3a] text-white rounded-[2rem] p-8 shadow-2xl shadow-emerald-900/20">
                        <LifeBuoy className="w-8 h-8 text-[#22c773] mb-6" />
                        <h3 className="font-bold text-lg mb-2">Priority Support</h3>
                        <p className="text-emerald-100/70 text-sm mb-6 leading-relaxed">
                            Upgrade to Pro or Enterprise for dedicated support and faster response times.
                        </p>
                        <button className="w-full py-3 bg-white text-[#0d5c3a] rounded-xl font-bold hover:bg-[#22c773] hover:text-white transition-all text-sm">
                            Upgrade Plan
                        </button>
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-100 p-8 space-y-6 shadow-lg shadow-slate-100">
                        <h3 className="font-bold text-slate-900">Direct Contact</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-[#0d5c3a]" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:info@climeto.com" className="text-sm font-bold text-[#0d5c3a] hover:underline">
                                    info@climeto.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-[#0d5c3a]" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-sm font-bold text-slate-800">+91 98765 43210</p>
                                <p className="text-xs text-slate-400 mt-0.5">Mon–Fri, 9am–6pm IST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-5 h-5 text-[#0d5c3a]" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Live Chat</p>
                                <p className="text-sm font-bold text-slate-800">Available on Pro Plan</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
