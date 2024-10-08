"use client"
import { Client, Databases, Query } from 'appwrite';
import React from 'react';
import { useEffect, useState } from 'react';



const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6700d08b00249a10df53');

const page = ({ params }) => {
  const slug = params.slug
  const [blog, setBlog] = useState([])
  useEffect(() => {
    const databases = new Databases(client);
    const promise = databases.listDocuments('6700d0bf00172635c204', '6700d0c8001050f11559', [Query.equal("slug", [slug])])

    promise.then(function (response) {
      console.log(response);
      setBlog(response.documents[0])
    }, function (error) {
      console.log(error);
    });
  }, [])

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);

  };

  useDocumentTitle(blog.pagetitle);

  return (
    
    <div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-full mb-10 object-contain object-center rounded" alt={blog.imglink} src={blog.imglink} />
        <div className="flex space-x-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-400 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-400 transition duration-300"
          >
            <img
              src="https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-400 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="text-center lg:w-2/3 w-full my-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-left">{blog.title1}</h1>
          <p className="mb-8 leading-relaxed text-left text-2xl text-gray-950">{blog.content1}</p>
        </div>
        <div className="text-center lg:w-2/3 w-full my-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950 text-left">{blog.title2}</h1>
          <p className="mb-8 leading-relaxed text-left text-2xl text-gray-900">{blog.content2}</p>
        </div>
        <br />
        <div className="text-center lg:w-2/3 w-full my-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950 text-left">{blog.title3}</h1>
          <p className="mb-8 leading-relaxed text-left text-2xl text-gray-900">{blog.content3}</p>
        </div>
        <div className="text-center lg:w-2/3 w-full my-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950 text-left">{blog.title4}</h1>
          <p className="mb-8 leading-relaxed text-left text-2xl text-gray-900">{blog.content4}</p>
        </div>
        <br />

      </div>
    </div>
  )
}

export default page