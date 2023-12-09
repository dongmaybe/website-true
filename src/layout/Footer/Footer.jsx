"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Component Footer
const Footer = () => {
  return (
    <main className="mt-[162px]">
      <p className="text-center font-[Lora] text-[40px] font-[semibold] text-[#0DC5AE] mb-[25px]">
        Đối tác của chúng tôi
      </p>
      <div className="gap-[19px] flex justify-between  items-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <Image
              src="/image/Footer/logo-removebg.svg"
              alt="logo-removebg"
              width={206}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/logo-comteckImg.svg"
              alt="logo-removebg"
              width={170}
              height={161}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/logo-sixaxanhImg.svg"
              alt="logo-removebg"
              width={206}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/logo-ke-toan-nhu-yImg.svg"
              alt="logo-removebg"
              width={206}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/logo-startImg.svg"
              alt="logo-removebg"
              width={217}
              height={75}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/logoEZsharingImg.svg"
              alt="logo-removebg"
              width={217}
              height={75}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/Footer/contact_infomation/logo-House_IMG.svg"
              alt="logo-removebg"
              width={120}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="image/Footer/contact_infomation/logo-huyennho_IMG.svg"
              alt="logo-removebg"
              width={220}
              height={220}
            />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
      {/* <Contact_infomation /> */}
      <div className="relative">
        {/* Background Image */}

        {/* Overlay with linear-gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-[#5e5757]  opacity-50  bg-gradient-to-l from-[#000000] via-[#030303] opacity-[100]">
          <div className=" text-[red] text-[50px] p-[120px] flex justify-between">
            <div className="flex-1  ">
              <div className="text-[#0DC5AE] text-[40px] text-[lora]  font-[semibold]">
                Liên Hệ
              </div>
              <div className="text-white text-[16px]">
                dvkh.trueconnect@gmail.comcom
              </div>
              <div className="text-white text-[16px]">
                80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
              </div>
            </div>
            <div className="flex-1 font-[poppins] text-base font-normal leading-6 text-[#919EAB] flex  flex-col gap-6 w-[50%] p-[30px] rounded-lg">
              <input
                type="text"
                placeholder="Họ và Tên"
                className=" bg-[#919EAB14] m-10px rounded-lg"
              />
              <input
                type="text"
                placeholder="Email của bạn"
                className=" bg-[#919EAB14] m-10px rounded-lg"
              />
              <input
                type="text"
                placeholder="Sô điện thoại"
                className=" bg-[#919EAB14] m-10px rounded-lg"
              />
              <input
                type="text"
                placeholder="Ghi chú"
                className=" bg-[#919EAB14] m-10px ml-15px rounded-lg"
              />
              <button className="inline bg-[#0DC5AE] text-white max-w-[172px]  p-30px rounded-lg">
                gửi thông tin
              </button>
              <div className="flex justify-end content-end  place-content-end">
                <Image
                  src="/image/Footer/contact_infomation/IconPhone__IMG.svg"
                  alt="IMG.svg"
                  width={77}
                  height={77}
                  className="w-8% h-8%"
                />

                <Image
                  src="/image/Footer/contact_infomation/Telephon_IMG.svg"
                  alt="IMG.svg"
                  width={77}
                  height={77}
                  className="w-8% h-8%"
                />
                <Image
                  src="/image/Footer/contact_infomation/Zalo_IMG.svg"
                  alt="IMG.svg"
                  width={77}
                  height={77}
                  className="w-8% h-8%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <Image
          src="/image/Footer/contact_infomation/IMG.svg"
          alt="IMG.svg"
          width={1140}
          height={624}
          className="w-full h-auto"
        />
      </div>

      {/* NOI DUNG */}
      <div className="mt-30px bg-[#FFFFFF]">
        <Image
          src="/image/Footer/contact_infomation/icon-company.svg"
          alt="IMG.svg"
          width={231}
          height={62}
          className="w-auto h-auto mt-[64px]"
        />
        <div className="pl-[70px] pr-[100px] pt-[20px] flex">
          <div className="p-[12px] flex-1">
            <div className="text-[20px] font-normal leading-5  font-[semibold]">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT{" "}
            </div>
            <div className="text-[14px] flex ">
              {" "}
              80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
              <p className="text-[#0DC5AE]">Email:</p>
              dvkh.trueconnect@gmail.com
            </div>
            <div className="text-[14px] flex">
              <p className="text-[#0DC5AE]">Địa chỉ:</p>
              80, 69b/22/40 Hoang Van Thai, Khuong Trung, Thanh Xuan, Ha Noi
            </div>
            <div className="text-[14px] flex">
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
          <div className="p-[12px] flex-2 pr-[40px]">
            <div className="text-20px font-normal leading-5  font-[semibold]">
              Tài liệu
            </div>
            <div className="">Tài liệu hướng dẫn </div>
          </div>
          <div className="p-[12px] flex-2 ">
            <div className="text-20px font-normal leading-5 ] font-[semibold]">
              True ContText
            </div>
            <div className="text-[14px]">Chính sách bảo mật </div>
            <div className="text-[14px]">Chính sách thanh toán và bán hàng</div>
            <div className="text-[14px]">Điều khoản và điều kiện sử dụng </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
