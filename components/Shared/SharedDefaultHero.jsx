import Image from "next/image";
import React from "react";
import heartMarketing from "@/components/assets/heartMarketingHero.png";

function SharedDefaultHero({
  imrSrc,
  desc,
  serviceTitle,
  subTitle,
  isBigTitle = true,
}) {
  return (
    <div>
      <div className="flex overflow-hidden">
        <div className="body_contanier pt-20">
          <h1 className="heroTitle">
            Our <br />
            services
          </h1>
          {!isBigTitle && (
            <h2 className="BigheroSubTitle mt-5 lg:pt-20 py-10 w-full ">
              {serviceTitle}
            </h2>
          )}
        </div>

        <Image
          src={imrSrc ? imrSrc : heartMarketing}
          alt="heartImg"
          className="ml-auto md:w-[500px] w-[180px] mobileS:w-[140px]"
        />
      </div>
      <div className="body_contanier">
        {isBigTitle && (
          <h2 className="heroSubTitle  lg:py-20  md:pb-10 py-10 w-full ">
            {serviceTitle}
          </h2>
        )}
        <h3 className=" font-giloryBold pt-6 md:text-[45px]">{subTitle}</h3>
        <p className="max-w-prose pt-6 uppercase font-giloryBold text-sm md:text-base ">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default SharedDefaultHero;
