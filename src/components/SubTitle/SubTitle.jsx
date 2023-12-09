import Image from "next/image";
import React from "react";
import arrowCurvedIcon from "public/icons/arrow_curved_icon.svg";

const SubTitle = ({ title, content }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[51px] h-[42px]">
          <Image
            src={arrowCurvedIcon}
            width={51}
            height={42}
            alt="arrowCurvedIcon"
            className="w-full object-cover"
          />
        </div>
        <h2 className="ml-6 text-[#FF0054] text-[32px] font-semibold font-lora">
          {title}
        </h2>
      </div>
      <p className="mt-[12px] text-base text-[#212B36] font-poppins leading-[30px]">
        {content}
      </p>
    </>
  );
};

export default SubTitle;
