import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header/index";

import "./me.css";

import Eu from "../../assets/imagem/eu.jpg";

export default class Frase extends Component {
  render() {
    return (
      <div id="me">
        <Header />
        <p id="titulo">Stephany Muniz</p>
        <p id="sobre">
          20 anos, segundo grau completo pela EREM Porto Digital. Pesquisadora
          nata e amante da tecnologia, sou uma pessoa que está sempre em busca
          de mais conhecimento e motivada pelo desejo de aprender coisas novas,
          enxergo a tecnologia como uma aliada e fonte de inspiração para
          inovação. Sem experiência profissional, mas sempre com disposição e
          força de vontade para encarar desafios e buscar soluções para cada um
          deles.
        </p>
        <img id="eu" src={Eu} />
      </div>
    );
  }
}
