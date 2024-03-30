/* eslint-disable no-unused-vars */
import AboutIcons from "../Utils/AboutIcons";
import SectionHeading from "../Utils/SectionHeading";

// eslint-disable-next-line react/prop-types
function About({ children }) {
  return (
    <div className="w-[80%] m-auto ">
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
            Hi, I am John doe. I develop 3D visuals, user interfaces and web
            applications
          </p>
          <p className="font-medium text-xl  text-stone-500leading-loose tracking-tighter w-[82%]">
            As a React developer with 5 years of experience, I have honed my
            skills in JavaScript and am currently learning TypeScript to expand
            my expertise. I pride myself on being a quick learner and attentive
            listener, which allows me to collaborate effectively with clients to
            create efficient and scalable solutions. My focus is on developing
            user-friendly applications that solve real-world problems.
          </p>
        </div>
      </div>
      <AboutIcons />
    </div>
  );
}

export default About;
