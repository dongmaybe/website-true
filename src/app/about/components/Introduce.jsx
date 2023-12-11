"use client";
import Title from "@/components/Title/Title";
import Image from "next/image";
import React, { useState } from "react";
import introductImg1 from "public/image/introduct_img_1.svg";
import introductImg2 from "public/image/introduct_img_2.svg";
import introductImg3 from "public/image/introduct_img_3.svg";
import Tabs from "@/components/Tabs/Tabs";

const Introduce = () => {
  const dataFake = [
    {
      id: 1,
      content:
        "Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng online",
    },
    {
      id: 2,
      content:
        "Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng onlineGiải pháp: Quản trị doanh nghiệp (HRM, ERP)",
    },
    {
      id: 3,
      content:
        "Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed Services), dịch vụ tư vấn chuyển đổi số",
    },
  ];
  return (
    <div className="mt-[40px] md:mt-[80px]">
      <Title title="GIỚI THIỆU" />
      <div className="font-lora">
        <p className="mt-5 md:mt-10 text-sm md:text-base tracking-widest first-letter:text-7xl first-letter:leading-[60px] first-letter:float-left first-letter:text-slate-900 first-letter:font-bold">
          Thành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ
          TrueConnect hoạt động với mong muốn thúc đẩy quá trình kinh doanh và
          vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ
          Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới
          quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh
          nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển
          kinh doanh.
        </p>
        <p className="mt-[12px] text-sm md:text-base tracking-widest">
          Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm
          phong phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với các
          cá nhân kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi phí hợp
          lý cũng đóng vai trò quan trọng trong quá trình hoạt động.
        </p>
        <p className="mt-[12px] text-sm md:text-base tracking-widest">
          Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ
          phần Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu và
          phát triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần mềm liên
          kết chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm tốt trong
          quá trình vận hành và phát triển kinh doanh.
        </p>
        <p className="mt-[12px] text-sm md:text-base tracking-widest">
          Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện thoại
          và bao gồm các sản phẩm, giải pháp và dịch vụ sau:
        </p>
      </div>
      <div className="mt-[22px] md:mt-[60px] flex flex-col md:flex-row gap-4 justify-between">
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
      <Tabs content={dataFake} />

      <p className="mt-[22px] md:mt-[50px] text-sm md:text-[16px] text-[#212B36] font-poppins">
        Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với hơn 30
        nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã có kinh nghiệm
        nhiều năm trong lĩnh vực Công nghệ thông tin, có kinh nghiệm phát triển,
        triển khai và vận hành những dự án lớn hàng triệu người dùng.
      </p>
    </div>
  );
};

export default Introduce;
