import ProgramsSupport from "@/app/services/components/ProgramsSupport";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import React from "react";

const About = () => {
  console.log("test");
  return (
    <main className="">
      <SectionWrapper className="bg-[#F9F0EC]">
        <ProgramsSupport />
      </SectionWrapper>
    </main>
  );
};

export default About;
