import React from "react";

const IdealForItem = ({ text, description }) => (
  <li className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-4 flex items-start gap-2 justify-start">
    <span className="text-[#FF1493] text-xl font-semibold">✓</span>{" "}
    <div className="flex flex-col text-sm">
      <span className="font-semibold italic">{text}</span>
      <span className="font-light">{description}</span>
    </div>
  </li>
);

const StrategySessionIdealFor = () => {
  return (
    <div className="md:py-12">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-semibold mb-6">
          Elevate Your Brand&apos;s Presence with Conture, Ideal for
        </h1>
        <ul className="list-none pl-0">
          <IdealForItem
            text={"Startups & Businesses "}
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
            description=" Let's elevate your personal brand to new heights! We'll create impactful content and community engagement that will make you shine like the superstar you are!"
          />
        </ul>
        <a href="https://calendly.com/auditmeet/30min?month=2024-03">
          <button className="bg-[#ff1491c7] text-white px-4 py-2 rounded-lg mt-8 hover:bg-[#FF1493]">
            Book Your Complimentary Video Consultation Call Today
          </button>
        </a>
      </div>
    </div>
  );
};

export default StrategySessionIdealFor;
