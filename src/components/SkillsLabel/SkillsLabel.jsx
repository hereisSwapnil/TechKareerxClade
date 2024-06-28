import React from "react";

const SkillsLabel = ({ icon, name }) => {
  return (
    <div className="flex flex-row gap-[5px] w-fit border-[#D0D5DD] border-[1px] rounded-md px-[6px] py-[4px]">
      <img src={icon} alt="" className="h-[16px] w-[16px]" />
      <p className="text-[12px] text-[#344054]">{name}</p>
    </div>
  );
};

export default SkillsLabel;
