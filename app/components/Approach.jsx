// components/SloganList.js
import React from "react";

const slogans = [
  {
    title: "DARE",
    text: "Dare to Innovate",
    hoverColor: "hover:text-pink-400",
  },
  {
    title: "CARE",
    text: "Care in every Detail",
    hoverColor: "hover:text-blue-400",
  },
  {
    title: "SHARE",
    text: "Share the Vision",
    hoverColor: "hover:text-green-400",
  },
];

const SloganList = () => {
  return (
    <div className="w-screen px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
        Our Approach
      </h1>
      <div className="grid grid-rows-3 gap-1 md:grid-rows-3 rounded-full relative h-full">
        {slogans.map((slogan, index) => (
          <div
            key={index}
            className={`bg-inherit p-8 rounded-lg shadow-lg grid grid-cols-2 grid-flow-row text-gray-500 ${slogan.hoverColor} transform transition-transform duration-300 hover:scale-105`}
          >
            <h2 className="text-6xl font-medium text-center mb-4">
              {slogan.title}
            </h2>
            <p className="text-center mt-3 text-3xl row-span-1 font-mono hidden md:block">
              &quot;{slogan.text}&quot;
            </p>{" "}
            {/* Hide on mobile */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SloganList;
