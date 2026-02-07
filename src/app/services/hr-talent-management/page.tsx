"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedByMarquee from "@/components/layout/TrustedByMarquee";
import ContactForm from "@/components/ContactForm";

const imgHero = "/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png";
const imgPattern2 = "/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png";
const imgStars1 = "/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png";
const imgImageServicesHeroImg = "/assets/5c1ec57b92383875c8876008260bf8e232dba88b.png";
const imgImageMarqueeImg = "/assets/73935e485288eec9c0677abc0d0600a9f833a972.png";
const imgImageMarqueeImg1 = "/assets/ab8fdb5ba619113577bf244db1327915b657d0f1.png";
const imgImageMarqueeImg2 = "/assets/f87deaecd42daf62cc4a7f5a7a2b9c4095cbeab3.png";
const imgImageMarqueeImg3 = "/assets/7985f8c9692c481b91ca5079b08ec7c51d081fa5.png";
const imgImageMarqueeImg4 = "/assets/e1d1913cf107ec0d4752db980157af01db52ac15.png";
const imgImageMarqueeImg5 = "/assets/81a4fcc743420daf8c782b4858bb2f815efbc5ec.png";
const imgImageMarqueeImg6 = "/assets/fcdefe47a048c6ffa191bed3775ef38e668f69a9.png";
const imgImageMarqueeImg7 = "/assets/bc53118888364fc3096ce8570bcf6a796588e97c.png";
const imgImageMarqueeImg8 = "/assets/312502ca4389defc21f1ef5c1b8033faf8f4e034.png";
const imgImageMarqueeImg9 = "/assets/918216ec83d7eb3b64f66d81f4d65b04a6dd2679.png";
const imgImageMarqueeImg10 = "/assets/1a08a43fb60438b1fdfdb67500f7bc2bf0b52e6b.png";
const imgImageMarqueeImg11 = "/assets/48e063866d9ff1ad2f69b61817c1b431143a76c2.png";
const imgImageMarqueeImg12 = "/assets/6a7a96ff35588d01518efd6a49687ee8a35fb5fb.png";
const imgImageMarqueeImg13 = "/assets/71343cb316123bf79322ed72b8961ab9151fb2da.png";
const imgImageMarqueeImg14 = "/assets/68bdc07769698f4ff113b4010019600fe21eb789.png";
const imgImageLbImg = "/assets/2688fbb99a5633a93cc970944bd72db4a112d8e1.png";
const imgImageLbFaqIcon = "/assets/0b857160e5018cd27df9fbbc68815715d0510936.png";
const imgBtnIcon = "/assets/cc33d9c88b41312dae650fea64034944767af781.png";
const imgArrowUpIcon = "/assets/051b6fc1a6a387d92f001032259153a18870ab92.png";
const imgTalentAcquisition = "/assets/e66ef56f0b767b50b8860584a5fa19bd69be614e.png";
const imgEmployeeDev = "/assets/34d961d0ab311afc7564d03f49aed88b4a54a35f.png";
const imgRetention = "/assets/818a5b0370e47250af5f3233218b98f9533f97ef.png";
const imgSection = "/assets/5695bc256bc8e98f1d5540277b232264bba9ee20.png";
const imgDivLocaCtaContent = "/assets/105629aff6ad2aa1df97f788b54d5e2b39aafe1a.png";
const imgImageCtaSeatImg = "/assets/0c7d1f9d7a98652099233689ceb28285808f961d.png";
const imgImageFaqIcon = "/assets/7ed6ad1031b28fa6cc2fe75656319272f0d36d09.png";
const imgContactTick = "/assets/8f1c7448da5bccb734ae19709933b81cd70eb202.png";
const imgFooter = "/assets/9b07f522e4d0a0e72c091dbc013a7a7ef5aa0de6.png";
const img = "/assets/7e9a5f131e2ed0d2554df6ffcabe822cda5baa2f.png";
const imgGroup = "/assets/1d7a141c9e6e83651cc92612eb0eecfd4be77c2b.svg";
const imgPattern1 = "/assets/6391d4058bebe4b69b2bf40258fe1dda41c74b6a.svg";
const imgEllipse1 = "/assets/2eceb13e91f7b53149c9985bc0b30c966fc2d014.svg";
const imgGroup1 = "/assets/f3632276f254d06c1815dc36e2d5d26118340f72.svg";
const imgGroup2 = "/assets/b54da659bccb34f57c40211c3e97a1d12bbc6553.svg";
const imgGroup3 = "/assets/da9501c770707dfeea9cb4949810d490c0f454b2.svg";
const imgGroup4 = "/assets/58b6b94120424b638561883651cba4a78acc0c39.svg";
const img1 = "/assets/6566ab70fd7d869272cb6dd241c9b06c6542b5a6.svg";

export default function HRTalentManagement() {
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
    <div className="bg-black relative size-full overflow-x-hidden">
      <div className="w-full flex flex-col items-center overflow-x-hidden">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="min-h-[600px] lg:min-h-[841px] overflow-hidden relative w-full max-w-[1440px] mx-auto">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-5.86%] max-w-none top-0 w-[111.73%]" src={imgHero} />
            </div>
            <Header />
            <div className="absolute contents left-0 top-[98px]">
              <div className="absolute contents left-0 top-[98px]">
                <div className="absolute h-[722px] left-[104px] top-[98px] w-[1200px]" />
                <div className="absolute contents left-0 top-[98px]">
                  <div className="-translate-x-1/2 absolute h-[866px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1438.759px_865.654px] rounded-[20px] top-[98px] w-[1440px]" style={{ maskImage: `url('${imgPattern1}')` }}>
                    <div className="absolute inset-0 opacity-35 overflow-hidden pointer-events-none rounded-[20px]">
                      <img alt="" className="absolute h-[126.85%] left-[-2.29%] max-w-none top-[-2.12%] w-[104.77%]" src={imgPattern2} />
                    </div>
                  </div>
                  <div className="absolute left-[568.31px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-568.309px_-420.837px] mask-size-[1438.759px_865.654px] size-[1127.028px] top-[518.84px]" style={{ maskImage: `url('${imgPattern1}')` }}>
                    <div className="absolute inset-[-37.62%]">
                      <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                    </div>
                  </div>
                  <div className="absolute h-[937.591px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_71.938px] mask-size-[1438.759px_865.654px] rounded-[20px] top-[26.06px] w-[1438.759px]" style={{ backgroundImage: "linear-gradient(110.159deg, rgb(0, 0, 0) 21.698%, rgba(0, 0, 0, 0.26) 84.415%)", maskImage: `url('${imgPattern1}')` }} />
                  <div className="-translate-x-1/2 absolute h-[937.591px] left-[calc(50%-0.62px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_71.938px] mask-size-[1438.759px_865.654px] opacity-60 top-[26.06px] w-[1438.759px]" style={{ maskImage: `url('${imgPattern1}')` }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
                  </div>
                </div>
                <div className="absolute h-[400px] md:h-[600px] lg:h-[800.63px] right-0 lg:left-[752.39px] top-[98px] w-[300px] md:w-[450px] lg:w-[632.5px] hero-image animate-float hidden md:block">
                  <img alt="HR & Talent Management Services" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageServicesHeroImg} />
                </div>
              </div>
            </div>
            <div className="relative lg:absolute content-stretch flex flex-col items-start px-4 md:px-8 lg:px-0 lg:left-[76px] pt-[40px] lg:pt-0 lg:top-[219px] w-full lg:w-[1060px] hero-content">
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[37px] items-start relative shrink-0 w-full lg:w-[626px]">
                <div className="bg-clip-text font-['GT_Super_Ds_Trial:Bd',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[40px] md:text-[60px] lg:text-[82px] tracking-[-2px] lg:tracking-[-4.1492px] animate-fade-in-up" style={{ backgroundImage: "linear-gradient(-33.725deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                  <p className="mb-0">{`HR & `}</p>
                  <p>TALENT</p>
                </div>
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic opacity-70 relative shrink-0 text-[16px] md:text-[18px] lg:text-[22px] text-white w-full max-w-[544px] animate-fade-in-up delay-200">
                  Sivarsa helps you attract, develop, and retain top talent. Our strategic HR solutions help you build high-performing teams that drive business results and accelerate growth.
                </p>
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[23.484px] items-start justify-center relative shrink-0 w-full md:w-auto animate-fade-in-up delay-300">
                  <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[31.6px] items-center justify-center relative shrink-0 w-full sm:w-auto">
                    <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[270.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Start Hiring Smarter
                      </span>
                    </Link>
                    <a href="#services" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-full sm:w-[210.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-black">
                        Explore services
                      </span>
                    </a>
                  </div>
                  <div className="flex flex-col font-['Schibsted_Grotesk:Medium',sans-serif] font-medium justify-center leading-[normal] relative shrink-0 text-[14px] md:text-[16px] lg:text-[20px] text-center md:text-left text-white w-full lg:w-[485px]">
                    <p>Build teams that drive results and accelerate growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TrustedByMarquee />
        <div id="services" className="flex flex-col gap-[40px] md:gap-[60px] items-center py-[30px] relative w-full max-w-[1440px] mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[136px] items-center lg:items-start relative shrink-0 py-8 md:py-16 w-full">
            <div className="relative shrink-0 w-full max-w-[549.726px]">
              <img alt="" className="max-w-none object-contain pointer-events-none w-full" src={imgImageLbImg} />
            </div>
            <div className="relative shrink-0 w-full lg:w-[597.923px]">
              <div className="content-stretch flex flex-col gap-[17.178px] items-start relative">
                <div className="relative shrink-0 w-[597.923px]">
                  <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic relative text-[53.159px] tracking-[0.9544px] whitespace-nowrap">
                    <div className="flex flex-col justify-center relative shrink-0 text-white">
                      <p className="leading-[72.152px]">Multi-Channel</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-white/70">
                      <p className="leading-[72.152px]">Acquisition Mastery</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-[597.923px] mt-4">
                  <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-start leading-[1.6] not-italic relative text-white/80 text-[16.511px]">
                    <p>We design and execute acquisition strategies across every channel that matters for your business. From paid campaigns to organic growth loops, we find the most efficient path to your next 10,000 customers.</p>
                  </div>
                </div>
                <div className="relative shrink-0 w-[597.923px] mt-4">
                  <div className="content-stretch flex flex-col items-start relative">
                    <div className="border-[#f0f0f0] border-b-[0.954px] border-solid h-[78.832px] relative shrink-0 w-[597.923px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[32.067px] left-0 top-[22.91px] w-[597.923px]">
                          <div className="absolute left-[584.19px] size-[13.743px] top-[9.16px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[35.86px] not-italic text-white text-[22.333px] top-[16.21px] whitespace-nowrap">
                            <p className="leading-[32.067px]">Paid advert optimization (Google, Meta, LinkedIn)</p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-white/60 text-[14.888px] top-[15.67px] whitespace-nowrap">
                            <p className="leading-[21.378px]">01</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.954px] border-solid h-[78.832px] relative shrink-0 w-[597.923px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[32.067px] left-0 top-[22.91px] w-[597.923px]">
                          <div className="absolute left-[584.19px] size-[13.743px] top-[9.16px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[35.86px] not-italic text-white text-[22.333px] top-[16.21px] whitespace-nowrap">
                            <p className="leading-[32.067px]">SEO and content-driven growth</p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-white/60 text-[14.888px] top-[15.67px] whitespace-nowrap">
                            <p className="leading-[21.378px]">02</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.954px] border-solid h-[78.832px] relative shrink-0 w-[597.923px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[32.067px] left-0 top-[22.91px] w-[597.923px]">
                          <div className="absolute left-[584.19px] size-[13.743px] top-[9.16px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[35.86px] not-italic text-white text-[22.333px] top-[16.21px] whitespace-nowrap">
                            <p className="leading-[32.067px]">Referral program design</p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-white/60 text-[14.888px] top-[15.67px] whitespace-nowrap">
                            <p className="leading-[21.378px]">03</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.954px] border-solid h-[78.832px] relative shrink-0 w-[597.923px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[32.067px] left-0 top-[22.91px] w-[597.923px]">
                          <div className="absolute left-[584.19px] size-[13.743px] top-[9.16px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[35.86px] not-italic text-white text-[22.333px] top-[16.21px] whitespace-nowrap">
                            <p className="leading-[32.067px]">Partnership and affiliate strategies</p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-white/60 text-[14.888px] top-[15.67px] whitespace-nowrap">
                            <p className="leading-[21.378px]">04</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.954px] border-solid h-[78.832px] relative shrink-0 w-[597.923px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[32.067px] left-0 top-[22.91px] w-[597.923px]">
                          <div className="absolute left-[584.19px] size-[13.743px] top-[9.16px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLbFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[35.86px] not-italic text-white text-[22.333px] top-[16.21px] whitespace-nowrap">
                            <p className="leading-[32.067px]">Viral loop engineering</p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-white/60 text-[14.888px] top-[15.67px] whitespace-nowrap">
                            <p className="leading-[21.378px]">05</p>
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
        <div className="bg-white content-stretch flex flex-col items-center overflow-clip py-[147.333px] relative shrink-0 w-[1360px]">
          <div className="content-stretch flex flex-col gap-[75.565px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[52.372px] whitespace-nowrap">
                      <p className="leading-[68.756px]">Turn your ideas into impactful</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[50.926px] text-[rgba(41,36,36,0.41)] whitespace-nowrap">
                      <p className="leading-[68.756px]">solutions like them!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[198.2294464111328px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full" href="/contact">
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
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] h-[588.923px] leading-[0] relative rounded-[25px] shrink-0 text-black to-[rgba(116,39,255,0.5)] w-[1276px] hover-lift card-animated">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center left-[47px] text-[30px] top-[241.46px] w-[547.728px]">
                <p className="leading-[35.335px] whitespace-pre-wrap">High cost per acquisition (CPA), minimal repeat purchases due to lack of robust email strategy.</p>
              </div>
              <div className="-translate-y-1/2 absolute font-['Schibsted_Grotesk:Bold',sans-serif] font-bold h-[133.489px] left-[47px] right-[653.82px] top-[calc(50%+133.74px)]">
                <div className="-translate-y-1/2 absolute flex flex-col h-[41.225px] justify-center left-[15.7px] text-[20px] top-[62.61px] w-[506.395px]">
                  <p className="leading-[23.557px] whitespace-pre-wrap">Our approach integrates SEO and ROI-focused paid search to boost visibility, leverages display and programmatic ads for timely retargeting, and uses segmented, automated email campaigns to drive repeat purchases.</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[2px] text-[50px] top-[8px] whitespace-nowrap">
                  <p className="leading-[23.557px]">"</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[732px] top-[calc(50%+0.5px)] w-[486px]">
                <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] h-[129px] overflow-clip relative rounded-[15px] shrink-0 to-[#7427ff] w-full">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold justify-center left-[205px] text-[22px] top-[64px] w-[230px]">
                    <p className="leading-[24px] whitespace-pre-wrap">increase in organic traffic over 6 months</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center left-[21px] text-[60px] top-[65px] whitespace-nowrap">
                    <p className="leading-[35.335px]">{`300% `}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] h-[129px] overflow-clip relative rounded-[15px] shrink-0 to-[#7427ff] w-full">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold justify-center left-[206px] text-[22px] top-[65px] w-[230px]">
                    <p className="leading-[24px] whitespace-pre-wrap">reduction in bounce rates via optimized landing pages</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center left-[40px] text-[60px] top-[65px] whitespace-nowrap">
                    <p className="leading-[35.335px]">{`40% `}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] h-[129px] overflow-clip relative rounded-[15px] shrink-0 to-[#7427ff] w-full">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold justify-center left-[206px] text-[22px] top-[64px] w-[273px]">
                    <p className="leading-[24px] whitespace-pre-wrap">increase in monthly bookings, leading to a significant revenue boost</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center left-[63px] text-[60px] top-[64px] whitespace-nowrap">
                    <p className="leading-[35.335px]">2X</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center left-[47px] text-[20px] top-[77.46px] whitespace-nowrap">
                <p className="leading-[21.594px]">SANTOSH JEWELLERS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#090909] content-stretch flex flex-col items-center overflow-clip py-[143.556px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[52.889px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full animate-fade-in-up">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[52.166px] text-white">
                      <p className="leading-[68.756px]">We deliver on time, in days and weeks</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] md:text-[32px] lg:text-[50.72px] text-[rgba(255,255,255,0.52)]">
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">01</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[22.667px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">{`Talent needs assessment & strategy`}</p>
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">02</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[22.135px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">{`Sourcing, screening & candidate selection`}</p>
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[14.993px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[19.644px]">03</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[14px] md:text-[18px] lg:text-[21.427px] text-white tracking-[0.9444px]">
                        <p className="leading-[30.147px]">Onboarding & ongoing HR support</p>
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
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[36px] lg:text-[51.959px] text-white">
                      <p className="leading-[68.756px]">{`What we deliver on `}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] md:text-[32px] lg:text-[51.339px] text-[rgba(255,255,255,0.52)]">
                      <p className="leading-[68.756px]">HR & Talent Management</p>
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
                    <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[44.979px] text-white whitespace-nowrap">
                      <p className="leading-[54.4px]">Talent Acquisition & Recruitment</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[574.43px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[11.806px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white w-[331.988px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Find and attract the right talent for your organization. Our strategic recruitment process ensures you hire candidates who align with your culture and drive business success.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[14.167px] text-white whitespace-nowrap">
                              <p className="mb-0">Talent sourcing strategy</p>
                              <p className="mb-0">Interview process design</p>
                              <p className="mb-0">Employer branding</p>
                              <p className="mb-0">Candidate assessment</p>
                              <p>Offer negotiation support</p>
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
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgTalentAcquisition} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[52.89px] top-[51.94px] w-[597.248px] animate-fade-in-up">
                    <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[45.156px] whitespace-nowrap">
                      <p className="leading-[54.4px]">Employee Development & Training</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[597.248px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[7.82px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.867px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Develop your team's skills and capabilities with customized training programs. We create learning paths that align with your business goals and help employees reach their full potential.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[14.056px] whitespace-nowrap">
                            <p className="mb-0">Leadership development</p>
                            <p className="mb-0">Skills gap analysis</p>
                            <p className="mb-0">Custom training programs</p>
                            <p className="mb-0">Career path planning</p>
                            <p>Mentorship programs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px] animate-fade-in-right">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full hover-scale transition-transform duration-300">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgEmployeeDev} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffd500] content-stretch flex flex-col items-center shrink-0 sticky top-[120px] z-30 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[30.779px] items-start left-[52.89px] top-[51.94px] animate-fade-in-up">
                    <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[44.979px] whitespace-nowrap">
                      <p className="leading-[54.4px]">Retention & Performance Management</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[599.958px]">
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[2.909px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.203px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Keep your best talent engaged and performing at their peak. We design retention strategies and performance systems that drive results and reduce turnover.</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.5px] not-italic relative shrink-0 text-[#1b1b1b] text-[13.613px] whitespace-nowrap">
                            <p className="mb-0">Performance review systems</p>
                            <p className="mb-0">Employee engagement surveys</p>
                            <p className="mb-0">Compensation strategy</p>
                            <p className="mb-0">Retention programs</p>
                            <p>HR analytics & reporting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px] animate-fade-in-right">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full hover-scale transition-transform duration-300">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgRetention} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1360px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[113.67%] left-0 max-w-none top-[-6.83%] w-full" src={imgSection} />
          </div>
          <div className="content-stretch flex flex-col gap-[75.556px] items-start justify-center max-w-[1360px] pb-[52.889px] px-[37.778px] relative shrink-0 w-full">
            <div className="h-[265.389px] relative shrink-0 w-full">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-0.47px)] top-[calc(50%+0.37px)] w-[1317.5px]">
                <div className="content-stretch flex flex-col items-start min-w-[1171.2149658203125px] pb-[0.756px] relative shrink-0">
                  <div className="flex flex-col font-['GT_Super_Ds_Trial:Su',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[170px] text-[color:var(--color\/white\/solid,white)] tracking-[0.9444px] whitespace-nowrap">
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
        <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[939px] items-center overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[60.454px] h-[1006.778px] items-start max-w-[1360px] pt-[143.556px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[51.856px] whitespace-nowrap">
                      <p className="leading-[68.756px]">What Our Clients Say</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[51.546px] text-[rgba(41,36,36,0.41)] whitespace-nowrap">
                      <p className="leading-[68.756px]">We guarantee next success is yours!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start max-w-[1360px] pr-[37.778px] relative shrink-0 w-[1194.411px]">
              <div className="h-[117.857px] mb-[-79.957px] shrink-0 w-full" />
              <div className="content-stretch flex flex-col items-start mb-[-79.957px] relative shrink-0 w-full">
                <div className="h-[506.222px] max-w-[389.111083984375px] relative shrink-0 w-[389.111px]">
                  <div className="absolute content-stretch flex items-start left-0 right-[-778.22px] top-[-25.82px]">
                    <div className="bg-[var(--color\/white\/solid,white)] content-stretch flex flex-[1_0_0] flex-col gap-[0.661px] h-[506.222px] items-start max-w-[389.111083984375px] min-h-px min-w-px pb-[30.222px] pt-[29.594px] px-[30.222px] relative testimonial-card">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">Digil</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[26.265px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[22px] w-[348.5px]">
                          <p className="leading-[37.683px] whitespace-pre-wrap">{`''Working with Sivarsa completely changed how we approach hiring. They helped us bring in the right talent quickly, which was exactly what we needed during a crucial phase''`}</p>
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
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                                <p className="leading-[30.222px]">{`CEO & Founder`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--color\/white\/solid,white)] content-stretch flex flex-[1_0_0] flex-col gap-[0.661px] h-[506.222px] items-start max-w-[389.111083984375px] min-h-px min-w-px pb-[30.222px] pt-[29.594px] px-[30.222px] relative testimonial-card">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">Santosh</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[15.933px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[22px] w-[312.611px]">
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
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                                <p className="leading-[30.222px]">{`CEO & Founder`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--color\/white\/solid,white)] content-stretch flex flex-[1_0_0] flex-col gap-[0.661px] h-[506.222px] items-start max-w-[389.111083984375px] min-h-px min-w-px pb-[30.222px] pt-[29.594px] px-[30.222px] relative testimonial-card">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
                        <p className="leading-[30.222px]">GNT</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.331px] pr-[14.733px] pt-[70.012px] relative shrink-0">
                        <div className="flex flex-col font-['Segoe_UI:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[0px] w-[318.278px]">
                          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[22px] whitespace-pre-wrap">
                            <span className="leading-[37.683px] text-[#7e7e81]">{`''`}</span>
                            <span className="leading-[37.683px]">
                              {`With Sivarsa, Our campaigns gained momentum. `}
                              <br aria-hidden="true" />
                              {` Real, measurable momentum.`}
                            </span>
                            <span className="leading-[37.683px] text-[#1b1b1b]">{`''`}</span>
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
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[18.889px] whitespace-nowrap">
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
          </div>
        </div>
        <div className="h-[591.18px] relative rounded-[32px] shrink-0 w-[1345px]">
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
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[15.6px] top-[9.5px] whitespace-nowrap">
                <p className="leading-[20px]">Get Started</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[0] left-[72px] not-italic text-[47.1px] text-white top-[122.08px] tracking-[0.4px] w-[976px]">
            <div className="flex flex-col justify-center mb-[-0.003px] relative shrink-0 whitespace-nowrap">
              <p className="leading-[64.8px]">{`Try Our Rapid Prototyping Service `}</p>
            </div>
            <div className="flex flex-col justify-center mb-[-0.003px] min-w-full relative shrink-0 w-[min-content]">
              <p className="whitespace-pre-wrap">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64.8px] not-italic">Only $</span>
                <span className="leading-[64.8px]">1000</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64.8px] not-italic">{` for One Week`}</span>
                <span className="leading-[64.8px]">{` `}</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64.8px] not-italic">Get a clickable</span>
                <span className="leading-[64.8px]">{` `}</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64.8px] not-italic">prototype and technical blueprint for your software idea in just 7 days.</span>
                <span className="leading-[64.8px]">{` .`}</span>
              </p>
            </div>
          </div>
          <div className="absolute border border-[rgba(255,255,255,0.15)] border-solid h-[30.08px] left-[72px] rounded-[100px] top-[72px] w-[191.83px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[36px] not-italic text-[12.3px] text-white top-[13.64px] whitespace-nowrap">
              <p className="leading-[16.9px]">Only 4 seats per month</p>
            </div>
            <div className="absolute left-[12px] size-[16px] top-[6.03px]">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCtaSeatImg} />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center py-[38px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[65.257px] items-start px-[36.254px] relative shrink-0 w-full max-w-[1291px]">
            <div className="h-[132.328px] relative shrink-0 w-[436.6px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[0.003px] relative size-full text-[#1b1b1b] text-[50.484px] tracking-[0.9064px] whitespace-nowrap">
                <div className="flex flex-col justify-center mb-[-0.003px] relative shrink-0">
                  <p className="leading-[65.983px]">Frequently asked</p>
                </div>
                <div className="flex flex-col justify-center mb-[-0.003px] relative shrink-0">
                  <p className="leading-[65.983px]">questions</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 animate-fade-in-up">
              <div className="content-stretch flex items-start relative">
                <div className="relative shrink-0 w-[859.224px]">
                  <div className="content-stretch flex flex-col items-start relative">
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">How long does it take to build software?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">How can a great mobile design benefit startups or small businesses?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">Do you customize the design for my specific business needs and target audience?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">How do you ensure that the mobile design aligns with my app's development process?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">Can you redesign my existing app for better user engagement?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">How do you incorporate feedback into the design process?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f0f0f0] border-b-[0.906px] border-solid h-[84.291px] relative shrink-0 w-[859.224px] faq-item cursor-pointer">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute h-[83.385px] left-0 top-0 w-[859.224px]">
                          <div className="absolute left-[819.34px] size-[10.876px] top-[36.25px]">
                            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFaqIcon} />
                          </div>
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[17.946px] top-[41.55px] whitespace-nowrap">
                            <p className="leading-[25.378px]">How much does it cost to design a mobile app?</p>
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
        {/* Contact Section */}
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[120px] relative shrink-0 w-full">
          <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
              {/* Left Content */}
              <div className="flex flex-col items-start max-w-[434px]">
                <h2 className="font-['Inter',sans-serif] font-extrabold text-[40px] md:text-[55px] leading-[1.3] tracking-[1px] text-[#1b1b1b]">
                  Have a Project?<br /><span className="text-[#7e7e81]">Let&apos;s talk!</span>
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
