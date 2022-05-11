import Login from './components/Login.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import List from './components/List.js';
import Landing from './components/Landing.js';
import Detalle from './components/Detalle.js';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path='/List' element={<List />} />
          <Route exact path='Detalle' element={<Detalle />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
