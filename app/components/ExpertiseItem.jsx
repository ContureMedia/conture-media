"use client";
import { useState, useEffect } from "react";

function ExpertiseItem({ title }) {
  const [color, setColor] = useState("#3b82f6");

  useEffect(() => {
    const colors = [
      "#ef4444",
      "#f59e0b",
      "#10b981",
      "#3b82f6",
      "#6366f1",
      "#8b5cf6",
      "#ec4899",
    ];
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ borderColor: color }}
      className="bg-gray-800 capitalize border p-4 rounded-lg shadow-lg font-bold text-white mb-4 text-left hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
    >
      {title}
    </div>
  );
}

const ShortFormVideoEditing = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6 uppercase">
          CONTENT AND COMMUNITY Driven
        </h1>
        <p className="text-gray-400 mb-8 capitalize">
          for creators, Enterpreneurs, Businesses, artists and the people who
          want to change the world for better !!
        </p>
        <p className="text-gray-400 mb-3">
          We specialize in one thing – helping creators produce exceptional
          content with a community-focused approach. At Conture Media, we excel
          in crafting strategies that not only stand out but also foster
          collaboration and connections among creators.
        </p>
        <p className="text-gray-400 mb-5">
          If you seek a partner who zeroes in on creating impactful,
          scroll-stopping content that captures attention in seconds and
          delivers a clear ROI, you&apos;ve found the right place.
        </p>
        <button className="bg-[#ff1491c7] text-white px-4 py-2 rounded-lg hover:bg-[#FF1493]">
          <a href="https://calendly.com/auditmeet/30min?month=2024-03">
            Elevate Your Brand&apos;s Story
          </a>
        </button>
        <p className="text-gray-400 mt-4">
          Schedule Your FREE Strategy Call Now
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ExpertiseItem title="Business & Personal Branding" />
          <ExpertiseItem title="Video Editing " />
          <ExpertiseItem title="Paid Advertisments" />
          <ExpertiseItem title="Content Strategy" />
          <ExpertiseItem title="Social Media Management" />
          <ExpertiseItem title="Branding for Enterpreneurs" />
          <ExpertiseItem title="Media Production" />
          <ExpertiseItem title="Animation and Graphic Design" />
          <ExpertiseItem title="Digital Marketing" />
        </div>
      </div>
    </div>
  );
};

export default ShortFormVideoEditing;
