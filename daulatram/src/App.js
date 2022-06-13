import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Upperfooter from "./Components/Footer/Upperfooter";


// Import Pages 
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Events from "./Components/Events/Events";
import Campustour from "./Components/Campus Tour/Campustour";

function App() {
  return (
    <>
      <Router>
          <Header />
          <Bulletin />
          <Navbar />
        <Routes>
          <Route element={<><Home/></>} path="/"></Route>
          <Route element={<><AboutUs/></>} path="/About"></Route>
        </Routes>
          <Upperfooter />
      </Router>

    </>
  );
}

export default App;