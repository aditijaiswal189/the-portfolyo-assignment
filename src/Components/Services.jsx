/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionHeading from "../Utils/SectionHeading";
import SwiperServices from "../Utils/SwiperServices";

function Services({ children }) {
  return (
    <div className="w-[80%] m-auto pb-10">
      <div className="pb-10">
        <SectionHeading>WHAT I DO </SectionHeading>
      </div>
      <SwiperServices />
    </div>
  );
}

export default Services;
