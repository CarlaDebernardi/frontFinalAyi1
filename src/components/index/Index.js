import React from "react";
import img from "./descarga__1_-removebg-preview.png";
import { Link} from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <div className=" d-flex align-items-center justify-content-center">
        <img className="imagen" src={img} alt="imagenAyi" height={300}></img>
      </div>
      <div className=" d-flex align-items-center justify-content-center">
        <div>
          <Link className="btn btn-primary my-2 btn-lg" to="/ingresar">
            Ingresar
          </Link>
        </div>
        &nbsp;
        &nbsp;
        <div>
          <Link
            to="/ingresar"
            className="btn btn-secondary my-2 btn-lg"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
