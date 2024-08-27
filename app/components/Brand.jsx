import { Moving } from "@/components/ui/moving-Brand-Client";
import React from "react";

const BrandsThatChooseConture = () => {
  const brands = [
    {
      name: "GreenLeaf Kitchenware",
      des: "Working with Conture Media has been amazing. They really get what we're trying to achieve, and their content has helped us connect with our audience in ways we didn’t think possible.",
    },
    {
      name: "Skyline Sneakers",
      des: "I’m so impressed with Conture Media. They’ve been a true partner in helping us grow our brand. The content they create feels authentic and really resonates with our community.",
    },
    {
      name: "Waves Audio",
      des: "Honestly, Conture Media has been a game-changer for us. The leads we’re getting now are of much higher quality, and our reach has expanded beyond what we expected.",
    },
    {
      name: "Cozy Corners Bookshop",
      des: "What I love about Conture  Media is how they make everything so easy. Their content feels fresh, and it’s really helped us build a strong, engaged community.",
    },
    {
      name: "Lush Canvas Home Décor",
      des: "The team at Conture Media has been fantastic to work with. They’re not just delivering content; they’re helping us tell our story in a way that’s bringing in more leads and keeping our audience engaged.",
    },
    {
      name: "Pure Path Yoga Mats ",
      des: "Conture Media has really understood our brand’s voice and nailed it in every piece of content they’ve created for us. We’ve seen a noticeable difference in our online presence.",
    },
    {
      name: "Cuppa Joe Roasters",
      des: "It’s been such a pleasure working with Conture Media. Their creative ideas and thoughtful execution have made a huge impact on our marketing efforts. We’re seeing real results.",
    },
    {
      name: "Stellar Cycle Gear",
      des: "I can’t say enough good things about Conture Media. They’ve helped us build a loyal following through content that feels genuine and really connects with people.",
    },
  ];
  const creator = [
    {
      name: "Olivia Harper",
      des: "Conture Media has been a breath of fresh air for us. They didn't just create content—they helped us build a real, thriving community. Our engagement has skyrocketed, and it feels like we’re finally connecting with our audience in a meaningful way.",
    },
    {
      name: "Max Anderson ",
      des: "Working with Conture Media has been like finding the missing piece of the puzzle. They understood our vision from day one and helped us bring it to life. The community we’ve built together is something I’m really proud of.",
    },
    {
      name: "Sophie Chen ",
      des: "Before Conture Media, our followers felt like just numbers. Now, thanks to their incredible content and strategy, we have a real, engaged community that interacts with us daily. It’s been a game-changer.",
    },
    {
      name: "Jake Martinez ",
      des: "What I love about Conture Media is that they care as much about our followers as we do. They’ve helped us create content that doesn’t just get likes but sparks conversations and builds relationships. Our engagement has never been better.",
    },
    {
      name: "Emma Rodriguez",
      des: "Conture Media didn’t just boost our numbers; they helped us build something meaningful. Our followers are now more engaged, more loyal, and more like a community than ever before. It’s been such a rewarding experience.",
    },
    {
      name: "Ben Thompson ",
      des: "I’m genuinely impressed with how Conture Media took our ideas and transformed them into a thriving community. The way our followers engage with our content now is incredible. It’s more than we ever imagined.",
    },
    {
      name: "Nora Kim ",
      des: "Conture Media has a real gift for turning followers into a community. Their content doesn’t just look good; it resonates, and that’s made all the difference in how our audience interacts with us.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className=" md:text-2xl font-bold mb-4 text-center md:text-left">
        Brands And Creators That Choose Conture
      </h2>
      <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative ">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Brands
        </h1>
        <Moving items={brands} direction="right" speed="slow" />
        <h1 className="text-4xl font-bold my-4 text-center text-white">
          Creators
        </h1>
        <Moving items={creator} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default BrandsThatChooseConture;
