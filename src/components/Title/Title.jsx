import Image from "next/image";
import React from "react";

function Title({ title, image }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1 flex flex-col md:justify-start items-center md:items-start justify-center md:text-right ">
        <h1 className="text-[#0DC5AE] font-bold font-lora text-[24px] md:text-[40px]">
          {title}
        </h1>
        <div className="h-[4px] w-[136px] bg-[#FF0054]"></div>
      </div>
      {image && (
        <div className="mt-8 md:mt-0 mb-20 md:mb-0">
          <Image
            src={image}
            width={1152}
            height={648}
            alt="Picture of the author"
            className="w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default Title;
