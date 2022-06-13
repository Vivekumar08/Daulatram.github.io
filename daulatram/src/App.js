import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Slider from './Components/Slider/Slider'
import Upperfooter from "./Components/Footer/Upperfooter";

<<<<<<< HEAD
import './App.css';
import "./Components/Events/Events.css"

import Slider from './Components/Slider/Slider';
import Events from "./Components/Events/Events";

=======
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
>>>>>>> 2ff488eb86fb5210d3608b6cb3bb9f999785415c

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
       <Bulletin/> 
       
       <Slider/>
{/* <Events/> */}
        </>
    );
=======
      <Router>
        <Header />
        <Bulletin />
        <Navbar />
        <Slider/>
        <Quicklinks />
        <Upperfooter/>
      </Router>

      </>
      );
>>>>>>> 2ff488eb86fb5210d3608b6cb3bb9f999785415c
}

      export default App;