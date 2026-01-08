import React from "react";
import menna from "@/components/assets/menna.png";
import zain from "@/components/assets/zain.png";
import malak from "@/components/assets/malak.png";
import yassmen from "@/components/assets/yassmen.png";
import Abdelhalim from "@/components/assets/Abdelhalim.png";
import amany from "@/components/assets/amany.png";
import mergo from "@/components/assets/Mergo.png";
import DoaaAbaid from "@/components/assets/DoaaAbaid.png";
import MostafaMahmoud from "@/components/assets/MostafaMahmoud.png";
import MohamedGamal from "@/components/assets/MohamedGamal.png";
import AamenSaeed from "@/components/assets/AamenSaeed.png";
import Image from "next/image";

function OurTeam() {
  const team = [
    {
      img: menna,
      name: "menna fawzy",
      title: "Founder & CEO",
      desc: "I’m here to turn your vision into reality",
    },
    {
      img: Abdelhalim,
      name: "Abdelhalim Ahmed",
      title: "Business Development Team Leader",
      desc: "I open doors for your next opportunity",
    },
    {
      img: zain,
      name: "Zain fawzi",
      title: "Operation Manager",
      desc: "I’ll make sure your brand grows in the right direction",
    },
    {
      img: yassmen,
      name: "yasmeen sakar",
      title: "Social Media Specialist",
      desc: "I connect you with your community",
    },
    {
      img: malak,
      name: "Malak Yasser",
      title: "Graphic Designer",
      desc: "I design journeys people enjoy",
    },
    {
      img: amany,
      name: "Amany",
      title: "Graphic Designer",
      desc: "I connect you with your community",
    },
    {
      img: mergo,
      name: "Mergo",
      title: "Video editor",
      desc: "I tell your story through visuals and videos",
    },
    {
      img: DoaaAbaid,
      name: "Doaa Abaid",
      title: "Content creator",
      desc: "I’m here to keep your brand always alive and engaging",
    },
    {
      img: MostafaMahmoud,
      name: "Mostafa Mahmoud",
      title: "Media buyer",
      desc: "Your brand deserves attention, and I ensure it gets seen where it matters most.",
    },
    {
      img: MohamedGamal,
      name: "Mohamed Gamal",
      title: "Social media specialist",
      desc: "From trends to content planning, I make sure your audience is always connected and engaged",
    },
    {
      img: AamenSaeed,
      name: "Aamen Saeed",
      title: "Film maker",
      desc: "Your brand’s story deserves to be seen, felt, and remembered and I make that happen.",
    },
  ];
  return (
    <section className="lgP">
      <div className="body_contanier flex items-center lg:gap-20 md:gap-10 gap-5">
        <h2 className=" lg:text-[300px]  md:text-[200px] text-[120px] mobileS:text-[80px] lg: leading-[0.9] font-bebasneue">
          our team
        </h2>
        <p className="max-w-[300px] text-[10px] mobileS:text-[6px] md:text-base text-end transition-all duration-300">
          Behind Maketa is a group of strategists, designers, storytellers, and
          innovators who share one mission: to help brands shine. Our team
          thrives on collaboration, bringing different skills and perspectives
          together to craft work that is fresh, relevant, and effective.
        </p>
      </div>
      <div className="flex gap-10 overflow-x-auto overflow-y-hidden pt-10 no-scrollbar body_contanier">
        {team.map((person, index) => (
          <div key={index} className="flex-shrink-0 w-max text-center group">
            {/* IMAGE WRAPPER */}
            <div className="relative w-[250px] h-auto overflow-hidden">
              <Image src={person.img} alt="person_img" className="w-[300px]" />

              {/* HOVER OVERLAY */}
              <div
                className="
            absolute inset-0 rounded-xl
            bg-yellow-400/90
            flex flex-col items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
              >
                <p className="text-black font-bold text-lg">{person.desc}</p>
              </div>
            </div>

            {/* NORMAL TEXT (OPTIONAL – hide on hover) */}
            <p className=" py-1 my-3 border border-white rounded-3xl w-fit mx-auto px-3 uppercase text-sm font-gilroySemiBold">
              {person.name}
            </p>
            <p className=" ">{person.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
