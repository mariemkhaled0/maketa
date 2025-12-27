import React from "react";
import isla from "@/components/assets/islaMackbook.png";
import Carbless from "@/components/assets/Carbless.png";
import SLFMackbook from "@/components/assets/SLFMackbook.png";
import ChillHouseMackbook from "@/components/assets/ChillHouseMackbook.png";
import Livingates from "@/components/assets/Livingates.png";
import abaza from "@/components/assets/Abaza.png";
import TRACTOMackbook from "@/components/assets/TRACTOMackbook.png";
import RUE from "@/components/assets/RUEMackbook.png";
import otrix from "@/components/assets/Otrix.png";
import EHC from "@/components/assets/EHC.png";
import moveHub from "@/components/assets/moveHub.png";
import TUYINGO from "@/components/assets/TUYINGO.png";
import Work from "../Work";

function OurWorkSection() {
  const websitesAndOurWork = [
    {
      img: Carbless,
      title: "CARBLESS",
      desc: "SOCIAL MEDIA CAMPAIGN",
    },
    {
      img: isla,
      title: "ISLA FOOD",
      desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN",
    },
    {
      img: ChillHouseMackbook,
      title: "CHILL HOUSE TATTOO",
      desc: "Web Design",
    },
    { img: Livingates, title: "LIVINGATES", desc: "SOCIAL MEDIA CAMPAIGN" },
    { img: abaza, title: "Abaza Arabian", desc: "social media campaign" },
    { img: SLFMackbook, title: "SILVER LIGHT FOODS", desc: "Web Design" },
    { img: RUE, title: "RUE HAYA", desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN" },
    { img: moveHub, title: "MOVE HUB", desc: "social media campaign" },
    { img: otrix, title: "otrix", desc: "social media campaign" },
    {
      img: TRACTOMackbook,
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
