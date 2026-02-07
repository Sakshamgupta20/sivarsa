"use client";

import { useState } from "react";

const imgBtnArrowIconWhite = "/assets/cc33d9c88b41312dae650fea64034944767af781.png";

const serviceTags = [
  "UI/UX Design",
  "SaaS Design",
  "Branding",
  "CRO",
  "Mobile app",
  "Development",
  "MVP Development",
  "Web Design"
];

interface ContactFormProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function ContactForm({ className = "", style }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className={`bg-white p-[24px] md:p-[42px] rounded-[20px] shadow-2xl ${className}`} style={style}>
      <form className="flex flex-col gap-[20px]">
        {/* Email and Name Row */}
        <div className="flex flex-col md:flex-row gap-[20px]">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border border-[#e5e5e5] rounded-lg px-[21px] py-[16px] font-['Inter',sans-serif] font-medium text-[16px] text-[#1b1b1b] placeholder:text-[#7e7e81] focus:outline-none focus:border-[#3f2fee] focus:ring-2 focus:ring-[#3f2fee]/10 transition-all"
          />
          <input
            type="text"
            placeholder="Full name"
            className="flex-1 border border-[#e5e5e5] rounded-lg px-[21px] py-[16px] font-['Inter',sans-serif] font-medium text-[16px] text-[#1b1b1b] placeholder:text-[#7e7e81] focus:outline-none focus:border-[#3f2fee] focus:ring-2 focus:ring-[#3f2fee]/10 transition-all"
          />
        </div>

        {/* Budget and Source Row */}
        <div className="flex flex-col md:flex-row gap-[20px]">
          <select className="flex-1 border border-[#e5e5e5] rounded-lg px-[20px] py-[16px] font-['Inter',sans-serif] font-medium text-[16px] text-[#7e7e81] focus:outline-none focus:border-[#3f2fee] focus:ring-2 focus:ring-[#3f2fee]/10 bg-white appearance-none cursor-pointer transition-all bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237e7e81%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat pr-[48px]">
            <option value="">Project budget</option>
            <option value="5k-10k">$5k - $10k</option>
            <option value="10k-25k">$10k - $25k</option>
            <option value="25k-50k">$25k - $50k</option>
            <option value="50k+">$50k+</option>
          </select>
          <select className="flex-1 border border-[#e5e5e5] rounded-lg px-[20px] py-[16px] font-['Inter',sans-serif] font-medium text-[16px] text-[#7e7e81] focus:outline-none focus:border-[#3f2fee] focus:ring-2 focus:ring-[#3f2fee]/10 bg-white appearance-none cursor-pointer transition-all bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237e7e81%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat pr-[48px]">
            <option value="">How did you hear about us?</option>
            <option value="google">Google</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <textarea
          placeholder="Tell us about your product and goals."
          rows={4}
          className="w-full border border-[#e5e5e5] rounded-lg px-[21px] py-[20px] font-['Inter',sans-serif] font-medium text-[16px] text-[#1b1b1b] placeholder:text-[#7e7e81] focus:outline-none focus:border-[#3f2fee] focus:ring-2 focus:ring-[#3f2fee]/10 resize-none transition-all"
        />

        {/* Service Tags */}
        <div className="flex flex-col gap-[16px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#1b1b1b]">
            How can we help you?
          </span>
          <div className="flex flex-wrap gap-[10px]">
            {serviceTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleService(tag)}
                className={`px-[20px] py-[12px] rounded-lg font-['Inter',sans-serif] font-semibold text-[14px] transition-all duration-200 ${
                  selectedServices.includes(tag)
                    ? 'bg-[#3f2fee] text-white border-2 border-[#3f2fee]'
                    : 'bg-white text-[#1b1b1b] border-2 border-[#e5e5e5] hover:border-[#3f2fee] hover:text-[#3f2fee]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-[16px] gap-4">
          <button
            type="submit"
            className="bg-[#3f2fee] px-[32px] py-[18px] rounded-full btn-animated hover-glow flex items-center gap-3 group"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-white">
              Send message
            </span>
            <img
              alt=""
              className="w-[12px] h-[12px] group-hover:translate-x-1 transition-transform"
              src={imgBtnArrowIconWhite}
            />
          </button>
          <div className="flex flex-col items-start md:items-end">
            <span className="font-['Inter',sans-serif] text-[15px] text-[#7e7e81]">
              Prefer email?
            </span>
            <a
              href="mailto:hello@sivarsa.agency"
              className="font-['Inter',sans-serif] font-bold text-[15px] text-[#1b1b1b] hover:text-[#3f2fee] transition-colors underline underline-offset-2"
            >
              hello@sivarsa.agency
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
