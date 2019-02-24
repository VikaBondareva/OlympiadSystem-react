import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={"btn " + this.props.class}>
        {this.props.children}
      </button>
    );
  }
}
