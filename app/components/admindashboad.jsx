"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageUpload from "../upload/ImageUpload";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

const AdminDashboard = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (image.key || title || content || image.url) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [image, title, content]);

  const handleClick = async () => {
    const response = await axios.post("/api/create-blog", {
      title,
      content,
      image,
    });

    console.log("Response: ", response.data);
    alert("Blog created successfully");
    localStorage.removeItem("blogs");
    window.location.reload();

    setContent("");
    setTitle("");
    setImage("");
    setIsButtonEnabled(false);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <label
          htmlFor="image"
          className="block text-start w-full font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 text-gray-700"
        >
          Image
        </label>
        <ImageUpload setImage={setImage} />
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
