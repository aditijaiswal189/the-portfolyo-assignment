/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "../ui/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Hero({ portData }) {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div id="home">
      <div className="relative">
        <nav className="p-2 flex justify-between fixed top-0 left-0 right-0 bg-blue-100 z-50 pl-10 ">
          <h3 className="text-blue-800 text-5xl  py-3  font-bold ">
            {portData?.about?.name}
          </h3>
          <button
            className="z-20 mr-5 mt-5"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            {!showHamburger ? (
              <Bars3Icon className="h-8 w-8  text-stone-600  rounded-xl" />
            ) : (
              <XMarkIcon className="h-8 w-8 text-stone-600  rounded-xl" />
            )}
          </button>

          {showHamburger && (
            <div
              onClick={() => setShowHamburger(!showHamburger)}
              className="z-10 absolute right-3 top-8 bg-slate-100 p-5 rounded-xl pt-10"
            >
              <Button>
                <a href="#home">Home</a>
              </Button>
              <Button>
                <a href="#about">About</a>
              </Button>
              <Button>
                <a href="#services">Services</a>
              </Button>
              <Button>
                <a href="#skills">Professional Skills</a>
              </Button>
              <Button>
                <a href="#projects">Projects</a>
              </Button>
              <Button>
                <a href="#timeline">Timeline</a>
              </Button>

              <Button>
                <a href="#testimonials">Testimonials</a>
              </Button>
              <Button>
                {" "}
                <a href="#contact">Contact Form</a>
              </Button>
            </div>
          )}
        </nav>
      </div>
      <div className="w-[80%] m-auto flex h-screen justify-between  gap-10 items-center  p-8 pb-[80px]">
        <div className=" py-6 ">
          <h1 className="text-[90px] font-extrabold py-8 leading-tight   top-12 text-stone-600 z-10">
            {portData?.about?.title} & Designer
          </h1>
          <h3 className="pt-4 pb-2 font-bold text-4xl text-stone-500 ">
            With{" "}
            <span className="pt-4 pb-2 font-bold text-5xl text-blue-500 ">
              {portData?.about?.exp_year}
            </span>{" "}
            years of experience
          </h3>
          <h3 className="pt-4 pb-2 font-bold text-4xl text-blue-500 ">
            {portData?.about?.subTitle}
          </h3>
        </div>

        <div className="rounded-2xl  h-auto">
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
