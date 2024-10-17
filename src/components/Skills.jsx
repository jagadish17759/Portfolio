import React from 'react';

const skills = [
  'Java',
  'HTML/CSS',
  'JavaScript',
  'ReactJS',
  'VS Code',
  'Leadership',
  'Problem-solving',
  'Communication'
];

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
