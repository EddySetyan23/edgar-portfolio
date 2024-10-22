import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Hobbies = () => {
  return (
    <div className="hobbies-sc resume-block">
      <div className="container">
        <div className="hobbies-content dotted-border-left">
          <Title titleText={"Hobbies & Interests"} />
          <div className="hobbies-list grid">
            {[
              {
                id: 1,
                icon: "/icons/coding.svg",
                name: "Competitive Programming",
                description: "HackerRank, LeetCode",
              },
              {
                id: 2,
                name: "Tech Certifications",
                description: "GitHub, Docker",
              },
              {
                id: 3,
                name: "Physical Exercise",
              },
              {
                id: 4,
                icon: "/icons/ml.svg",
                name: "Reading Books",
              },
            ].map((item) => (
              <HobbiesItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

const HobbiesItem = ({ item }) => {
  return (
    <div className="hobbies-item" key={item.id}>
      {item.icon && (
        <div className="hobbies-icon">
          <img src={item.icon} alt="" />
        </div>
      )}
      <div className="hobbies-info">
        <h3 className="hobbies-name">{item.name}</h3>
        {item.description && (
          <p className="hobbies-description text">{item.description}</p>
        )}
      </div>
    </div>
  );
};

HobbiesItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};