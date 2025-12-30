import Image from "next/image";
import ourWorkHero from "@/components/assets/ourWorkHero.png";
import SharedHeroSplit from "../Shared/SharedHeroSplit";
export default function OurWorkHero() {
  return (
    <SharedHeroSplit
      titleStart="How we"
      titleHighlight="Our Work"
      titleEnd="Did it"
      image={ourWorkHero}
      description="We don’t just talk about impact — we create it. Explore how Maketa helped brands declare their presence through digital and offline strategies."
      descriptionAlign="center"
    />
  );
}
