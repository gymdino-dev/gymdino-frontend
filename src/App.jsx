import { useState } from 'react';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('inicio');
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    nacimiento: '',
    telefono: '',
    correo: '',
    fechaInscripcion: '',
  });
  const [mostrarPassword, setMostrarPassword] = useState(false);
const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPagina('editar');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>GYMDINO</h1>
      </header>

      {pagina === 'inicio' && (
        <section className="inicio">
          <h2>Bienvenido a GymDino</h2>
          <p className="lema">
            No importa cuántas veces caigas, lo que importa es cuántas veces te levantes
            y sigas adelante. En nuestro gimnasio, te ayudamos a encontrar la fuerza para
            superar tus límites y alcanzar tus objetivos.
          </p>

          <button className="btn" onClick={() => setPagina('registro')}>
            Registrar
          </button>

          <div className="ubicacion">
            <h3>Ubicación:</h3>
            <p>Calle 71 Sur #79 - 27</p>
            <iframe
              src="https://www.google.com/maps?q=calle+71+sur+79+27&output=embed"
              width="60%"
              height="200"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="horarios">
            <h3>🕒 Horarios:</h3>
            <ul>
              <li>Lunes a Viernes: 6:00 a.m. - 11:00 p.m.</li>
              <li>Sábados: 8:00 a.m. - 6:00 p.m.</li>
              <li>Domingos y Festivos: 7:00 a.m. - 1:00 p.m.</li>
            </ul>
          </div>

          <div className="menu-hamburguesa">
            <h3>Servicios:</h3>
            <ul>
              <li>Clases Grupales</li>
              <li>Nutrición</li>
              <li>Rutinas</li>
              <li>Terapias</li>
            </ul>
          </div>

          <div className="carrusel">
            <h3>Únete a nuestra familia</h3>
            <div className="imagenes-carrusel">
              <img src="/assets/gym1.jpg" alt="imagen1" />
              <img src="/assets/gym2.jpg" alt="imagen2" />
              <img src="/assets/gym3.jpg" alt="imagen3" />
            </div>
          </div>

          <div className="redes">
            <img src="/assets/facebook.png" alt="facebook" />
            <img src="/assets/youtube.png" alt="YouTube" />
            <img src="/assets/tiktok.png" alt="TikTok" />
            <img src="/assets/instagram.png" alt="Instagram" />
          </div>
        </section>
      )}

      {pagina === 'registro' && (
        <section className="registro">
          <h2>Formulario GymDino</h2>
          <form
      className="formulario"
      onSubmit={e => {
        e.preventDefault();
        setMostrarPassword(true);
      }}
      >
  
            
  
  
            <input name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
            <input name="apellido" placeholder="Apellido" value={formulario.apellido} onChange={handleChange} required />
            <input name="documento" placeholder="Documento ID" value={formulario.documento} onChange={handleChange} required />
            <input name="nacimiento" placeholder="Fecha de nacimiento" type="date" value={formulario.nacimiento} onChange={handleChange} required />
            <input name="telefono" placeholder="Teléfono" value={formulario.telefono} onChange={handleChange} required />
            <input name="correo" placeholder="Correo electrónico" value={formulario.correo} onChange={handleChange} required />
            <input name="fechaInscripcion" placeholder="Fecha de inscripción" type="date" value={formulario.fechaInscripcion} onChange={handleChange} required />
             <button type="submit">Guardar Registro</button> </form>
               {mostrarPassword && (
      <div className="verificacion">
        <h3>Ingresa tu contraseña para continuar:</h3>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={() => {
          if (password === '1234') {
            setPagina('editar');
          } else {
            alert('Contraseña incorrecta');
          }
        }}
          >
          Continuar
        </button>
      </div>
    )}
     </section>
      )}
      
{pagina === 'editar' && (
        <section className="editar">
          <h2>Aquí empieza el cambio</h2>

          <h3>Elige tu plan</h3>
          <table className="tabla-planes">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Duración</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr> <td>Mensual</td><td>1 mes</td><td>80.000</td></tr>
              <tr> <td>Trimestral</td><td>3 meses</td><td>190.000</td></tr>
              <tr> <td>Semestral</td><td>6 meses</td><td>360.000</td></tr>
              <tr> <td>Anual</td><td>12 meses</td><td>600.000</td></tr>
            </tbody>
          </table>

          <h3>Elige tu medio de pago</h3>
          <div className="medios-pago">
            <img src="/assets/nequi.png" alt="Nequi" />
            <img src="/assets/daviplata.png" alt="Daviplata" />
            <img src="/assets/visa.png" alt="Visa" />
            <img src="/assets/mastercard.png" alt="MasterCard" />
            <img src="/assets/paypal.png" alt="Paypal" />
          </div>

          <h3>Promociones:</h3>
          <div className="promociones">
            <img src="/assets/ropa-hombre.jpg" alt="Ropa hombre" />
            <img src="/assets/ropa-mujer.jpg" alt="Ropa mujer" />
            <img src="/assets/mancuernas.jpg" alt="Mancuernas" />
            <img src="/assets/bandas.jpg" alt="Bandas elásticas" />
          </div>
        </section>
      )  }
     </div>
  );
  }
  export default App; 
   

    
       

        
       

      