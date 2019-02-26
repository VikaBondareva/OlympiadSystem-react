import React from "react";
import Href from "../common/Link";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          text: "Главная",
          href: "/",
          isActive: false
        },
        {
          text: "Ваши возможности",
          href: "/opportunity",
          isActive: true
        },
        {
          text: "Олимпиады",
          href: "/olympaids",
          isActive: false
        },
        {
          text: "Учебные курсы",
          href: "/courses",
          isActive: false
        },
        {
          text: "Контакты",
          href: "/contact",
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
      <Href
        key={i}
        index={i}
        isActive={link.isActive}
        href={link.href}
        next={this.next}
      >
        {link.text}
      </Href>
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
