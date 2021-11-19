import './Form.css';
import {apps} from '../../utils/apps';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Form = props =>{

    return(
    <div className="main-form-container">
        <div className="header">
            <img src="https://dummyimage.com/260x57/949494/ffffff.jpg&text=logo" />
            <p className="titulo-seccion">Formulario: Solicitud de cosas varias</p>
        </div>
        <div className="row">
            <p className="row-header">Generales</p>

            <div className="generales-div">
                <div className="row-item">
                    <label>Fecha: <input type="date" value={props.fecha} onChange={props.onChangeFecha} /> </label>
                </div>
                <div className="row-item">
                    <label> <span class="required">*</span> Nombre:  <input type="text" onChange={props.onChangeGeneralesNombre} /> </label>
                </div>
                <div className="row-item">
                        <label> <span class="required">*</span> Jefe: <input type="text" onChange={props.onChangeGeneralesJefe} /> </label>
                </div>
            </div>

        </div>
        <hr />
        <div className="row">
            <p className="row-header">Solicitud</p>
            <div className="solicitud-div">
                <div>
                <select onChange={props.onChangeSolicitud}>
                    <option value="Crear">Crear</option>
                    <option value="Eliminar">Eliminar</option>
                </select>
                </div>
            </div>
        </div>
        <div className="row">
            <p className="row-header">Tiempo</p>
            <div className="tiempo-div">
                <select onChange={props.onChangeTiempo}> 
                    <option value="Permanente">Permanente</option>
                    <option value="Temporal">Temporal</option>
                </select>
                <div className={props.tiempo}>
                    <label for="desde">Desde:   
                    <input type="date" id="desde" value={props.fechadesde} onChange={props.onChangeFechaDesde} / >
                    </label>
                    <label for="hasta">Hasta:   
                    <input type="date" id="hasta" value={props.fechahasta} onChange={props.onChangeFechaHasta} / >
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
                                onChange={() => props.onChangeCheckbox(index)} 
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
                    <label for="req11">Req 1: </label>
                    <input type="text" id="req11" name="req11" onChange={props.onChangeReq}/>
                </div>

                <div>
                    <label for="req12">Req 2: </label>
                    <input type="text" id="req12" name="req12" onChange={props.onChangeReq} />
                </div>

                <div>
                    <label for="req13">Req 3: </label>
                    <input type="text" id="req13" name="req13" onChange={props.onChangeReq} />
                </div>
            </div>
            <p className="case">Caso 2</p>
            <div className="req-div">
                <div>
                    <label for="req21">Req 1: </label>
                    <input type="text" id="req21" name="req21" onChange={props.onChangeReq} />
                </div>

                <div>
                    <label for="req22">Req 2: </label>
                    <input type="text" id="req22" name="req22" onChange={props.onChangeReq} />
                </div>

                <div>
                    <label for="req23">Req 3: </label>
                    <input type="text" id="req23" name="req23" onChange={props.onChangeReq} />
                </div>
            </div>
            <p className="case">Caso 3</p>
            <div className="req-div">
                <div>
                    <label for="req31">Req 1: </label>
                    <input type="text" id="req31" name="req31" onChange={props.onChangeReq} />
                </div>

                <div>
                    <label for="req32">Req 2: </label>
                    <input type="text" id="req32" name="req32" onChange={props.onChangeReq} />
                </div>

                <div>
                    <label for="req33">Req 3: </label>
                    <input type="text" id="req33" name="req33" onChange={props.onChangeReq} />
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
                    <label> <span class="required">*</span> Nombre: <input type="text" id="username1" name="username1" onChange={props.onChangeUsuarios} /> </label>
                    <label><span class="required">*</span> Motivo: <input type="text" id="motivo1" name="motivo1" onChange={props.onChangeUsuarios} /> </label>
                </div>
                <div>
                    <label><span class="required">*</span> Nombre: <input type="text" id="username2" name="username2" onChange={props.onChangeUsuarios}  /> </label>
                    <label><span class="required">*</span> Motivo: <input type="text" id="motivo2" name="motivo2" onChange={props.onChangeUsuarios} /> </label>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <p className="row-header">Autorización</p>
            <div className="auth-div">
                <label><span class="required">*</span> Solicitado por: <input type="text" name="solicitante" onChange={props.onChangeSolicitante} /></label>
                <label><span class="required">*</span> Aprobado por: <input type="text" name="aprobador" onChange={props.onChangeAprobador} /></label>
            </div>
        </div>
        {
            props.isEmpty ?(
                <p className="error-message">(*) Debe llenar todos los campos obligatorios</p>
            ):(

            <Link className="boton" to='/print'

            >GENERAR</Link>
            )
        }
    </div>
    )
}

export default Form;