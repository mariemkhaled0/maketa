import Image from "next/image";
import React from "react";
import howCanWeHelp from "@/components/assets/howCanWeHelp.png";
import SharedHeroSplit from "../Shared/SharedHeroSplit";

function OurServicesHero() {
  return (
    <SharedHeroSplit
      titleStart="what"
      titleHighlight="Our Services"
      titleEnd="we do"
      image={howCanWeHelp}
      description="We don’t just talk about impact — we create it. Explore how Maketa helped brands declare their presence through digital and offline strategies."
      descriptionAlign="right"
    />
  );
}

export default OurServicesHero;
