"use client";

import Image from "next/image";
import Link from "next/link";

const BASE_PATH = "/sivarsa";

const serviceLinks = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Growth Marketing", href: "/services/growth-marketing" },
  { label: "HR & Talent Management", href: "/services/hr-talent-management" },
];

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-5 py-4 md:py-5 max-w-[1440px] mx-auto">
      <div className="relative w-full rounded-[18px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          <Image
            src={`${BASE_PATH}/assets/footer-bg.png`}
            alt=""
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-8">
            {/* Column 1 - Logo & Description */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={`${BASE_PATH}/assets/logo-icon.svg`}
                  alt="Sivarsa Logo"
                  width={32}
                  height={32}
                  className="shrink-0"
                />
                <span className="text-[24px] md:text-[26px] text-white font-bold leading-none" style={{ fontFamily: "var(--font-logo)" }}>
                  SIVARSA
                </span>
              </Link>
              <p className="font-['Inter',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.5] max-w-[240px]">
                At Sivarsa, we craft innovative software solutions that empower
                businesses to thrive in the digital era.
              </p>
              <div className="flex gap-3 mt-2">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-9 h-9 relative social-icon rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Image src={`${BASE_PATH}/assets/social-linkedin.png`} alt="LinkedIn" width={20} height={20} className="object-contain" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-9 h-9 relative social-icon rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Image src={`${BASE_PATH}/assets/social-instagram.svg`} alt="Instagram" width={20} height={20} className="object-contain" />
                </Link>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div className="flex flex-col gap-4">
              <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] text-white/50 uppercase tracking-wider">
                Services
              </p>
              <div className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-['Inter',sans-serif] text-[14px] md:text-[16px] text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 - Menu */}
            <div className="flex flex-col gap-4">
              <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] text-white/50 uppercase tracking-wider">
                Menu
              </p>
              <div className="flex flex-col gap-2">
                {menuLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-['Inter',sans-serif] text-[14px] md:text-[16px] text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#265df6] to-[#7427ff] flex items-center justify-center px-6 py-3 rounded-[16px] w-fit btn-animated hover-glow"
              >
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] md:text-[18px] text-white">
                  Contact Us
                </span>
              </Link>
              <div className="flex flex-col gap-1 mt-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
                  +1 (999) 999-99-99
                </p>
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
                  info@sivarsa.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="font-['Inter',sans-serif] text-[11px] md:text-[12px] text-white/50">
              Copyright 2025 Sivarsa All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-['Inter',sans-serif] text-[11px] md:text-[12px] text-white/50 hover:text-white/80 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-['Inter',sans-serif] text-[11px] md:text-[12px] text-white/50 hover:text-white/80 transition-colors"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
