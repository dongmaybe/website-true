import Image from "next/image";
import React from "react";

const Contract = () => {
  return (
    <div className="hidden md:inline-block fixed  bottom-[25%]  right-[10px] -z-[-20] gap-6">
      <Image
        src="/image/Footer/contact_infomation/IconPhone__IMG.svg"
        alt="IMG.svg"
        width={44}
        height={44}
        className="w-3% h-3%"
      />

      <Image
        src="/image/Footer/contact_infomation/Telephon_IMG.svg"
        alt="IMG.svg"
        width={44}
        height={44}
        className="w-3% h-3% mt-1"
      />
      <Image
        src="/image/Footer/contact_infomation/Zalo_IMG.svg"
        alt="IMG.svg"
        width={44}
        height={44}
        className="w-3% h-3% mt-1"
      />
    </div>
  );
};

export default Contract;
