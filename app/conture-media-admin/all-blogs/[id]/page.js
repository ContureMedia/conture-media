"use client";

import { useParams } from "next/navigation";

const Blog = () => {
  const params = useParams();
  return (
    <div>
      <h1>Blog {params.id}</h1>
    </div>
  );
};

export default Blog;
