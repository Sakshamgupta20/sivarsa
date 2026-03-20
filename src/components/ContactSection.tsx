import ContactForm from "@/components/ContactForm";

const BASE_PATH = "";
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;

const bulletPoints = [
  "NDA? Absolutely just ask.",
  "We'll respond in 24 hours — fast & focused.",
  "Work with senior experts, not juniors.",
];

interface ContactSectionProps {
  id?: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[120px] relative shrink-0 w-full" id={id}>
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-[550px]">
            <h2 className="font-[family-name:var(--font-headings)] font-bold text-[28px] md:text-[40px] lg:text-[51px] leading-[1.2] text-[#1b1b1b]">
              Have a Project?<br /><span className="text-[#7e7e81]">Let&apos;s talk!</span>
            </h2>
            <div className="flex flex-col gap-[11px] mt-[31px]">
              {bulletPoints.map((item, index) => (
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
  );
}
