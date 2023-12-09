import Image from "next/image";
import React from "react";

function Title({ title, image }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[#0DC5AE] font-bold font-lora text-[40px]">
          {title}
        </h1>
        <div className="h-[4px] w-[136px] bg-[#FF0054]"></div>
      </div>
      <div>
        {image && (
          <Image
            src={image}
            width={1152}
            height={648}
            alt="Picture of the author"
            className="w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default Title;
