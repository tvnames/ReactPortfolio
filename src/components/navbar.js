import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemId: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <Navitem item="About" tolink="/"></Navitem>
          <Navitem item="Services" tolink="/about"></Navitem>
          <Navitem item="Portfolio" tolink="/education"></Navitem>
          <Navitem item="Skills" tolink="/skills"></Navitem>
          <Navitem item="Contact" tolink="/contact"></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
