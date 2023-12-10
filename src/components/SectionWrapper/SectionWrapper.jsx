import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`${className}`}>
      <div className={`container mx-auto px-[24px] md:flex md:items-center`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
