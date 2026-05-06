"use client";

import React from 'react';
import { Share2 } from "lucide-react";

export default function ShareButton({ title, text, url }) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: url || window.location.href,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    return (
        <button 
            onClick={handleShare}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            title="Share this article"
        >
            <Share2 size={20} />
        </button>
    );
}
