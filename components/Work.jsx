import Image from "next/image";
import React from "react";

function Work({ ourWork }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 max-w-9xl gap-y-10 lg:gap-x-40 gap-x-10">
        {ourWork.map((item, i) => (
          <div
            className="transform group transition duration-300 hover:scale-110 hover:-translate-y-1"
            key={i}
          >
            <Image src={item.img} alt={"img"} className="w-[400px]" />
            <p className="group-hover:text-primaryYellow uppercase font-giloryBold pt-5 text-center text-xs md:text-base">
              {item.title}
            </p>
            {item.desc && (
              <p className="text-center text-xs pt-2 uppercase">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
