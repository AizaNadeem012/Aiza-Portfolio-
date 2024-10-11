import React from "react";
import './About.css'
import newimg from '../../assets/newimg.png'
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={newimg} alt="" className="myimg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am skilled frontend developer, excelling in crafting responsive
              and user-friendly web interfaces.
            </p>
            <p>
              My Passion for frontend development is not only but also in the
              enthusiasm and dedication I bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML , CSS </p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }}></hr>
            </div>{" "}
            <div className="about-skill">
              <p> Typescript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>{" "}
            <div className="about-skill">
              <p>Next JS </p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achievements">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievements">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievements">
          <h1>1+</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
