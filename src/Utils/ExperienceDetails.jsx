/* eslint-disable react/prop-types */
import TimelineCard from "./TimelineCard";

function ExperienceDetails({ details = [] }) {
  console.log(details);
  if (details.length === 0) return <p>Loading...</p>;
  return (
    <div>
      {" "}
      {details.map((res) => (
        <TimelineCard cardData={res} key={res?._id} />
      ))}
    </div>
  );
}

export default ExperienceDetails;
