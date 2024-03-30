/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionHeading from "../Utils/SectionHeading";
import SkillsBox from "../Utils/SkillsBox";
import { skills } from "../Utils/data";

function Skills({ children }) {
  return (
    <div className="w-[80%] m-auto">
      <div className="pb-10">
        <SectionHeading>PROFESSIONAL SKILLS </SectionHeading>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {skills.map((skil) => (
          <SkillsBox skillsData={skil} key={skil._id} />
        ))}
      </div>
    </div>
  );
}

export default Skills;