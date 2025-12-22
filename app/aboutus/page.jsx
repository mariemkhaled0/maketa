import Hero from "@/components/aboutus/Hero";
import OurClients from "@/components/aboutus/OurClients";
import OurTeam from "@/components/aboutus/OurTeam";
import React from "react";

function page() {
  return (
    <section>
      <Hero />
      <OurTeam />
      <OurClients />
    </section>
  );
}

export default page;
