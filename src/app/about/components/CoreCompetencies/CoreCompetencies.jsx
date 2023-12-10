import CompetenceCard from "@/app/about/components/CoreCompetencies/components/CompetenceCard";
import Title from "@/components/Title/Title";
import React from "react";

const CoreCompetencies = () => {
  const dataFake = [
    {
      id: 1,
      title: "Nền tảng",
      content:
        "Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số",
    },
    {
      id: 2,
      title: "Tham vọng",
      content:
        "Chúng tôi có tham vọng trở thành người đứng đầu trong lĩnh vực công nghệ thông tin và các giải pháp công nghệ hỗ trợ quá trình thực hành kinh doanh. Đây cũng là động lực để chúng tôi tạo ra tiêu chuẩn khắt khe cho Hệ sinh thái TrueConnect – hoạt động mạnh mẽ, đầy đủ tính năng và cởi mở với sự thay đổi của xu hướng.",
    },
    {
      id: 3,
      title: "Thích nghi",
      content:
        "TrueConnect chú trọng nắm bắt xu thế, nhu cầu của thị trường, và khả năng sử dụng nền tảng Công nghệ mới, đáp ứng được những nhu cầu phức tạp của người dùng. Hệ sinh thái TrueConnect được thiết kế để dễ dàng nâng cấp, tích hợp thêm các tính năng và các sản phẩm mới trong hệ sinh thái",
    },
    {
      id: 4,
      title: "Chất lượng dịch vụ",
      content:
        "Sản phẩm của chúng tôi hướng tới nhu cầu, trải nghiệm và sự tiện ích của khách hàng khi cung cấp dịch vụ. TrueConnect không ngừng đổi mới và cải thiện chất lượng sản phẩm và dịch vụ, liên tục nâng cao các tiêu chuẩn và dịch vụ khi cung cấp cho khách hàng.",
    },
    {
      id: 5,
      title: "Tôn chỉ hành động",
      content:
        "Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số",
    },
  ];
  return (
    <div className="pt-[34px] pb-[60px]">
      <Title title="NĂNG LỰC CỐT LÕI" />
      <div className="mt-[48px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {dataFake.map((competence) => {
          return (
            <CompetenceCard
              key={competence.id}
              number={competence.id}
              title={competence.title}
              content={competence.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoreCompetencies;
