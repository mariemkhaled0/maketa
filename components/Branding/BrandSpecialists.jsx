import React from "react";
import NAMINGARCHITECTURE from "@/components/assets/NAMING&ARCHITECTURE.png";
import visualIdentity from "@/components/assets/visualIdentity.png";
import logoDesign from "@/components/assets/logoDesign.png";
import brandMessaging from "@/components/assets/brandMessaging.png";
import brandGuidelines from "@/components/assets/brandGuidelines.png";
import collateralDesign from "@/components/assets/collateralDesign.png";
import brandStrategy from "@/components/assets/brandStrategy.png";
import twooptics from "@/components/assets/Twooptics.png";
import disineHealth from "@/components/assets/disineHealth.png";
import tuyingoShip from "@/components/assets/tuyingoShip.png";
import Image from "next/image";
function BrandSpecialists() {
  const data = [
    {
      title: "NAMING & ARCHITECTURE",
      desc: "From product names to brand hierarchies, we clarify and align your structure.",
      img: NAMINGARCHITECTURE,
    },
    {
      title: "VISUAL IDENTITY",
      desc: "Colors, typography, iconography, imagery, and graphics that establish a cohesive style.",
      img: visualIdentity,
    },
    {
      title: "LOGO DESIGN",
      desc: "Original, versatile, and timeless marks that serve as the foundation of your identity.",
      img: logoDesign,
    },
    {
      title: "BRAND MESSAGING",
      desc: "Taglines, mission statements, and voice guidelines that shape how your brand speaks.",
      img: brandMessaging,
    },
    {
      title: "BRAND GUIDELINES",
      desc: "Clear rules for colors, typography, imagery, and graphics to ensure consistency.",
      img: brandGuidelines,
    },
    {
      title: "COLLATERAL DESIGN",
      desc: "Business cards, packaging, signage, digital templates, and more to bring your brand to life.",
      img: collateralDesign,
    },
    {
      title: "BRAND STRATEGY",
      desc: "Research and positioning to define your unique space in the market.",
      img: brandStrategy,
    },
  ];
  return (
    <section className="body_contanier flex justify-center mdP pb-20">
      <div>
        <h2 className="text-center lg:text-[120px] md:text-[90px] text-[50px] mobileM:text-[40px] pb-10 leading-none font-bebasneue">
          Branding Specialists
        </h2>
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center lg:gap-14 md:gap-6 gap-6 md:mb-20 mb-14"
          >
            {/* ICON COLUMN */}
            <div className="md:w-28 w-16 flex justify-center items-start shrink-0">
              <Image
                src={item.img}
                alt={item.title}
                className="max-w-full h-auto"
              />
            </div>

            {/* TEXT COLUMN */}
            <div className="md:max-w-[400px] max-w-[210px] ">
              <h3 className="md:text-2xl text-sm font-bold mb-2 text-primaryYellow">
                {item.title}
              </h3>
              <p className="text-white/80 text-xs md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center md:gap-10 pt-10 gap-4">
          <div className="space-y-2 md:space-y-6">
            <Image src={twooptics} alt={"img"} />
            <Image src={disineHealth} alt={"img"} />
          </div>
          <div>
            <Image src={tuyingoShip} alt={"img"} />
          </div>
        </div>
        <div className="flex md:gap-10 md:pt-20 pt-10 font-poppins font-bold text-xs gap-4 md:text-base">
          <p>+ Visual Identity</p>
          <p>+ Collateral Design</p>
          <p>+ Logo Design</p>
        </div>
      </div>
    </section>
  );
}

export default BrandSpecialists;
