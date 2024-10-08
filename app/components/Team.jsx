import Image from "next/image";
import React from "react";

const TeamMember = ({ name, title, image }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    <img
      width={400}
      height={300}
      src={"/" + encodeURIComponent(image.slice(1))}
      alt={name}
      className="w-full h-80 object-cover rounded-lg shadow-md"
    />
    <h3 className="text-base md:text-xl font-semibold mt-5 capitalize">
      {name}
    </h3>
    <p className="text-gray-400 capitalize">{title}</p>
  </div>
);

const OurTeam = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">MEET OUR VISIONARIES</h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <TeamMember
          name="Manthan Gupta"
          title="Founder and Operations Executive"
          image="/Manthan Gupta.jpg"
        />
        <TeamMember
          name="julia cordy"
          title="Business Development Manager"
          image="/julia cordy.jpeg"
        />
        <TeamMember
          name="Rohan Azad"
          title="Senior Product Manager"
          image="/Rohan Azad.jpg"
        />

        <TeamMember
          name="Kaira Anderson"
          title="Marketing Manager"
          image="/Kaira Anderson.png"
        />
      </div>
    </div>
  );
};

export default OurTeam;
