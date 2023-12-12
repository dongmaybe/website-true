import CoreValueCard from "@/app/about/components/CoreValue/components/CoreValueCard";
import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";
import benefitsImg from "public/image/benefits_img.svg";

const CoreValue = () => {
  const dataFake = [
    {
      id: 1,
      title: "Tôn trọng (Respect)",
      content: "Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp luật",
    },
    {
      id: 2,
      title: "Lắng nghe (Listen)",
      content:
        "Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để phát triển",
    },
    {
      id: 3,
      title: "Chia sẻ (Share)",
      content:
        "Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ, cùng hướng về mục tiêu chung",
    },
    {
      id: 4,
      title: "Đồng hành (Company)",
      content:
        "Đồng hành và phát triển cùng sự phát triển của khách hàng, đối tác",
    },
    {
      id: 5,
      title: "Sáng tạo (Creative)",
      content:
        "Chủ động và liên tục đổi mới để đáp ứng nhu cầu ngày càng đa dạng và sự phát triển của thị trường",
    },
    {
      id: 6,
      title: "Nâng tầm (Elevate)",
      content:
        "Không ngừng học hỏi và phát triển để nâng cao tiêu chuẩn và chất lượng của sản phẩm, dịch vụ cho khách hàng",
    },
  ];
  return (
    <div className="mt-[40px]">
      <Title title={"GIÁ TRỊ CỐT LÕI"} />
      <div className="mt-[38px] md:mt-[90px] grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-between gap-8 md:gap-0">
          {dataFake.slice(0, 3).map((CoreValueItem) => {
            return (
              <CoreValueCard
                key={CoreValueItem.id}
                id={CoreValueItem.id}
                title={CoreValueItem.title}
                content={CoreValueItem.content}
                position={"left"}
              />
            );
          })}
        </div>
        <div className="items-center hidden md:block">
          <Image
            src={benefitsImg}
            width={1152}
            height={648}
            alt="Picture of the author"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 md:gap-0">
          {dataFake.slice(3, 6).map((CoreValueItem) => {
            return (
              <CoreValueCard
                key={CoreValueItem.id}
                id={CoreValueItem.id}
                title={CoreValueItem.title}
                content={CoreValueItem.content}
                position={"right"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
