import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import Form from './components/Form/Form';
import Template from './components/PDF/Template';
import {apps} from './utils/apps';
import {useState} from 'react';

function App() {

  const [generalesNombre, setGeneralesNombre] = useState('');
  const [generalesJefe, setGeneralesJefe] = useState('');
  const [checkedState, setCheckedState] = useState(new Array(apps.length).fill(false));
  const [fecha, setFecha] = useState(new Date());
  const [fechadesde, setFechaDesde] = useState(new Date());
  const [fechahasta, setFechaHasta] = useState(new Date());
  const [solicitud, setSolicitud] = useState('Crear');
  const [tiempo, setTiempo] = useState('Permanente');
  const [reqs, setReqs] = useState({req11: "", req12: "", req13: "", req21: "", req22: "", req23: "", req31: "", req32: "", req33: ""})
  const [usuarios, setUsuarios] = useState({username1: "", motivo1: "", username2: "", motivo2: ""})
  const [solicitante, setSolicitante] = useState('');
  const [aprobador, setAprobador] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const onChangeCheckbox = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
  
      setCheckedState(updatedCheckedState);
  }

  const onChangeSolicitante = (e) =>{
    setSolicitante(e.target.value);
    if(solicitante.length < 1 || aprobador.length < 1 || generalesNombre.length < 1 || generalesJefe < 1 || usuarios.username1.length < 1 || usuarios.motivo1.length < 1 || usuarios.username2.length < 1 || usuarios.motivo2.length < 1 ){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
    }
  }

  const onChangeAprobador = (e) =>{
    setAprobador(e.target.value);
    if(solicitante.length < 1 || aprobador.length < 1 || generalesNombre.length < 1 || generalesJefe < 1 || usuarios.username1.length < 1 || usuarios.motivo1.length < 1 || usuarios.username2.length < 1 || usuarios.motivo2.length < 1 ){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
    }
  }

  const onChangeReq = (e) =>{
    setReqs({...reqs, [e.target.name]: e.target.value})
  }

  const onChangeUsuarios= (e) =>{
    setUsuarios({...usuarios, [e.target.name]: e.target.value})
    if(solicitante.length < 1 || aprobador.length < 1 || generalesNombre.length < 1 || generalesJefe < 1 || usuarios.username1.length < 1 || usuarios.motivo1.length < 1 || usuarios.username2.length < 1 || usuarios.motivo2.length < 1 ){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
    }
  }

  const onChangeSolicitud = (e) =>{
    setSolicitud(e.target.value);
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
  const onChangeGeneralesNombre = e =>{
    setGeneralesNombre(e.target.value);
    if(solicitante.length < 1 || aprobador.length < 1 || generalesNombre.length < 1 || generalesJefe < 1 || usuarios.username1.length < 1 || usuarios.motivo1.length < 1 || usuarios.username2.length < 1 || usuarios.motivo2.length < 1 ){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
    }
  }
  const onChangeGeneralesJefe = e =>{
    setGeneralesJefe(e.target.value);
    if(solicitante.length < 1 || aprobador.length < 1 || generalesNombre.length < 1 || generalesJefe < 1 || usuarios.username1.length < 1 || usuarios.motivo1.length < 1 || usuarios.username2.length < 1 || usuarios.motivo2.length < 1 ){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
    }
  }


  return (
      <div className="main-div">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Form  onChangeGeneralesNombre={onChangeGeneralesNombre}
                                                  onChangeGeneralesJefe={onChangeGeneralesJefe}
                                                  fecha={fecha} onChangeFecha={onChangeFecha}
                                                  fechadesde={fechadesde} onChangeFechaDesde={onChangeFechaDesde}
                                                  fechahasta={fechahasta} onChangeFechaHasta={onChangeFechaHasta}
                                                  tiempo={tiempo} onChangeTiempo={onChangeTiempo}
                                                  solicitud={solicitud} onChangeSolicitud={onChangeSolicitud}
                                                  onChangeCheckbox={onChangeCheckbox}
                                                  onChangeReq={onChangeReq}
                                                  onChangeUsuarios={onChangeUsuarios}
                                                  onChangeSolicitante={onChangeSolicitante}
                                                  onChangeAprobador={onChangeAprobador}
                                                  isEmpty={isEmpty}
                                                   />}  />
            <Route exact path="/print" element={<Template generalesNombre={generalesNombre} 
                                                          fecha={fecha}
                                                          generalesJefe={generalesJefe}
                                                          solicitud={solicitud}
                                                          tiempo={tiempo}
                                                          fechadesde={fechadesde}
                                                          fechahasta={fechahasta}
                                                          checkedState={checkedState}
                                                          reqs={reqs}
                                                          usuarios={usuarios}
                                                          solicitante={solicitante}
                                                          aprobador={aprobador}
                                                          />}  />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
