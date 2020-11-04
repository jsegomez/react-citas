import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    // Crear State de citas
    const [cita, setCita] = useState({
        id: uuidv4(),
        mascota: '',
        responsable: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    // State para revisar errores de formulario
    const [error, setError] = useState(false);

    // Evento que recibe datos de formulario
    const actualizarCita = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraemos los para usarlos en value de formulario
    const {mascota, responsable, fecha, hora, sintomas} = cita;

    // Cuando se envia el formulario
    const subForm = (e) => {
        e.preventDefault();   
        // Validar formulario
        
        for (const elemento in cita) {
            if (cita[elemento].trim() === '') {
                setError(true);
                return;
            }
        }
        setError(false);

        // Enviar cita a componente principal
        crearCita(cita);

        // Reiniciar formulario
        setCita({
            id: uuidv4(),
            mascota:'',
            responsable:'',
            fecha:'',
            hora:'',
            sintomas:''
        });

    }

    return (
        <Fragment>
            <h2>Formulario</h2>            
            {error 
                ?
                    <div className="divErrores">
                        <p className="mensajeErrores">Todos los campos son obligatorios</p>
                    </div>                
                : 
                    null
            }

            <div>
                <form onSubmit={subForm} autoComplete="off">
                    <div className="form-group text-light">
                        <label>Nombre Mascota</label>
                        <input
                            type="text"
                            className="form-control"                            
                            name="mascota"
                            onChange={actualizarCita}
                            value={mascota}
                        />              
                          
                    </div>
                    <div className="form-group text-light">
                        <label>Nombre responsable</label>
                        <input
                            type="text"
                            className="form-control"                            
                            name="responsable"
                            onChange={actualizarCita}
                            value={responsable}
                        />
                    </div>
                    <div className="form-group text-light">
                        <label>Fecha cita</label>
                        <input
                            type="date"
                            className="form-control"                            
                            name="fecha"
                            onChange={actualizarCita}
                            value={fecha}
                        />
                    </div>
                    <div className="form-group text-light">
                        <label>Hora cita</label>
                        <input
                            type="time"
                            className="form-control"                            
                            name="hora"
                            onChange={actualizarCita}
                            value={hora}
                        />
                    </div>
                    <div className="form-group text-light">
                        <label>Sintomas</label>
                        <textarea
                            className="form-control"                            
                            name="sintomas"
                            onChange={actualizarCita}
                            value={sintomas}
                        >
                        </textarea>
                    </div>
                    <button type="submit" className="btn text-light botones btn-block">Agregar cita</button>
                </form>
            </div>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
    eliminarCita: PropTypes.func
}
 
export default Formulario;



