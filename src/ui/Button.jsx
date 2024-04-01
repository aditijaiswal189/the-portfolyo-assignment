/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="block font-extrabold text-xl p-1 mb-3 text-blue-500 border-solid border-[1px] border-blue-400 px-1 rounded-xl hover:text-stone-100 tracking-wider active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 ">
      {children}
    </button>
  );
}

export default Button;
