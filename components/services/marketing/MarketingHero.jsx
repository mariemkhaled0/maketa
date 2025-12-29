import React from "react";
import heartMarketing from "@/components/assets/heartMarketingHero.png";
import Image from "next/image";

function MarketingHero() {
  return (
    <section>
      <div className="flex overflow-hidden">
        <div className="body_contanier pt-20">
          <h1 className="heroTitle">
            Our <br />
            services
          </h1>
          <h2 className="heroSubTitle md:pt-20 pt-6">Marketing</h2>
        </div>

        <Image
          src={heartMarketing}
          alt="heartMarketing"
          className="ml-auto md:w-[500px] w-[180px] mobileS:w-[140px]"
        />
      </div>
      <p className="max-w-[130ch] body_contanier pt-14 font-gilroySemiBold">
        Marketing is more than a campaign — it’s the way your brand declares its
        presence in the world. At Maketa, we combine the power of digital and
        offline strategies to build integrated experiences that reach audiences
        wherever they are. We don’t treat digital and offline as separate worlds
        — we connect them. From social platforms to city streets, from targeted
        ads to unforgettable activations, we design marketing that speaks,
        engages, and delivers real results.
      </p>
    </section>
  );
}

export default MarketingHero;
