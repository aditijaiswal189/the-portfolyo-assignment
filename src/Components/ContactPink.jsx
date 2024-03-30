import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function ContactPink() {
  return (
    <div className="w-[80%] m-auto">
      <div className=" ">
        <h3 className="text-pink-600 text-3xl border-solid border-b-[1px] border-pink-600 pb-6 font-bold">
          Contact Form
        </h3>
        <p className="text-stone-400  text-xl tracking-tighter text-right pt-6 pb-12 font-semibold">
          Feel free to contact me
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6  text-stone-200 pb-12">
        <div className="border-solid border-[1px] border-pink-600 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <PhoneIcon className="h-10 w-10" />
          </span>
          <p>+91-9212321321</p>
        </div>
        <div className="border-solid border-[1px] border-pink-600 rounded-lg p-6 text-center font-medium text-xl ">
          <span className="flex justify-center p-6">
            <MapPinIcon className="h-8 w-8" />
          </span>
          <p>Los Angeles, America</p>
        </div>
        <div className="border-solid border-[1px] border-pink-600 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <EnvelopeIcon className="h-8 w-8" />
          </span>
          <p>portfolio3@gmail.com</p>
        </div>
        <div className="border-solid border-[1px] border-pink-600 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <CheckCircleIcon className="h-8 w-8" />
          </span>
          <p>Hire Available</p>
        </div>
      </div>
      <div className="w-[60%] m-auto p-6">
        <form>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-[100%] p-2 m-2 bg-pink-100 rounded-xl border-solid border-[1px] border-pink-400 active:border-pink-500 active:outline-2 active:outline-pink-600 hover:outline-pink-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-[100%] p-2 m-2 bg-pink-100 rounded-xl border-solid border-[1px] border-pink-400 active:border-pink-500 active:outline-2 active:outline-pink-600 hover:outline-pink-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-[100%] p-2 m-2 bg-pink-100 rounded-xl border-solid border-[1px] border-pink-400 active:border-pink-500 active:outline-2 active:outline-pink-600 hover:outline-pink-600 text-xl text-stone-800"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[100%] p-2 m-2 bg-pink-100 rounded-xl border-solid border-[1px] border-pink-400 active:border-pink-500 active:outline-2 active:outline-pink-600 hover:outline-pink-600 text-xl text-stone-800"
            />
            <button className="border-[1px] border-solid bg-pink-600 border-pink-600 text-slate-100 p-3  px-4 m-2 text-xl rounded-xl mb-12  mt-5 ">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-[90%] m-auto p-6 pb-10 border-solid border-t-[1px] border-pink-600 text-lg font-normal text-stone-200">
        Copyright & Design By John Doe
      </div>
    </div>
  );
}

export default ContactPink;
