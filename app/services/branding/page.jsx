import BrandSpecialists from "@/components/Branding/BrandSpecialists";
import SharedDefaultHero from "@/components/Shared/SharedDefaultHero";
import React from "react";

function page() {
  return (
    <div>
      <SharedDefaultHero
        isBigTitle={false}
        serviceTitle={"Branding"}
        subTitle={"Your brand is more than a logo — it’s a story"}
        desc={
          "Your brand is more than just a logo. It’s your story, your values, and your promise to customers. At MAKETA, we provide complete brand identity design and strategy services, building powerful identities that capture who you are, what you stand for, and why customers choose you.Whether you’re a startup establishing your brand identity or an established company ready for a rebrand, our branding services combine strategy, design, and creativity to make your business unforgettable."
        }
      />
      <BrandSpecialists />
    </div>
  );
}

export default page;
