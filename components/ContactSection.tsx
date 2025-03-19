import React from "react";
import ContactForm from "./ui/contactform";
import { Button } from "./ui/button";
import Link from "next/link";
import ContactDock from "./ui/contactdock";
import { SiMinutemailer } from "react-icons/si";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="min-h-screen w-full max-w-[1280px] rounded-[22px] bg-[#C2E2FF] flex items-center justify-center mb-8 p-5"
    >
      <div className="wrapper flex flex-col items-center gap-8 w-[80vw] ">
        {/* Content Section */}
        <div className="content flex flex-col items-center text-center px-4">
          <div className="sub-topic">Contact Me</div>
          <div className="body-light max-w-[663px]">
            {`I would love to hear from you! Whether you're interested in
            collaborating on a project, hiring me for a job, or just want to
            chat about web development, feel free to reach out.`}
          </div>
        </div>

        {/* Contact Form & Other Contact Methods */}
        <div className="contact-forms flex flex-col sm:flex-row w-full gap-10 justify-center">
          <ContactForm />

          {/* Other Contact Options */}
          <div className="other flex flex-col items-center gap-8 w-full sm:w-auto">
            <div className="email flex flex-col items-center gap-4">
              <div className="body-light text-center">
                OR
                <br />
                direct Email Me:
              </div>
              <Button asChild>
                <Link href={"mailto:email@email.com"}>
                  <SiMinutemailer /> Email
                </Link>
              </Button>
            </div>

            <div className="dock flex flex-col items-center gap-4">
              <div className="body-light">
                You can also connect with me on :
              </div>
              <ContactDock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
