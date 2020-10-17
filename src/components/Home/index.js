import React, { Component } from "react";
import Header from "../../components/Header/index";
import { Link } from "react-router-dom";

import "./home.css";

export default class Home extends Component {
  voltar = (event) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div class="home">
        <Header />
        <h2>Olá, seja bem vindx a minha página!</h2>
        <br />
        <p>Descubra um pouco mais sobre mim clicando em algum link abaixo:</p>
        <Link class="link" to={"/me"} title="Clique aqui">
          {" "}
          Conheça um pouco mais sobre mim{" "}
        </Link>{" "}
        <br />
        <Link class="link" to={"/music"} title="Clique aqui">
          {" "}
          Minha música favorita{" "}
        </Link>
      </div>
    );
  }
}
