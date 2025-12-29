import React from "react";

function MarketingService() {
  return (
    <section className="body_contanier mdP flex justify-between flex-col gap-14 md:flex-row md:gap-0 pb-20">
      <div>
        <h2 className="xl:text-[100px] lg:text-[90px]  md:text-[60px] text-[50px] font-bebasneue leading-[0.9] text-primaryYellow md:pb-10 pb-6">
          Digital
          <br /> MArketing
        </h2>
        <div className="border border-[#3C3C3C] xl:w-[500px] lg:w-[370px] md:w-[300px]">
          {["01 SOCIAL MEDIA", "02 PAID ADS", "03 SEO", "04 CONTENT"].map(
            (item, index) => (
              <div key={index}>
                <div className="realtive h-10  border-b border-b-[#3C3C3C] flex items-center">
                  <p className=" text-2xl px-5 ">{item}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div>
        <h2 className="xl:text-[100px] lg:text-[90px] md:text-[60px] text-[50px] font-bebasneue leading-[0.9] text-primaryYellow md:pb-10  pb-6">
          Offline
          <br /> MArketing
        </h2>
        <div className="border border-[#3C3C3C] xl:w-[500px] lg:w-[370px] md:w-[300px]">
          {["01 Events / PR", "02 Activations", " 03 Print Campaigns"].map(
            (item, index) => (
              <div key={index}>
                <div className="realtive h-10  border-b border-b-[#3C3C3C] flex items-center">
                  <p className=" text-2xl px-5 ">{item}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default MarketingService;
