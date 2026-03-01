import React from "react";
import { InstagramIcon } from "../assets/icons";
import Image from "next/image";
import linkedinIcon from "@/components/assets/linkedin.png";

function Hero() {
  return (
    <section
      className="
      relative 
      w-full 
      h-[60vh] 
      min-h-[300px] 
      md:h-[70vh] 
      lg:h-screen 
      overflow-hidden
      bg-black
      lg:px-[40px]
      md:px-[20px]
      xl:px-[81px]

    "
    >
      {/* Responsive Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-contain lg:object-cover md:object-cover bg-black"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/maketaLogo.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute lg:bottom-40 md:bottom-20 bottom-10 z-20">
        <div className="flex flex-col items-center">
          <h3 className="rotate-90  md:mb-10 mb-4 md:text-sm text-[10px] text-white">
            Follow us
          </h3>
          <InstagramIcon className="w-10 text-white" />
          <Image
            src={linkedinIcon}
            alt="linkedinIcon"
            className="md:w-6 mt-2 w-4 "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
