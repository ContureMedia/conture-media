"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      const res = await axios.get("/api/get-blogs");
      const data = res.data;
      setBlogs(data.data);
      localStorage.setItem("blogs", JSON.stringify(data.data));
      setTimeout(() => {
        localStorage.removeItem("blogs");
        getBlogs();
      }, 300000);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
            <div className="bg-gray-950 shadow-lg overflow-hidden max-w-lg w-full">
              <Image
                width={400}
                height={400}
                src={blog?.image || "https://source.unsplash.com/random"}
                alt="Blog Image"
                className="w-full h-60 object-fill"
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
