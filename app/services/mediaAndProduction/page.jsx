import WhatWeOffer from "@/components/MediaProduction/WhatWeOffer";
import SharedDefaultHero from "@/components/Shared/SharedDefaultHero";
import React from "react";

function page() {
  return (
    <div>
      <SharedDefaultHero
        isBigTitle={false}
        serviceTitle={"Media Production"}
        subTitle={"From concept to creation , bring your ideas to life."}
        desc={
          "Powerful content is at the heart of every campaign. Our production team creates visuals that inspire, engage, and tell your story with impact. From cinematic videos to striking photography and dynamic motion graphics, we make sure your brand shines everywhere it appears."
        }
      />
      <WhatWeOffer />
    </div>
  );
}

export default page;
