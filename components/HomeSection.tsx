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
      className="min-h-screen max-w-320 flex justify-center items-center px-80 rounded-2xl bg-prime-gray-green pt-[90px] relative overflow-hidden"
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
            className="text-4xl font-bold text-yellow-400"
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
        className="hero-content flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }} // Fade in after loading
        transition={{ duration: 0.5, delay: 0.5 }} // Delay to sync with pre-loader
      >
        <div className="text flex flex-col items-center gap-[-20px]">
          <div className="header flex flex-col items-center">
            {/* Add hover effects to your name */}
            <motion.div
              className="name name-text cursor-none"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              CHATHURANGA
            </motion.div>
            <motion.div
              className="name name-text cursor-none"
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
                width: isHoveringRole ? "100%" : 0,
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
      </motion.div>

      {/* Custom Cursor (Yellow Circle with Face) */}
      {(isHoveringName || isHoveringRole) && (
        <motion.div
          className="fixed w-24 h-24 bg-yellow-400 rounded-full pointer-events-none flex items-center justify-center"
          style={{
            left: cursorPosition.x - 48, // Center the circle
            top: cursorPosition.y - 48, // Center the circle
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Eyes */}
          <div className="flex space-x-4">
            <motion.div
              className="w-4 h-4 bg-black rounded-full"
              animate={{
                x: [0, -5, 5, 0], // Move left, then right, then back to center
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="w-4 h-4 bg-black rounded-full"
              animate={{
                x: [0, 5, -5, 0], // Move right, then left, then back to center
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          {/* Mouth */}
          <div className="w-8 h-2 bg-black rounded-full mt-4" />
        </motion.div>
      )}
    </div>
  );
};

export default HomeSection;
