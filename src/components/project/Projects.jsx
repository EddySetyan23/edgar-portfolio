import { FaLink } from "react-icons/fa6";
import DATA from "../../constant/mockData"; // Ensure this is the correct path
import Title from "../common/Title"; // Ensure this path is correct
import PropTypes from "prop-types";
import { DiamondLgBlue, DiamondLgGreen, DiamondLgOrange, DiamondLgPink, DiamondLgYellow } from "../../assets/image"; // Ensure these paths are correct

const Projects = () => {
  return (
    <div className="project-sc resume-block">
      <div className="container">
        <div className="project-content dotted-border-left">
          <Title titleText={"Personal Projects"} />
          <div className="project-list grid">
            {DATA.personalProjects?.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = ({ project }) => {
  const showDiamondImage = (color) => {
    switch (color) {
      case "Blue":
        return DiamondLgBlue;
      case "Green":
        return DiamondLgGreen;
      case "Orange":
        return DiamondLgOrange;
      case "Pink":
        return DiamondLgPink;
      case "Yellow":
        return DiamondLgYellow;
      default:
        return null;
    }
  };

  return (
    <div className="project-item">
      {/* Only render the time section if there is a start date */}
      {project.startDate && (
        <div className="exp-time flex items-center">
          <span className="start-time">{project.startDate}</span>
        </div>
      )}
      <div className="exp-position flex items-center flex-wrap">
        <p className="exp-position-text">{project.position}</p>
        <div className="diamond-shapes-group">
          {project.diamondColors?.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt={color} />
          ))}
        </div>
      </div>
      <div className="exp-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={project.company.logo} alt={project.company.name} />
        </div>
        <p className="company-name">{project.company.name}</p>
        {project.company.info && <p className="company-info text">{project.company.info}</p>}
      </div>
      <p className="exp-description text">{project.description}</p>
      <div className="exp-links">
        {project.links?.map((link) => (
          <a key={link.label} href={link.url} className="text-mauve" target="_blank" rel="noopener noreferrer">
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    position: PropTypes.string.isRequired,
    diamondColors: PropTypes.array,
    company: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.string,
    }),
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};
