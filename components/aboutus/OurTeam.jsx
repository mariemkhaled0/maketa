import React from "react";
import menna from "@/components/assets/menna.png";
import zain from "@/components/assets/zain.png";
import malak from "@/components/assets/malak.png";
import yassmen from "@/components/assets/yassmen.png";
import Abdelhalim from "@/components/assets/Abdelhalim.png";
import amany from "@/components/assets/amany.png";
import Image from "next/image";

function OurTeam() {
  const team = [
    { img: menna, name: "menna fawzy", title: "founder & CEO" },
    { img: zain, name: "Zain", title: "Operation Manager" },

    {
      img: Abdelhalim,
      name: "Abdelhalim Ahmed",
      title: "Business Development Team Leader",
    },
    { img: yassmen, name: "yasmeen sakar", title: "Social Media Specialist" },
    { img: malak, name: "Malak Yasser", title: "Graphic Designer" },
    { img: amany, name: "Malak Yasser", title: "Graphic Designer" },
    { img: amany, name: "Malak Yasser", title: "Graphic Designer" },
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
                <p className="text-black font-bold text-lg">{person.name}</p>
                <p className="text-black text-sm">{person.title}</p>
              </div>
            </div>

            {/* NORMAL TEXT (OPTIONAL – hide on hover) */}
            <p className=" p-1 mt-3  ">{person.name}</p>
            <p className=" ">{person.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
