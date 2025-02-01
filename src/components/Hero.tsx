"use client";

import About from "@/components/About"; // Ensure About component is properly imported
import TrendingBlogs from "@/components/TrendingBlogs"
import Link from "next/link";

function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Where Knowledge Meets Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              It reflects a platform where readers can explore diverse topics, gain valuable knowledge, and spark innovative thinking.
            </p>
            <Link href="/blog">
              <button className="bg-[#b36d34] text-white py-3 px-8 rounded-lg hover:bg-[#d7ab7e] transition-all">
                Explore More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="blog.jpg"
              alt="Blog Hero"
              className="w-3/4 md:w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* TrendingBlogs */}
      <TrendingBlogs />
    </>
  );
}

export default Hero;
