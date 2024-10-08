// components/SloganList.js
import React from 'react';

const slogans = [
  'Empower Your Dreams',
  'Innovate Fearlessly',
  'Create Magic',
];

const SloganList = () => {
  return (
      <div className="w-screen px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 ...">Our Approach</h1>
        <div className="grid grid-rows-3 gap-1 md:grid-rows-3 rounded-full relative h-full">
          {/* Listen Section */}
          <div className="bg-inherit h-40 p-8 rounded-lg shadow-lg text-gray-500 hover:text-pink-400 grid grid-cols-2 grid-flow-row  transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-6xl font-medium  text-center mb-4 ">DARE</h2>
            <p className="text-center mt-3 text-3xl row-span-1 font-mono">&quot;Dare to Innovate&quot;</p>
          </div>
  
          {/* Connect Section */}
          <div className="bg-inherit p-8 rounded-lg shadow-lg grid grid-cols-2 grid-flow-row  text-gray-500 hover:text-blue-400 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-6xl font-medium  text-center mb-4">CARE</h2>
            <p className=" text-center mt-3 text-3xl row-span-1 font-mono">&quot;Care in every Detail&quot;</p>
          </div>
  
          {/* Learn Section */}
          <div className="bg-herit p-8 rounded-lg shadow-lg grid grid-cols-2 grid-flow-row  text-gray-500 hover:text-green-400 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-6xl font-medium text-center mb-4">SHARE</h2>
            <p className="text-center mt-3 text-3xl row-span-1 font-mono">&quot;Share the Vision&quot;</p>
          </div>
        </div>
      </div>

  );
};

export default SloganList;
