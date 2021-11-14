import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import Form from './components/Form/Form';
function App() {
  return (
      <div className="main-div">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Form/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
