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
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/19999999999"
                  target="_blank"
                  className="w-9 h-9 relative social-icon rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-9 h-9 relative social-icon rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
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
