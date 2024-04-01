/* eslint-disable react/prop-types */
function SpanHeading({ children }) {
  return (
    <h4 className="text-blue-800 text-2xl border-solid border-b-[1px] border-blue-400 pb-4 font-bold mr-12 ">
      {children}
    </h4>
  );
}

export default SpanHeading;
