import React from "react";
import {
  RiGithubFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

const SkillSection = () => {
  const iconList = [
    { name: "Next.js", icon: RiNextjsFill },
    { name: "React", icon: RiReactjsFill },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "GitHub", icon: RiGithubFill },
  ];
  return (
    <div>
      <div className="sub-topic">Skills</div>
      <div className="skill-grid">
        <div className="skill-row flex gap-4">
          {iconList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div
                key={index}
                className="skill w-23 h-23 rounded-full flex items-center justify-center border border-black"
              >
                <ItemComponent className="text-9xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
