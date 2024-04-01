/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionHeading from "../Utils/SectionHeading";
import SwiperTestimonials from "../Utils/SwiperTestimonials";

function Testimonial({ testimonialsData }) {
  return (
    <div className="w-[80%] m-auto mb-10 pt-[90px]" id="testimonials">
      <div className="pb-10">
        <SectionHeading>TESTIMONIALS</SectionHeading>
      </div>
      <div>
        <SwiperTestimonials testimonialsData={testimonialsData} />
      </div>
    </div>
  );
}

export default Testimonial;
