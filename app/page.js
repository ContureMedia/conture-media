"use client";
import Link from "next/link";
import FaqCard from "./components/Faq";
import Hero from "./components/Hero";
import Button from "./components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Mail from "./components/Mail";
import OurTeam from "./components/Team";
import BrandsThatChooseConture from "./components/Brand";
import StrategySessionSteps from "./components/Steps";
import ShortFormVideoEditing from "./components/ExpertiseItem";
import ImpactInMotion from "./components/ImpactInMotion";
import StrategySessionIdealFor from "./components/IdealForItem";
import MailSection from "./components/MailSection";
import VideoReview from "./components/VideoReview";
import VideoCard from "./components/VideoReview";
import { FeaturesSectionDemo } from "./components/Feature";
import SloganList from "./components/Approach";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Import necessary hooks

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Only allow motion components to render after the page is fully mounted
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className="w-full flex items-center justify-center flex-col">
        <div className="my-5">
        <a
          href="mailto:Business@conturemedia.com?subject=I'm%20interested%20in%20your%20services&body=Hello,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20back."
          target="_self"  // Optionally, try target="_self" instead of "_blank"
        >
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full text-2 font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-800">
  GET STARTED
</button>



        </a>



      </div>
          <h1 className="text-center w-full capitalize flex-wrap text-4xl p-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            What sets us apart?
          </h1>
          <span className="text-gray-300 capitalize mx-auto my-2 md:text-base text-center relative z-10 leading-relaxed tracking-normal">
            <p className="text-gray-300 capitalize mx-auto my-2 text-3xl text-center relative z-10 leading-relaxed tracking-normal font-bold">
              communities
            </p>
            <p className="text-sm">
              Conture Media sets itself apart by creating tailored communities for each business or individual, where they can connect, share insights, and receive feedback, fostering growth and collaboration. Additionally, we boost sales through referral and affiliate marketing programs, ensuring brands not only engage meaningfully but also drive revenue and collective success.
            </p>
          </span>
        </div>

        {/* Render motion components conditionally */}
        {isMounted && (
          <>
            <div className="w-full flex md:flex-row flex-col items-center justify-center">
              <SloganList />
            </div>
            <div className="w-full flex md:flex-row flex-col items-center justify-center">
              <ImpactInMotion />
            </div>
            <div className="w-full flex md:flex-row flex-col items-center justify-center">
              <ShortFormVideoEditing />
            </div>
            <div className="overflow-hidden w-full items-center justify-center">
              <BrandsThatChooseConture />
            </div>

            <div className="w-full flex items-center justify-center flex-col my-10 md:p-5">
              <motion.h2
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-semibold text-white mb-6 uppercase"
              >
                <h2 className="text-4xl text-center p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                  Vision and Purpose: Words from Our Founder
                </h2>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1 }}
                className="text-gray-400 mb-8 capitalize"
              >
                <p className="text-center tracking-wide my-1 text-sm">
                  When you feel purposeless, find your purpose — and people will follow, transforming everything.
                </p>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1 }}
                className="text-gray-400 mb-8 capitalize"
              >
                <p className="text-center tracking-wide my-1 text-sm">
                  It's incredible—we navigate this unseen digital world, yet we can't fully experience it until the very end. At Conture Media, we embrace this journey, connecting and sharing every step of the way. We believe everyone has a story, but not everyone has the support they need. We strive to be that support, turning stories into shared experiences." What do you really have, if not the stories shaped by your journey?
                </p>
              </motion.p>
              <div className="overflow-hidden w-full flex flex-col items-center justify-center mt-16 md:mt-28">
                <VideoReview />
              </div>
            </div>
          </>
        )}

        <div className="w-full flex md:flex-row flex-col items-center justify-center p-3">
          <FeaturesSectionDemo />
        </div>
        <div className="w-full flex md:flex-row flex-col items-center justify-center p-3">
          <StrategySessionIdealFor />
        </div>
      </div>

      <div
        className="w-full p-10 text-white flex md:flex-row flex-col items-center justify-evenly"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <h1 className="md:w-1/2 text-center w-full capitalize flex-wrap text-4xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Grab Your Free E-Book: Mastering the Art of Viral Videos
        </h1>
        <div className="w-full md:w-1/2 justify-center items-center">
          <MailSection className="md:mb-4" />
        </div>
      </div>

      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <Link
          href="/price"
          className="my-4 text-[#FF1493] hover:underline flex items-center justify-center space-x-2 cursor-pointer"
        >
          <p>Go to Price Page</p>
          <FaArrowRightLong />
        </Link>
        <p className="text-4xl font-bold my-5 text-center">
          All the answers you're looking for
        </p>
        <div className="xl:w-1/2 w-full flex items-center justify-center p-3">
          <FaqCard numQuestions={4} />
        </div>
        <Link href="/faq">
          <Button text="View all FAQs" />
        </Link>
      </div>

      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className="w-full flex md:flex-row flex-col items-center justify-center p-3">
          <Mail />
        </div>
      </div>
    </div>
  );
}