import Image from "next/image";
import React from "react";
import ellipseOrangeIcon from "public/icons/ellipse_orange_icon.svg";
import ellipseGreenIcon from "public/icons/ellipse_green_icon.svg";
import ellipseBlueIcon from "public/icons/ellipse_blue_icon.svg";

const CoreValueCard = ({ title, content, position, id }) => {
  let iconsActive;
  switch (id) {
    case 1:
    case 6:
      iconsActive = ellipseOrangeIcon;
      break;
    case 2:
    case 5:
      iconsActive = ellipseGreenIcon;
      break;
    case 3:
    case 4:
      iconsActive = ellipseBlueIcon;
      break;
    case 1:
      iconsActive = ellipseOrangeIcon;
      break;

    default:
      break;
  }
  const textPosition = position === "left" ? "right" : "left";
  return (
    <div className="flex gap-8 md:block md:gap-0">
      {position === "left" && (
        <div className={`flex justify-end gap-4`}>
          <div className="h-[30px] w-[30px] mt-[6px] block md:hidden">
            {iconsActive && (
              <Image
                src={iconsActive}
                width={16}
                height={16}
                alt="Picture of the author"
                className="object-cover"
              />
            )}
          </div>
          <div>
            <h4
              className={`text-[20px] font-semibold font-poppins text-[#212B36] text-left md:text-right`}
            >
              {title}
            </h4>
            <p className={`text-[16px] font-poppins text-left md:text-right`}>
              {content}
            </p>
          </div>
          <div className="h-[30px] w-[30px] mt-[6px] hidden md:block">
            {iconsActive && (
              <Image
                src={iconsActive}
                width={16}
                height={16}
                alt="Picture of the author"
                className=" object-cover"
              />
            )}
          </div>
        </div>
      )}
      {position === "right" && (
        <div className={`flex justify-end gap-4`}>
          <div className="h-[30px] w-[30px] mt-[6px] ">
            {iconsActive && (
              <Image
                src={iconsActive}
                width={16}
                height={16}
                alt="Picture of the author"
                className="object-cover"
              />
            )}
          </div>
          <div>
            <h4
              className={`text-[20px] font-semibold font-poppins text-[#212B36] text-${textPosition}`}
            >
              {title}
            </h4>
            <p className={`text-[16px] font-poppins text-${textPosition}`}>
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreValueCard;
