/* app/dashboard/get-app/page.js */
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, Key, Info, CheckCircle, Copy } from 'lucide-react';

export default function GetAppPage() {
    const [licenseKey] = useState('CLM-8B2F-92A1-K8'); // Mock Key

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Download Climeto Desktop</h1>
                <p className="text-slate-500 font-medium">Get the full power of sustainability auditing on your Windows machine.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* MAIN DOWNLOAD CARD */}
                <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <div className="p-10">
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-16 h-16 bg-[#0d5c3a] rounded-2xl flex items-center justify-center text-white">
                                <Monitor className="w-8 h-8" />
                            </div>
                            <span className="px-4 py-1.5 bg-emerald-50 text-[#0d5c3a] text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-100">
                                Latest: v1.0.4
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Climeto Suite for Windows</h2>
                        <p className="text-slate-500 mb-8 max-w-md">
                            A professional-grade desktop application for real-time carbon credit tracking and audit management.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center mb-10">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                <CheckCircle className="w-4 h-4 text-[#22c773]" /> Windows 10 / 11
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                <CheckCircle className="w-4 h-4 text-[#22c773]" /> 48.5 MB
                            </div>
                        </div>

                        <button
                            onClick={() => alert('Starting Download...')}
                            className="group flex items-center gap-3 bg-[#0d5c3a] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#22c773] transition-all shadow-xl shadow-emerald-900/20"
                        >
                            <Download className="group-hover:translate-y-1 transition-transform" />
                            Download Installer (.exe)
                        </button>
                    </div>

                    <div className="bg-slate-50 px-10 py-6 border-t border-slate-200 flex items-center justify-between">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Secure & Verified by Climeto Security</p>
                        <div className="flex gap-4">
                            <span className="text-slate-300">|</span>
                            <button className="text-xs font-bold text-slate-500 hover:text-[#0d5c3a]">View Release Notes</button>
                        </div>
                    </div>
                </div>

                {/* LICENSE & STEPS */}
                <div className="space-y-8">
                    {/* LICENSE KEY CARD */}
                    <div className="bg-[#0d5c3a] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Key className="text-[#22c773]" />
                                <span className="font-bold text-emerald-100/60 uppercase tracking-widest text-xs">Your Activation Key</span>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <input
                                    readOnly
                                    value={licenseKey}
                                    className="bg-white/10 border border-white/20 w-full px-4 py-4 rounded-xl font-mono text-lg text-emerald-50 focus:outline-none"
                                />
                                <button
                                    onClick={() => { navigator.clipboard.writeText(licenseKey); alert('Copied!'); }}
                                    className="bg-white text-[#0d5c3a] p-4 rounded-xl hover:bg-[#22c773] hover:text-white transition-all"
                                >
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-emerald-100/50 leading-relaxed italic">
                                * This key is uniquely linked to your company and cannot be shared.
                            </p>
                        </div>
                    </div>

                    {/* STEPS CARD */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-lg shadow-slate-100">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Info className="w-5 h-5 text-[#22c773]" /> How to Install
                        </h3>
                        <div className="space-y-6">
                            {[
                                { step: 1, title: 'Run Setup', desc: 'Execute the downloaded .exe file' },
                                { step: 2, title: 'Activate', desc: 'Paste your license key when prompted' },
                                { step: 3, title: 'Connect', desc: 'Log in with your website credentials' }
                            ].map((s) => (
                                <div key={s.step} className="flex gap-4">
                                    <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-xs font-black text-[#0d5c3a]">
                                        {s.step}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">{s.title}</p>
                                        <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
