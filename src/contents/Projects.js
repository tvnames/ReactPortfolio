import React, { Component } from "react";
import CardInfo from "../components/CardInfo";
class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>

        <CardInfo title="All Trails and Parks" />
        <CardInfo title="Password_Generator" />
        <CardInfo title="Stormy-shore-76414" />
        <CardInfo title="ormEcommerce" />
        <CardInfo title="InfoFountain" />
      </div>
    );
  }
}

export default Projects;
