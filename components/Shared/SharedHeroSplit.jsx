import Image from "next/image";

export default function SharedHeroSplit({
  titleStart,
  titleHighlight,
  titleEnd,
  image,
  description,
  descriptionAlign = "center",
}) {
  const isCenter = descriptionAlign === "center";

  return (
    <section className="w-full">
      <div className="fade-in lg:pt-20 pt-6">
        <div className="flex body_contanier items-center lg:gap-20 gap-6">
          <h1 className="ourWorkTitle">{titleStart}</h1>
          <h2 className="font-Rockybilly text-primaryYellow text-[28px] md:text-[30px] xl:text-[70px] lg:text-[55px] mobileM:text-[16px] mobileS:text-[14px]">
            {titleHighlight}
          </h2>
        </div>

        <div className="flex lg:-mt-10 md:-mt-6 lg:gap-14 md:gap-10">
          <Image
            src={image}
            alt={titleHighlight}
            className="xl:w-[500px] md:w-[300px] mobileL:w-[200px] mobileM:w-[200px] mobileS:w-[170px]"
          />
          <h2 className="ourWorkTitle">{titleEnd}</h2>
        </div>

        <div
          className={`w-full flex body_contanier pt-6 mobileS:pt-4 ${
            isCenter
              ? "justify-center lg:-mt-20"
              : "justify-end md:-mt-40 -mt-6"
          }`}
        >
          <p
            className={`text-xs lg:text-lg md:text-base ${
              isCenter
                ? "text-center max-w-prose"
                : "text-end lg:max-w-prose md:max-w-[40ch] max-w-[30ch]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
