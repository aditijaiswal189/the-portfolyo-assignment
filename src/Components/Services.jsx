/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionHeading from "../Utils/SectionHeading";
import SwiperServices from "../Utils/SwiperServices";

function Services({ servicesData }) {
  return (
    <div className="w-[80%] m-auto pb-10 pt-[90px]" id="services">
      <div className="pb-10">
        <SectionHeading>SERVICES</SectionHeading>
      </div>
      <SwiperServices servicesData={servicesData} />
    </div>
  );
}

export default Services;
