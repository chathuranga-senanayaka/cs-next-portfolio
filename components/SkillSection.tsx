import React from "react";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAppwrite,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
  SiWebflow,
  SiWix,
  SiWordpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const SkillSection = () => {
  const forntEndSkillList = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Shadcn Ui", icon: SiShadcnui },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Framer Motion", icon: TbBrandFramerMotion },
  ];
  const backEndSkillList = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "SQL", icon: SiMysql },
  ];
  const uiSkillList = [
    { name: "Figma", icon: SiFigma },
    { name: "Addobe XD", icon: SiAdobexd },
    { name: "PhotoShop", icon: SiAdobephotoshop },
    { name: "Sketch", icon: SiSketch },
  ];
  const versionSkillList = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
  ];
  const cmsSkillList = [
    { name: "WordPress", icon: SiWordpress },
    { name: "WIX", icon: SiWix },
    { name: "Framer", icon: SiFramer },
    { name: "WebFlow", icon: SiWebflow },
  ];
  const otherSkillList = [
    { name: "AppWriter", icon: SiAppwrite },
    { name: "PostMan", icon: SiPostman },
  ];
  return (
    <div id="skills" className="min-h-screen">
      <div className="sub-topic">Skills</div>
      <div className="skill-grid">
        <div className="skill-row flex gap-10">
          {forntEndSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" icon ">
                <ItemComponent className="text-8xl" />
              </div>
            );
          })}
        </div>
        <div className="skill-row flex gap-20">
          {backEndSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" w-23 h-23 ">
                <ItemComponent className="text-9xl" />
              </div>
            );
          })}
        </div>
        <div className="skill-row flex gap-20">
          {uiSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" w-23 h-23 ">
                <ItemComponent className="text-9xl" />
              </div>
            );
          })}
        </div>
        <div className="skill-row flex gap-20">
          {versionSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" w-23 h-23 ">
                <ItemComponent className="text-9xl" />
              </div>
            );
          })}
        </div>
        <div className="skill-row flex gap-20">
          {cmsSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" w-23 h-23 ">
                <ItemComponent className="text-9xl" />
              </div>
            );
          })}
        </div>
        <div className="skill-row flex gap-20">
          {otherSkillList.map((item, index) => {
            const ItemComponent = item.icon; // Declare the variable here
            return (
              <div key={index} className=" w-23 h-23 ">
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
