import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import LassondeLogo from "../../assets/images/lassonde-logo.png"; // Correct path to your logo

const Education = () => {
  return (
    <div className="education-sc resume-block">
      <div className="container">
        <div className="education-content dotted-border-left">
          <Title titleText={"Education"} />
          <div className="education-list grid">
            {DATA.educationalExperiences && DATA.educationalExperiences.length > 0 ? (
              DATA.educationalExperiences.map((item) => (
                <EducationItem key={item.id} item={item} />
              ))
            ) : (
              <p>No educational experiences available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

const EducationItem = ({ item }) => {
  return (
    <div className="education-item">
      <div className="exp-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="exp-position flex items-center flex-wrap">
        <p className="edu-course">{item.course}</p>
      </div>
      <div className="exp-company flex items-center flex-wrap">
        <div className="company-logo">
          <img
            src={item.logo || LassondeLogo} // If no logo is specified, use Lassonde logo as a placeholder
            alt={item.institution}
            className="edu-logo"
          />
        </div>
        <p className="company-name">{item.institution}</p>
      </div>
      {item.degree && <p className="exp-description text">{item.degree}</p>}
    </div>
  );
};

EducationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    degree: PropTypes.string,
    logo: PropTypes.string, // Optional logo
  }).isRequired,
};
