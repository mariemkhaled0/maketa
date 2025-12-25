import React from "react";
import marketing from "@/components/assets/marketing.png";
import branding from "@/components/assets/branding.png";
import mediaAndProduction from "@/components/assets/mediaAndProduction.png";
import webApp from "@/components/assets/webApp.png";
import Link from "next/link";
import Image from "next/image";
function ServicesGallery() {
  const services = [
    {
      image: marketing,
      path: "/services/marketing",
      id: 1,
    },
    {
      image: branding,
      path: "/services/branding",
      id: 2,
    },
    {
      image: mediaAndProduction,
      path: "/services/mediaAndProduction",
      id: 3,
    },
    {
      image: webApp,
      path: "/services/webAndApp",
      id: 4,
    },
  ];
  return (
    <section>
      <div className="flex lgP fade-in">
        {services.map((service) => (
          <div key={service.id}>
            <Link href={service.path} className="relative group block">
              <Image
                src={service.image}
                alt={"seviceImg"}
                className="hover:opectiy-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGallery;
