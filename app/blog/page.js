"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../components/database-blogs";
import { FiArrowRight } from "react-icons/fi";

export default function Blogs() {
  const blogs = useBlogs();

  return (
    <div
      className="min-h-screen  text-white"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item) => (
            <Link href={`/blog/${item.slug}`} key={item.slug} className="block">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  className="w-full h-48 object-cover"
                  src={item.imglink}
                  alt={item.title1}
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.title1}</h2>
                  <p className="text-gray-400 mb-4">
                    {item.content1.substr(0, 100)}...
                  </p>
                  <div className="flex items-center text-blue-500 hover:text-blue-600">
                    <span>Learn More</span>
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
