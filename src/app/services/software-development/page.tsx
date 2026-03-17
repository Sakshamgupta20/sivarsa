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
    <div className="bg-black relative size-full">
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
            {/* Ellipse decoration (purple patch) */}
            <div className="absolute left-[568.31px] size-[850px] top-[428.84px] pointer-events-none">
              <div className="absolute inset-[-37.62%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
              </div>
            </div>
            <div className="absolute contents left-0 top-[98px]">
              <div className="absolute contents left-0 top-[98px]">
                <div className="absolute h-[400px] md:h-[600px] lg:h-[800.63px] right-0 lg:left-[752.39px] top-[98px] w-[300px] md:w-[450px] lg:w-[632.5px] hero-image animate-float hidden md:block">
                  <img alt="Software Development Services" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageServicesHeroImg} />
                </div>
              </div>
            </div>
            <div className="relative lg:absolute content-stretch flex flex-col items-start px-4 md:px-8 lg:px-0 lg:left-[76px] pt-[40px] lg:pt-0 lg:top-[219px] w-full lg:w-[1060px] hero-content">
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
        <TrustedByMarquee />
        <div id="services" className="bg-white flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start relative w-full py-[60px] md:py-[100px] px-4 md:px-[40px] scroll-mt-20">
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
        {/* Our Work Speaks section - hidden for now */}
        <div className="bg-[#090909] content-stretch flex flex-col items-center overflow-clip py-[143.556px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[52.889px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full animate-fade-in-up">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[52.166px] text-white">
                      <p className="leading-[68.756px]">We deliver on time, in days and weeks</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] md:text-[32px] lg:text-[50.72px] text-[rgba(255,255,255,0.52)]">
                      <p className="leading-[68.756px]">—not months.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[273.624px] relative shrink-0 w-full">
              <div className="absolute content-stretch flex flex-col items-start left-0 right-[455.22px] top-0 animate-fade-in-up">
                <div className="bg-[#242424] border-[#3a3a3a] border-b-[0.944px] border-solid content-stretch flex items-center justify-between pb-[31.167px] pt-[30.222px] px-[30.222px] relative shrink-0 w-full faq-item cursor-pointer">
                  <div className="content-stretch flex gap-[15.111px] items-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">01</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[22.667px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">{`Rapid prototyping & architecture setup`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[829.22216796875px] relative shrink-0 size-[15.111px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowUpIcon} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] border-[#3a3a3a] border-b-[0.944px] border-solid content-stretch flex items-center justify-between pb-[31.167px] pt-[30.222px] px-[30.222px] relative shrink-0 w-full faq-item cursor-pointer">
                  <div className="content-stretch flex gap-[15.111px] items-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">02</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[22.135px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">{`Continuous deployment & fast iteration`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[829.22216796875px] relative shrink-0 size-[15.111px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowUpIcon} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center justify-between p-[30.222px] relative shrink-0 w-full faq-item cursor-pointer">
                  <div className="content-stretch flex gap-[15.111px] items-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[14.993px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">03</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[21.427px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">Full engineering team ready on day one</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[829.22216796875px] relative shrink-0 size-[15.111px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowUpIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="bg-[#090909] content-stretch flex flex-col gap-[0.009px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[1360px] pb-[52.889px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[51.959px] text-white">
                      <p className="leading-[68.756px]">{`What we deliver on `}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] md:text-[32px] lg:text-[51.339px] text-[rgba(255,255,255,0.52)]">
                      <p className="leading-[68.756px]">Software Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#090909] content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#3f2fee] content-stretch flex flex-col items-center shrink-0 sticky top-0 z-10 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[30.779px] items-start left-[52.89px] top-[51.94px] animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[44.979px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p className="leading-[54.4px]">Web Application Development</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[574.43px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[11.806px] relative shrink-0">
                          <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white w-[331.988px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Create high-quality, scalable web applications with our expert engineering team. We build secure, reliable solutions that help you streamline operations, improve user experience, and grow your business.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[14.167px] text-white whitespace-nowrap">
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
                        <div className="h-[77px] shrink-0 w-[141px]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px] animate-fade-in-right">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full hover-scale transition-transform duration-300">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgBrandIdentity} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[52.89px] top-[51.94px] w-[597.248px] animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[45.156px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p className="leading-[54.4px]">Mobile App Development</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[597.248px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[7.82px] relative shrink-0">
                          <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.867px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Launch and scale your mobile product with dedicated engineering teams built around your needs. We handle everything from architecture to deployment, ensuring fast, efficient delivery and long-term product stability.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[14.056px] whitespace-nowrap">
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
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px] animate-fade-in-right">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full hover-scale transition-transform duration-300">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgUiUxDesign} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffd500] content-stretch flex flex-col items-center shrink-0 sticky top-[120px] z-30 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[30.779px] items-start left-[52.89px] top-[51.94px] animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[44.979px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p className="leading-[54.4px]">Custom Software Solutions</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[599.958px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[2.909px] relative shrink-0">
                          <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.203px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Improve performance, reduce costs, and enhance stability with our optimization services. We upgrade outdated systems, boost speed, strengthen security, and ensure your software can scale with growing demand.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[13.613px] whitespace-nowrap">
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
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px] animate-fade-in-right">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full hover-scale transition-transform duration-300">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgWebDesign} />
                      </div>
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
          <div className="content-stretch flex flex-col gap-[75.556px] items-start justify-center max-w-[1360px] mx-auto pb-[52.889px] px-[37.778px] relative shrink-0 w-full">
            <div className="h-[265.389px] relative shrink-0 w-full">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-0.47px)] top-[calc(50%+0.37px)] w-[1317.5px]">
                <div className="content-stretch flex flex-col items-start min-w-[1171.2149658203125px] pb-[0.756px] relative shrink-0">
                  <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] md:text-[100px] lg:text-[170px] text-[color:var(--color\/white\/solid,white)] tracking-[0.9444px]">
                    <p className="leading-[188.7px]">achievements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-center min-h-[337.3744201660156px] relative shrink-0 w-full">
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px]">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.16%_4.17%_4.17%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.534px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">01</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">20+ Brands</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px]">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.16%_4.17%_4.17%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.534px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">02</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start min-w-[259.72222900390625px] pr-[59.972px] relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">10+ Years</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px]">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.16%_4.17%_4.17%_4.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.534px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">03</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">100+ Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[60.454px] items-start max-w-[1360px] py-[143.556px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[40px] lg:text-[51.856px]">
                      <p className="leading-[68.756px]">What Our Clients Say</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[51.546px] text-[rgba(41,36,36,0.41)]">
                      <p className="leading-[68.756px]">We guarantee next success is yours!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-full pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-[#f0f0f0]">
                    <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px]">
                      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">Digil</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[26.265px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[22px] w-[348.5px]">
                          <p className="leading-[37.683px] whitespace-pre-wrap">{`''Sivarsa built our entire platform from scratch — web app, iOS app, everything. Their team delivered fast, iterated constantly, and treated our product like their own. Couldn't have launched without them.''`}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[62.17277908325195px] min-w-px pt-[94.149px] relative">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[22.667px] text-[color:var(--color\/grey\/11,#1b1b1b)] tracking-[0.9444px] whitespace-nowrap">
                                <p className="leading-[31.96px]">Saksham Gupta</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                                <p className="leading-[30.222px]">{`CEO & Founder`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px]">
                      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">Santosh</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[15.933px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[22px] w-[312.611px]">
                          <p className="leading-[37.683px] whitespace-pre-wrap">{`'Sivarsa's SEO gave us a real boost when we needed it.`}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[62.17277908325195px] min-w-px pt-[94.149px] relative">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[22.006px] text-[color:var(--color\/grey\/11,#1b1b1b)] tracking-[0.9444px] whitespace-nowrap">
                                <p className="leading-[31.96px]">Suresh</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                                <p className="leading-[30.222px]">{`CEO & Founder`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px]">
                      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">GNT</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[14.733px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Segoe_UI:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[0px] w-[318.278px]">
                          <p className="font-['Inter',sans-serif] font-semibold text-[22px] whitespace-pre-wrap">
                            <span className="leading-[37.683px] text-[#7e7e81]">{`''`}</span>
                            <span className="leading-[37.683px]">
                              {`With Sivarsa, Our campaigns gained momentum. `}
                              <br aria-hidden="true" />
                              {` Real, measurable momentum.`}
                            </span>
                            <span className="leading-[37.683px] text-[#7e7e81]">{`''`}</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[62.17277908325195px] min-w-px pt-[94.149px] relative">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[22.006px] text-[color:var(--color\/grey\/11,#1b1b1b)] tracking-[0.9444px] whitespace-nowrap">
                                <p className="leading-[31.96px]">Ritika</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                                <p className="leading-[30.222px]">CEO</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full flex justify-center py-[60px] md:py-[80px] px-4 md:px-[40px]">
        <div className="h-[591.18px] relative rounded-[32px] shrink-0 w-full max-w-[1345px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
            <div className="absolute bg-[#101010] inset-0 rounded-[32px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgDivLocaCtaContent} />
          </div>
          <div className="absolute bg-[#ebfe5b] h-[52px] left-[72px] overflow-clip rounded-[100px] top-[467.17px] w-[218.08px]">
            <div className="absolute bg-white h-[116px] left-[-32px] rounded-[282.078px] top-[78px] w-[282.08px]" />
            <div className="absolute left-[178.08px] overflow-clip size-[12px] top-[20px]">
              <div className="absolute content-stretch flex h-[12px] items-start left-0 pr-[278.078px] top-0 w-[24px]">
                <div className="relative shrink-0 size-[12px]">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                </div>
                <div className="relative shrink-0 size-[12px]">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                </div>
              </div>
            </div>
            <div className="absolute h-[20px] left-[28px] top-[16px] w-[142.08px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[15.6px] top-[9.5px] whitespace-nowrap">
                <p className="leading-[20px]">Get Started</p>
              </div>
            </div>
          </div>
          <div className="absolute font-['Inter',sans-serif] font-semibold left-[72px] not-italic text-[28px] md:text-[35px] text-white top-[122.08px] tracking-[0.4px] w-[700px] leading-[1.35]">
            <p>Try Our Rapid Prototyping Service Only $1000 for One Week Get a clickable prototype and technical blueprint for your software idea in just 7 days.</p>
          </div>
          <div className="absolute border border-[rgba(255,255,255,0.15)] border-solid h-[30.08px] left-[72px] rounded-[100px] top-[72px] w-[191.83px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] left-[36px] not-italic text-[12.3px] text-white top-[13.64px] whitespace-nowrap">
              <p className="leading-[16.9px]">Only 4 seats per month</p>
            </div>
            <div className="absolute left-[12px] size-[16px] top-[6.03px]">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCtaSeatImg} />
            </div>
          </div>
        </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center pb-[60px] md:pb-[100px] lg:pb-[162.444px] pt-[60px] md:pt-[90.667px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[68px] items-start max-w-[1360px] px-4 md:px-[37.778px] relative shrink-0 w-full">
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
