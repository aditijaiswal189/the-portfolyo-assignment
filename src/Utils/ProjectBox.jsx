/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function ProjectBox({ projectData }) {
  return (
    <div>
      <div>
        <img src={projectData?.image.url} alt={projectData?.image?.public_id} />
      </div>
      <div>
        <h3 className="pt-4 pb-2 font-bold text-2xl text-stone-700 ">
          <a href="#">{projectData?.title}</a>
        </h3>
        <p className=" font-bold text-xl text-blue-600 ">
          {projectData?.techStack.join(",")}
        </p>
        <p className="py-5 font-medium text-lg text-stone-500 ">
          {projectData?.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectBox;
