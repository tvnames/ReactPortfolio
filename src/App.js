import React from "react";
import "./App.css";
import "./contents/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/CardInfo";
import Navbar from "./components/navbar";
import Skills from "./contents/Skills";
import Home from "./contents/Home";
import About from "./contents/About";
import Contact from "./contents/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
