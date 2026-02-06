"use client";

import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Services", href: "/services/software-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Growth Marketing", href: "/services/growth-marketing" },
];

const menuLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
  { label: "About Us", href: "#about" },
  { label: "Career", href: "#career" },
];

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center p-5 relative shrink-0 w-full max-w-[1440px] mx-auto">
      <div className="content-stretch flex flex-col h-[360px] items-start overflow-hidden p-[28.426px] relative rounded-[18.207px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18.207px]">
          <div className="absolute bg-black inset-0 rounded-[18.207px]" />
          <Image
            src="/assets/footer-bg.png"
            alt=""
            fill
            className="object-cover rounded-[18.207px]"
          />
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[18.951px] items-start relative shrink-0 w-full z-10">
          <div className="content-stretch flex flex-col flex-[1_0_0] gap-[9.475px] items-start min-h-px min-w-px relative">
            <Link href="/" className="flex gap-[4.738px] items-center relative shrink-0">
              <Image
                src="/assets/logo-icon.svg"
                alt="Sivarsa Logo"
                width={43}
                height={43}
                className="shrink-0"
              />
              <div className="flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28.426px] text-white whitespace-nowrap">
                <p className="leading-[normal]">SIVARSA</p>
              </div>
            </Link>
            <div className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.4] opacity-60 relative shrink-0 text-[14.21px] text-white w-[237.547px]">
              <p>
                At Sivarsa, we craft innovative software solutions that empower
                businesses to thrive in the digital era.
              </p>
            </div>
            <div className="content-stretch flex gap-[9.475px] items-start relative shrink-0">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="relative shrink-0 size-[37.901px] social-icon rounded-full p-2"
              >
                <Image src="/assets/social-linkedin.png" alt="LinkedIn" fill className="object-contain" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="relative shrink-0 size-[37.901px] social-icon rounded-full p-2"
              >
                <Image src="/assets/social-instagram.svg" alt="Instagram" fill className="object-contain" />
              </Link>
            </div>
          </div>
          <div className="content-stretch flex flex-row lg:flex-row gap-12 lg:gap-[51.002px] items-start leading-[1.4] relative shrink-0 text-white">
            <div className="content-stretch flex flex-col gap-[28.426px] items-start min-h-px min-w-px relative">
              <p className="font-['Schibsted_Grotesk:Medium',sans-serif] font-medium opacity-60 relative shrink-0 text-[11.84px] tracking-[0.4736px] uppercase w-full">
                Information
              </p>
              <div className="content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[4.738px] items-start relative shrink-0 text-base lg:text-[23.69px] w-full">
                {serviceLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="relative shrink-0 w-full footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[28.426px] items-start min-h-px min-w-px relative">
              <p className="font-['Inter:Medium',sans-serif] font-medium not-italic opacity-60 relative shrink-0 text-[11.84px] tracking-[0.4736px] uppercase w-full">
                Menu
              </p>
              <div className="content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[4.738px] items-start relative shrink-0 text-base lg:text-[23.69px] w-full">
                {menuLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="relative shrink-0 w-full footer-link cursor-pointer">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[18.951px] items-start lg:items-end min-h-px min-w-px relative">
            <Link
              href="#contact"
              className="bg-gradient-to-r content-stretch flex from-[#265df6] h-[57.247px] items-center justify-center px-[18.951px] py-[9.475px] relative rounded-[20px] shrink-0 to-[#7427ff] w-[175.905px] btn-animated hover-glow cursor-pointer"
            >
              <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[20.82px] text-white">
                Contact Us
              </p>
            </Link>
            <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start lg:items-end leading-[1.3] not-italic relative shrink-0 text-[14.21px] text-white">
              <p className="relative shrink-0">+1 (999) 999-99-99</p>
              <p className="relative shrink-0">info@sivarsa.com</p>
            </div>
          </div>
        </div>
        <div className="border-t-[0.474px] border-white/20 content-stretch flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto pt-[18.951px] relative shrink-0 w-full z-10">
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.4] opacity-60 relative shrink-0 text-[11.84px] text-white">
            Copyright 2025 Sivarsa All Rights Reserved
          </p>
          <div className="content-stretch flex font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[28.426px] items-start leading-[1.4] opacity-60 relative shrink-0 text-[11.84px] text-white">
            <Link href="/privacy" className="relative shrink-0 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="relative shrink-0 hover:opacity-100 transition-opacity">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
