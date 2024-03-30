/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function ProjectBox({ projectsData, seqNumber }) {
  return (
    <div>
      <div>
        <img src={projectsData.image.url} alt={projectsData.image.public_id} />
      </div>
      <div>
        <h3>
          <a href="#">{projectsData.title}</a>
        </h3>
      </div>
    </div>
  );
}

export default ProjectBox;
