import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Serra Encantada</h1>
        <p className="Turismo">Turismo Nova Friburgo</p>
        <div className="input-field">
          <input
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="E-mail..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="inputPassword"
            id="inputPassword"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" name="lembrar de mim" id="LembrarDeMim" />
            Lembrar de Mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <div>
          <button type="submit">Entrar</button>
        </div>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
