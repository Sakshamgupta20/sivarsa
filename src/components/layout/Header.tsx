"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BASE_PATH = "/sivarsa";

const services = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Growth Marketing", href: "/services/growth-marketing" },
  { label: "HR & Talent Management", href: "/services/hr-talent-management" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-[#1b1b1b]";
  const logoSrc = isDark ? `${BASE_PATH}/assets/logo-icon.svg` : `${BASE_PATH}/assets/logo-icon-dark.svg`;
  const hamburgerBg = isDark ? "bg-white" : "bg-[#1b1b1b]";

  return (
    <div className="content-stretch flex items-center justify-between pb-[10px] pt-5 relative shrink-0 w-full max-w-[1360px] mx-auto px-4 lg:px-0 z-50">
      <Link href="/" className="flex gap-1.5 items-center relative shrink-0 animate-fade-in-down z-50">
        <Image
          src={logoSrc}
          alt="Sivarsa Logo"
          width={52}
          height={52}
          className="shrink-0"
        />
        <div className={`flex flex-col font-['GT_Super_Ds_Trial:Bd',sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] ${textColor} whitespace-nowrap`}>
          <p className="leading-[normal]">SIVARSA</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className={`content-stretch hidden md:flex font-['Inter',sans-serif] font-normal gap-8 lg:gap-[45px] items-center justify-center relative text-lg lg:text-[20px] ${textColor} whitespace-nowrap animate-fade-in-down z-50`}>
        <Link
          href="/"
          className="nav-item link-animated cursor-pointer py-2"
        >
          Home
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            className="flex items-center gap-1.5 nav-item link-animated cursor-pointer py-2"
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
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl py-2 min-w-[220px] overflow-hidden">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-5 py-3 text-[16px] text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-[#265df6]/20 hover:to-[#7427ff]/20 transition-all duration-200"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className="nav-item link-animated cursor-pointer py-2"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="nav-item link-animated cursor-pointer py-2"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="nav-item link-animated cursor-pointer py-2"
        >
          Contact Us
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
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-item link-animated cursor-pointer py-2"
          >
            Home
          </Link>

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
            Contact Us
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
  );
}
