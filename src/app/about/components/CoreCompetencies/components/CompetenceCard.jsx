import React from "react";
import styles from "./index.module.css"; // Import CSS module

const CompetenceCard = ({ number, title, content }) => {
  return (
    <div
      className={`${
        styles["item" + number]
      } shadow-[0px 10px 20px -4px rgba(0, 95, 183, 0.15)] py-[40px] px-[32px] bg-white rounded-2xl grid`}
    >
      <h3 className="text-[#FF0054] text-[20px] font-barlow font-semibold text-center">
        {number}.{title}
      </h3>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default CompetenceCard;
