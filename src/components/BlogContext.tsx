"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the blog post data
interface Post {
  name: string;
  email: string;
  title: string;
  content: string;
}

// Define the context shape
interface BlogContextType {
  posts: Post[];
  addPost: (post: Post) => void;
}

// Create a context with an empty posts array and a placeholder function for addPost
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Create a provider component
export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the Blog context
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
