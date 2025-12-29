import Custom from "@/components/services/Custom";
import OurServicesHero from "@/components/services/OurServicesHero";
import ServicesGallery from "@/components/services/ServicesGallery";
import React from "react";

function page() {
  return (
    <div>
      <OurServicesHero />
      <ServicesGallery />
      <Custom />
    </div>
  );
}

export default page;
