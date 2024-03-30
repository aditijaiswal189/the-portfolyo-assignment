import ProjectBox from "../Utils/ProjectBox";
import SectionHeading from "../Utils/SectionHeading";
import { projects } from "../Utils/data";

function Projects() {
  return (
    <div className="w-[80%] m-auto pb-10">
      <div className="pb-10">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="flex items-center justify-between gap-5  m-auto font-bold text-stone-600 text-xl p-10 w-[60%]">
        <button className="text-blue-700 border-solid border-b-[1px] border-blue-500">
          ALL
        </button>
        <button>REACTJS</button>
        <button>NEXTJS</button>
        <button>MERN</button>
        <button>CSS</button>
        <button>TAILWINDCSS</button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {projects.map((proj) => (
          <ProjectBox
            projectsData={proj}
            seqNumber={proj.sequence}
            key={proj._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
