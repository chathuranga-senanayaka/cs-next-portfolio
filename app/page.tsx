import AboutMe from "@/components/AboutMe";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <HomeSection />
      <AboutMe />
    </div>
  );
};

export default Home;
