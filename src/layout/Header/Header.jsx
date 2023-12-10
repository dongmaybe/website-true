"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "public/image/logo_img.png";
import englishFlagImg from "public/image/english_flag_img.png";
import vietnamFlagImg from "public/image/vietnam_flag_img.png";
import listMenuIcon from "public/image/list_menu_icon.svg";
import searchIcon from "public/image/search_black_icon.svg";
import closeIcon from "public/image/close_icon.svg";
import { LANGUAGE_VALUE } from "@/constant";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const { i18n } = useTranslation();

  const { t } = useTranslation();
  const [language, setLanguage] = useState(LANGUAGE_VALUE.VN);

  let menuLinks = [
    { name: "all_categoriies", link: "/" },
    { name: "about", link: "/about" },
    { name: "product", link: "/services" },
    { name: "new", link: "/news" },
    { name: "contact", link: "/contact" },
  ];
  const pathname = usePathname();

  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <nav className="py-[12px] border-b-2 md:border-b-0 w-full">
      <div className="container mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <div className="w-[114px] h-[31px] md:w-[180px] md:h-[auto] lg:w-[231px] lg:h-[60px]">
            <Image
              src={logoImg}
              width={231}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              className="hover:opacity-75 md:hidden"
              id="navbar-toggle"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              {!openMenuMobile ? (
                <Image
                  src={listMenuIcon}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              ) : (
                <Image
                  src={closeIcon}
                  width={36}
                  height={36}
                  alt="Picture of the author"
                  className="text-[#637381]"
                />
              )}
            </button>
            <button
              className="hover:opacity-75 md:hidden p-2"
              id="navbar-toggle"
              onClick={() => {}}
            >
              <Image
                src={searchIcon}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </button>
          </div>
        </div>

        <div
          className={`${
            openMenuMobile ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 md:gap-4 lg:gap-6`}
          id="navbar-collapse"
        >
          {menuLinks.map((menu) => {
            return (
              <Link
                Link
                href={menu.link}
                className={`font-poppins text-base md:text-sm lg:text-xl font-semibold leading-normal py-2 md:border-b-0 hover:text-[#FF0054]/80 hover:bg-[#ffc8001f] md:hover:bg-transparent ${
                  pathname === menu.link ? "text-[#FF0054]" : ""
                }`}
                key={menu.link}
                onClick={() => setOpenMenuMobile(false)}
              >
                {t(menu.name)}
              </Link>
            );
          })}
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
                    i18n.changeLanguage(LANGUAGE_VALUE.VN);
                    setLanguage(LANGUAGE_VALUE.VN);
                  }}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
