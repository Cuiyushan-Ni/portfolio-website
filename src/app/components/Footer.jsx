"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // <-- import Link
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border border-t-[#33353F] border-x-transparent text-white bg-[#121212]">
    <div className="container mx-auto px-6 py-12 flex items-center justify-between">
        <span className="inline-flex items-center z-10">
        <Image
            src="/images/logo.png"
            alt="RN logo"
            width={96}
            height={96}
            priority
            className="block h-12 w-12 md:h-16 md:w-16 object-contain"
        />
        </span>

        {/* Glow blob behind content, clipped by footer */}
        <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3
                    h-80 w-80 rounded-full
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                    from-fuchsia-700/30 via-fuchsia-500/20 to-transparent
                    blur-2xl z-0 pointer-events-none"
        />

        <div className="z-10 text-right max-w-md">
        <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
        <div className="socials flex flex-row gap-3 justify-end">
            <Link href="https://github.com/Cuiyushan-Ni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src={GithubIcon} alt="" />
            </Link>
            <Link href="https://www.linkedin.com/in/cuiyushan-ni-18b3bb1a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src={LinkedinIcon} alt="" />
            </Link>
        </div>
        </div>
    </div>
    </footer>

  );
};

export default Footer;
