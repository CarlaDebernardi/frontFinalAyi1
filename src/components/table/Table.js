import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Table.css";
import EmpleadoService from '../../services/EmpleadoService';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const [empleado, setEmpleado] = useState ([]);
    const [error, setError] = useState("");
    const { titulo } = props;
    
    useEffect(() => {
    listarClientes()
    },[])

    const listarClientes = () => {
      EmpleadoService.getAllEmpleados()
        .then(response => {
          const empleados = response.data;
          if (empleados.length === 0) {
            setError("No hay empleados para mostrar");
          } else {
            setEmpleado(empleados);
          }
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const deleteEmpleado = (empleadoId) => {
      EmpleadoService.deleteEmpleado(empleadoId)
        .then((response) => {
          listarClientes();
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
     <div>
      <div>
      <h2 className="text-center">{titulo}</h2>
      </div>
    <table  className="table table-bordered border-primary text-align-center">
    <tr>
        <th>Nro LEGAJO</th>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>CARGO</th>
        <th>SUCURSAL</th>
        <th>ANTIGÜEDAD</th>
        <th>ACCIONES</th>
    </tr>
    <tbody>

       { empleado.map(
             empleado=>
        <tr key={empleado.id}>
            <td>{empleado.id}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.cargo}</td>
            <td>{empleado.sucursal}</td>
            <td>{empleado.antiguedad}</td>
            <td>
              <Link className="btn btn-outline-success" to={`/empleado/update/${empleado.id}`}>Actualizar</Link> 
              &nbsp; &nbsp;
              <buttom type="button" className="btn btn-outline-danger" onClick ={()=> deleteEmpleado(empleado.id)}> Eliminar </buttom>
            </td>
            i 
        </tr>
        )
        }
        </tbody>
        </table>
        {error && <p className="text-danger mt-3 text-center"><strong>{error}</strong></p>}
        <section className="py-5 text-center container"/>
            <div className="col-lg-6 col-md-8 mx-auto">
                <Link to="/empleado/save "className="btn btn-primary my-3 btn-lg">Nuevo Empleado</Link>
                
                </div>    
        
</div>
  )
}

export default Table
