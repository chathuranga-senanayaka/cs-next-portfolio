import React from "react";

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
          <form action=""></form>
          <div className="other">
            <div className="email"></div>
            <div className="dock"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
