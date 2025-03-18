import AboutMe from "@/components/AboutMe";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import React from "react";
import SkillSection from "@/components/SkillSection";
import ProjectCard from "@/components/ui/projectcard";
import ProjectSection from "@/components/ProjectSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <HomeSection />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
