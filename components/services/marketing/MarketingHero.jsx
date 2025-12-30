import React from "react";

import SharedDefaultHero from "@/components/Shared/SharedDefaultHero/";

function MarketingHero() {
  return (
    <section>
      <SharedDefaultHero
        isBigTitle={false}
        serviceTitle={"Marketing"}
        desc={
          "Marketing is more than a campaign — it’s the way your brand declares its presence in the world. At Maketa, we combine the power of digital and offline strategies to build integrated experiences that reach audiences wherever they are. We don’t treat digital and offline as separate worlds — we connect them. From social platforms to city streets, from targeted ads to unforgettable activations, we design marketing that speaks engages, and delivers real results."
        }
      />
    </section>
  );
}

export default MarketingHero;
