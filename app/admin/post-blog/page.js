"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function PostBlogAdmin() {
    const [formData, setFormData] = useState({
        title: "", slug: "", excerpt: "", author: "", category: "", status: "published", publishedAt: new Date().toISOString().slice(0, 16),
        relatedLinks: []
    });
    const [newLink, setNewLink] = useState({ title: "", url: "" });

    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [existingImageUrl, setExistingImageUrl] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [publishType, setPublishType] = useState("now"); // "now" or "schedule"

    useEffect(() => {
        if (isAuthenticated) {
            fetchBlogs();
        }
    }, [isAuthenticated]);

    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data.blogs || []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
                if (res.ok) {
                    alert("Blog deleted successfully!");
                    fetchBlogs();
                } else {
                    alert("Failed to delete the blog.");
                }
            } catch (error) {
                console.error("Delete error:", error);
                alert("Error deleting blog.");
            }
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // You can change this password to anything you like
        if (password === "admin@climeto123") {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password!");
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="max-w-md mx-auto p-10 mt-32 bg-white shadow-2xl rounded-2xl text-black text-center border-t-4 border-green-500">
                <h1 className="text-2xl font-bold mb-2">Climeto Admin</h1>
                <p className="text-gray-500 mb-6">Please enter password to post blogs</p>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input 
                        type="password" 
                        placeholder="Admin Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        autoFocus
                    />
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-md">
                        Access Dashboard
                    </button>
                </form>
            </main>
        );
    }

    const addLink = () => {
        if (newLink.title && newLink.url) {
            setFormData(prev => ({
                ...prev,
                relatedLinks: [...prev.relatedLinks, newLink]
            }));
            setNewLink({ title: "", url: "" });
        }
    };

    const removeLink = (index) => {
        setFormData(prev => ({
            ...prev,
            relatedLinks: prev.relatedLinks.filter((_, i) => i !== index)
        }));
    };

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setFormData({
                ...formData,
                title: e.target.value,
                slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
            });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleImageChange = (e) => setFile(e.target.files[0]);

    const handleEdit = (blog) => {
        setIsEditing(true);
        setEditId(blog._id);
        setFormData({
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt,
            author: blog.author,
            category: blog.category,
            status: blog.status || "published",
            publishedAt: blog.publishedAt ? new Date(blog.publishedAt).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
            relatedLinks: blog.relatedLinks || []
        });
        setPublishType(blog.publishedAt && new Date(blog.publishedAt) > new Date() ? "schedule" : "now");
        setContent(blog.content);
        setExistingImageUrl(blog.image);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cancelEdit = () => {
        setIsEditing(false);
        setEditId(null);
        setFormData({ title: "", slug: "", excerpt: "", author: "", category: "", status: "published", publishedAt: new Date().toISOString().slice(0, 16), relatedLinks: [] });
        setPublishType("now");
        setContent("");
        setFile(null);
        setExistingImageUrl("");
        setNewLink({ title: "", url: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Uploading Image to Cloudinary...");

        
        if (!file && !isEditing) {
            alert("Please upload a cover image!");
            return;
        }

        try {
            let imageUrl = existingImageUrl;

            // 1. Only upload image if a new file is selected
            if (file) {
                setStatus("Uploading New Image to Cloudinary...");
                const imageFormData = new FormData();
                imageFormData.append("file", file);

                const uploadRes = await fetch("/api/blogs/uploads", {
                    method: "POST",
                    body: imageFormData,
                });

                const uploadData = await uploadRes.json();
                imageUrl = uploadData.url;
            }

            setStatus(isEditing ? "Updating Blog..." : "Saving Blog to MongoDB...");

            // 2. Package all data
            const finalBlogData = { 
                ...formData, 
                content, 
                image: imageUrl,
                id: editId, // Required for PUT
                publishedAt: publishType === "now" ? new Date().toISOString() : formData.publishedAt
            };

            // 3. Send package to API
            const res = await fetch("/api/blogs", {
                method: isEditing ? "PUT" : "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(finalBlogData),
            });
            
            if (res.ok) {
                setStatus(isEditing ? "Blog Updated Successfully!" : "Blog Published Successfully!");
                cancelEdit();
                fetchBlogs(); // Refresh the list
            } else {
                setStatus("Failed to process request...");
            }
        } catch (error) {
            setStatus("Error connecting to server.");
        }
    };

    return (
        <main className="max-w-4xl mx-auto p-10 mt-10 bg-white shadow-xl rounded-xl text-black">
            <div className="flex justify-between items-center mb-8 border-b-2 border-green-500 pb-2">
                <h1 className="text-3xl font-bold">{isEditing ? "Edit Blog" : "Climeto Admin Dashboard"}</h1>
                {isEditing && (
                    <button onClick={cancelEdit} className="text-red-500 font-bold hover:underline">Cancel Edit</button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-bold mb-2">Blog Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block font-bold mb-2">URL Slug (Auto)</label>
                        <input type="text" name="slug" value={formData.slug} readOnly className="w-full p-2 bg-gray-50 rounded" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-bold mb-2">Author Name</label>
                        <input type="text" name="author" value={formData.author} onChange={handleChange} required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded">
                            <option value="">Select Category</option>
                            <option value="EPR">EPR</option>
                            <option value="Bioplastics">Bioplastics</option>
                            <option value="Carbon Market">Carbon Market</option>
                            <option value="Sustainability">Sustainability</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Status</label>
                        <select name="status" value={formData.status} onChange={handleChange} required className="w-full p-2 border rounded">
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Publishing Options</label>
                        <div className="flex gap-4 p-2 bg-gray-50 rounded border">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="publishType" 
                                    value="now" 
                                    checked={publishType === "now"} 
                                    onChange={() => setPublishType("now")} 
                                />
                                <span className="text-sm font-medium">Post Now</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="publishType" 
                                    value="schedule" 
                                    checked={publishType === "schedule"} 
                                    onChange={() => setPublishType("schedule")} 
                                />
                                <span className="text-sm font-medium">Schedule</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className={`block font-bold mb-2 ${publishType === "now" ? "text-gray-400" : ""}`}>
                            Publish Date (Schedule)
                        </label>
                        <input 
                            type="datetime-local" 
                            name="publishedAt" 
                            value={formData.publishedAt} 
                            onChange={handleChange} 
                            required={publishType === "schedule"}
                            disabled={publishType === "now"}
                            className={`w-full p-2 border rounded ${publishType === "now" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}`} 
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2">Short Summary (Excerpt)</label>
                    <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} required className="w-full p-2 border rounded" rows="2"></textarea>
                </div>

                {/* SEO Preview */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Search Engine Preview (SEO)</label>
                    <div className="space-y-1">
                        <div className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer truncate">
                            {formData.title || "Your Blog Title Will Appear Here"} | Climeto
                        </div>
                        <div className="text-[#006621] text-sm truncate">
                            https://climeto.com/blog/{formData.slug || "your-blog-slug"}
                        </div>
                        <div className="text-[#545454] text-sm line-clamp-2">
                            {formData.excerpt || "Your meta description will appear here as the summary of your blog post."}
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2">Cover Image {isEditing ? "(Leave empty to keep current)" : "Upload"}</label>
                    <input type="file" onChange={handleImageChange} accept="image/*" className="w-full p-2 border rounded" />
                    {isEditing && existingImageUrl && (
                        <p className="text-xs text-gray-400 mt-1 truncate">Current: {existingImageUrl}</p>
                    )}
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Interlinking / Related Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Link Title (e.g., Read About EPR)" 
                            value={newLink.title}
                            onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                            className="p-2 border rounded"
                        />
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                placeholder="URL (e.g., /blog/epr-guide)" 
                                value={newLink.url}
                                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                                className="p-2 border rounded flex-1"
                            />
                            <button 
                                type="button" 
                                onClick={addLink}
                                className="bg-green-600 text-white px-4 rounded font-bold hover:bg-green-700"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {formData.relatedLinks.map((link, index) => (
                            <div key={index} className="flex justify-between items-center bg-white p-2 rounded border border-gray-100 shadow-sm">
                                <div className="text-sm">
                                    <span className="font-bold text-gray-700">{link.title}</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-gray-400 italic">{link.url}</span>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={() => removeLink(index)}
                                    className="text-red-500 hover:text-red-700 font-bold px-2"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-72 mb-12">
                    <label className="block font-bold mb-2">Blog Body (Rich Text)</label>
                    <ReactQuill theme="snow" value={content} onChange={setContent} className="h-48" />
                </div>

                <button type="submit" className={`w-full ${isEditing ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"} text-white font-bold py-3 px-4 rounded shadow-lg mt-8`}>
                    {isEditing ? "Update Blog Post" : "Publish to Climeto Blog"}
                </button>
                {status && <p className="text-center font-bold text-blue-600 mt-4">{status}</p>}
            </form>

            {/* Manage Blogs Section */}
            <div className="mt-20 border-t-2 border-gray-100 pt-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 className="text-2xl font-bold text-gray-800">Manage Existing Blogs</h2>
                    <div className="flex gap-2 w-full md:w-auto">
                        <input 
                            type="text" 
                            placeholder="Search by title..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border rounded-lg text-sm w-full md:w-64"
                        />
                        <select 
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="p-2 border rounded-lg text-sm"
                        >
                            <option value="">All Categories</option>
                            <option value="EPR">EPR</option>
                            <option value="Bioplastics">Bioplastics</option>
                            <option value="Carbon Market">Carbon Market</option>
                            <option value="Sustainability">Sustainability</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    {blogs.length === 0 ? (
                        <p className="text-gray-500 italic">No blogs found in database.</p>
                    ) : (
                        blogs
                            .filter(blog => 
                                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                                (filterCategory === "" || blog.category === filterCategory)
                            )
                            .map((blog) => (
                            <div key={blog._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-gray-900">{blog.title}</h3>
                                        <div className="flex gap-1">
                                            <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full font-bold ${blog.status === 'draft' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                                                {blog.status || 'published'}
                                            </span>
                                            {blog.publishedAt && new Date(blog.publishedAt) > new Date() && (
                                                <span className="text-[10px] uppercase px-2 py-0.5 rounded-full font-bold bg-blue-100 text-blue-600">
                                                    Scheduled
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        By {blog.author} • {blog.category} • {new Date(blog.createdAt).toLocaleDateString()}
                                        <span className="flex items-center gap-1 ml-2 text-blue-500 font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                            {blog.views || 0}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleEdit(blog)}
                                        className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 px-4 rounded-lg font-bold transition-all border border-blue-100"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(blog._id)}
                                        className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white p-2 px-4 rounded-lg font-bold transition-all border border-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
