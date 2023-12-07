import Image from "next/image";
import React from "react";
import logoImg from "public/image/logo_img.png";

const Header = () => {
  return (
    <div className="h-[110px] bg-[#F9F0EC]">
      <div className="px-[74px] pt-11">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Image
              src={logoImg}
              width={231}
              height={60}
              alt="Picture of the author"
            />
          </div>

          <div className="flex justify-between gap-10 font-poppins text-20 font-semibold leading-normal ">
            <div>Trang chủ</div>
            <div>Về chúng tôi</div>
            <div>Sản phẩm và dịch vụ</div>
            <div>Tin tức</div>
            <div>Trải nghiệm</div>
            <div>Liên hệ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
