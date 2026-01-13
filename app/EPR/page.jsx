
import React from 'react';
import { stateSEOData } from './seoData';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'EPR Consultancy Services | Climeto',
    description: 'Climeto provides end-to-end Extended Producer Responsibility (EPR) compliance services for Producers, Importers, and Brand Owners (PIBOs) across India.',
};

export default function EPRLandingPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">EPR Consultancy Services Across India</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                We help businesses comply with CPCB & SPCB regulations for Plastic Waste, E-Waste, Battery Waste, Tyres, and Used Oil.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(stateSEOData).map(([key, state]) => (
                    <Link key={key} href={`/EPR/${key}`} className="group">
                        <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white h-full flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={state.image}
                                    alt={state.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex-grow">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{state.name}</h2>
                                <p className="text-gray-600 line-clamp-3">{state.description}</p>
                                <span className="inline-block mt-4 text-green-600 font-medium group-hover:underline">
                                    View Compliance Services &rarr;
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
