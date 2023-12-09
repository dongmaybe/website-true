"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "public/image/logo_img.png";
import englishFlagImg from "public/image/english_flag_img.png";
import vietnamFlagImg from "public/image/vietnam_flag_img.png";
import { LANGUAGE_VALUE } from "@/constant";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const { t } = useTranslation();
  const [language, setLanguage] = useState(LANGUAGE_VALUE.VN);

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
            <div>{t("all_categoriies")}</div>
            <div>{t("about")}</div>
            <div>{t("product")}</div>
            <div>{t("new")}</div>
            <div>{t("contract")}</div>

            <div className="flex items-center">
              {language === LANGUAGE_VALUE.VN ? (
                <div className="w-[40px] h-[27px]">
                  <Image
                    src={englishFlagImg}
                    width={40}
                    height={27}
                    alt="englishFlagImg"
                    onClick={() => {
                      setLanguage(LANGUAGE_VALUE.EN);
                      i18n.changeLanguage(LANGUAGE_VALUE.EN);
                    }}
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-[40px] h-[27px]">
                  <Image
                    src={vietnamFlagImg}
                    width={40}
                    height={27}
                    alt="englishFlagImg"
                    onClick={() => {
                      setLanguage(LANGUAGE_VALUE.VN);
                      i18n.changeLanguage(LANGUAGE_VALUE.VN);
                    }}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
