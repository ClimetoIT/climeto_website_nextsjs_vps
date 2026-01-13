import React from "react";
import "./Bluesection.css";
import blogImg from "../assets/images/blog.png";
import guidelineImg from "../assets/images/guideline.jpg";
import treeImg from "../assets/images/tree.jpg";
import Link from "next/link";

export default function Bluesection() {
  const blogs = [
    {
      id: 1,
      title: "Article 6 of the Paris Agreement & Carbon Markets: Detailed Guide for 2025",
      image: blogImg,
      link: "/paris",
      featured: true,
    },
    {
      id: 2,
      title:
        "Revised Guidelines for Environmental Compensation on Plastic Waste Management Violations",
      image: guidelineImg,
      link:"/India-Strategy",
    },
    {
      id: 3,
      title:
        "India’s commitment to achieving net-zero emissions by 2070",
      image: treeImg,
      link: "/Nature-based",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Left (Main Article) */}
        <div className="main-article">
          <img
            src={typeof blogs[0].image === "string" ? blogs[0].image : blogs[0].image?.src || ""}
            alt={blogs[0].title}
            className="main-img"
          />
          <Link href={blogs[0].link} className="main-link">
            {blogs[0].title}
          </Link>
        </div>

        {/* Right (Side Articles) */}
        <div className="side-articles">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="side-article">
              <img
                src={typeof blog.image === "string" ? blog.image : blog.image?.src || ""}
                alt={blog.title}
                className="side-img"
              />
              <Link href={blog.link} className="side-link">
                {blog.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
     <div className="explore-btn-wrapper">
      
    </div>

    </section>
  );
}
