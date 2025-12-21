import React from "react";
import { InstagramIcon } from "../assets/icons";
import Image from "next/image";
import linkedinIcon from "@/components/assets/linkedin.png";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <section className="h-[700px] w-full bg-[#171717] lg:px-[81px] relative ">
      <p className="absolute text-end uppercase lg:bottom-60 md:bottom-52 bottom-80 lg:right-[81px] md:text-base lg:text-base right-6 text-[10px] md:max-w-[30ch] lg:max-w-[40ch] max-w-[30ch] font-gilroyMedium">
        we are a full-service Egypt marketing agency, creating high impact
        experiences for brands. From strategy and design to digital and offline
        campaigns, we help businesses declare their presence, connect with their
        audience, and grow with confidence.
      </p>
      <div className="absolute lg:bottom-40  bottom-20 ">
        <div className="flex flex-col items-center">
          <h3 className="rotate-90 mb-10 text-sm ">Follow us</h3>
          <InstagramIcon className={"w-10"} />
          <Image
            src={linkedinIcon}
            alt="linkedinIcon"
            className="w-8 h-8 mt-4"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
