import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => { 
    return (
        <div className="card my-2 p-0 m-0">
            <div className="card-header">
                {'Nombre mascota: ' + cita.mascota}
            </div>
            <div className="card-body p-0 mx-2">
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">Responsable:</th>
                                <td>{cita.responsable}</td>
                            </tr>
                        <tr>
                            <th scope="row">Fecha:</th>
                            <td>{cita.fecha}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hora:</th>
                            <td>{cita.hora}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sintomas:</th>
                            <td className="text-justify">{cita.sintomas}</td>
                        </tr>                                 
                    </tbody>
                </table> 
                <button className="btn btn-danger btn-block mx-0 mb-3" onClick={() => eliminarCita(cita.id)}>
                    Eliminar cita
                </button>                  
            </div>            
        </div>
    );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;

