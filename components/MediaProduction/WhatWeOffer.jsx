import React from "react";
import { ArrowIcon } from "../assets/icons";
import Link from "next/link";

function WhatWeOffer() {
  return (
    <div className="body_contanier mdP pb-20 flex justify-center">
      <div className="">
        <h1 className="text-[13vw] text-center font-bebasneue uppercase">
          what we offer
        </h1>
        <h2 className="text-center uppercase font-bebasneue text-[3vw]">
          Your story deserves to be seen —{" "}
          <span className="text-primaryYellow">beautifully</span>
        </h2>
        <Link
          href="/contactus"
          className="flex justify-center pt-10 text-lg  transform transition duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <div className="flex gap-4 items-center ">
            <p className="text-primaryYellow"> Let’s Create Together</p>
            <ArrowIcon className={"w-3 text-primaryYellow"} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WhatWeOffer;
