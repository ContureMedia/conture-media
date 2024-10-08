"use client";
import React from "react";
import { motion } from "framer-motion"; // Animation library

const tagLineVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial animation: taglines come from below
  visible: { opacity: 1, y: 0 }, // Final animation: taglines are in place
};

const Democracy = () => {
  const taglines = [
    { text: "For the People", color: "text-pink-600" },
    { text: "To the People", color: "text-purple-600" },
    { text: "By the People", color: "text-blue-600" },
  ];

  return (
    <div className="bg-inherit relative">
      <div className="container mx-auto text-white px-4">

        {/* Taglines in one line with animations and hover effects */}
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 text-center">
          {taglines.map((tagline, index) => (
            <motion.div
              key={index}
              className={`text-3xl md:text-5xl font-bold ${tagline.color} cursor-pointer`}
              variants={tagLineVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut", delay: index * 0.3 }}              
              whileHover={{ scale: 1.1 }} // Hover effect: scale up
              aria-label={tagline.text} // Accessibility improvement
            >
              &quot;{tagline.text}&quot;
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Democracy;