import axios from 'axios';

const BASE_URL = 'http://localhost:8080/empleado';

class EmpleadoService{

    getAllEmpleados(){
        return axios.get(BASE_URL + "/all");
    }
    
    getEmpleadoById(empleadoId){
        return axios.get(BASE_URL + "/get-one/" + empleadoId);
    }

    createEmpleado(empleado){
        return axios.post(BASE_URL + "/save", empleado);
    }

    updateEmpleado (empleadoId, empleado){
        return axios.put(BASE_URL + "/update/" + empleadoId, empleado)
    }

    deleteEmpleado (empleadoId){
        return axios.delete(BASE_URL + "/delete/" + empleadoId)
    }

}

export default new EmpleadoService;
