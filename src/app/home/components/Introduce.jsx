import React from "react";
import BenefitImage from "public/image/benefit_img.svg";
import logoNameImage from "public/image/LogoName_img.svg";
import IconseachImage from "public/image/ic_search_img.svg";
import Image from "next/image";

const introduce = () => {
  return (
    <div className="bg-[#F9F0EC] ">
      <div className="flex flex-col container mx-auto px-4 md:items-center w-full md:flex-row md:gap-[120px]  md:flex  md:justify-between">
        <div className="flex-1 ">
          <div className="items-center justify-center">
            <div className="w-full md:w-auto">
              <Image
                src={logoNameImage}
                width={420}
                height={82}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div class="pt-[20px] pb-[20px] md:text-[14px]  md:md:text-justify   md:text-base  md:font-normal  md:font-weight-400  md:leading-7">
            Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng dụng
            khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect và có
            cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.
          </div>
          <div className="rounded-lg md:relative">
            <div className="relative">
              <input
                type="text"
                className="w-full p-[16px] rounded-xl md:hidden  pl-[35px] text-[#919EAB]"
                placeholder="Job title, keywords... "
              />
              <Image
                src={IconseachImage}
                width={24}
                height={24}
                alt="Picture of the author"
                className="absolute md:hidden block left-2 top-3"
              />
            </div>
            <input
              type="text"
              className="hidden w-full p-[16px] rounded-xl md:block"
              placeholder=" "
            />

            <div class=" md:absolute top-[50%] -translate-y-[50%] right-[4px] mt-[30px] md:mt-[0px]">
              <button className="p-[12px] bg-[#FA541C] rounded-xl w-full md:w-auto flex justify-center">
                <Image
                  src={IconseachImage}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                  className="   "
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={BenefitImage}
            width={564}
            height={564}
            alt="Picture of the author"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default introduce;
