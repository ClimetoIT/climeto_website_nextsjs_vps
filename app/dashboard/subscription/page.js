/* app/dashboard/subscription/page.js */
"use client";

import React from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';

export default function SubscriptionPage() {
    const plans = [
        {
            name: 'Free Starter',
            price: '0',
            description: 'Perfect for small businesses starting their journey.',
            features: ['Basic Carbon Tracking', 'Single Device Support', 'Standard Support', 'Monthly Reports'],
            icon: Zap,
            current: true,
        },
        {
            name: 'Professional',
            price: '49',
            description: 'Advanced tools for growing sustainable companies.',
            features: ['Real-time Auditing', 'Unlimited Devices', 'Priority Support', 'Weekly Analytics', 'API Access'],
            icon: Shield,
            current: false,
        },
        {
            name: 'Enterprise',
            price: '199',
            description: 'The ultimate suite for global industrial leaders.',
            features: ['Custom Integration', 'Dedicated Account Manager', '24/7 Phone Support', 'Advanced Security', 'Multi-user Access'],
            icon: Crown,
            current: false,
        }
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Subscription Management</h1>
                <p className="text-slate-500 font-medium">Manage your billing and choose the plan that fits your audit volume.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative bg-white rounded-[2rem] p-8 border-2 transition-all ${plan.current ? 'border-[#0d5c3a] shadow-xl shadow-emerald-900/5' : 'border-slate-100'}`}
                    >
                        {plan.current && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d5c3a] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Your Current Plan
                            </span>
                        )}

                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.current ? 'bg-emerald-50 text-[#0d5c3a]' : 'bg-slate-50 text-slate-400'}`}>
                            <plan.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">{plan.description}</p>

                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-black text-slate-900">${plan.price}</span>
                            <span className="text-slate-400 font-medium">/month</span>
                        </div>

                        <div className="space-y-4 mb-10">
                            {plan.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#22c773]" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            disabled={plan.current}
                            className={`w-full py-4 rounded-xl font-bold transition-all ${plan.current ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-[#0d5c3a] text-white hover:bg-[#22c773] shadow-lg shadow-emerald-900/10'}`}
                        >
                            {plan.current ? 'Active Plan' : 'Upgrade Now'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
