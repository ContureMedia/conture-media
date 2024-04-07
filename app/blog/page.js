"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      try {
        setBlogs(JSON.parse(savedBlogs));
      } catch (error) {
        console.error("Error parsing blogs from localStorage:", error);
      }
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
    setLoading(false);
  }, []);
  const updateBlogsInLocalStorage = useCallback((deletedBlogId) => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      try {
        const blogs = JSON.parse(savedBlogs);
        const updatedBlogs = blogs.filter((blog) => blog.id !== deletedBlogId);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      } catch (error) {
        console.error("Error parsing blogs from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  if (loading) {
    return (
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
        <BlogCardSkeleton />;
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center  bg-black">
        <div className="p-6 m-4  rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">
            No blogs available
          </h2>
          <p className="text-gray-200">Check back later for more updates.</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      style={{
        background: "radial-gradient(circle, #111 75%, black 100%)",
      }}
    >
      {blogs &&
        blogs?.map((blog) => (
          <Link
            href={`/blog/${blog?.id}`}
            key={blog?.id}
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <Image
              width={300}
              height={200}
              alt=""
              src={blog?.image || "https://source.unsplash.com/random"}
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Title</dt>

                  <dd className=" text-gray-100 text-xl">{blog?.title}</dd>
                </div>

                <div className="text-gray-300 text-sm">
                  <dt className="sr-only">Date</dt>

                  <dd className="font-medium ">
                    {new Date(blog?.date).toDateString()}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    className="size-4 text-purple-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
