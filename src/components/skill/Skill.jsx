import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={"Skills"} />
          <div className="skill-list grid">
            {[
              {
                id: 1,
                name: "Programming languages",
                description: "Java, Python, C, JavaScript",
              },
              {
                id: 2,
                name: "Frameworks",
                description: "Spring Boot, React, Node.js",
              },
              {
                id: 3,
                name: "Databases",
                description: "MySQL, PostgreSQL",
              },
              {
                id: 4,
                name: "Cloud platforms",
                description: "AWS (EC2, S3, Lambda, RDS)",
              },
              {
                id: 5,
                name: "Developer tools",
                description: "Docker, Kubernetes, Unix/Linux, Agile workflow, CI/CD, Test-Driven Development",
              },

            ].map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const SkillItem = ({ item }) => {
  return (
    <div className="skill-item text-center" key={item.id}>
      <div className="skill-info">
        <h3 className="skill-name">{item.name}</h3>
        <p className="skill-description text">{item.description}</p>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};