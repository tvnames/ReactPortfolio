import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <h2>I've got what you need!</h2>
        <h1>I'm Andrew Parsons</h1>
        <h3>
          Full Stack Web <u>Developer</u>
        </h3>
        <br></br>
        <p>
          I am 30 years old and a recent graudate of the Coding Bootcamp! I have
          had many previous jobs including being in the Navy, working as a
          delivery driver overnight, to working in door-to-door sales. I am
          originally from Indiana and I moved to California in 2014. I have
          lived south of the border in Tijuana, Mx for several years before
          meeting my wonderful wife and now we live together in Imperial Beach.
          I enjoy videogames and coding. I would love to be a part of your dev
          team!
        </p>
      </div>
    );
  }
}

export default About;
