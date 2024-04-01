import TimelineCard from "./TimelineCard";

/* eslint-disable react/prop-types */
function EducationDetails({ details = [] }) {
  console.log(details);
  if (details.length === 0) return <p>Loading...</p>;
  return (
    <div>
      {details.map((res) => (
        <TimelineCard cardData={res} key={res?._id} />
      ))}
    </div>
  );
}

export default EducationDetails;
