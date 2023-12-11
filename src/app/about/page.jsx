import AboutUs from "@/app/about/components/AboutUs/AboutUs";
import CoreCompetencies from "@/app/about/components/CoreCompetencies/CoreCompetencies";
import CoreValue from "@/app/about/components/CoreValue/CoreValue";
import FoundingTeam from "@/app/about/components/FoundingTeam";
import Introduce from "@/app/about/components/Introduce";
import VisionAndMission from "@/app/about/components/VisionAndMission";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import React from "react";

const About = () => {
  return (
    <main className="">
      <SectionWrapper>
        <AboutUs />
      </SectionWrapper>
      <SectionWrapper>
        <Introduce />
      </SectionWrapper>
      <SectionWrapper>
        <VisionAndMission />
      </SectionWrapper>
      <SectionWrapper className="bg-[#F9F0EC]">
        <CoreCompetencies />
      </SectionWrapper>
      <SectionWrapper>
        <CoreValue />
      </SectionWrapper>
      <SectionWrapper className="bg-[#161C24] h-[752px] w-full mt-[80px]">
        <FoundingTeam />
      </SectionWrapper>
    </main>
  );
};

export default About;
