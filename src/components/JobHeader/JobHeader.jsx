import React from "react";
import StatusLabel from "../StatusLabel/StatusLabel";
import HeaderSubContent from "../HeaderSubContent/HeaderSubContent";
import markerpin from "../../assets/markerpin.svg";
import coinsstacked from "../../assets/coinsstacked.svg";

const JobHeader = ({
  title,
  posted,
  status,
  location,
  priceUpperBound,
  priceLowerBound,
}) => {
  return (
    <div className="mt-5 md:mt-6 lg:mt-9 ml-4 md:ml-12 lg:ml-24">
      <div className="flex flex-col md:flex-row align-middle items-start md:items-center gap-2 md:gap-4">
        <p className="font-semibold text-xl md:text-3xl lg:text-4xl text-[#3D3D3D]">
          {title}
        </p>
        <div className="flex flex-row items-center gap-2 md:gap-3">
          <p className="text-sm md:text-base text-[#888888] hidden md:flex">
            •
          </p>
          <p className="text-sm md:text-base text-[#888888]">
            posted {posted} ago
          </p>
        </div>
        <StatusLabel status={status} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 mt-6 md:mt-4">
        <HeaderSubContent icon={markerpin} field={location} />
        <HeaderSubContent
          icon={coinsstacked}
          field={`$${priceLowerBound} - $${priceUpperBound}`}
        />
      </div>
    </div>
  );
};

export default JobHeader;
