import React from "react";
import "./main.css";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Olympaid from "./Olympaid/Olympaid";

class Navigator extends React.Component {
  render() {
    return <div className="navigator main__navigator">Главная / Олимпиады</div>;
  }
}

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main app__main">
        <Navigator />

        <section className="main__section section">
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="/olympaids" component={Olympaid} />
        </section>
      </div>
    );
  }
}
