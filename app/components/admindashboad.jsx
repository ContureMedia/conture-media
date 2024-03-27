"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import { UploadButton } from "@/utils/uploadthing";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

const AdminDashboard = () => {
  const [image, setImage] = useState({ key: "", url: "" });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (image || title || content) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [image, title, content]);

  const handleClick = async () => {
    console.log("Image: ", image);
    console.log("Title: ", title);
    console.log("Content: ", content);

    setContent("");
    setTitle("");
    setImage({ key: "", url: "" });
    setIsButtonEnabled(false);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <UploadButton
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 py-5 rounded"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed");
            setImage({ key: res[0].key, url: res[0].url });
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />

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
          onClick={handleClick}
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
