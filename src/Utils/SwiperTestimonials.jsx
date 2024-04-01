/* eslint-disable react/prop-types */
import TestimonialSlide from "./TestimonialSlide";

function SwiperTestimonials({ testimonialsData }) {
  return (
    <div>
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-clickable="true"
        navigation="true"
        space-between="30"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
      >
        {testimonialsData?.map((test) => (
          <>
            <swiper-slide>
              <TestimonialSlide
                testimonialsData={test}
                image={test.image.url}
                key={test._id}
              />
            </swiper-slide>
          </>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        </div>
      </swiper-container>
    </div>
  );
}

export default SwiperTestimonials;
