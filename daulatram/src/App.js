import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from "./Components/Nav";
import Icons from "./Components/Icons";
import Upperfooter from "./Components/Footer/Upperfooter";
// import Chairperson_banner from "./Components/Banners/Chairperson_banner";

// Import Pages
import Home from "./Pages/Home";
import Mission from "./Pages/AboutUs/Mission";
import Department from "./Pages/Academics/Department";
import Biochem from "./Pages/Academics/Departments/Biochemistry/Biochem";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programmesoffer from "./Pages/Academics/Departments/Biochemistry/Programmesoffer";
import Founder from "./Pages/AboutUs/Founder";
import Chairperson from "./Pages/AboutUs/Chairperson";
import VicePrincipal from "./Pages/AboutUs/VicePrincipal";

function App() {
  return (
    <>
      <Router>
        <Bulletin />
        <Header />
        <Navbar />
        <Icons />
        <Routes>
          <Route
            element={
              <>
                <Home />
              </>
            }
            path="/"
          ></Route>
          <Route
            element={
              <>
                <Mission />
              </>
            }
            path="/about/mission"
          ></Route>
          <Route
            element={
              <>
                <Founder />
              </>
            }
            path="/about/founder"
          ></Route>
          <Route
            element={
              <>
                <Chairperson />
              </>
            }
            path="/about/chairperson"
          ></Route>
          <Route
            element={
              <>
                <VicePrincipal />
              </>
            }
            path="/about/vicePrincipal"
          ></Route>
          <Route
            element={
              <>
                <Department />
              </>
            }
            path="/academics/departments"
          ></Route>
          <Route
            element={
              <>
                <Biochem />
              </>
            }
            exact
            path="/academics/departments/biochem"
          ></Route>

          <Route
            element={
              <>
                <Programmesoffer />
              </>
            }
            exact
            path="/academics/departments/biochem/programmesoffer"
          ></Route>
        </Routes>

        <Upperfooter />
        {/* <Chairperson_banner/> */}
      </Router>
    </>
  );
}

export default App;
