import React from "react";
import DigitalTransformationIcon from "public/icons/digital_transformation_icon.svg";
import ManagedServicesIcon from "public/icons/managed_services_icon.svg";
import MarketingIcon from "public/icons/marketing_icon.svg";
import TechnologyServicesIcon from "public/icons/technology_services_icon.svg";
import WebsiteMiniSupportIcon from "public/icons/website_mini_support_icon.svg";
import ServiceIcon from "public/icons/website_provides_service_icon.svg";
import Image from "next/image";
const ProgramsSupport = () => {
  const fakeData = [
    {
      id: 1,
      src: DigitalTransformationIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
    {
      id: 2,
      src: ManagedServicesIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
    {
      id: 3,
      src: MarketingIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
    {
      id: 4,
      src: TechnologyServicesIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
    {
      id: 5,
      src: WebsiteMiniSupportIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
    {
      id: 6,
      src: ServiceIcon,
      name: "Website Minim",
      Content: "Tạo website đơn giản tích hợp gian hàng online",
    },
  ];
  return (
    <main className="bg-[#FFFFFF] md:grid gap-6 md:grid-cols-3 md:p-[15px] mb-[60px] md:mt-[20px]">
      {fakeData?.map((element) => {
        return (
          <div key={element.id} className="flex gap-6 p-[15px]">
            <div>
              <Image
                src={element.src}
                alt={element.name}
                width={78}
                height={83}
                className="object-cover"
              />
            </div>
            <div className="">
              <div className="text-[20px]">{element.name}</div>
              <div className="text-[13px]">{element.Content}</div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ProgramsSupport;
