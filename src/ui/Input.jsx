/* eslint-disable react/prop-types */
function Input({ placeholder, className = "" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={` w-[100%] p-2 m-2 rounded-xl border-solid border-[1px] border-blue-400 active:border-blue-500 active:outline-2 active:outline-blue-600 hover:outline-blue-600 text-xl text-stone-800 ${className}`}
    />
  );
}

export default Input;
