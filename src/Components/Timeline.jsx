/* eslint-disable react/prop-types */

import EducationDetails from "../Utils/EducationDetails";
import ExperienceDetails from "../Utils/ExperienceDetails";
import SectionHeading from "../Utils/SectionHeading";
import SpanHeading from "../ui/SpanHeading";

/* eslint-disable no-unused-vars */
function Timeline({ timelineData }) {
  return (
    <div className="w-[80%] m-auto mb-10 pt-[90px]" id="timeline">
      <div className="pb-10">
        <SectionHeading>TIMELINE</SectionHeading>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <SpanHeading>Education</SpanHeading>

          <EducationDetails
            details={timelineData?.filter((res) => res?.forEducation)}
          />
        </div>
        <div>
          <SpanHeading>Experience</SpanHeading>

          <ExperienceDetails
            details={timelineData?.filter((res) => !res?.forEducation)}
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
