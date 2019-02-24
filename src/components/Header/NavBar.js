import React from "react";
import Link from "../common/Link";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          text: "О проекте",
          href: "#",
          isActive: false
        },
        {
          text: "Ваши возможности",
          href: "#",
          isActive: true
        },
        {
          text: "Олимпиады",
          href: "#",
          isActive: false
        },
        {
          text: "Учебные курсы",
          href: "#",
          isActive: false
        },
        {
          text: "Контакты",
          href: "#",
          isActive: false
        }
      ]
    };

    this.next = this.next.bind(this);
  }

  next(index) {
    var arr = this.state.links;
    arr.filter(link => {
      if (link.isActive) {
        link.isActive = false;
      }
    });
    arr[index].isActive = true;
    this.setState({ links: arr });
  }

  eachLink(link, i) {
    return (
      <Link
        key={i}
        index={i}
        isActive={link.isActive}
        href={this.next}
        next={this.next}
      >
        {link.text}
      </Link>
    );
  }

  render() {
    return (
      <div className="nav header__nav">
        <div className="logo nav__logo">Logo</div>
        {this.state.links.map(this.eachLink.bind(this))}
      </div>
    );
  }
}
