"use client"; // Required for client-side interactivity

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isHomeSection, setIsHomeSection] = useState<boolean>(true);

  // Function to check the current section
  const checkSection = (): void => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      const rect = homeSection.getBoundingClientRect();
      // Check if the home section is in view
      setIsHomeSection(rect.top <= 0 && rect.bottom >= 0);
    }
  };

  // Add scroll event listener to check the current section
  useEffect(() => {
    window.addEventListener("scroll", checkSection);
    return () => window.removeEventListener("scroll", checkSection);
  }, []);

  // Function to handle smooth scrolling to sub-topic
  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Find the sub-topic element within the section
      const subTopic = section.querySelector(
        ".sub-topic"
      ) as HTMLElement | null;
      if (subTopic) {
        const offset = 120; // Adjust this value to match your Navbar height
        const targetPosition = subTopic.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-center h-[90px] shadow-sm transition-all duration-300 ${
        isHomeSection
          ? "bg-prime-white w-full"
          : "bg-white/50 backdrop-blur-md rounded-full w-[40vw]" // Glass effect for non-home sections
      }`}
    >
      <ul className="flex gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={"nav_link"}
              onClick={() => handleSmoothScroll(item.id)} // Add onClick handler
            >
              <Link href={`#${item.id}`} scroll={false}>
                {" "}
                {/* Disable default scroll behavior */}
                {item.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
