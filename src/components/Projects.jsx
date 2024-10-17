import React from 'react';

const projects = [
  {
    title: "Tic-Tac-Toe",
    description: "An intresting game which can be playable by two persons.",
    link: "https://n66kwx.csb.app/"
  },
  {
    title: "Pixabay",
    description: "It is photos generator, while you ask any photos it will give to us.",
    link: "https://45zcrh.csb.app/"
  },
  {
    title: "Schedule-Activities",
    description: "We can sechedule our activities after completing  our task we can delete that activity.",
    link: "https://6wfqc9.csb.app/"
  }
];

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
