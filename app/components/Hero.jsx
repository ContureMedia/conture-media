import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-auto  w-full bg-black relative flex flex-col lg:flex-row items-center justify-center antialiased p-5">
      <div className="mx-auto p-4 mt-5 md:mt-0 flex-1 flex flex-col  items-center justify-center">
        <h1 className="relative z-10   uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold text-2xl lg:text-3xl text-center">
          Dominate your short form content with Conture Media
        </h1>
        <p className="text-gray-300 capitalize mx-auto md:my-4 my-2 text-xs md:text-base text-center relative z-10 leading-relaxed tracking-normal">
          Elevate your brand&apos;s digital footprint with expert short-form
          content creation by Conture Media.
          <br />
          Our innovative content strategies ensure your message connects with a
          global audience, delivering measurable results.
        </p>
        <p className="text-gray-300 capitalize mx-auto md:my-4 my-2 text-xs md:text-base text-center relative z-10 leading-relaxed tracking-normal">
          Boost your online presence and skyrocket engagement rates with
          compelling content and visuals, tailored for the fast-paced,
          attention-grabbing landscape of social media.
        </p>

        <Button text={"Discover The Conture Difference"} />
        <p className="text-gray-300 capitalize mx-auto my-4 md:my-7 text-xs  text-center relative z-10 leading-relaxed tracking-normal">
          Embrace the power of strategic content with Conture Media and stand
          out in the digital storytelling revolution.
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
