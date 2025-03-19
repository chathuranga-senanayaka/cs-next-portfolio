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
      className="p-card w-[90vw] max-w-[809px] lg:h-[229px] h-[460px] rounded-[22px] border border-prime-black flex flex-col sm:flex-row items-center gap-5  relative p-5 overflow-hidden"
      style={{ backgroundColor: `#${color}` }}
    >
      {/* Content Section */}
      <div className="content flex flex-col gap-4 w-full sm:w-1/2">
        <div className="text flex flex-col gap-1">
          <div className="project-topic">{name}</div>
          <div className="description max-w-[386px] body-light">{desc}</div>
        </div>
        <div className="cta flex gap-2">
          <Button asChild variant={"dark"} size={"default"}>
            <Link href={web_link} target="_blank">
              <BsBoxArrowUpRight /> View Demo
            </Link>
          </Button>
          <Button asChild variant={"outline"} size={"default"}>
            <Link href={git_link} target="_blank">
              <SiGithub /> View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Image & Tech Stack */}
      <div className="project-and-tech w-full sm:w-1/2 flex justify-center">
        <div className="w-[300px] lg:w-[311.85px] h-[270px] lg:h-[329.36px] lg:rotate-[8.49deg] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center relative">
          <Image
            src={image}
            alt="project_img"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="tech absolute rotate-[-8.49deg] bottom-15  flex gap-2">
            {tech.map((item, index) => {
              const ItemComponent = item.icon;
              return (
                <div
                  key={index}
                  className="circle w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-[0px_2px_0px_#000000]"
                >
                  <ItemComponent className="text-2xl sm:text-3xl text-gray-700" />
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
