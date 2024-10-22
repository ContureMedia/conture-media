"use client";

import React, { useRef, useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import Democracy from "./Tagline";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644",
  "https://cdn.iconscout.com/icon/free/png-512/free-tik-tok-logo-icon-download-in-svg-png-gif-file-formats--technology-brand-social-media-company-logos-pack-icons-6297327.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-zomato-logo-icon-download-in-svg-png-gif-file-formats--food-company-brand-delivery-brans-logos-icons-1637644.png?f=webp&w=256",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
  "https://www.freepnglogos.com/uploads/dominos-png-logo/dominos-pizza-readies-new-logo-png-10.png",
  "https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png",
  "https://www.freepnglogos.com/uploads/fedex-logo-png/fedex-emblem-delivery-business-logo-2.png",
  "https://www.freepnglogos.com/uploads/logo-chatgpt-png/logo-chatgpt-png-transparent-background-2.png",
];

function InfiniteImageCarousel({ images }) {
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const viewportWidth = container.offsetWidth;

    let animationFrameId;

    const animate = () => {
      setTranslateX((prevTranslateX) => {
        const newTranslateX = prevTranslateX - 1;
        if (-newTranslateX >= totalWidth / 2) {
          // Reset to start when half of the images have scrolled
          return 0;
        }
        return newTranslateX;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="relative h-20 sm:h-24 md:h-28 lg:h-32">
        <div
          ref={containerRef}
          className="absolute flex"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand logo ${index + 1}`}
              className="h-16 sm:h-20  w-auto mx-8 sm:mx-10 md:mx-12 lg:mx-14 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="h-auto w-full bg-black relative flex flex-col items-center justify-center antialiased p-5">
      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-4/5 mx-auto my-5">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left flex-1">
          {/* Guarantee Text */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, type: "spring" }}
            className="relative z-10 uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold text-2xl lg:text-5xl"
          >
            &quot;Sales, Rebooted!&quot;
            <br /> Ditch the Old School Sales Tactics, <br />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="text-white font-semibold mx-auto mb-5 text-base lg:text-lg"
          >
            <br />
            Are you tired of playing the sales game with outdated rules?
            <br />
            You know, the ones that involve spamming, cold calling, and praying
            for a conversion?
          </motion.p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-center mt-5 lg:mt-0 lg:ml-5 flex-shrink-0">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "smooth" }}
            src="/image.jpg"
            alt="Hero image"
            className="h-80 w-auto"
          />
        </div>
      </div>

      {/* Clients Section */}
      <h1 className="text-white mx-auto my-4 mt-10 text-2xl font-bold italic lg:text-lg">
        Our clients:
      </h1>

      {/* Infinite Image Carousel */}
      <div className="w-full my-6 overflow-hidden">
        <InfiniteImageCarousel images={logos} />
      </div>

      <div className="mt-10 mb-2">
        <Democracy />
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;