import React from "react";
import PriceCard from "../components/PriceCard";
import TestimonalCards from "../components/TestimonalCards";

export const metadata = {
  title:
    "Pricing - Exclusive Offer: Harness the Power of Content with Conture Media's Expert Solutions",
  description:
    "Our best pricing plans - Don't miss out on the exclusive offer from Conture Media! Elevate your branding with our proven solutions and reach new heights in the digital world.",
};

const ServiceCard = ({ title, description, items }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-6">
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-300">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Price = () => {
  return (
    <div
      className="w-full min-h-screen p-5 text-white flex flex-col items-center justify-start"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <div className="w-full md:w-9/12 mx-auto md:p-10 flex-col items-center justify-start">
        <h3
          className="text-base md:text-lg font-bold text-gray-400"
          style={{ fontWeight: "bold" }}
        >
          Pricing Plan
        </h3>
        <h1
          className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
          style={{ fontWeight: "bold" }}
        >
          Yaaas, Let&apos;s Get Started!
        </h1>
        <p
          className="text-sm md:text-base font-normal text-gray-400 my-4 w-full md:w-2/3"
          style={{ fontWeight: "normal" }}
        >
          We&apos;ve got three amazing services to help you slay your content
          marketing game. And, for those who like to do things their own way...
        </p>
        <p className="text-sm md:text-base font-semibold text-white my-4">
          <strong>Custom Budgets:</strong> We get it, every brand is unique! If
          you&apos;ve got a special vision, we&apos;ll create a custom budget
          that&apos;s tailored just for you.
        </p>
        <p className="text-sm md:text-base font-normal text-gray-400 my-4">
          Elevate your brand&apos;s story with Conture Media. Let&apos;s create
          something amazing together!
        </p>
      </div>

      <div className="w-full items-center justify-center my-8 flex-col space-y-5">
        <PriceCard />
        <TestimonalCards />
      </div>
    </div>
  );
};

export default Price;
