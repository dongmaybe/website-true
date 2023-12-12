import React from "react";
import Image from "next/image";
import ConpanyImage from "public/image/name_conpany_img.svg";
import ConscientiousImage from "public/image/Conscientious.svg";
import ListenImage from "public/image/Listen.svg";
import CardImg from "public/image/card_img.svg";
import MenbenImg from "public/image/menben_img.svg";
import Lisdimg from "public/image/lised_img.svg";
import ChevrondownImg from "public/image/chevrondown_img.svg";

const Feature = () => {
  return (
    <main className=" mt-[20px] md:mt-[66px] first-letter:flex flex-col container mx-auto px-4  w-full md:flex-row md:gap-[50px]  md:flex  md:justify-between">
      <div className="flex-1">
        <Image
          src={ConpanyImage}
          width={530}
          height={102}
          alt="Picture of the author"
          className="pb-[20px]"
        />
        <div class=" text-justify font-Lexend text-base font-normal font-weight-400 leading-7 pb-[20px]  ">
          Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận
          hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công
          nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy
          mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp
          lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh
          ...
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 text-[20px] mr-8  mb-[20px]">
          <div className=" flex items-center gap-4  ">
            <Image
              src={ConscientiousImage}
              width={46}
              height={46}
              alt="Picture of the author"
            />{" "}
            <div className="">Tận tâm</div>
          </div>
          <div className="flex items-center gap-4 ">
            <Image
              src={ListenImage}
              width={46}
              height={46}
              alt="Picture of the author"
              className=""
            />

            <div className="">Lắng nghe</div>
          </div>

          <div className=" flex items-center gap-4 ">
            <Image
              src={ListenImage}
              width={46}
              height={46}
              alt="Picture of the author"
            />
            <div className="">Sáng tạo</div>
          </div>
          <div class="md:hidden text-[#FF0054] font-Poppins text-base font-semibold leading-normal  flex items-center justify-end  ">
            Xem thêm
            <Image
              src={ChevrondownImg}
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div class="hidden text-[#FF0054] font-Poppins text-base font-semibold leading-normal mt-[13px] md:flex md:justify-end  ">
          Xem thêm
          <Image
            src={ChevrondownImg}
            width={24}
            height={24}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex-1 ">
        <div className="pb-[16px]">
          <Image
            src={CardImg}
            width={448}
            height={293}
            alt="Picture of the author "
            className="w-full "
          />
        </div>

        <div className="flex flex-1  gap-4">
          <div className="flex-1 ">
            <div className="h-full w-full">
              <Image
                src={Lisdimg}
                width={234}
                height={208}
                alt="Picture of the author"
                className=" rounded-md h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="w-full  h-full">
              <Image
                src={MenbenImg}
                width={208}
                height={208}
                alt="Picture of the author"
                className=" rounded-md bg-gray-300  h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
