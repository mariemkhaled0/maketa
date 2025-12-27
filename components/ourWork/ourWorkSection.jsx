import React from "react";
import isla from "@/components/assets/islaMackbook.png";
import carbless from "@/components/assets/CarblessSocial.png";
import sLFMackbook from "@/components/assets/SLFMackbook.png";
import chillHouseMackbook from "@/components/assets/ChillHouseMackbook.png";
import Livingates from "@/components/assets/Livingates.png";
import abaza from "@/components/assets/Abaza.png";
import tRACTOMackbook from "@/components/assets/TRACTOMackbook.png";
import RUE from "@/components/assets/RUEMackbook.png";
import otrix from "@/components/assets/Otrix.png";
import EHC from "@/components/assets/EHC.png";
import moveHub from "@/components/assets/moveHub.png";
import TUYINGO from "@/components/assets/TUYINGO.png";
import Work from "../Work";

function OurWorkSection() {
  const websitesAndOurWork = [
    {
      img: carbless,
      title: "CARBLESS",
      desc: "SOCIAL MEDIA CAMPAIGN",
    },
    {
      img: isla,
      title: "ISLA FOOD",
      desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN",
    },
    {
      img: chillHouseMackbook,
      title: "CHILL HOUSE TATTOO",
      desc: "Web Design",
    },
    { img: Livingates, title: "LIVINGATES", desc: "SOCIAL MEDIA CAMPAIGN" },
    { img: abaza, title: "Abaza Arabian", desc: "social media campaign" },
    { img: sLFMackbook, title: "SILVER LIGHT FOODS", desc: "Web Design" },
    { img: RUE, title: "RUE HAYA", desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN" },
    { img: moveHub, title: "MOVE HUB", desc: "social media campaign" },
    { img: otrix, title: "otrix", desc: "social media campaign" },
    {
      img: tRACTOMackbook,
      title: "TRACTO",
      desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN",
    },
    { img: TUYINGO, title: "TUYINGO | SHIPPING SERVICES" },
    { img: EHC, title: "EHC", desc: "BRANDING & social media campaign " },
  ];
  return (
    <div className="md:pb-28 pb-10 lgP">
      <Work ourWork={websitesAndOurWork} />
    </div>
  );
}

export default OurWorkSection;
