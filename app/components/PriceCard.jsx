import { IoMdArrowDropright } from "react-icons/io";
import SecondButton from "./secondButton";
const PriceCard = () => {
  return (
    <section>
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for Visionary Brands And Creators Like You.
          </h2>
          <p className="mb-5 font-light  sm:text-xl text-gray-400">
            Here at Conture we focus on brand’s and creator’s marketing vision
            and innovation that can lead to their growth at the finest level.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              Expertised Service
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Tailored content for one piece of short-form content
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" /> 1
              One round of revisions
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Inclusion of captions and subtitles for accessibility
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Basic Graphics enhancements
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Content optimization for platforms like TikTok, Youtube and
              Instagram
            </p>
            <a href="https://calendly.com/auditmeet/30min?month=2024-03">
              <div className="flex items-center justify-center">
                <SecondButton text="Get A Quote (Special Price: $99 for service)" />
              </div>
            </a>
          </div>

          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              Aspiring Creators Package
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              8-week intensive campaign, with 3 customized pieces of content per
              week
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Development of a robust content strategy
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Optimization of social media profiles for maximum impact
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Personalized coaching on engagement and growth tactics
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Regular analytics and strategic reviews bi-weekly
            </p>
            <a href="https://calendly.com/auditmeet/30min?month=2024-03">
              <div className="flex items-center justify-center">
                <SecondButton text="Get A Quote" />
              </div>
            </a>
          </div>

          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              Aspiring Brand Explosion
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" /> A
              daily supply of tailored content for 8 weeks
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Creation of a strategic social media funnel
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Bespoke storytelling framework to define your brand&apos;s
              narrative
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Adaptation of content across various social media platforms
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Ongoing analytics and strategic insights on a weekly basis
            </p>
            <a href="https://calendly.com/auditmeet/30min?month=2024-03">
              <div className="flex items-center justify-center">
                <SecondButton text="Get A Quote" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center my-5 md:p-5  mt-10 rounded mx-auto">
          <p className=" text-center capitalize flex-wrap text-4xl sm:text-6xl lg:text-8xl p-2 md:p-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Get your Custom Quote
          </p>
          <a href="https://calendly.com/auditmeet/30min?month=2024-03">
            <button className="p-[3px] relative my-8 md:my-4">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  text-lg md:text-xl uppercase font-bold bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Request
              </div>
            </button>
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm md:text-base">
          We also offer tailored monthly retainer packages, ensuring dedicated
          support to our comprehensive solutions
        </p>
      </div>
    </section>
  );
};

export default PriceCard;
