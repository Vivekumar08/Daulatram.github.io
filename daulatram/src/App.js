import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Icons from "./Components/Icons";
import Upperfooter from "./Components/Footer/Upperfooter";
import Banner from "./Components/Banner";

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
          <Bulletin />
          <Header />
          <Navbar />
          <Icons/>
        <Routes>
          <Route element={<><Home/></>} path="/"></Route>
          <Route element={<><AboutUs/></>} path="/About"></Route>
        </Routes>
          <Upperfooter />
          <Banner/>

      </Router>

    </>
  );
}

export default App;