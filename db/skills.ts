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

export const skills = [
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
