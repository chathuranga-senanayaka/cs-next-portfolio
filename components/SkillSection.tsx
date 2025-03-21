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
  const allSkills = [
    {
      category: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Shadcn Ui", icon: SiShadcnui },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Framer Motion", icon: TbBrandFramerMotion },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express.js", icon: SiExpress },
        { name: "SQL", icon: SiMysql },
      ],
    },
    {
      category: "UI/UX Tools",
      skills: [
        { name: "Figma", icon: SiFigma },
        { name: "Adobe XD", icon: SiAdobexd },
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Sketch", icon: SiSketch },
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },
    {
      category: "CMS & No-Code",
      skills: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Wix", icon: SiWix },
        { name: "Framer", icon: SiFramer },
        { name: "WebFlow", icon: SiWebflow },
      ],
    },
    {
      category: "Other Tools",
      skills: [
        { name: "Appwrite", icon: SiAppwrite },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen w-full flex items-center justify-center"
    >
      <div className="py-10 max-w-5xl w-full rounded-2xl bg-prime-purple md:min-w-[1280px]">
        <h2 className="text-center sub-topic mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
          {allSkills.map((group, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                - {group.category} -
              </h3>
              <div className="grid grid-cols-3  sm:grid-cols-4 gap-6">
                {group.skills.map((skill, indx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={indx} className="flex flex-col items-center">
                      <IconComponent className="text-4xl sm:text-6xl text-gray-700" />
                      <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
