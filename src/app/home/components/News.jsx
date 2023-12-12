import React from "react";
import ChevrondownImg from "public/image/chevrondown_img.svg";
import Image from "next/image";

const News = () => {
  return (
    <div className="flex justify-between mt-[48px]  items-start ">
      <div className="text-[40px] text-[#0DC5AE] font-[Lona] flex">
        Hệ sinh thái True Conect
      </div>
      <div class="text-[#FF0054] font-Poppins text-base font-semibold leading-normal mt-[13px] flex justify-end  md:pr-[99px] text-[20px]">
        Xem thêm
        <Image
          src={ChevrondownImg}
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default News;
