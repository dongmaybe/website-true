"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [positionTabs, setPositionTabs] = useState(0);

  return (
    <div className="mt-[48px] flex gap-[20px] flex-row text-xl font-semibold font-poppins text-[#222831]">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[4px] h-[222px] bg-[#DFDFDF] relative">
          <div
            className={`absolute top-[${positionTabs}%] w-[4px] h-[74px] bg-[#FF5722]`}
          ></div>
        </div>
        <div className="text-[#10375C] text-lg opacity-[0.5] transform -rotate-90">
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
  );
};

export default Tabs;
