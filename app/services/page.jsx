import CustomServices from "@/components/services/CustomServices";
import OurServicesHero from "@/components/services/OurServicesHero";
import ServicesGallery from "@/components/services/ServicesGallery";
import React from "react";

function page() {
  return (
    <div>
      <OurServicesHero />
      <ServicesGallery />
      <CustomServices />
    </div>
  );
}

export default page;
