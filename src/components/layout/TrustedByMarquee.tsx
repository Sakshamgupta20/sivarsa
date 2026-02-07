"use client";

import { BASE_PATH } from "@/lib/constants";

// Company logos for marquee
const logos = [
  { src: `${BASE_PATH}/assets/e1d1913cf107ec0d4752db980157af01db52ac15.png`, alt: "Recruitly" },
  { src: `${BASE_PATH}/assets/81a4fcc743420daf8c782b4858bb2f815efbc5ec.png`, alt: "500" },
  { src: `${BASE_PATH}/assets/1a08a43fb60438b1fdfdb67500f7bc2bf0b52e6b.png`, alt: "Oppa Travel" },
  { src: `${BASE_PATH}/assets/48e063866d9ff1ad2f69b61817c1b431143a76c2.png`, alt: "ZeroEssay" },
  { src: `${BASE_PATH}/assets/918216ec83d7eb3b64f66d81f4d65b04a6dd2679.png`, alt: "Andreessen Horowitz" },
  { src: `${BASE_PATH}/assets/73935e485288eec9c0677abc0d0600a9f833a972.png`, alt: "HeyGen" },
  { src: `${BASE_PATH}/assets/ab8fdb5ba619113577bf244db1327915b657d0f1.png`, alt: "Kodezi" },
  { src: `${BASE_PATH}/assets/f87deaecd42daf62cc4a7f5a7a2b9c4095cbeab3.png`, alt: "Mavis" },
];

interface TrustedByMarqueeProps {
  bgColor?: string;
  textColor?: string;
}

export default function TrustedByMarquee({
  bgColor = "#f1f1f1",
  textColor = "#1b1b1b"
}: TrustedByMarqueeProps) {
  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] pt-[56px] relative shrink-0 w-full" style={{ backgroundColor: bgColor }}>
      <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1440px] px-4 md:px-[40px] relative shrink-0 w-full">
        <div className="flex flex-col items-center relative shrink-0 w-full">
          <p className="font-['Inter',sans-serif] font-semibold text-[18px] md:text-[22px] text-center" style={{ color: textColor }}>
            Trusted by 500+ global companies
          </p>
        </div>
        <div className="h-[32px] overflow-hidden relative shrink-0 w-full">
          <div className="flex items-center gap-[72px] animate-ticker">
            {allLogos.map((logo, index) => (
              <div key={index} className="h-[32px] shrink-0 w-[120px]">
                <img
                  alt={logo.alt}
                  className="h-full w-auto object-contain opacity-60"
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
