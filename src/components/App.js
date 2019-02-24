import React from "react";
import Header from "./Header/Header";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}
