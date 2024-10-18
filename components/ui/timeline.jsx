"use client";

import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function Timeline({ data, showDescriptionOnHover = false }) {
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
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:justify-between items-center pt-10 md:pt-20`}
          >
            <div
              className={`w-full md:w-[calc(50%-2.5rem)] px-4 md:px-0 ${
                index % 2 === 0 ? "md:order-1" : "md:order-3"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 z-10 relative"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <AnimatePresence>
                  {showDescriptionOnHover ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {item.content}
                    </motion.div>
                  ) : (
                    item.content
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
            <div className="relative w-full md:w-auto md:order-2 flex justify-center md:opacity-0">
              <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center z-20 my-4 md:my-0 md:mx-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        ))}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-1/2 top-0 w-[4px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent transform -translate-x-1/2 z-0"
        />
      </div>
    </div>
  );
}
