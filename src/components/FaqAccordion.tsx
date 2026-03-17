"use client";

import { useState } from "react";

const defaultFaqs = [
  {
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "We specialize in end-to-end digital solutions including software development, growth marketing, and staffing solutions. Our focus is on building scalable products, driving measurable growth through SEO, paid ads, and content strategy, and connecting businesses with top-tier talent.",
  },
  {
    question: "Why is UI/UX design important for your business growth?",
    answer:
      "Great design directly impacts user engagement, conversion rates, and customer retention. A well-designed product reduces friction, builds trust, and creates memorable experiences that keep users coming back — ultimately driving revenue growth.",
  },
  {
    question: "What separates sivarsa from other top UI/UX design agencies?",
    answer:
      "Unlike traditional agencies, we offer an integrated approach — combining software development, marketing, and talent under one roof. This means seamless coordination, faster delivery, and a unified strategy aligned with your business goals.",
  },
  {
    question: "How long does the entire design process take?",
    answer:
      "Timelines vary based on project scope, but we pride ourselves on speed. Most projects kick off within days and deliver results in weeks, not months. We'll provide a clear timeline during our initial strategy call.",
  },
  {
    question: "How much do you charge for design services?",
    answer:
      "Our pricing is tailored to your specific needs and project scope. We offer flexible engagement models — from fixed-price projects to ongoing retainers. Book a strategy call and we'll put together a custom proposal for you.",
  },
];

interface FaqAccordionProps {
  faqs?: { question: string; answer: string }[];
  className?: string;
}

export default function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = faqs || defaultFaqs;

  return (
    <div className={className || "flex flex-col items-start relative shrink-0 w-full lg:w-[639px]"}>
      {items.map((faq, index) => (
        <div
          key={index}
          className="border-[#f0f0f0] border-b-[0.944px] border-solid w-full cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between pr-[30.222px] py-[30.222px] w-full">
            <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
              <p className="leading-[26.444px]">{faq.question}</p>
            </div>
            <svg
              className={`w-[14px] h-[14px] shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
              viewBox="0 0 14 14"
              fill="none"
              stroke="#1b1b1b"
              strokeWidth="2"
            >
              <line x1="0" y1="7" x2="14" y2="7" />
              <line x1="7" y1="0" x2="7" y2="14" />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[300px] pb-[24px]" : "max-h-0"}`}
          >
            <p className="font-['Inter',sans-serif] font-normal text-[#7e7e81] text-[14px] md:text-[16px] leading-[1.6] pr-[30.222px]">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
