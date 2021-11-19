import './Template.css';
import {apps} from '../../utils/apps';

const Template = props =>{

    const checkReqs = (req1, req2, req3) =>{
        return (
            <ul>
                <li>{req1}</li>
                {req2  &&(<li>{req2}</li>)}
                {req3  &&(<li>{req3}</li>)}
            </ul>
        )
        
    }
    return(
        <div>
            <div className="header-tabla">
                <img src="https://dummyimage.com/260x57/949494/ffffff.jpg&text=logo" />
                <h1> Solicitud cosas varias</h1>
            </div>
            <table>
                <tr>
                    <th className="header-col" colSpan="3"> Generales </th>
                </tr>
                <tr>
                    <td className="second-col"><b>Fecha:</b> {props.fecha}</td>
                    <td className="third-col"><b>Nombre:</b> {props.generalesNombre}</td>
                    <td className="fourth-col"><b>Jefe:</b> {props.generalesJefe}</td>
                </tr>
                <tr>
                    <th colSpan="3">Solicitud </th>
                </tr>
                <tr className="solicitud-row">
                    <td>{props.solicitud}</td>
                    {
                        props.tiempo != "Permanente" ? (
                            <>
                            <td>{props.tiempo}</td>
                            <td><b>Desde:</b> {props.fechadesde} <br /> <b>Hasta:</b> {props.fechahasta}</td>
                            </>
                        ) : (
                            <td colSpan="2">{props.tiempo}</td>
                        )
                    }
                    
                </tr>
                <tr>
                    <th colSpan="3">Apps</th>
                </tr>
                <tr>
                    <td>
                        <ul>
                        {props.checkedState.map((currentState, index) => currentState ? <li>{apps[index].name}</li> : '')}
                        </ul>
                    </td>
                    <td colSpan="2">
                        <ul>
                        { props.reqs.req11  &&(
                            <li>Caso 1 </li>
                        )
                        }
                        {   
                            props.reqs.req11  &&(
                            checkReqs(props.reqs.req11, props.reqs.req12, props.reqs.req13)
                            )
                        }
                        { props.reqs.req21 &&(
                            <li>Caso 2 </li>
                        )
                        }
                        {
                            props.reqs.req21 &&(
                            checkReqs(props.reqs.req21, props.reqs.req22, props.reqs.req23)
                            )
                        }
                        { props.reqs.req31 &&(
                            <li>Caso 3 </li>
                        )
                        }
                        {
                            props.reqs.req31 &&(
                            checkReqs(props.reqs.req31, props.reqs.req32, props.reqs.req33)
                            )
                        }
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th colSpan="3">Usuarios</th>
                </tr>
                <tr>
                    <td><b>Nombre:</b> {props.usuarios.username1} <br /><b>Nombre:</b> {props.usuarios.username2}</td>
                    <td colSpan="2"><b>Motivo:</b> {props.usuarios.motivo1} <br /> <b>Motivo:</b> {props.usuarios.motivo2}</td>
                </tr> 
                <tr>
                    <th colSpan="3">Autorización</th>
                </tr>
                <tr>
                    <td colSpan="3">
                        <div className="auth-display">
                        <p><b>Solicita:</b> {props.solicitante}</p>
                        <p><b>Aprueba:</b> {props.aprobador}</p>
                        </div>
                        </td>
                </tr>
            </table>
            
        </div>
    )
}


export default Template;