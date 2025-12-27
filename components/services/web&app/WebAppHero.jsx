import React from "react";

export default function WebAppHero() {
  const services = [
    {
      title: "WEB DESIGN & DEVELOPMENT",
      description:
        "Responsive, modern websites that reflect your brand and deliver smooth user experiences.",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description:
        "Custom online stores designed to attract, engage, and convert shoppers.",
    },
    {
      title: "APP DEVELOPMENT",
      description:
        "Mobile apps that provide value and keep your customers connected on the go.",
    },
    {
      title: "UX/UI DESIGN",
      description:
        "Intuitive interfaces and seamless navigation that keep users coming back.",
    },
  ];
  return (
    <div className="fade-in">
      <div className="pb-20 body_contanier">
        <h2 className="text-center lg:text-[150px] md:text-[120px] text-[60px] pb-10 md:pb-0 font-bebasneue ">
          Our Services
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-14 items-center  mx-auto">
            {services.map((item, index) => (
              <div key={index}>
                <h3 className="md:text-[35px] text-[24px] md:pb-10 pb-3 font-giloryBold uppercase text-primaryYellow">
                  {item.title}
                </h3>
                <p className="max-w-[40ch] font-gilroySemiBold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
