/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AboutIcons from "../Utils/AboutIcons";
import SectionHeading from "../Utils/SectionHeading";

// eslint-disable-next-line react/prop-types
function About({ portData }) {
  return (
    <div className="w-[80%] m-auto pt-[90px] " id="about">
      <div className="pb-10">
        <SectionHeading>ABOUT</SectionHeading>
      </div>
      <div className="flex justify-between items-center pb-12">
        <div className="order-last">
          <img
            src="Images/hero-devices.svg"
            alt="image of laptop"
            className="py-8"
          />
        </div>
        <div className="p-8">
          <p className="font-bold text-3xl leading-tight tracking-tighter w-[80%] pb-8">
            Hi, I am {portData?.about?.name} . {portData?.about?.subTitle}
          </p>
          <p className="font-medium text-xl  text-stone-500leading-loose tracking-tighter w-[82%]">
            {portData?.about?.description}
          </p>
        </div>
      </div>
      <AboutIcons contactDetails={portData?.about} />
    </div>
  );
}

export default About;
