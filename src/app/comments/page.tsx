"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function CommentsPage() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (comment.trim() === "") return; // Prevent submitting empty comments

    // Add the new comment to the comments array
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments)); // Save to localStorage

    // Clear the comment input field
    setComment("");
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Leave a Comment</h1>

        {/* Comment Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <label className="block text-lg font-semibold text-gray-800" htmlFor="comment">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b36d34]"
            rows={4}
            placeholder="Write your comment here..."
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full bg-[#b36d34] text-white py-3 px-8 rounded-lg hover:bg-[#d7ab7e] transition-all"
          >
            Submit Comment
          </button>
        </form>

        {/* Display the submitted comments */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Comments</h2>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p className="text-lg text-gray-800">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CommentsPage;
