import React from "react";
import NavBar from "./NavBar";
import Button from "../common/Button";
import "./header.css";

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header app__header">
        <div className="header__btns">
          <Button class="header__btn btn_white">Регистрация</Button>
          <Button class="header__btn btn_orange">Войти</Button>
        </div>
        <NavBar />
      </div>
    );
  }
}
