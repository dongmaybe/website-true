"use client";
import Image from "next/image";
import React from "react";
import buttonLeftIcon from "public/icons/button_left_icon.svg";
import buttonRightIcon from "public/icons/button_right_icon.svg";
import foundingTemImg1 from "public/image/founding_tem_img1.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const FoundingTeam = () => {
  return (
    <div className="mt-[200px] flex flex-col md:flex-row gap-8">
      <div className="flex-1 text-white">
        <h2 className="text-[40px] font-bold font-lora">Đội ngũ sáng lập</h2>
        <p className="font-poppins text-[16px] mt-[24px]">
          Với hàng chục năm làm trong nghề, đội ngũ sáng lập công ty có kinh
          nghiệm trong ngành và tận tâm đem đến những dịch vụ giải pháp đột phá
          và hiệu quả cho khách hàng.
        </p>
        <div className="flex gap-4 mt-[150px] hidden md:block">
          <button>
            <Image
              src={buttonLeftIcon}
              width={40}
              height={40}
              alt="Picture of the author"
              className=" object-cover"
            />
          </button>
          <button>
            <Image
              src={buttonRightIcon}
              width={40}
              height={40}
              alt="Picture of the author"
              className=" object-cover"
            />
          </button>
        </div>
      </div>
      <div className="flex-[2]">
        {/* slider */}
        {/* <Swiper
          // slidesPerView={3}
          // spaceBetween={30}
          freeMode
          centeredSlides
          grabCursor
          centeredSlidesBounds
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 150 },
            768: { slidesPerView: 1, spaceBetween: 50 },
            1024: { slidesPerView: 2, spaceBetween: 150 },
          }}
        >
          <SwiperSlide>
            <div className="text-center w-full rounded-3xl overflow-hidden">
              <div className="h-full w-full rounded-3xl overflow-hidden">
                <Image
                  src={foundingTemImg1}
                  alt="logo-removebg1"
                  width={270}
                  height={363}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white font-poppins mt-[40px] w-full">
                <h3 className="text-[24px] font-semibold ">Vũ Trường Giang</h3>
                <p className="text-[#919EAB] text-sm">Founder</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default FoundingTeam;
