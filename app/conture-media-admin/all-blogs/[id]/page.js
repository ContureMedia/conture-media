"use client";

import Editor from "@/app/components/Editor";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import ImageUpload from "@/app/upload/ImageUpload";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

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

  const updateBlog = async () => {
    try {
      const res = await axios.patch("/api/update  ", {
        id,
        title,
        content,
        image,
      });
      console.log(res.data);
      localStorage.removeItem("blogs");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col w-full gap-5">
      <h1 className="text-2xl font-bold my-2">Edit Blog</h1>

      <div className="flex items-center justify-center flex-col  gap-5">
        <label htmlFor="image" className="text-xl">
          Image:
          <Image
            src={image === "" ? blog?.image : image}
            alt={blog?.title}
            width={500}
            height={300}
            className="border border-gray-300 p-2"
          />
        </label>
        <div id="image">
          <ImageUpload setImage={setImage} id="image" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5">
        <label htmlFor="title" className="text-xl">
          Title:
        </label>
        <input
          type="text"
          value={title === "" ? blog?.title : title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 max-w-96"
        />
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5 ">
        <label htmlFor="Content" className="text-xl">
          Content:
        </label>
        <Editor
          content={content === "" ? blog.content : content}
          setContent={setContent}
        />
      </div>
      <Button onClick={updateBlog} className="my-2 bg-sky-600 hover:bg-sky-400">
        <span>Update</span>
      </Button>
    </div>
  );
};

export default Blog;
