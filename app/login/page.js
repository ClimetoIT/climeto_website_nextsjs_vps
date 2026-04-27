"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Leaf, Mail, Lock, User, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* LEFT SIDE: Visual Brand Area */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#0d5c3a] relative items-center justify-center p-12 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover opacity-20" />
                <div className="relative z-10 max-w-lg">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                            <Leaf className="w-7 h-7 text-[#22c773]" />
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight">Climeto</h1>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight mb-6">
                        Connecting Business & <span className="text-[#22c773]">Sustainability</span>
                    </h2>
                    <p className="text-lg text-emerald-100/80 mb-12">
                        Join the global movement of carbon auditing. Manage your impact directly from our desktop suite.
                    </p>
                    <div className="space-y-4">
                        {['Global standard reporting', 'Seamless Desktop integration', 'Real-time carbon tracking'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22c773]" />
                                <span className="font-medium text-emerald-50">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Form Area */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
                <div className="w-full max-w-md">
                    <div className="mb-10 lg:hidden flex items-center gap-2">
                        <Leaf className="text-[#0d5c3a] w-8 h-8" />
                        <span className="text-2xl font-bold text-[#0d5c3a]">Climeto</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'signup'}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-3xl font-bold text-[#0d5c3a] mb-2">
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h3>
                            <p className="text-gray-500 mb-8">
                                {isLogin ? 'Enter your details to access your dashboard.' : 'Fill in the information to get started.'}
                            </p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                {!isLogin && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-bold text-gray-700">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22c773] outline-none" placeholder="John Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-bold text-gray-700">Company</label>
                                            <div className="relative">
                                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22c773] outline-none" placeholder="Climeto Ltd" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22c773] outline-none" placeholder="name@company.com" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="password" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22c773] outline-none" placeholder="••••••••" />
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setLoading(true);
                                        setTimeout(() => {
                                            setLoading(false);
                                            router.push('/verifyOTP');
                                        }, 1500);
                                    }}
                                    className="w-full py-4 bg-[#0d5c3a] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#22c773] transition-all shadow-xl shadow-emerald-900/10 mt-6"
                                >
                                    {loading ? 'Processing...' : (isLogin ? 'Login Account' : 'Get Started Now')}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>

                            <div className="mt-8 text-center text-sm text-gray-500">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="ml-2 text-[#0d5c3a] font-bold hover:underline"
                                >
                                    {isLogin ? 'Sign up' : 'Log in'}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
