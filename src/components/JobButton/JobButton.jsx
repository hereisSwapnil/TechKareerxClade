import React from "react";

const JobButton = ({ icon, field, fill }) => {
  return (
    <div
      className={`${
        fill
          ? "bg-[#DC4A2D] border-[1px] border-[#FED3CA] text-[#FFFFFF]"
          : "bg-[#FEF4F2] border-[1px] border-[#DC4A2D] text-[#DC4A2D]"
      } w-fit rounded-md text-[16px] flex flex-row gap-[10px] items-center justify-center min-w-[150px] py-[10px]`}
    >
      <img src={icon} alt="" />
      {field}
    </div>
  );
};

export default JobButton;
