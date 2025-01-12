import Achievement from "@/components/AboutUs/Achievement/Achievement";
import HeroCard from "@/components/AboutUs/HeroSection/HeroCard";
import HeroSection from "@/components/AboutUs/HeroSection/HeroSection";
import OurTeam from "@/components/AboutUs/OurTeam/OurTeam";
import StartProjectHome from "@/components/Home/StartProjectHome";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection />
      <div className="flex items-center justify-between containerSection">
        <div className="flex gap-[40px] ">
          <HeroCard title="500+" text="Succesfull Project" />
          <HeroCard title="600+" text="Satisfied Client" />
          <HeroCard title="150+" text="Awwards Winners" />
        </div>
        <p className="text-textGray w-[488px]">
          We’re a diverse group of real estate agent with different skills who
          make things people love to use. We help the world’s most solve
          problems and generate growth real estate.
        </p>
      </div>
      <OurTeam />
      <Achievement />
      <StartProjectHome />
    </section>
  );
};

export default page;
