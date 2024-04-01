/* eslint-disable no-unused-vars */
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import SpanHeading from "../ui/SpanHeading";
import { useState } from "react";

/* eslint-disable react/prop-types */
function TimelineCard({ cardData }) {
  console.log(cardData.company_name);
  const [showItems, setShowItems] = useState(false);
  function handleShow() {
    setShowItems(!showItems);
  }

  //   console.log(details[0]);
  return (
    <div>
      <div className="flex justify-between pr-10 p-4">
        <SpanHeading>{cardData?.company_name}</SpanHeading>
        <button onClick={handleShow}>
          {!showItems ? (
            <PlusIcon className="h-8 w-8" />
          ) : (
            <MinusIcon className="h-8 w-8" />
          )}
        </button>
      </div>
      {showItems && (
        <div>
          <h5 className="pb-4 font-bold mr-12 text-2xl text-stone-700 pl-5">
            {cardData?.jobTitle}
          </h5>
          <h6 className="pb-4 font-bold mr-12 text-2xl text-stone-700 pl-5">
            {new Date(cardData?.startDate).getFullYear()} -
            {new Date(cardData?.endDate).getFullYear()}, {cardData?.jobLocation}
          </h6>
          <p className="pb-4 font-semibold mr-12 text-xl text-stone-500 pl-5">
            {cardData?.summary}
          </p>
          <ol className="pb-4 font-semibold mr-12 text-xl text-stone-500 pl-5 list-disc">
            {cardData?.bulletPoints.map((item) => (
              <li className="ml-5" key={item}>
                {item}{" "}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default TimelineCard;
