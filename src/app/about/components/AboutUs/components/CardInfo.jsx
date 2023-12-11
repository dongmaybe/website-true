import React from "react";
import plusIcon from "public/icons/plus_icon.svg";
import Image from "next/image";

const CardInfo = ({ number, content }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center md:justify-start justify-center">
        <span className="text-[32px] md:text-5xl text-[#FA541C] leading-10 md:leading-[64px] font-bold text-center md:text-left">
          {number}
        </span>
        <div className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]">
          <Image
            src={plusIcon}
            width={20}
            height={20}
            alt="Picture of the author"
            className="w-full object-cover"
          />
        </div>
      </div>
      <span className="text-[#919EAB] text-sm font-poppins text-center md:text-left">
        {content}
      </span>
    </div>
  );
};

export default CardInfo;
