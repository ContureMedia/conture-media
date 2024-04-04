"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const BlogID = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlog = useCallback(async () => {
    const res = await axios.post(`/api/get-blogs/${id}`);
    const data = res.data;
    setBlog(data.data);
  }, [id]);

  useEffect(() => {
    if (id) {
      getBlog();
    }
  }, [id, getBlog]);

  if (!blog?.image) {
    return (
      <div className="w-full bg-black h-full p-5">
        <div className="flex flex-col bg-gray-900 rounded-lg p-5 mt-5 mx-5 animate-pulse">
          <div className="w-full overflow-hidden h-[55vh] bg-gray-700"></div>

          <p className="text-gray-700 border border-gray-600 dark:text-gray-200 bg-gray-700 p-5 w-full mt-2 md:p-20 md:-mt-10 md:w-1/2 mx-auto"></p>
          <div className="flex justify-between items-center mt-4 p-5"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className=""
      style={{
        background: "radial-gradient(circle, #111 75%, black 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <Image
            src={blog?.image}
            alt={blog?.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-gray-500 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-gray-900 relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-200 font-bold text-3xl mb-2">
                {blog?.title}
              </h1>
              <span className="text-gray-200 text-xs mt-2 flex gap-2">
                Written By:
                <p className="text-blue-600 font-medium  transition duration-500 ease-in-out">
                  Admin
                </p>{" "}
              </span>
              <p
                className="text-base leading-8 my-5 text-gray-300"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogID;
