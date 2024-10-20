import React from 'react';

const slogans = [
  { title: 'DARE', text: 'Dare to Innovate', hoverColor: 'hover:text-pink-400' },
  { title: 'CARE', text: 'Care in every Detail', hoverColor: 'hover:text-blue-400' },
  { title: 'SHARE', text: 'Share the Vision', hoverColor: 'hover:text-green-400' },
];

const SloganList = () => {
  return (
    <div className="w-screen px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
        Our Approach
      </h1>

      {/* Main grid for different screen sizes */}
      <div className="grid gap-4 md:grid-rows-3 lg:grid-rows-3">
        {slogans.map((slogan, index) => (
          <div
            key={index}
            className={`bg-inherit p-6 rounded-lg shadow-lg text-gray-500 ${slogan.hoverColor} transform transition-transform duration-300 hover:scale-105 lg:mr-20 lg:ml-20`}
          >
            {/* Layout for mobile: stacked, for large screen: side by side */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Title */}
              <h2 className="text-6xl font-medium text-center lg:text-left mb-4 lg:mb-0">
                {slogan.title}
              </h2>

              {/* Text: Below title on mobile, side by side on larger screens */}
              <p className="text-center lg:text-left text-3xl font-mono mt-2 lg:mt-0 lg:ml-2">
                &quot;{slogan.text}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SloganList;