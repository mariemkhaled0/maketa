import { StarIcon } from "@/components/assets/icons";
import Hero from "@/components/Home/Hero";
import SecondSection from "@/components/Home/SecondSection";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="">
      <Hero />
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
            <span> declare your presence</span>
            <StarIcon />
          </div>
        ))}
      </Marquee>
      <SecondSection />
    </div>
  );
}
