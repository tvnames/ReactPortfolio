import React, { Component } from "react";
import Social from "../components/Social";
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Let's Get In Touch!</h1>
        <h2 className="mt-0">
          Ready to start your next project with me? Give me a call or send me an
          email and I will get back to you as soon as possible!
        </h2>
        <h3> Email : parsonsaaa@gmail.com</h3>
        <h3>LinkedIn : www.linkedin.com/in/andrew-parsons-654359141</h3>
        <h3>Phone : +1 619-796-8418</h3>
        <h3>
          Resume :
          https://drive.google.com/file/d/162gI0CEPwWYpGVWuzF17TeHOJdzXO8a6/view?usp=sharing{" "}
        </h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
