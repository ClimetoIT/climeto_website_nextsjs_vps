"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function VerifyOTP() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);
    const inputRefs = useRef([]);
    const router = useRouter();

    // Countdown timer for "Resend"
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Only numbers
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Backspace to previous input
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="min-h-screen bg-[#f2faf5] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 p-10 text-center border border-emerald-50"
            >
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <ShieldCheck className="w-10 h-10 text-[#0d5c3a]" />
                </div>

                <h1 className="text-3xl font-extrabold text-[#0d5c3a] mb-2">Verify Email</h1>
                <p className="text-gray-500 mb-10 text-sm">
                    We've sent a 6-digit code to your email. Please enter it below to activate your account.
                </p>

                <div className="flex justify-between gap-2 mb-10">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-14 bg-gray-50 border-2 border-gray-100 rounded-xl text-center text-2xl font-bold text-[#0d5c3a] focus:border-[#22c773] focus:ring-4 focus:ring-emerald-50 outline-none transition-all"
                        />
                    ))}
                </div>

                <button
                    onClick={() => router.push('/dashboard')}
                    className="w-full py-4 bg-[#0d5c3a] text-white rounded-2xl font-bold hover:bg-[#22c773] transition-all shadow-lg shadow-emerald-900/10 mb-8"
                >
                    Verify & Continue
                </button>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-500">
                        Didn't receive the code?{' '}
                        {timer > 0 ? (
                            <span className="text-gray-400 font-bold">Resend in {timer}s</span>
                        ) : (
                            <button
                                onClick={() => setTimer(59)}
                                className="text-[#0d5c3a] font-bold hover:underline flex items-center gap-1"
                            >
                                <RefreshCw className="w-4 h-4" /> Resend Now
                            </button>
                        )}
                    </p>

                    <Link href="/login" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#0d5c3a] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
