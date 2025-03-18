import React from "react";
import ContactForm from "./ui/contactform";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div id="contact" className="min-h-screen">
      <div className="wrapper">
        <div className="content">
          <div className="sub-topic">Contact Me</div>
          <div className="body-light">
            I would love to hear from you! Whether you're interested in
            collaborating on a project, hiring me for a job, or just want to
            chat about web development, feel free to reach out.
          </div>
        </div>
        <div className="contact-forms">
          <ContactForm />
          <div className="other">
            <div className="email">
              <div className="body-light">OR direct Email Me:</div>
              <Button asChild>
                <Link href={"mailto:email@email.com"}>Email</Link>
              </Button>
            </div>
            <div className="dock">
              <div className="body-light">You can also connect with me on:</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
