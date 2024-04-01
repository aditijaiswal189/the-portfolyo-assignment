/* eslint-disable react/prop-types */
function Filter({ setFilterBy, filterBy }) {
  return (
    <div className="flex items-center justify-between gap-5  m-auto font-bold text-stone-600 text-xl p-10 ">
      <button
        className={`${filterBy === "all" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("all");
        }}
      >
        ALL
      </button>
      <button
        className={`${filterBy === "reactjs" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("reactjs");
        }}
      >
        REACTJS
      </button>
      <button
        className={`${filterBy === "nextjs" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("nextjs");
        }}
      >
        NEXTJS
      </button>
      <button
        className={`${filterBy === "mern" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("mern");
        }}
      >
        MERN
      </button>
      <button
        className={`${filterBy === "css" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("css");
        }}
      >
        CSS
      </button>
      <button
        className={`${filterBy === "tailwindcss" ? " text-blue-700 border-solid border-b-[1px] border-blue-500" : ""} `}
        onClick={() => {
          setFilterBy("tailwindcss");
        }}
      >
        TAILWINDCSS
      </button>
    </div>
  );
}

export default Filter;
