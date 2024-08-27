"use client";
import { cn } from "@/lib/utils";
import {
  FaRegHandshake,
  FaComments,
  FaChartLine,
  FaUserAstronaut,
  FaLightbulb,
  FaPuzzlePiece,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Straight-Up Honesty",
      description:
        "We don't do secrets. At Conture Media, you get the whole truth, no hidden tricks—just clear, honest vibes all the way.",
      icon: <FaRegHandshake className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Feedback-Fueled Magic",
      description:
        "Your thoughts are our secret sauce. We build awesome communities where your feedback is like rocket fuel for our growth. Tell us what's up, and we'll turn it into something amazing.",
      icon: <FaComments className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Results That Pop",
      description:
        "We don't just talk the talk. We deliver real results that make a splash and get you noticed. We're here to make things happen, no fluff.",
      icon: <FaChartLine className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Digital Identity Superheroes",
      description:
        "We're your brand's digital superheroes. We create online identities that stand out and get people talking. Think of us as your brand's personal hype squad.",
      icon: <FaUserAstronaut className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Fresh and Funky Strategies",
      description:
        "We're always thinking outside the box. Our strategies are like a breath of fresh air—new, exciting, and guaranteed to keep your brand on its toes.",
      icon: <FaLightbulb className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Custom Fit Just for You",
      description:
        "Your brand is unique, and so are our solutions. We don't do generic; we craft strategies that are as one-of-a-kind as you are.",
      icon: <FaPuzzlePiece className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Always Here for You",
      description:
        "We're not just a service; we're your go-to sidekicks. Whether you need a hand or a high-five, we're here for you, ready to support you every step of the way.",
      icon: <FaHeadset className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Impact That Rocks",
      description:
        "We focus on making a real difference. Our goal is to deliver results that not only impress but actually move your business forward in a big way.",
      icon: <FaRocket className="w-6 h-6 text-indigo-500" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-gray-500  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l border-gray-500",
        index < 4 && "lg:border-b border-gray-500 "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-pink-500  to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-pink-500  to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-200 text-xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
