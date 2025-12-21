import Image from "next/image";
import React from "react";
import aboutusImg from "@/components/assets/aboutUsImg.png";

function Hero() {
  return (
    <section>
      <div className="relative pt-10 flex justify-between ">
        {/* TEXT */}
        <div className="relative text-white pl-5 md:pl-[50px] lg:pl-[75px]">
          <h1
            className="font-bebasneue leading-none
          text-[100px] sm:text-[180px] md:text-[180px] xl:text-[350px] lg:text-[200px]"
          >
            OUR
          </h1>

          <h1
            className="font-bebasneue leading-[0.5]
           text-[100px] md:text-[180px] xl:text-[350px] lg:text-[200px]
          ml-20 sm:ml-24 md:ml-40 lg:ml-60"
          >
            STORY
          </h1>

          {/* SCRIPT TEXT */}
          <span
            className="absolute font-Rockybilly text-yellow-400 
          text-[28px]  md:text-[40px] xl:text-[88px] lg:text-[55px] xxs:text-[20px]
          top-[35%] left-[20%] sm:left-[25%] md:left-[30%]"
          >
            About Us
          </span>
        </div>

        {/* IMAGE */}
        <Image
          src={aboutusImg}
          alt="aboutus"
          className="
          absolute right-0 -md:-bottom-20  xl:-bottom-52 lg:-bottom-20 bottom-40
         xxs:w-[150px] w-[190px]  md:w-[260px] xl:w-[620px] lg:w-[380px]
          opacity-90
        "
        />
      </div>
      <div className="max-w-[90ch] pt-20 pl-5 md:pl-[50px] lg:pl-[75px] space-y-7 lg:text-sm md:text-sm text-[8px]">
        <p className="font-gilroyMedium uppercase">
          At Maketa, we believe that every brand deserves to be seen and heard.
          Founded with a passion for creativity and strategy, we set out to help
          businesses in Egypt and beyond declare their presence in a crowded
          market. From day one, our goal has been simple: to transform ideas
          into bold campaigns and experiences that leave a lasting impact.
          Whether it’s a startup taking its first step or a well-known company
          ready for a fresh voice, we create tailored solutions that amplify
          their presence across every touchpoint.
        </p>
        <p className="font-giloryBold uppercase">
          Presence is more than visibility—it’s about influence, recognition,
          and trust. That’s why we approach every project with a mix of
          strategy, creativity, and execution.
        </p>
      </div>
      <div className="flex justify-center w-full px-5 md:px-[50px] lg:px-[75px]">
        <p className="text-center lg:pt-20 pt-10 xl:text-5xl lg:text-4xl md:text-3xl text-xl uppercase max-w-prose font-bebasneue">
          We don’t just deliver services,
          <span className="text-primaryYellow">We build connections</span>.{" "}
          <span className="text-primaryYellow">
            We don’t just design campaigns
          </span>
          ,We create movements that audiences remember.
        </p>
      </div>
    </section>
  );
}

export default Hero;
