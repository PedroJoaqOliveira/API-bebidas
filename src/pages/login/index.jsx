import {useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
export default function Login() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([
    { id: 1, email: "pedro@email.com", password: "123456" },
    { id: 2, email: "beto@email.com", password: "Beto1002" },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verificarLogin(event) {
    event.preventDefault();

    const encontrarUsuario = usuarios.find(
      (element) => element.email === email && element.password === password
    );

    if (!encontrarUsuario) {
      return alert("Usuario não encontrado");
    }

    navigate("/Home");
  }
  return (
    <div className="conteiner-login">
      <div className="card-login">
        <img src="src/pages/img/logo.png" />
        <h1>Login</h1>
        <form className="card-login" onSubmit={verificarLogin}>
          <input className="input-login"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className="input-login"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="b-navigate" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
