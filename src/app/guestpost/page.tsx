"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Post {
  name: string;
  email: string;
  title: string;
  content: string;
}

function GuestPostPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]); // Store posts in an array
  const [expandedPost, setExpandedPost] = useState<number | null>(null); // Manage expanded post

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = localStorage.getItem("guestPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add the new post to the posts array
    const newPosts = [...posts, formData];
    setPosts(newPosts);
    localStorage.setItem("guestPosts", JSON.stringify(newPosts)); // Save to localStorage
    setIsSubmitted(true);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      title: "",
      content: "",
    });

    // Reset submission success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Message disappears after 3 seconds
  };

  const handlePostClick = (index: number) => {
    setExpandedPost(expandedPost === index ? null : index); // Toggle expansion
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Guest Post Submission</h1>

        {/* Show success message if form is submitted */}
        {isSubmitted ? (
          <div className="text-center bg-green-200 p-4 rounded-md mb-8">
            <p className="text-xl text-green-600">Thank you for your submission! We&apos;ll review your post shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b36d34]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b36d34]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="title">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b36d34]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800" htmlFor="content">
                Blog Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b36d34]"
                rows={6}  
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#b36d34] text-white py-3 px-8 rounded-lg hover:bg-[#d7ab7e] transition-all"
            >
              Submit Your Post
            </button>
          </form>
        )}

        {/* Display the submitted posts below the form */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Submitted Blog Posts</h2>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600">By {post.name} | {post.email}</p>

                {/* Show a preview or the full content based on whether the post is expanded */}
                <p className="mt-4 text-lg">
                  {expandedPost === index ? post.content : post.content.slice(0, 150) + '...'}
                </p>
                
                {/* Toggle button to expand or collapse the post */}
                <button
                  onClick={() => handlePostClick(index)}
                  className="mt-4 text-[#b36d34] hover:underline"
                >
                  {expandedPost === index ? "Show Less" : "Read More"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No posts submitted yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GuestPostPage;
