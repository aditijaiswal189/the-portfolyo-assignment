/* eslint-disable react/prop-types */
function ServicesSlide({ servicesData, image }) {
  return (
    <div className="flex p-8 items-center rounded-3xl ">
      <div>
        <img
          src={image}
          alt={servicesData.image.public_id}
          className="overflow-hidden rounded-3xl"
        />
      </div>
      <div>
        <h4 className=" font-extrabold text-3xl p-2 text-stone-800 mb-10 ">
          {servicesData.name}
        </h4>
        <p className=" font-extrabold text-xl p-8 text-stone-600 mb-[100px]">
          {servicesData.desc}
        </p>
        <button className=" font-extrabold text-3xl p-3 text-blue-500 border-solid border-[1px] border-blue-400 px-5 rounded-xl hover:text-stone-100 tracking-wider active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 ">
          {servicesData.charge}
        </button>
      </div>
    </div>
  );
}

export default ServicesSlide;
