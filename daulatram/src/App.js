import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from './Components/Nav';
import Icons from "./Components/Icons";
import Upperfooter from "./Components/Footer/Upperfooter";

// Import Pages 
import Home from "./Pages/Home";
import Mission from "./Pages/AboutUs/Mission";
import Department from "./Pages/Academics/Department";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

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
          <Route element={<><Mission/></>} path="/about/mission"></Route>
          <Route element={<><Department/></>} path="/academics/departments"></Route>
        </Routes>
          <Upperfooter />
      </Router>

    </>
  );
}

export default App;