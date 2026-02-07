"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Hero & Background Images
const imgHero = "/assets/hero-bg.png";
const imgPattern2 = "/assets/pattern-dots.png";
const imgStars1 = "/assets/stars-bg.png";
const imgPurpleComposition21 = "/assets/hero-illustration.png";

// Client Logos
const img = "/assets/client-logo-1.png";
const img1 = "/assets/client-logo-2.png";
const img2 = "/assets/client-logo-3.png";
const img3 = "/assets/client-logo-4.png";
const img4 = "/assets/client-logo-5.png";

// Service Preview Images
const imgWavespaceNoSoundVideoMp41 = "/assets/service-preview-1.png";
const imgOneee1 = "/assets/service-preview-2.png";
const imgPhone14011 = "/assets/service-preview-3.png";

// Case Study Images
const imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E3 = "/assets/case-study-1.png";
const imgImage25 = "/assets/case-study-2.png";

// Testimonial Images
const imgSilver1 = "/assets/testimonial-bg.png";
const img547911Af409Cc82D8Ecb150Dddafe6Cf1 = "/assets/testimonial-avatar.png";

// Contact Section Images
const imgDiv = "/assets/contact-card-1.png";
const imgDiv1 = "/assets/contact-illustration-1.png";
const imgDiv2 = "/assets/contact-illustration-2.png";

// Button & Arrow Icons
const imgBtnIcon = "/assets/btn-icon.png";
const imgArrowUpIcon = "/assets/arrow-up.png";
const imgBtnArrowIcon = "/assets/arrow-btn.png";

// Feature Images
const imgWebDesign = "/assets/feature-software.png";
const imgUiUxDesign = "/assets/feature-hr.png";
const imgWebDesign1 = "/assets/feature-marketing.png";

// Achievements Section
const imgSection = "/assets/achievements-bg.png";

// Contact Icons
const imgArrowIcon = "/assets/arrow-icon.png";
const imgWhatsappIcon = "/assets/whatsapp-icon.png";
const imgEmailIcon = "/assets/email-icon.png";
const imgWhatsappIcon1 = "/assets/whatsapp-icon-alt.png";
const imgContactTick = "/assets/contact-tick.png";

// SVG Assets
const imgGroup = "/assets/logo-icon.svg";
const imgPattern1 = "/assets/pattern-mask.svg";
const imgEllipse1 = "/assets/ellipse-decoration.svg";
const imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E2 = "/assets/gradient-mesh.svg";
const imgSilver = "/assets/silver-gradient.svg";
const imgGroup1 = "/assets/check-icon-1.svg";
const imgGroup2 = "/assets/check-icon-2.svg";
const imgGroup3 = "/assets/check-icon-3.svg";
const imgGroup4 = "/assets/check-icon-4.svg";

export default function Landing() {
  return (
    <div className="bg-black relative size-full">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full overflow-hidden">
          <div className="h-[841px] relative shrink-0 w-[1440px] overflow-hidden">
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
              <div className="absolute h-[643px] left-[716px] top-[106px] w-[588px] hero-image animate-float">
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
            <div className="absolute content-stretch flex flex-col gap-[149px] items-start left-[76px] top-[219px] w-[1060px]">
              <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[762px] hero-content">
                <p className="bg-clip-text font-['GT_Super_Ds_Trial:Bd',sans-serif] leading-[84px] not-italic relative shrink-0 text-[82px] uppercase w-[786.107px] whitespace-pre-wrap animate-fade-in-up" style={{ backgroundImage: "linear-gradient(-38.5682deg, rgb(255, 255, 255) 62.646%, rgb(0, 0, 0) 108.48%)", WebkitTextFillColor: "transparent" }}>
                  Your Growth Partner From Idea to Impact
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-70 relative shrink-0 text-[22px] text-white w-[544px] whitespace-pre-wrap animate-fade-in-up delay-200">{`We build the software, attract the customers,  and hire the talent—so you can focus on building your business.`}</p>
                <div className="content-stretch flex flex-col h-[96.121px] items-start justify-center relative shrink-0 w-[511px] animate-fade-in-up delay-300">
                  <div className="content-stretch flex gap-[31.6px] items-center justify-center relative shrink-0 w-[511px]">
                    <Link href="/contact" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-[270.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[20px] text-black">
                        Book a Strategy Call
                      </span>
                    </Link>
                    <Link href="/services/software-development" className="bg-white border-[0.714px] border-solid border-white h-[50.28px] relative rounded-[24.997px] shrink-0 w-[210.089px] btn-animated cursor-pointer hover:shadow-lg flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-medium text-[20px] text-black">
                        Explore services
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col font-['Schibsted_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[677.504px]">
                  <p className="leading-[normal] whitespace-pre-wrap">47+ Companies Scaled | 200+ Projects Delivered | 95% Client Retention</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[54px] items-center relative shrink-0 w-[1318px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic opacity-70 relative shrink-0 text-[14px] text-white tracking-[-0.0014px]">
                  Trusted by top innovative teams:
                </p>
                <div className="h-[30px] relative shrink-0 w-[117.5px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
                </div>
                <div className="h-[30px] relative shrink-0 w-[93.75px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
                </div>
                <div className="h-[30px] relative shrink-0 w-[117.692px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
                </div>
                <div className="h-[30px] relative shrink-0 w-[141.563px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
                </div>
                <div className="h-[30px] relative shrink-0 w-[112.174px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center overflow-clip py-[68px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1284.444px]">
            <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
              <div className="h-[723px] relative shrink-0 w-[1285px] animate-fade-in-up">
                <div className="absolute h-[723px] left-0 top-0 w-[1285px] service-card">
                  <img alt="Software Development" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500" src={imgWavespaceNoSoundVideoMp41} />
                </div>
                <div className="absolute bg-[#a0a9ae] h-[723px] left-0 overflow-clip top-0 w-[428.333px] service-card">
                  <div className="absolute left-[-154px] shadow-[8px_-7px_17px_0px_rgba(0,0,0,0.35)] size-[736px] top-[113px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOneee1} />
                    </div>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[19px] not-italic text-[30px] text-black top-[107.5px] tracking-[-2px] whitespace-nowrap">
                  <p className="leading-[70.4px]">SOFTWARE DEVELOPMENT</p>
                </div>
                <div className="absolute bg-[#17614a] h-[723px] left-[428px] overflow-clip top-0 w-[428.333px]">
                  <div className="absolute left-[-6362px] size-[1536px] top-[-2816px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhone14011} />
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-54.17px)] not-italic text-[30px] text-white top-[107.5px] tracking-[-2px] whitespace-nowrap">
                    <p className="leading-[70.4px]">TALENT</p>
                  </div>
                  <div className="absolute h-[624.613px] left-[61.02px] top-[205px] w-[306.294px]">
                    <div className="absolute contents left-[15.56px] top-[13.44px]">
                      <div className="absolute flex h-[646.93px] items-center justify-center left-[-82.61px] top-[13.46px] w-[497.496px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                        <div className="-rotate-90 flex-none">
                          <div className="h-[497.496px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[98.168px_-0.018px] mask-size-[275.877px_597.026px] relative w-[646.93px]" style={{ maskImage: `url('${imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E2}')` }}>
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E3} />
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[597.026px] left-[16.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.323px_0px] mask-size-[275.877px_597.026px] rounded-[15.315px] top-[13.44px] w-[278.209px]" style={{ maskImage: `url('${imgSandroievaCoverGradientDesignWithDynamicMeshAbstractCol0903F70EB4E149FbB05006820E01262E2}')` }}>
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.315px]">
                          <img alt="" className="absolute h-[131.65%] left-[-138.52%] max-w-none top-[-15.82%] w-[376.68%]" src={imgImage25} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents left-[-10.21px] top-[-83.07px]">
                      <div className="absolute inset-[0_-0.23%_0.11%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.209px_-83.071px] mask-size-[314.647px_806.574px]" style={{ maskImage: `url('${imgSilver}')` }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSilver1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#6f2fb8] h-[723px] left-[856px] overflow-clip top-0 w-[428.333px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-64.17px)] not-italic text-[30px] text-white top-[107.5px] tracking-[-2px] whitespace-nowrap">
                    <p className="leading-[70.4px]">GROWTH</p>
                  </div>
                  <div className="absolute h-[726px] left-[-18.64px] top-[143px] w-[513.377px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img547911Af409Cc82D8Ecb150Dddafe6Cf1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black content-stretch flex flex-col items-center overflow-clip pb-[132px] pt-[101px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[66px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1348.667px]">
            <div className="content-stretch flex items-end relative shrink-0 w-full animate-fade-in-up">
              <div className="content-stretch flex flex-col items-start pb-[0.954px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.954px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[51.03px] text-white whitespace-nowrap">
                      <p className="leading-[68.756px]">Why Growing Companies Choose Sivarsa</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.954px] relative shrink-0 w-[1203.222px]">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Rg',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[47.222px] text-white w-[1203px]">
                      <p className="leading-[68.756px] whitespace-pre-wrap">{`We are more than a service provider , `}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] relative shrink-0 w-[1280px] card-animated animate-fade-in-up delay-100">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[35px] items-start left-0 top-[calc(50%-0.01px)] w-[288px]">
                <div className="content-stretch flex items-start pr-[21.469px] relative shrink-0 w-full">
                  <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[70.4px] not-italic relative shrink-0 text-[59px] text-white tracking-[-2px] w-[337.424px] whitespace-pre-wrap">
                    <p className="mb-0">All-in-one</p>
                    <p>Solution</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[281.169px]">
                  <p className="leading-[20.8px] whitespace-pre-wrap">No need to juggle multiple vendors. Get software, marketing, and talent under one roof with seamless coordination.</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#f3ffab] h-[240px] left-[336px] overflow-clip right-0 rounded-[25px] top-1/2">
                <div className="absolute inset-[-12px_-47.2px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[166.16%] left-0 max-w-none top-[-33.08%] w-full" src={imgDiv} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] relative shrink-0 w-[1280px] card-animated animate-fade-in-up delay-200">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[22px] items-start left-0 top-[calc(50%-0.01px)] w-[288px]">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[70.4px] not-italic relative shrink-0 text-[60px] text-white tracking-[-2px] whitespace-nowrap">
                    <p className="mb-0">{`Proven `}</p>
                    <p>Expertise</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[266.403px]">
                  <p className="leading-[20.8px] whitespace-pre-wrap">47+ companies scaled, 200+ projects delivered, and a 95% client retention rate. We deliver what we promise.</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#f3ffab] h-[240px] left-[336px] overflow-clip right-0 rounded-[25px] top-1/2">
                <div className="absolute inset-[-12px_-47.2px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[166.16%] left-0 max-w-none top-[-33.08%] w-full" src={imgDiv1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] relative shrink-0 w-[1280px] card-animated animate-fade-in-up delay-300">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[35px] items-start left-0 top-[calc(50%-0.01px)] w-[270.919px]">
                <div className="content-stretch flex items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[70.4px] not-italic relative shrink-0 text-[60px] text-white tracking-[-2px] whitespace-nowrap">
                    <p className="mb-0">{`Client `}</p>
                    <p className="mb-0">Centric</p>
                    <p>Aproach</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
                  <p className="leading-[20.8px] whitespace-pre-wrap">{`Every Business is unique. We Offer  Customizations  perfectly with your Goals`}</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#f3ffab] h-[240px] left-[336px] overflow-clip right-0 rounded-[25px] top-1/2">
                <div className="absolute inset-[-12px_-47.2px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[166.16%] left-0 max-w-none top-[-33.08%] w-full" src={imgDiv2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] relative shrink-0 w-[1280px] card-animated animate-fade-in-up delay-400">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[35px] items-start left-0 top-[calc(50%-0.01px)] w-[288px]">
                <div className="content-stretch flex items-start pr-[21.469px] relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[70.4px] not-italic relative shrink-0 text-[52px] text-white tracking-[-2px] whitespace-nowrap">
                    <p className="mb-0">{`Transparent &`}</p>
                    <p>Collaborative</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[14px] text-white w-[281.169px] whitespace-pre-wrap">
                  <p className="mb-0">{`Every Business is unique. We Offer  Customizations  perfectly with your Goals`}</p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#f3ffab] h-[240px] left-[336px] overflow-clip right-0 rounded-[25px] top-1/2">
                <div className="absolute inset-[-12px_-47.2px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[166.16%] left-0 max-w-none top-[-33.08%] w-full" src={imgDiv} />
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
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[198.2294464111328px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full btn-animated hover-glow" href="/contact">
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
                  <p className="leading-[23.557px]">“</p>
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
            <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] h-[588.923px] relative rounded-[25px] shrink-0 to-[rgba(116,39,255,0.5)] w-[1276px] hover-lift card-animated">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[47px] text-[30px] text-black top-[241.46px] w-[547.728px]">
                <p className="leading-[35.335px] whitespace-pre-wrap">High cost per acquisition (CPA), minimal repeat purchases due to lack of robust email strategy.</p>
              </div>
              <div className="-translate-y-1/2 absolute h-[133.489px] left-[47px] right-[653.82px] top-[calc(50%+133.74px)]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold h-[41.225px] justify-center leading-[0] left-[15.7px] text-[20px] text-black top-[62.61px] w-[506.395px]">
                  <p className="leading-[23.557px] whitespace-pre-wrap">Our approach integrates SEO and ROI-focused paid search to boost visibility, leverages display and programmatic ads for timely retargeting, and uses segmented, automated email campaigns to drive repeat purchases.</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[50px] text-black top-[355px] whitespace-nowrap">
                <p className="leading-[23.557px]">“</p>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start leading-[0] left-[732px] text-black top-[calc(50%+0.5px)] w-[486px]">
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
              <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[47px] text-[20px] text-black top-[77.46px] whitespace-nowrap">
                <p className="leading-[21.594px]">SANTOSH JEWELLERS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#090909] content-stretch flex flex-col items-center overflow-clip py-[143.556px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[52.889px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.166px] text-white whitespace-nowrap">
                      <p className="leading-[68.756px]">We deliver on time, in days and weeks</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[50.72px] text-[rgba(255,255,255,0.52)] whitespace-nowrap">
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[22.667px] text-white tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[30.147px]">Detailed requirements document</p>
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[22.135px] text-white tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[30.147px]">Technical feasibility assessment</p>
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
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] max-h-[30.146665573120117px] not-italic relative shrink-0 text-[21.427px] text-white tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[30.147px]">Growth opportunity analysis</p>
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
        <div id="services" className="bg-[#090909] content-stretch flex flex-col gap-[0.009px] items-center relative shrink-0 w-full scroll-mt-20">
          <div className="content-stretch flex flex-col items-start max-w-[1360px] pb-[52.889px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[51.959px] text-white whitespace-nowrap">
                      <p className="leading-[68.756px]">From startup to enterprise, grow your business</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start pb-[0.756px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[51.339px] text-[rgba(255,255,255,0.52)] whitespace-nowrap">
                      <p className="leading-[68.756px]">with Sivarsa</p>
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
                      <p className="leading-[54.4px]">Software Development</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[574.43px]">
                      <div className="absolute content-stretch flex flex-col gap-[30.222px] items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[11.806px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Build scalable, user-friendly software that solves real problems and drives business growth.</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <Link className="bg-white content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[214.15277099609375px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full btn-animated hover-scale" href="/services/software-development">
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
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
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
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-full" src={imgWebDesign} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-center shrink-0 sticky top-[60px] z-20 w-full">
                <div className="h-[438.222px] max-w-[1360px] relative shrink-0 w-[1360px]">
                  <div className="absolute content-stretch flex flex-col gap-[30.779px] items-start left-[52.89px] top-[51.94px] animate-fade-in-up">
                    <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[45.156px] whitespace-nowrap">
                      <p className="leading-[54.4px]">{`Hr & Talent Management`}</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[597.248px]">
                      <div className="absolute content-stretch flex flex-col gap-[30.222px] items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[7.82px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.867px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">{` Attract, develop, and retain top talent. Our strategic HR solutions help you build high-performing teams that drive business results.`}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <Link className="bg-[#1b1b1b] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[218.21388244628906px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full btn-animated hover-scale" href="/services/hr-talent-management">
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
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
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
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
                    <div className="flex-[1_0_0] max-w-[366.4444580078125px] min-h-px min-w-px relative w-full">
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
                    <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[44.979px] whitespace-nowrap">
                      <p className="leading-[54.4px]">Growth Marketing</p>
                    </div>
                    <div className="h-[211.036px] relative shrink-0 w-[599.958px]">
                      <div className="absolute content-stretch flex flex-col gap-[30.222px] items-start left-0 top-[-0.68px]">
                        <div className="content-stretch flex flex-col items-start max-w-[358.8888854980469px] pr-[2.909px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.203px] w-[358.889px]">
                            <p className="leading-[26.35px] whitespace-pre-wrap">Acquire more customers and scale faster. Our data-driven marketing strategies turn traffic into revenue and experiments into growth</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <a className="bg-[#1b1b1b] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[225.33499145507812px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] shrink-0 w-full btn-animated hover-scale" href="/services/growth-marketing">
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
                      <div className="absolute content-stretch flex flex-col items-start left-[434.44px] top-0">
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
                  <div className="absolute content-stretch flex flex-col h-[332.444px] items-start justify-center left-[940.67px] max-w-[366.4444580078125px] top-[52.89px] w-[366.444px]">
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
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px] hover-lift animate-fade-in-up delay-100">
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
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px] hover-lift animate-fade-in-up delay-200">
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
              <div className="bg-[var(--color\/white\/solid,white)] border-[var(--color\/grey\/91,#e8e7e7)] border-r-[0.944px] border-solid content-stretch flex flex-col gap-[149.982px] items-start overflow-clip pl-[30.222px] pr-[31.167px] py-[30.222px] relative self-stretch shrink-0 w-[321.111px] hover-lift animate-fade-in-up delay-300">
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
            <div className="content-stretch flex flex-col items-start max-w-[1360px] pb-[363.914px] pr-[37.778px] relative shrink-0 w-[1194.411px]">
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
                          <p className="leading-[37.683px] whitespace-pre-wrap">{`'Sivarsa’s SEO gave us a real boost when we needed it.`}</p>
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
        <div className="bg-white content-stretch flex flex-col items-center pb-[162.444px] pt-[90.667px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[68px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-[1360px]">
            <div className="content-stretch flex h-[137.502px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.652px] relative shrink-0">
                <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[68.756px] not-italic relative shrink-0 text-[#1b1b1b] text-[51.339px] whitespace-nowrap">
                  <p className="mb-0">Frequently asked</p>
                  <p>questions</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[18.446px] whitespace-nowrap">
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
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[18.594px] whitespace-nowrap">
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
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[18.446px] whitespace-nowrap">
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
                <div className="border-[#f0f0f0] border-b-[0.944px] border-solid content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0 w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[18.446px] whitespace-nowrap">
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
                <div className="content-stretch flex items-center justify-between pr-[30.222px] py-[30.222px] relative shrink-0 w-[639px] faq-item cursor-pointer">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[18.594px] whitespace-nowrap">
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
              <div className="bg-[#1b1b1b] content-stretch flex flex-[1_0_0] flex-col items-start max-w-[316.3888854980469px] min-h-px min-w-px p-[30.222px] sticky top-0">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[58.556px]">
                  <div className="bg-white flex-[1_0_0] max-w-[58.55555725097656px] min-h-px min-w-px w-full" />
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
                  <a className="bg-[#ebfe5b] content-stretch cursor-pointer flex gap-[9.444px] isolate items-start justify-center max-w-[197.46444702148438px] overflow-clip pb-[15.111px] pt-[14.573px] px-[26.444px] relative rounded-[94.444px] shrink-0 w-full btn-animated hover-scale" href="http://wa.me/+8801785087148">
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
        <div className="bg-white h-[651.638px] overflow-clip relative shrink-0 w-full">
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[134.121px] items-start left-1/2 max-w-[1360px] px-[37.778px] top-[-0.76px] w-[1360px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[0.552px] relative shrink-0">
                <div className="flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[80.656px] not-italic relative shrink-0 text-[#1b1b1b] text-[65.853px] tracking-[0.9444px] whitespace-nowrap">
                  <p className="mb-0">Got a project in mind?</p>
                  <p>Let’s talk.</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0">
                <Link className="bg-[#3f2fee] content-stretch cursor-pointer flex gap-[7.556px] items-center justify-center max-w-[149.51498413085938px] overflow-clip px-[26.444px] py-[15.111px] relative rounded-[94.444px] self-stretch shrink-0 btn-animated hover-glow" href="/contact">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.993px] text-left text-white whitespace-nowrap" role="link" tabIndex={0}>
                      <p className="cursor-pointer leading-[18.889px]">Book a call</p>
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
            <div className="h-[212.5px] relative shrink-0 w-[1143.722px]">
              <div className="absolute content-stretch flex items-start left-0 right-[879.28px] top-[-0.73px]">
                <div className="content-stretch flex flex-col gap-[38.722px] items-start min-w-[264.7372131347656px] relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start pb-[0.859px] relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20.778px] tracking-[0.9444px] whitespace-nowrap">
                        <p className="leading-[28.258px]">India</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex flex-col gap-[2.833px] items-start relative shrink-0">
                    <a className="content-stretch flex gap-[3.778px] items-center max-w-[196.63333129882812px] relative shrink-0 w-full" href="mailto:info@sivarsa.com">
                      <div className="content-stretch flex flex-col h-[17.944px] items-start max-w-[196.63333129882812px] pt-[0.944px] relative shrink-0 w-[17px]">
                        <div className="max-w-[196.63333129882812px] relative shrink-0 size-[17px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEmailIcon} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.392px] text-left whitespace-nowrap">
                          <p className="leading-[20.683px]">hello@sivarsa.com</p>
                        </div>
                      </div>
                    </a>
                    <a className="content-stretch flex gap-[3.778px] items-center max-w-[196.63333129882812px] relative shrink-0 w-full" href="http://wa.me/+8801785087148">
                      <div className="max-w-[196.63333129882812px] relative shrink-0 size-[17px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWhatsappIcon1} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.171px] text-left whitespace-nowrap">
                          <p className="leading-[20.683px]">+880 1785 0871 48</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[18.133px] not-italic relative shrink-0 text-[#1b1b1b] text-[14.757px] whitespace-nowrap">
                        <p className="mb-0">Oriental Gofur Tower,</p>
                        <p className="mb-0">88/KA, Mohammadpur,</p>
                        <p>Dhaka,Bangladesh.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-start left-[642.22px] pl-[103.889px] top-0">
                <div className="relative self-stretch shrink-0 w-[208.439px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28.333px] justify-center leading-[0] left-0 not-italic text-[#1b1b1b] text-[20.615px] top-[13.22px] tracking-[0.9444px] w-[179.265px]">
                    <p className="leading-[28.258px] whitespace-pre-wrap">Business Inquiry</p>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-0 pt-[15.111px] top-[28.24px]">
                    <div className="content-stretch flex flex-col items-start pb-[0.944px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] whitespace-nowrap">
                          <p className="leading-[19.644px]">Email</p>
                        </div>
                      </div>
                      <a className="content-stretch cursor-pointer flex gap-[3.778px] items-center max-w-[196.63333129882812px] mb-[-0.944px] relative shrink-0 w-full" href="mailto:info@sivarsa.com">
                        <div className="content-stretch flex flex-col h-[17.944px] items-start max-w-[196.63333129882812px] pt-[0.944px] relative shrink-0 w-[17px]">
                          <div className="max-w-[196.63333129882812px] relative shrink-0 size-[17px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEmailIcon} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pb-[0.841px] relative shrink-0">
                          <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.392px] text-left whitespace-nowrap">
                            <p className="leading-[20.683px]">hello@sivarsa.com</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#e8e7e7] inset-[10%_99.7%_10%_0]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] content-stretch flex flex-col items-center py-[117.111px] relative shrink-0 w-full">
          <div className="h-[585.678px] max-w-[1360px] relative shrink-0 w-[1360px]">
            <div className="absolute content-stretch flex flex-col items-start left-[37.78px] max-w-[409.8888854980469px] top-[-0.66px]">
              <div className="content-stretch flex flex-col items-start pr-[0.888px] relative shrink-0">
                <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[71.4px] not-italic relative shrink-0 text-[#1b1b1b] text-[0px] text-[51.856px] tracking-[0.9444px] whitespace-nowrap">
                  <p className="mb-0">Have a Project?</p>
                  <p className="text-[#7e7e81]">Let’s talk!</p>
                </div>
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
              <div className="content-stretch flex flex-col items-start pt-[89.722px] relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.734px] whitespace-nowrap">
                    <p className="leading-[23.8px]">Schedule a call:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col items-start left-[687.56px] max-w-[634.6666259765625px] p-[39.667px] top-0 w-[634.667px]">
              <div className="content-stretch flex flex-col gap-[18.889px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[18.889px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[14.733px] relative">
                    <div className="bg-white border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col h-[50.613px] items-start max-w-[555.3333740234375px] overflow-clip pb-[15.196px] pt-[13.694px] px-[20.778px] relative rounded-[1.889px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] w-full">
                          <p className="leading-[normal] whitespace-pre-wrap">Email</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[14.733px] relative">
                    <div className="bg-white border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col h-[50.613px] items-start max-w-[555.3333740234375px] overflow-clip pb-[15.196px] pt-[13.694px] px-[20.778px] relative rounded-[1.889px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] w-full">
                          <p className="leading-[normal] whitespace-pre-wrap">Full name</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[18.889px] items-center pb-[14.724px] relative shrink-0 w-full">
                  <div className="border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pl-[1.889px] pr-[17px] py-[1.889px] relative rounded-[1.889px]">
                    <div className="content-stretch flex flex-col h-[51px] items-start justify-center min-h-[51px] pb-[12.278px] pl-[18.889px] pr-[15.111px] pt-[15.111px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip py-[0.944px] relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[14.993px] w-full">
                          <p className="leading-[21.722px] whitespace-pre-wrap">Project budget</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pl-[1.889px] pr-[17px] py-[1.889px] relative rounded-[1.889px]">
                    <div className="content-stretch flex flex-col h-[51px] items-start justify-center min-h-[51px] pb-[12.278px] pl-[18.889px] pr-[15.111px] pt-[15.111px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip py-[0.944px] relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[14.875px] w-full">
                          <p className="leading-[21.722px] whitespace-pre-wrap">How did you hear about us?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start max-w-[555.3333740234375px] overflow-auto pb-[44.946px] pt-[24.556px] px-[20.778px] relative rounded-[1.889px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[14.757px] w-full">
                      <p className="leading-[18.889px] whitespace-pre-wrap">Tell us about your product and goals.</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[11.333px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16.602px] whitespace-nowrap">
                    <p className="leading-[25.5px]">How can we help you?</p>
                  </div>
                  <div className="h-[96.097px] relative shrink-0 w-[555.333px]">
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-0 pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.222px] whitespace-nowrap">
                        <p className="leading-[18.776px]">UI/UX Design</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[130.12px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[12.912px] whitespace-nowrap">
                        <p className="leading-[18.776px]">SaaS Design</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[253.55px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.222px] whitespace-nowrap">
                        <p className="leading-[18.776px]">Branding</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[357.56px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.222px] whitespace-nowrap">
                        <p className="leading-[18.776px]">CRO</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[431.7px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-0">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.222px] whitespace-nowrap">
                        <p className="leading-[18.776px]">Mobile app</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-0 pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-[53.71px]">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.119px] whitespace-nowrap">
                        <p className="leading-[18.776px]">Development</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[129.67px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-[53.71px]">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.016px] whitespace-nowrap">
                        <p className="leading-[18.776px]">MVP Development</p>
                      </div>
                    </div>
                    <div className="absolute border-[#f0f0f0] border-[1.889px] border-solid content-stretch flex flex-col items-start left-[291.6px] pb-[11.277px] pt-[12.221px] px-[17px] rounded-[1.889px] top-[53.71px]">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.119px] whitespace-nowrap">
                        <p className="leading-[18.776px]">Web Design</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex isolate items-center justify-between pt-[18.889px] relative shrink-0 w-full">
                  <div className="bg-[#3f2fee] content-stretch flex flex-col items-center overflow-clip px-[26.444px] py-[15.111px] relative rounded-[100px] shrink-0 z-[2] btn-animated hover-glow cursor-pointer">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.87px] text-center text-white whitespace-nowrap">
                      <p className="leading-[25.5px]">Send message</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-end pb-[0.944px] relative shrink-0 z-[1]">
                    <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7e7e81] text-[13.945px] whitespace-nowrap">
                        <p className="leading-[18.417px]">Prefer email?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start mb-[-0.944px] relative shrink-0">
                      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[13.392px] whitespace-nowrap">
                        <p className="decoration-solid leading-[18.417px] underline">hello@sivarsa.agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}