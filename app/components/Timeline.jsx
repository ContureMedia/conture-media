"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

const timelineData = [
  {
    key: 1,
    title: "Connect & Collaborate",
    content:
      "First, we sit down together and really get to know you—your goals, your vision, and what you're trying to achieve.",
  },
  {
    key: 2,
    title: "Create & Choose",
    content:
      "Once we know what you're looking for, it's time to get creative. We'll throw around ideas and explore different directions.",
  },
  {
    key: 3,
    title: "Implement",
    content:
      "Now comes the action! This is where we roll up our sleeves and bring that chosen idea to life.",
  },
  {
    key: 4,
    title: "Evaluate & Listen",
    content:
      "Once the project's done, we take a moment to pause and see how it all turned out. We'll ask for your feedback.",
  },
  {
    key: 5,
    title: "Optimize",
    content:
      "Finally, we look at the big picture. We'll show you the results of all the hard work, and fine-tune everything for the future.",
  },
];

const colors = [
  "from-blue-500 to-sky-900",
  "from-red-500 to-yellow-500",
  "from-green-500 to-teal-500",
  "from-purple-500 to-pink-500",
];

const AnimatedText = ({ text, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.03, delayChildren: 0.2 }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Timeline() {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000);

    return () => clearInterval(colorChangeInterval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight]
  );
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-200 mb-10 md:mb-16">
          Our Process
        </h2>
        <div className="relative flex flex-col items-center">
          {timelineData.map((item, index) => (
            <div
              key={item.key}
              className="w-full flex flex-col md:flex-row items-center mb-12 md:mb-24 z-10 "
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center z-10 mb-4 md:mb-0 md:sticky md:top-1/2 md:transform md:-translate-y-1/2 md:left-1/2 md:-ml-6">
                <div className="h-4 w-4 rounded-full bg-blue-500" />
              </div>
              <div
                className={`w-full md:w-5/12  ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } relative`}
              >
                <div className="bg-neutral-900 rounded-lg shadow-md px-10 py-10 md:py-12">
                  <AnimatedText
                    text={item.title}
                    className="text-5xl text-blue-500 font-bold mb-2 inline-block"
                  />
                  <AnimatedText
                    text={item.content}
                    className="text-gray-400 inline-block"
                  />
                </div>
              </div>
            </div>
          ))}
          <motion.div
            style={{
              height: lineHeight,
              opacity: lineOpacity,
            }}
            className={`absolute left-1/2 md:left-[52%] top-0 w-[6px] bg-gradient-to-b ${currentColor} transform -translate-x-1/2 z-0 rounded-md`}
          />
        </div>
      </div>
    </div>
  );
}
