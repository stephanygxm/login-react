import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  state = {
    usuario: "",
    senha: "",
    erro: ""
  };

  setUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  setSenha = (event) => {
    this.setState({ senha: event.target.value });
  };

  fazerLogin = (event) => {
    event.preventDefault();
    if (this.state.usuario === "usuario" && this.state.senha === "123") {
      this.setState({ erro: "" });
      this.props.history.push("/home");
    } else {
      this.setState({ erro: "Usuário e/ou Senha inválidos." });
    }
  };
  render() {
    return (
      <div class="login">
        <h1>Login</h1>
        <form>
          {this.state.erro && <p id="error">{this.state.erro}</p>}
          <label>Usuário: </label>
          <input
            type="text"
            placeholder="Digite seu usuário"
            value={this.state.usuario}
            onChange={this.setUsuario}
          />
          <br />
          <br />
          <label>Senha: </label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={this.state.senha}
            onChange={this.setSenha}
          />
          <br />
          <br />
          <button onClick={this.fazerLogin}> Entrar </button>
        </form>
      </div>
    );
  }
}
