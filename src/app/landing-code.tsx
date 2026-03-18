"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";
import { contactInfo } from "@/lib/constants";

// Base path for GitHub Pages deployment (must match next.config.ts basePath)
const BASE_PATH = "/sivarsa";

// Hero & Background Images
const imgHero = `${BASE_PATH}/assets/hero-bg.png`;
const imgPattern2 = `${BASE_PATH}/assets/pattern-dots.png`;
const imgStars1 = `${BASE_PATH}/assets/stars-bg.png`;
const imgPurpleComposition21 = `${BASE_PATH}/assets/hero-illustration.png`;


// Service Cards Images (exact from Figma)
const imgServiceBg = `${BASE_PATH}/assets/dc3140d62f005c65ceea0d4f7a9e21036b94120f.png`;
const imgSoftwarePhone = `${BASE_PATH}/assets/services-hero.png`;
const imgTalentGradient = `${BASE_PATH}/assets/f657c8ff034766324c5abae459823eddf4e19097.png`;
const imgTalentScreen = `${BASE_PATH}/assets/56991259c51079145aeec6fa065d56ab81cea98a.png`;
const imgTalentPhoneFrame = `${BASE_PATH}/assets/3d9a04b34d3338b47f17681f8aa0bb08ae8a1bd3.png`;
const imgGrowthHandPhone = `${BASE_PATH}/assets/da34926d43ac1a86f9b6b48d08df15acf02952fd.png`;
const imgTalentMask = `${BASE_PATH}/assets/a357f30dca7ba5b0ef31535a2e6d9c7b2f8b4894.svg`;
const imgPhoneMask = `${BASE_PATH}/assets/4832a9c48047adb56c0896854f712d6646d58fb9.svg`;

// Case Study Images
const imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E3 = `${BASE_PATH}/assets/case-study-1.png`;
const imgImage25 = `${BASE_PATH}/assets/case-study-2.png`;

// Testimonial Images
const imgSilver1 = `${BASE_PATH}/assets/testimonial-bg.png`;
const img547911Af409Cc82D8Ecb150Dddafe6Cf1 = `${BASE_PATH}/assets/testimonial-avatar.png`;

// Contact Section Images
const imgDiv = `${BASE_PATH}/assets/contact-card-1.png`;
const imgDiv1 = `${BASE_PATH}/assets/contact-illustration-1.png`;
const imgDiv2 = `${BASE_PATH}/assets/contact-illustration-2.png`;

// Button & Arrow Icons
const imgBtnIcon = `${BASE_PATH}/assets/btn-icon.png`;
const imgArrowUpIcon = `${BASE_PATH}/assets/arrow-up.png`;
const imgArrowIcon = `${BASE_PATH}/assets/arrow-icon.png`;
const imgBtnArrowIcon = `${BASE_PATH}/assets/arrow-btn.png`;

// Feature Images
const imgWebDesign = `${BASE_PATH}/assets/feature-software.png`;
const imgUiUxDesign = `${BASE_PATH}/assets/feature-hr.png`;
const imgWebDesign1 = `${BASE_PATH}/assets/feature-marketing.png`;

// Achievements Section
const imgSection = `${BASE_PATH}/assets/achievements-bg.png`;

// Contact Icons
const imgWhatsappIcon = `${BASE_PATH}/assets/whatsapp-icon.png`;

// SVG Assets
const imgPattern1 = `${BASE_PATH}/assets/pattern-mask.svg`;
const imgEllipse1 = `${BASE_PATH}/assets/ellipse-decoration.svg`;
const imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E2 = `${BASE_PATH}/assets/gradient-mesh.svg`;
const imgSilver = `${BASE_PATH}/assets/silver-gradient.svg`;
const imgGroup1 = `${BASE_PATH}/assets/check-icon-1.svg`;
const imgGroup2 = `${BASE_PATH}/assets/check-icon-2.svg`;
const imgGroup3 = `${BASE_PATH}/assets/check-icon-3.svg`;
const imgGroup4 = `${BASE_PATH}/assets/check-icon-4.svg`;

export default function Landing() {
  // Initialize scroll animations on mount
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-black relative w-full">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="relative shrink-0 w-full overflow-hidden">
            {/* Full-width background image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHero} />
            </div>
            {/* Full-width overlays */}
            <div className="absolute inset-0 opacity-35 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgPattern2} />
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(110.159deg, rgb(0, 0, 0) 21.698%, rgba(0, 0, 0, 0.26) 84.415%)" }} />
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
            </div>
            <Header />
            {/* Content wrapper constrained to max-width */}
            <div className="relative w-full min-h-[500px] lg:min-h-[750px]">
              <div className="absolute h-[200px] md:h-[450px] lg:h-[643px] right-[-20px] md:right-[calc(50%-680px)] lg:right-[calc(50%-720px)] top-0 md:top-[16px] w-[200px] md:w-[400px] lg:w-[588px] hero-image animate-float opacity-40 md:opacity-100">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Hero illustration" className="absolute h-full left-0 max-w-none top-0 w-[109.35%]" src={imgPurpleComposition21} />
                </div>
              </div>
              <div className="absolute right-[-150px] md:right-auto md:left-[40%] lg:left-[calc(50%+200px)] size-[400px] md:size-[850px] bottom-[-100px] md:bottom-auto md:top-[428.84px] opacity-40 md:opacity-100">
                <div className="absolute inset-[-37.62%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>
              <div className="relative content-stretch flex flex-col gap-[40px] lg:gap-[80px] items-start max-w-[1360px] mx-auto px-4 lg:px-0 pt-[40px] lg:pt-[129px] w-full">
                <div className="content-stretch flex flex-col gap-[20px] md:gap-[37px] items-start relative shrink-0 w-full lg:w-[762px] hero-content">
                  <p className="bg-clip-text font-bold leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[56px] lg:text-[82px] uppercase w-full lg:w-[786.107px] animate-fade-in-up" style={{ fontFamily: "var(--font-headings)", backgroundImage: "linear-gradient(-38.5682deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                    Your Growth Partner From Idea to Impact
                  </p>
                  <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[22px] text-white/50 w-full max-w-[544px] animate-fade-in-up delay-200">{`We build the software, attract the customers,  and hire the talent—so you can focus on building your business.`}</p>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full md:w-auto animate-fade-in-up delay-300">
                    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[31.6px] items-center justify-center relative shrink-0 w-full sm:w-auto">
                      <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[270.089px] btn-magnetic shine-effect cursor-pointer hover:shadow-xl flex items-center justify-center gap-[8px]">
                        <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                          Book a Strategy Call
                        </span>
                        <img alt="" className="w-[14px] h-[14px]" src={imgArrowIcon} />
                      </Link>
                      <Link href="/services/software-development" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[210.089px] btn-magnetic shine-effect cursor-pointer hover:shadow-xl flex items-center justify-center">
                        <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                          Explore services
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Schibsted_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] lg:text-[20px] text-center md:text-left text-white w-full lg:w-[677.504px]">
                    <p className="leading-[normal]">47+ Companies Scaled | 200+ Projects Delivered | 95% Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Cards Section - Exact Figma Design */}
            <div className="relative z-10 py-[40px] md:py-[68px] w-full px-4 md:px-8">
          <div className="w-full max-w-[1285px] mx-auto">
            {/* Mobile: stacked cards */}
            <div className="flex flex-col gap-[12px] md:hidden scroll-reveal scroll-scale-up">
              {/* Software Development Card */}
              <Link href="/services/software-development" className="relative bg-[#a0a9ae] h-[350px] overflow-hidden w-full group cursor-pointer rounded-[12px]">
                <div className="absolute font-['Inter',sans-serif] font-bold left-[19px] text-[20px] text-black top-[30px] tracking-[-1px] z-10">
                  <p className="leading-[1.2]">SOFTWARE DEVELOPMENT</p>
                </div>
                <div className="absolute w-[60%] h-[85%] left-[20%] top-[18%]" style={{ filter: 'drop-shadow(8px -7px 17px rgba(0,0,0,0.35))' }}>
                  <img alt="" className="w-full h-full object-contain" src={imgSoftwarePhone} />
                </div>
              </Link>

              {/* Talent Card */}
              <Link href="/services/staffing-solutions" className="relative bg-[#17614a] h-[350px] overflow-hidden w-full group cursor-pointer rounded-[12px]">
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[20px] text-white top-[30px] tracking-[-1px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">TALENT</p>
                </div>
                {/* Simplified phone display for mobile */}
                <div className="absolute w-[52%] h-[75%] left-[24%] top-[20%] rounded-[24px] overflow-hidden border-[3px] border-black/20 bg-white shadow-2xl">
                  <img alt="" className="w-full h-full object-cover object-top" src={imgTalentScreen} />
                </div>
              </Link>

              {/* Growth Card */}
              <Link href="/services/growth-marketing" className="relative bg-[#6f2fb8] h-[350px] overflow-hidden w-full group cursor-pointer rounded-[12px]">
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[20px] text-white top-[30px] tracking-[-1px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">GROWTH</p>
                </div>
                <div className="absolute h-[80%] left-[10%] top-[16%] w-[80%]">
                  <img alt="" className="w-full h-full object-contain" src={imgGrowthHandPhone} />
                </div>
              </Link>
            </div>

            {/* Desktop: side-by-side cards */}
            <div className="relative w-full hidden md:block h-[550px] lg:h-[723px] scroll-reveal scroll-scale-up overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServiceBg} />
              </div>

              {/* Software Development Card */}
              <Link href="/services/software-development" className="absolute bg-[#a0a9ae] h-full left-0 overflow-hidden w-1/3 group cursor-pointer">
                <div className="absolute font-['Inter',sans-serif] font-bold left-[19px] text-[20px] lg:text-[30px] text-black top-[90px] lg:top-[107px] tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">SOFTWARE DEVELOPMENT</p>
                </div>
                <div className="absolute w-[172%] h-[102%] left-[-36%] top-[15.6%] transition-transform duration-500 group-hover:scale-105" style={{ filter: 'drop-shadow(8px -7px 17px rgba(0,0,0,0.35))' }}>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0 object-contain" src={imgSoftwarePhone} />
                </div>
              </Link>

              {/* Talent Card */}
              <Link href="/services/staffing-solutions" className="absolute bg-[#17614a] h-full left-[33.33%] overflow-hidden w-1/3 group cursor-pointer">
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[20px] lg:text-[30px] text-white top-[90px] lg:top-[107px] tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">TALENT</p>
                </div>
                <div className="absolute h-[86.4%] left-[14.3%] top-[28.4%] w-[71.5%] transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute flex h-[103.6%] items-center justify-center left-[-27%] top-[2.2%] w-[163%]">
                    <div className="-rotate-90 flex-none">
                      <div className="h-full w-full relative" style={{ maskImage: `url('${imgTalentMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgTalentMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTalentGradient} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[95.6%] left-[5.5%] top-[2.2%] w-[90.8%] rounded-[15px] overflow-hidden" style={{ maskImage: `url('${imgTalentMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgTalentMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                    <img alt="" className="absolute h-[132%] left-[-139%] max-w-none top-[-16%] w-[377%] object-cover" src={imgTalentScreen} />
                  </div>
                  <div className="absolute inset-0" style={{ maskImage: `url('${imgPhoneMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgPhoneMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTalentPhoneFrame} />
                  </div>
                </div>
              </Link>

              {/* Growth Card */}
              <Link href="/services/growth-marketing" className="absolute bg-[#6f2fb8] h-full left-[66.66%] overflow-hidden w-1/3 group cursor-pointer">
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[20px] lg:text-[30px] text-white top-[90px] lg:top-[107px] tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">GROWTH</p>
                </div>
                <div className="absolute h-[100.4%] left-[-4.4%] top-[19.8%] w-[120%] transition-transform duration-500 group-hover:scale-105">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrowthHandPhone} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="bg-black content-stretch flex flex-col items-center overflow-clip pb-[60px] md:pb-[132px] pt-[60px] md:pt-[101px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[66px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full scroll-reveal scroll-fade-up">
              <div className="content-stretch flex flex-col items-start pb-[0.954px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start mb-[-0.954px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] lg:text-[51.03px] text-white">
                      <p>Why Growing Companies Choose Sivarsa</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.954px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic opacity-60 relative shrink-0 text-[22px] md:text-[32px] lg:text-[47.222px] text-white w-full">
                      <p>{`We are more than a service provider`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile: vertical stacked cards */}
            <div className="flex flex-col md:hidden gap-[40px] w-full">
              {[
                { title1: "All-in-one", title2: "Solution", desc: "No need to juggle multiple vendors. Get software, marketing, and talent under one roof with seamless coordination.", img: imgDiv },
                { title1: "Proven", title2: "Expertise", desc: "47+ companies scaled, 200+ projects delivered, and a 95% client retention rate. We deliver what we promise.", img: imgDiv1 },
                { title1: "Client Centric", title2: "Approach", desc: "Every Business is unique. We Offer Customizations perfectly with your Goals", img: imgDiv2 },
                { title1: "Transparent &", title2: "Collaborative", desc: "Every Business is unique. We Offer Customizations perfectly with your Goals", img: imgDiv },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[8px]">
                    <div className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[1.1] text-[36px] text-white tracking-[-2px]">
                      <p className="mb-0">{item.title1}</p>
                      <p>{item.title2}</p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[14px] text-white">{item.desc}</p>
                  </div>
                  <div className="h-[200px] overflow-hidden rounded-[20px]">
                    <img alt={`${item.title1} ${item.title2}`} className="w-full h-full object-cover" src={item.img} />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: stacked cards */}
            <div className="hidden md:flex flex-col gap-[40px] md:gap-[66px] w-full">
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] scroll-reveal scroll-fade-up stagger-1">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[48px] lg:text-[59px] text-white tracking-[-2px]">
                    <p className="mb-0">All-in-one</p>
                    <p>Solution</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[281.169px]">
                  <p>No need to juggle multiple vendors. Get software, marketing, and talent under one roof with seamless coordination.</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="All-in-one Solution" className="w-full h-full object-cover" src={imgDiv} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] scroll-reveal scroll-fade-up stagger-2">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[22px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[48px] lg:text-[60px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Proven `}</p>
                    <p>Expertise</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[266.403px]">
                  <p>47+ companies scaled, 200+ projects delivered, and a 95% client retention rate. We deliver what we promise.</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Proven Expertise" className="w-full h-full object-cover" src={imgDiv1} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] scroll-reveal scroll-fade-up stagger-3">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[270.919px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[48px] lg:text-[60px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Client `}</p>
                    <p className="mb-0">Centric</p>
                    <p>Approach</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full">
                  <p>{`Every Business is unique. We Offer Customizations perfectly with your Goals`}</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Client Centric Approach" className="w-full h-full object-cover" src={imgDiv2} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] scroll-reveal scroll-fade-up stagger-4">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[42px] lg:text-[52px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Transparent &`}</p>
                    <p>Collaborative</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[281.169px]">
                  <p className="mb-0">{`Every Business is unique. We Offer Customizations perfectly with your Goals`}</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Transparent & Collaborative" className="w-full h-full object-cover" src={imgDiv} />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center overflow-clip py-[60px] md:py-[100px] lg:py-[147.333px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.565px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col md:flex-row md:h-[137.502px] items-start md:items-end justify-between gap-6 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[40px] lg:text-[52.372px]">
                      <p>Turn your ideas into impactful</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[26px] md:text-[38px] lg:text-[50.926px] text-[rgba(41,36,36,0.41)]">
                      <p>solutions like them!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center px-[20px] md:px-[26.444px] py-[12px] md:py-[15.111px] relative rounded-[94.444px] shrink-0" href="/contact">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.875px] text-left text-white whitespace-nowrap">
                      <p className="leading-[18.889px]">Start your project</p>
                    </div>
                  </div>
                  <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBtnIcon} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[rgba(116,39,255,0.5)] rounded-[25px] w-full max-w-[1276px] scroll-reveal scroll-fade-up shine-effect p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[16px] md:text-[20px] text-black">SANTOSH JEWELLERS</p>
                  <h3 className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[20px] md:text-[26px] lg:text-[30px] text-black leading-[1.3]">High cost per acquisition (CPA), minimal repeat purchases due to lack of robust email strategy.</h3>
                  <div className="flex flex-col gap-2">
                    <span className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[40px] text-black">&ldquo;</span>
                    <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[14px] md:text-[18px] lg:text-[20px] text-black leading-[1.4] pl-4">Our approach integrates SEO and ROI-focused paid search to boost visibility, leverages display and programmatic ads for timely retargeting, and uses segmented, automated email campaigns to drive repeat purchases.</p>
                  </div>
                </div>
                {/* Right Stats */}
                <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[400px] xl:w-[486px]">
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">300%</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">increase in organic traffic over 6 months</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">40%</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">reduction in bounce rates via optimized landing pages</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">2X</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">increase in monthly bookings, leading to a significant revenue boost</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[rgba(116,39,255,0.5)] rounded-[25px] w-full max-w-[1276px] scroll-reveal scroll-fade-up shine-effect stagger-2 p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[16px] md:text-[20px] text-black">SANTOSH JEWELLERS</p>
                  <h3 className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[20px] md:text-[26px] lg:text-[30px] text-black leading-[1.3]">High cost per acquisition (CPA), minimal repeat purchases due to lack of robust email strategy.</h3>
                  <div className="flex flex-col gap-2">
                    <span className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[40px] text-black">&ldquo;</span>
                    <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[14px] md:text-[18px] lg:text-[20px] text-black leading-[1.4] pl-4">Our approach integrates SEO and ROI-focused paid search to boost visibility, leverages display and programmatic ads for timely retargeting, and uses segmented, automated email campaigns to drive repeat purchases.</p>
                  </div>
                </div>
                {/* Right Stats */}
                <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[400px] xl:w-[486px]">
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">300%</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">increase in organic traffic over 6 months</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">40%</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">reduction in bounce rates via optimized landing pages</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] p-4 md:p-6 flex items-center gap-4">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] lg:text-[60px] text-black">2X</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] md:text-[18px] lg:text-[22px] text-black leading-[1.3]">increase in monthly bookings, leading to a significant revenue boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#090909] content-stretch flex flex-col items-center py-[60px] md:py-[100px] lg:py-[143.556px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] md:gap-[52.889px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="w-full">
              <h2 className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[26px] md:text-[38px] lg:text-[52px] text-white">
                We deliver on time, in days and weeks
              </h2>
              <p className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[50px] text-white/50">
                —not months.
              </p>
            </div>
            <div className="w-full lg:max-w-[calc(100%-455px)] scroll-reveal scroll-fade-up">
              {[
                { num: "01", text: "Detailed requirements document" },
                { num: "02", text: "Technical feasibility assessment" },
                { num: "03", text: "Growth opportunity analysis" },
              ].map((item, index) => (
                <div key={index} className={`bg-[#242424] flex items-center justify-between p-[20px] md:p-[30px] w-full faq-item cursor-pointer ${index < 2 ? 'border-b border-[#3a3a3a]' : ''}`}>
                  <div className="flex gap-[15px] items-center">
                    <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#7e7e81] tracking-[1px]">{item.num}</span>
                    <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] lg:text-[22px] text-white tracking-[1px]">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="services" className="bg-[#090909] flex flex-col items-center relative w-full scroll-mt-20">
          <div className="flex flex-col items-start max-w-[1360px] mx-auto pb-[30px] md:pb-[52.889px] px-4 md:px-[37.778px] relative w-full">
            <div className="flex items-end relative w-full">
              <div className="flex flex-col items-start pb-[0.944px] relative w-full">
                <div className="flex flex-col items-start mb-[-0.944px] relative w-full">
                  <div className="flex flex-col items-start pb-[0.756px] relative w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.3] not-italic relative text-[26px] md:text-[38px] lg:text-[52px] text-white">
                      <p>From startup to enterprise, grow your business</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start mb-[-0.944px] relative w-full">
                  <div className="flex flex-col items-start pb-[0.756px] relative w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative text-[24px] md:text-[36px] lg:text-[51.339px] text-[rgba(255,255,255,0.52)]">
                      <p>with Sivarsa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#090909] flex flex-col items-center relative w-full">
              <div className="bg-[#3f2fee] flex flex-col items-center sticky top-0 z-10 w-full">
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] mx-auto relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[1.3] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[45px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p>Software Development</p>
                    </div>
                    <div className="relative shrink-0 w-full lg:w-[574.43px]">
                      <div className="content-stretch flex flex-col gap-[20px] md:gap-[30.222px] items-start">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.5] not-italic relative shrink-0 text-[15px] md:text-[17px] text-white w-full max-w-[358.889px]">
                            <p>Build scalable, user-friendly software that solves real problems and drives business growth.</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <Link className="bg-white content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center px-[20px] md:px-[26.444px] py-[12px] md:py-[15.111px] relative rounded-[94.444px] shrink-0 btn-magnetic shine-effect" href="/services/software-development">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15.111px] text-left whitespace-nowrap">
                                <p className="leading-[18.889px]">{` Start Your Project `}</p>
                              </div>
                            </div>
                            <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBtnArrowIcon} />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="hidden lg:flex absolute content-stretch flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[14.167px] text-white whitespace-nowrap">
                              <p className="mb-0">Web Application Development</p>
                              <p className="mb-0">Website Development</p>
                              <p className="mb-0">Mobile App Development</p>
                              <p className="mb-0">Custom Software Solutions</p>
                              <p className="mb-0">API Integration</p>
                              <p className="mb-0">Cloud Solutions</p>
                              <p className="mb-0">MVP Development</p>
                              <p>{`Maintenance & Support`}</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[77px] shrink-0 w-[141px]" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute content-stretch flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgWebDesign} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center sticky top-[60px] z-20 w-full">
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] mx-auto relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[1.3] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[45px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p>{`Staffing Solutions`}</p>
                    </div>
                    <div className="relative shrink-0 w-full lg:w-[597.248px]">
                      <div className="content-stretch flex flex-col gap-[20px] md:gap-[30.222px] items-start">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] md:text-[16.867px] w-full max-w-[358.889px]">
                            <p>End-to-end workforce solutions — from IT recruitment to gig workforce deployment. We deliver the right people, right when you need them.</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <Link className="bg-[#1b1b1b] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center px-[20px] md:px-[26.444px] py-[12px] md:py-[15.111px] relative rounded-[94.444px] shrink-0 btn-magnetic shine-effect" href="/services/staffing-solutions">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.111px] text-left text-white whitespace-nowrap">
                                <p className="leading-[18.889px]">Hire Smarter</p>
                              </div>
                            </div>
                            <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBtnIcon} />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="hidden lg:flex absolute content-stretch flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[14.056px] whitespace-nowrap">
                            <p className="mb-0">Talent Acquisition</p>
                            <p className="mb-0">Recruitment Strategy</p>
                            <p className="mb-0">Employer Branding</p>
                            <p className="mb-0">Employee Development</p>
                            <p className="mb-0">Performance Management</p>
                            <p className="mb-0">Retention Programs</p>
                            <p>HR Analytics</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="h-[102px] shrink-0 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute content-stretch flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgUiUxDesign} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffd500] flex flex-col items-center sticky top-[120px] z-30 w-full">
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] mx-auto relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-bold justify-center leading-[1.3] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[45px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p>Growth Marketing</p>
                    </div>
                    <div className="relative shrink-0 w-full lg:w-[599.958px]">
                      <div className="content-stretch flex flex-col gap-[20px] md:gap-[30.222px] items-start">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] md:text-[16.203px] w-full max-w-[358.889px]">
                            <p>Acquire more customers and scale faster. Our data-driven marketing strategies turn traffic into revenue and experiments into growth</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <a className="bg-[#1b1b1b] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center px-[20px] md:px-[26.444px] py-[12px] md:py-[15.111px] relative rounded-[94.444px] shrink-0 btn-magnetic shine-effect" href="/services/growth-marketing">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.639px] text-left text-white whitespace-nowrap">
                                <p className="leading-[18.889px]">Start Growing</p>
                              </div>
                            </div>
                            <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBtnIcon} />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="hidden lg:flex absolute content-stretch flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[13.613px] whitespace-nowrap">
                            <p className="mb-0">{`SEO & Content Marketing`}</p>
                            <p className="mb-0">Paid Advertising (PPC)</p>
                            <p className="mb-0">Conversion Optimization</p>
                            <p className="mb-0">Email Marketing</p>
                            <p className="mb-0">Social Media Marketing</p>
                            <p className="mb-0">{`Analytics & Reporting`}</p>
                            <p>Marketing Automation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute content-stretch flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 overflow-hidden">
                          <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgWebDesign} />
                        </div>
                        <div className="absolute inset-0 overflow-hidden">
                          <img alt="" className="absolute h-[122.33%] left-[-34.74%] max-w-none top-[-13.3%] w-[147.97%]" src={imgWebDesign1} />
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
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.556px] items-start justify-center max-w-[1360px] mx-auto pb-[30px] md:pb-[52.889px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="min-h-[150px] md:h-[265.389px] relative shrink-0 w-full flex items-center justify-center">
              <div className="content-stretch flex items-center justify-center w-full">
                <div className="content-stretch flex flex-col items-center relative shrink-0">
                  <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1] not-italic relative shrink-0 text-[48px] md:text-[100px] lg:text-[170px] text-white tracking-[0.9444px] text-center">
                    <p>achievements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center w-full">
              {[
                { num: "01", label: "20+ Brands" },
                { num: "02", label: "10+ Years" },
                { num: "03", label: "100+ Projects" },
              ].map((item, index) => (
                <div key={index} className="bg-white border-[#e8e7e7] border-b md:border-b-0 md:border-r last:border-r-0 flex flex-col justify-between gap-[80px] md:gap-[150px] p-[30px] w-full md:w-[321px] scroll-reveal scroll-fade-up">
                  <div className="flex items-center">
                    <span className="font-['Inter',sans-serif] font-bold text-[21px] text-[#b9b9b9] tracking-[1px]">{item.num}</span>
                  </div>
                  <span className="font-['Inter',sans-serif] font-semibold text-[24px] md:text-[29px] text-[#1b1b1b]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[60.454px] items-start max-w-[1360px] mx-auto py-[60px] md:py-[100px] lg:py-[143.556px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[40px] lg:text-[51.856px]">
                      <p>What Our Clients Say</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[51.546px] text-[rgba(41,36,36,0.41)]">
                      <p>We guarantee next success is yours!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-full pb-6 md:pb-12">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 md:divide-x md:divide-[#f0f0f0] overflow-x-auto snap-x snap-mandatory scrollbar-thin gap-0">
                {/* Testimonial Card 1 */}
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Digil</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Working with Sivarsa completely changed how we approach hiring. They helped us bring in the right talent quickly, which was exactly what we needed during a crucial phase&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Saksham Gupta</p>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO & Founder</p>
                  </div>
                </div>
                {/* Testimonial Card 2 */}
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Santosh</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Sivarsa&apos;s SEO gave us a real boost when we needed it.&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Suresh</p>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO & Founder</p>
                  </div>
                </div>
                {/* Testimonial Card 3 */}
                <div className="p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[350px] min-w-[85vw] md:min-w-0 snap-start">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">GNT</p>
                  <div className="flex-1 py-8">
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;With Sivarsa, Our campaigns gained momentum. Real, measurable momentum.&rdquo;</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Ritika</p>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center pb-[60px] md:pb-[100px] lg:pb-[162.444px] pt-[60px] md:pt-[90.667px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[68px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.652px] relative shrink-0 w-full">
                <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[32px] md:text-[42px] lg:text-[51.339px]">
                  <p className="mb-0">Frequently asked</p>
                  <p>questions</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 relative shrink-0 w-full">
              <FaqAccordion />
              <div className="hidden lg:flex bg-[#1b1b1b] content-stretch flex-[1_0_0] flex-col items-start max-w-[316.3888854980469px] min-h-px min-w-px p-[30.222px] sticky top-0">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[58.556px]">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full size-[58.556px]" />
                </div>
                <div className="content-stretch flex flex-col items-start pb-[26.444px] pt-[14.436px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[26.35px] not-italic relative shrink-0 text-[17px] text-white w-full whitespace-pre-wrap">
                      <p className="mb-0">We are Sivarsa. Don’t</p>
                      <p className="mb-0">hesitate to reach out to us</p>
                      <p className="mb-0">anytime – I’m here to answer all</p>
                      <p>your questions!</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <a className="bg-[#ebfe5b] content-stretch cursor-pointer flex gap-[9.444px] isolate items-start justify-center max-w-[197.46444702148438px] overflow-clip pb-[15.111px] pt-[14.573px] px-[26.444px] relative rounded-[94.444px] shrink-0 w-full btn-magnetic shine-effect" href={`https://wa.me/${contactInfo.whatsapp}`}>
                    <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0 z-[2]">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15.938px] text-left whitespace-nowrap">
                        <p className="leading-[26.35px]">Ask Questions</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[22.667px] z-[1]">
                      <div className="max-w-[22.66666603088379px] relative shrink-0 size-[22.667px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWhatsappIcon} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}