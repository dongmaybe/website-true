import AboutUs from "@/app/about/components/AboutUs";
import CoreCompetencies from "@/app/about/components/CoreCompetencies";
import CoreValue from "@/app/about/components/CoreValue";
import FoundingTeam from "@/app/about/components/FoundingTeam";
import Introduce from "@/app/about/components/Introduce";
import VisionAndMission from "@/app/about/components/VisionAndMission";
import React from "react";

const About = () => {
  return (
    <main className="container mx-auto">
      <AboutUs />
      <Introduce />
      <VisionAndMission />
      <CoreCompetencies />
      <CoreValue />
      <FoundingTeam />
    </main>
  );
};

export default About;
