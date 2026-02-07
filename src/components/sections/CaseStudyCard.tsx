"use client";

interface Stat {
  value: string;
  description: string;
}

interface CaseStudyCardProps {
  companyName: string;
  challenge: string;
  approach: string;
  stats: Stat[];
  variant?: "light" | "dark";
}

export default function CaseStudyCard({
  companyName,
  challenge,
  approach,
  stats,
  variant = "light",
}: CaseStudyCardProps) {
  const textColor = variant === "dark" ? "text-black" : "text-black";

  return (
    <div className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[rgba(116,39,255,0.5)] h-[588.923px] relative rounded-[25px] shrink-0 w-full max-w-[1276px] hover-lift card-animated">
      {/* Company Name */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center left-[47px] text-[20px] top-[77.46px] whitespace-nowrap">
        <p className={`leading-[21.594px] ${textColor}`}>{companyName}</p>
      </div>

      {/* Challenge */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center left-[47px] text-[30px] top-[241.46px] w-[547.728px]">
        <p className={`leading-[35.335px] whitespace-pre-wrap ${textColor}`}>{challenge}</p>
      </div>

      {/* Approach Quote */}
      <div className="-translate-y-1/2 absolute font-['Schibsted_Grotesk:Bold',sans-serif] font-bold h-[133.489px] left-[47px] right-[653.82px] top-[calc(50%+133.74px)]">
        <div className="-translate-y-1/2 absolute flex flex-col h-[41.225px] justify-center left-[15.7px] text-[20px] top-[62.61px] w-[506.395px]">
          <p className={`leading-[23.557px] whitespace-pre-wrap ${textColor}`}>{approach}</p>
        </div>
        <div className={`-translate-y-1/2 absolute flex flex-col justify-center left-[2px] text-[50px] top-[8px] whitespace-nowrap ${textColor}`}>
          <p className="leading-[23.557px]">&ldquo;</p>
        </div>
      </div>

      {/* Stats */}
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[732px] top-[calc(50%+0.5px)] w-[486px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[rgba(38,93,246,0)] to-[#7427ff] h-[129px] overflow-clip relative rounded-[15px] shrink-0 w-full"
          >
            <div className="-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold justify-center left-[205px] text-[22px] top-[64px] w-[250px]">
              <p className={`leading-[24px] whitespace-pre-wrap ${textColor}`}>{stat.description}</p>
            </div>
            <div className={`-translate-y-1/2 absolute flex flex-col font-['Schibsted_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center left-[21px] text-[60px] top-[65px] whitespace-nowrap ${textColor}`}>
              <p className="leading-[35.335px]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
