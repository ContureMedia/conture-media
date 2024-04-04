"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("blogs");
    };
    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const getBlogs = useCallback(async () => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      const res = await axios.get("/api/get-blogs", {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
        },
      });
      const data = res.data;
      setBlogs(data.data);
      localStorage.setItem("blogs", JSON.stringify(data.data));
    }
  }, []);
  const updateBlogsInLocalStorage = useCallback((deletedBlogId) => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const updatedBlogs = blogs.filter((blog) => blog.id !== deletedBlogId);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }
  }, []);

  useEffect(() => {
    getBlogs();
    updateBlogsInLocalStorage();
  }, [getBlogs, updateBlogsInLocalStorage]);

  if (!blogs[0]?.image)
    return (
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 bg-black">
        <BlogCardSkeleton />;
      </div>
    );
  return (
    <div
      className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4"
      style={{
        background: "radial-gradient(circle, #111 75%, black 100%)",
      }}
    >
      {blogs &&
        blogs?.map((blog) => (
          <Link
            href={`/blog/${blog?.id}`}
            key={blog?.id}
            className="flex flex-col justify-center items-center bg-black rounded-md overflow-hidden"
          >
            <div className="bg-gray-950 shadow-lg overflow-hidden max-w-xl w-full">
              <Image
                width={600}
                height={400}
                src={blog?.image || "https://source.unsplash.com/random"}
                alt="Blog Image"
                className="w-full  object-cover object-center"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-300 mb-2">
                  {blog?.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-300 text-sm">Admin</span>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {new Date(blog?.date).toDateString()}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
