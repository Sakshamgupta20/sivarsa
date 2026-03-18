"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BASE_PATH = "/sivarsa";

const services = [
  { label: "Software Development", href: "/services/software-development", desc: "Web apps, mobile apps & custom software" },
  { label: "Growth Marketing", href: "/services/growth-marketing", desc: "SEO, paid ads & conversion optimization" },
  { label: "Staffing Solutions", href: "/services/staffing-solutions", desc: "Hire top talent, fast & reliably" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-[#1b1b1b]";
  const hoverClass = isDark ? "nav-item" : "nav-item-light";
  const logoSrc = isDark ? `${BASE_PATH}/assets/logo.svg` : `${BASE_PATH}/assets/logo-dark.svg`;
  const hamburgerBg = isDark ? "bg-white" : "bg-[#1b1b1b]";

  return (
    <div className="w-full relative z-50">
    <div className="content-stretch flex items-center justify-between pb-[10px] pt-5 relative shrink-0 w-full max-w-[1360px] mx-auto px-4 lg:px-0 z-50">
      <Link href="/" className="flex items-center gap-2 relative shrink-0 animate-fade-in-down z-50">
        <Image
          src={logoSrc}
          alt="Sivarsa Logo"
          width={24}
          height={28}
          className="shrink-0"
        />
        <span className={`text-[28px] ${textColor} font-bold leading-none`} style={{ fontFamily: "var(--font-logo)" }}>
          SIVARSA
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className={`content-stretch hidden md:flex font-['Inter',sans-serif] font-normal gap-8 lg:gap-[45px] items-center justify-center relative text-lg lg:text-[20px] ${textColor} whitespace-nowrap animate-fade-in-down z-50`}>
        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            className={`flex items-center gap-1.5 ${hoverClass} link-animated cursor-pointer py-2`}
          >
            <span>Services</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-200 ${
              isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}
          >
            <div className="bg-[#111] border border-white/10 rounded-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-3 min-w-[320px] overflow-hidden">
              {services.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-[10px] group hover:bg-white/5 transition-all duration-200 ${index < services.length - 1 ? 'mb-1' : ''}`}
                >
                  <div className="w-10 h-10 rounded-[8px] bg-[#3f2fee]/10 border border-[#3f2fee]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3f2fee]/20 transition-colors">
                    <svg className="w-4 h-4 text-[#3f2fee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-white group-hover:text-white transition-colors">{service.label}</span>
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] text-white/40 group-hover:text-white/60 transition-colors">{service.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className={`${hoverClass} link-animated cursor-pointer py-2`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`${hoverClass} link-animated cursor-pointer py-2`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`${hoverClass} link-animated cursor-pointer py-2`}
        >
          Contact
        </Link>
      </nav>

      {/* Desktop CTA Button */}
      <Link
        href="/contact"
        className="bg-gradient-to-r content-stretch hidden sm:flex from-[#265df6] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 to-[#7427ff] w-[168px] btn-animated hover-glow cursor-pointer animate-fade-in-down z-50"
      >
        <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
          <p className="leading-[normal]">LETS CHAT</p>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 ${hamburgerBg} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 font-['Inter',sans-serif] text-xl text-white">
          {/* Mobile Services */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/70">Services</span>
            <div className="flex flex-col items-center gap-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[16px] text-white/80 hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-item link-animated cursor-pointer py-2"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-item link-animated cursor-pointer py-2"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-item link-animated cursor-pointer py-2"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gradient-to-r from-[#265df6] to-[#7427ff] px-8 py-3 rounded-full font-bold mt-4"
          >
            LETS CHAT
          </Link>
        </nav>
      </div>
    </div>
    <div className={`relative z-10 w-full h-[2px] mt-2 ${isDark ? 'bg-gradient-to-r from-transparent via-white/70 to-transparent' : 'bg-gradient-to-r from-transparent via-[#1b1b1b] to-transparent'}`} />
    </div>
  );
}
