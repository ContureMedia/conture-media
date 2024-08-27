import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Button from "./Button";
import { ImCross } from "react-icons/im";

const Hero = () => {
  return (
    <div className="h-auto  w-full bg-black relative flex flex-col lg:flex-row items-center justify-center antialiased p-5">
      <div className="mx-auto md:p-4 my-5 md:mt-5 flex-1 flex flex-col  items-center justify-center">
        <h1 className="relative z-10 uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold text-2xl lg:text-3xl text-center">
          &quot; Sales, Rebooted!&quot; <br /> Ditch the Old School Sales
          Tactics, <br /> <p className="text-base">Let&apos;s Get Modern!</p>
        </h1>
        <p className="text-gray-300 capitalize mx-auto md:my-4 my-2 text-xs md:text-base text-center relative z-10 leading-relaxed tracking-normal">
          Are you tired of playing the sales game with outdated rules? You know,
          the ones that involve spamming, cold calling, and praying for a
          conversion?
          <br />
          <br />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
          {/* first */}
          <div className="text-white w-full items-center justify-start text-sm">
            <span className="text-sm font-bold tracking-tighter my-1">
              No more:
            </span>
            <li className="flex items-center justify-start gap-3 w-full">
              <ImCross className="text-[#FF1493]  text-sm" />
              Spamming people with generic emails
            </li>
            <li className="flex items-center justify-start gap-3 w-full">
              <ImCross className="text-[#FF1493]  text-sm" />
              Cold calling strangers who don&apos;t care
            </li>
            <li className="flex items-center justify-start gap-3 w-full">
              <ImCross className="text-[#FF1493]  text-sm" />
              Using cheesy sales pitches that fall flat
            </li>
            <li className="flex items-center justify-center gap-3 w-full">
              <ImCross className="text-[#FF1493]  text-sm" /> Focusing on
              short-term gains instead of long-term relationships
            </li>
          </div>
          {/* second */}
          <div className="text-white w-full items-center justify-start text-sm">
            <span className="text-sm font-bold tracking-tighter my-1">
              We&apos;re About Building a Sales Revolution!
            </span>
            <li className="flex items-center justify-start gap-3 w-full">
              <span className="text-green-500 text-xl font-semibold">✓</span>
              Creating a loyal community that loves your brand
            </li>
            <li className="flex items-center justify-start gap-3 w-full">
              <span className="text-green-500 text-xl font-semibold">✓</span>
              Using paid advertising to target your dream customers
            </li>
            <li className="flex items-center justify-start gap-3 w-full">
              <span className="text-green-500 text-xl font-semibold">✓</span>
              Crafting personalized experiences that make people go{" "}
              &quot;wow!&quot;
            </li>
            <li className="flex items-center justify-start gap-3 w-full">
              <span className="text-green-500 text-xl font-semibold">✓</span>{" "}
              Building relationships that last longer than a sales cycle
            </li>
          </div>
        </div>

        <div className="mt-10">
          {" "}
          <Button text={"Discover The Conture Difference"} />
        </div>
        <p className="text-gray-300 capitalize mx-auto  my-4 md:my-7 text-xs  text-center relative z-10 leading-relaxed tracking-normal">
          Let&apos;s work together to shake up your brand and make it more
          human, more fun, and more effective. Ready to get started?
        </p>
      </div>

      <div className=" flex items-center justify-center p-5 md:p-10 ">
        <Image
          src={"/img.gif"}
          alt="music"
          width={500}
          height={500}
          className="md:border-4 border-gray-600 rounded-2xl"
          style={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
          }}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
