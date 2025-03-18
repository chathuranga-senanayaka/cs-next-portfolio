import React from "react";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="min-h-200 max-w-320 flex justify-center items-center px-80 rounded-2xl bg-prime-gray-green"
    >
      <div className="content flex flex-col items-center gap-[-10px]">
        <div className="name flex flex-col items-center justify-center">
          <div className="name-text">chathuranga</div>
          <div className="name-text">senanayaka</div>
        </div>
        <div className="role-text">Front-End Developer</div>
      </div>
    </div>
  );
};

export default HomeSection;
