"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Button from "./Button";
import React from "react";
import { motion } from "framer-motion";
import Democracy from "./Tagline";


const logos = [
  "/logolight.png",
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png"
];

const Hero = React.memo(() => {
  return (    
    
    <div className="h-auto w-full bg-black relative flex flex-col items-center justify-center antialiased p-5">
      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-4/5 mx-auto my-5">
        
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left flex-1">
          {/* Guarantee Text */}
          <motion.h1 
          initial={{opacity:0,x:-50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1.4,type:"spring"}}
          className="relative z-10 uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold text-2xl lg:text-5xl">
            &quot;Sales, Rebooted!&quot;
            <br /> Ditch the Old School Sales Tactics, <br />

            
          </motion.h1>

          {/* Subheading */}
          <motion.p
          initial={{opacity:0,x:50}}
          animate={{opacity:1, x: 0 }} 
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
          className="text-white font-semibold mx-auto mb-5 text-base lg:text-lg">
            <br />Are you tired of playing the sales game with outdated rules? 
            <br />You know, the ones that involve spamming, cold calling, and praying for a conversion?
          </motion.p>
        </div>

        {/* Right Side: Image */}
        
        <div className="flex justify-center items-center mt-5 lg:mt-0 lg:ml-5 flex-shrink-0">
          <imgs className="">
          <motion.img
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,type:"spring"}}
            src="/image.jpg"
            className="h-80 w-auto"
          />    
          </imgs>
                     
                  
        </div>


      </div>
      
      {/* Clients Section */}
      <h1 className="text-white mx-auto my-4 mt-10 text-2xl font-bold italic lg:text-lg">Our clients:</h1>
      
      {/* Animated Brand Logo Scroller */}
      <div className="w-full my-6 overflow-hidden">
        <div className="flex justify-between items-center animate-scroll infinite">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="h-16 mx-3"
            />
          ))}
        </div>
      </div>
          <div className="my-10">
            <Democracy/>
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
});

export default Hero;