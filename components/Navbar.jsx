"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/components/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "./assets/icons";

function Navbar() {
  const pathname = usePathname();
  const [isopen, setIsopen] = useState(false);

  const linkClass = (path) =>
    pathname === path
      ? "uppercase text-sm text-primaryYellow"
      : "uppercase text-sm  hover:text-primaryYellow";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "our work", path: "/ourWork" },
    { name: "about us", path: "/aboutus" },
    { name: "services", path: "/services" },
    { name: "contact us", path: "/contactus" },
  ];
  return (
    <div className="body_contanier flex items-center justify-between pt-2">
      <Image src={logo} alt="logo" className="w-auto h-auto" />

      <nav className="hidden lg:block md:block">
        <ul className="flex gap-5">
          {navLinks.map((navlink, index) => (
            <li className="font-giloryBold" key={index}>
              <Link href={navlink.path} className={linkClass(navlink.path)}>
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="lg:hidden md:hidden block"
        onClick={() => setIsopen(true)}
      >
        <MenuIcon />
      </button>
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col pt-5 text-end justify-end px-6 py-10  transition-transform duration-500 ${
          isopen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsopen(false)}
          className="absolute top-10 left-10 "
        >
          close
        </button>
        <nav className="">
          <ul className="space-y-4">
            {navLinks.map((navlink, index) => (
              <li key={index}>
                <Link href={navlink.path} className={linkClass(navlink.path)}>
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
