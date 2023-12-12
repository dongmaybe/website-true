"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ContactAgainForm from "@/app/home/components/ContactAgainForm";
import LogoRemoveImg from "public/image/Footer/logo-removebg.svg";
import LogoTeckImg from "public/image/Footer/logo-comteckImg.svg";
import LogoSixaxanhImg from "public/image/Footer/logo-sixaxanhImg.svg";
import LogoKetoanImg from "public/image/Footer/logo-ke-toan-nhu-yImg.svg";
import LogoEzsharingImg from "public/image/Footer/logoEZsharingImg.svg";
import LogoNhoImg from "public/image/Logo-Nho.svg";
import LogoHogoImg from "public/image/Logo-Hogo.svg";

const ContractAgain = () => {
  const fakeData = [
    {
      id: 1,
      src: LogoRemoveImg,
      name: "LogoRemove",
    },
    {
      id: 2,
      src: LogoTeckImg,
      name: "LogoRemove",
    },
    {
      id: 3,
      src: LogoSixaxanhImg,
      name: "LogoRemove",
    },
    {
      id: 4,
      src: LogoKetoanImg,
      name: "LogoRemove",
    },
    {
      id: 5,
      src: LogoEzsharingImg,
      name: "LogoRemove",
    },
    {
      id: 6,
      src: LogoNhoImg,
      name: "LogoRemove",
    },
    {
      id: 7,
      src: LogoHogoImg,
      name: "LogoRemove",
    },
  ];
  return (
    <main className="mt-[162px]">
      <p className="text-center  text-[40px] text-semibold text-[#0DC5AE] mb-[25px]">
        Đối tác của chúng tôi
      </p>

      <Swiper
        spaceBetween={60}
        breakpoints={{
          100: { slidesPerView: 3 },
          476: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        navigation
        autoplay={{ delay: 3000 }}
      >
        {fakeData?.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              className="flex items-center justify-center"
            >
              <div className="flex justify-center items-center h-[220px] w-[220px] gap-10">
                <Image
                  src={slide.src}
                  alt={slide.name}
                  width={206}
                  height={120}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative">
        {/* Background Image */}

        {/* Overlay with linear-gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-[#5e5757]  opacity-50  bg-gradient-to-l from-[#000000] via-[#030303] opacity-[100]">
          <div className=" text-[red] text-[50px] md:p-[120px] md:flex md:justify-between">
            <div className="flex-1  ">
              <div className="text-[#FA541C] md:text-[#0DC5AE] text-[40px] text-[lora]  font-[semibold] flex justify-center">
                Liên Hệ
              </div>
              <div className="text-white text-[16px]  flex justify-center">
                dvkh.trueconnect@gmail.comcom
              </div>
              <div className="text-white text-[16px]  flex justify-center">
                80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
              </div>
            </div>
            <div className="flex-1 font-[poppins] text-base font-normal leading-6 text-[#919EAB] flex  flex-col gap-6  p-[30px] rounded-lg">
              <ContactAgainForm />
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="h-[624px] ">
          <Image
            src="/image/Footer/contact_infomation/IMG.svg"
            alt="IMG.svg"
            width={1140}
            height={624}
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default ContractAgain;
