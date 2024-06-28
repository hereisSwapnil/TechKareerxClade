import React, { useState } from "react";
import JobNavbarItem from "../JobNavbarItem/JobNavbarItem";

const JobNavbar = () => {
  const [activeItem, setActiveItem] = useState("Job preview");

  return (
    <div className="border-t-[1px] border-b-[1px] border-[#E7E7E7] h-[60px] px-4 md:px-8 lg:px-20 flex justify-center">
      <div className="flex flex-row justify-between w-full max-w-4xl items-end">
        <JobNavbarItem
          field="Job preview"
          active={activeItem === "Job preview"}
          onClick={() => setActiveItem("Job preview")}
        />
        <JobNavbarItem
          field="Applicants"
          active={activeItem === "Applicants"}
          onClick={() => setActiveItem("Applicants")}
        />
        <JobNavbarItem
          field="Match"
          active={activeItem === "Match"}
          onClick={() => setActiveItem("Match")}
        />
        <JobNavbarItem
          field="Messages"
          active={activeItem === "Messages"}
          onClick={() => setActiveItem("Messages")}
        />
      </div>
    </div>
  );
};

export default JobNavbar;
