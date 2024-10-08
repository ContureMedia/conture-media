import React from "react";

const IdealForItem = ({ text, description }) => (
  <li className="bg-gradient-to-r from-[#1f2937] to-[#2c3e50] p-6 rounded-lg shadow-xl text-white mb-6 flex items-start gap-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:text-[#FF1493]">
    <span className="text-[#FF1493] text-2xl font-bold">✓</span>
    <div className="flex flex-col">
      <span className="font-bold text-lg transition-colors duration-300 group-hover:text-[#FF1493]">
        {text}
      </span>
      <span className="font-light text-sm mt-2 transition-colors duration-300 group-hover:text-[#FFD700]">
        {description}
      </span>
    </div>
  </li>
);

const StrategySessionIdealFor = () => {
  return (
    <div className="py-16 bg-transparent">
      <div className="container mx-auto text-white px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Elevate Your Brand&apos;s Presence with Conture: Ideal for
        </h1>
        <ul className="list-none pl-0 space-y-6">
          <IdealForItem
            text={"Startups & Businesses"}
            description="Let's get this sales party started! We'll create strategic content and targeted ads to get those numbers soaring!"
          />
          <IdealForItem
            text={"Identity-Focused Brands"}
            description="Time to shine, beautiful! We'll help you build a strong personal and business identity that resonates with your tribe!"
          />
          <IdealForItem
            text={"Community-Centric Companies"}
            description="Let's get this community love fest started! We'll create community-driven brands that gather valuable feedback for continuous growth and improvement!"
          />
          <IdealForItem
            text={"Growth-Oriented Entrepreneurs"}
            description="Ready to level up? We'll harness the power of content to drive sales, enhance your brand, and foster a loyal online squad!"
          />
          <IdealForItem
            text={"Competitive Organizations"}
            description="Time to outshine the competition! We'll help you manage and build engaged communities around your brand that will leave the rest in awe!"
          />
          <IdealForItem
            text={"Creative Visionaries"}
            description="Let's elevate your personal brand to new heights! We'll create impactful content and community engagement that will make you shine like the superstar you are!"
          />
        </ul>
        <div className="text-center mt-12">
          <a href="https://calendly.com/auditmeet/30min?month=2024-03">
            <button className="bg-[#FF1493] text-white px-6 py-3 rounded-full font-bold hover:bg-[#ff1491c7] transition duration-300">
              Book Your Complimentary Video Consultation Call Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StrategySessionIdealFor;