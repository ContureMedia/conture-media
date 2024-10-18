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