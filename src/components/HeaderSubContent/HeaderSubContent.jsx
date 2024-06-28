import React from "react";

const HeaderSubContent = ({ icon, field }) => {
  return (
    <div className="flex flex-row gap-2 md:gap-3 items-center">
      <img src={icon} className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" alt="" />
      <p className="text-sm md:text-base lg:text-lg text-[#5D5D5D]">{field}</p>
    </div>
  );
};

export default HeaderSubContent;
