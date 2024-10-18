"use client";

import { Client, Databases, Query } from "appwrite";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6700d08b00249a10df53");

export default function Page({ params }) {
  const slug = params.slug;
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const databases = new Databases(client);
    const promise = databases.listDocuments(
      "6700d0bf00172635c204",
      "6700d0c8001050f11559",
      [Query.equal("slug", [slug])]
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlog(response.documents[0]);
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  }, [slug]);

  useEffect(() => {
    if (blog.pagetitle) {
      document.title = blog.pagetitle;
    }
  }, [blog.pagetitle]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Image
            src={blog.imglink || "/placeholder.svg"}
            alt={blog.title1 || "Blog image"}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/conture-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition duration-300"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
          <article className="prose prose-invert lg:prose-xl max-w-none">
            <h1 className="text-4xl font-bold mb-4">{blog.title1}</h1>
            <p className="mb-8 text-xl">{blog.content1}</p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">{blog.title2}</h2>
            <p className="mb-8 text-lg">{blog.content2}</p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">{blog.title3}</h2>
            <p className="mb-8 text-lg">{blog.content3}</p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">{blog.title4}</h2>
            <p className="mb-8 text-lg">{blog.content4}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
