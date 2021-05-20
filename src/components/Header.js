import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic1 from "../img/profilepic1.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img
          src={profilepic1}
          className="profilepic1"
          alt="a pic of myself"
        ></img>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hello World! My name is Andrew!",
            "I am a full stack web developer",
          ]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
