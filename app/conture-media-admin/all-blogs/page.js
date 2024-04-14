"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPosts } from "@/helper/PostSlice";
import { useRouter } from "next/navigation";

const AllBLogs = () => {
  const blogPOST = useSelector((state) => state.post.blogs.data);
  const [blogs] = useState(blogPOST);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, router]);

  const handleClick = (id) => {
    dispatch(deletePost(id));
    setTimeout(() => {
      router.push("/conture-media-admin/all-blogs");
      router.refresh();
      router.reload();
    }, 1200);
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
        {blogs?.map((item) => (
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
