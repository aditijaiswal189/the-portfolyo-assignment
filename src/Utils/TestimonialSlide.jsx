/* eslint-disable react/prop-types */
function TestimonialSlide({ testimonialsData, image }) {
  return (
    <div className="p-8  rounded-3xl text-center ">
      <p className=" font-bold text-2xl p-8 text-stone-400 mx-[80px] px-10 pb-[80px] ">
        {testimonialsData.review}
      </p>
      <div className="flex">
        <div>
          <img
            src={image}
            alt={testimonialsData.image.public_id}
            className="overflow-hidden rounded-3xl w-[30%] ml-[80px] "
          />
        </div>
        <div className="mr-10 text-center">
          <h4 className=" font-extrabold text-3xl p-2 text-stone-800 pt-5 ">
            {testimonialsData.name}
          </h4>
          <button className=" font-extrabold text-3xl p-2 text-stone-500   rounded-xl  hover:text-blue-400 tracking-wider  ">
            - {testimonialsData.position}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlide;
