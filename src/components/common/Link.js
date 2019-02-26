import React from "react";
import { Link } from "react-router-dom";

export default class Href extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.next(this.props.index);
  }

  render() {
    let className = "link nav__link";
    if (this.props.isActive) {
      className += " link_active";
    }

    return (
      <p className={className} onClick={this.nextPage}>
        <Link to={this.props.href}>{this.props.children}</Link>
      </p>
    );
  }
}
