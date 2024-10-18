"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, showDescriptionOnHover = false }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl font-bold">
          Our Process
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Here&apos;s a step-by-step guide to how we work together to achieve
          your goals.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.key}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 md:gap-5"
          >
            <div className="sticky z-40 md:left-4 top-20 self-start max-w-xs lg:max-w-md md:w-full mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center border border-neutral-700">
                  <div className="h-4 w-4 rounded-full bg-neutral-800" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-neutral-500 ml-4">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-10 pr-4 md:pl-0 w-full">
              {showDescriptionOnHover ? (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="text-white text-sm md:text-base font-normal cursor-pointer">
                    Hover to see details
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden group-hover:block"
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              ) : (
                item.content
              )}
            </div>
          </div>
        ))}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-5 md:left-8 lg:left-5 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
        />
      </div>
    </div>
  );
};
