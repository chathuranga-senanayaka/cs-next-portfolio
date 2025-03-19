"use client"; // Required for client-side interactivity

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar: React.FC = () => {
  const [isHomeSection, setIsHomeSection] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for mobile menu

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
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
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
      className={`sticky top-0 z-50 flex items-center justify-end h-[90px] w-full md:justify-center md:w-[1280px] rounded-none md:rounded-full shadow-sm transition-all duration-300 px-4 sm:px-8 ${
        isHomeSection
          ? "bg-prime-white w-full"
          : "bg-white/50 backdrop-blur-md rounded-full w-full md:w-[1280px]" // Glass effect for non-home sections
      }`}
    >
      <div className="md:hidden">
        <Button
          variant={"ghost"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={50} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden md:flex gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={"nav_link"}
              onClick={() => handleSmoothScroll(item.id)}
            >
              <Link href={`#${item.id}`} scroll={false}>
                {item.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Visible when Menu is Open) */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white/95 backdrop-blur-md md:hidden shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button
                  asChild
                  variant={"nav_link"}
                  className="w-full justify-start"
                  onClick={() => handleSmoothScroll(item.id)}
                >
                  <Link href={`#${item.id}`} scroll={false}>
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
