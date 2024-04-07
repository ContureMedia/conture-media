"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const AllBLogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = useCallback(async () => {
    try {
      const res = await axios.get("/api/get-blogs");
      if (res.data && res.data.data) {
        setBlogs(res.data.data);
      } else {
        console.error("Unexpected response from /api/get-blogs:", res.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const handleClick = async (id) => {
    try {
      const res = await axios.post("/api/delete-blog", { id });
      if (res.data) {
        getBlogs();
      } else {
        console.error("Unexpected response from /api/delete-blog:", res.data);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto px-4 p-5">
      <div className="items-start justify-between sm:flex">
        <div>
          <h4 className="text-gray-800 text-xl font-semibold">All Blogs</h4>
          <p className="mt-2 text-gray-600 text-base sm:text-sm">
            Manage all the blogs here
          </p>
        </div>
      </div>
      <ul className="mt-12 divide-y">
        {blogs &&
          blogs?.map((item) => (
            <li
              key={item?.id}
              className="py-5 flex my-2 items-start justify-between shadow-2xl border rounded-lg bg-white px-4 sm:px-6 md:px-8"
            >
              <div className="flex gap-3">
                <Image
                  width={100}
                  height={100}
                  src={item?.image}
                  className=""
                  alt={item?.title}
                />
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item?.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <Link
                  href={`/conture-media-admin/all-blogs/${item?.id}`}
                  className="text-gray-200 text-sm border rounded px-3 py-2 font-bold flex items-center justify-center gap-1 duration-150 bg-sky-500 hover:bg-sky-700"
                >
                  <FaRegEdit fontSize={20} className="mb-[1px]" />
                  Edit
                </Link>

                <button
                  onClick={() => handleClick(item?.id)}
                  className="text-gray-200 text-sm border rounded font-bold flex items-center justify-center gap-1 px-3 py-2 duration-150 bg-red-500 hover:bg-red-600"
                >
                  <MdDeleteOutline fontSize={20} className="mb-[1px]" /> Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllBLogs;
