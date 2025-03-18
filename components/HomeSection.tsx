import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import ContactDock from "./ui/contactdock";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="min-h-200 max-w-320 flex justify-center items-center px-80 rounded-2xl bg-prime-gray-green"
    >
      <div className="hero-content flex flex-col items-center justify-center gap-8">
        <div className="text flex flex-col items-center gap-[-20px]">
          <div className="header flex flex-col items-center">
            <div className="name name-text">CHATHURANGA</div>
            <div className="name name-text">SENANAYAKA</div>
          </div>
          <div className="sub-header role-text">Front End Developer</div>
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
