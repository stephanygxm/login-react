import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header/index";

import "./music.css";

import Beatles from "../../assets/imagem/beatles.jpg";

export default class Frase extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <p id="titulo">The Beatles</p>
        <img src={Beatles} />
        <p id="texto">
          Hey, Jude, don't make it bad <br />
          Take a sad song and make it better <br />
          Remember to let her into your heart <br />
          Then you can start to make it better <br />
          <br />
          Hey, Jude, don't be afraid <br />
          You were made to go out and get her <br />
          The minute you let her under your skin <br />
          Then you begin to make it better <br />
          <br />
          And anytime you feel the pain <br />
          Hey, Jude, refrain <br />
          Don't carry the world <br />
          Upon your shoulders <br />
          <br />
          For well you know that it's a fool <br />
          Who plays it cool <br />
          By making his world a little colder <br />
          Na na na na na na na na na <br />
          <br />
          Hey, Jude, don't let me down <br />
          You have found her now go and get her <br />
          Remember to let her into your heart <br />
          Then you can start to make it better <br />
          <br />
          So let it out and let it in <br />
          Hey, Jude, begin <br />
          You're waiting for someone to perform with <br />
          And don't you know that is just you? <br />
          <br />
          Hey, Jude, you'll do <br />
          The movement you need <br />
          Is on your shoulder <br />
          Na na na na na na na na na <br />
          <br />
          Hey, Jude, don't make it bad <br />
          Take a sad song and make it better <br />
          Remember to let her under your skin <br />
          Then you begin to make it better <br />
          <br />
          Better, better, better, better, better <br />
          <br />
          Na, na, na, na na na na, na na na na, hey Jude <br />
          Na, na, na, na na na na, na na na na, hey Jude <br />
          Na, na, na, na na na na, na na na na, hey Jude <br />
          Na, na, na, na na na na, na na na na, hey Jude <br />
          Na, na, na, na na na na, na na na na, hey Jude <br />
        </p>
      </div>
    );
  }
}
