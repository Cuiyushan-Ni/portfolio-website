import React from "react";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border z-10 border-t-[#33353F] border-x-transparent text-white">
        <div className="container mx-auto px-6 py-12 flex items-center justify-between">
            <span className="inline-flex items-center">
            <Image
                src="/images/logo.png"
                alt="RN logo"
                width={96}
                height={96}
                priority
                className="block h-12 w-12 md:h-16 md:w-16 object-contain"
            />
            </span>

            <p className="text-slate-400 leading-none whitespace-nowrap">
            All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;