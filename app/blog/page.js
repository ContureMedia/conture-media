// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import BlogCardSkeleton from "../components/BlogCardSkeleton";
// import { getAllPosts } from "@/helper/PostSlice";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const blogPOST = useSelector((state) => state.post.blogs.data);
//   const loading = useSelector((state) => state.post.loading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllPosts());
//   }, [dispatch]);

//   useEffect(() => {
//     setBlogs(blogPOST);
//   }, [blogPOST]);

//   if (loading) {
//     return (
//       <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
//         <BlogCardSkeleton />;
//       </div>
//     );
//   }
//   if (blogs?.length === 0) {
//     return (
//       <div className="flex items-center justify-center  bg-black">
//         <div className="p-6 m-4  rounded shadow-lg text-center">
//           <h2 className="text-2xl font-bold mb-4 text-gray-100">
//             No blogs available
//           </h2>
//           <p className="text-gray-200">Check back later for more updates.</p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div
//       className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//       style={{
//         background: "radial-gradient(circle, #111 75%, black 100%)",
//       }}
//     >
//       {blogs &&
//         blogs?.map((blog) => (
//           <Link
//             href={`/blog/${blog?.id}`}
//             key={blog?.id}
//             className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
//           >
//             <Image
//               width={300}
//               height={200}
//               alt=""
//               src={blog?.image || "https://source.unsplash.com/random"}
//               className="h-56 w-full rounded-md object-cover"
//             />

//             <div className="mt-2">
//               <dl>
//                 <div>
//                   <dt className="sr-only">Title</dt>

//                   <dd className=" text-gray-100 text-xl">{blog?.title}</dd>
//                 </div>

//                 <div className="text-gray-300 text-sm">
//                   <dt className="sr-only">Date</dt>

//                   <dd className="font-medium ">
//                     {new Date(blog?.date).toDateString()}
//                   </dd>
//                 </div>
//               </dl>

//               <div className="mt-6 flex items-center gap-8 text-xs">
//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-purple-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Admin</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// };

// export default Blog;

import React from "react";

const Blogs = () => {
  return (
    <div className="flex items-center justify-center  bg-black">
      <div className="p-6 m-4  rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          No blogs available
        </h2>
        <p className="text-gray-200">Check back later for more updates.</p>
      </div>
    </div>
  );
};

export default Blogs;
