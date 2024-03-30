/* eslint-disable react/prop-types */
function SkillsBox({ skillsData }) {
  const style = { width: `${skillsData.percentage}%` };
  return (
    <div className="m-4 p-2">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img
            src={skillsData.image.url}
            alt={skillsData.image.public_id}
            className="w-14 h-14 mr-3"
          />
          <h5 className="font-bold text-xl text-stone-800">
            {skillsData.name}
          </h5>
        </div>

        <div>
          <span className="font-bold text-xl text-stone-800">
            {skillsData.percentage}
          </span>
          <span className="text-blue-500 font-bold ">%</span>
        </div>
      </div>
      <p className="text-stone-500 text-xl  tracking-tighter w-[90%] text-left py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        impedit dolorum asperiores animi iure
      </p>
      <div className="bg-gray-300  w-full mr-4 rounded-full h-4.5">
        <div
          className={`bg-blue-500 h-4.5 rounded-full text-right text-sm text-stone-50 p-1 `}
          style={style}
        >
          {skillsData.percentage} %
        </div>
      </div>
    </div>
  );
}

export default SkillsBox;
