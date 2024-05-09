import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = ({ numQuestions }) => {
  const questions = [
    {
      trigger: "How can I contact Conture Media for services or inquiries?",
      content:
        "Conture Media is accessible globally and encourages potential clients or anyone with questions to reach out through their contact form, email, or phone. They aim to provide services to a worldwide clientele​​.",
    },
    {
      trigger: "What pricing and packages does Conture Media offer?",
      content:
        "Conture Media offers a range of pricing plans and packages, including expert content marketing strategies, creative amplification, and rapid brand growth programs. They also provide custom budget options for unique visions, focusing on brand and creator marketing vision and innovation​​.",
    },
    {
      trigger: "How can I start working with Conture Media?",
      content:
        "To initiate a partnership with Conture Media, interested parties should contact them through their website or email for a consultation. This process involves discussing brand goals and devising a strategy that aligns with the client's objectives and budget​​.",
    },
    {
      trigger: "Who are the typical clients of Conture Media?",
      content:
        "Conture Media's client base is diverse, catering to individual creators seeking increased visibility as well as established brands looking to enhance their digital presence. They provide tailored services to fit the needs of clients across various sizes and industries​​.",
    },
    {
      trigger:
        "Can Conture Media handle all aspects of social media management?",
      content:
        "Yes, Conture Media offers a full suite of social media management services, including content creation, posting, engagement tracking, and analytics. They align their efforts with the client's brand voice and goals to ensure cohesive online presence​​.",
    },
    {
      trigger:
        "What makes Conture Media different from other content marketing agencies?",
      content:
        "Conture Media sets itself apart through its niche focus on short-form content and deep understanding of viral trends. They stay ahead of digital trends to ensure their content remains fresh, relevant, and impactful​​.",
    },
    {
      trigger: "How does Conture Media help brands grow on social media?",
      content:
        "By producing compelling short-form content tailored to the target audience, Conture Media enhances brand engagement and visibility. They utilize customized strategies for each social media platform, optimizing for the algorithms to maximize reach and impact​​.",
    },
    {
      trigger: "What services does Conture Media offer?",
      content:
        "Conture Media specializes in a comprehensive range of services designed to boost online presence and audience engagement for brands and creators on social media. Their offerings include short-form video content, video editing, scriptwriting, social media management, personal branding, viral content strategy, and media production​​.",
    },
    {
      trigger: "Can I get a custom package tailored to my content needs?",
      content:
        "Definitely, we offer bespoke packages that cater to your specific content requirements and campaign goals.",
    },
    {
      trigger: "What makes content truly engaging and shareable?",
      content:
        " A compelling hook, consistent engagement throughout, and delivering value are the core elements that make content go viral.",
    },
    {
      trigger: "Do you offer discounts for recurring clients or bulk orders?",
      content:
        "Yes, we value long-term partnerships and offer special pricing for ongoing collaborations and bulk video orders.",
    },
    {
      trigger: "Which platforms do your video editing services support?",
      content:
        "Our editing services cater to all key platforms that support short-form content, such as TikTok, Instagram Reels, and YouTube Shorts.",
    },
    {
      trigger:
        "How do you ensure my brand identity is consistent in the videos?",
      content:
        "We work closely with your branding guidelines to ensure every video reflects and reinforces your brand's identity.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {questions?.slice(0, numQuestions).map((question, index) => (
        <AccordionItem value={`item-${index + 1}`} key={`item-${index + 1}`}>
          <AccordionTrigger className="text-left">
            {question.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-left">
            {question.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqCard;
