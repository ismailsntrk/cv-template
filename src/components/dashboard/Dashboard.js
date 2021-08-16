import React from "react";
import "./Dashboard.css";
import myPhoto from "../../assets/newImage.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import PersonPinOutlinedIcon from "@material-ui/icons/PersonPinOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Dashboard = () => {
  return (
    <div id="all">
      <div id="main-page">
        <div id="main-text">
          <div id="main-section">
            <div className="title">
              <PersonPinOutlinedIcon
                style={{ fontSize: "1.5em", marginRight: "0.2em" }}
              ></PersonPinOutlinedIcon>
              CAREER PROFILE
            </div>
            <div className="text">
              I like to build front-end applications, but I am also open to
              being part of coding in backend if it is needed and really
              charming.
              <br></br>
              <br></br>I describe myself as an open minded, quick learner,
              adaptive and hardworking person. I like to try new challenges,
              thus I'm trying to catch up with new technologies and new
              libraries.
            </div>
          </div>
          <div id="main-section">
            <div className="title">
              <SettingsEthernetIcon
                style={{ fontSize: "1.5em", marginRight: "0.2em" }}
              ></SettingsEthernetIcon>{" "}
              SKILLS & PROFICIENCY
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> JavaScript</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "70%" }} id="bar-one"></div>
                <div style={{ width: "30%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> ReactJS</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "75%" }} id="bar-one"></div>
                <div style={{ width: "25%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> HTML5 & SCSS</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "65%" }} id="bar-one"></div>
                <div style={{ width: "35%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> Node.js</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "60%" }} id="bar-one"></div>
                <div style={{ width: "40%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> MongoDB</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "70%" }} id="bar-one"></div>
                <div style={{ width: "30%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> Redux</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "60%" }} id="bar-one"></div>
                <div style={{ width: "40%" }} id="bar-two"></div>{" "}
              </div>
            </div>
            <div id="skills">
              {" "}
              <div id="text-skills"> Angular</div>{" "}
              <div id="bar">
                {" "}
                <div style={{ width: "25%" }} id="bar-one"></div>
                <div style={{ width: "75%" }} id="bar-two"></div>{" "}
              </div>
            </div>
          </div>

          <div id="main-section">
            <div className="title">Certification</div>
            <div className="text">
              <div className="part-text" style={{ flexDirection: "column" }}>
                <div>Responsive Web Design</div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://freecodecamp.org/certification/fccbfa92d49-bae4-4ee6-921b-0947bdb6300b/responsive-web-design"
                  style={{ color: "#8D99AE", textDecorationLine: "none" }}
                >
                  Link
                  &nbsp; (May 28, 2020)
                </a>
              </div>

              <div className="part-text" style={{ flexDirection: "column" }}>
                <div>JavaScript Algorithms and Data Structures</div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://freecodecamp.org/certification/fccbfa92d49-bae4-4ee6-921b-0947bdb6300b/javascript-algorithms-and-data-structures"
                  style={{ color: "#8D99AE", textDecorationLine: "none" }}
                >
                 Link
                  &nbsp; (July 24, 2020)
                </a>
              </div>

              <div className="part-text" style={{ flexDirection: "column" }}>
                <div>Front End Libraries</div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://freecodecamp.org/certification/fccbfa92d49-bae4-4ee6-921b-0947bdb6300b/front-end-libraries"
                  style={{ color: "#8D99AE", textDecorationLine: "none" }}
                >
                  Link
                  &nbsp; (May 28, 2020)
                </a>
              </div>
              <div className="part-text" style={{ flexDirection: "column" }}>
                <div>Intermediate Level English Certificate</div>
                <div style={{color:'gray'}}>British Town Language Schools</div>
               
              </div>
            </div>
          </div>
          <div id="main-section">
            <div className="title">Projects</div>
            <div className="text">
              <a  href="https://goezgmbh.com/#/"
                target="_blank"
                rel="noopener noreferrer" className="part-text" style={ {color:'black' ,  flexDirection: "column" }}>
                <div style={{   fontWeight:'bold'}}>Goezgmbh.com</div>
                <div style={{ color: "#8D99AE" }}>
                  I made this website as a freelancer.
                </div>
                <div style={{ color: "#8D99AE" }}>
                  ReactJs -- NodeJs -- MongoDB -- Authentication -- Five
                  Different Languages
                </div>
              </a>
              <a  href="https://github.com/ismailsntrk?tab=repositories"
                target="_blank"
                rel="noopener noreferrer" className="part-text" style={{color:'black', flexDirection: "column" }}>
                <div style={{   fontWeight:'bold'}}>Movie Website Example</div>
                <div style={{ color: "#8D99AE" }}>
                  All Codes Uploaded at Github.
                </div>
                <div style={{ color: "#8D99AE" }}>
                  ReactJs -- Redux -- NodeJs -- MongoDB -- Authentication
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="summary">
          <div id="photo">
            <img id="my-photo" src={myPhoto} alt="myPicture"></img>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
              {" "}
              İsmail Şentürk
            </div>
            <div>Junior Frontend Developer</div>
          </div>
          <div id="other">
            <div id="other-part">
              <a
                href="mailto:ismailsntrk0@gmail.com"
                style={{ marginTop: "0.2em" }}
                className="part-text"
              >
                <div style={{ color: "white" }}>
                  {" "}
                  <MailOutlineIcon></MailOutlineIcon>&nbsp;{" "}
                </div>
                <div style={{ color: "white" }}>ismailsenturk102</div>
              </a>
              {/* <a
                href="https://www.linkedin.com/in/ismail-%C5%9Fent%C3%BCrk-56090b179/"
                target="_blank"
                rel="noopener noreferrer"
                className="part-text"
                
              >
                <div style={{ color: "white" }}>
                  {" "}
                  <LinkedInIcon></LinkedInIcon>  &nbsp;
                </div>
                <div style={{ color: "white" }}>LinkedIn</div>
              </a> */}
              <a
                href="https://github.com/ismailsntrk?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="part-text"
                style={{ marginTop: "0.2em" }}
              >
                <div style={{ color: "white" }}>
                  {" "}
                  <GitHubIcon></GitHubIcon> &nbsp;{" "}
                </div>
                <div style={{ color: "white" }}>GitHub</div>
              </a>
            </div>
            <div id="other-part">
              <div id="part-title">ABOUT ME</div>
              <div className="part-text">
                <div style={{ color: "lightgray" }}>Nationality:</div>
                <div style={{ color: "white" }}>Turkey</div>
              </div>
              <div className="part-text">
                <div style={{ color: "lightgray" }}>Birth Place:</div>
                <div style={{ color: "white" }}>Uşak</div>
              </div>
              <div className="part-text">
                <div style={{ color: "lightgray" }}>Birthday:</div>
                <div style={{ color: "white" }}>25.02.1997</div>
              </div>
              <div className="part-text">
                <div style={{ color: "lightgray" }}>Marital Status:</div>
                <div style={{ color: "white" }}>Single</div>
              </div>
            </div>
            <div id="other-part">
              <div id="part-title">EDUCATION</div>
              <div className="part-text" style={{ flexDirection: "column" }}>
                <div style={{ color: "white" }}> Bachelor's degree</div>
                <div style={{ color: "white" }}>Mechatronics Engineering</div>
                <div style={{ color: "lightgray" }}>
                  Celal Bayar University &nbsp; (2015-2021)
                </div>
              </div>
            </div>
            <div id="other-part">
              <div id="part-title">LANGUAGE</div>
              <div className="part-text">
                <div style={{ color: "white" }}>Turkish&nbsp;</div>
                <div style={{ color: "lightgray" }}>(Native)</div>
              </div>
              <div className="part-text">
                <div style={{ color: "white" }}>English &nbsp;</div>
                <div style={{ color: "lightgray" }}> (Intermediate) </div>
              </div>
             
            </div>
            <div id="other-part">
              <div id="part-title">INTERESTS</div>
              <div className="part-text">
                <div style={{ color: "white" }}>Camping</div>
              </div>
              <div className="part-text">
                <div style={{ color: "white" }}>Playing Guitar</div>
              </div>
              <div className="part-text">
                <div style={{ color: "white" }}>Fishing</div>
              </div>
              <div className="part-text">
                <div style={{ color: "white" }}>Computer Game</div>
              </div>
            </div>
            <div id="other-part">
              <div id="part-title">LAST UPDATE</div>
              <div className="part-text">
                <div style={{ color: "white" }}>3 July 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
