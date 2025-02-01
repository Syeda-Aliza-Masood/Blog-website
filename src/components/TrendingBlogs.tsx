// TrendingBlogs.tsx
import React from 'react';
import Link from 'next/link';

const TrendingBlogs = () => {
  // Example list of trending blog topics with image URLs and titles
  const blogs = [
    { imageUrl: '/1.jpg', title: 'The Future of Web Development' },
    { imageUrl: '/3.png', title: 'Machine Learning in 2025: What to Expect' },
    { imageUrl: '/4.jpg', title: 'CSS Tricks You Need to Know' },
    { imageUrl: '/5.png', title: 'Building Scalable Applications with Next.js' },
  ];

  return (
    <section className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Trending Blog Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="#">
                <div className={`relative w-full ${index === 0 || index === 3 ? 'scale-90' : ''}`}>
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-4 text-center">{blog.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs;
