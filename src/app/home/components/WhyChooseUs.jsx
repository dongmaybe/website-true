import Image from "next/image";
import React from "react";
import ChevrondownImg from "public/image/chevrondown_img.svg";
import illustration_marketing_contactImg from "public/image/illustration_marketing_contactImg.svg";
import Group_introduct_Img from "public/image/Group_introduct_Img.svg";
import illustration_benefits_Img from "public/image/illustration_benefits_Img.svg";
const Whychooseus = () => {
  return (
    <main>
      <div class=" container mx-auto px-4 w-full   text-green-900 text-center font-[Lora] text-[40px] font-bold leading-normal  mt-[20px] md:mt-[76px]">
        Tại sao nên lựa chọn chúng tôi
      </div>
      {/* noi dung */}
      <div className="flex mt-[20px] md:mt-[56px] first-letter:flex flex-col container mx-auto px-4 w-full md:flex-row md:gap-[50px] md:flex md:justify-between">
        <div class="flex-1 rounded-lg bg-white shadow-md  mt-[20px]">
          <div className="flex justify-center items-center p-[20px] aspect-w-1 aspect-h-1">
            <Image
              src={illustration_marketing_contactImg}
              width={220}
              height={220}
              alt="Picture of the author"
              className="object-cover rounded-lg h-[220px] w-[220px] pr-[30px] md:pr-0"
            />
          </div>
          <div class="text-[#0DC5AE] font-[Lora] text-[20px] font-semibold leading-normal p-[6px]">
            Giá cả hợp lý
          </div>
          <div class=" font-Poppins text-sm font-normal leading-6 p-[6px]">
            Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối
            tượng.
          </div>
        </div>
        <div class="flex-1 rounded-lg bg-white shadow-md  mt-[20px]">
          <div className="flex justify-center items-center p-[20px] aspect-w-1 aspect-h-1">
            <Image
              src={Group_introduct_Img}
              width={220}
              height={220}
              alt="Picture of the author"
              className="object-cover rounded-lg  h-[220px] w-[220px] "
            />
          </div>
          <div class="text-[#0DC5AE] font-[Lora] text-[20px] font-semibold leading-normal p-[6px]">
            Chất lượng đảm bảo
          </div>
          <div class=" font-Poppins text-sm font-normal leading-6 p-[6px]">
            Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với
            xu hướng.
          </div>
        </div>
        <div class="flex-1 rounded-lg bg-white shadow-md  mt-[20px]">
          <div className="flex justify-center items-center p-[20px] aspect-w-1 aspect-h-1">
            <Image
              src={illustration_benefits_Img}
              width={220}
              height={220}
              alt="Picture of the author"
              className="object-cover rounded-lg  h-[220px] w-[220px]"
            />
          </div>
          <div class="text-[#0DC5AE] font-[Lora] text-[20px] font-semibold leading-normal p-[6px]">
            Mới mẻ và tiện lợi
          </div>
          <div class=" font-Poppins text-sm font-normal leading-6 p-[6px]">
            Nhiều tính năng mới lạ, tiện dụng với người sử dụng.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Whychooseus;
