import Link from "next/link";
import FaqCard from "./components/Faq";
import Hero from "./components/Hero";
import Button from "./components/Button";
import PriceCard from "./components/PriceCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Mail from "./components/Mail";
import OurTeam from "./components/Team";
import BrandsThatChooseConture from "./components/Brand";
import ShortFormVideoEditing from "./components/ExpertiseItem";
import ImpactInMotion from "./components/ImpactInMotion";
import StrategySessionIdealFor from "./components/IdealForItem";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ImpactInMotion />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ShortFormVideoEditing />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <BrandsThatChooseConture />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <OurTeam />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <StrategySessionIdealFor />
        </div>
      </div>

      <div
        className="w-full p-10 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <h1 className="mb-4 text-2xl text-center">
          Welcome to Our Pricing Page
        </h1>
        <p className="text-center">
          Our pricing is simple and transparent. We have a plan for every
          budget.
        </p>
        <Link
          href={"/price"}
          className="mt-4 text-[#FF1493] hover:underline flex items-center justify-center space-x-2 cursor-pointer"
        >
          <p>Go to Price Page</p>
          <FaArrowRightLong />
        </Link>
      </div>
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <p className="text-4xl font-bold my-5 text-center">
          All the answers you&apos;re looking for
        </p>
        <div className="xl:w-1/2 w-full flex items-center justify-center p-3">
          <FaqCard numQuestions={4} />
        </div>

        <Link href="/faq">
          <Button text={"View all FAQs"} />
        </Link>
      </div>
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <Mail />
        </div>
      </div>
    </div>
  );
}
