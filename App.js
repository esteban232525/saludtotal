import React from 'react';
import './App.css';
import saludLogo from './salud.png';
import vigilado from './vigilado-super-salud.png';
import perfilIcon from './perfil.png';
import calendarioIcon from './calendario.png';
import certificadoIcon from './certificado.png';
import incapacidadIcon from './incapacidad-para-hablar.png';
import tarjetaIcon from './tarjeta-de-identificacion.png';
import pago from './pago-en-efectivo.png';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <img src={saludLogo} alt="Salud Total Logo" className="logo" />
          <h1>Oficina Virtual</h1>
        </div>
        <div className="header-right">
          <p>
            FABIAN MONTEZ<br />
            TIENES 0 NOTIFICACIONES - ACTIVO
          </p>
          <a href="#" className="logout-link">CERRAR SESIÓN</a>
        </div>
      </header>
      <div className="sub-header">
        <button className="back-button">VOLVER ATRÁS</button>
      </div>
      <main>
        <h2>Selecciona el servicio a tramitar</h2>
        <div className="grid">
          <div className="card">
            <img src={calendarioIcon} alt="Información Personal" className="icon" />
            <p>INFORMACIÓN PERSONAL</p>
          </div>
          <div className="card">
            <img src={perfilIcon} alt="Editar Perfil" className="icon" />
            <p>EDITAR PERFIL</p>
          </div>
          <div className="card">
            <img src={certificadoIcon} alt="Estado Afiliación" className="icon" />
            <p>ESTADO AFILIACIÓN</p>
          </div>
          <div className="card">
            <img src={pago} alt="Pagos y Certificados" className="icon" />
            <p>PAGOS Y CERTIFICADOS</p>
          </div>
          <div className="card">
            <img src={tarjetaIcon} alt="Imprimir Carné" className="icon" />
            <p>IMPRIMIR CARNÉ</p>
          </div>
          <div className="card">
            <img src={incapacidadIcon} alt="Certificado Incapacidad" className="icon" />
            <p>CERTIFICADO INCAPACIDAD</p>
          </div>
          
        </div>
      </main>

      
      <footer>
      <img src={vigilado} alt="Vigilado Supersalud" className="small-img" />
        <p>&copy; 2024 Salud Total EPS | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;