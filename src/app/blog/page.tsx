"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/ContactSection";

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
    <div className="bg-white relative w-full min-h-screen">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section - Light theme with purple curves */}
          <div className="relative shrink-0 w-full bg-white">
            <Header variant="light" />

            {/* Curves + Title area */}
            <div className="relative w-full h-[350px] md:h-[520px] lg:h-[700px] flex items-start justify-center pt-[80px] md:pt-[120px] lg:pt-[150px]">
              {/* Inline SVG curves */}
              <svg
                className="absolute pointer-events-none w-[140%] h-[130%] left-[-20%] top-[5%] md:top-[0%]"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1806.55 910.513"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }}
              >
                <g filter="url(#blog_f0)">
                  <path d="M100 100C100 100 408.999 416.019 903.275 416.019C1397.55 416.019 1706.55 100 1706.55 100V810.512C1706.55 810.512 1376.22 507.219 903.275 507.219C430.33 507.219 100 810.512 100 810.512V100Z" fill="#7453FA"/>
                </g>
                <g filter="url(#blog_f1)">
                  <path d="M100 269.675C100 269.675 408.998 416.019 903.275 416.019C1397.55 416.019 1706.55 269.675 1706.55 269.675V685.377C1706.55 685.377 1376.22 507.219 903.275 507.219C430.33 507.219 99.9995 685.377 99.9995 685.377L100 269.675Z" fill="#AF89FF"/>
                </g>
                <g filter="url(#blog_f2)">
                  <path d="M99.9995 386.326C99.9995 386.326 408.998 461.267 903.274 461.267C1397.55 461.267 1706.55 386.327 1706.55 386.327V602.662C1706.55 602.662 1376.22 461.267 903.274 461.267C430.329 461.267 99.9995 602.662 99.9995 602.662V386.326Z" fill="#E8E4FF"/>
                </g>
                <defs>
                  <filter id="blog_f0" x="0" y="0" width="1806.55" height="910.513" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="50" result="effect1"/>
                  </filter>
                  <filter id="blog_f1" x="64.9995" y="234.675" width="1676.55" height="485.703" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="17.5" result="effect1"/>
                  </filter>
                  <filter id="blog_f2" x="75.9995" y="362.326" width="1654.55" height="264.336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="12" result="effect1"/>
                  </filter>
                </defs>
              </svg>

              {/* Hero Content */}
              <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
                <h1 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[52px] lg:text-[65px] leading-[1.1] tracking-[-2px] text-center text-black animate-fade-in-up">
                  DISCOVER OUR LATEST ARTICLES
                </h1>
              </div>
            </div>
          </div>

          {/* Articles Section - Light Theme */}
          <div className="bg-white content-stretch flex flex-col items-center py-[60px] md:py-[85px] relative shrink-0 w-full">
            <div className="max-w-[1360px] w-full px-4 md:px-[40px] mx-auto">
              {/* Section Heading */}
              <div className="flex flex-col items-center mb-[60px]">
                <h2 className="font-[family-name:var(--font-headings)] font-medium text-[36px] md:text-[50px] leading-[1.25] text-black">
                  Articles for You
                </h2>
              </div>

              {/* Featured Article */}
              <Link href={`/blog/${featuredArticle.slug}`} className="block border-b border-black/10 pb-[33px] mb-[50px] group scroll-reveal scroll-fade-up">
                <div className="flex flex-col lg:flex-row gap-[40px] items-start">
                  {/* Image */}
                  <div className="w-full lg:w-[608px] h-[300px] lg:h-[430px] overflow-hidden shrink-0">
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

                    <div className="flex items-center gap-[16px] mt-auto w-full">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#d9d9d9] shrink-0 flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] text-white">{featuredArticle.author.charAt(0)}</div>
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Inter',sans-serif] font-medium text-[18px] text-black/50">by</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[20px] text-black">{featuredArticle.author}</span>
                      </div>
                      <span className="font-['Inter',sans-serif] font-medium text-[14px] text-black/50 ml-auto">
                        Publish Date: <span className="font-semibold text-black">{featuredArticle.date}</span>
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
                    {/* Article Image */}
                    <div className="w-full aspect-[638/455] overflow-hidden mb-[36px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Article Meta - Category + dot + Read time */}
                    <div className="flex items-center gap-[14px] mb-[23px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-black uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="w-[7px] h-[7px] rounded-full bg-black/30"></span>
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] text-black/50 uppercase tracking-wide">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h4 className="font-['Inter',sans-serif] font-bold text-[28px] md:text-[32px] leading-[1.25] text-black mb-[24px] group-hover:text-[#7427ff] transition-colors min-h-[80px]">
                      {article.title}
                    </h4>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between mt-auto w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#d9d9d9] shrink-0 flex items-center justify-center font-['Inter',sans-serif] font-bold text-[18px] text-white">{article.author.charAt(0)}</div>
                        <div className="flex items-center gap-[8px]">
                          <span className="font-['Inter',sans-serif] font-medium text-[18px] text-black/50">by</span>
                          <span className="font-['Inter',sans-serif] font-bold text-[20px] text-black">{article.author}</span>
                        </div>
                      </div>
                      <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-black">
                        {article.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
