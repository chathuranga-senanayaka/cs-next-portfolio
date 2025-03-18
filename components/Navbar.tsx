import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
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
    <nav className="flex items-center justify-center h-[90px]">
      <ul className="flex gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Button asChild variant={"nav_link"}>
              <Link href={`#${item.id}`}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
