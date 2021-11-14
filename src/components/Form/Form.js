import './Form.css';
import {apps} from '../../utils/apps';
import {useState} from 'react';

const Form = () =>{

    const [checkedState, setCheckedState] = useState(new Array(apps.length).fill(false));
    const [fecha, setFecha] = useState(new Date());
    const [fechadesde, setFechaDesde] = useState(new Date());
    const [fechahasta, setFechaHasta] = useState(new Date());
    const [tiempo, setTiempo] = useState('permanente');

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
    const onChangeTiempo = (e) =>{
        setTiempo(e.target.value);
    }

    return(
    <div className="main-form-container">
        <p className="titulo-seccion">Formulario: Solicitud de cosas varias</p>
        <div className="row">
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

        </div>
        <hr />
        <div className="row">
            <p className="row-header">Solicitud</p>
            <div className="solicitud-div">
                <div>
                <select>
                    <option value="Crear">Crear</option>
                    <option value="Eliminar">Eliminar</option>
                </select>
                </div>
            </div>
        </div>
        <div className="row">
            <p className="row-header">Tiempo</p>
            <div className="tiempo-div">
                <select onChange={onChangeTiempo}> 
                    <option value="permanente">Permanente</option>
                    <option value="temporal">Temporal</option>
                </select>
                <div className={tiempo}>
                    <label for="desde">Desde:   
                    <input type="date" id="desde" value={fechadesde} onChange={onChangeFechaDesde} / >
                    </label>
                    <label for="hasta">Hasta:   
                    <input type="date" id="hasta" value={fechahasta} onChange={onChangeFechaHasta} / >
                    </label>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
        <p className="row-header">Apps</p>
        <div className="apps-div">
            <div className="apps-list">
            {
                apps.map(({name}, index) =>{
                    return(
                        <div className="apps-item">
                            <input 
                                type="checkbox" id={'checkbox-app-'+index} 
                                name={name} 
                                value={name} 
                                onChange={() => onChangeCheckbox(index)} 
                                />
                            <label for={'checkbox-app-'+index}>{name}</label>
                        </div>
                    )
                })
            }
            </div>
            <div className="apps-div-casos">
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
        </div>
            
        </div>
        <hr />
        <div className="row">
            <p className="row-header">Usuarios</p>
            <div className="usuarios-div">
                <div>
                    <label>Nombre: <input type="text" /> </label>
                    <label>Motivo: <input type="text" /> </label>
                </div>
                <div>
                    <label>Nombre: <input type="text" /> </label>
                    <label>Motivo: <input type="text" /> </label>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <p className="row-header">Autorización</p>
            <div className="auth-div">
                <label>Solicitado por: <input type="text" /></label>
                <label>Aprobado por: <input type="text" /></label>
            </div>
        </div>
        <button>GENERAR</button>
    </div>
    )
}

export default Form;