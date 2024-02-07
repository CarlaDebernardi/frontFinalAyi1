import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

class UsuarioService{

   
    ingresarUsuario(usuario){
        return axios.post(BASE_URL + "/ingresar", usuario);
    }

   
}

export default new UsuarioService;
