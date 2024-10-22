import { Link } from "react-router-dom";
import { AvatarSVG, Dribble, Email, Figma, Linkedin } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
{/*               <img src={AvatarSVG} alt="avatar" className="avatar" /> */}
              <h1 className="header-name text-white">
                Edgar Setyan, <br /> Aspiring Software Designer
              </h1>
            </div>
            <p className="header-text text text-white">
           Recent BSc Honours Computer Science graduate from York University with a strong passion for software engineering and problem-solving.
           Eager to build impactful solutions and continuously expand my knowledge.
           Thrives in collaborative environments and enjoys tackling new challenges in technology.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">edgar.setyan23@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+1 (647) 281-1415</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Toronto, Ontario</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <span className="text">
                   https://github.com/EddySetyan23
                  </span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
{/*                 <li className="social-item"> */}
{/*                     <Link to="/"> */}
{/*                         <img src={Dribble} /> */}
{/*                         <span className="tooltip text">Dribble</span> */}
{/*                     </Link> */}
{/*                 </li> */}
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/edgar-setyan-809bb0170/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" />
                        <span className="tooltip text">LinkedIn</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="mailto:edgar.setyan23@gmail.com">
                        <img src={Email} alt="Email" />
                        <span className="tooltip text">Email</span>
                    </a>
                </li>
{/*                 <li className="social-item"> */}
{/*                     <Link to="/"> */}
{/*                         <img src={Figma} /> */}
{/*                         <span className="tooltip text">Figma</span> */}
{/*                     </Link> */}
{/*                 </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
