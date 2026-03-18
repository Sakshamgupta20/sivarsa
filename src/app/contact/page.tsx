"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedByMarquee from "@/components/layout/TrustedByMarquee";
import ContactForm from "@/components/ContactForm";
import { BASE_PATH, contactInfo } from "@/lib/constants";

// Images
const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgPattern2 = `${BASE_PATH}/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;
const imgTeamImage = `${BASE_PATH}/assets/4726923c2eb3bd4fff6bae2d50976175dd47b09d.png`;
const imgEmailIcon = `${BASE_PATH}/assets/email-icon.png`;
const imgWhatsappIcon = `${BASE_PATH}/assets/whatsapp-icon.png`;
const imgBtnArrowIcon = `${BASE_PATH}/assets/0b857160e5018cd27df9fbbc68815715d0510936.png`;
const imgBtnArrowIconWhite = `${BASE_PATH}/assets/cc33d9c88b41312dae650fea64034944767af781.png`;
const imgEllipse1 = `${BASE_PATH}/assets/ellipse-decoration.svg`;
const imgCalendar = `${BASE_PATH}/assets/faq-icon.png`;

export default function ContactPage() {
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white relative w-full">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section with Form */}
          <div className="min-h-[600px] lg:min-h-[841px] overflow-hidden relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-5.86%] max-w-none top-0 w-[111.73%]" src={imgHero} />
            </div>
            <Header />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-35 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgPattern2} />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(110.159deg, rgb(0, 0, 0) 21.698%, rgba(0, 0, 0, 0.26) 84.415%)" }} />
            {/* Stars overlay */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
            </div>

            {/* Content wrapper constrained to max-width */}
            <div className="relative w-full max-w-[1360px] mx-auto min-h-[500px] lg:min-h-[750px]">
              {/* Ellipse decoration (purple patch) */}
              <div className="absolute left-[40%] lg:left-[568.31px] size-[500px] md:size-[850px] top-[200px] opacity-50 md:opacity-100 pointer-events-none">
                <div className="absolute inset-[-37.62%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>

              <div className="relative z-10 px-4 lg:px-0 pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[72px] md:pb-[100px]">
              <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start max-w-[434px]">
                  <h1 className="font-[family-name:var(--font-headings)] font-bold text-[32px] md:text-[40px] lg:text-[55px] leading-[1.3] tracking-[1px] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up">
                    Have a Project?<br />Let&apos;s talk!
                  </h1>

                  <div className="flex flex-col gap-[11px] mt-[31px]">
                    {[
                      "NDA? Absolutely just ask.",
                      "We'll respond in 24 hours — fast & focused.",
                      "Work with senior UX experts, not juniors.",
                    ].map((item, index) => (
                      <div key={index} className="flex gap-[10px] items-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <img alt="" className="w-[16px] h-[16px]" src={imgContactTick} />
                        <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15px] text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Form */}
                <ContactForm className="w-full lg:max-w-[672px] animate-fade-in-up" style={{ animationDelay: '200ms' }} />
              </div>
            </div>
            </div>
          </div>

          {/* Trusted By Marquee */}
          <TrustedByMarquee />

          {/* 4 Simple Steps Section */}
          <div className="bg-white content-stretch flex flex-col items-start py-[100px] md:py-[156px] relative shrink-0 w-full">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-0 w-full">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[144px] items-start justify-between">
                {/* Left Heading */}
                <div className="flex flex-col items-start max-w-[400px] scroll-reveal scroll-fade-up">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[28px] md:text-[40px] lg:text-[51px] leading-[1.2] text-[#1b1b1b]">
                    Start your project in<br />
                    <span className="text-[#3f2fee]">4 simple steps.</span>
                  </h2>
                </div>

                {/* Right Steps */}
                <div className="flex flex-col gap-[48px] max-w-[640px] flex-1">
                  {[
                    {
                      num: "01",
                      title: "Send us a message",
                      desc: "This is the our first step, and we appreciate you are taking first step."
                    },
                    {
                      num: "02",
                      title: "We will get back to you soon",
                      desc: "We've been always helping to our with correspondence, so we usually respond to inquiries very fast. Unless, you know, the email are busy."
                    },
                    {
                      num: "03",
                      title: "Meet and proposal",
                      desc: "We meet. We scope. We raise a proposal. We discuss. We agree. We start. Simple."
                    },
                    {
                      num: "04",
                      title: "Let's collaborate!",
                      desc: "\"I think this is the beginning of a beautiful friendship\" - Me, but believe the best yet to come"
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-[32px] md:gap-[50px]">
                      <span className="font-['Inter',sans-serif] text-[20px] md:text-[22px] text-[#7e7e81] pt-[2px]">{step.num}</span>
                      <div className="flex flex-col gap-[11px]">
                        <h4 className="font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] text-[#1b1b1b]">{step.title}</h4>
                        <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#7e7e81] leading-[1.6]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* We Deliver Section - Dark */}
          <div className="bg-[#1b1b1b] content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-0 w-full">
              <div className="flex flex-col gap-[64px]">
                {/* Heading */}
                <div className="flex flex-col items-start">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[28px] md:text-[40px] lg:text-[51px] leading-[1.2] text-white">
                    We deliver on time, in days and weeks<br />
                    <span className="text-white/50">—not months.</span>
                  </h2>
                </div>

                {/* Timeline and CTA */}
                <div className="flex flex-col lg:flex-row justify-between gap-[60px]">
                  {/* Timeline Items */}
                  <div className="flex flex-col w-full lg:max-w-[600px]">
                    {[
                      { num: "01", text: "Onboard in <1 day" },
                      { num: "02", text: "Understand Scope & Strategy" },
                      { num: "03", text: "First designs in 4-5 days" },
                    ].map((item, index) => (
                      <div key={index} className={`bg-[#242424] flex items-center gap-[16px] px-[32px] py-[31px] ${index < 2 ? 'border-b border-[#3a3a3a]' : ''}`}>
                        <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#7e7e81] tracking-[1px]">{item.num}</span>
                        <span className="font-['Inter',sans-serif] font-medium text-[20px] md:text-[24px] text-white tracking-[1px]">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-end">
                    <Link href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" className="bg-[#ebfe5b] flex gap-[8px] items-center justify-center px-[28px] py-[16px] rounded-[100px] btn-magnetic shine-effect">
                      <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#1b1b1b]">Book a call</span>
                      <img alt="" className="w-[12px] h-[12px]" src={imgBtnArrowIcon} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headquarters Section */}
          <div className="bg-white content-stretch flex flex-col items-start py-[100px] md:py-[156px] relative shrink-0 w-full">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-0 w-full">
              <div className="flex flex-col gap-[64px]">
                {/* Heading */}
                <div className="flex flex-col items-start">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[28px] md:text-[40px] lg:text-[51px] leading-[1.2] text-[#1b1b1b]">
                    Our Headquarters centrally based in<br />
                    <span className="text-[#1b1b1b]/40">India</span>
                  </h2>
                </div>

                {/* Team Image */}
                <div className="w-full aspect-[1360/755] rounded-[20px] overflow-hidden scroll-reveal scroll-scale-up img-scale-container">
                  <img alt="Our Team" className="w-full h-full object-cover" src={imgTeamImage} />
                </div>
              </div>
            </div>
          </div>

          {/* Got a Project CTA Section */}
          <div className="bg-white content-stretch flex flex-col items-start pb-[100px] md:pb-[156px] relative shrink-0 w-full">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-0 w-full">
              <div className="flex flex-col gap-[142px]">
                {/* Top Row - Heading and CTA */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[40px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[28px] md:text-[40px] lg:text-[51px] leading-[1.2] text-[#1b1b1b]">
                    Got a project in mind?<br />Let&apos;s talk.
                  </h2>
                  <Link href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" className="bg-[#3f2fee] flex gap-[8px] items-center justify-center px-[28px] py-[16px] rounded-[100px] shrink-0">
                    <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-white">Book a call</span>
                    <img alt="" className="w-[12px] h-[12px]" src={imgBtnArrowIconWhite} />
                  </Link>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[30px]">
                  {/* Greater Noida Office */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3f2fee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#1b1b1b]">Greater Noida</h3>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7e81] leading-[1.6]">
                      Uttar Pradesh, India
                    </p>
                  </div>

                  {/* Agra Office */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3f2fee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#1b1b1b]">Agra</h3>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7e81] leading-[1.6]">
                      Uttar Pradesh, India
                    </p>
                  </div>

                  {/* Dallas Office */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3f2fee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#1b1b1b]">Dallas</h3>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7e81] leading-[1.6]">
                      Texas, USA
                    </p>
                  </div>

                  {/* Business Inquiry */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3f2fee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#1b1b1b]">Business Inquiry</h3>
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="font-['Inter',sans-serif] text-[14px] text-[#7e7e81] hover:text-[#3f2fee] transition-colors">
                      {contactInfo.email}
                    </a>
                    <a href={`tel:${contactInfo.phone}`} className="font-['Inter',sans-serif] text-[14px] text-[#7e7e81] hover:text-[#3f2fee] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
