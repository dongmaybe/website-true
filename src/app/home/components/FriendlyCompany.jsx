import React from "react";
import RatioOverlayImage from "public/image/RatioOverlayImage.svg";
import Image from "next/image";
import EllipseImg from "public/image/Ellipse_img.svg";
import Newone from "public/image/newone.svg";
import Newtow from "public/image/newtow.svg";
import Newthree from "public/image/newthree.svg";
import Newfour from "public/image/newfour.svg";

const FriendlyCompany = () => {
  return (
    <main className=" mt-[20px] md:mt-[36px] first-letter:flex flex-col container mx-auto px-4  w-full md:flex-row md:gap-[50px]  md:flex  md:justify-between">
      <div className=" ">
        {/* noi dung phia duoi */}
        {/* 
          // 
          //  */}

        <div className=" flex gap-7">
          <div className="hidden md:block flex-1 relative] gap-7">
            <div className="">
              <Image
                src={RatioOverlayImage}
                // width={560}
                // height={746}
                alt="Picture of the author"
                className="!w-[100%] !h-[100%] object-cover"
              />
            </div>
            {/* 
              // 
              //  */}

            <div className="hidden absolute inset-0 flex items-end w-[inherit] gap-7">
              <div className="  p-[40px] text-[#919EAB] gap-7">
                <div className=" flex ">
                  <div>24 May 2019</div>
                  <Image
                    src={EllipseImg}
                    width={4}
                    height={4}
                    alt="Picture of the author"
                  />
                  <div>8 mins</div>
                </div>
                <div className="text-[36px] font-bold leading-[54px]">
                  Event On A Budget: 7 Tips From The Great Depression
                </div>
                <div className="opacity-[0.48]">
                  Aenean viverra rhoncus pede. Phasellus blandit leo ut odio.
                  Pellentesque commodo eros a enim. Phasellus consectetuer
                  vestibulum elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row md:flex md:flex-1  gap-7">
            <div className="flex-1 gap-7">
              <div className="flex md:flex-col gap-3">
                <div className="rounded-md gap-3">
                  <Image
                    src={Newone}
                    width={264}
                    height={264}
                    alt="Picture of the author"
                    className="!rounded-md"
                  />
                </div>
                <div className="flex flex-col md:flex-col gap-3">
                  <div className="flex flex-row md:flex-row text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2020</div>
                    <div className="pl-[12px]"> 8 mins</div>
                  </div>
                  <div className="text-[18px] text-black">
                    Apply These 7 Secret Techniques To Improve Event
                  </div>
                </div>
              </div>

              <div className="pt-[10px] flex md:flex-col gap-3">
                <div className="rounded-md gap-3">
                  <Image
                    src={Newtow}
                    width={264}
                    height={198}
                    alt="Picture of the author"
                    className="!rounded-md"
                  />
                </div>
                <div className="flex flex-col md:flex-col gap-3">
                  <div className="flex flex-row md:flex-row text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2020</div>
                    <div className="pl-[12px]"> 8 mins</div>
                  </div>
                  <div className="text-[18px] text-black">
                    Apply These 7 Secret Techniques To Improve Event
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex-1 gap-7">
              <div className="pt-[10px] md:p-0 flex md:flex-col gap-3">
                <div className="rounded-md gap-3">
                  <Image
                    src={Newthree}
                    width={264}
                    height={198}
                    alt="Picture of the author"
                    className="!rounded-md"
                  />
                </div>
                <div className=" flex flex-col md:flex-col gap-3">
                  <div className="flex flex-row md:flex-row text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2020</div>
                    <div className="pl-[12px]"> 8 mins</div>
                  </div>
                  <div className="text-[18px] text-black">
                    Event Doesn't Have To Be Hard. Read These 7 Tips
                  </div>
                </div>
              </div>

              <div className="pt-[10px] flex md:flex-col gap-3">
                <div className="rounded-md gap-3">
                  <Image
                    src={Newfour}
                    width={264}
                    height={264}
                    alt="Picture of the author"
                    className="!rounded-md "
                  />
                </div>
                <div className="flex flex-col md:flex-col gap-3">
                  <div className="flex flex-row md:flex-row text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2020</div>
                    <div className="pl-[12px]"> 8 mins</div>
                  </div>
                  <div className="text-[18px] text-black">
                    Don't Waste Time! 7 Facts Until You Reach Your Event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FriendlyCompany;
