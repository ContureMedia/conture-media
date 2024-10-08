"use client";
import { Client, Databases } from 'appwrite';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6700d08b00249a10df53');

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);
    const promise = databases.listDocuments('6700d0bf00172635c204', '6700d0c8001050f11559');

    promise.then((response) => {
      console.log(response);
      setBlogs(response.documents);
    }, (error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <section className="text-black body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((item) => (
              <div className="p-4 md:w-1/3" key={item.slug}>
                <Link href={"/blog/" + item.slug}>
                  <div className="bg-gray-100 h-full border-4 border-black border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.imglink} alt={item.title1} />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-black mb-3">{item.title1}</h1>
                      <p className="leading-relaxed mb-3">{item.content1.substr(0, 12)}...</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>6
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for hover effects */}
        <style jsx>{`
          .bg-white {
            background-color: #ffffff; /* Corrected typo from 'bg-whitw' */
          }
          .transition-transform {
            transition: transform .3s ease;
          }
          .hover\\:scale\\[1\\.05\\]:hover {
            transform: scale(1.05);
          }
        `}</style>
      </section>
    </div>
  );
};

export default Blogs;