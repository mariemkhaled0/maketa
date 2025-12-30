import React from "react";
import { ArrowIcon, YallowStarIcon } from "../assets/icons";
import heart from "@/components/assets/heart.png";
import Image from "next/image";

function WhyMaketa() {
  const content = [
    "Strategies that amplify your voice",
    "Creative visuals that get noticed",
    "Digital + Offline presence",
    "Growing brands into leaders",
  ];
  return (
    <section className=" lg:pt-40 pt-20 relative overflow-hidden">
      <div className="xl:px-20 lg:px-16 px-6">
        <div className="lg:flex-col flex md:flex-row flex-col">
          <h2 className="lg:text-9xl md:text-7xl text-5xl font-bebasneue lg:pb-20 md:pb-10 pb-5 ">
            Why Maketa
          </h2>
          <div className="lg:flex  grid grid-cols-2  w-full  gap-3  lg:pb-40 md:pb-20 pb-20 ">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex items-center  gap-3 mobileS:gap-1"
              >
                <div className="border md:w-[300px] w-[150px] lg:w-auto border-white rounded-3xl flex items-center py-1 px-2  uppercase font-gilroySemiBold">
                  <p className="xl:text-base lg:text-[10px] md:text-[10px] text-[6px] ">
                    {item}
                  </p>
                </div>
                <div
                  className={`${index == 1 ? "md:hidden lg:block block" : ""}`}
                >
                  {content.length - 1 != index && (
                    <YallowStarIcon className={"w-[15px] h-[15px]"} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="max-w-[120ch] lg:text-base text-xs font-gilroySemiBold text-start">
          Every brand has a story. But in a crowded market, stories can get
          lost. That’s where we step in. At Maketa, we believe presence is more
          than just being seen—it’s about being remembered, respected, and
          chosen. We combine strategic thinking, creative design, and bold
          marketing to transform brands into experiences that audiences connect
          with on every level. From launching startups that want to make their
          first impression, to helping established companies reinvent their
          identity, we craft tailored solutions that declare your presence with
          impact. Our approach blends digital innovation with offline
          activations, ensuring your brand lives wherever your audience
          does—online, in print, at events, and beyond.
        </p>
        <p className="font-giloryBold pt-5">
          With Maketa, you don’t just run campaigns—you build movements that
          inspire loyalty, spark conversations, and drive growth.
        </p>
      </div>
      <div className="flex justify-between  ">
        <div>
          <div className="flex lg:px-20 items-center  pl-6 pt-20 lg:gap-3 md:gap-6 gap-2 ">
            <h2 className=" xl:text-6xl lg:text-5xl  md:text-4xl text-2xl  mobileS:text-lg font-bebasneue">
              Discover <span className="text-primaryYellow">Who We</span> Are
            </h2>
            <div>
              <ArrowIcon className={" lg:w-5 md:w-5 w-3 "} />
            </div>
          </div>
        </div>
        <Image
          src={heart}
          alt="heart_img"
          className="xl:w-auto  lg:w-[500px] md:w-[300px] w-[200px] lg:-mt-20 -mt-10 lg:h-auto"
        />
      </div>
    </section>
  );
}

export default WhyMaketa;
