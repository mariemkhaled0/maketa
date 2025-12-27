import React from "react";
import isla from "@/components/assets/islaMackbook.png";
import SLFMackbook from "@/components/assets/SLFMackbook.png";
import ChillHouseMackbook from "@/components/assets/ChillHouseMackbook.png";
import TRACTOMackbook from "@/components/assets/TRACTOMackbook.png";
import RUE from "@/components/assets/RUEMackbook.png";
import TUYINGO from "@/components/assets/TUYINGO.png";

import Work from "@/components/Work";

function OurWebsites() {
  const websites = [
    { img: isla, title: "ISLA FOOD | FOOD & BEVERAGES " },
    { img: SLFMackbook, title: "SILVER LIGHT FOODS | FOOD SUPPLIER" },
    { img: ChillHouseMackbook, title: "CHILL HOUSE TATTOO | SERVICES" },
    { img: TRACTOMackbook, title: "TRACTO | FASHION" },
    { img: RUE, title: "RUE HAYA | FASHION" },
    { img: TUYINGO, title: "TUYINGO | SHIPPING SERVICES" },
  ];
  return (
    <section className="body_contanier pt-10 fade-in">
      <h2 className="font-bebasneue  uppercase lg:text-[200px] md:text-[120px] text-[80px] text-center pt-10">
        Our websites
      </h2>
      <Work ourWork={websites} />
      <div className="text-center pb-20 md:pt-40 pt-20">
        <p className="text-primaryYellow font-giloryBold text-xl">
          What are you waiting for?
        </p>
        <h3 className="font-bebasneue  uppercase lg:text-[200px] md:text-[120px] text-[70px] text-center md:pt-10">
          get a quote now
        </h3>
      </div>
    </section>
  );
}

export default OurWebsites;
