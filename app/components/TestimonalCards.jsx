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
      "Honestly, Conture Media has been a game-changer for us. The leads we’re getting now are of much higher quality, and our reach has expanded beyond what we expected.",
    name: "Olivia Garcia",
    location: "Spain (Europe)",
    star: 5,
  },
  {
    quote:
      "Working with Conture Media has been amazing. They really get what we're trying to achieve, and their content has helped us connect with our audience in ways we didn’t think possible.",
    name: "Anaya Patel",
    star: 4.5,
    location: "India",
  },
  {
    quote:
      "I’m so impressed with Conture Media. They’ve been a true partner in helping us grow our brand. The content they create feels authentic and really resonates with our community.",
    name: "Sophie Martin",
    star: 4,
    location: "Canada ",
  },
  {
    quote:
      "What I love about Conture  Media is how they make everything so easy. Their content feels fresh, and it’s really helped us build a strong, engaged community.",
    name: "Liam Smith",
    star: 5,
    location: "Australia",
  },
  {
    quote:
      "The team at Conture Media has been fantastic to work with. They’re not just delivering content; they’re helping us tell our story in a way that’s bringing in more leads and keeping our audience engaged",
    name: "Isabella Rossi ",
    star: 4.5,
    location: "Italy (Europe)",
  },
  {
    quote:
      "Conture Media has really understood our brand’s voice and nailed it in every piece of content they’ve created for us. We’ve seen a noticeable difference in our online presence.",
    name: "Aiden Tan",
    star: 4,
    location: " Singapore",
  },
  {
    quote:
      "It’s been such a pleasure working with Conture Media. Their creative ideas and thoughtful execution have made a huge impact on our marketing efforts. We’re seeing real results",
    name: "Luca Müller",
    star: 5,
    location: "Germany ",
  },
  {
    quote:
      "I can’t say enough good things about Conture Media. They’ve helped us build a loyal following through content that feels genuine and really connects with people.",
    name: "Ella Johnson",
    star: 4.5,
    location: "USA",
  },
  {
    quote:
      "Conture Media has a way of making complex ideas come across so simply and effectively. They’ve helped us grow our reach and create a community that’s genuinely interested in what we do",
    name: "Zara Ali",
    star: 4.5,
    location: "UAE",
  },
  {
    quote:
      "The team at Conture Media is just fantastic. They’ve really helped us elevate our brand with content that’s not only high-quality but also perfectly aligned with our goals.",
    name: "Liam Smith",
    star: 5,
    location: "UK",
  },
  {
    quote:
      "Working with Conture Media feels like a true partnership. They care about our success as much as we do, and that shows in the content they produce and the results we’ve achieved together.",
    name: "Ava Brown",
    star: 4.5,
    location: "New Zealand",
  },
];
