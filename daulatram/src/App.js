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

import Bio_faculty from "./Pages/Academics/Departments/Biochemistry/Bio_faculty";
import Research_facilities from "./Pages/Academics/Departments/Biochemistry/Research_facilities";
import Studentsachieve from "./Pages/Academics/Departments/Biochemistry/Studentsachieve";
import Awards from "./Pages/Academics/Departments/Biochemistry/Awards";
import Publications from "./Pages/Academics/Departments/Biochemistry/Publications";
import Events from "./Pages/Academics/Departments/Biochemistry/Events";

// botany
import About from "./Pages/Academics/Departments/Botany/About";
import Botanyfaculty from "./Pages/Academics/Departments/Botany/Bot_fac";
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
import Ethics from "./Pages/Staff_Zone/Ethics";
import FormsS from "./Pages/Staff_Zone/FormsS";
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
import Chemstudachieve from "./Pages/Academics/Departments/Chemistry/Chemstudachieve";
import Chempublications from "./Pages/Academics/Departments/Chemistry/Chempublications";
import Chemfacilities from "./Pages/Academics/Departments/Chemistry/Chemfacilities";

// import Socities1 from "./Pages/Socities1";
import Student_Notice from "./Pages/Student_Notice";
import Staff_Notice from "./Pages/Staff_Notice";
import Public_Notice from "./Pages/Public_Notice";
import RTI from "./Pages/RTI/RTI";

import Undergraduate from "./Pages/Academics/Undergraduate";
import Teacher from "./Pages/Academics/teacher";
import Trainingp from "./Pages/Academics/trainingp";
import AcadCal from "./Pages/Academics/AcadCal";
import CAcadCal from "./Pages/Academics/CAcadCal";
import Addoncourses from "./Pages/Academics/Addoncourses";

import Tender from "./Pages/Tender/Tender";
import Chemassociation from "./Pages/Academics/Departments/Chemistry/Chemassociation";
import Job_opportunities from "./Pages/Job_Opportunites/Job_opportunities";

// Commerce
import Com_about from "./Pages/Academics/Departments/Commerce/Com_about";
import Com_faculty from "./Pages/Academics/Departments/Commerce/Com_faculty";
import Com_programoffer from "./Pages/Academics/Departments/Commerce/Com_programoffer";
import Com_events from "./Pages/Academics/Departments/Commerce/Com_events";
import Com_studachieve from "./Pages/Academics/Departments/Commerce/Com_studachieve";
import Com_publications from "./Pages/Academics/Departments/Commerce/Com_publications";
import Com_labstaff from "./Pages/Academics/Departments/Commerce/Com_labstaff";
import Bcomprog from "./Pages/Academics/Departments/Commerce/Bcomprog";

//Economics
import Eco_about from "./Pages/Academics/Departments/Economics/Eco_about";
import Eco_faculty from "./Pages/Academics/Departments/Economics/Eco_faculty";
import Eco_programoffered from "./Pages/Academics/Departments/Economics/Eco_programoffered";
import Eco_events from "./Pages/Academics/Departments/Economics/Eco_events";
import Eco_publications from "./Pages/Academics/Departments/Economics/Eco_publications";
import Eco_association from "./Pages/Academics/Departments/Economics/Eco_association";
import Eco_photogallery from "./Pages/Academics/Departments/Economics/Eco_photogallery";

// English
import Eng_about from "./Pages/Academics/Departments/English/Eng_about";
import Eng_faculty from "./Pages/Academics/Departments/English/Eng_faculty";
import Eng_programoffered from "./Pages/Academics/Departments/English/Eng_programoffered";
import Eng_Studachieve from "./Pages/Academics/Departments/English/Eng_Studachieve";
import Eng_association from "./Pages/Academics/Departments/English/Eng_association";
import Eng_photogallery from "./Pages/Academics/Departments/English/Eng_photogallery";
import Eng_publications from "./Pages/Academics/Departments/English/Eng_publications";
import NotFound from "./Pages/NotFound";

// Hindi
import Hindi_about from "./Pages/Academics/Departments/Hindi/Hindi_about";
import Hindi_fac from "./Pages/Academics/Departments/Hindi/Hindi_fac";
import Hindi_programoffered from "./Pages/Academics/Departments/Hindi/Hindi_programoffered";
import Hindi_events from "./Pages/Academics/Departments/Hindi/Hindi_events";
import Hindi_studachieve from "./Pages/Academics/Departments/Hindi/Hindi_studachieve";
import Hindi_publications from "./Pages/Academics/Departments/Hindi/Hindi_publications";
import Hindi_awards from "./Pages/Academics/Departments/Hindi/Hindi_awards";
import Hindi_association from "./Pages/Academics/Departments/Hindi/Hindi_association";
import Hindi_magazine from "./Pages/Academics/Departments/Hindi/Hindi_magazine";

// History
import Hist_about from "./Pages/Academics/Departments/History/Hist_about";
import Hist_fac from "./Pages/Academics/Departments/History/Hist_fac";
import Hist_programoffered from "./Pages/Academics/Departments/History/Hist_programoffered";
import Hist_publications from "./Pages/Academics/Departments/History/Hist_publications";
import Hist_awards from "./Pages/Academics/Departments/History/Hist_awards";
import Hist_association from "./Pages/Academics/Departments/History/Hist_association";
import Hist_events from "./Pages/Academics/Departments/History/Hist_events";

// Mathemtics
import Math_about from "./Pages/Academics/Departments/Mathematics/Math_about";
import Math_fac from "./Pages/Academics/Departments/Mathematics/Math_fac";
import Math_programoffered from "./Pages/Academics/Departments/Mathematics/Math_programoffered";
import Math_events from "./Pages/Academics/Departments/Mathematics/Math_events";
import Math_studachieve from "./Pages/Academics/Departments/Mathematics/Math_studachieve";
import Math_publication from "./Pages/Academics/Departments/Mathematics/Math_publication";
import Math_facilities from "./Pages/Academics/Departments/Mathematics/Math_facilities";
import Math_association from "./Pages/Academics/Departments/Mathematics/Math_association";

// Music
import Music_about from "./Pages/Academics/Departments/Music/Music_about";
import Music_fac from "./Pages/Academics/Departments/Music/Music_fac";

// NHE
import Nhe_about from "./Pages/Academics/Departments/NHE/Nhe_about";
import Nhe_fac from "./Pages/Academics/Departments/NHE/Nhe_fac";
import Nhe_programoffered from "./Pages/Academics/Departments/NHE/Nhe_programoffered";
// Philosophy
import Philosophy_about from "./Pages/Academics/Departments/Philosophy/Philosophy_about";
import Philosophy_fac from "./Pages/Academics/Departments/Philosophy/Philosophy_fac";
import Philosophy_programoffered from "./Pages/Academics/Departments/Philosophy/Philosophy_programoffered";

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
                <Bio_faculty />
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
                <Teacher />
              </>
            }
            path="/academics/Teacher_in_charge"
          ></Route>{" "}
          <Route
            element={
              <>
                <Undergraduate />
              </>
            }
            path="/academics/UG_courses"
          ></Route>{" "}
          <Route
            element={
              <>
                <Addoncourses />
              </>
            }
            path="/academics/Add_on_courses"
          ></Route>{" "}
          <Route
            element={
              <>
                <AcadCal />
              </>
            }
            path="/academics/Academic_calendar"
          ></Route>{" "}
          <Route
            element={
              <>
                <CAcadCal />
              </>
            }
            path="/academics/College_Calendar"
          ></Route>{" "}
          <Route
            element={
              <>
                <Trainingp />
              </>
            }
            path="/academics/Training_program"
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
          // Admission
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
                <Anti_Ragging />
              </>
            }
            path="/admission/AntiRaggingGuidlines"
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
          // {/* ** ** ** ** ** ** ** ** ** ** ** * */} {/* Staff Zone */} //{" "}
          {/* ** ** ** ** ** ** ** ** ** ** ** * */}{" "}
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
                <Ethics />
              </>
            }
            path="/StaffZone/Ethics"
          ></Route>{" "}
          <Route
            element={
              <>
                <FormsS />
              </>
            }
            path="/StaffZone/Forms"
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
          // {/* ** ** ** ** ** ** ** ** ** ** ** * */} {/* Socieites */} //{" "}
          {/* ** ** ** ** ** ** ** ** ** ** ** * */}{" "}
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
          // {/* ** ** ** ** ** ** ** ** ** ** ** * */} //{" "}
          {/* Research And Facilities */} //{" "}
          {/* ** ** ** ** ** ** ** ** ** ** ** * */}{" "}
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
          // {/* Botany */}{" "}
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
          <Route
            element={
              <>
                <RTI />
              </>
            }
            path="/RTI"
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
          // {/* ** ** ** ** ** ** ** ** ** ** ** * */} {/* Footer */} //{" "}
          {/* ** ** ** ** ** ** ** ** ** ** ** * */}{" "}
          <Route
            element={
              <>
                <Contact />
              </>
            }
            path="/Contact_us"
          ></Route>{" "}
          <Route
            element={
              <>
                <Tender />
              </>
            }
            path="/Tender"
          ></Route>{" "}
          <Route
            element={
              <>
                <Job_opportunities />
              </>
            }
            path="/Job_Opportunities"
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
          <Route
            element={
              <>
                <Chemstudachieve />
              </>
            }
            path="/academics/departments/Chemistry/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chempublications />
              </>
            }
            path="/academics/departments/Chemistry/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chemfacilities />
              </>
            }
            path="/academics/departments/Chemistry/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Chemassociation />
              </>
            }
            path="/academics/departments/Chemistry/association"
          ></Route>{" "}
          // {/* Commerce */}{" "}
          <Route
            element={
              <>
                <Com_about />
              </>
            }
            path="/academics/departments/Commerce/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_faculty />
              </>
            }
            path="/academics/departments/Commerce/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_programoffer />
              </>
            }
            path="/academics/departments/Commerce/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_events />
              </>
            }
            path="/academics/departments/Commerce/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_studachieve />
              </>
            }
            path="/academics/departments/Commerce/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_publications />
              </>
            }
            path="/academics/departments/Commerce/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_labstaff />
              </>
            }
            path="/academics/departments/Commerce/laboratorystaff"
          ></Route>{" "}
          <Route
            element={
              <>
                <Bcomprog />
              </>
            }
            path="/academics/departments/Commerce/Programoffered/Bcomprog"
          ></Route>{" "}
          // {/* Economics */}{" "}
          <Route
            element={
              <>
                <Eco_about />
              </>
            }
            path="/academics/departments/Economics/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_faculty />
              </>
            }
            path="/academics/departments/Economics/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_programoffered />
              </>
            }
            path="/academics/departments/Economics/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_events />
              </>
            }
            path="/academics/departments/Economics/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_publications />
              </>
            }
            path="/academics/departments/Economics/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_association />
              </>
            }
            path="/academics/departments/Economics/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_photogallery />
              </>
            }
            path="/academics/departments/Economics/photogallery"
          ></Route>{" "}
          // {/* English */}{" "}
          <Route
            element={
              <>
                <Eng_about />
              </>
            }
            path="/academics/departments/English/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_faculty />
              </>
            }
            path="/academics/departments/English/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_programoffered />
              </>
            }
            path="/academics/departments/English/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_Studachieve />
              </>
            }
            path="/academics/departments/English/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_association />
              </>
            }
            path="/academics/departments/English/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_photogallery />
              </>
            }
            path="/academics/departments/English/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_publications />
              </>
            }
            path="/academics/departments/English/Publications"
          ></Route>{" "}
          {/* Hindi */}{" "}
          <Route
            element={
              <>
                <Hindi_about />
              </>
            }
            path="/academics/departments/Hindi/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_fac />
              </>
            }
            path="/academics/departments/Hindi/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_programoffered />
              </>
            }
            path="/academics/departments/Hindi/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_events />
              </>
            }
            path="/academics/departments/Hindi/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_studachieve />
              </>
            }
            path="/academics/departments/Hindi/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_publications />
              </>
            }
            path="/academics/departments/Hindi/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_awards />
              </>
            }
            path="/academics/departments/Hindi/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_association />
              </>
            }
            path="/academics/departments/Hindi/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hindi_magazine />
              </>
            }
            path="/academics/departments/Hindi/newsletter_magazines_hindi"
          ></Route>{" "}
          {/* History */}{" "}
          <Route
            element={
              <>
                <Hist_about />
              </>
            }
            path="/academics/departments/History/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_fac />
              </>
            }
            path="/academics/departments/History/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_programoffered />
              </>
            }
            path="/academics/departments/History/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_publications />
              </>
            }
            path="/academics/departments/History/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_awards />
              </>
            }
            path="/academics/departments/History/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_association />
              </>
            }
            path="/academics/departments/History/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_events />
              </>
            }
            path="/academics/departments/History/Events"
          ></Route>{" "}
          // Mathematics
          <Route
            element={
              <>
                <Math_about />
              </>
            }
            path="/academics/departments/Mathematics/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_fac />
              </>
            }
            path="/academics/departments/Mathematics/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_programoffered />
              </>
            }
            path="/academics/departments/Mathematics/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_events />
              </>
            }
            path="/academics/departments/Mathematics/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_studachieve />
              </>
            }
            path="/academics/departments/Mathematics/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_publication />
              </>
            }
            path="/academics/departments/Mathematics/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_facilities />
              </>
            }
            path="/academics/departments/Mathematics/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_association />
              </>
            }
            path="/academics/departments/Mathematics/association"
          ></Route>{" "}
          {/* Music */}{" "}
          <Route
            element={
              <>
                <Music_about />
              </>
            }
            path="/academics/departments/Music/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_fac />
              </>
            }
            path="/academics/departments/Music/Faculty"
          ></Route>{" "}
          {/* NHE */}{" "}
          <Route
            element={
              <>
                <Nhe_about />
              </>
            }
            path="/academics/departments/NHE/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Nhe_fac />
              </>
            }
            path="/academics/departments/NHE/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Nhe_programoffered />
              </>
            }
            path="/academics/departments/NHE/Programoffered"
          ></Route>{" "}
          {/* Philosophy */}{" "}
          <Route
            element={
              <>
                <Philosophy_about />
              </>
            }
            path="/academics/departments/Philosophy/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philosophy_fac />
              </>
            }
            path="/academics/departments/Philosophy/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philosophy_programoffered />
              </>
            }
            path="/academics/departments/Philosophy/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <NotFound />
              </>
            }
            path="*"
          ></Route>{" "}
        </Routes>{" "}
        <Upperfooter /> {/* <Public_Notice/> */}{" "}
      </Router>{" "}
    </>
  );
}

export default App;
