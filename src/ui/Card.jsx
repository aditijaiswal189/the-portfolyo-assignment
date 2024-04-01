/* eslint-disable react/prop-types */
function Card({ children, text }) {
  return (
    <div className="border-solid border-[1px] border-blue-400 rounded-lg p-6 text-center font-medium text-xl shadow-lg">
      <span className="flex justify-center p-6">{children}</span>
      <p>{text}</p>
    </div>
  );
}

export default Card;
