"use client";

import Image from "next/image";
import React from "react";
import IconFakebookImg from "public/icons/Fakebook_Icon.svg";
import IconNextImg from "public/icons/Next_Icon.svg";
import IconTiktokImg from "public/icons/Tiktok_Icon.svg";
import IconYoutubeImg from "public/icons/Youtube_Icon.svg";
import IconMapkerkerImg from "public/icons/Mapmarker_Icon.svg";
import IconMessageImg from "public/icons/Message_Icon.svg";

const Footer = () => {
  return (
    <main>
      <div className="flex  bg-[#FFFFFF] flex-col container mx-auto px-3 md:items-center w-full md:flex-row   md:flex  md:justify-between">
        <div className="pt-[30px]">
          <Image
            src="/image/Footer/contact_infomation/icon-company.svg"
            alt="IMG.svg"
            width={231}
            height={62}
            className="w-auto h-auto"
          />
          <div className=" flex">
            <div className="p-[8px] flex-1 gap-8">
              <div className="text-[20px] font-normal leading-5  font-[semibold]">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT{" "}
              </div>
              <div className=" flex md:hidden text-[14px] ">
                <p className="text-[#0DC5AE]">Hotline/Zalo:</p> 0888 136 622
              </div>
              <div className="flex flex-row gap-1">
                <Image
                  src={IconMessageImg}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
                dvkh.trueconnect@gmail.com
              </div>
              <div className="text-[14px] flex gap-1">
                <Image
                  src={IconMapkerkerImg}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
                <div className="text-[14px] overflow-hidden whitespace-nowrap">
                  80, 69b/22/40 Hoang Van Thai,Thanh Xuan,Ha Noi
                </div>
              </div>
              <div className="flex justify-center md:hidden md:flex-row gap-2 ">
                <div>
                  <Image
                    src={IconTiktokImg}
                    width={33}
                    height={33}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src={IconYoutubeImg}
                    width={33}
                    height={33}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src={IconFakebookImg}
                    width={33}
                    height={33}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className="hidden md:flex text-[14px]  ">
                <p className="text-[#0DC5AE]">Hotline/Zalo:</p> 0888 136 622
              </div>
              <div className="text-[14px]">
                Số giấy chứng nhận đăng ký kinh doanh:
              </div>
              <div className="text-[14px]">
                Ngày cấp: . Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội
              </div>
              <div className="text-[14px]">
                © 2023 All Right Reserved True Connect
              </div>
            </div>
            <div className="hidden md:flex flex-1">
              <div className="p-[12px] flex-1 pr-[40px]">
                <div className="text-20px font-normal leading-5  font-[semibold]">
                  Tài liệu
                </div>
                <div className="">Tài liệu hướng dẫn </div>
              </div>
              <div className="p-[12px] flex-1 ">
                <div className="text-20px font-normal leading-5 ] font-[semibold]">
                  True ContText
                </div>
                <div className="text-[14px]">Chính sách bảo mật </div>
                <div className="text-[14px]">
                  Chính sách thanh toán và bán hàng
                </div>
                <div className="text-[14px]">
                  Điều khoản và điều kiện sử dụng{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
      lien he */}

        <div></div>
      </div>
      <div className="flex">
        <div className="hidden md:flex flex-1"></div>
        <div className="flex  md:flex-row flex-1 gap-1">
          <div className="flex md:flex-row gap-1 hidden md:flex">
            <div>
              <Image
                src={IconTiktokImg}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                src={IconYoutubeImg}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                src={IconFakebookImg}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="w-full md:w-auto pr-[3px] pl-[3px] bg-slate-200 text-[#424242]">
            Email:
            <input type="text" placeholder="" className="bg-slate-200" />
          </div>
          <div className="pl-[-6px]">
            <Image
              src={IconNextImg}
              width={24}
              height={24}
              alt="Picture of the author"
              className="rounded-md bg-[#0DC5AE]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
