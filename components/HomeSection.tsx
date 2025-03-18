"use client"; // Required for client-side interactivity

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import ContactDock from "./ui/contactdock";

const HomeSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSkillHovering, setIsSkillHovering] = useState(false);

  return (
    <div
      id="home"
      className="min-h-screen max-w-320 flex justify-center items-center px-80 rounded-2xl bg-prime-gray-green pt-[90px] relative overflow-hidden"
    >
      <div className="hero-content flex flex-col items-center justify-center gap-8">
        <div className="text flex flex-col items-center gap-[-20px]">
          <div className="header flex flex-col items-center">
            {/* Add hover effects to your name */}
            <motion.div
              className="name name-text cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              CHATHURANGA
            </motion.div>
            <motion.div
              className="name name-text cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              SENANAYAKA
            </motion.div>
          </div>
          {/* Hoverable "Front End Developer" text */}
          <motion.div
            className="relative"
            onMouseEnter={() => setIsSkillHovering(true)}
            onMouseLeave={() => setIsSkillHovering(false)}
          >
            <motion.div
              className="sub-header role-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Front End Developer
            </motion.div>
            {/* Animated Line */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{
                width: isSkillHovering ? "100%" : 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
        <div className="cta flex flex-col gap-2 items-center">
          <div className="btns flex gap-4">
            <Button asChild>
              <Link href={"#contact"}>
                <BsArrowRight /> Contact Me
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"#"}>
                <BsDownload /> Download Resume
              </Link>
            </Button>
          </div>
          <ContactDock />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
