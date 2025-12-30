import Image from "next/image";
import React from "react";
import heart from "@/components/assets/heartWebAndApp.png";
import SharedDefaultHero from "@/components/Shared/SharedDefaultHero";

function WebAndAppHero() {
  return (
    <SharedDefaultHero
      imrSrc={heart}
      serviceTitle={"Web & App Development"}
      subTitle={"Seamless, smart, and built for growth."}
      desc={
        "Your website or app isn’t just a tool — it’s the core of your digital presence. At Maketa, we design and develop platforms that arebeautiful, user-friendly, and built to scale with your business.."
      }
    />
  );
}

export default WebAndAppHero;
