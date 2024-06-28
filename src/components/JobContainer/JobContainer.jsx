import React from "react";
import JobHeader from "../JobHeader/JobHeader";
import JobStats from "../JobStats/JobStats";
import JobDetail from "../JobDetail/JobDetail";
import figma from "../../assets/figma.svg";
import ai from "../../assets/ai.svg";
import xd from "../../assets/xd.svg";
import company from "../../assets/company.png";

const JobContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full pb-8 lg:pb-16">
      <div className="w-full">
        <JobHeader
          title="Senior Product Designer"
          posted="2 days"
          status="Open"
          location="Delaware, USA"
          priceLowerBound="300k"
          priceUpperBound="400k"
        />
        <div className="border-b border-[#E7E7E7] mt-8 lg:mt-12"></div>
        <div className="ml-4 md:ml-12 lg:ml-24 flex flex-col lg:flex-row gap-8 lg:gap-24 mt-8 lg:mt-12">
          <JobDetail
            title="Skills Required"
            icons={[figma, ai, xd]}
            names={["Figma", "Adobe Illustrator", "Adobe XD"]}
          />
          <JobDetail title="Skills Required" content="English" />
          <JobDetail title="Skills Required" content="Full time" />
          <JobDetail title="Skills Required" content="3+ Years of Experience" />
        </div>
        <div className="border-b border-[#E7E7E7] mt-8 lg:mt-12"></div>
        <div className="flex flex-col gap-4 ml-4 md:ml-12 lg:ml-24 mt-8 lg:mt-12">
          <div>
            <p className="text-[#6E6D6D] text-sm lg:text-base">About the job</p>
            <ol className="list-decimal list-inside pl-4 text-base lg:text-lg text-[#3D3D3D]">
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related work
              </li>
            </ol>
          </div>
          <div className="text-[#3D3D3D]">
            <p>Benefits:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
          </div>
          <div className="text-[#3D3D3D]">
            <p>Schedule:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Day shift</li>
            </ul>
          </div>
          <div className="text-[#3D3D3D]">
            <p>Supplemental pay types:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
          </div>
          <p className="text-[#3D3D3D]">Work location: In person</p>
        </div>
        <div className="border-b border-[#E7E7E7] mt-8 lg:mt-12"></div>
        <div className="ml-4 md:ml-12 lg:ml-24 mt-8 lg:mt-12">
          <div className="flex flex-row gap-4 lg:gap-6 items-center text-lg lg:text-xl text-[#4F4F4F]">
            <img
              src={company}
              alt=""
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-md"
            />
            <p>Atlassian</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-8 lg:gap-12 pb-[32px] md:pb-0">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">
                  Company size
                </p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">
                  1k-2k Employees
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">Sector</p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">
                  Founded in
                </p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">2019</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">Type</p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">Private</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">Funding</p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">
                  Bootstrapped
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm lg:text-base text-[#6E6D6D]">
                  Founded By
                </p>
                <p className="text-base lg:text-lg text-[#3D3D3D]">
                  Scott Farquhar, Mike Cannon-Brookes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobStats />
    </div>
  );
};

export default JobContainer;
