import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Header from '../src/components/views/Page/Header';
import MainPage from './components/views/Page/MainPage';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
