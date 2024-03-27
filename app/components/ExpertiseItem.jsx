import React from "react";

const ExpertiseItem = ({ title }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg font-bold text-white mb-4 text-left hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    {title}
  </div>
);

const ShortFormVideoEditing = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6 uppercase">
          SHORT FORM CONTENT
        </h1>
        <p className="text-gray-400 mb-8">Just content, Just Content </p>
        <p className="text-gray-400 mb-3">
          We excel in one thing – we craft short-form content with a laser
          focus, better than anyone else. If you&apos;re looking for an agency
          that stands out with exceptional content strategy, rather than one
          that dabbles in everything without mastery, Conture Media is for you.
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
          <ExpertiseItem title="Short - Form Video Content " />
          <ExpertiseItem title="Video Editing" />
          <ExpertiseItem title="Social Media Management " />
          <ExpertiseItem title="Personal Branding" />
          <ExpertiseItem title="Content Strategy " />
          <ExpertiseItem title="Media Production" />
        </div>
      </div>
    </div>
  );
};

export default ShortFormVideoEditing;
