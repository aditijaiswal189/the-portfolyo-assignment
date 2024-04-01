/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProjectBox from "../Utils/ProjectBox";
import SectionHeading from "../Utils/SectionHeading";
import Filter from "../ui/Filter";

function Projects({ projectsData }) {
  const [filterBy, setFilterBy] = useState("all");
  const [expandData, setExpandData] = useState(false);
  let filteredData = projectsData;
  let slicedData = [];

  if (filterBy !== "all") {
    filteredData = filteredData.filter((item) => {
      return item.techStack
        .map((item) => item.toLowerCase().trim())
        .includes(filterBy);
    });
  }
  if (!expandData) slicedData = filteredData.slice(9, 15);
  if (expandData) slicedData = filteredData.slice(0, filteredData.length);

  return (
    <div className="w-[80%] m-auto pb-10 pt-[90px]" id="projects">
      <div className="pb-10">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="flex items-center justify-center">
        <Filter setFilterBy={setFilterBy} filterBy={filterBy} />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {slicedData?.reverse()?.map((project) => (
          <ProjectBox
            projectData={project}
            seqNumber={project?.sequence}
            key={project?._id}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="block font-extrabold text-xl p-2 mt-5 mb-3 text-blue-500 border-solid border-[1px] border-blue-400 px-3 rounded-xl hover:text-stone-100 tracking-wider active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
          onClick={() => setExpandData((i) => !i)}
        >
          {!expandData ? "View More" : "View Less"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
