import Image from "next/image";
import React from "react";
import heart from "@/components/assets/heartWebAndApp.png";

function WebAndAppHero() {
  return (
    <div className="">
      <div className="flex overflow-hidden">
        <div className="body_contanier pt-20">
          <h1 className="heroTitle">
            Our <br />
            services
          </h1>
        </div>

        <Image
          src={heart}
          alt="heart"
          className="ml-auto md:w-[500px] w-[180px] mobileS:w-[140px]"
        />
      </div>
      <div className="body_contanier">
        <h2 className="heroSubTitle  lg:pt-2 pt-10 ">Web & App Development</h2>
        <h3 className="pt-20 font-giloryBold md:text-[45px]">
          Seamless, smart, and built for growth.
        </h3>
        <p className="max-w-prose pt-10 uppercase font-giloryBold ">
          Your website or app isn’t just a tool — it’s the core of your digital
          presence. At Maketa, we design and develop platforms that are
          beautiful, user-friendly, and built to scale with your business..
        </p>
      </div>
    </div>
  );
}

export default WebAndAppHero;
