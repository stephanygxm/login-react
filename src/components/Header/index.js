import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav id="link">
          <Link class="nav" exact to="/home">
            HOME
          </Link>
          <Link class="nav" to="/me">
            SOBRE MIM
          </Link>
          <Link class="nav" to="/music">
            MÚSICA FAV
          </Link>
          <Link id="sair" to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }
}
