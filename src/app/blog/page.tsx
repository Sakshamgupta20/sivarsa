"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { BASE_PATH } from "@/lib/constants";

const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;
const imgCalendar = `${BASE_PATH}/assets/faq-icon.png`;
const imgBlogHeroCurves = `${BASE_PATH}/assets/blog-hero-curves.svg`;

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
    <div className="bg-white relative size-full min-h-screen">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section - Light theme with purple gradient curves from Figma */}
          <div className="h-[600px] md:h-[883px] overflow-hidden relative shrink-0 w-full bg-white">
            {/* Purple Gradient Curves Background - exact Figma SVG */}
            <div className="absolute left-[-109px] top-[94px] md:top-[172px] w-[1606px] h-[710px] pointer-events-none">
              <img
                src={imgBlogHeroCurves}
                alt=""
                className="w-full h-full object-contain"
                style={{ transform: 'scale(1.15)' }}
              />
            </div>

            <Header variant="light" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-[100px] md:pt-[144px]">
              <h1 className="font-[family-name:var(--font-headings)] text-[36px] md:text-[48px] lg:text-[55px] leading-[1.15] text-center text-black uppercase max-w-[925px] px-4 animate-fade-in-up">
                DISCOVER OUR LATEST ARTICLES
              </h1>
            </div>
          </div>

          {/* Articles Section - Light Theme */}
          <div className="bg-white content-stretch flex flex-col items-center py-[60px] md:py-[85px] relative shrink-0 w-full">
            <div className="max-w-[1360px] w-full px-4 md:px-[40px] mx-auto">
              {/* Section Heading */}
              <div className="flex flex-col items-center mb-[60px]">
                <h2 className="font-['Schibsted_Grotesk',sans-serif] text-[36px] md:text-[50px] leading-[1.25] capitalize text-black">
                  Articles for You.
                </h2>
              </div>

              {/* Featured Article */}
              <Link href={`/blog/${featuredArticle.slug}`} className="block border-b border-black/10 pb-[33px] mb-[50px] group scroll-reveal scroll-fade-up">
                <div className="flex flex-col lg:flex-row gap-[40px] items-start">
                  {/* Image */}
                  <div className="w-full lg:w-[608px] h-[300px] lg:h-[430px] rounded-[16px] overflow-hidden shrink-0 shadow-lg">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start pt-[19px] flex-1">
                    <div className="flex items-center justify-between w-full mb-[18px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#7427ff] uppercase tracking-wide">
                        {featuredArticle.category}
                      </span>
                      <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-black/50 uppercase">
                        {featuredArticle.readTime} to read
                      </span>
                    </div>

                    <h3 className="font-['Inter',sans-serif] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.33] tracking-[1px] text-black mb-[20px] group-hover:text-[#7427ff] transition-colors">
                      {featuredArticle.title}
                    </h3>

                    <p className="font-['Inter',sans-serif] text-[18px] text-black/60 leading-[1.6] mb-[30px]">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-[16px] mt-auto">
                      <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#265df6] to-[#7427ff] flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Inter',sans-serif] font-bold text-[18px] text-black/50">by</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[20px] text-[#7427ff]">{featuredArticle.author}</span>
                      </div>
                      <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-black/50 ml-auto">
                        {featuredArticle.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Article Grid - 2 columns with vertical cards matching Figma */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[72px]">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col scroll-reveal scroll-fade-up bg-white overflow-hidden transition-all duration-300"
                    style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
                  >
                    {/* Article Image - Large on top */}
                    <div className="w-full aspect-[638/455] overflow-hidden rounded-[12px] mb-[36px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Article Meta - Category + dot + Read time */}
                    <div className="flex items-center gap-[14px] mb-[23px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[20px] text-black">
                        {article.category}
                      </span>
                      <span className="w-[9px] h-[9px] rounded-full bg-black/30"></span>
                      <span className="font-['Inter',sans-serif] font-medium text-[20px] text-black/50">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Article Title - Large */}
                    <h4 className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[28px] md:text-[32px] leading-[1.25] text-black mb-[24px] group-hover:text-[#7427ff] transition-colors min-h-[80px]">
                      {article.title}
                    </h4>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-[24px]">
                        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#265df6] to-[#7427ff] flex items-center justify-center text-white font-bold text-[20px]">
                          S
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <span className="font-['Inter',sans-serif] font-medium text-[24px] text-black/50">by</span>
                          <span className="font-['Inter',sans-serif] font-semibold text-[26px] text-[#7427ff]">{article.author}</span>
                        </div>
                      </div>
                      <span className="font-['Inter',sans-serif] font-medium text-[18px] text-black/50">
                        {article.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start py-[80px] md:py-[124px] relative shrink-0 w-full">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[80px] items-start justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start max-w-[434px]">
                  <h2 className="font-[family-name:var(--font-headings)] text-[40px] md:text-[55px] leading-[1.2] tracking-[1px] text-[#1b1b1b]">
                    Have a Project?<br />Let&apos;s talk!
                  </h2>

                  <div className="flex flex-col gap-[11px] mt-[31px]">
                    {[
                      "NDA? Absolutely just ask.",
                      "We'll respond in 24 hours — fast & focused.",
                      "Work with senior experts, not juniors.",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-[10px] items-center">
                        <img alt="" className="w-[16px] h-[16px]" src={imgContactTick} />
                        <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15px] text-[#1b1b1b]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[12px] mt-[60px] md:mt-[95px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#1b1b1b]">Schedule a call:</span>
                    <div className="bg-white flex items-center p-[10px] pr-[24px] rounded-lg shadow-sm">
                      <div className="bg-gradient-to-r from-[#265df6] to-[#7427ff] w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold text-[24px]">S</div>
                      <div className="flex flex-col pl-[20px]">
                        <span className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#1b1b1b]">Sivarsa</span>
                        <span className="font-['Inter',sans-serif] text-[18px] text-[#7e7e81]">Founder & CEO</span>
                      </div>
                      <img alt="" className="w-[48px] h-[48px] ml-[40px]" src={imgCalendar} />
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
