import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./ayi-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Login.css";
import UsuarioService from "../../services/UsuarioService";

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
    
  const ingresar = async (e) => {
    e.preventDefault();
    const usuario = { nombre, password };
    try {
      const response = await UsuarioService.ingresarUsuario(usuario);
      console.log(response.data);

      if (response.status === 200) {
        navigate("/empleado/all");
    
      }
    } catch (error) {
      setError("El nombre o la constraseña no pertenecen a un usuario registrado.Intente nuevamente.");
    }
  };
  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form  onSubmit={ingresar}>
          <div>
            <img
              className="img"
              src={logo}
              alt=""
              width="100"
              height="100"
              class="rounded mx-auto d-block"
            />
            <br></br>
            <h1 className="h3 mb-3 fw-normal" align-center>
              Por favor, ingresá
            </h1>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Ingresá tu Username"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Ingresá tu Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Recuérdame
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Ingresar
          </button>

          {error && <p className="text-danger mt-3 text-center"><strong>{error}</strong></p>}
        </form>
      </main>
    </div>
  );
};

export default Login;
