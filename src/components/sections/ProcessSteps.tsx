"use client";

import { BASE_PATH } from "@/lib/constants";

interface Step {
  number: string;
  title: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
  arrowIcon?: string;
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  arrowIcon = `${BASE_PATH}/assets/arrow-up.png`,
}: ProcessStepsProps) {
  return (
    <div className="bg-[#090909] content-stretch flex flex-col items-center overflow-clip py-[143.556px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[52.889px] items-start max-w-[1360px] px-[37.778px] relative shrink-0 w-full">
        {/* Title Section */}
        <div className="content-stretch flex items-end relative shrink-0 w-full animate-fade-in-up">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center not-italic relative shrink-0 text-[52.166px] text-white whitespace-nowrap">
              <p className="leading-[68.756px]">{title}</p>
            </div>
            <div className="flex flex-col font-[family-name:var(--font-headings)] font-bold justify-center not-italic relative shrink-0 text-[50.72px] text-[rgba(255,255,255,0.52)] whitespace-nowrap">
              <p className="leading-[68.756px]">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start w-full max-w-[900px] animate-fade-in-up delay-200">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`bg-[#242424] ${
                  index < steps.length - 1 ? "border-[#3a3a3a] border-b-[0.944px] border-solid" : ""
                } content-stretch flex items-center justify-between pb-[31.167px] pt-[30.222px] px-[30.222px] relative shrink-0 w-full faq-item cursor-pointer hover:bg-[#2a2a2a] transition-colors`}
              >
                <div className="content-stretch flex gap-[15.111px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#7e7e81] text-[15.111px] tracking-[0.9444px] whitespace-nowrap">
                      <p className="leading-[19.644px]">{step.number}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[22.667px] text-white tracking-[0.9444px]">
                      <p className="leading-[30.147px]">{step.title}</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[15.111px]">
                  <img
                    alt=""
                    className="max-w-none size-full object-contain"
                    src={arrowIcon}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
