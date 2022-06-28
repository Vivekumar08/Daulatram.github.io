import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from "./Components/Nav";
import Icons from "./Components/Icons";
import Upperfooter from "./Components/Footer/Upperfooter";

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
import Principal from "./Pages/AboutUs/Principal";
// import Chairperson_banner from './Components/Banners/Chairperson_banner'

import Faculty from "./Pages/Academics/Departments/Biochemistry/Faculty";
import Research_facilities from "./Pages/Academics/Departments/Biochemistry/Research_facilities";
import Studentsachieve from "./Pages/Academics/Departments/Biochemistry/Studentsachieve";
import Awards from "./Pages/Academics/Departments/Biochemistry/Awards";
import Publications from "./Pages/Academics/Departments/Biochemistry/Publications";
import Events from "./Pages/Academics/Departments/Biochemistry/Events";

// botany
import About from "./Pages/Academics/Departments/Botany/About";
import Botanyfaculty from "./Pages/Academics/Departments/Botany/Botanyfaculty";
import Programoffered from "./Pages/Academics/Departments/Botany/Programoffered";
import Botanystudachieve from "./Pages/Academics/Departments/Botany/Botanystudachieve";
import Bot_Publications from "./Pages/Academics/Departments/Botany/Bot_Publications";
import Bot_research_fac from "./Pages/Academics/Departments/Botany/BotanyResearch_Fac";
import Botany_Association from "./Pages/Academics/Departments/Botany/Botany_Association";
import Bot_Lab_Staff from "./Pages/Academics/Departments/Botany/Bot_Lab_Staff";

import Association from "./Pages/Academics/Departments/Biochemistry/Association";
import Laboratorystaff from "./Pages/Academics/Departments/Biochemistry/Laboratorystaff";
import Facilities from "./Pages/Academics/Facilities";

import { EnablinUnit } from "./Pages/Societies/EnablinUnit";
import ExtraCurricular from "./Pages/Societies/ExtraCurricular";
import Memesis from "./Pages/Societies/Memesis";

// import Research_Facilities from "./Pages/Research/Research_Facilities";
import Research_fac from "./Pages/Research/Research_Facilities/Research_fac";
import Publications_res from "./Pages/Research/Publications_res";

import Admission_committee from "./Pages/Admission/Admission_committee";
import Fee_Structure from "./Pages/Admission/Fee_Structure";
import FAQs_Admission from "./Pages/Admission/FAQs_Admisssion";
import Admission_Grievence_comm from "./Pages/Admission/Admission_Grievence_comm";
import GE_Option from "./Pages/Admission/GE_Option";
import OnlineAdmission from "./Pages/Admission/OnlineAdmission";
import Helpdesk from "./Pages/Admission/Helpdesk";
import Guidelines_Admission from "./Pages/Admission/Guidelines_Admission";
import Bulletins_Admission from "./Pages/Admission/Bulletins_Admission";
import Anti_Ragging from "./Pages/Admission/Anti_Ragging";
import Feedback from "./Pages/Staff_Zone/Feedback";
import Notices from "./Pages/Staff_Zone/Notices";
import Seniority_list from "./Pages/Staff_Zone/Seniority_list";
import Staff_Council_Committee from "./Pages/Staff_Zone/Staff_Council_Committee";
import Roster from "./Pages/Staff_Zone/Roster";
import Administration from "./Pages/AboutUs/Administration";
import Time_table from "./Pages/Student_zone/Time_table";
import Admin from "./Pages/Admin/Admin";
import Attendence from "./Pages/Student_zone/Attendence";
import Sitemap from "./Pages/Sitemap";
import Resources from "./Pages/Academics/Resources";
import Contact from "./Pages/Footer/Contact";
import Internal from "./Pages/Student_zone/Internal";
import First_year from "./Pages/Student_zone/Internals/First_year/First_year";
import Second_year from "./Pages/Student_zone/Internals/Second_year/Second_year";
import Third_year from "./Pages/Student_zone/Internals/Third_year/Third_year";
import Hostel from "./Pages/Student_zone/Hostel";
import Forms from "./Pages/Student_zone/Forms";
import Student_facilities from "./Pages/Student_zone/Student_facilities";
import Eresources from "./Pages/Student_zone/Eresources";
import Antiragging from "./Pages/Student_zone/Antiragging";
import Societies from "./Pages/Societies";

// Chemistry
import Chem_About from "./Pages/Academics/Departments/Chemistry/Chem_About";
import Chemfaculty from "./Pages/Academics/Departments/Chemistry/Chemfaculty";
import Chemprogramoffered from "./Pages/Academics/Departments/Chemistry/Chemprogramoffered";
import Chemevents from "./Pages/Academics/Departments/Chemistry/Chemevents";


// import Socities1 from "./Pages/Socities1";
import Student_Notice from "./Pages/Student_Notice";
import Staff_Notice from "./Pages/Staff_Notice";
import Public_Notice from "./Pages/Public_Notice";

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
          {/* Admin */}{" "}
          <Route
            element={
              <>
                <Admin />
              </>
            }
            path="/Admin"
          ></Route>{" "}
          <Route
            element={
              <>
                <Societies />
              </>
            }
            path="/Societies"
          ></Route>{" "}
          {/* About */}{" "}
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
                <Principal />
              </>
            }
            path="/about/principal"
          ></Route>{" "}
          <Route
            element={
              <>
                <Administration />
              </>
            }
            path="/about/administration"
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
          {/* *********************** */} {/* Admission */}{" "}
          {/* *********************** */}{" "}
          <Route
            element={
              <>
                <Admission_committee />
              </>
            }
            path="/admission/committee"
          ></Route>{" "}
          <Route
            element={
              <>
                <FAQs_Admission />
              </>
            }
            path="/admission/FAQs_Admission"
          ></Route>{" "}
          <Route
            element={
              <>
                <Admission_Grievence_comm />
              </>
            }
            path="/admission/Admission_Grievance_Committee"
          ></Route>{" "}
          <Route
            element={
              <>
                <GE_Option />
              </>
            }
            path="/admission/GEoption"
          ></Route>{" "}
          <Route
            element={
              <>
                <Fee_Structure />
              </>
            }
            path="/admission/feeStructure"
          ></Route>{" "}
          <Route
            element={
              <>
                <OnlineAdmission />
              </>
            }
            path="/admission/Online_Admission"
          ></Route>{" "}
          <Route
            element={
              <>
                <Helpdesk />
              </>
            }
            path="/admission/helpdesk"
          ></Route>{" "}
          <Route
            element={
              <>
                <Bulletins_Admission />
              </>
            }
            path="/admission/Admission_Bulletin"
          ></Route>{" "}
          <Route
            element={
              <>
                <Anti_Ragging />
              </>
            }
            path="/admission/AntiRaggingGuidelines"
          ></Route>{" "}
          <Route
            element={
              <>
                <Guidelines_Admission />
              </>
            }
            path="/admission/OBC_SC_ST_EWS_Complaints"
          ></Route>{" "}
          {/* *********************** */} {/* Staff Zone */}{" "}
          {/* *********************** */}{" "}
          <Route
            element={
              <>
                <Feedback />
              </>
            }
            path="/StaffZone/Feedback"
          ></Route>{" "}
          <Route
            element={
              <>
                <Seniority_list />
              </>
            }
            path="/StaffZone/Seniority_List"
          ></Route>{" "}
          <Route
            element={
              <>
                <Staff_Council_Committee />
              </>
            }
            path="/StaffZone/Staff_Council_committee"
          ></Route>{" "}
          <Route
            element={
              <>
                <Roster />
              </>
            }
            path="/StaffZone/Roster"
          ></Route>{" "}
          {/* *********************** */} {/* Socieites */}{" "}
          {/* *********************** */}{" "}
          <Route
            element={
              <>
                <EnablinUnit />
              </>
            }
            path="/societies/enablingUnit"
          ></Route>{" "}
          <Route
            element={
              <>
                <Memesis />
              </>
            }
            path="/societies/dramaScociety"
          ></Route>{" "}
          {/* *********************** */} {/* Research And Facilities */}{" "}
          {/* *********************** */}{" "}
          <Route
            element={
              <>
                <Research_fac />
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
          ></Route>{" "}
          {/* Botany */}{" "}
          <Route
            element={
              <>
                <About />
              </>
            }
            path="/academics/departments/Botany/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Botanyfaculty />
              </>
            }
            path="/academics/departments/Botany/Botanyfaculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Programoffered />
              </>
            }
            path="/academics/departments/Botany/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Botanystudachieve />
              </>
            }
            path="/academics/departments/Botany/Botanystudachieve"
          ></Route>{" "}
          <Route
            element={
              <>
                <Resources />
              </>
            }
            path="/academics/resources"
          ></Route>{" "}
          <Route
            element={
              <>
                <Bot_Publications />
              </>
            }
            path="/academics/departments/Botany/Bot_Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Bot_research_fac />
              </>
            }
            path="/academics/departments/Botany/Research_Fac"
          ></Route>{" "}
          <Route
            element={
              <>
                <Botany_Association />
              </>
            }
            path="/academics/departments/Botany/Botany_Association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Time_table />
              </>
            }
            path="/Student_Zone/Time_Table_&_Academic_Calendar"
          ></Route>{" "}
          <Route
            element={
              <>
                <Attendence />
              </>
            }
            path="/Student_Zone/Attendance"
          ></Route>{" "}
          <Route
            element={
              <>
                <Internal />
              </>
            }
            path="/Student_Zone/Internal_Assesments"
          ></Route>{" "}
          <Route
            element={
              <>
                <First_year />
              </>
            }
            path="/Student_Zone/Internal_Assesments/First_year"
          ></Route>{" "}
          <Route
            element={
              <>
                <Second_year />
              </>
            }
            path="/Student_Zone/Internal_Assesments/Second_year"
          ></Route>{" "}
          <Route
            element={
              <>
                <Third_year />
              </>
            }
            path="/Student_Zone/Internal_Assesments/Third_year"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hostel />
              </>
            }
            path="/Student_Zone/Hostel"
          ></Route>{" "}
          <Route
            element={
              <>
                <Forms />
              </>
            }
            path="/Student_Zone/Forms"
          ></Route>{" "}
          <Route
            element={
              <>
                <Student_facilities />
              </>
            }
            path="/Student_Zone/Students_Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eresources />
              </>
            }
            path="/Student_Zone/E_Resources"
          ></Route>{" "}
          <Route
            element={
              <>
                <Antiragging />
              </>
            }
            path="/Student_Zone/Anti_Ragging_Helpline"
          ></Route>{" "}
          <Route
            element={
              <>
                <Student_Notice />
              </>
            }
            path="/Student_Zone/Student_Notice"
          ></Route>{" "}
          <Route
            element={
              <>
                <Staff_Notice />
              </>
            }
            path="/StaffZone/Notices"
          ></Route>{" "}
          <Route
            element={
              <>
                <Public_Notice />
              </>
            }
            path="/Public_Notice"
          ></Route>{" "}
          <Route> </Route>{" "}
          <Route
            element={
              <>
                <Bot_Lab_Staff />
              </>
            }
            path="/academics/departments/Botany/Botany_lab_Staff"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sitemap />
              </>
            }
            path="/Sitemap"
          ></Route>{" "}
          {/* *********************** */} {/* Footer */}{" "}
          {/* *********************** */}{" "}
          <Route
            element={
              <>
                <Contact />
              </>
            }
            path="/Contact_us"
          ></Route>{" "}
          {/* Chemistry */}{" "}
          <Route
            element={
              <>
                <Chem_About />
              </>
            }
            path="/academics/departments/Chemistry/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chemfaculty />
              </>
            }
            path="/academics/departments/Chemistry/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chemprogramoffered />
              </>
            }
            path="/academics/departments/Chemistry/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chemevents />
              </>
            }
            path="/academics/departments/Chemistry/Events"
          ></Route>{" "}
        </Routes>{" "}
        <Upperfooter /> {/* <Public_Notice/> */}{" "}
      </Router>{" "}
    </>
  );
}

export default App;
