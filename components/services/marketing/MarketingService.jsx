"use client";
import React, { useState } from "react";

function MarketingService() {
  const [activeDigital, setActiveDigital] = useState(null);
  const [activeOffline, setActiveOffline] = useState(null);

  const DigitalMarketing = [
    {
      title: "01 SOCIAL MEDIA",
      desc: "We design and manage social media campaigns that keep your audience connected with your brand.",
    },
    {
      title: "02 PAID ADS",
      desc: "Get noticed by the right people at the right time through targeted paid campaigns.",
    },
    {
      title: "03 SEO",
      desc: "Our SEO strategies boost your visibility and help your audience find you first.",
    },
    {
      title: "04 CONTENT",
      desc: "Creative content that tells your story and strengthens your brand identity.",
    },
  ];

  const OfflineMarketing = [
    {
      title: "01 EVENTS / PR",
      desc: "From product launches to press conferences and media coverage, we craft events and public relations strategies that put your brand in the spotlight. Every moment is designed to engage the right audience and generate meaningful buzz.",
    },
    {
      title: "02 ACTIVATIONS",
      desc: "We bring your brand to life through interactive experiences. Whether it’s street activations, pop-ups, or creative stunts, we design moments that spark attention and encourage real connections.",
    },
    {
      title: "03 PRINT CAMPAIGNS",
      desc: "From product launches to corporate gatherings, we plan and execute events that leave lasting impressions. Every detail is crafted to align with your brand and engage your audience face-to-face.",
    },
  ];

  const toggleItem = (index, active, setActive) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="body_contanier mdP md:h-[700px]  h-[800px] flex flex-col md:flex-row md:justify-between gap-14  pb-20">
      {/* Digital Marketing */}
      <div>
        <h2 className="xl:text-[100px] lg:text-[90px] md:text-[60px] text-[50px] font-bebasneue leading-[0.9] text-primaryYellow pb-6 md:pb-10">
          Digital <br /> Marketing
        </h2>

        <div className="border border-[#3C3C3C] xl:w-[500px] lg:w-[370px] md:w-[300px]">
          {DigitalMarketing.map((item, index) => (
            <div key={index} className="border-b border-[#3C3C3C] px-5">
              <div
                onClick={() =>
                  toggleItem(index, activeDigital, setActiveDigital)
                }
                className="h-10 flex items-center cursor-pointer"
              >
                <p className="text-2xl">{item.title}</p>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    activeDigital === index
                      ? "max-h-40 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
              >
                <p className="pb-5 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Marketing */}
      <div>
        <h2 className="xl:text-[100px] lg:text-[90px] md:text-[60px] text-[50px] font-bebasneue leading-[0.9] text-primaryYellow pb-6 md:pb-10">
          Offline <br /> Marketing
        </h2>

        <div className="border border-[#3C3C3C] xl:w-[500px] lg:w-[370px] md:w-[300px]">
          {OfflineMarketing.map((item, index) => (
            <div key={index} className="border-b border-[#3C3C3C] px-5">
              <div
                onClick={() =>
                  toggleItem(index, activeOffline, setActiveOffline)
                }
                className="h-10 flex items-center cursor-pointer"
              >
                <p className="text-2xl">{item.title}</p>
              </div>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out origin-top
    ${
      activeOffline === index
        ? "max-h-[300px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
              >
                <p className="pb-5 pt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketingService;
