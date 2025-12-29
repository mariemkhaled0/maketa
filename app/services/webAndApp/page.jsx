import { StarIcon } from "@/components/assets/icons";
import HowCanWeHelp from "@/components/services/web&app/HowCanWeHelp";
import OurWebsites from "@/components/services/web&app/OurWebsites";
import WebAndAppHero from "@/components/services/web&app/WebAndAppHero";
import WebAppServices from "@/components/services/web&app/WebAppServices";
import React from "react";
import Marquee from "react-fast-marquee";

function page() {
  return (
    <div>
      <WebAndAppHero />
      <WebAppServices />
      <Marquee
        className="border-t border-b border-white"
        gradient={false}
        speed={90}
      >
        {Array.from({ length: 20 }).map((_, idx) => (
          <div
            key={idx}
            className="mx-5  py-1 text-sm  flex items-center gap-4  uppercase"
          >
            <span> Start Your Project Today</span>
            <StarIcon />
          </div>
        ))}
      </Marquee>
      <HowCanWeHelp />
      <OurWebsites />
    </div>
  );
}

export default page;
