import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Formu from './components/formu/Formu';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Table from './components/table/Table';
import Inicio from './components/inicio/Inicio';

function App() {
  const tituloTabla = "Listado de Empleados";
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='container'> 
       <Routes>
       <Route path='/' element={<Inicio/>}></Route>
        <Route path='/ingresar' element={<Login/>}></Route>
        <Route path='/empleado/all' element={<Table titulo={tituloTabla}/>}></Route>
        <Route path='/empleado/save' element={<Formu/>}></Route>
        <Route path='/empleado/update/:empleadoId' element={<Formu/>}></Route>
       </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
     
    
  );
}

export default App;
