import React from "react";
import JobButton from "../JobButton/JobButton";
import edit from "../../assets/edit.svg";
import delete_ from "../../assets/delete.svg";
import JobStatsTable from "../JobStatsTable/JobStatsTable";

const JobStats = () => {
  return (
    <div className="bg-[#FCFCFC] w-full lg:w-[450px] items-center flex flex-col border-t lg:border-t-0 lg:border-l border-[#E7E7E7] p-4 lg:p-5">
      <div className="flex flex-row gap-4 lg:gap-6 h-fit mt-4 lg:mt-8">
        <JobButton icon={delete_} field="Delete Job" />
        <JobButton icon={edit} field="Edit Job" fill />
      </div>
      <JobStatsTable />
    </div>
  );
};

export default JobStats;
