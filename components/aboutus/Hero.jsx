import Image from "next/image";
import React from "react";
import aboutusImg from "@/components/assets/aboutUsImg.png";

function Hero() {
  return (
    <section>
      <div className="relative pt-10  justify-between fade-in">
        {/* TEXT */}
        <div className="relative text-white pl-5 md:pl-[50px] lg:pl-[75px]">
          <h1
            className="font-bebasneue leading-none
          text-[100px] sm:text-[180px] md:text-[180px] xl:text-[350px] lg:text-[200px] mobileS:text-[80px]"
          >
            OUR STORY
          </h1>

          {/* SCRIPT TEXT */}
        </div>
        <div className="flex justify-between items-center md:pt-20 pt-14 lg:pt-32">
          <div>
            <span className="font-Rockybilly text-yellow-400  pl-20 w-full body_contanier mobileM:text-[6vw] text-base ">
              About Us
            </span>
            <div className="max-w-[90ch] md:pt-20 lg:pt-28 pt-6 pl-5 md:pl-[50px] lg:pl-[75px] space-y-7 lg:text-sm md:text-sm text-[8px] fade-in">
              <p className="font-gilroyMedium uppercase">
                At Maketa, we believe that every brand deserves to be seen and
                heard. Founded with a passion for creativity and strategy, we
                set out to help businesses in Egypt and beyond declare their
                presence in a crowded market. From day one, our goal has been
                simple: to transform ideas into bold campaigns and experiences
                that leave a lasting impact. Whether it’s a startup taking its
                first step or a well-known company ready for a fresh voice, we
                create tailored solutions that amplify their presence across
                every touchpoint.
              </p>
              <p className="font-giloryBold uppercase">
                Presence is more than visibility—it’s about influence,
                recognition, and trust. That’s why we approach every project
                with a mix of strategy, creativity, and execution.
              </p>
            </div>
          </div>
          {/* IMAGE */}
          <Image
            src={aboutusImg}
            alt="aboutus"
            className="
          
         mobileS:w-[150px] w-[200px]  md:w-[500px] xl:w-[560px] lg:w-[380px] -mt-64 md:-mt-96 lg:-mt-80
         
        "
          />
        </div>
        <div className="flex justify-center w-full px-5 md:px-[50px] lg:px-[75px] ">
          <p className="text-center lg:pt-20 pt-10 xl:text-5xl lg:text-4xl md:text-3xl text-xl uppercase max-w-prose font-bebasneue">
            We don’t just deliver services,
            <span className="text-primaryYellow">We build connections</span>
            <span className="text-primaryYellow">
              We don’t just design campaigns
            </span>
            ,We create movements that audiences remember.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
