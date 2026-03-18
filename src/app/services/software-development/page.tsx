"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedByMarquee from "@/components/layout/TrustedByMarquee";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";
import { BASE_PATH } from "@/lib/constants";

const imgHero = `${BASE_PATH}/assets/hero-bg.png`;
const imgPattern2 = `${BASE_PATH}/assets/pattern-dots.png`;
const imgStars1 = `${BASE_PATH}/assets/stars-bg.png`;
const imgImageServicesHeroImg = `${BASE_PATH}/assets/services-hero.png`;
const imgImageMarqueeImg = `${BASE_PATH}/assets/73935e485288eec9c0677abc0d0600a9f833a972.png`;
const imgImageMarqueeImg1 = `${BASE_PATH}/assets/ab8fdb5ba619113577bf244db1327915b657d0f1.png`;
const imgImageMarqueeImg2 = `${BASE_PATH}/assets/f87deaecd42daf62cc4a7f5a7a2b9c4095cbeab3.png`;
const imgImageMarqueeImg3 = `${BASE_PATH}/assets/7985f8c9692c481b91ca5079b08ec7c51d081fa5.png`;
const imgImageMarqueeImg4 = `${BASE_PATH}/assets/e1d1913cf107ec0d4752db980157af01db52ac15.png`;
const imgImageMarqueeImg5 = `${BASE_PATH}/assets/81a4fcc743420daf8c782b4858bb2f815efbc5ec.png`;
const imgImageMarqueeImg6 = `${BASE_PATH}/assets/fcdefe47a048c6ffa191bed3775ef38e668f69a9.png`;
const imgImageMarqueeImg7 = `${BASE_PATH}/assets/bc53118888364fc3096ce8570bcf6a796588e97c.png`;
const imgImageMarqueeImg8 = `${BASE_PATH}/assets/312502ca4389defc21f1ef5c1b8033faf8f4e034.png`;
const imgImageMarqueeImg9 = `${BASE_PATH}/assets/918216ec83d7eb3b64f66d81f4d65b04a6dd2679.png`;
const imgImageMarqueeImg10 = `${BASE_PATH}/assets/1a08a43fb60438b1fdfdb67500f7bc2bf0b52e6b.png`;
const imgImageMarqueeImg11 = `${BASE_PATH}/assets/48e063866d9ff1ad2f69b61817c1b431143a76c2.png`;
const imgImageMarqueeImg12 = `${BASE_PATH}/assets/6a7a96ff35588d01518efd6a49687ee8a35fb5fb.png`;
const imgImageMarqueeImg13 = `${BASE_PATH}/assets/71343cb316123bf79322ed72b8961ab9151fb2da.png`;
const imgImageMarqueeImg14 = `${BASE_PATH}/assets/68bdc07769698f4ff113b4010019600fe21eb789.png`;
const imgImageLbImg = `${BASE_PATH}/assets/service-card-bg.png`;
const imgImageLbFaqIcon = `${BASE_PATH}/assets/faq-icon.png`;
const imgBtnIcon = `${BASE_PATH}/assets/btn-icon.png`;
const imgArrowIcon = `${BASE_PATH}/assets/arrow-icon.png`;
const imgArrowUpIcon = `${BASE_PATH}/assets/arrow-up.png`;
const imgBrandIdentity = `${BASE_PATH}/assets/brand-identity.png`;
const imgUiUxDesign = `${BASE_PATH}/assets/feature-hr.png`;
const imgWebDesign = `${BASE_PATH}/assets/feature-software.png`;
const imgSection = `${BASE_PATH}/assets/achievements-bg.png`;
const imgDivLocaCtaContent = `${BASE_PATH}/assets/cta-content.png`;
const imgImageCtaSeatImg = `${BASE_PATH}/assets/cta-seat.png`;
const imgImageFaqIcon = `${BASE_PATH}/assets/faq-icon-2.png`;
const imgFooter = `${BASE_PATH}/assets/footer-bg.png`;
const img = `${BASE_PATH}/assets/social-linkedin.png`;
const imgGroup = `${BASE_PATH}/assets/logo-icon.svg`;
const imgPattern1 = `${BASE_PATH}/assets/pattern-mask.svg`;
const imgEllipse1 = `${BASE_PATH}/assets/ellipse-decoration.svg`;
const imgGroup1 = `${BASE_PATH}/assets/check-icon-1.svg`;
const imgGroup2 = `${BASE_PATH}/assets/check-icon-2.svg`;
const imgGroup3 = `${BASE_PATH}/assets/check-icon-3.svg`;
const imgGroup4 = `${BASE_PATH}/assets/check-icon-4.svg`;
const img1 = `${BASE_PATH}/assets/social-instagram.svg`;

export default function SoftwareDevelopment() {
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
    <div className="bg-black relative w-full">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="min-h-[600px] lg:min-h-[841px] overflow-hidden relative w-full">
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
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgStars1} />
            </div>
            {/* Content wrapper constrained to max-width */}
            <div className="relative w-full min-h-[500px] lg:min-h-[750px]">
              {/* Ellipse decoration (purple patch) */}
              <div className="absolute left-[40%] lg:left-[calc(50%+200px)] size-[500px] md:size-[850px] top-[250px] md:top-[428.84px] opacity-50 md:opacity-100 pointer-events-none">
                <div className="absolute inset-[-37.62%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>
              <div className="hidden md:block absolute h-[600px] lg:h-[800.63px] right-0 md:right-[calc(50%-680px)] lg:right-[calc(50%-720px)] md:top-[16px] md:w-[450px] lg:w-[632.5px] hero-image animate-float">
                <img alt="Software Development Services" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageServicesHeroImg} />
              </div>
              <div className="relative content-stretch flex flex-col items-start max-w-[1360px] mx-auto px-4 lg:px-0 pt-[40px] lg:pt-[129px] w-full hero-content">
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[37px] items-start relative shrink-0 w-full lg:w-[626px]">
                <div className="bg-clip-text font-[family-name:var(--font-headings)] font-black leading-[1.1] not-italic relative shrink-0 text-[48px] md:text-[68px] lg:text-[90px] tracking-[-2px] lg:tracking-[-4.1492px] animate-fade-in-up" style={{ backgroundImage: "linear-gradient(-38.5682deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                  <p className="mb-0">{`SOFTWARE `}</p>
                  <p>DEVELOPMENT</p>
                </div>
                <p className="font-['Inter',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[22px] text-white/50 w-full max-w-[544px] animate-fade-in-up delay-200">
                  From mobile apps to enterprise systems, we design, build, and launch high-performance software your customers will love.
                </p>
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[23.484px] items-start justify-center relative shrink-0 w-full md:w-auto animate-fade-in-up delay-300">
                  <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[31.6px] items-center justify-center relative shrink-0 w-full sm:w-auto">
                    <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[270.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center gap-[8px]">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Book a Strategy Call
                      </span>
                      <img alt="" className="w-[14px] h-[14px]" src={imgArrowIcon} />
                    </Link>
                    <a href="#services" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[210.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Explore services
                      </span>
                    </a>
                  </div>
                  <div className="flex flex-col font-['Schibsted_Grotesk:Medium',sans-serif] font-medium justify-center leading-[normal] relative shrink-0 text-[14px] md:text-[16px] lg:text-[20px] text-center md:text-left text-white w-full lg:w-[485px]">
                    <p>We grow with you, from idea to international scale.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <TrustedByMarquee />
        <div id="services" className="bg-white w-full scroll-mt-20">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start relative w-full max-w-[1360px] mx-auto py-[60px] md:py-[100px] px-4 md:px-[40px]">
          <div className="relative shrink-0 w-full lg:w-1/2 max-w-[600px]">
            <img alt="" className="max-w-none object-contain pointer-events-none w-full" src={imgImageLbImg} />
          </div>
            <div className="flex flex-col gap-[24px] items-start w-full lg:w-1/2">
              <h2 className="font-[family-name:var(--font-headings)] font-bold text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] text-[#1b1b1b]">
                Software Development<br />
                <span className="text-[#1b1b1b]/40">that moves metrics</span>
              </h2>
              <p className="font-['Inter',sans-serif] font-medium text-[15px] md:text-[17px] text-[#3a3a3a] leading-[1.7]">
                How your app works is an equally important part of the design as how it looks. Every time someone uses the app, every interaction with the screen can shape their actions. For this reason, our team pays close attention to simplicity, ease of use and attracting conversions. We contribute to boosting product growth by enhancing the key metrics.
              </p>
              <div className="flex flex-col w-full mt-[16px]">
                {[
                  { num: "01", title: "Full-cycle product development", desc: "We handle everything from ideation and prototyping to development, testing, and deployment — delivering a complete product, not just code." },
                  { num: "02", title: "Clean, maintainable code", desc: "Our engineering standards ensure your codebase stays scalable, readable, and easy to maintain as your product grows." },
                  { num: "03", title: "Agile teams that ship fast", desc: "We work in focused sprints with clear deliverables, so you see real progress every week — not just status updates." },
                  { num: "04", title: "Enterprise-grade security", desc: "From data encryption to compliance frameworks, we build security into every layer of your application from day one." },
                  { num: "05", title: "End-to-end support from idea to release", desc: "We stay with you through launch and beyond — handling QA, deployment, monitoring, and post-launch iterations." },
                ].map((item, index) => (
                  <details key={index} className="border-b border-[#e5e5e5] group">
                    <summary className="flex items-center justify-between py-[22px] w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center gap-[18px]">
                        <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#7e7e81]">{item.num}</span>
                        <span className="font-['Inter',sans-serif] font-semibold text-[18px] md:text-[22px] text-[#1b1b1b]">{item.title}</span>
                      </div>
                      <img alt="" className="w-[14px] h-[14px] transition-transform group-open:rotate-45" src={imgArrowIcon} />
                    </summary>
                    <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-[#3a3a3a] leading-[1.7] pb-[22px] pl-[33px]">
                      {item.desc}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Our Work Speaks section - hidden for now */}
        <div className="bg-[#090909] content-stretch flex flex-col items-center py-[60px] md:py-[100px] lg:py-[143.556px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] md:gap-[52.889px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full animate-fade-in-up">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[52.166px] text-white">
                  <p>We deliver on time, in days and weeks</p>
                </div>
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[22px] md:text-[32px] lg:text-[50.72px] text-[rgba(255,255,255,0.52)]">
                  <p>—not months.</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col items-start w-full lg:w-[65%] animate-fade-in-up">
                {[
                  { num: "01", text: "Rapid prototyping & architecture setup" },
                  { num: "02", text: "Continuous deployment & fast iteration" },
                  { num: "03", text: "Full engineering team ready on day one" },
                ].map((item, index) => (
                  <div key={index} className={`bg-[#242424] flex items-center justify-between p-[20px] md:p-[30px] w-full faq-item cursor-pointer ${index < 2 ? 'border-b border-[#3a3a3a]' : ''}`}>
                    <div className="flex gap-[15px] items-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#7e7e81] tracking-[1px]">{item.num}</span>
                      <span className="font-['Inter',sans-serif] font-bold text-[14px] md:text-[18px] lg:text-[22px] text-white tracking-[1px]">{item.text}</span>
                    </div>
                    <img alt="" className="w-[15px] h-[15px] shrink-0 ml-4" src={imgArrowUpIcon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="bg-[#090909] content-stretch flex flex-col gap-[0.009px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[1360px] mx-auto pb-[52.889px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full py-[20px] md:py-[30px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[51.959px] text-white">
                  <p>{`What we deliver on `}</p>
                </div>
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[22px] md:text-[32px] lg:text-[51.339px] text-[rgba(255,255,255,0.52)]">
                  <p>Software Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#090909] content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#3f2fee] content-stretch flex flex-col items-center shrink-0 sticky top-0 z-10 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[30px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Web Application Development
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[17px] text-white max-w-[340px]">
                        Create high-quality, scalable web applications with our expert engineering team. We build secure, reliable solutions that help you streamline operations, improve user experience, and grow your business.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-white whitespace-nowrap">
                        <p className="mb-0">Custom Web Applications</p>
                        <p className="mb-0">Enterprise Web Portals</p>
                        <p className="mb-0">Progressive Web Apps (PWA)</p>
                        <p className="mb-0">SaaS Platform Development</p>
                        <p className="mb-0">E-commerce Solutions</p>
                        <p className="mb-0">{`Admin Dashboards & Panels`}</p>
                        <p className="mb-0">Real-time Collaboration Tools</p>
                        <p>Third-party API Integrations</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBrandIdentity} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[26px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[45.156px] text-[#1b1b1b]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Mobile App Development
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[17px] text-[#1b1b1b] max-w-[340px]">
                        Launch and scale your mobile product with dedicated engineering teams built around your needs. We handle everything from architecture to deployment, ensuring fast, efficient delivery and long-term product stability.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-[#1b1b1b] whitespace-nowrap">
                        <p className="mb-0">iOS App Development</p>
                        <p className="mb-0">Android App Development</p>
                        <p className="mb-0">Cross-platform Development (React Native, Flutter)</p>
                        <p className="mb-0">Mobile UI/UX Design</p>
                        <p className="mb-0">App Store Optimization</p>
                        <p className="mb-0">{`Push Notifications & Real-time Features`}</p>
                        <p className="mb-0">Offline Functionality</p>
                        <p>{`App Maintenance & Updates`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgUiUxDesign} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffd500] content-stretch flex flex-col items-center shrink-0 sticky top-[120px] z-30 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[30px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-[#1b1b1b]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Custom Software Solutions
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[16px] text-[#1b1b1b] max-w-[340px]">
                        Improve performance, reduce costs, and enhance stability with our optimization services. We upgrade outdated systems, boost speed, strengthen security, and ensure your software can scale with growing demand.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-[#1b1b1b] whitespace-nowrap">
                        <p className="mb-0">Legacy System Modernization</p>
                        <p className="mb-0">Software Architecture Review</p>
                        <p className="mb-0">Performance Optimization</p>
                        <p className="mb-0">Security Enhancements</p>
                        <p className="mb-0">Code Refactoring</p>
                        <p className="mb-0">Database Optimization</p>
                        <p className="mb-0">Cloud Migration</p>
                        <p>Technical Debt Reduction</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgWebDesign} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgSection} />
          </div>
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.556px] items-start justify-center max-w-[1360px] mx-auto pb-[52.889px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="flex items-center justify-center py-[40px] md:py-[80px] lg:py-[100px] w-full">
              <p className="font-[family-name:var(--font-headings)] font-bold leading-[1.1] text-center text-[48px] md:text-[100px] lg:text-[170px] text-white tracking-[0.9444px]">achievements</p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center w-full">
              {[
                { num: "01", label: "20+ Brands", icon: imgGroup2 },
                { num: "02", label: "10+ Years", icon: imgGroup3 },
                { num: "03", label: "100+ Projects", icon: imgGroup4 },
              ].map((item, index) => (
                <div key={index} className="bg-white border-[#e8e7e7] border-r md:border-r-[0.944px] border-b md:border-b-0 flex flex-col justify-between gap-[80px] md:gap-[150px] p-[30px] w-full md:w-[321px]">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] font-bold text-[21px] text-[#b9b9b9] tracking-[1px]">{item.num}</span>
                    <div className="bg-[#3f2fee] rounded-full size-[49px] flex items-center justify-center">
                      <div className="size-[13px] relative" style={{ maskImage: `url('${imgGroup1}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgGroup1}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                        <img alt="" className="w-full h-full" src={item.icon} />
                      </div>
                    </div>
                  </div>
                  <span className="font-['Inter',sans-serif] font-semibold text-[24px] md:text-[29px] text-[#1b1b1b]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] md:gap-[60.454px] items-start max-w-[1360px] mx-auto py-[60px] md:py-[100px] lg:py-[143.556px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[#1b1b1b] text-[28px] md:text-[40px] lg:text-[51.856px]">
                  <p>What Our Clients Say</p>
                </div>
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[51.546px] text-[rgba(41,36,36,0.41)]">
                  <p>We guarantee next success is yours!</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full pb-12">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 md:divide-x md:divide-[#f0f0f0] overflow-x-auto snap-x snap-mandatory scrollbar-thin gap-0">
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Digil</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Sivarsa built our entire platform from scratch — web app, iOS app, everything. Their team delivered fast, iterated constantly, and treated our product like their own. Couldn&apos;t have launched without them.&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Saksham Gupta</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">{`CEO & Founder`}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Santosh</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Sivarsa&apos;s SEO gave us a real boost when we needed it.&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Suresh</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">{`CEO & Founder`}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">GNT</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;With Sivarsa, Our campaigns gained momentum. Real, measurable momentum.&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Ritika</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full flex justify-center py-[40px] md:py-[60px] lg:py-[80px] px-4 md:px-[40px]">
          <div className="relative rounded-[20px] md:rounded-[32px] shrink-0 w-full max-w-[1345px] overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#101010] inset-0" />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgDivLocaCtaContent} />
            </div>
            <div className="relative flex flex-col gap-6 md:gap-8 p-6 md:p-12 lg:p-[72px]">
              <div className="flex items-center gap-2 border border-[rgba(255,255,255,0.15)] rounded-[100px] px-4 py-1.5 w-fit">
                <img alt="" className="size-[16px] object-contain" src={imgImageCtaSeatImg} />
                <span className="font-['Inter',sans-serif] font-medium text-[12px] md:text-[12.3px] text-white whitespace-nowrap">Only 4 seats per month</span>
              </div>
              <p className="font-['Inter',sans-serif] font-semibold text-[22px] md:text-[28px] lg:text-[35px] text-white tracking-[0.4px] max-w-[700px] leading-[1.35]">
                Try Our Rapid Prototyping Service Only $1000 for One Week Get a clickable prototype and technical blueprint for your software idea in just 7 days.
              </p>
              <Link href="/contact" className="bg-[#ebfe5b] rounded-[100px] px-6 py-3 md:py-3.5 w-fit flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15.6px] text-[#1b1b1b]">Get Started</span>
                <img alt="" className="size-[12px] object-contain" src={imgImageLbFaqIcon} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center pb-[60px] md:pb-[100px] lg:pb-[162.444px] pt-[60px] md:pt-[90.667px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[68px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[32px] md:text-[42px] lg:text-[51.339px]">
                  <p className="mb-0">Frequently asked</p>
                  <p>questions</p>
                </div>
              </div>
            </div>
            <FaqAccordion
              faqs={[
                { question: "How long does it take to build software?", answer: "Timelines depend on scope and complexity. A simple MVP can take 4–8 weeks, while a full-featured product may take 3–6 months. We'll give you a clear timeline during our initial strategy call." },
                { question: "How can a great mobile design benefit startups or small businesses?", answer: "A polished, intuitive mobile design builds credibility, improves user retention, and drives conversions — giving startups a competitive edge even against larger players." },
                { question: "Do you customize the design for my specific business needs and target audience?", answer: "Absolutely. Every project starts with deep discovery into your business goals, user personas, and market context. We tailor every design decision to your specific needs." },
                { question: "How do you ensure that the mobile design aligns with my app's development process?", answer: "Our designers work hand-in-hand with developers from day one. We use design systems and component libraries that translate seamlessly into code, ensuring pixel-perfect implementation." },
                { question: "Can you redesign my existing app for better user engagement?", answer: "Yes. We audit your current app's UX, identify friction points through analytics and user feedback, and deliver a redesign that measurably improves engagement and retention." },
                { question: "How do you incorporate feedback into the design process?", answer: "We follow an iterative process with regular review cycles. You'll see progress at every stage and your feedback is incorporated before moving to the next phase." },
                { question: "How much does it cost to design a mobile app?", answer: "Costs vary based on complexity, number of screens, and features. We offer flexible pricing models — from fixed-price projects to monthly retainers. Book a call for a custom quote." },
              ]}
              className="flex flex-col items-start relative shrink-0 w-full max-w-[860px]"
            />
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
