"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Button from "./Button";
import React from "react";
import { motion } from "framer-motion";
import Democracy from "./Tagline";
<time datetime="2016-10-25" suppressHydrationWarning />;
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
          <imgs className="">
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "smooth" }}
              src="/image.jpg"
              className="h-80 w-auto"
            />
          </imgs>
        </div>
      </div>

      {/* Clients Section */}
      <h1 className="text-white mx-auto my-4 mt-10 text-2xl font-bold italic lg:text-lg">
        Our clients:
      </h1>

      {/* Animated Brand Logo Scroller */}
      <div className="w-full overflow-hidden py-5">
        <div className="flex space-x-24 animate-scroll">
          {/* Loop logos */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
           {logos.map((logo, index) => (
            <img
              key={`duplicate-1-${index}`}
              src={logo}
              alt={`Duplicate logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-1-${index}`}
              src={logo}
              alt={`Duplicate logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-1-${index}`}
              src={logo}
              alt={`Duplicate logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-1-${index}`}
              src={logo}
              alt={`Duplicate logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <Democracy />
      </div>

      {/* CTA Button */}
      <div className="my-5">
        <a href="https://google.com">
          <Button
            text="GET STARTED"
            className="mt-4 bg-gradient-to-r from-pink-500 to-blue-800 text-white px-6 py-3 rounded-full text-2 font-semibold shadow-lg"
          />
        </a>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;
