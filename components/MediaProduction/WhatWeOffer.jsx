import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "../assets/icons";

import hourse from "@/components/assets/hourse.png";
import Photography from "@/components/assets/Photography.png";
import CreativeDirection from "@/components/assets/CreativeDirection.png";

const offers = [
  {
    title: "video production",
    image: hourse,
    description:
      "Commercials, promotional videos, and brand films that leave a lasting impression.",
    fullWidth: true,
  },
  {
    title: "Photography",
    image: Photography,
    description:
      "High-quality product, lifestyle, and corporate photography tailored to your needs.",
  },
  {
    title: "Creative Direction",
    image: CreativeDirection,
    description:
      "Ensuring every piece of content aligns with your brand voice and vision.",
  },
];

function OfferCard({ title, image, description }) {
  return (
    <div>
      <h2 className="uppercase text-primaryYellow font-giloryBold pb-4 pt-10">
        {title}
      </h2>
      <Image src={image} alt={title} className="w-full" />
      <p className="pt-5 text-xs md:text-base max-w-[30ch] font-gilroySemiBold">
        {description}
      </p>
    </div>
  );
}

function WhatWeOffer() {
  return (
    <div className="body_contanier mdP pb-20 flex justify-center">
      <div>
        <h1 className="text-[13vw] text-center font-bebasneue uppercase">
          what we offer
        </h1>

        {/* First big item */}
        <OfferCard {...offers[0]} />

        {/* Two-column items */}
        <div className="flex justify-between items-start gap-10 pt-10 flex-col md:flex-row">
          <div className="mx-auto md:mx-0 w-fit md:w-[320px]">
            <OfferCard {...offers[1]} />
          </div>

          <div className="mx-auto md:mx-0 w-fit md:w-[320px]">
            <OfferCard {...offers[2]} />
          </div>
        </div>

        <h2 className="text-center uppercase font-bebasneue text-[3vw] pt-20">
          Your story deserves to be seen —{" "}
          <span className="text-primaryYellow">beautifully</span>
        </h2>

        <Link
          href="/contactus"
          className="flex justify-center pt-10 text-lg transform transition duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <div className="flex gap-4 items-center">
            <p className="text-primaryYellow">Let’s Create Together</p>
            <ArrowIcon className="w-3 text-primaryYellow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WhatWeOffer;
