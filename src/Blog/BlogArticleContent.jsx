"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Type, 
    ChevronUp, 
    BookOpen, 
    Share2, 
    Twitter, 
    Linkedin, 
    Link as LinkIcon,
    CheckCircle2,
    List,
    Copy,
    Check
} from "lucide-react";

export default function BlogArticleContent({ blog }) {
    const [fontSize, setFontSize] = useState(18); // Default font size in px
    const [progress, setProgress] = useState(0);
    const [headings, setHeadings] = useState([]);
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState("");
    const contentRef = useRef(null);

    // Update progress bar and headings
    useEffect(() => {
        setShareUrl(window.location.href);
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollProgress = (scrollPosition / totalHeight) * 100;
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);

        // Extract headings for Table of Contents
        if (contentRef.current) {
            const headingElements = contentRef.current.querySelectorAll("h2, h3");
            const headingData = Array.from(headingElements).map((el, index) => {
                const id = `heading-${index}`;
                el.id = id;
                return {
                    id,
                    text: el.innerText,
                    level: el.tagName === "H2" ? 2 : 3
                };
            });
            setHeadings(headingData);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [blog.content]);

    const changeFontSize = (delta) => {
        setFontSize(prev => Math.min(Math.max(prev + delta, 14), 26));
    };

    const scrollToHeading = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            {/* Reading Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 h-1.5 bg-green-500 z-[100]"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Sidebar: Controls & TOC */}
                <aside className="lg:w-64 shrink-0 order-2 lg:order-1">
                    <div className="sticky top-24 space-y-8">
                        {/* Font Size Controls */}
                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Type size={14} /> Appearance
                            </h4>
                            <div className="flex items-center justify-between">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => changeFontSize(-2)}
                                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-green-500 hover:text-green-600 transition-all font-bold"
                                    title="Decrease Font Size"
                                >
                                    A-
                                </motion.button>
                                <span className="text-sm font-bold text-slate-600">{fontSize}px</span>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => changeFontSize(2)}
                                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-green-500 hover:text-green-600 transition-all font-bold"
                                    title="Increase Font Size"
                                >
                                    A+
                                </motion.button>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        {headings.length > 0 && (
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hidden lg:block">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <List size={14} /> Contents
                                </h4>
                                <nav className="space-y-3">
                                    {headings.map((heading) => (
                                        <button
                                            key={heading.id}
                                            onClick={() => scrollToHeading(heading.id)}
                                            className={`block text-left text-sm font-medium transition-colors hover:text-green-600 ${
                                                heading.level === 3 ? "pl-4 text-slate-500" : "text-slate-700"
                                            }`}
                                        >
                                            {heading.text}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 max-w-3xl order-1 lg:order-2">
                    {/* Key Highlights Boxes */}
                    {blog.keyPoints && blog.keyPoints.length > 0 && (
                        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {blog.keyPoints.map((point, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex gap-4 group"
                                >
                                    <div className="shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle2 className="text-green-600" size={18} />
                                        </div>
                                    </div>
                                    <p className="text-slate-700 font-semibold leading-snug">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Article Body */}
                    <div 
                        ref={contentRef}
                        className="prose prose-slate max-w-none 
                            prose-headings:font-black prose-headings:text-slate-900
                            prose-p:text-slate-700 prose-p:leading-relaxed
                            prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-3xl prose-blockquote:border-green-500
                            prose-strong:text-slate-900
                            prose-ul:list-disc prose-ul:ml-6
                            prose-ol:list-decimal prose-ol:ml-6
                            prose-li:my-2
                            [&_.ql-align-center]:text-center
                            [&_.ql-align-right]:text-right
                            [&_.ql-align-justify]:text-justify
                            [&_.ql-indent-1]:pl-8
                            [&_.ql-indent-2]:pl-16
                            [&_.ql-indent-3]:pl-24"
                        style={{ 
                            fontSize: `${fontSize}px`,
                            lineHeight: 1.6
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                </div>
            </div>
        </div>
    );
}
