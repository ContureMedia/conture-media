import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = ({ numQuestions }) => {
  const questions = [
    {
      trigger:
        "How can I join the Conture Media community and start working with you?",
      content:
        "To join the Conture Media community and start working with us, simply reach out through our website's contact form or book a free consultation. We'll discuss your brand's needs and goals, and create a tailored plan to kickstart your journey with us.",
    },
    {
      trigger: "What modern sales strategies does Conture Media implement?",
      content:
        "We leverage modern sales strategies that focus on building long-term relationships, creating personalized experiences, and using targeted paid advertising. We prioritize community engagement, referrals, and affiliate marketing to drive sustainable growth rather than relying on outdated sales tactics.",
    },
    {
      trigger:
        "How does Conture Media's approach differ from traditional content marketing agencies?",
      content:
        "Conture Media is all about creating a community around your brand. Unlike traditional agencies, we don't just produce content—we build a loyal following that loves your brand. Our focus on community-driven growth, authentic connections, and meaningful engagement sets us apart in the content marketing landscape.",
    },
    {
      trigger:
        "How can Conture Media help build and engage my brand's community?",
      content:
        "We specialize in crafting content that resonates with your target audience, sparking conversations and fostering connections. By creating scroll-stopping visuals and engaging stories, we help you build a dedicated community that actively participates in your brand's journey.",
    },
    {
      trigger:
        "What types of content does Conture Media specialize in creating?",
      content:
        "We excel in producing a wide range of content, including eye-catching visuals, dynamic videos, scroll-stopping reels, and compelling written content. Our goal is to create content that not only enhances your online presence but also drives engagement and loyalty.",
    },
    {
      trigger:
        "Can Conture Media handle all aspects of my brand's content marketing and social media management?",
      content:
        "Absolutely! We offer end-to-end content marketing and social media management services. From strategy development and content creation to scheduling, posting, and analytics, we take care of everything to ensure your brand's message is consistent and effective.",
    },
    {
      trigger:
        "What referral and affiliate marketing programs does Conture Media offer?",
      content:
        "We offer customized referral and affiliate marketing programs designed to increase your brand's reach and sales. By leveraging your existing community and network, we help you tap into new audiences and drive growth through trusted recommendations.",
    },
    {
      trigger:
        "How can Conture Media's content strategies boost my sales and customer engagement?",
      content:
        "Our content strategies are designed to create genuine connections with your audience, which leads to increased trust and loyalty. By focusing on community building, personalized content, and targeted marketing efforts, we help boost your sales and engagement in a way that's sustainable and impactful.",
    },
    {
      trigger:
        "Can I get a custom content package tailored to my brand's unique needs?",
      content:
        "Yes! We understand that every brand is unique, which is why we offer fully customized content packages. We work closely with you to understand your specific goals and challenges, and then create a package that fits your needs perfectly.",
    },
    {
      trigger:
        "Does Conture Media offer discounts or special packages for recurring clients or bulk orders?",
      content:
        "We do! Conture Media values long-term partnerships, and we offer discounts for recurring clients as well as special packages for bulk orders. Get in touch with us to discuss the best pricing options for your needs.",
    },
    {
      trigger:
        "How does Conture Media ensure my brand's identity is consistent across all content?",
      content:
        "Consistency is key to building a strong brand. We start by deeply understanding your brand's values, tone, and visual identity. From there, we ensure that every piece of content we create aligns with your brand guidelines, maintaining a cohesive and recognizable presence across all platforms.",
    },
    {
      trigger:
        "Which platforms does Conture Media support for video editing and content creation?",
      content:
        "We support a wide range of platforms, including YouTube, TikTok, Instagram, Facebook, LinkedIn, and more. Whether you need content for social media, your website, or any other digital platform, we've got you covered with our versatile video editing and content creation services.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto  shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-200 p-6 bg-gray-800">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="divide-y divide-gray-200">
        {questions.slice(0, numQuestions).map((question, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            key={`item-${index + 1}`}
            className="px-6 py-4"
          >
            <AccordionTrigger className="text-left text-base font-medium text-gray-200 hover:text-gray-400 transition-colors duration-200">
              {question.trigger}
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-gray-300 text-base">
              {question.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqCard;
