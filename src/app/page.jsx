import Image from "next/image";
import React from "react";
import logoImg from "public/image/logo_img.png";
import BenefitImage from "public/image/benefit_img.svg";
import logoNameImage from "public/image/LogoName_img.svg";
import IconseachImage from "public/image/ic_search_img.svg";
import ConpanyImage from "public/image/name_conpany_img.svg";
import ConscientiousImage from "public/image/Conscientious.svg";
import ListenImage from "public/image/Listen.svg";
import CardImg from "public/image/card_img.svg";
import MenbenImg from "public/image/menben_img.svg";
import Lisdimg from "public/image/lised_img.svg";
import chevrondownImg from "public/image/chevrondown _img.svg";
import illustration_marketing_contactImg from "public/image/illustration_marketing_contactImg.svg";
import Group_introduct_Img from "public/image/Group_introduct_Img.svg";
import illustration_benefits_Img from "public/image/illustration_benefits_Img.svg";
import PhotoRoomImg from "public/image/PhotoRoom_img.svg";
import RatioOverlayImage from "public/image/RatioOverlayImage.svg";
import EllipseImg from "public/image/Ellipse_img.svg";
import newtow from "public/image/newtow.svg";
import newfour from "public/image/newfour.svg";
import newone from "public/image/newone.svg";
import newthree from "public/image/newthree.svg";

const Home = () => {
  return (
    <main>
      <div className=" bg-[#F9F0EC] h-[670px]">
        <div className="flex flex-row justify-between items-center">
          <div className="pt-[152px] pl-[144px] w-[466px] ">
            <Image
              src={logoNameImage}
              width={420}
              height={82}
              alt="Picture of the author"
            />
            <div class="text-justify font-lexend text-base font-normal font-weight-400 leading-7">
              Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng
              dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect
              và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.
            </div>
            <div class="flex p-8 items-center rounded-9 bg-common-01-white p-2px  bg-[#F9F0EC] rounded-sm">
              <input type="text" />
              <Image
                src={IconseachImage}
                width={24}
                height={24}
                alt="Picture of the author"
                className="rounded-8 bg-[#FA541C] rounded-sm"
              />
            </div>
          </div>

          <div className="pr-[144px]">
            <Image
              src={BenefitImage}
              width={564}
              height={564}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* thong tin */}
      <div className="flex flex-row justify-between mt-[102px]">
        <div className="pl-[177px]">
          <Image
            src={ConpanyImage}
            width={530}
            height={102}
            alt="Picture of the author"
            className="pt-[34px] max-w-[535px] "
          />
          <div class="text-Text text-justify font-Lexend text-base font-normal font-weight-400 leading-7 mr-[99px] max-w-[575px] pt-[27px] ">
            Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và
            vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ
            Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân)
            tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh
            nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển
            kinh doanh ...
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4  pr-[99px] mt-[27px] ">
            <div className="h-12 flex items-center justify-center ">
              <Image
                src={ConscientiousImage}
                width={46}
                height={46}
                alt="Picture of the author"
              />{" "}
              <div className="ml-[30px]">Tận tâm</div>
            </div>
            <div className=" h-12 flex items-center justify-center">
              <Image
                src={ListenImage}
                width={46}
                height={46}
                alt="Picture of the author"
                className="ml-[43px]"
              />

              <div className="ml-[30px]">Lắng nghe</div>
            </div>
            <div className=" h-12 flex items-center justify-center">
              {" "}
              <Image
                src={ListenImage}
                width={46}
                height={46}
                alt="Picture of the author"
              />
              <div className="ml-[30px]">Sáng tạo</div>
            </div>
          </div>
          <div class="text-[#FF0054] font-Poppins text-base font-semibold leading-normal mt-[13px] flex justify-end  pr-[99px]">
            Xem thêm
            <Image
              src={chevrondownImg}
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="mt-[13px] mr-[190px]">
          <div>
            <Image
              src={CardImg}
              width={448}
              height={293}
              alt="Picture of the author"
            />
            <div className="flex mt-[13px]">
              <Image
                src={Lisdimg}
                width={234}
                height={208}
                alt="Picture of the author"
                className="mr-[13px] rounded-md"
              />
              <Image
                src={MenbenImg}
                width={208}
                height={208}
                alt="Picture of the author"
                className="pl-[13px] rounded-md bg-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
      {/* tai sao lua chon chung toi  */}
      <main>
        <div class="text-green-900 text-center font-[Lora] text-[40px] font-bold leading-normal max-w-589 mt-[120px]">
          Tại sao nên lựa chọn chúng tôi
        </div>
        {/* noi dung */}
        <div className="mt-[69px] ml-[163px] mr-[144px] flex justify-between">
          <div class="rounded-lg bg-white shadow-md max-w-[351px] max-h-[362px]">
            <Image
              src={illustration_marketing_contactImg}
              width={220}
              height={220}
              alt="Picture of the author"
              className="ml-[55px] mt-[22px] mr-[64px] mb-[11px]"
            />
            <div class="text-[#0DC5AE] font-[Lora] text-[20px] font-semibold leading-normal">
              Giá cả hợp lý
            </div>
            <div class="text-Text font-Poppins text-sm font-normal leading-6">
              Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi
              đối tượng.
            </div>
          </div>
          <div class="rounded-lg bg-white shadow-md max-w-[351px] max-h-[362px]">
            <Image
              src={Group_introduct_Img}
              width={220}
              height={220}
              alt="Picture of the author"
              className="ml-[55px] mt-[22px] mr-[64px] mb-[11px]"
            />
            <div class="text-[#0DC5AE] font-[Lora] text-[20px]  text-[20px]  font-semibold leading-normal">
              Chất lượng đảm bảo
            </div>
            <div class="text-Text font-[Poppins] text-sm font-normal leading-6">
              Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp
              với xu hướng.
            </div>
          </div>
          <div class="rounded-lg bg-white shadow-md max-w-[351px] max-h-[362px]">
            <Image
              src={illustration_benefits_Img}
              width={220}
              height={220}
              alt="Picture of the author"
              className="ml-[55px] mt-[22px] mr-[64px] mb-[11px]"
            />
            <div class="text-[#0DC5AE] font-[Lora]  text-[20px]  font-semibold leading-normal">
              Mới mẻ và tiện lợi
            </div>
            <div class="text-Text font-[Poppins] text-sm font-normal leading-6">
              Nhiều tính năng mới lạ, tiện dụng với người sử dụng.
            </div>
          </div>
        </div>
      </main>
      {/* thong tin he sinh thai */}
      <main className="mt-[102px] bg-[#F9F0ED] max-h-[781px]">
        <div className="flex justify-between mt-[48px] ml-[153px] items-start mr-[132px]">
          <div className="text-[40px] text-[#0DC5AE] font-[Lona] flex">
            Hệ sinh thái<div className="text-[#EF4444]"> True </div> Conect
          </div>
          <div class="text-[#FF0054] font-Poppins text-base font-semibold leading-normal mt-[13px] flex justify-end  pr-[99px] text-[20px]">
            Xem thêm
            <Image
              src={chevrondownImg}
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="mt-[-20px] ml-[40px] flex justify-between">
          <div className="mt-[44px] mr-[112px] ml-[119px]">
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px]">
              Danh thiếp điện tử
            </div>
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px]">
              Website mini
            </div>
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px] bg-[#FF5722]">
              Web doanh nghiệp
            </div>
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px]">
              Dịch vụ tư vấn Chuyển đổi số
            </div>
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px]">
              Phòng CNTT thuê ngoài
            </div>
            <div class="font-[Poppins] text-[20px] font-semibold pt-[24px] pl-[24px] pb-[18px] pr-[92px]">
              Ứng dụng cho doanh nghiệp SME
            </div>
          </div>
          <div>
            <Image
              src={PhotoRoomImg}
              width={693}
              height={700}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
      {/* bai viet moi nhat  */}
      <main className="">
        <div className="mt-[120px] ml-[144px] mr-[144px] ">
          <div className="flex justify-between ">
            <div>
              <div className="text-[#0DC5AE] font-[Lora] font-semibold text-[40px] ">
                Bài viết mới nhất
              </div>
              <div className=" mt-[24px] font-[Poppins] text-[16px]">
                Nơi những khách hàng của TrueConnect cập nhật những tin tức mới
                nhất về thị trường công nghệ
              </div>
            </div>

            <div class="text-[#FF0054] font-Poppins text-base font-semibold leading-normal mt-[13px] flex justify-end  pr-[99px] text-[20px] items-start">
              Xem thêm
              <Image
                src={chevrondownImg}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
          </div>
          {/* noi dung phia duoi */}
          <div className="mt-[80px] flex ">
            <div className="flex-1 relative mr-[32px]">
              <div className="h-[746px]">
                <Image
                  src={RatioOverlayImage}
                  // width={560}
                  // height={746}
                  alt="Picture of the author"
                  className="!w-[100%] !h-[100%] object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-end w-[inherit]">
                <div className="  p-[40px] text-[#919EAB]">
                  <div className=" flex ">
                    <div>24 May 2019</div>
                    <Image
                      src={EllipseImg}
                      width={4}
                      height={4}
                      alt="Picture of the author"
                    />
                    <div>8 mins</div>
                  </div>
                  <div className="text-[36px] font-bold leading-[54px]">
                    Event On A Budget: 7 Tips From The Great Depression
                  </div>
                  <div className="opacity-[0.48]">
                    Aenean viverra rhoncus pede. Phasellus blandit leo ut odio.
                    Pellentesque commodo eros a enim. Phasellus consectetuer
                    vestibulum elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1">
                <div className="rounded-md ">
                  <Image
                    src={newone}
                    width={264}
                    height={264}
                    alt="Picture of the author"
                    className="!rounded-md"
                  />
                </div>
                <div className=" flex text-[#919EAB] pt-[13px] pb-[13px]">
                  <div>24 May 2019</div>
                  <Image
                    src={EllipseImg}
                    width={4}
                    height={4}
                    alt="Picture of the author"
                  />
                  <div>8 mins</div>
                </div>
                <div className="text-[18px] text-black">
                  Apply These 7 Secret Techniques To Improve Event
                </div>

                <Image
                  src={newtow}
                  width={264}
                  height={198}
                  alt="Picture of the author"
                  className="rounded-md  pt-[19px]"
                />
                <div className=" flex text-[#919EAB] pt-[13px]  pb-[13px]">
                  <div>24 May 2019</div>
                  <Image
                    src={EllipseImg}
                    width={4}
                    height={4}
                    alt="Picture of the author"
                  />
                  <div>8 mins</div>
                </div>
                <div className="text-[18px] text-black">
                  Knowing These 7 Secrets Will Make Your Event Look Amazing{" "}
                </div>
              </div>
              <div className="flex-1">
                <div className="">
                  <Image
                    src={newthree}
                    width={264}
                    height={198}
                    alt="Picture of the author"
                    className="!rounded-md"
                  />
                  <div className=" flex text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2019</div>
                    <Image
                      src={EllipseImg}
                      width={4}
                      height={4}
                      alt="Picture of the author"
                    />
                    <div>8 mins</div>
                  </div>
                  <div className="text-[18px] text-black">
                    Knowing These 7 Secrets Will Make Your Event Look Amazing{" "}
                  </div>
                  <Image
                    src={newfour}
                    width={264}
                    height={264}
                    alt="Picture of the author"
                    className="rounded-md pt-[19px]"
                  />
                  <div className=" flex text-[#919EAB] pt-[13px] pb-[13px]">
                    <div>24 May 2019</div>
                    <Image
                      src={EllipseImg}
                      width={4}
                      height={4}
                      alt="Picture of the author"
                    />
                    <div>8 mins</div>
                  </div>
                  <div className="text-[18px] text-black ">
                    Apply These 7 Secret Techniques To Improve Event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Home;
