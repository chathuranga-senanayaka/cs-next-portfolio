import React from "react";
import ContactDock from "./ui/contactdock";

const Footer = () => {
  return (
    <div className="min-w-screen bg-prime-black-3 text-prime-white h-[466px] flex flex-col items-center justify-center gap-4">
      <div className="thank name-text">Thank You</div>
      <div className="message sub-topic max-w-[531px] text-center">
        for visiting my portfolio. I’m always looking for new opportunities to
        learn and grow. Stay connected!
      </div>
      <ContactDock />
    </div>
  );
};

export default Footer;
