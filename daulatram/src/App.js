import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Slider from './Components/Slider/Slider'
import Information from "./Components/Information";
import Upperfooter from "./Components/Footer/Upperfooter";

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
        <Slider/>
        <Information/>
        <Campustour/>
        <Quicklinks />
        <Events/>
        <Upperfooter/>
      </Router>

      </>
      );
}

      export default App;