import Marquee from "react-fast-marquee";
import Image from "next/image";
import { logosRow1 } from "./assets/logos1/logos1";
import { logosRow2 } from "./assets/logos2/logos2";

export default function LogosMarquee() {
  return (
    <section className="relative pb-36 pt-20 overflow-hidden">
      {/* overlays */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Row 1 */}
      <Marquee speed={100} autoFill>
        {logosRow1.map((logo, i) => (
          <div
            key={i}
            className="mx-5 opacity-70 hover:opacity-100 pb-10 transition"
          >
            <Image src={logo} alt="logo" height={38} />
          </div>
        ))}
      </Marquee>

      {/* Row 2 */}
      <Marquee speed={100} direction="right" autoFill className="mt-14">
        {logosRow2.map((logo, i) => (
          <div key={i} className="mx-5 opacity-70 hover:opacity-100 transition">
            <Image src={logo} alt="logo" height={38} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
