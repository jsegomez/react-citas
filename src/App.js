import React,{useState, useEffect} from 'react';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

function App() {

  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if(!citasLocalStorage){
    citasLocalStorage = [];
  }

  // Guardar todas las citas
  const [citas, setCitas] = useState(citasLocalStorage);

  // Función para tomas las citas actuales y agregar nueva
  const crearCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ])
  }

  // Eliminar cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }


  // Revisar cambios en usestate citas y citas en local storage
  useEffect(() => {
    if(citasLocalStorage){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasLocalStorage]);

  // Mensaje condicional de citas
  const mensaje = citas.length === 0 ? 'No hay citas disponibles' : 'Administra tus citas';

  return (
    <div className="container mt-4">
      <h1 className="titulo">Administrador de pacientes</h1>

      <div className="row mt-md-5">
        <div className="col-12 col-md-6">
          <Formulario crearCita={crearCita}>            
          </Formulario>
        </div>
        <div className="col-12 col-md-6 my-5 my-md-0">
          <h2>{mensaje}</h2>
          { citas.map(cita => 
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          )}
        </div>
      </div>

    </div>
  );
}



export default App;
