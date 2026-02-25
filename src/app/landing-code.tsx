"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";

// Base path for GitHub Pages deployment (must match next.config.ts basePath)
const BASE_PATH = "/sivarsa";

// Hero & Background Images
const imgHero = `${BASE_PATH}/assets/hero-bg.png`;
const imgPattern2 = `${BASE_PATH}/assets/pattern-dots.png`;
const imgStars1 = `${BASE_PATH}/assets/stars-bg.png`;
const imgPurpleComposition21 = `${BASE_PATH}/assets/hero-illustration.png`;


// Service Cards Images (exact from Figma)
const imgServiceBg = `${BASE_PATH}/assets/dc3140d62f005c65ceea0d4f7a9e21036b94120f.png`;
const imgSoftwarePhone = `${BASE_PATH}/assets/9a7efa8acfadd87d5d9e7947171a84884750e643.png`;
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
const imgBtnArrowIcon = `${BASE_PATH}/assets/arrow-btn.png`;

// Feature Images
const imgWebDesign = `${BASE_PATH}/assets/feature-software.png`;
const imgUiUxDesign = `${BASE_PATH}/assets/feature-hr.png`;
const imgWebDesign1 = `${BASE_PATH}/assets/feature-marketing.png`;

// Achievements Section
const imgSection = `${BASE_PATH}/assets/achievements-bg.png`;

// Contact Icons
const imgArrowIcon = `${BASE_PATH}/assets/arrow-icon.png`;
const imgWhatsappIcon = `${BASE_PATH}/assets/whatsapp-icon.png`;
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;

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
    <div className="bg-black relative size-full">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="min-h-[600px] lg:min-h-[841px] relative shrink-0 w-full max-w-[1440px] mx-auto overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-5.86%] max-w-none top-0 w-[111.73%]" src={imgHero} />
            </div>
            <Header />
            <div className="absolute contents left-0 top-[98px]">
              <div className="absolute contents left-0 top-[98px]">
                <div className="-translate-x-1/2 absolute h-[866px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1438.759px_865.654px] rounded-[20px] top-[90px] w-[1440px]" style={{ maskImage: `url('${imgPattern1}')` }}>
                  <div className="absolute inset-0 opacity-35 overflow-hidden pointer-events-none rounded-[20px]">
                    <img alt="" className="absolute h-[126.85%] left-[-2.29%] max-w-none top-[-2.12%] w-[104.77%]" src={imgPattern2} />
                  </div>
                </div>
                <div className="absolute h-[937.591px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_71.938px] mask-size-[1438.759px_865.654px] rounded-[20px] top-[20px] w-[1438.759px]" style={{ backgroundImage: "linear-gradient(110.159deg, rgb(0, 0, 0) 21.698%, rgba(0, 0, 0, 0.26) 84.415%)", maskImage: `url('${imgPattern1}')` }} />
                <div className="-translate-x-1/2 absolute h-[937.591px] left-[calc(50%-0.62px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_71.938px] mask-size-[1438.759px_865.654px] opacity-60 top-[20px] w-[1438.759px]" style={{ maskImage: `url('${imgPattern1}')` }}>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
                </div>
              </div>
              <div className="absolute h-[300px] md:h-[450px] lg:h-[643px] right-0 lg:left-[716px] top-[80px] md:top-[106px] w-[280px] md:w-[400px] lg:w-[588px] hero-image animate-float hidden md:block">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Hero illustration" className="absolute h-full left-0 max-w-none top-0 w-[109.35%]" src={imgPurpleComposition21} />
                </div>
              </div>
            </div>
            <div className="absolute left-[568.31px] size-[1127.028px] top-[518.84px]">
              <div className="absolute inset-[-37.62%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
              </div>
            </div>
            <div className="relative lg:absolute content-stretch flex flex-col gap-[40px] lg:gap-[80px] items-start px-4 md:px-8 lg:px-0 lg:left-[76px] pt-[40px] lg:pt-0 lg:top-[219px] w-full lg:w-[1060px]">
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[37px] items-start relative shrink-0 w-full lg:w-[762px] hero-content">
                <p className="bg-clip-text font-bold leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[56px] lg:text-[82px] uppercase w-full lg:w-[786.107px] animate-fade-in-up" style={{ fontFamily: "var(--font-headings)", backgroundImage: "linear-gradient(-38.5682deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                  Your Growth Partner From Idea to Impact
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic opacity-70 relative shrink-0 text-[16px] md:text-[18px] lg:text-[22px] text-white w-full max-w-[544px] animate-fade-in-up delay-200">{`We build the software, attract the customers,  and hire the talent—so you can focus on building your business.`}</p>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full md:w-auto animate-fade-in-up delay-300">
                  <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[31.6px] items-center justify-center relative shrink-0 w-full sm:w-auto">
                    <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[270.089px] btn-magnetic shine-effect cursor-pointer hover:shadow-xl flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Book a Strategy Call
                      </span>
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
        </div>
        {/* Service Cards Section - Exact Figma Design */}
        <div className="py-[40px] md:py-[68px] w-full px-4 md:px-8">
          <div className="w-full max-w-[1285px] mx-auto">
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[723px] scroll-reveal scroll-scale-up overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServiceBg} />
              </div>

              {/* Software Development Card */}
              <Link href="/services/software-development" className="absolute bg-[#a0a9ae] h-full left-0 overflow-hidden w-1/3 group cursor-pointer">
                {/* Text label - fixed position matching Figma */}
                <div className="absolute font-['Inter',sans-serif] font-bold left-[19px] text-[12px] md:text-[20px] lg:text-[30px] text-black top-[70px] md:top-[90px] lg:top-[107px] tracking-[-1px] md:tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">SOFTWARE DEVELOPMENT</p>
                </div>
                {/* Phone image with shadow */}
                <div className="absolute w-[172%] h-[102%] left-[-36%] top-[15.6%] transition-transform duration-500 group-hover:scale-105" style={{ filter: 'drop-shadow(8px -7px 17px rgba(0,0,0,0.35))' }}>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0 object-contain" src={imgSoftwarePhone} />
                </div>
              </Link>

              {/* Talent Card */}
              <Link href="/services/staffing-solutions" className="absolute bg-[#17614a] h-full left-[33.33%] overflow-hidden w-1/3 group cursor-pointer">
                {/* Text label - centered, fixed position matching Figma */}
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[12px] md:text-[20px] lg:text-[30px] text-white top-[70px] md:top-[90px] lg:top-[107px] tracking-[-1px] md:tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">TALENT</p>
                </div>
                {/* Phone with content */}
                <div className="absolute h-[86.4%] left-[14.3%] top-[28.4%] w-[71.5%] transition-transform duration-500 group-hover:scale-105">
                  {/* Gradient background with mask */}
                  <div className="absolute flex h-[103.6%] items-center justify-center left-[-27%] top-[2.2%] w-[163%]">
                    <div className="-rotate-90 flex-none">
                      <div className="h-full w-full relative" style={{ maskImage: `url('${imgTalentMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgTalentMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTalentGradient} />
                      </div>
                    </div>
                  </div>
                  {/* Screen content with mask */}
                  <div className="absolute h-[95.6%] left-[5.5%] top-[2.2%] w-[90.8%] rounded-[15px] overflow-hidden" style={{ maskImage: `url('${imgTalentMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgTalentMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                    <img alt="" className="absolute h-[132%] left-[-139%] max-w-none top-[-16%] w-[377%] object-cover" src={imgTalentScreen} />
                  </div>
                  {/* Phone frame */}
                  <div className="absolute inset-0" style={{ maskImage: `url('${imgPhoneMask}')`, maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url('${imgPhoneMask}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTalentPhoneFrame} />
                  </div>
                </div>
              </Link>

              {/* Growth Card */}
              <Link href="/services/growth-marketing" className="absolute bg-[#6f2fb8] h-full left-[66.66%] overflow-hidden w-1/3 group cursor-pointer">
                {/* Text label - centered, fixed position matching Figma */}
                <div className="absolute font-['Inter',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[12px] md:text-[20px] lg:text-[30px] text-white top-[70px] md:top-[90px] lg:top-[107px] tracking-[-1px] md:tracking-[-2px] whitespace-nowrap z-10">
                  <p className="leading-[1.2]">GROWTH</p>
                </div>
                <div className="absolute h-[100.4%] left-[-4.4%] top-[19.8%] w-[120%] transition-transform duration-500 group-hover:scale-105">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrowthHandPhone} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black content-stretch flex flex-col items-center overflow-clip pb-[60px] md:pb-[132px] pt-[60px] md:pt-[101px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[66px] items-start max-w-[1360px] px-4 md:px-[37.778px] relative shrink-0 w-full">
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
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] card-3d scroll-reveal scroll-fade-up stagger-1">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[48px] lg:text-[59px] text-white tracking-[-2px]">
                    <p className="mb-0">All-in-one</p>
                    <p>Solution</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[281.169px]">
                  <p>No need to juggle multiple vendors. Get software, marketing, and talent under one roof with seamless coordination.</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[180px] md:h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="All-in-one Solution" className="w-full h-full object-cover" src={imgDiv} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] card-3d scroll-reveal scroll-fade-up stagger-2">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[22px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[48px] lg:text-[60px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Proven `}</p>
                    <p>Expertise</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[266.403px]">
                  <p>47+ companies scaled, 200+ projects delivered, and a 95% client retention rate. We deliver what we promise.</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[180px] md:h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Proven Expertise" className="w-full h-full object-cover" src={imgDiv1} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] card-3d scroll-reveal scroll-fade-up stagger-3">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[270.919px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[48px] lg:text-[60px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Client `}</p>
                    <p className="mb-0">Centric</p>
                    <p>Approach</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full">
                  <p>{`Every Business is unique. We Offer Customizations perfectly with your Goals`}</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[180px] md:h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Client Centric Approach" className="w-full h-full object-cover" src={imgDiv2} />
              </div>
            </div>
            <div className="min-h-[250px] md:h-[320px] relative shrink-0 w-full max-w-[1280px] card-3d scroll-reveal scroll-fade-up stagger-4">
              <div className="lg:-translate-y-1/2 relative lg:absolute content-stretch flex flex-col gap-[20px] md:gap-[35px] items-start left-0 lg:top-[calc(50%-0.01px)] w-full lg:w-[288px] mb-4 lg:mb-0">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.1] not-italic relative shrink-0 text-[32px] md:text-[42px] lg:text-[52px] text-white tracking-[-2px]">
                    <p className="mb-0">{`Transparent &`}</p>
                    <p>Collaborative</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[1.5] not-italic relative shrink-0 text-[14px] text-white w-full lg:w-[281.169px]">
                  <p className="mb-0">{`Every Business is unique. We Offer Customizations perfectly with your Goals`}</p>
                </div>
              </div>
              <div className="lg:-translate-y-1/2 relative lg:absolute h-[180px] md:h-[240px] lg:left-[336px] overflow-hidden rounded-[20px] lg:right-0 lg:top-1/2 w-full lg:w-[calc(100%-336px)]">
                <img alt="Transparent & Collaborative" className="w-full h-full object-cover" src={imgDiv} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center overflow-clip py-[60px] md:py-[100px] lg:py-[147.333px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.565px] items-start max-w-[1360px] px-4 md:px-[37.778px] relative shrink-0 w-full">
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
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center px-[20px] md:px-[26.444px] py-[12px] md:py-[15.111px] relative rounded-[94.444px] shrink-0 btn-magnetic hover-glow glow-pulse" href="/contact">
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
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[rgba(116,39,255,0.5)] rounded-[25px] w-full max-w-[1276px] card-3d scroll-reveal scroll-fade-up shine-effect p-6 md:p-10 lg:p-12">
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
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[rgba(116,39,255,0.5)] rounded-[25px] w-full max-w-[1276px] card-3d scroll-reveal scroll-fade-up shine-effect stagger-2 p-6 md:p-10 lg:p-12">
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
          <div className="content-stretch flex flex-col gap-[30px] md:gap-[52.889px] items-start max-w-[1360px] px-4 md:px-[37.778px] relative shrink-0 w-full">
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
                  <img alt="" className="w-[15px] h-[15px] shrink-0" src={imgArrowUpIcon} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="services" className="bg-[#090909] flex flex-col items-center relative w-full scroll-mt-20">
          <div className="flex flex-col items-start max-w-[1360px] pb-[30px] md:pb-[52.889px] px-4 md:px-[37.778px] relative w-full">
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
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[45px] text-white">
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
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[45px]">
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
                <div className="min-h-[350px] md:min-h-[400px] lg:h-[438.222px] max-w-[1360px] relative shrink-0 w-full px-4 md:px-8 lg:px-0">
                  <div className="relative md:absolute content-stretch flex flex-col gap-[20px] md:gap-[30.779px] items-start md:left-[52.89px] top-0 md:top-[51.94px] py-6 md:py-0 animate-fade-in-up">
                    <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[28px] md:text-[36px] lg:text-[45px]">
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
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full max-w-[1360px] mx-auto">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[113.67%] left-0 max-w-none top-[-6.83%] w-full" src={imgSection} />
          </div>
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.556px] items-start justify-center max-w-[1360px] pb-[30px] md:pb-[52.889px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="min-h-[150px] md:h-[265.389px] relative shrink-0 w-full flex items-center justify-center">
              <div className="content-stretch flex items-center justify-center w-full">
                <div className="content-stretch flex flex-col items-center relative shrink-0">
                  <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1] not-italic relative shrink-0 text-[48px] md:text-[100px] lg:text-[170px] text-white tracking-[0.9444px] text-center">
                    <p>achievements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col md:flex-row items-stretch justify-center min-h-[200px] md:min-h-[337.3744201660156px] relative shrink-0 w-full gap-0">
              <div className="bg-white border-[#e8e7e7] border-b md:border-b-0 md:border-r border-solid content-stretch flex flex-col gap-[40px] md:gap-[149.982px] items-start overflow-clip p-[20px] md:pl-[30.222px] md:pr-[31.167px] md:py-[30.222px] relative self-stretch shrink-0 w-full md:w-1/3 card-3d scroll-reveal scroll-fade-up stagger-1">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.535px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">01</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">20+ Brands</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e8e7e7] border-b md:border-b-0 md:border-r border-solid content-stretch flex flex-col gap-[40px] md:gap-[149.982px] items-start overflow-clip p-[20px] md:pl-[30.222px] md:pr-[31.167px] md:py-[30.222px] relative self-stretch shrink-0 w-full md:w-1/3 card-3d scroll-reveal scroll-fade-up stagger-2">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.535px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">02</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start min-w-[259.72222900390625px] pr-[59.972px] relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">10+ Years</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e8e7e7] md:border-r-0 border-solid content-stretch flex flex-col gap-[40px] md:gap-[149.982px] items-start overflow-clip p-[20px] md:pl-[30.222px] md:pr-[31.167px] md:py-[30.222px] relative self-stretch shrink-0 w-full md:w-1/3 card-3d scroll-reveal scroll-fade-up stagger-3">
                <div className="h-[49.111px] relative shrink-0 w-full">
                  <div className="-translate-y-1/2 absolute bg-[var(--color\/blue\/56,#3f2fee)] content-stretch flex items-center justify-center left-[210.61px] rounded-[49.111px] size-[49.111px] top-[calc(50%-113.33px)]">
                    <div className="content-stretch flex h-[12.835px] items-center justify-center max-w-[49.11111068725586px] overflow-clip relative shrink-0 w-[12.844px]">
                      <div className="content-stretch flex flex-col h-[12.835px] items-center justify-center overflow-clip pr-[0.009px] relative shrink-0 w-[12.844px]">
                        <div className="opacity-[var(--opacity\/100,1)] overflow-clip relative shrink-0 size-[12.835px]">
                          <div className="absolute contents inset-0">
                            <div className="absolute inset-[4.17%_4.17%_4.17%_4.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.535px_-0.535px] mask-size-[12.835px_12.835px] opacity-[var(--opacity\/100,1)]" style={{ maskImage: `url('${imgGroup1}')` }}>
                              <img alt="" className="block max-w-none size-full" src={imgGroup4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[29.296667098999023px] not-italic overflow-hidden relative shrink-0 text-[20.778px] text-[color:var(--color\/grey\/73,#b9b9b9)] text-ellipsis tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[29.278px]">03</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[29.278px] text-[color:var(--color\/grey\/11,#1b1b1b)] whitespace-nowrap">
                    <p className="leading-[38.354px]">100+ Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] content-stretch flex flex-col min-h-[600px] md:min-h-[800px] lg:h-[939px] items-center overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[60.454px] items-start max-w-[1360px] pt-[60px] md:pt-[100px] lg:pt-[143.556px] px-4 md:px-[37.778px] relative shrink-0 w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-12">
              {/* Testimonial Card 1 */}
              <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col testimonial-card">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Digil</p>
                <div className="flex-1 py-8">
                  <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Working with Sivarsa completely changed how we approach hiring. They helped us bring in the right talent quickly, which was exactly what we needed during a crucial phase&rdquo;</p>
                </div>
                <div className="mt-auto">
                  <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Saksham Gupta</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO & Founder</p>
                </div>
              </div>
              {/* Testimonial Card 2 */}
              <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col testimonial-card">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">Santosh</p>
                <div className="flex-1 py-8">
                  <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Sivarsa&apos;s SEO gave us a real boost when we needed it.&rdquo;</p>
                </div>
                <div className="mt-auto">
                  <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Suresh</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO & Founder</p>
                </div>
              </div>
              {/* Testimonial Card 3 */}
              <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col testimonial-card">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[18px]">GNT</p>
                <div className="flex-1 py-8">
                  <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;With Sivarsa, Our campaigns gained momentum. Real, measurable momentum.&rdquo;</p>
                </div>
                <div className="mt-auto">
                  <p className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-[#1b1b1b]">Ritika</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7e7e81] text-[14px] md:text-[18px]">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center pb-[60px] md:pb-[100px] lg:pb-[162.444px] pt-[60px] md:pt-[90.667px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[68px] items-start max-w-[1360px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.652px] relative shrink-0 w-full">
                <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1b1b1b] text-[32px] md:text-[42px] lg:text-[51.339px]">
                  <p className="mb-0">Frequently asked</p>
                  <p>questions</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-full lg:w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
                        <p className="leading-[26.444px]">What are your focus areas as a UI/UX design agency?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-full lg:w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
                        <p className="leading-[26.444px]">Why is UI/UX design important for your business growth?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-full lg:w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
                        <p className="leading-[26.444px]">What separates sivarsa from other top UI/UX design agencies?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-full lg:w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
                        <p className="leading-[26.444px]">How long does the entire design process take?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full lg:w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] md:text-[16px] lg:text-[18px]">
                      <p className="leading-[26.444px]">How much do you charge for design services?</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0">
                    <div className="max-w-[11.333333015441895px] relative shrink-0 size-[11.333px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArrowIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <a className="bg-[#ebfe5b] content-stretch cursor-pointer flex gap-[9.444px] isolate items-start justify-center max-w-[197.46444702148438px] overflow-clip pb-[15.111px] pt-[14.573px] px-[26.444px] relative rounded-[94.444px] shrink-0 w-full btn-magnetic shine-effect" href="http://wa.me/+8801785087148">
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
        {/* Contact Section */}
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[120px] relative shrink-0 w-full">
          <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
              {/* Left Content */}
              <div className="flex flex-col items-start max-w-[434px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <h2 className="font-[family-name:var(--font-headings)] font-bold text-[40px] md:text-[55px] lg:text-[66px] leading-[1.2] tracking-[1px] text-[#1b1b1b]">
                  Have a Project?<br /><span className="text-[#7e7e81]">Let&apos;s talk!</span>
                </h2>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[29.278px] relative shrink-0">
                <div className="content-stretch flex flex-col gap-[10.389px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[9.444px] items-center relative shrink-0">
                    <div className="max-w-[186.89610290527344px] relative shrink-0 size-[15.111px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContactTick} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.171px] whitespace-nowrap">
                        <p className="leading-[20.683px]">NDA? Absolutely just ask.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9.444px] items-center relative shrink-0">
                    <div className="max-w-[302.25054931640625px] relative shrink-0 size-[15.111px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContactTick} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.945px] whitespace-nowrap">
                        <p className="leading-[20.683px]">{`We’ll respond in 24 hours  fast & focused.`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9.444px] items-center relative shrink-0">
                    <div className="max-w-[292.95721435546875px] relative shrink-0 size-[15.111px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContactTick} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.613px] whitespace-nowrap">
                        <p className="leading-[20.683px]">Work with senior experts, not juniors.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[60px] md:pt-[89.722px] relative shrink-0">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#1b1b1b] text-[18px] whitespace-nowrap">
                    <p>Schedule a call:</p>
                  </div>
                  {/* Schedule Card */}
                  <div className="bg-white flex items-center p-[12px] pr-[32px] rounded-lg shadow-sm">
                    <div className="bg-gradient-to-r from-[#265df6] to-[#7427ff] w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold text-[24px] shrink-0">
                      S
                    </div>
                    <div className="flex flex-col pl-[20px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#1b1b1b]">Sivarsa</span>
                      <span className="font-['Inter',sans-serif] text-[18px] text-[#7e7e81]">Founder & CEO</span>
                    </div>
                    {/* Arrow Icon */}
                    <div className="ml-[40px]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1b1b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {/* Right Form */}
              <ContactForm className="w-full lg:max-w-[672px]" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}