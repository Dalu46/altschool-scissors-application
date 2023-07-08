import React from "react";
import link2 from "../../assets/link-2.svg";
import grid from "../../assets/grid.svg";
import activity from "../../assets/activity.svg";
import edit from "../../assets/edit.svg";

const WhyUs = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 ">
      <div class="flex flex-col sm:grid sm:grid-cols-3 sm:grid-flow-col gap-4 ">
        <div class=" row-span-4 col-span-1 items-center ">
          <div className="flex">
            <h3 className=" text-2xl font-bold md:text-[29px] ">
              Why Choose <span className="text-lightBlue">Scissors</span>{" "}
            </h3>
          </div>
          <p className="py-2">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </div>
        <div class=" row-span-2 col-span-1 p-2 flex flex-col gap-4 ">
          <div className=" h-12 w-12 p-4 rounded-[56px] bg-[#c4def7] ">
            <img src={link2} alt="link2 -2" />
          </div>
          <div className=" ">
            <h4 className="text-xl font-semibold">URL Shortening</h4>
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
        </div>
        <div class=" row-span-2 col-span-1 p-2 flex flex-col gap-4">
          <div className=" h-12 w-12 p-4 rounded-[56px] bg-[#c4def7] ">
            <img src={grid} alt="grid" />
          </div>
          <div>
            <h4 className="text-xl font-semibold ">QR Codes</h4>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
        </div>
        <div class=" row-span-2 col-span-1 p-2 flex flex-col gap-4 ">
          <div className=" h-12 w-12 p-4 rounded-[56px] bg-[#c4def7] ">
            <img src={edit} alt="edit" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Custom URLs</h4>
            <p>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
        </div>
        <div class=" row-span-2 col-span-1 p-2 flex flex-col gap-4">
          <div className=" h-12 w-12 p-4 rounded-[56px] bg-[#c4def7]">
            <img src={activity} alt="activity" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Data Analytics</h4>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
