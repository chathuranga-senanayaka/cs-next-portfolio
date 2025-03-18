import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import p1_img from "@/public/project1.png"; // ✅ Correct import for Next.js Image

const ProjectCard = () => {
  return (
    <div className="p-card w-[809px] h-[229px] rounded-[22px] border-prime-black border flex items-center overflow-hidden">
      <div className="content">
        <div className="sub-topic">To-Do-APPs</div>
        <div className="description">
          A simple yet powerful to-do list app where users can add, edit, and
          delete tasks. I utilized React hooks to manage state and ensure a
          dynamic user experience.
        </div>
        <div className="cta">
          <Button asChild variant={"dark"}>
            <Link href="#">View Demo</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="#">View Code</Link>
          </Button>
        </div>
      </div>
      <div className="project-and-tech">
        <div className="w-[311.85px] h-[329.36px] rotate-[8.49deg] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center relative flex items-center justify-center">
          <Image
            src={p1_img} // ✅ Correct usage of Next.js Image component
            alt="Project Image"
            width={312} // ✅ Set width
            height={329} // ✅ Set height
            className="object-cover"
          />
          <div className="tech absolute rotate-[-8.49deg] bottom-20 flex gap-1">
            <div className="circle w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_2px_0px_#FFC4BD]">
              <SiNextdotjs className="text-5xl text-gray-700" />
            </div>
            <div className="circle w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_2px_0px_#FFC4BD]">
              <SiNextdotjs className="text-5xl text-gray-700" />
            </div>
            <div className="circle w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_2px_0px_#FFC4BD]">
              <SiNextdotjs className="text-5xl text-gray-700" />
            </div>
            <div className="circle w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_2px_0px_#FFC4BD]">
              <SiNextdotjs className="text-5xl text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
