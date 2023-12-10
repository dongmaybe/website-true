"use client";
import Title from "@/components/Title/Title";
import Image from "next/image";
import React, { useState } from "react";
import introductImg1 from "public/image/introduct_img_1.svg";
import introductImg2 from "public/image/introduct_img_2.svg";
import introductImg3 from "public/image/introduct_img_3.svg";

const Introduce = () => {
  const [positionTabs, setPositionTabs] = useState(0);

  return (
    <div className="mt-[80px]">
      <Title title="GIỚI THIỆU" />
      <div className="font-lora">
        <p className="mt-10 first-letter:text-7xl first-letter:leading-[60px] first-letter:float-left first-letter:text-slate-900 first-letter:font-bold">
          Thành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ
          TrueConnect hoạt động với mong muốn thúc đẩy quá trình kinh doanh và
          vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ
          Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới
          quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh
          nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển
          kinh doanh.
        </p>
        <p className="mt-[12px]">
          Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm
          phong phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với các
          cá nhân kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi phí hợp
          lý cũng đóng vai trò quan trọng trong quá trình hoạt động.
        </p>
        <p className="mt-[12px]">
          Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ
          phần Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu và
          phát triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần mềm liên
          kết chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm tốt trong
          quá trình vận hành và phát triển kinh doanh.
        </p>
        <p className="mt-[12px]">
          Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện thoại
          và bao gồm các sản phẩm, giải pháp và dịch vụ sau:
        </p>
      </div>
      <div className="mt-[60px] flex flex-col md:flex-row gap-4 justify-between">
        <div className="">
          <Image
            src={introductImg1}
            width={1152}
            height={648}
            alt="introducImage1"
            className="w-full object-cover"
          />
        </div>
        <div className="">
          <Image
            src={introductImg2}
            width={1152}
            height={648}
            alt="introductImg1"
            className="w-full object-cover"
          />
        </div>
        <div className="">
          <Image
            src={introductImg3}
            width={1152}
            height={648}
            alt="introductImg2"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-[48px] flex gap-[20px] flex-row text-xl font-semibold font-poppins text-[#222831]">
        <div className="flex flex-col items-center gap-5">
          <div className="w-[4px] h-[222px] bg-[#DFDFDF] relative flex-1">
            <div
              className={`absolute top-[${positionTabs}%] w-[4px] h-[74px] bg-[#FF5722]`}
            ></div>
          </div>
          <div className="text-[#10375C] text-lg opacity-[0.5] transform -rotate-90 hidden md:block">
            {positionTabs === 0 && <span>01</span>}
            {positionTabs === 33 && <span>02</span>}
            {positionTabs === 66.66 && <span>03</span>}
            <span className="text-xs ">/</span>
            <span>03</span>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div
            className="cursor-pointer hover:text-white hover:bg-[#0DC5AE] p-[24px]"
            onMouseEnter={() => setPositionTabs(0)}
          >
            Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian
            hàng online
          </div>
          <div
            className="cursor-pointer hover:text-white hover:bg-[#0DC5AE] p-[24px]"
            onMouseEnter={() => setPositionTabs(33)}
          >
            Giải pháp: Quản trị doanh nghiệp (HRM, ERP)
          </div>
          <div
            className="cursor-pointer hover:text-white hover:bg-[#0DC5AE] p-[24px]"
            onMouseEnter={() => setPositionTabs(66.66)}
          >
            Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho
            thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed
            Services), dịch vụ tư vấn chuyển đổi số
          </div>
        </div>
      </div>
      <p className="mt-[50px] text-[16px] text-[#212B36] font-poppins">
        Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với hơn 30
        nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã có kinh nghiệm
        nhiều năm trong lĩnh vực Công nghệ thông tin, có kinh nghiệm phát triển,
        triển khai và vận hành những dự án lớn hàng triệu người dùng.
      </p>
    </div>
  );
};

export default Introduce;
