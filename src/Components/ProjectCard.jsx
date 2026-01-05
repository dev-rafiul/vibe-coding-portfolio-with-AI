import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <div className="card">
    <img src={project.image} />
    <h3>{project.name}</h3>
    <Link to={`/projects/${project.id}`}>View Details</Link>
  </div>
);

export default ProjectCard;
