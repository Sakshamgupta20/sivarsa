"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { BASE_PATH } from "@/lib/constants";

// Image constants
const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgPattern2 = `${BASE_PATH}/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgAboutHeroImage = `${BASE_PATH}/assets/4726923c2eb3bd4fff6bae2d50976175dd47b09d.png`;
const imgAboutBioImage = `${BASE_PATH}/assets/7a4237b3b1d8f87a5a0c2ad976fa4d8e3cff45fc.png`;
const imgSaudiaImage2 = `${BASE_PATH}/assets/2ced7a5d01fae3bfaa90a8f6f203eb5716888f89.png`;
const imgBtnIcon = `${BASE_PATH}/assets/9d79a623aa1c32e3afa51b1834def194b0ff1b99.png`;
const imgBtnArrowIcon = `${BASE_PATH}/assets/71c347c65e2b2290577991e185e5573a083f297b.png`;
const imgSoftwareDev = `${BASE_PATH}/assets/e66ef56f0b767b50b8860584a5fa19bd69be614e.png`;
const imgHrTalent = `${BASE_PATH}/assets/34d961d0ab311afc7564d03f49aed88b4a54a35f.png`;
const imgGrowthMarketing = `${BASE_PATH}/assets/818a5b0370e47250af5f3233218b98f9533f97ef.png`;
const imgBtnIconWhite = `${BASE_PATH}/assets/cc33d9c88b41312dae650fea64034944767af781.png`;
const imgBtnArrowIconDark = `${BASE_PATH}/assets/0b857160e5018cd27df9fbbc68815715d0510936.png`;
const imgArrowIcon = `${BASE_PATH}/assets/arrow-icon.png`;
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;
const imgCalendar = `${BASE_PATH}/assets/faq-icon.png`;

// Company logos for marquee
const imgRecruitly = `${BASE_PATH}/assets/e1d1913cf107ec0d4752db980157af01db52ac15.png`;
const img500 = `${BASE_PATH}/assets/81a4fcc743420daf8c782b4858bb2f815efbc5ec.png`;
const imgOppaTravel = `${BASE_PATH}/assets/1a08a43fb60438b1fdfdb67500f7bc2bf0b52e6b.png`;
const imgZeroEssay = `${BASE_PATH}/assets/48e063866d9ff1ad2f69b61817c1b431143a76c2.png`;
const imgAndreessenHorowitz = `${BASE_PATH}/assets/918216ec83d7eb3b64f66d81f4d65b04a6dd2679.png`;

export default function AboutPage() {
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
          {/* Hero Section */}
          <div className="min-h-[600px] lg:h-[841px] overflow-clip relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHero} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
            <div className="absolute inset-0 opacity-60">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
            </div>

            {/* Header */}
            <Header />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="content-stretch flex flex-col gap-[37px] items-center justify-center text-center w-full max-w-[1060px] px-4">
                <h1 className="font-[family-name:var(--font-headings)] font-bold text-[48px] md:text-[72px] lg:text-[82px] leading-[1.1] tracking-[-2px] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up">
                  Team behind future unicorns
                </h1>
                <p className="font-['Inter',sans-serif] font-medium text-[18px] md:text-[22px] lg:text-[25px] text-white/70 max-w-[600px] animate-fade-in-up delay-200">
                  We&apos;re not just a Service agency. We&apos;re the product-thinking team behind 100M+ users, $10B+ funding, &amp; 250+ Hiring Stories.
                </p>
              </div>
            </div>
          </div>

          {/* About Hero Image Section */}
          <div className="content-stretch flex flex-col items-center justify-center px-4 md:px-[40px] py-[60px] md:py-[81px] relative shrink-0 w-full bg-white">
            <div className="h-[400px] md:h-[550px] lg:h-[675px] overflow-clip relative rounded-[20px] md:rounded-[30px] shrink-0 w-full max-w-[1109px] scroll-reveal scroll-scale-up img-scale-container">
              <img alt="Team working together" className="absolute inset-0 max-w-none object-cover size-full" src={imgAboutHeroImage} />
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center pb-[48px] pt-[56px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1440px] px-4 md:px-[40px] relative shrink-0 w-full">
              <div className="flex flex-col items-center relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] font-semibold text-[18px] md:text-[22px] text-[#1b1b1b] text-center">
                  Trusted by 500+ global companies
                </p>
              </div>
              <div className="h-[32px] overflow-clip relative shrink-0 w-full">
                <div className="flex items-center gap-[72px] animate-ticker">
                  {[imgRecruitly, img500, imgOppaTravel, imgZeroEssay, imgAndreessenHorowitz, imgRecruitly, img500, imgOppaTravel, imgZeroEssay, imgAndreessenHorowitz].map((logo, index) => (
                    <div key={index} className="h-[32px] shrink-0 w-[120px]">
                      <img alt="" className="h-full w-auto object-contain opacity-60" src={logo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start pt-[80px] md:pt-[104px] pb-[60px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start max-w-[1440px] mx-auto px-4 md:px-[40px] relative shrink-0 w-full">
              {/* Heading */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full scroll-reveal scroll-fade-up">
                <h2 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] tracking-[1px] text-[#1b1b1b]">
                  We measure<br />
                  <span className="text-[#1b1b1b]">impact, </span>
                  <span className="text-[#29242466]">not just ship pixels.</span>
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px] w-full">
                {/* Stat 1 */}
                <div className="bg-white content-stretch flex flex-col items-start p-[32px] rounded-[20px] scroll-reveal scroll-fade-up stagger-1 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/01</p>
                  <div className="mt-4">
                    <p className="font-['Inter',sans-serif] font-extrabold text-[42px] md:text-[54px] text-[#1b1b1b] leading-[1.3]">$10B+</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      raised through<br />UX-led launches
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white content-stretch flex flex-col items-start p-[32px] rounded-[20px] scroll-reveal scroll-fade-up stagger-2 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/02</p>
                  <div className="mt-4">
                    <p className="font-['Inter',sans-serif] font-extrabold text-[42px] md:text-[54px] text-[#1b1b1b] leading-[1.3]">400%</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      uplift in conversions<br />(avg. 300%)
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white content-stretch flex flex-col items-start p-[32px] rounded-[20px] scroll-reveal scroll-fade-up stagger-3 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/03</p>
                  <div className="mt-4">
                    <p className="font-['Inter',sans-serif] font-extrabold text-[42px] md:text-[54px] text-[#1b1b1b] leading-[1.3]">100M+</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      users reached through<br />our SaaS and AI platforms
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px] w-full">
                {/* Stat 4 */}
                <div className="bg-white content-stretch flex flex-col justify-between items-start p-[32px] rounded-[20px] min-h-[200px]">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/04</p>
                  <div>
                    <p className="font-['Inter',sans-serif] font-black text-[42px] md:text-[54px] text-[#1b1b1b] leading-[1.3]">140+</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      Awards recognised by<br />Awwwards, CSSDA, Behance
                    </p>
                  </div>
                </div>

                {/* Stat 5 */}
                <div className="bg-white content-stretch flex flex-col justify-between items-start p-[32px] rounded-[20px] min-h-[200px]">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/05</p>
                  <div>
                    <p className="font-['Inter',sans-serif] font-black italic text-[36px] md:text-[48px] lg:text-[53px] text-[#1b1b1b] leading-[1.3]">250+ Testimonials</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      trusted by YC-backed, VC-funded, a16z, Sequoia,<br />500+ global
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* From India Section */}
          <div className="bg-[#f1f1f1] content-stretch flex flex-col gap-[72px] items-center py-[100px] md:py-[156px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1360px] mx-auto px-4 md:px-[40px]">
              <h2 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.4] text-[#1b1b1b] max-w-[1200px]">
                From India, we help bold visions become reality.
              </h2>
            </div>

            <div className="max-w-[1440px] w-full px-4 md:px-[40px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[144px] items-start">
                {/* Image */}
                <div className="w-full lg:w-[576px] h-[400px] lg:h-[660px] overflow-clip rounded-[20px] shrink-0">
                  <img alt="Team collaboration" className="w-full h-full object-cover" src={imgAboutHeroImage} />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex flex-col gap-[24px] max-w-[640px]">
                    <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[#1b1b1b] leading-[1.6]">
                      Sivarsa didn&apos;t start in a fancy corporate office with unlimited resources. It started with a vision to bridge the gap between ambitious ideas and exceptional execution, powered by India&apos;s finest talent.
                    </p>
                    <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[#1b1b1b] leading-[1.6]">
                      So we helped early startups find the right people, build robust software solutions, and scale their brands through strategic growth marketing. One client at a time.
                    </p>
                    <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[#1b1b1b] leading-[1.6]">
                      But now? Sivarsa works with companies across the globe, helping them access world-class talent, develop cutting-edge software, and accelerate growth through data-driven marketing.
                    </p>
                    <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[#1b1b1b] leading-[1.6]">
                      But honestly? We still build like it&apos;s day one—fast, honest, human. Behind every project is a team betting it all on making your vision succeed.
                    </p>
                  </div>

                  <Link href="#contact" className="bg-[#3f2fee] flex gap-[8px] items-center justify-center px-[28px] py-[16px] rounded-[100px] mt-[40px] btn-magnetic hover-glow glow-pulse">
                    <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-white">Shape your vision</span>
                    <img alt="" className="w-[12px] h-[12px]" src={imgBtnIconWhite} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Sivarsa Section */}
          <div className="bg-white content-stretch flex flex-col lg:flex-row gap-[60px] lg:gap-[144px] items-start px-4 md:px-[40px] py-[60px] relative shrink-0 w-full max-w-[1440px] mx-auto">
            {/* Image */}
            <div className="w-full lg:w-[576px] h-[400px] lg:h-[660px] overflow-clip rounded-[20px] shrink-0">
              <img alt="Why Sivarsa" className="w-full h-full object-cover" src={imgAboutHeroImage} />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start flex-1 max-w-[640px]">
              <h3 className="font-[family-name:var(--font-headings)] font-bold text-[32px] md:text-[41px] leading-[1.4] text-[#1b1b1b]">
                Why Sivarsa? We care like<br />co-founders.
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#1b1b1b] leading-[1.6] py-[18px]">
                Not another agency. We are your team that gives a damn. Because we treat your product like it&apos;s ours.
              </p>

              {/* Features List */}
              <div className="flex flex-col items-start w-full pb-[24px]">
                {[
                  { num: "01", title: "Startup-Speed Process" },
                  { num: "02", title: "Seasoned Experts" },
                  { num: "03", title: "Work with Experts, Not Layers" },
                  { num: "04", title: "Design That Performs" },
                  { num: "05", title: "Flexible Engagement Models" },
                ].map((item, index) => (
                  <div key={index} className="border-b border-[#f0f0f0] flex items-center justify-between py-[24px] w-full group cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-[18px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#7e7e81]">{item.num}</span>
                      <span className="font-['Inter',sans-serif] font-semibold text-[20px] md:text-[24px] text-[#1b1b1b]">{item.title}</span>
                    </div>
                    <img alt="" className="w-[14px] h-[14px] group-hover:translate-x-1 transition-transform" src={imgBtnArrowIconDark} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section with Stacking Cards */}
          <div className="bg-white content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full py-[80px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[24px] md:gap-0 items-start md:items-end justify-between w-full max-w-[1360px] px-4 md:px-[40px] mx-auto">
              <h2 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.3] tracking-[1px] text-[#1b1b1b] max-w-[850px]">
                From vision to velocity, we are<br />
                <span className="text-[#29242466]">all in one place.</span>
              </h2>
              <Link href="/services/software-development" className="bg-[#3f2fee] flex gap-[8px] items-center justify-center px-[28px] py-[16px] rounded-[100px] btn-magnetic hover-glow glow-pulse">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-white">View services</span>
                <img alt="" className="w-[12px] h-[12px]" src={imgBtnIconWhite} />
              </Link>
            </div>

            {/* Stacking Cards */}
            <div className="bg-[#090909] content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Software Development Card */}
              <div className="bg-[#3f2fee] content-stretch flex flex-col items-center shrink-0 sticky top-0 z-10 w-full">
                <div className="h-auto md:h-[438px] max-w-[1360px] relative shrink-0 w-full py-[50px] px-4 md:px-[52px]">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full gap-8">
                    <div className="flex flex-col gap-[30px] items-start max-w-[600px]">
                      <h3 className="font-['Inter',sans-serif] font-extrabold text-[32px] md:text-[45px] text-white leading-[1.2]">Software Development</h3>
                      <p className="font-['Inter',sans-serif] font-medium text-[15px] md:text-[17px] text-white/90 max-w-[360px] leading-[1.6]">
                        Build scalable, user-friendly software that solves real problems and drives business growth.
                      </p>
                      <Link href="/services/software-development" className="bg-white flex gap-[8px] items-center justify-center px-[26px] py-[15px] rounded-[100px] btn-magnetic shine-effect">
                        <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#1b1b1b]">Start Your Project</span>
                        <img alt="" className="w-[11px] h-[11px]" src={imgBtnArrowIconDark} />
                      </Link>
                    </div>
                    <div className="w-full lg:w-[366px] h-[250px] lg:h-[332px] rounded-[16px] overflow-hidden">
                      <img alt="Software Development" className="w-full h-full object-cover" src={imgSoftwareDev} />
                    </div>
                  </div>
                </div>
              </div>

              {/* HR & Talent Card */}
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="h-auto md:h-[438px] max-w-[1360px] relative shrink-0 w-full py-[50px] px-4 md:px-[52px]">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full gap-8">
                    <div className="flex flex-col gap-[30px] items-start max-w-[600px]">
                      <h3 className="font-['Inter',sans-serif] font-extrabold text-[32px] md:text-[45px] text-[#1b1b1b] leading-[1.2]">HR & Talent Management</h3>
                      <p className="font-['Inter',sans-serif] font-medium text-[15px] md:text-[17px] text-[#1b1b1b]/80 max-w-[360px] leading-[1.6]">
                        Attract, develop, and retain top talent. Our strategic HR solutions help you build high-performing teams.
                      </p>
                      <Link href="/services/hr-talent-management" className="bg-[#1b1b1b] flex gap-[8px] items-center justify-center px-[26px] py-[15px] rounded-[100px] btn-magnetic shine-effect">
                        <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-white">Hire Smarter</span>
                        <img alt="" className="w-[11px] h-[11px]" src={imgBtnIconWhite} />
                      </Link>
                    </div>
                    <div className="w-full lg:w-[366px] h-[250px] lg:h-[332px] rounded-[16px] overflow-hidden">
                      <img alt="HR & Talent" className="w-full h-full object-cover" src={imgHrTalent} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Marketing Card */}
              <div className="bg-[#ffd500] content-stretch flex flex-col items-center shrink-0 sticky top-[120px] z-30 w-full">
                <div className="h-auto md:h-[438px] max-w-[1360px] relative shrink-0 w-full py-[50px] px-4 md:px-[52px]">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full gap-8">
                    <div className="flex flex-col gap-[30px] items-start max-w-[600px]">
                      <h3 className="font-['Inter',sans-serif] font-extrabold text-[32px] md:text-[45px] text-[#1b1b1b] leading-[1.2]">Growth Marketing</h3>
                      <p className="font-['Inter',sans-serif] font-medium text-[15px] md:text-[17px] text-[#1b1b1b]/80 max-w-[360px] leading-[1.6]">
                        Acquire more customers and scale faster. Our data-driven marketing strategies turn traffic into revenue.
                      </p>
                      <Link href="/services/growth-marketing" className="bg-[#1b1b1b] flex gap-[8px] items-center justify-center px-[26px] py-[15px] rounded-[100px] btn-magnetic shine-effect">
                        <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-white">Start Growing</span>
                        <img alt="" className="w-[11px] h-[11px]" src={imgBtnIconWhite} />
                      </Link>
                    </div>
                    <div className="w-full lg:w-[366px] h-[250px] lg:h-[332px] rounded-[16px] overflow-hidden">
                      <img alt="Growth Marketing" className="w-full h-full object-cover" src={imgGrowthMarketing} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Info Section */}
          <div className="bg-white content-stretch flex flex-col items-start px-4 md:px-[40px] py-[35px] relative shrink-0 w-full">
            <div className="max-w-[1440px] mx-auto w-full">
              {/* Heading */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mb-[96px]">
                <h2 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[48px] lg:text-[53px] leading-[1.4] tracking-[0.4px] text-[#1b1b1b]">
                  We are your product geek, UX<br />
                  mind, UI lovers, & Webflow builders.<br />
                  <span className="text-[#1b1b1b]">Your creative team, </span>
                  <span className="text-[#29242466]">just a Slack<br />away.</span>
                </h2>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px] w-full mb-[100px]">
                {/* Card 1 - India */}
                <div className="border border-[#eeedec] content-stretch flex flex-col justify-between items-start p-[33px] rounded-[20px] min-h-[280px] scroll-reveal scroll-fade-up stagger-1 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/01</p>
                  <div>
                    <p className="font-[family-name:var(--font-headings)] font-bold text-[48px] md:text-[55px] text-[#1b1b1b] leading-[1.3]">India</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      Global team working from SF, Berlin,<br />KL, Jakarta, Sydney
                    </p>
                  </div>
                </div>

                {/* Card 2 - 15+ */}
                <div className="border border-[#eeedec] content-stretch flex flex-col justify-between items-start p-[33px] rounded-[20px] min-h-[280px] scroll-reveal scroll-fade-up stagger-2 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/02</p>
                  <div>
                    <p className="font-[family-name:var(--font-headings)] font-bold text-[48px] md:text-[54px] text-[#1b1b1b] leading-[1.3] tracking-[1px]">15+</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      Industries served<br />(AI, SaaS, Fintech, Health, B2B, more)
                    </p>
                  </div>
                </div>

                {/* Card 3 - 10M+ users */}
                <div className="border border-[#eeedec] content-stretch flex flex-col justify-between items-start p-[33px] rounded-[20px] min-h-[280px] scroll-reveal scroll-fade-up stagger-3 card-3d">
                  <p className="font-['Inter',sans-serif] text-[16px] text-[#7e7e81]">/03</p>
                  <div>
                    <p className="font-[family-name:var(--font-headings)] font-bold text-[48px] md:text-[55px] text-[#1b1b1b] leading-[1.3]">10M+ users</p>
                    <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#3a3a3a] leading-[1.6]">
                      Marketplace users served<br />across 10+ time zones
                    </p>
                  </div>
                </div>
              </div>

              {/* Beliefs Section */}
              <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-[60px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[40px] md:text-[56px] leading-[1.3] tracking-[1px] text-[#1b1b1b]">
                    <span className="text-[#1b1b1b]">The beliefs </span>
                    <span className="text-[#29242466]">behind<br />the builds</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-[56px] max-w-[582px]">
                  {[
                    { num: "01", title: "Empathy", desc: "Before we create a design, put pen to paper, or build, we listen. Because the goods always come from understanding. We put ourselves in your users&apos; shoes so your product enters their lives smoothly." },
                    { num: "02", title: "Clarity", desc: "We don\u0027t design to sound smart. We design so your users feel smart. Every word, flow, and screen is crafted to remove friction, not add flash." },
                    { num: "03", title: "Momentum", desc: "Start small. Learn fast. Move with focus. We don\u0027t believe in perfection. We believe in progress. That is why we ship, test, and are constantly North Star aligned." },
                    { num: "04", title: "Outcomes", desc: "A good-looking app that doesn\u0027t convert is just decoration. We obsess over real results, conversions, activations, and retention." },
                  ].map((belief, index) => (
                    <div key={index} className="relative">
                      <div className="flex gap-[50px]">
                        <span className="font-['Inter',sans-serif] text-[22px] text-[#7e7e81] pt-[2px]">{belief.num}</span>
                        <div className="flex flex-col gap-[11px]">
                          <h4 className="font-['Inter',sans-serif] font-black text-[24px] text-[#1b1b1b]">{belief.title}</h4>
                          <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[#1b1b1b] leading-[1.6]">{belief.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white content-stretch flex flex-col items-start pb-[100px] md:pb-[172px] pt-[80px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[72px] items-start max-w-[1440px] mx-auto px-4 md:px-[40px] relative shrink-0 w-full">
              {/* Heading */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <h2 className="font-[family-name:var(--font-headings)] font-bold text-[40px] md:text-[56px] leading-[1.3] tracking-[1px] text-[#1b1b1b]">
                  Frequently asked<br />
                  <span className="text-[#29242466]">questions</span>
                </h2>
              </div>

              {/* FAQ List */}
              <div className="flex flex-col items-start w-full max-w-[963px]">
                {[
                  "What are your focus areas as a UI/UX design agency?",
                  "Why is UI/UX design important for your business growth?",
                  "My website isn\u0027t generating enough leads. How can your design help?",
                  "What separates Sivarsa from other top UI/UX design agencies?",
                  "How could you help us redesign our app, website, or enterprise/B2B software?",
                  "Do you work with startups or only with B2B/enterprise companies?",
                  "Can a redesign boost more traffic and enhance user experience?",
                  "How can your UI UX design agency help my startup?",
                  "Do you offer design services in your agency?",
                  "What digital design tools and technologies do you use for UI UX design?",
                  "How long does the entire design process take?",
                  "How much do you charge for design services?",
                ].map((question, index) => (
                  <div key={index} className="border-b border-[#f0f0f0] flex items-center justify-between py-[32px] pr-[32px] w-full group cursor-pointer hover:bg-gray-50 transition-colors faq-item">
                    <span className="font-['Inter',sans-serif] font-semibold text-[16px] md:text-[20px] text-[#1b1b1b] leading-[1.4]">{question}</span>
                    <img alt="" className="w-[12px] h-[12px] shrink-0 ml-4" src={imgArrowIcon} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[124px] relative shrink-0 w-full" id="contact">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start max-w-[434px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[40px] md:text-[55px] leading-[1.4] tracking-[1px] text-[#1b1b1b]">
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
                    <div className="bg-white flex items-center p-[10px] pr-[24px]">
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
