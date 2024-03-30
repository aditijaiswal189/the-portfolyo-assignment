import ServicesSlide from "./ServicesSlide";
import { services } from "./data";

function SwiperServices() {
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
        {services.map((ser) => (
          <>
            <swiper-slide>
              <ServicesSlide
                servicesData={ser}
                image={ser.image.url}
                key={Number(ser._id)}
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

export default SwiperServices;
