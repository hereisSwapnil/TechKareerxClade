import React from "react";
import SkillsLabel from "../SkillsLabel/SkillsLabel";

const JobDetail = ({ title, icons, content, names }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[#6E6D6D] text-[14px]">{title}</p>
      {icons ? (
        <div className="flex flex-col gap-[8px]">
          {icons.map((icon, index) => (
            <SkillsLabel key={index} icon={icon} name={names[index]} />
          ))}
        </div>
      ) : (
        <p className="text-[16px] text-[#3D3D3D] font-semibold">{content}</p>
      )}
    </div>
  );
};

export default JobDetail;
