/* eslint-disable react/prop-types */
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Card from "../ui/Card";

function AboutIcons({ contactDetails }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6  text-stone-700 pb-12">
        <Card text={contactDetails?.phoneNumber}>
          <PhoneIcon className="h-10 w-10" />
        </Card>
        <Card text={contactDetails?.address}>
          <MapPinIcon className="h-8 w-8" />
        </Card>
        <Card text={contactDetails?.contactEmail}>
          <EnvelopeIcon className="h-8 w-8" />
        </Card>
        <Card text="Hire Available">
          <CheckCircleIcon className="h-8 w-8" />
        </Card>
      </div>
    </div>
  );
}

export default AboutIcons;
