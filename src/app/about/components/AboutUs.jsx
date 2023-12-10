import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";
import aboutUsImg from "public/image/about_us_img.png";
import plusIcon from "public/icons/plus_icon.svg";

const AboutUs = () => {
  return (
    <div className="mt-[80px]">
      <Title title="VỀ CHÚNG TÔI" />
      <div className="mt-[28px] font-lora flex flex-col md:flex-row flex-wrap gap-2">
        <h3 className="flex-1 text-[32px] font-semibold">
          Kết sức mạnh, Nối thành công
        </h3>

        <div className="flex-1 font-poppins text-[16px] text-[#637381] flex justify-around gap-2">
          <p>
            Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị
          </p>
          <p>
            Donec vitae sapien ut libero venenatis faucibus. Vestibulum
            fringilla pede sit amet augue. Vivamus euismod mauris.
          </p>
        </div>
      </div>
      <div className="mt-[70px]">
        <div className="w-full h-[670px] md:h-auto rounded-2xl overflow-hidden relative">
          <div className="h-full">
            <Image
              src={aboutUsImg}
              width={1152}
              height={648}
              alt="Picture of the author"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 md:left-1/2 p-[20px] md:p-[80px] h-full bg-gradient-to-b from-transparent to-black">
            <h4 className="text-white font-bold text-[24px] md:text-[40px]">
              Hệ sinh thái công nghệ
            </h4>
            <p className="mt-4] text-white text-xl">
              Kết sức mạnh - Nối thành công
            </p>
            <div className="mt-14 grid grid-cols-2 font-barlow gap-10">
              <div className="">
                <div className="flex items-center">
                  <span className="text-5xl text-[#FA541C] leading-[64px] font-bold">
                    5000
                  </span>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={plusIcon}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[#919EAB] text-sm font-poppins">
                  Người dùng
                </span>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className="text-5xl text-[#FA541C] leading-[64px] font-bold">
                    50
                  </span>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={plusIcon}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[#919EAB] text-sm font-poppins">
                  Thông điệp truyền tải
                </span>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className="text-5xl text-[#FA541C] leading-[64px] font-bold">
                    20
                  </span>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={plusIcon}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[#919EAB] text-sm font-poppins">
                  Đối tác công nghệ
                </span>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className="text-5xl text-[#FA541C] leading-[64px] font-bold">
                    8
                  </span>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={plusIcon}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[#919EAB] text-sm font-poppins">
                  Ứng dụng cho hệ sinh thái
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
