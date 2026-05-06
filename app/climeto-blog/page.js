// Path: app/climeto-blog/page.js

import BlogPage from "../../src/Blog/Blog.jsx";

export const metadata = {
  title: "EcoVoice Blog | Climeto Sustainability Insights",
  description: "Stay informed with the latest environmental compliance guides, EPR rules, and carbon market trends from Climeto.",
  openGraph: {
    title: "EcoVoice Blog | Climeto",
    description: "Expert insights for a sustainable, carbon-conscious future.",
    url: "https://climeto.com/climeto-blog",
    siteName: "Climeto",
    type: "website",
  },
};

export default function BlogListPage() {
  return <BlogPage />;
}
