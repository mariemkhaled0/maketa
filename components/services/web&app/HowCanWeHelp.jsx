import Image from "next/image";
import React from "react";
import sectionImg from "@/components/assets/howCanWeHelp.png";

function HowCanWeHelp() {
  return (
    <section className="w-full">
      <div className="flex items-center xl:gap-20  lg:gap-10 gap-5 w-full">
        <Image
          src={sectionImg}
          alt="section_img"
          className="lg:w-[500px]  md:w-[300px] w-[150px]"
        />
        <div className="">
          <h2 className="font-giloryRegular pt-10 lg:pt-20 pb-3 lg:pb-5 xl:text-[100px] lg:text-[60px] md:text-[50px] text-[24px] leading-[1] ">
            How can we <br /> help with your <br /> website needs?
          </h2>
          <div className="">
            <div className="flex flex-col items-center ">
              {[
                "Sell more products online",
                "Sell more products online",
                "Help manage your website",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border font-giloryRegular border-[#898888] md:my-4 my-1 md:p-2  py-1 text-center md:max-w-[400px] max-w-[200px] w-full text-[8px] md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowCanWeHelp;
