import React from "react";

export default class Link extends React.Component {
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
      <a className={className} href={this.href} onClick={this.nextPage}>
        {this.props.children}
      </a>
    );
  }
}
