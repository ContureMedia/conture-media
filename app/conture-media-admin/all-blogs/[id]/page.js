"use client";

import Editor from "@/app/components/Editor";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
  console.log(blog);
  return (
    <div className="flex items-center justify-center flex-col w-full gap-5">
      <h1 className="text-2xl font-bold my-2">Edit Blog</h1>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5">
        <label htmlFor="title" className="text-xl">
          Title:
        </label>
        <input
          type="text"
          value={blog.title}
          onChange={(e) => setTitle({ ...blog, title: e.target.value })}
          className="border border-gray-300 p-2 "
        />
        <Button>
          <span>Update Title</span>
        </Button>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5">
        <label htmlFor="Content" className="text-xl">
          Content:
        </label>
        <Editor content={blog?.content} setContent={setContent} />
        <Button>
          <span>Update Content</span>
        </Button>
      </div>
    </div>
  );
};

export default Blog;
