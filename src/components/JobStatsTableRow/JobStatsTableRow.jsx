import React from "react";

const JobStatsTableRow = ({ icon, field, count, end }) => {
  return (
    <div
      className={`flex flex-row w-[90%] justify-between py-[20px] px-[5px] ${
        end ? "" : "border-b-[1px] border-b-[#E7E7E7]"
      }`}
    >
      <div className="flex flex-row gap-[10px] items-center">
        <img src={icon} alt="" className="w-[20px] h-[20px]" />
        <p className="text-[#4F4F4F] text-[16px]">{field}</p>
      </div>
      <p className="text-[20px] text-[#3D3D3D]">{count}</p>
    </div>
  );
};

export default JobStatsTableRow;
