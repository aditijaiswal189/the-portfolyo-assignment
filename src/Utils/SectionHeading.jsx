/* eslint-disable react/prop-types */
function SectionHeading({ children }) {
  return (
    <h3 className="text-blue-800 text-5xl border-solid border-b-[1px] border-blue-400 pb-6 font-bold ">
      {children}
    </h3>
  );
}

export default SectionHeading;
