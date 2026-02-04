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
      link: "https://www.instagram.com/carbless.egypt?igsh=cGhidGpkeWN2OHdr",
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
      link: "https://www.instagram.com/chillhousetattoo?igsh=MWh6OXhrNG92N2lqOQ%3D%3D",
    },
    {
      img: Livingates,
      title: "LIVINGATES",
      desc: "SOCIAL MEDIA CAMPAIGN",
      link: "https://www.instagram.com/livingates_?igsh=MmdvYmYxMGI4ZXQ4",
    },
    {
      img: abaza,
      title: "Abaza Arabian",
      desc: "social media campaign",
      link: "https://www.instagram.com/abazaarabianhorse?igsh=anVuYW1oeTgzM2g%3D",
    },
    {
      img: sLFMackbook,
      title: "SILVER LIGHT FOODS",
      desc: "Web Design",
      link: "https://silverlight-group.net/",
    },
    {
      img: RUE,
      title: "RUE HAYA",
      desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN",
      link: "https://www.instagram.com/ruehaya?igsh=MXNmYWVxdmVkMjVidA%3D%3D",
    },
    {
      img: moveHub,
      title: "MOVE HUB",
      desc: "social media campaign",
      link: "https://www.instagram.com/move.hub.one?igsh=NHNmd2piZzNucTJw",
    },
    {
      img: otrix,
      title: "otrix",
      desc: "social media campaign",
      link: "https://www.instagram.com/otrixdesigns?igsh=M3BnZXZueHV3anBx",
    },
    {
      img: tRACTOMackbook,
      title: "TRACTO",
      desc: "WEB DESIGN & SOCIAL MEDIA CAMPAIGN",
      link: "https://www.instagram.com/tracto.eg?igsh=eTh2Z2VqaGYwdWEx",
    },
    {
      img: TUYINGO,
      title: "TUYINGO",
      desc: "TUYINGO WEB DESIGN & BRANDING",
      link: "https://www.instagram.com/tuyingo.eg?igsh=MXJnaTVrZ2c0NnZ5eQ%3D%3D",
    },
    { img: EHC, title: "EHC", desc: "BRANDING & social media campaign " },
  ];
  return (
    <div className="md:pb-28 pb-10 smP body_contanier">
      <Work ourWork={websitesAndOurWork} />
    </div>
  );
}

export default OurWorkSection;
