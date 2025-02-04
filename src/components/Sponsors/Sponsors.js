import React from "react";
import { data } from "./Data";
import "../../colors.css";

const title = data.pop();

export default function Sponsors() {
  return (
    <div>
      <section
        id="sponsors"
        className="container-theme mt-2 my-4 md:my-12"
        style={{ padding: 0 }}
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
      >
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme flex justify-center py-6">
        Previous Sponsors
      </h1>
        {/* Title Sponsor  */}
        <div className="justify-center text-center">
          <div className="sticky top-0 justify-center text-center sponsor-bg-title px-4 py-2 rounded-t-lg">
            <h1 className="xl3 tracking-tight text-xl md:text-3xl leading-normal md:leading-relaxed header-theme font-semibold">
              {" "}
              {title.tierName}
            </h1>
          </div>
          <div className="flex px-4 flex-wrap -mx-px overflow-hidden justify-center ">
            {title.data.map((sponsor) => {
              return (
                <div
                  className="my-1 p-3 md:p-8 overflow-hidden w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 items-center justify-center object-cover"
                  key={sponsor.id}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <picture className="">
                      <source srcSet={sponsor.webp} type="image/webp" />
                      <img src={sponsor.src} alt={sponsor.sponsorName} />
                    </picture>
                    {/* for sponsorname */}
                    {/* <p className="text-white tracking-wider text-lg mt-2">{sponsor.sponsorName}</p>   */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        {/* Gold, Silver, Bronze  */}
        {data.map((tier, index) => {
          return (
            <div className="justify-center text-center" key={tier.id}>
              <div
                className={`sticky top-0 justify-center text-center px-4 sponsor-bg-${index} py-2`}
              >
                <h1 className="xl3 tracking-tight text-xl md:text-3xl leading-normal md:leading-relaxed header-theme font-semibold">
                  {" "}
                  {tier.tierName}
                </h1>
              </div>
              <div className="flex flex-wrap -mx-px overflow-hidden justify-center px-4">
                {tier.data.map((sponsor) => {
                  return (
                    <div
                      className="my-1 p-3 md:p-8 overflow-hidden w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 items-center justify-center object-cover"
                      key={sponsor.id}
                    >
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <img src={sponsor.src} alt={sponsor.sponsorName}></img> */}
                        <picture>
                          <source srcSet={sponsor.webp} type="image/webp" />
                          <img src={sponsor.src} alt={sponsor.sponsorName} />
                        </picture>
                        {/* for sponsorname */}
                        {/* <p className="text-white tnpm rn start
                        racking-wider text-lg mt-2">{sponsor.sponsorName}</p>   */}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {/* <div className="flex items-center justify-center pb-12">
          <a
            href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-center px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-400 hover:text-white md:py-4 md:text-lg md:px-10"
              id="pin-foot"
            >
              Sponsorship Brochure
            </button>
          </a>
        </div> */}
      </section>

      {/* <div id="scrollSlide" className="relative mt-2 p-6 my-4 py-8 md:my-12 md:p-12">
      
      
        </div>
        <div className="h-4 md:h-12"></div> */}
    </div>
  );
}
