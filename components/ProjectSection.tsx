import React from "react";
import ProjectCard from "./ui/projectcard";
import { projectData } from "@/db/project";

const ProjectSection = () => {
  return (
    <div id="projects" className="flex flex-col items-center ">
      <div className="sub-topic">Recent Projects</div>
      <div className="projects flex flex-col gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
