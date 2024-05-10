import React from "react";

const IdealForItem = ({ description }) => (
  <li className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-4">
    <span className="text-[#FF1493] text-xl font-semibold">✓</span>{" "}
    {description}
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
          <IdealForItem description="Businesses looking to captivate audiences with high-impact Contact Creation." />
          <IdealForItem description="Brands striving to translate their vision into compelling narratives that stand out in the digital space." />
          <IdealForItem description="Creators seeking to skyrocket their social media engagement with diverse content crafted for today's quick-scrolling users." />
          <IdealForItem description="Entrepreneurss who want to harness the power of content to tell their story and foster a loyal online community." />
          <IdealForItem description="Organizations eager to outshine competitors with concise, impactful content that drives results." />
          <IdealForItem description="Artists searching for a creative agency committed to elevating their brand with exceptional content creation." />
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
