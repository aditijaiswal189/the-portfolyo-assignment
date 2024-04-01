/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import AboutIcons from "../Utils/AboutIcons";
import SectionHeading from "../Utils/SectionHeading";
import Input from "../ui/Input";

function ContactForm({ portData }) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="w-[80%] m-auto pt-[90px]" id="contact">
      <div>
        <SectionHeading>CONTACT FORM</SectionHeading>
        <p className="text-stone-500  text-xl tracking-tighter text-right pt-6 pb-12 font-semibold">
          Feel free to contact me
        </p>
      </div>
      <AboutIcons contactDetails={portData?.about} />

      <div className="w-[60%] m-auto p-6">
        <form>
          <div>
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Subject" />
            <Input placeholder="Message" />
            <button className="border-[1px] border-solid bg-blue-800 border-blue-800 text-slate-50 p-3  px-4 m-2 text-xl rounded-xl mb-12 ">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-[90%] m-auto p-6 pb-10 border-solid border-t-[1px] border-blue-400 text-lg font-semibold text-stone-600 text-center">
        <span className="text-blue-600"> {year}</span> Copyright & Design By
        {portData?.about?.name}
      </div>
    </div>
  );
}

export default ContactForm;
