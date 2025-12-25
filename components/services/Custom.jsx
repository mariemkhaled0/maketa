import Image from "next/image";
import React from "react";
import custom from "@/components/assets/Custom.png";
import Link from "next/link";
import { ArrowIcon } from "../assets/icons";

export default function Custom() {
  return (
    <section className="body_contanier smP w-full lg:pb-20 pb-10 ">
      <div className="flex justify-between w-full lg:gap-24 md:gap-20 flex-wrap md:flex-nowrap">
        <div>
          <h2 className="xl:text-[240px] lg:text-[160px] text-[90px]  md:text-[100px] font-bebasneue text-primaryYellow">
            Custom
          </h2>
          <p className="font-gilroySemiBold max-w-prose md:text-xs text-sm lg:text-base">
            Need more? We'll create a Program that's just right for you.
            Precision crafted solutions tailored to your unique brand needs.
            Elevating your digital experience and evolving your digital
            marketing strategies to drive radical results.
          </p>
        </div>
        <div>
          <Image src={custom} alt="custom_img" className="max-w-full h-auto" />
        </div>
      </div>
      <Link
        href="/contact"
        className="inline-block  text-lg  transform transition duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <div className="flex gap-4 items-center">
          <p className="text-primaryYellow"> Let’s Discuss</p>
          <ArrowIcon className={"w-3 text-primaryYellow"} />
        </div>
      </Link>
    </section>
  );
}
