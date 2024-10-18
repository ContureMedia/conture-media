import { Timeline } from "@/components/ui/timeline";
import React from "react";

export function TimelineComp() {
  const data = [
    {
      key: 1,
      title: "Connect & Collaborate",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            First, we sit down together and really get to know you—your goals,
            your vision, and what you&apos;re trying to achieve. This isn&apos;t
            just a one-way conversation; it&apos;s about teamwork. We want to
            understand what matters to you, so we can create something amazing
            together.
          </p>
          <p className="text-white text-xs md:text-sm font-normal">
            - What we&apos;ll do: We&apos;ll have a chat, exchange ideas, and
            make sure we&apos;re all on the same page before jumping into the
            fun part—creating!
          </p>
        </div>
      ),
    },
    {
      key: 2,
      title: "Create & Choose",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Once we know what you&apos;re looking for, it&apos;s time to get
            creative. We&apos;ll throw around ideas, explore different
            directions, and come up with a few exciting possibilities. Then,
            together, we&apos;ll choose the one that fits your needs and vision
            perfectly.
          </p>
          <p className="text-white text-xs md:text-sm font-normal">
            - What we&apos;ll do: We&apos;ll brainstorm, sketch out ideas, and
            help you pick the best one that makes you say, &quot;That&apos;s
            it!&quot;
          </p>
        </div>
      ),
    },
    {
      key: 3,
      title: "Implement",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Now comes the action! This is where we roll up our sleeves and bring
            that chosen idea to life. Everything we&apos;ve planned gets put
            into motion, and we start building something you can be proud of.
          </p>
          <p className="text-white text-xs md:text-sm font-normal">
            - What we&apos;ll do: We&apos;ll get to work on the project, keeping
            you in the loop along the way to make sure everything&apos;s running
            smoothly.
          </p>
        </div>
      ),
    },
    {
      key: 4,
      title: "Evaluate & Listen",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Once the project&apos;s done, we take a moment to pause and see how
            it all turned out. But it&apos;s not just about what we
            think—it&apos;s about what you think. We&apos;ll ask for your
            feedback and see what worked great and where we can make
            improvements.
          </p>
          <p className="text-white text-xs md:text-sm font-normal">
            - What we&apos;ll do: We&apos;ll look at the results together,
            listen to your thoughts, and figure out what can be even better next
            time.
          </p>
        </div>
      ),
    },
    {
      key: 5,
      title: "Optimize",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Finally, we look at the big picture. We&apos;ll show you the results
            of all the hard work, and based on what we&apos;ve learned,
            we&apos;ll fine-tune everything for the future. Whether it&apos;s a
            one-time project or ongoing work, we make sure to keep improving so
            the next step is always better than the last.
          </p>
          <p className="text-white text-xs md:text-sm font-normal">
            - What we&apos;ll do: We&apos;ll share the results, discuss how we
            can improve, and set things up for even bigger wins next time!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} showDescriptionOnHover={false} />
    </div>
  );
}
