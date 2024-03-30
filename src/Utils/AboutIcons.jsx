import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function AboutIcons() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6  text-stone-700 pb-12">
        <div className="border-solid border-[1px] border-blue-400 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <PhoneIcon className="h-10 w-10" />
          </span>
          <p>+91-9212321321</p>
        </div>
        <div className="border-solid border-[1px] border-blue-400 rounded-lg p-6 text-center font-medium text-xl ">
          <span className="flex justify-center p-6">
            <MapPinIcon className="h-8 w-8" />
          </span>
          <p>Los Angeles, America</p>
        </div>
        <div className="border-solid border-[1px] border-blue-400 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <EnvelopeIcon className="h-8 w-8" />
          </span>
          <p>portfolio3@gmail.com</p>
        </div>
        <div className="border-solid border-[1px] border-blue-400 rounded-lg p-6 text-center font-medium text-xl">
          <span className="flex justify-center p-6">
            <CheckCircleIcon className="h-8 w-8" />
          </span>
          <p>Hire Available</p>
        </div>
      </div>
    </div>
  );
}

export default AboutIcons;
