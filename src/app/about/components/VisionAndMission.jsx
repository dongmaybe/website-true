import Title from "@/components/Title/Title";
import React from "react";
import marketingMarketImg from "public/image/marketing_market_img.svg";
import SubTitle from "@/components/SubTitle/SubTitle";
import Tabs from "@/components/Tabs/Tabs";

const VisionAndMission = () => {
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
    <div className="mt-[22px] md:mt-[80px]">
      <Title title="TẦM NHÌN VÀ SỨ MỆNH" image={marketingMarketImg} />
      <div className="mt-[-30px]">
        <SubTitle
          title="SỨ MỆNH"
          content="TrueConnect không ngừng sáng tạo và phát triển để đem lại giá trị cho
        Quý khách hàng, Quý đối tác và xã hội bao gồm:"
        />
      </div>
      <Tabs content={dataFake} />
      <div className="mt-[30px] pb-4">
        <SubTitle
          title="TẦM NHÌN"
          content="Trở thành Đối tác đồng hành hàng đầu/top 1 Việt Nam về hệ sinh thái công nghệ và các giải pháp kinh doanh toàn diện, đơn giản, thống nhất dành cho cá nhân, tổ chức và doanh nghiệp thực hiện hoạt động kinh doanh."
        />
      </div>
    </div>
  );
};

export default VisionAndMission;
