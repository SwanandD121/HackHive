import React from "react";

const HeadingSection = ({ title }) => {
  return (
    <div className="h-[98px] bg-[#9967DF] shadow-xl text-[36px] text-white  rounded-r-full my-8 shadow-[#4400A3] w-fit flex flex-row justify-center align-middle items-center px-10">
      <h1>{title}</h1>
    </div>
  );
};

export default HeadingSection;
