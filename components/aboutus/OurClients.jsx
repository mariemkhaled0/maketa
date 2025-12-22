import React from "react";
import LogosMarquee from "../LogosMarquee";

function OurClients() {
  return (
    <section className=" lg:pt-20 md:pt-20 pt-16 ">
      <div className="flex lg:gap-20 gap-10 body_contanier items-center">
        <p className="max-w-[60ch] uppercase md:text-[10px] text-[6px] ">
          Over the years, we’ve partnered with ambitious brands that trusted us
          to declare their presence. From local businesses to international
          names, our clients are proof that when creativity meets strategy,
          amazing things happen.
        </p>
        <div className="lg:text-[250px] md:text-[150px] xxs:text-[60px] text-[80px] text-primaryYellow  font-bebasneue leading-[0.8] ">
          <h2 className="">our</h2>
          <h2 className="lg:pl-40 md:pl-20">Cleints</h2>
        </div>
      </div>
      <LogosMarquee />
    </section>
  );
}

export default OurClients;
