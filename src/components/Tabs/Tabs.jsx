"use client";
import React, { useState } from "react";

const Tabs = ({ content }) => {
  const [positionTabs, setPositionTabs] = useState(`0/${content?.length}`);
  return (
    <div className="mt-[26px] md:mt-[48px] flex gap-[20px] flex-row text-sm md:text-xl font-semibold font-poppins text-[#222831]">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[4px] h-[222px] bg-[#DFDFDF] relative flex-1">
          <div
            className={`absolute top-[${(eval(positionTabs) * 100).toFixed(
              0
            )}%] w-[4px] h-[${eval(100 / content?.length).toFixed(
              0
            )}%] bg-[#FF5722]`}
            style={{
              top: `${(eval(positionTabs) * 100).toFixed(0)}%`,
              height: `${eval(100 / content?.length).toFixed(0)}%`,
            }}
          ></div>
        </div>
        <div className="text-[#10375C] text-lg opacity-[0.5] transform -rotate-90 hidden md:block">
          {content &&
            content.map((_, index) => {
              if (positionTabs === `${index}/${content.length}`) {
                return <span key={index}>0{index + 1}</span>;
              }
              return null;
            })}
          <span className="text-xs ">/</span>
          <span>0{content?.length}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {content &&
          content.map((item, index) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer hover:text-white hover:bg-[#0DC5AE] p-2 md:p-[24px]"
                onMouseEnter={() =>
                  setPositionTabs(`${index}/${content.length}`)
                }
              >
                {item.content}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tabs;
