"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const TestimonalCards = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-xl md:text-4xl mb-20 font-bold text-center text-white capitalize">
        Those who Dare to Trust: The Elite Circle of Visionaries
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default TestimonalCards;

const testimonials = [
  {
    quote:
      "Conture Media's content production and video editing expertise has been critical to growing our brand's digital reach. Their creative approaches and attention to cultural nuances make them the perfect ones in the industry.",
    name: "Olivia Garcia",
    location: "Spain (Europe)",
    star: 5,
  },
  {
    quote:
      "Working with Conture Media transformed my content strategy. Their content creation and video editing skills improved my brand's online presence. They are an absolute must-have for anyone trying to effectively engage an audience.",
    name: "Anaya Patel",
    star: 4.5,
    location: "India",
  },
  {
    quote:
      " As a Canadian creator, Ive noticed a substantial increase in interaction since working with Conture Media. Their content is innovative and strategically connected with my brands identity, and their teams attention to detail is remarkable.",
    name: "Sophie Martin",
    star: 4,
    location: "Canada ",
  },
  {
    quote:
      "Conture Media's distinctive practices and high-quality video editing services have distinguished my brand in the competitive Australian marketplace. Their team understands the current state of social media and how to engage people. It was a really great effort!",
    name: "Liam Smith",
    star: 5,
    location: "Australia",
  },
  {
    quote:
      "Conture Media's expertise in compelling content has greatly benefited our Italian premium brand. Their strategic thoughts and expert film editing abilities are appreciable. They have worked as a valuable addition to my business.",
    name: "Isabella Rossi ",
    star: 4.5,
    location: "Italy (Europe)",
  },
  {
    quote:
      "Conture Media meets the expectations of Singapore's fast-paced digital landscape by providing high-quality content. Their content strategies and video editing skills have increased our marketing efforts. They come highly recommended for inventive brands.",
    name: "Aiden Tan",
    star: 4,
    location: " Singapore",
  },
  {
    quote:
      "Conture Media understands the changing digital market. Their experience in content and video editing has really benefited our marketing approach. They are efficient and professional.",
    name: "Luca Müller",
    star: 5,
    location: "Germany ",
  },
  {
    quote:
      "Conture Media is a game changer for any influencer or company trying to make an impression. Their cutting-edge content and smooth video editing helped my campaign succeed. They provide absolutely fantastic service!",
    name: "Ella Johnson",
    star: 4.5,
    location: "USA",
  },
];
