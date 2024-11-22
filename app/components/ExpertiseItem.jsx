"use client";
import { useId } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const ShortFormVideoEditing = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-white mb-6 uppercase"
        >
          Why Content marketing and brand building is important?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-gray-400 mb-8 capitalize"
        >
          The days when aggressive sales could push consumers into buying are
          long gone. These days, people seek to connect with a brand on their
          own terms and wishes. They want to learn about what you offer, what
          your story is, compare it with other options, and do their own
          research before making a decision.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-gray-400 mb-3"
        >
          It’s a more deliberate process. So, what should your business do?
          Focus on earning their trust by delivering valuable content that
          genuinely addresses their needs and solves their problems. That’s
          where effective content marketing comes in.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-gray-400 mb-5"
        >
          That is where we come in.
        </motion.p>
        <button className="bg-[#04387d] text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          <a href="https://calendly.com/auditmeet/30min?month=2024-03">
            Elevate Your Brand&apos;s Story
          </a>
        </button>
        <p className="text-gray-400 mt-4">
          Schedule Your FREE Strategy Call Now
        </p>
        <div className="py-20 lg:pt-36">
          <div className="text-2xl font-semibold text-white mb-6 uppercase flex items-center justify-start gap-1">
            Expertised In
            <FaArrowDown className="text-[#04387d] animate-bounce" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 max-w-7xl mx-auto">
            {grid.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-gradient-to-b from-neutral-800 group to-neutral-950 p-6 rounded-3xl overflow-hidden hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-500 hover:scale-105 transition-all duration-300"
              >
                <Grid size={20} />
                <p className="text-xl font-bold text-white relative z-20 group-hover:text-black">
                  {feature.title}
                </p>
                <p className="text-neutral-400 mt-4 text-sm font-normal relative z-20 group-hover:text-gray-800">
                  {feature.description}
                </p>
                <Link href="/price">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-4 bg-[#04387d] text-white px-4 py-2 rounded-lg w-full"
                  >
                    Explore More
                  </motion.button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortFormVideoEditing;

const grid = [
  {
    title: "Business & Personal Branding",
    description:
      "We elevate your brand's identity, making it stand out and resonate with your target audience.",
  },
  {
    title: "Paid Advertisement",
    description:
      "We design and execute targeted ad campaigns that drive real results and maximize your ROI.",
  },
  {
    title: "Community Building & Management",
    description:
      "We cultivate and manage thriving communities that strengthen your brand’s connection with its audience.",
  },
  {
    title:"CSR digital marketing campaigns"
  },
  {
    title:"Branding & Marketing Consultation"
  },
  {
    title:"Video Editing - Short - Long form"
  }
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
