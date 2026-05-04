/* app/dashboard/layout.js */
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    CreditCard,
    LifeBuoy,
    Download,
    Menu,
    X,
    Leaf,
    Bell
} from 'lucide-react';

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();



    const menuItems = [
        { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
        { name: 'Subscription', icon: CreditCard, path: '/dashboard/subscription' },
        { name: 'Support', icon: LifeBuoy, path: '/dashboard/support' },
        { name: 'Get App', icon: Download, path: '/dashboard/get-app' },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] flex">
            {/* MOBILE OVERLAY */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0d5c3a] text-white p-6 transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                        <Leaf className="text-[#22c773] w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Climeto</span>
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                  ${isActive ? 'bg-[#22c773] text-white shadow-lg shadow-emerald-900/20' : 'hover:bg-white/5 text-emerald-100/70 hover:text-white'}
                `}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>


            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* HEADER */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <Menu className="w-6 h-6 text-slate-600" />
                    </button>

                    <div className="flex-1 lg:flex-none" />

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-400 hover:text-[#0d5c3a] transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900">Anupriya Kushwaha</p>
                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Climeto Admin</p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-[#0d5c3a] font-bold">
                                AK
                            </div>
                        </div>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
