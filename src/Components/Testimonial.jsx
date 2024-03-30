/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionHeading from "../Utils/SectionHeading";
import SwiperTestimonials from "../Utils/SwiperTestimonials";

function Testimonial({ children }) {
  return (
    <div className="w-[80%] m-auto mb-10">
      <div className="pb-10">
        <SectionHeading>TESTIMONIALS</SectionHeading>
      </div>
      <div>
        <SwiperTestimonials />
      </div>
    </div>
  );
}

export default Testimonial;
