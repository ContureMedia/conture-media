"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const BlogID = () => {
  const { id } = useParams();

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
            src="https://source.unsplash.com/1920x1080/?random"
            alt=" test"
            width={1920}
            height={1080}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                Revenge of the Never Trumpers
              </h1>
              <span className="text-gray-700 text-xs mt-2 flex gap-2">
                Written By:
                <p className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Admin
                </p>{" "}
              </span>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogID;
