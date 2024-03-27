"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

const AdminDashboard = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    if (image || title || content) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [image, title, content]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 border border-gray-300 rounded p-2  hidden"
        />
        <label htmlFor="image" className="w-full ">
          <div className="flex-1 items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div className="items-center justify-center max-w-xl mx-auto">
                <label
                  className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  id="drop"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop Image here or
                      <span className="text-blue-600 underline ml-[4px]">
                        browse
                      </span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    className="hidden"
                    accept="image/png,image/jpeg"
                    id="input"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </div>
          {image && (
            <div className="lg:w-11/12 items-center justify-center mx-auto ">
              <div className="flex items-center justify-center  mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt="Selected"
                  className="w-full rounded shadow-lg mb-4"
                />
              </div>
            </div>
          )}
        </label>

        <label
          htmlFor="title"
          className="text-start w-full font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4"
        >
          <span className="text-gray-700 text-start">Title</span>
        </label>

        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <label
          htmlFor="content"
          className="text-start w-full font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4"
        >
          <span className="text-gray-700 text-start">Content</span>
        </label>
        <QuillNoSSRWrapper
          theme="snow"
          id="content"
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
          ]}
          value={content}
          onChange={setContent}
          className="mb-4 w-full"
        />
        <button
          onClick={() => console.log({ image, title, content })}
          disabled={!isButtonEnabled}
          className={`${
            isButtonEnabled ? "bg-green-500 hover:bg-green-700" : "bg-gray-300"
          } text-white font-bold py-2 px-4 rounded w-full`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
