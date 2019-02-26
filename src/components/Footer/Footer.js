import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      socials: [
        {
          name: "facebook"
        },
        {
          name: "viber"
        },
        {
          name: "vk"
        }
      ]
    };
  }

  eachIcon(icon, i) {
    return <div className={"icon icon-" + icon.name} />;
  }

  render() {
    return (
      <div className="social-icons">
        {this.state.socials.map(this.eachIcon.bind(this))}
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu footer__menu">
        <p className="title-menu">{this.props.children}</p>
        <ul className="items-menu">
          {this.props.items.map((item, i) => {
            return (
              <li className="item">
                <Link to={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      menus: [
        {
          name: "Основное",
          items: [
            {
              name: "Каталог",
              href: "/opportunity"
            },
            {
              name: "О проекте",
              href: "/contact"
            },
            {
              name: "Главная",
              href: "/"
            }
          ]
        },
        {
          name: "Аккаунт",
          items: [
            {
              name: "Создать аккаунт",
              href: "/auth"
            },
            { name: "Войти", href: "/auth" }
          ]
        },
        {
          name: "Контакты",
          items: [
            {
              name: "+555 555 555",
              href: ""
            },
            {
              name: "fhfgn@xgn.xdfn",
              href: ""
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="footer app__footer">
        <section className="footer__content">
          <div className="logo footer__logo">Logo</div>
          <div className="social footer__social">
            <p className="title-menu">Мы в социальных сетях</p>
            <Social />
          </div>
          {this.state.menus.map((menu, i) => {
            return <Menu items={menu.items}>{menu.name}</Menu>;
          })}
        </section>
      </div>
    );
  }
}
