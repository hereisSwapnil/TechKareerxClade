import React from "react";
import users from "../../assets/users.svg";
import usercheck from "../../assets/usercheck.svg";
import messagesquare from "../../assets/messagesquare.svg";
import eye from "../../assets/eye.svg";
import JobStatsTableRow from "../JobStatsTableRow/JobStatsTableRow";

const JobStatsTable = () => {
  return (
    <div className="w-full flex flex-col mt-[30px] gap items-center">
      <JobStatsTableRow icon={users} field={"Applicants"} count={400} />
      <JobStatsTableRow icon={usercheck} field={"Matches"} count={100} />
      <JobStatsTableRow icon={messagesquare} field={"Messages"} count={147} />
      <JobStatsTableRow icon={eye} field={"Views"} count={800} end />
    </div>
  );
};

export default JobStatsTable;
