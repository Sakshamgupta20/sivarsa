"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedByMarquee from "@/components/layout/TrustedByMarquee";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";
import { BASE_PATH } from "@/lib/constants";

const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgPattern2 = `${BASE_PATH}/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgImageServicesHeroImg = `${BASE_PATH}/assets/c75f821122554b1c240ca03d11c436cd41a43d7a.png`;
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
const imgImageLbImg = `${BASE_PATH}/assets/2688fbb99a5633a93cc970944bd72db4a112d8e1.png`;
const imgImageLbFaqIcon = `${BASE_PATH}/assets/0b857160e5018cd27df9fbbc68815715d0510936.png`;
const imgBtnIcon = `${BASE_PATH}/assets/cc33d9c88b41312dae650fea64034944767af781.png`;
const imgArrowIcon = `${BASE_PATH}/assets/arrow-icon.png`;
const imgArrowUpIcon = `${BASE_PATH}/assets/051b6fc1a6a387d92f001032259153a18870ab92.png`;
const imgSeoMarketing = `${BASE_PATH}/assets/dbbb3d741b560f8b0587a7c381fb2d1b5037c737.png`;
const imgPaidAds = `${BASE_PATH}/assets/f5a776d9b40c965fa1820e8e6c7ae8d1c3b5f28a.png`;
const imgConversionOpt = `${BASE_PATH}/assets/f143137c556d3059aaa91bb5659442e9d70a3bd3.png`;
const imgSection = `${BASE_PATH}/assets/5695bc256bc8e98f1d5540277b232264bba9ee20.png`;
const imgDivLocaCtaContent = `${BASE_PATH}/assets/105629aff6ad2aa1df97f788b54d5e2b39aafe1a.png`;
const imgImageCtaSeatImg = `${BASE_PATH}/assets/0c7d1f9d7a98652099233689ceb28285808f961d.png`;
const imgImageFaqIcon = `${BASE_PATH}/assets/7ed6ad1031b28fa6cc2fe75656319272f0d36d09.png`;
const imgFooter = `${BASE_PATH}/assets/9b07f522e4d0a0e72c091dbc013a7a7ef5aa0de6.png`;
const img = `${BASE_PATH}/assets/7e9a5f131e2ed0d2554df6ffcabe822cda5baa2f.png`;
const imgGroup = `${BASE_PATH}/assets/1d7a141c9e6e83651cc92612eb0eecfd4be77c2b.svg`;
const imgPattern1 = `${BASE_PATH}/assets/6391d4058bebe4b69b2bf40258fe1dda41c74b6a.svg`;
const imgEllipse1 = `${BASE_PATH}/assets/2eceb13e91f7b53149c9985bc0b30c966fc2d014.svg`;
const imgGroup1 = `${BASE_PATH}/assets/f3632276f254d06c1815dc36e2d5d26118340f72.svg`;
const imgGroup2 = `${BASE_PATH}/assets/b54da659bccb34f57c40211c3e97a1d12bbc6553.svg`;
const imgGroup3 = `${BASE_PATH}/assets/da9501c770707dfeea9cb4949810d490c0f454b2.svg`;
const imgGroup4 = `${BASE_PATH}/assets/58b6b94120424b638561883651cba4a78acc0c39.svg`;
const img1 = `${BASE_PATH}/assets/6566ab70fd7d869272cb6dd241c9b06c6542b5a6.svg`;

export default function GrowthMarketing() {
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
                <img alt="Growth Marketing Services" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageServicesHeroImg} />
              </div>
              <div className="relative content-stretch flex flex-col items-start max-w-[1360px] mx-auto px-4 lg:px-0 pt-[40px] lg:pt-[129px] w-full hero-content">
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[37px] items-start relative shrink-0 w-full lg:w-[626px]">
                <div className="bg-clip-text font-[family-name:var(--font-headings)] font-black leading-[1.1] not-italic relative shrink-0 text-[48px] md:text-[68px] lg:text-[90px] tracking-[-2px] lg:tracking-[-4.1492px] animate-fade-in-up" style={{ backgroundImage: "linear-gradient(-38.5682deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                  <p className="mb-0">{`GROWTH `}</p>
                  <p>MARKETING</p>
                </div>
                <p className="font-['Inter',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[22px] text-white/50 w-full max-w-[544px] animate-fade-in-up delay-200">
                  Sivarsa ignites business growth through data-driven marketing. We merge creative strategy with performance analytics to fuel smarter, faster expansion across every major channel.
                </p>
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[23.484px] items-start justify-center relative shrink-0 w-full md:w-auto animate-fade-in-up delay-300">
                  <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[31.6px] items-center justify-center relative shrink-0 w-full sm:w-auto">
                    <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[270.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center gap-[8px]">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Start Growing Today
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
                Growth Marketing<br />
                <span className="text-[#1b1b1b]/40">that drives results</span>
              </h2>
              <p className="font-['Inter',sans-serif] font-medium text-[15px] md:text-[17px] text-[#3a3a3a] leading-[1.7]">
                We design and execute growth strategies across every channel that matters. From paid media to organic acquisition, we find the most efficient path to measurable business growth.
              </p>
              <div className="flex flex-col w-full mt-[16px]">
                {[
                  { num: "01", title: "Paid Search (Google, Meta, LinkedIn Ads)", desc: "We create and manage high-performance ad campaigns across Google, Meta, and LinkedIn to drive qualified leads and maximize your ROI." },
                  { num: "02", title: "SEO & organic content strategy", desc: "We build sustainable organic traffic through keyword research, technical SEO, and content strategies that rank and convert." },
                  { num: "03", title: "Social media marketing", desc: "We craft engaging social strategies that build brand awareness, grow your audience, and drive meaningful engagement across platforms." },
                  { num: "04", title: "Display & programmatic advertising", desc: "We leverage programmatic platforms to deliver targeted display ads that reach your ideal audience at the right time and place." },
                  { num: "05", title: "Email marketing & retention campaigns", desc: "We design email flows and retention campaigns that nurture leads, re-engage users, and maximize customer lifetime value." },
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
        {/* Turn Your Marketing Into Your Competitive Edge section */}
        <div className="bg-white content-stretch flex flex-col items-center py-[60px] md:py-[100px] lg:py-[147.333px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[75.565px] items-start max-w-[1360px] mx-auto px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col md:flex-row items-start md:items-end justify-between relative shrink-0 w-full gap-4">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full md:w-auto">
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[#1b1b1b] text-[28px] md:text-[40px] lg:text-[52.372px]">
                  <p>Turn Your Marketing Into Your</p>
                </div>
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[50.926px] text-[rgba(41,36,36,0.41)]">
                  <p>Competitive Edge!</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[198.2294464111328px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full" href="/contact">
                  <span className="font-['Inter',sans-serif] font-semibold text-[14.875px] text-white whitespace-nowrap">Start your project</span>
                  <div className="relative shrink-0 size-[11.333px]">
                    <img alt="" className="absolute inset-0 max-w-none size-full" src={imgBtnIcon} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] min-h-[400px] lg:min-h-[588.923px] relative rounded-[25px] shrink-0 to-[rgba(116,39,255,0.5)] w-full hover-lift card-animated overflow-hidden">
              <div className="flex flex-col lg:flex-row p-6 md:p-10 lg:p-[47px] gap-6 lg:gap-8 relative">
                <div className="flex flex-col gap-4 w-full lg:w-[550px]">
                  <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-black">SANTOSH JEWELLERS</p>
                  <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.3] text-black">High cost per acquisition (CPA), minimal repeat purchases due to lack of robust email strategy.</p>
                  <div className="mt-4 lg:mt-8">
                    <p className="text-[50px] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold mb-2">&ldquo;</p>
                    <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] max-w-[506px]">Our approach integrates SEO and ROI-focused paid search to boost visibility, leverages display and programmatic ads for timely retargeting, and uses segmented, automated email campaigns to drive repeat purchases.</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col gap-[24px] items-start w-full lg:w-[486px]">
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] w-full overflow-hidden p-6 flex items-center gap-4 min-h-[129px]">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[40px] md:text-[50px] lg:text-[60px] leading-[1] whitespace-nowrap">{`300% `}</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[18px] md:text-[22px] leading-[1.2]">increase in organic traffic over 6 months</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] w-full overflow-hidden p-6 flex items-center gap-4 min-h-[129px]">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[40px] md:text-[50px] lg:text-[60px] leading-[1] whitespace-nowrap">{`40% `}</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[18px] md:text-[22px] leading-[1.2]">reduction in bounce rates via optimized landing pages</span>
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] rounded-[15px] w-full overflow-hidden p-6 flex items-center gap-4 min-h-[129px]">
                    <span className="font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold text-[40px] md:text-[50px] lg:text-[60px] leading-[1] whitespace-nowrap">2X</span>
                    <span className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold text-[18px] md:text-[22px] leading-[1.2]">increase in monthly bookings, leading to a significant revenue boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* We deliver on time section */}
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
                  { num: "01", text: "Strategy & channel audit" },
                  { num: "02", text: "Campaign launch & optimization" },
                  { num: "03", text: "Scale what works, cut what doesn't" },
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
        {/* What we deliver on section */}
        <div id="services" className="bg-[#090909] content-stretch flex flex-col gap-[0.009px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[1360px] mx-auto pb-[52.889px] px-4 md:px-[37.778px] relative shrink-0 w-full">
            <div className="content-stretch flex items-end relative shrink-0 w-full py-[20px] md:py-[30px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[51.959px] text-white">
                  <p>{`What we deliver on `}</p>
                </div>
                <div className="font-[family-name:var(--font-headings)] font-bold leading-[1.3] text-[22px] md:text-[32px] lg:text-[51.339px] text-[rgba(255,255,255,0.52)]">
                  <p>Growth Marketing</p>
                </div>
              </div>
            </div>
          </div>
          {/* Service cards */}
          <div className="bg-[#090909] content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#3f2fee] content-stretch flex flex-col items-center shrink-0 sticky top-0 z-10 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[30px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Growth Marketing
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[17px] text-white max-w-[340px]">
                        The fuel for your growth engine. Data-driven marketing strategies designed to accelerate business expansion through paid media and organic channels, focused on maximum performance and ROI.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-white whitespace-nowrap">
                        <p className="mb-0">Social Media Marketing</p>
                        <p className="mb-0">Search Engine Optimisation (SEO)</p>
                        <p className="mb-0">Paid Search (Google Ads)</p>
                        <p className="mb-0">Display Advertising</p>
                        <p className="mb-0">{`Email Marketing & Retention`}</p>
                        <p>Programmatic Display</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSeoMarketing} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[26px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-[#1b1b1b]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Conversion Optimisation
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[17px] text-[#1b1b1b] max-w-[340px]">
                        Growth through improvement. We run experiments and A/B tests to identify and unlock additional conversions from your website visitors, turning traffic into revenue.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-[#1b1b1b] whitespace-nowrap">
                        <p className="mb-0">{`A/B Testing & Experimentation`}</p>
                        <p className="mb-0">Landing Page Optimisation</p>
                        <p className="mb-0">{`Heatmap & User Behaviour Analysis`}</p>
                        <p className="mb-0">Purchase Funnel Optimisation</p>
                        <p className="mb-0">Website Performance Optimisation</p>
                        <p>{`User Psychographics & Insights`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgPaidAds} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffd500] content-stretch flex flex-col items-center shrink-0 sticky top-[120px] z-30 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[30px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-[#1b1b1b]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Digital Strategy
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[16px] text-[#1b1b1b] max-w-[340px]">
                        The blueprint for your success. We sit at the intersection of ambitious ideas and concrete data, providing the strategic roadmap that drives measurable results.
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-[#1b1b1b] whitespace-nowrap">
                        <p className="mb-0">{`Market & Competitor Analysis`}</p>
                        <p className="mb-0">Brand Positioning Strategy</p>
                        <p className="mb-0">{`KPI & Goal Development`}</p>
                        <p className="mb-0">{`Media Planning & Projections`}</p>
                        <p className="mb-0">{`Analytics & Reporting`}</p>
                        <p>Growth Model Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgConversionOpt} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00c853] content-stretch flex flex-col items-center shrink-0 sticky top-[180px] z-40 w-full">
                <div className="max-w-[1360px] mx-auto relative shrink-0 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 md:p-10 lg:p-[52.89px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-[30px] items-start animate-fade-in-up w-full lg:w-auto lg:max-w-[600px]">
                    <h3 className="font-bold leading-[1.3] text-[24px] md:text-[36px] lg:text-[44.979px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Creative Design
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.55] text-[15px] md:text-[16px] text-white max-w-[340px]">
                        {`Make a lasting impression. Creative design rooted in data-driven principles and user-focused strategies — websites, e-commerce, performance creative, and UI/UX that converts.`}
                      </p>
                      <div className="hidden lg:block font-['Inter',sans-serif] font-normal leading-[25.5px] text-[14px] text-white whitespace-nowrap">
                        <p className="mb-0">{`Website Design & Development`}</p>
                        <p className="mb-0">E-commerce Design</p>
                        <p className="mb-0">{`Performance Creative & Ad Design`}</p>
                        <p className="mb-0">UI/UX Design Systems</p>
                        <p className="mb-0">{`Brand Identity & Visual Design`}</p>
                        <p>{`Motion Graphics & Video`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[366px] h-[332px] animate-fade-in-right">
                    <div className="relative w-full h-full hover-scale transition-transform duration-300">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSeoMarketing} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements section */}
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
        {/* What Our Clients Say section */}
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
                    <p className="font-['Inter',sans-serif] font-semibold text-[#7e7e81] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6]">&ldquo;Working with Sivarsa completely changed how we approach hiring. They helped us bring in the right talent quickly, which was exactly what we needed during a crucial phase.&rdquo;</p>
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
        {/* CTA section */}
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
                Try Our Growth Marketing Audit — Only 2 Weeks to get started. Get a data-driven marketing strategy and channel roadmap for your business.
              </p>
              <Link href="/contact" className="bg-[#ebfe5b] rounded-[100px] px-6 py-3 md:py-3.5 w-fit flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15.6px] text-[#1b1b1b]">Get Started</span>
                <img alt="" className="size-[12px] object-contain" src={imgImageLbFaqIcon} />
              </Link>
            </div>
          </div>
        </div>
        {/* FAQ section */}
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
                { question: "How quickly can we see marketing results?", answer: "Paid campaigns can show results within the first week. For organic strategies like SEO and content marketing, expect meaningful traction within 2–3 months, with compounding growth over time." },
                { question: "What marketing channels do you specialize in?", answer: "We cover SEO, Google Ads, Meta Ads, content marketing, email automation, social media management, and conversion rate optimization — tailored to where your audience actually is." },
                { question: "Do you handle both paid and organic strategies?", answer: "Yes. We believe the best results come from combining paid acquisition with organic growth. We build integrated strategies that balance both for sustainable, cost-effective scaling." },
                { question: "What's different about your growth approach?", answer: "We're not just a marketing agency — we think like product owners. Every campaign is tied to business metrics, not vanity numbers. We optimize for revenue, not just clicks." },
                { question: "How do you measure and report ROI?", answer: "We set up end-to-end tracking from day one and provide transparent dashboards with weekly/monthly reports. You'll see exactly how every dollar is performing against your KPIs." },
                { question: "Can you work alongside our existing marketing team?", answer: "Absolutely. We frequently embed with in-house teams, filling skill gaps and providing strategic direction while your team handles day-to-day execution." },
                { question: "What budget do we need to get started?", answer: "We work with businesses at various stages. Whether you have a modest startup budget or a significant growth fund, we'll design a strategy that maximizes your ROI within your means." },
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
