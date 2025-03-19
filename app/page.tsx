import AboutMe from "@/components/AboutMe";
import HomeSection from "@/components/HomeSection";
import React from "react";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <HomeSection />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
