import mongoose, { Schema } from "mongoose";
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, 
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, 
    author: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, enum: ["draft", "published"], default: "published" },
    views: { type: Number, default: 0 },
    publishedAt: { type: Date, default: Date.now },
    relatedLinks: [
      {
        title: { type: String },
        url: { type: String },
      }
    ], 
  },
  { timestamps: true } 
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;