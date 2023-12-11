import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";
import aboutUsImg from "public/image/about_us_img.png";
import CardInfo from "@/app/about/components/AboutUs/components/CardInfo";

const AboutUs = () => {
  const dataFake = [
    {
      id: 1,
      number: 5000,
      content: "Người dùng",
    },
    {
      id: 2,
      number: 50,
      content: "Thông điệp truyền thông",
    },
    {
      id: 3,
      number: 20,
      content: "Đối tác công nghệ",
    },
    {
      id: 4,
      number: 8,
      content: "Ứng dụng cho hệ sinh thái",
    },
  ];
  return (
    <div className="mt-4 md:mt-[80px]">
      <Title title="VỀ CHÚNG TÔI" />
      <div className="mt-[28px] font-lora flex flex-col md:flex-row flex-wrap gap-2">
        <h3 className="flex-1 text-lg md:text-[32px] text-center md:text-left font-semibold">
          Kết sức mạnh, Nối thành công
        </h3>

        <div className="flex-1 flex-col md:flex-row font-poppins text-sm md:text-[16px] text-[#637381] flex justify-around gap-2">
          <p>
            Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị
          </p>
          <p>
            Donec vitae sapien ut libero venenatis faucibus. Vestibulum
            fringilla pede sit amet augue. Vivamus euismod mauris.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-[70px]">
        <div className="w-full h-[480px] md:h-auto rounded-2xl overflow-hidden relative">
          <div className="h-full">
            <Image
              src={aboutUsImg}
              width={1152}
              height={648}
              alt="Picture of the author"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 md:left-1/2 py-[80px] px-[20px] md:p-[80px] h-full bg-gradient-to-b from-transparent to-black">
            <h4 className="text-white font-bold text-center md:text-left text-[24px] md:text-[40px]">
              Hệ sinh thái công nghệ
            </h4>
            <p className="mt-4 text-white text-center md:text-left text-base md:text-xl">
              Kết sức mạnh - Nối thành công
            </p>
            <div className="mt-[40px] md:mt-14 grid grid-cols-2 font-barlow gap-10">
              {dataFake.map((infoItem) => {
                return (
                  <CardInfo
                    key={infoItem.id}
                    number={infoItem.number}
                    content={infoItem.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
