import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Header from '../src/components/views/Page/Header';
import MainPage from './components/views/Page/MainPage';
import Footer from './components/views/Page/Footer';
import { QueryStats } from "@mui/icons-material";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CarPage from './components/views/Page/CarPage';
//import DbtestSelectPage from './oracle_test';
import Example from './components/views/Page/Example';
import ReactEx from './example/ReactEx';
import Register from './example/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path= "/" element={<Header />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route exact path= "/" element={<MainPage />} />
          <Route exact path= "/example" element={<Example />} />
          <Route exact path= "/reactEx" element={<ReactEx />} />
          <Route exact path= "/register" element={<Register />} />
          <Route exact path= "/CarPage" element={<CarPage />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route exact path= "/" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
