import Title from "@/components/Title/Title";
import React from "react";
import marketingMarketImg from "public/image/marketing_market_img.svg";

import PhotoRoomImg from "public/image/PhotoRoom_img.svg";
import Image from "next/image";
import Tabs from "@/app/home/components/Tabs";

const EcoSystem = () => {
  const dataFake = [
    {
      id: 1,
      content: "Danh thiếp điện tử",
    },
    {
      id: 2,
      content: "Website mini",
    },
    {
      id: 3,
      content: "Web doanh nghiệp",
    },
    {
      id: 4,
      content: "Dịch vụ tư vấn Chuyển đổi số",
    },
    {
      id: 5,
      content: "Phòng CNTT thuê ngoài",
    },
    {
      id: 6,
      content: "Ứng dụng cho doanh nghiệp SME",
    },
  ];
  return (
    <div>
      <main className=" mt-[20px] first-letter:flex flex-col container mx-auto px-4  w-full md:flex-row md:gap-[5px]  md:flex  md:justify-between">
        <div className="flex flex-col  md:justify-between md:flex-row">
          <div className="md:flex-1">
            <Tabs content={dataFake} />
          </div>
          <div className="md:flex-1">
            <Image
              src={PhotoRoomImg}
              width={693}
              height={700}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcoSystem;
