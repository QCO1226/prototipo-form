import './Form.css';
import {apps} from '../../utils/apps';
import {useState} from 'react';

const Form = () =>{

    const [checkedState, setCheckedState] = useState(new Array(apps.length).fill(false));
    const [fecha, setFecha] = useState(new Date());
    const [fechadesde, setFechaDesde] = useState(new Date());
    const [fechahasta, setFechaHasta] = useState(new Date());

    const onChangeCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }

    const onChangeFecha = (e) =>{
        setFecha(e.target.value);
    }
    const onChangeFechaDesde = (e) =>{
        setFechaDesde(e.target.value);
    }
    const onChangeFechaHasta = (e) =>{
        setFechaHasta(e.target.value);
    }

    return(
    <div className="main-form-container">
        <div className="header-div">
          <p>Logo</p>
          <p>Departamento Equipo Alpha</p>
          <p>Versión x</p>
        </div>
        <hr />
        <p className="titulo-seccion">Solicitud de cosas varias</p>
        <hr />
        <p className="row-header">Generales</p>
        <div className="generales-div">
          <div className="row-item">
               <label>Fecha: <input type="date" value={fecha} onChange={onChangeFecha} /> </label>
          </div>
          <div className="row-item">
               <label> Nombre:  <input type="text" /> </label>
          </div>
          <div className="row-item">
                <label> Jefe: <input type="text" /> </label>
          </div>
        </div>
        <p className="row-header">Solicitud</p>
        <div className="solicitud-div">
            <div>
            <input type="radio" id="crear" name="solicitud" value="crear" / >
            <label for="crear">Crear</label>
            </div>
            <div>
            <input type="radio" id="eliminar" name="solicitud" value="eliminar" / >
            <label for="eliminar">Eliminar</label>
            </div>
        </div>
        <p className="row-header">Tiempo</p>
        <div className="tiempo-div">
            <div>
            <label for="permanente">Permanente</label>
            <input type="checkbox" id="permanente" name="permanente" value="permanente" / >
            </div>
            <div>
            <label for="desde">Desde:   </label>
            <input type="date" id="desde" value={fechadesde} onChange={onChangeFechaDesde} / >
            </div>
            <div>
            <label for="hasta">Hasta:   </label>
            <input type="date" id="hasta" value={fechahasta} onChange={onChangeFechaHasta} / >
            </div>
        </div>
        <p className="row-header">Apps</p>
        <div className="apps-div">
            {
                apps.map(({name}, index) =>{
                    return(
                        <div className="apps-item">
                            <label for={'checkbox-app-'+index}>{name}</label>
                            <input 
                                type="checkbox" id={'checkbox-app-'+index} 
                                name={name} 
                                value={name} 
                                onChange={() => onChangeCheckbox(index)} 
                                />
                        </div>
                    )
                })
            }
            <p className="case">Caso 1</p>
            <div className="req-div">
                <div>
                    <label for="req-1-1">Req 1: </label>
                    <input type="text" id="req-1-1" />
                </div>

                <div>
                    <label for="req-1-2">Req 2: </label>
                    <input type="text" id="req-1-2" />
                </div>

                <div>
                    <label for="req-1-3">Req 3: </label>
                    <input type="text" id="req-1-3" />
                </div>
            </div>
            <p className="case">Caso 2</p>
            <div className="req-div">
                <div>
                    <label for="req-2-1">Req 1: </label>
                    <input type="text" id="req-2-1" />
                </div>

                <div>
                    <label for="req-2-2">Req 2: </label>
                    <input type="text" id="req-2-2" />
                </div>

                <div>
                    <label for="req-2-3">Req 3: </label>
                    <input type="text" id="req-2-3" />
                </div>
            </div>
            <p className="case">Caso 3</p>
            <div className="req-div">
                <div>
                    <label for="req-3-1">Req 1: </label>
                    <input type="text" id="req-3-1" />
                </div>

                <div>
                    <label for="req-3-2">Req 2: </label>
                    <input type="text" id="req-3-2" />
                </div>

                <div>
                    <label for="req-3-3">Req 3: </label>
                    <input type="text" id="req-3-3" />
                </div>
            </div>
        </div>
        <p className="row-header">Usuarios</p>
        <div className="usuarios-div">
            <div>
                <label>Nombre: <input type="text" /></label>
                <label>Motivo: <input type="text" /></label>
            </div>
            <div>
                <label>Nombre: <input type="text" /></label>
                <label>Motivo: <input type="text" /></label>
            </div>
        </div>
        <p className="row-header">Autorización</p>
        <div className="auth-div">
            <label>Solicitado por: <input type="text" /></label>
            <label>Aprobado por: <input type="text" /></label>
        </div>
        <button>GENERAR</button>
    </div>
    )
}

export default Form;