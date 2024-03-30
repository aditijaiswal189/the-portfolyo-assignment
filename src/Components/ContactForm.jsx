/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import AboutIcons from "../Utils/AboutIcons";
import SectionHeading from "../Utils/SectionHeading";

function ContactForm({ children }) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="w-[80%] m-auto">
      <div>
        <SectionHeading>CONTACT FORM</SectionHeading>
        <p className="text-stone-500  text-xl tracking-tighter text-right pt-6 pb-12 font-semibold">
          Feel free to contact me
        </p>
      </div>
      <AboutIcons />

      <div className="w-[60%] m-auto p-6">
        <form>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-[100%] p-2 m-2 rounded-xl border-solid border-[1px] border-blue-400 active:border-blue-500 active:outline-2 active:outline-blue-600 hover:outline-blue-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-[100%] p-2 m-2 rounded-xl border-solid border-[1px] border-blue-400 active:border-blue-500 active:outline-2 active:outline-blue-600 hover:outline-blue-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-[100%] p-2 m-2 rounded-xl border-solid border-[1px] border-blue-400 active:border-blue-500 active:outline-2 active:outline-blue-600 hover:outline-blue-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[100%] p-2 m-2 rounded-xl border-solid border-[1px] border-blue-400 active:border-blue-500 active:outline-2 active:outline-blue-600 hover:outline-blue-600 text-xl text-stone-800"
            />
            <button className="border-[1px] border-solid bg-blue-800 border-blue-800 text-slate-50 p-3  px-4 m-2 text-xl rounded-xl mb-12 ">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-[90%] m-auto p-6 pb-10 border-solid border-t-[1px] border-blue-400 text-lg font-semibold text-stone-600 text-center">
        <span className="text-blue-600"> {year}</span> Copyright & Design By
        John Doe
      </div>
    </div>
  );
}

export default ContactForm;
