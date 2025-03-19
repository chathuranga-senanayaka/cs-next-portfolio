"use client"; // Required for client-side interactivity

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import ContactDock from "./ui/contactdock";

const HomeSection = () => {
  const [isHoveringName, setIsHoveringName] = useState(false); // Hover state for name
  const [isHoveringRole, setIsHoveringRole] = useState(false); // Hover state for role
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true); // State for pre-loader
  const [text, setText] = useState(""); // State for typewriter text

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Simulate a loading delay and typewriter effect
  useEffect(() => {
    const fullText = "Your Ideas, My Code";
    let currentIndex = 0;

    const typewriter = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typewriter);
        setTimeout(() => setLoading(false), 500); // Hide pre-loader after typing completes
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typewriter); // Cleanup interval
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen w-full flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 rounded-2xl bg-prime-gray-green pt-16 sm:pt-24 md:pt-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Pre-Loading Animation */}
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-prime-gray-green z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3 }} // Fade out after 3 seconds
        >
          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text}
            <motion.span
              className="ml-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }} // Blinking cursor effect
            >
              |
            </motion.span>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section Content */}
      <motion.div
        className="hero-content flex flex-col items-center justify-center gap-4 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }} // Fade in after loading
        transition={{ duration: 0.5, delay: 0.5 }} // Delay to sync with pre-loader
      >
        <div className="text flex flex-col items-center gap-2 sm:gap-4">
          <div className="header flex flex-col items-center ">
            <div className="sub-topic text-xl leading-none md:text-3xl font-bold">
              I'm
            </div>
            {/* Add hover effects to  name */}
            <motion.div
              className="name name-text cursor-none text-3xl leading-none  sm:text-4xl md:text-[164px] md:leading-35"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              CHATHURANGA
            </motion.div>
            <motion.div
              className="name name-text cursor-none text-3xl  leading-none sm:text-4xl md:text-[164px] md:leading-35"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              SENANAYAKA
            </motion.div>
          </div>
          {/* Hoverable "Front End Developer" text */}
          <motion.div
            className="relative"
            onMouseEnter={() => setIsHoveringRole(true)}
            onMouseLeave={() => setIsHoveringRole(false)}
          >
            <motion.div
              className="sub-header cursor-pointer text-lg sm:text-xl md:text-[96px] font-medium lg:leading-[120%]"
              whileHover={{ scale: 1.05 }}
            >
              Front End Developer
            </motion.div>
            {/* Animated Line */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{
                width: isHoveringRole ? "100%" : 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
        <div className="cta flex flex-col gap-2 items-center">
          <div className="btns flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href={"#contact"}>
                <BsArrowRight /> Contact Me
              </Link>
            </Button>
            <Button asChild variant={"outline"} className="w-full sm:w-auto">
              <Link href={"#"}>
                <BsDownload /> Download Resume
              </Link>
            </Button>
          </div>
          <ContactDock />
        </div>
      </motion.div>

      {/* Custom Cursor (Yellow Circle with Face) */}
      {(isHoveringName || isHoveringRole) && (
        <motion.div
          className="fixed w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full pointer-events-none flex items-center justify-center"
          style={{
            left: cursorPosition.x - (window.innerWidth < 640 ? 32 : 48), // Adjust for mobile
            top: cursorPosition.y - (window.innerWidth < 640 ? 32 : 48), // Adjust for mobile
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Eyes */}
          <div className="flex space-x-2 sm:space-x-4">
            <motion.div
              className="w-2 h-2 sm:w-4 sm:h-4 bg-black rounded-full"
              animate={{
                x: [0, -2, 2, 0], // Smaller movement for mobile
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="w-2 h-2 sm:w-4 sm:h-4 bg-black rounded-full"
              animate={{
                x: [0, 2, -2, 0], // Smaller movement for mobile
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          {/* Mouth */}
          <div className="w-4 h-1 sm:w-8 sm:h-2 bg-black rounded-full mt-2 sm:mt-4" />
        </motion.div>
      )}
    </div>
  );
};

export default HomeSection;
