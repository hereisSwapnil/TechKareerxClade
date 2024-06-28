import React from "react";

const StatusLabel = ({ status }) => {
  return (
    <div className="flex flex-row text-[12px] bg-[#ECFDF3] text-[#067647] border border-[#AAEFC6] gap-[4px] w-fit px-[7px] py-[2px] rounded-full">
      •<p>{status}</p>
    </div>
  );
};

export default StatusLabel;
