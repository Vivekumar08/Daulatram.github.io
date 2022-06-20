import React from "react";
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

import Faculty from "./Pages/Academics/Departments/Biochemistry/Faculty";
import Research_facilities from "./Pages/Academics/Departments/Biochemistry/Research_facilities";
import Studentsachieve from "./Pages/Academics/Departments/Biochemistry/Studentsachieve";
import Awards from "./Pages/Academics/Departments/Biochemistry/Awards";
import Publications from "./Pages/Academics/Departments/Biochemistry/Publications";
import Events from "./Pages/Academics/Departments/Biochemistry/Events";

// botany
import About from "./Pages/Academics/Departments/Botany/About";
import Botanyfaculty from "./Pages/Academics/Departments/Botany/Botanyfaculty";
import Programoffered from "./Pages/Academics/Departments/Botany/Programoffered"


import Association from "./Pages/Academics/Departments/Biochemistry/Association";
import Laboratorystaff from "./Pages/Academics/Departments/Biochemistry/Laboratorystaff";
import Facilities from "./Pages/Academics/Facilities";

import { EnablinUnit } from "./Pages/Societies/EnablinUnit";
import ExtraCurricular from "./Pages/Societies/ExtraCurricular";
import Memesis from "./Pages/Societies/Memesis";

import Research_Facilities from "./Pages/Research/Research_Facilities";
import Publications_res from "./Pages/Research/Publications_res";

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
          ></Route>{" "}
          <Route
            element={
              <>
                <Mission />
              </>
            }
            path="/about/mission"
          ></Route>{" "}
          <Route
            element={
              <>
                <Founder />
              </>
            }
            path="/about/founder"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chairperson />
              </>
            }
            path="/about/chairperson"
          ></Route>{" "}
          <Route
            element={
              <>
                <VicePrincipal />
              </>
            }
            path="/about/vicePrincipal"
          ></Route>{" "}
          <Route
            element={
              <>
                <Department />
              </>
            }
            path="/academics/departments"
          ></Route>{" "}
          <Route
            element={
              <>
                <Faculty />
              </>
            }
            path="/academics/departments/biochem/faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Biochem />
              </>
            }
            exact
            path="/academics/departments/biochem"
          ></Route>{" "}
          <Route
            element={
              <>
                <Programmesoffer />
              </>
            }
            exact
            path="/academics/departments/biochem/programmesoffer"
          ></Route>{" "}
          <Route
            element={
              <>
                <Association />
              </>
            }
            exact
            path="/academics/departments/biochem/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Laboratorystaff />
              </>
            }
            exact
            path="/academics/departments/biochem/laboratorystaff"
          ></Route>{" "}
          <Route
            element={
              <>
                <Facilities />
              </>
            }
            path="/academics/facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Research_facilities />
              </>
            }
            path="/academics/departments/biochem/research"
          ></Route>{" "}
          <Route
            element={
              <>
                <Studentsachieve />
              </>
            }
            path="/academics/departments/biochem/studentsachieve"
          ></Route>{" "}
          <Route
            element={
              <>
                <Awards />
              </>
            }
            path="/academics/departments/biochem/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Publications />
              </>
            }
            path="/academics/departments/biochem/publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Events />
              </>
            }
            path="/academics/departments/biochem/events"
          ></Route>{" "}
          <Route
            element={
              <>
                <ExtraCurricular />
              </>
            }
            path="/societies/extraCurricularActivities"
          ></Route>{" "}
          <Route
            element={
              <>
                <EnablinUnit />
              </>
            }
            path="/societies/enablingUnit"
          ></Route>
          <Route
            element={
              <>
                <Memesis />
              </>
            }
            path="/societies/dramaScociety"
          ></Route>{" "}
          {/* Research And Facilities */}{" "}
          <Route
            element={
              <>
                <Research_Facilities />
              </>
            }
            path="/research/research_facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Publications_res />
              </>
            }
            path="/research/publications"
          ></Route>
          {/* Botany */}
          <Route
            element={
              <>
                <About />
              </>
            }
            path="/academics/departments/Botany"
          ></Route>{" "}
          <Route
            element={
              <>
                <Botanyfaculty/>
              </>
            }
            path="/academics/departments/Botany/Botanyfaculty"
          ></Route>
          <Route
            element={
              <>
                <Programoffered/>
              </>
            }
            path="/academics/departments/Botany/Programoffered"
          ></Route>



        </Routes>{" "}
        <Upperfooter /> {/* <Chairperson_banner/> */}{" "}
      </Router>{" "}
    </>
  );
}

export default App;
