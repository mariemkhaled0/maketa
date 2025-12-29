import Image from "next/image";
import ourWorkHero from "@/components/assets/ourWorkHero.png";
export default function OurWorkHero() {
  return (
    <section className="w-full">
      <div className="fade-in lg:pt-20 pt-6">
        <div className="flex body_contanier items-center lg:gap-20   gap-6">
          <h1 className=" ourWorkTitle">How we</h1>
          <h2 className="font-Rockybilly text-primaryYellow   text-[28px]  md:text-[30px] xl:text-[70px] lg:text-[55px] mobileM:text-[16px] mobileS:text-[14px]">
            Our Work
          </h2>
        </div>
        <div className="flex lg:-mt-10 md:-mt-6  lg:gap-14 md:gap-10">
          <Image
            src={ourWorkHero}
            alt="ourWorkHero"
            className="xl:w-[500px] md:w-[300px] mobileL:w-[200px] mobileM:w-[200px] mobileS:w-[170px]"
          />
          <h2 className="ourWorkTitle">Did it</h2>
        </div>
        <div className="w-full flex justify-center body_contanier pt-6 mobileS:pt-4 lg:-mt-20">
          <p className="max-w-prose text-center lg:text-lg md:text-base mobileS:text-xs">
            We don’t just talk about impact — we create it. Explore how Maketa
            helped brands declare their presence through digital and offline
            strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
