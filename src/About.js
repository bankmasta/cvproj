import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div>
      <h2>About Page</h2>
      <p>Hello, I'm {props.name}, and this is my personal website. I am a student with a passion for IT. Here, you can learn more about me, my experiences, and the skills I bring to the table.</p>
      <p>I'm studying {props.studySubject} </p>
    </div>
  );
};

export default About;
