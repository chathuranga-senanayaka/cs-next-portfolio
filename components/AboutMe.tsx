import React from "react";
import profile_img from "@/public/main_img.jpg";
import Image from "next/image";
import ContactDock from "./ui/contactdock";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center w-full md:w-[1280px] md:gap-20 px-4 md:px-8 gap-14"
    >
      {/* Image Section */}
      <div className="img relative flex flex-col justify-center items-center">
        <div className="main_img w-[260px] h-[300px] md:w-[340px] md:h-[383px] rounded-2xl border-black relative">
          <Image
            src={profile_img}
            alt="profile img"
            className="w-full h-full object-fill rounded-2xl"
          />
          <div className="dev w-[180px] md:w-[200px] h-[120px] md:h-[128px] border-2 border-black bg-prime-white rounded-2xl absolute bottom-[-40px] right-[-40px] flex flex-col items-start justify-center px-2 text-sm md:text-base">
            <div className="body-semibold">creative😊, </div>
            <div className="body-semibold">detail-oriented🔍 &</div>
            <div className="body-semibold">performance-driven🔥</div>
            <div className="role-sub-topic text-xs md:text-sm">
              FRONT END DEVELOPER 😎
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content flex flex-col items-center md:items-start text-center md:text-left">
        <div className="sub-topic">about me</div>
        <p className="about_me body-light md:max-w-[736px] w-[80vw] mb-2">
          I’m Chathuranga Senanayaka, a self-taught web developer with a strong
          passion for building interactive and dynamic web applications. My
          journey into web development began in 2024, when I decided to learn on
          my own, utilizing free resources like Sololearn and FreeCodeCamp.
          Through these platforms, I gained foundational knowledge in HTML, CSS,
          JavaScript, and React, which sparked my enthusiasm for creating web
          applications.
        </p>
        <p className="about_me body-light md:max-w-[736px] w-[80vw] mb-2">
          After getting comfortable with front-end technologies, I continued to
          grow my skills by following YouTube tutorials and building projects to
          reinforce my learning. Eventually, I joined Skyrek Institute in Sri
          Lanka to further enhance my skills and focus on MERN stack
          development. Currently, I am diving deeper into Node.js and MongoDB to
          become proficient in full-stack development.
        </p>
        <p className="about_me body-light md:max-w-[736px] w-[80vw] mb-2">
          In addition to my MERN stack learning, I have completed courses and
          hands-on projects with Next.js, Tailwind CSS, and Framer Motion, tools
          I love using for creating modern, responsive, and smooth user
          interfaces. I’m always excited to learn new technologies and am eager
          to take on new challenges that will help me grow as a developer.
        </p>

        {/* ContactDock placed here */}
        <div className="mt-2">
          <ContactDock />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
