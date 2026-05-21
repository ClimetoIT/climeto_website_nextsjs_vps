// Path: app/blog/[slug]/page.js

import connectMongoDB from "../../../backend/db";
import Blog from "../../../backend/models/Blog";
import { Leaf, Calendar, ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButton from "../../../src/Blog/ShareButton";
import BlogArticleContent from "../../../src/Blog/BlogArticleContent";
import FaqAccordion from "../../../src/Blog/FaqAccordion";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { slug } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ slug: slug });
    
    if (!blog) {
        return {
            title: "Blog Not Found | Climeto",
            description: "The requested blog post could not be found."
        };
    }

    return {
        title: `${blog.title} | Climeto EcoVoice`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [{ url: blog.image }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image],
        },
    };
}

export default async function DynamicBlogPage({ params }) {
    const { slug } = params;

    await connectMongoDB();
    const blog = await Blog.findOne({ slug: slug });

    if (!blog) {
        notFound();
    }

    // Increment view count asynchronously (don't await if you want faster load, but await is safer for consistency)
    await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });

    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    return (
        <div className="min-h-screen bg-white font-sans relative overflow-hidden">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blog.title,
                        "image": blog.image,
                        "author": {
                            "@type": "Person",
                            "name": blog.author
                        },
                        "datePublished": blog.createdAt,
                        "description": blog.excerpt
                    })
                }}
            />

            {/* FAQ Structured Data for SEO */}
            {blog.faqs && blog.faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": blog.faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            )}

            {/* Background Watermarks */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] flex items-center justify-center">
                <img 
                    src="/Climeto-Transparent.png" 
                    alt="Climeto Watermark" 
                    className="w-[80%] max-w-4xl rotate-[-15deg]"
                />
            </div>
            <div className="fixed top-20 right-[-100px] pointer-events-none z-0 opacity-[0.05]">
                <img 
                    src="/climetotitle.png" 
                    alt="Climeto Title Watermark" 
                    className="w-[400px] rotate-90"
                />
            </div>

            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/climeto-blog" className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors">
                        <ArrowLeft size={18} />
                        <span>Back to Feed</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <ShareButton 
                            title={blog.title} 
                            text={blog.excerpt} 
                        />
                    </div>
                </div>
            </nav>

            <article className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
                {/* Header Content */}
                <header className="mb-12 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-6">
                        <Leaf size={14} />
                        {blog.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                        {blog.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow-lg shadow-green-100">
                                {blog.author?.charAt(0) || "C"}
                            </div>
                            <span className="text-slate-900 font-bold">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-green-600" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-green-600" />
                            <span>
                                {(() => {
                                    const plainText = blog.content?.replace(/<[^>]*>/g, '') || "";
                                    const words = plainText.trim().split(/\s+/).length;
                                    return Math.ceil(words / 200) || 1;
                                })()} min read
                            </span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-5xl mx-auto">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                </div>

                {/* Article Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Excerpt/Intro */}
                    <div className="max-w-3xl mx-auto text-xl md:text-2xl font-semibold text-slate-800 mb-12 leading-relaxed border-l-4 border-green-500 pl-8 italic">
                        {blog.excerpt}
                    </div>

                    {/* Main Article Body with Interactive Features */}
                    <BlogArticleContent blog={JSON.parse(JSON.stringify(blog.toObject ? blog.toObject() : blog))} />


                    {/* Interlinking Section */}
                    {blog.relatedLinks && blog.relatedLinks.length > 0 && (
                        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                                Related Articles & Resources
                            </h3>
                            <div className="grid gap-4">
                                {blog.relatedLinks.map((link, index) => (
                                    <Link 
                                        key={index} 
                                        href={link.url} 
                                        className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all"
                                    >
                                        <span className="font-semibold text-slate-700 group-hover:text-green-600 transition-colors">
                                            {link.title}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                                            <ArrowRight size={18} className="text-slate-400 group-hover:text-green-600" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {blog.faqs && blog.faqs.length > 0 && (
                        <div className="mt-16 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white text-lg">?</span>
                                Frequently Asked Questions
                            </h3>
                            <FaqAccordion faqs={JSON.parse(JSON.stringify(blog.faqs))} />
                        </div>
                    )}
                </div>
            </article>

            {/* Simple Footer */}
            <footer className="bg-slate-50 border-t border-slate-100 py-12 mt-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <img src="/Climeto-Transparent.png" alt="Climeto Logo" className="h-8 opacity-50" />
                        <p className="text-slate-400 text-sm">© 2026 Climeto Sustainable Services</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/climeto-blog" className="text-slate-500 hover:text-green-600 font-bold transition-colors">
                            More Articles
                        </Link>
                        <Link href="/" className="text-slate-500 hover:text-green-600 font-bold transition-colors">
                            Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
