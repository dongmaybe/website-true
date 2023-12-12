import React from "react";
import Introduce from "./home/components/Introduce";
import Feature from "@/app/home/components/feature";
import Whychooseus from "@/app/home/components/WhyChooseUs";
import EcoSystem from "@/app/home/components/EcoSystem";
import News from "@/app/home/components/News";
import Itroduct from "@/app/home/components/Itroduct";
import FriendlyCompany from "@/app/home/components/FriendlyCompany";
import Contract from "@/app/home/components/Contract";
import ContractAgain from "@/app/home/components/ContractAgain";

const Home = () => {
  return (
    <main className="relative">
      <Introduce />
      <Feature />
      <Whychooseus />
      <News />
      <EcoSystem />
      <Itroduct />
      <FriendlyCompany />
      <Contract />
      <ContractAgain />
    </main>
  );
};

export default Home;
