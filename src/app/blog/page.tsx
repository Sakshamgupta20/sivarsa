"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { BASE_PATH } from "@/lib/constants";

// Images
const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;
const imgCalendar = `${BASE_PATH}/assets/faq-icon.png`;

// Blog article data with placeholder images
const featuredArticle = {
  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
  category: "User Testing, UX Tools",
  readTime: "16 Minutes",
  title: "Top 10 user testing companies in 2025 | best usability testing services compared",
  author: "Sivarsa",
  date: "January 15, 2025",
  slug: "top-user-testing-companies-2025",
  excerpt: "Discover the best user testing platforms and services to improve your product's usability and user experience."
};

const articles = [
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "UX Design",
    readTime: "24 Minutes",
    title: "Top 20 UI/UX Design Agencies in the USA - December 2025 Rankings",
    author: "Sivarsa",
    date: "December 15, 2024",
    slug: "top-ux-design-agencies-usa",
    excerpt: "A comprehensive guide to the best UI/UX design agencies in the United States."
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "SaaS, Web Design",
    readTime: "17 Minutes",
    title: "Top 10 SaaS Website Design Agencies in 2025",
    author: "Sivarsa",
    date: "December 11, 2024",
    slug: "top-saas-website-design-agencies",
    excerpt: "Find the perfect agency to design your SaaS product website."
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    category: "Branding",
    readTime: "17 Minutes",
    title: "Branding & UI Trends for 2025",
    author: "Sivarsa",
    date: "December 11, 2024",
    slug: "branding-ui-trends-2025",
    excerpt: "Stay ahead of the curve with these emerging branding and UI design trends."
  },
  {
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    category: "UX Design",
    readTime: "8 Min",
    title: "What is UX Prototyping? Why Do You Need Consultancy?",
    author: "Sivarsa",
    date: "November 22, 2024",
    slug: "ux-prototyping-consultancy",
    excerpt: "Understanding the importance of UX prototyping in product development."
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "UX Strategy",
    readTime: "12 Minutes",
    title: "Top 20 UX Strategy Service Providers (2025 Rankings)",
    author: "Sivarsa",
    date: "November 18, 2024",
    slug: "top-ux-strategy-providers",
    excerpt: "The leading UX strategy consultancies to help shape your product vision."
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    category: "Mobile Apps, Fintech",
    readTime: "8 Min",
    title: "Top 15 Banking Apps with Exceptional UX Design (2025)",
    author: "Sivarsa",
    date: "November 14, 2024",
    slug: "top-banking-apps-ux",
    excerpt: "Explore the best-designed banking apps that prioritize user experience."
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    category: "MVP, Development",
    readTime: "10 Minutes",
    title: "Top 10 MVP Development Companies in the USA for Startups (2025 guide)",
    author: "Sivarsa",
    date: "November 10, 2024",
    slug: "top-mvp-development-companies",
    excerpt: "Find the right partner to build your minimum viable product."
  },
  {
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    category: "Design Process",
    readTime: "11 Minutes",
    title: "The Ultimate Design Brief Example for UI/UX Projects",
    author: "Sivarsa",
    date: "November 14, 2024",
    slug: "design-brief-example",
    excerpt: "A comprehensive template for creating effective design briefs."
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Mobile Apps",
    readTime: "14 Min",
    title: "Top 20 Mobile App Design Agencies in the USA (Reviewed)",
    author: "Sivarsa",
    date: "November 10, 2024",
    slug: "top-mobile-app-design-agencies",
    excerpt: "The best agencies for designing your next mobile application."
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Enterprise, ERP",
    readTime: "12 Minutes",
    title: "How to Design an Effective ERP System",
    author: "Sivarsa",
    date: "October 28, 2024",
    slug: "design-effective-erp-system",
    excerpt: "Best practices for designing enterprise resource planning systems."
  },
  {
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
    category: "SaaS, Marketing",
    readTime: "17 Minutes",
    title: "The Complete Guide to Building a Sales Funnel for SaaS (High-Converting)",
    author: "Sivarsa",
    date: "October 20, 2024",
    slug: "sales-funnel-saas-guide",
    excerpt: "Learn how to create a sales funnel that converts for your SaaS business."
  },
];

// Export articles for use in other pages
export { articles, featuredArticle };

export default function BlogPage() {
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
    <div className="bg-white relative size-full overflow-x-hidden">
      <div className="w-full flex flex-col items-center overflow-x-hidden">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section */}
          <div className="min-h-[500px] md:min-h-[600px] overflow-clip relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHero} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
            <div className="absolute inset-0 opacity-60">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
            </div>

            <Header />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-[80px] md:pt-[120px] pb-[60px]">
              <h1 className="font-['GT_Super_Ds_Trial:Bd',sans-serif] text-[36px] md:text-[48px] lg:text-[55px] leading-[1.2] text-center bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent uppercase max-w-[925px] px-4 animate-fade-in-up">
                DISCOVER OUR LATEST ARTICLES
              </h1>

              {/* Wavy Line SVG */}
              <div className="w-full max-w-[1600px] mt-[40px] overflow-hidden">
                <svg viewBox="0 0 1440 200" className="w-full h-auto" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#265df6" />
                      <stop offset="50%" stopColor="#7427ff" />
                      <stop offset="100%" stopColor="#265df6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 Q180,20 360,100 T720,100 T1080,100 T1440,100"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    className="animate-wave"
                  />
                  <path
                    d="M0,120 Q180,40 360,120 T720,120 T1080,120 T1440,120"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="2"
                    opacity="0.5"
                    className="animate-wave-delayed"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="bg-white content-stretch flex flex-col items-center py-[60px] md:py-[85px] relative shrink-0 w-full">
            <div className="max-w-[1360px] w-full px-4 md:px-[40px] mx-auto">
              {/* Section Heading */}
              <div className="flex flex-col items-center mb-[40px]">
                <h2 className="font-['GT_Super_Ds_Trial:Md',sans-serif] text-[36px] md:text-[48px] leading-[1.25] tracking-[1px] text-[#1b1b1b]">
                  Articles for You
                </h2>
              </div>

              {/* Featured Article */}
              <Link href={`/blog/${featuredArticle.slug}`} className="block border-b border-[#e8e7e7] pb-[33px] mb-[40px] group scroll-reveal scroll-fade-up">
                <div className="flex flex-col lg:flex-row gap-[40px] items-start">
                  {/* Image */}
                  <div className="w-full lg:w-[608px] h-[300px] lg:h-[430px] rounded-[12px] overflow-hidden shrink-0">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start pt-[19px] flex-1">
                    <div className="flex items-center justify-between w-full mb-[18px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#3f2fee] uppercase tracking-wide">
                        {featuredArticle.category}
                      </span>
                      <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#7e7e81] uppercase">
                        {featuredArticle.readTime} to read
                      </span>
                    </div>

                    <h3 className="font-['Inter',sans-serif] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.33] tracking-[1px] text-[#1b1b1b] mb-[20px] group-hover:text-[#3f2fee] transition-colors">
                      {featuredArticle.title}
                    </h3>

                    <p className="font-['Inter',sans-serif] text-[18px] text-[#7e7e81] leading-[1.6] mb-[30px]">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-[16px] mt-auto">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#3f2fee] flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Inter',sans-serif] font-bold text-[18px] text-[#7e7e81]">by</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[20px] text-[#3f2fee]">{featuredArticle.author}</span>
                      </div>
                      <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#7e7e81] ml-auto">
                        {featuredArticle.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[48px]">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col scroll-reveal scroll-fade-up card-3d"
                    style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
                  >
                    {/* Article Image */}
                    <div className="w-full h-[240px] md:h-[280px] rounded-[12px] overflow-hidden mb-[20px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Article Meta */}
                    <div className="flex items-center justify-between mb-[12px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#3f2fee] uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#7e7e81] uppercase">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h4 className="font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] leading-[1.4] text-[#1b1b1b] mb-[16px] group-hover:text-[#3f2fee] transition-colors">
                      {article.title}
                    </h4>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Inter',sans-serif] font-bold text-[14px] text-[#7e7e81]">by</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[16px] text-[#3f2fee]">{article.author}</span>
                      </div>
                      <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#7e7e81]">
                        {article.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[124px] relative shrink-0 w-full">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start max-w-[434px]">
                  <h2 className="font-['GT_Super_Ds_Trial:Su',sans-serif] text-[40px] md:text-[55px] leading-[1.4] tracking-[1px] text-[#1b1b1b]">
                    Have a Project?<br />Let&apos;s talk!
                  </h2>

                  <div className="flex flex-col gap-[11px] mt-[31px]">
                    {[
                      "NDA? Absolutely just ask.",
                      "We'll respond in 24 hours — fast & focused.",
                      "Work with senior experts, not juniors.",
                    ].map((item, index) => (
                      <div key={index} className="flex gap-[10px] items-center">
                        <img alt="" className="w-[16px] h-[16px]" src={imgContactTick} />
                        <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15px] text-[#1b1b1b]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[12px] mt-[95px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#1b1b1b]">Schedule a call:</span>
                    <div className="bg-white flex items-center p-[10px] pr-[24px] rounded-lg">
                      <div className="bg-[#3f2fee] w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold text-[24px]">S</div>
                      <div className="flex flex-col pl-[20px]">
                        <span className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#1b1b1b]">Sivarsa</span>
                        <span className="font-['Inter',sans-serif] text-[18px] text-[#7e7e81]">Founder & CEO</span>
                      </div>
                      <img alt="" className="w-[48px] h-[48px] ml-[52px]" src={imgCalendar} />
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <ContactForm className="w-full lg:max-w-[672px]" />
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
