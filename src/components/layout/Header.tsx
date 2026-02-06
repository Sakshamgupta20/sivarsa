"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/software-development" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
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
      <nav className="content-stretch hidden md:flex font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-8 lg:gap-[84px] items-center justify-center leading-[0] relative shrink-0 text-lg lg:text-[20px] text-white whitespace-nowrap animate-fade-in-down">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col justify-center relative shrink-0 nav-item link-animated cursor-pointer"
          >
            <p className="leading-[normal]">{link.label}</p>
          </Link>
        ))}
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
