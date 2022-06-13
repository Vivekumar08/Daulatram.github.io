import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Slider from './Components/Slider/Slider'
import Upperfooter from "./Components/Footer/Upperfooter";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Events from "./Components/Events/Events";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Bulletin />
        <Navbar />
        <Slider/>
        <Quicklinks />
        <Events/>
        <Upperfooter/>
      </Router>

      </>
      );
}

      export default App;