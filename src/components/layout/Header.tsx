"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Growth Marketing", href: "/services/growth-marketing" },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="content-stretch flex items-center justify-between pb-[10px] pt-5 relative shrink-0 w-full max-w-[1360px] mx-auto px-4 lg:px-0">
      <Link href="/" className="flex gap-1.5 items-center relative shrink-0 animate-fade-in-down">
        <Image
          src="/assets/logo-icon.svg"
          alt="Sivarsa Logo"
          width={52}
          height={52}
          className="shrink-0"
        />
        <div className="flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-white whitespace-nowrap">
          <p className="leading-[normal]">SIVARSA</p>
        </div>
      </Link>
      <nav className="content-stretch hidden md:flex font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-8 lg:gap-[45px] items-center justify-center relative text-lg lg:text-[20px] text-white whitespace-nowrap animate-fade-in-down">
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
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
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
          href="#about"
          className="nav-item link-animated cursor-pointer py-2"
        >
          About
        </Link>
        <Link
          href="#blog"
          className="nav-item link-animated cursor-pointer py-2"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="nav-item link-animated cursor-pointer py-2"
        >
          Contact Us
        </Link>
      </nav>
      <Link
        href="#contact"
        className="bg-gradient-to-r content-stretch hidden sm:flex from-[#265df6] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 to-[#7427ff] w-[168px] btn-animated hover-glow cursor-pointer animate-fade-in-down"
      >
        <div className="flex flex-col font-['Schibsted_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
          <p className="leading-[normal]">LETS CHAT</p>
        </div>
      </Link>
    </div>
  );
}
