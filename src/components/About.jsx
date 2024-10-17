import React from 'react';
import photo from "../Asset/jagadish.png"

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am Tummalapalli Jagadish, an aspiring software engineer with a passion for technology and continuous learning. I enjoy problem-solving and working collaboratively in a team environment. My goal is to contribute my skills and knowledge to impactful projects.
        </p>
      </div>
      <div className="about-photo">
        <img src={photo} alt="Tummalapalli Jagadish" />
      </div>
    </section>
  );
};

export default About;
