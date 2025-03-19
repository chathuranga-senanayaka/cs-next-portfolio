"use client";

import Link from "next/link";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";

// Import icons from react-icons
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

const DATA = {
  skills: [
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/chathuranga-senanayaka",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      link: "https://github.com/chathuranga-senanayaka",
    },
    {
      name: "X",
      icon: SiX,
      link: "https://github.com/chathuranga-senanayaka",
    },
    {
      name: "InsterGram",
      icon: SiInstagram,
      link: "https://github.com/chathuranga-senanayaka",
    },
    {
      name: "Whatsapp",
      icon: SiWhatsapp,
      link: "https://github.com/chathuranga-senanayaka",
    },
  ],
};

export default function ContactDock() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.skills.map((skill) => (
            <DockIcon key={skill.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={`${skill.link}`}
                    aria-label={skill.name}
                    target="_blank"
                  >
                    <skill.icon className="size-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
