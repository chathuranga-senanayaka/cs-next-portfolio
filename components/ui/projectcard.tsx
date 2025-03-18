import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectCard = ({
  name,
  desc,
  web_link,
  git_link,
  image,
  tech,
  color,
}) => {
  return (
    <div
      className="p-card w-[809px] h-[229px] rounded-[22px] border-prime-black border flex items-center gap-5 overflow-hidden relative p-5"
      style={{ backgroundColor: `#${color}` }}
    >
      <div className="content flex flex-col gap-4">
        <div className="text flex flex-col gap-1">
          <div className="project-topic">{name}</div>
          <div className="description max-w-[386px] body-light">{desc}</div>
        </div>
        <div className="cta flex gap-2">
          <Button asChild variant={"dark"} size={"default"}>
            <Link href={`${web_link}`} target="_blank">
              <BsBoxArrowUpRight /> View Demo
            </Link>
          </Button>
          <Button asChild variant={"outline"} size={"default"}>
            <Link href={`${git_link}`} target="_blank">
              <SiGithub /> View Code
            </Link>
          </Button>
        </div>
      </div>
      <div className="project-and-tech">
        <div className="w-[311.85px] h-[329.36px] rotate-[8.49deg] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center relative flex items-center justify-center absolute ">
          <Image src={image} alt="project_img" width={400} height={300} />
          <div className="tech absolute rotate-[-8.49deg] bottom-15 flex gap-2">
            {tech.map((item, index) => {
              const ItemComponent = item.icon; // ✅ Correct placement
              return (
                <div
                  key={index}
                  className="circle w-10 h-10  flex items-center justify-center shadow-[0px_2px_0px_#000000]"
                >
                  <ItemComponent className="text-3xl text-gray-700" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
