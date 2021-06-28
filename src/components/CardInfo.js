import React, { Component } from "react";
import Skills from "../contents/Skills";

class CardInfo extends Component {
  componentDidMount() {
    window.location.href = "https://github.com/hdezbriant/AllTrails-AND-Parks";
  }
  render() {
    return (
      <div>
        <h4>AllTrails-AND-Parks</h4>
      </div>
    );
  }
  componentDidMount() {
    window.location.href = "https://github.com/tvnames/ormEcommerce";
  }
  render() {
    return (
      <div>
        <h4>ormEcommerce</h4>
      </div>
    );
  }
  componentDidMount() {
    window.location.href = "https://bestmexsd-appage.herokuapp.com/";
  }
  render() {
    return (
      <div>
        <h4>Best Mex SD</h4>
      </div>
    );
  }
}

export default CardInfo;
