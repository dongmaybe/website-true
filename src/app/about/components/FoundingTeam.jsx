"use client";

import Image from "next/image";
import buttonLeftIcon from "public/icons/button_left_icon.svg";
import buttonRightIcon from "public/icons/button_right_icon.svg";
import foundingTemImg1 from "public/image/founding_tem_img1.png";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FoundingTeam() {
  const swiper = useSwiper();

  const handleNextButtonClick = () => {
    console.log("🚀  swiper ==", swiper);
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  const imagesData = [
    {
      src: foundingTemImg1,
      alt: "foundingTemImg1",
      name: "Lê Thu Hằng",
      position: "Co - Founder",
    },
    {
      src: foundingTemImg1,
      alt: "Second",
      name: "Vũ Trường Giang",
      position: "Founder",
    },
    {
      src: foundingTemImg1,
      alt: "Third",
      name: "Đồng Văn Hồng",
      position: "Co - Founder",
    },
    {
      src: foundingTemImg1,
      alt: "Fourth",
      name: "Lê Thu Hương",
      position: "Co - Founder",
    },
  ];

  return (
    <div className="mt-2 md:mt-[100px] w-full flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-[30%] text-white relative">
        <h2 className="text-[24px] md:text-[40px] text-center md:text-left font-bold font-lora whitespace-nowrap">
          Đội ngũ sáng lập
        </h2>
        <p className="font-poppins text-[14px] md:text-[16px] mt-[24px] whitespace-normal">
          Với hàng chục năm làm trong nghề, đội ngũ sáng lập công ty có kinh
          nghiệm trong ngành và tận tâm đem đến những dịch vụ giải pháp đột phá
          và hiệu quả cho khách hàng.
        </p>
        <div className="absolute bottom-0 left-[90px] gap-4 mt-[150px] hidden md:flex">
          <button
            className="swiper-button-prev !sm:hidden !md:flex absolute !-left-[70px] after:hidden"
            onClick={() => handleNextButtonClick()}
          >
            <Image
              src={buttonLeftIcon}
              width={40}
              height={40}
              alt="Picture of the author"
              className=" object-cover"
            />
          </button>
          <button
            className="swiper-button-next !sm:hidden !md:flex after:hidden"
            onClick={() => handlePrevButtonClick()}
          >
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
      <div className="w-full md:w-[68%] container">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onChange={(value) => console.log(value)}
          className="w-full rounded-lg"
          // allowSlidePrev={false}
          // allowSlideNext={false}
          loop={true}
        >
          {imagesData.map((image, index) => (
            <SwiperSlide key={index} className="!h-full">
              <div className="text-center h-full w-full rounded-3xl overflow-hidden">
                <div className="w-full rounded-3xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={270}
                    height={363}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white font-poppins mt-[40px] w-full ">
                  <h3 className="text-[24px] font-semibold ">{image.name}</h3>
                  <p className="text-[#919EAB] text-sm">{image.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
