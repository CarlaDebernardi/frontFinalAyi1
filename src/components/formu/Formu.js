import React, {useEffect, useState} from 'react'

import EmpleadoService from '../../services/EmpleadoService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Formu = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [antiguedad, setAntiguedad] = useState("");

  const navigate = useNavigate();
  const {empleadoId} = useParams();
  console.log(empleadoId)

  const saveOrUpdateEmpleado = (e) => {
    e.preventDefault();
    const empleado = {id, nombre, apellido, cargo, sucursal, antiguedad }; 


    if(empleadoId){
      EmpleadoService.updateEmpleado(empleadoId, empleado).then((response) =>{
        console.log(response.data);
        navigate("/empleado/all");
    }).catch(error=>{
        console.log(error)
    })

    } else{
      EmpleadoService.createEmpleado(empleado).then((response) =>{
        console.log(response.data);
        navigate("/empleado/all");
    }).catch(error=>{
        console.log(error)
    })
    }
    
  }

  useEffect (() =>{
    EmpleadoService.getEmpleadoById(empleadoId).then((response)=>{
        setId(response.data.id);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setCargo(response.data.cargo);
        setSucursal(response.data.sucursal);
        setAntiguedad(response.data.antiguedad);
    }).catch(error=>{
        console.log(error);
    })
  }, [])

 const titulo = () => {
    if (empleadoId){
        return <h2 className="text-center">ACTUALIZAR EMPLEADO</h2>
    }
    else{
        return <h2 className="text-center">CARGAR UN NUEVO EMPLEADO</h2>
    }
 }

  return (
    <div>
      <div className="container-fluid m-5">
        <h2 className="text-center">{titulo()}</h2>

        <div className="text-center container">
          <form class="formulario  ">
            <div class="form-group mb-2">
              <label className="form-label">Legajo</label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Nombre </label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Apellido </label>
              <input
                type="text"
                name="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Cargo </label>
              <input
                type="text"
                name="cargo "
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label"> Sucursal </label>
              <input
                type="text"
                name="sucursal"
                value={sucursal}
                onChange={(e) => setSucursal(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Antigüedad </label>
              <input
                type="text"
                name="antiguedad "
                value={antiguedad}
                onChange={(e) => setAntiguedad(e.target.value)}
              />
              <br />
            </div>

            <br />
            <br />
            <section class=" text-center container">
              <button
                className="btn btn-primary my-2 btn-lg"
                onClick={(e) => saveOrUpdateEmpleado(e)}
              >
                Guardar
              </button>
              &nbsp;
              <Link
                to="/empleado/all"
                className="btn btn-secondary my-2 btn-lg"
              >
                Volver
              </Link>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formu
