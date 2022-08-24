import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Bulletin from "./Components/Bulletin";
import Navbar from "./Components/Nav";
import Icons from "./Components/Icons";
import Upperfooter from "./Components/Footer/Upperfooter";
import AuthContext from "./Context/AuthProvider";

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
import Bot_awards from "./Pages/Academics/Departments/Botany/Awards";
import Botany_Gallery from "./Pages/Academics/Departments/Botany/Bot_Gallery";
import Botany_Events from "./Pages/Academics/Departments/Botany/Botany_Events";
import Association from "./Pages/Academics/Departments/Biochemistry/Association";
import Laboratorystaff from "./Pages/Academics/Departments/Biochemistry/Laboratorystaff";
import Facilities from "./Pages/Academics/Facilities/Facilities";
import NHE_Events from "./Pages/Academics/Departments/NHE/NHE_Events";

import { EnablinUnit } from "./Pages/Societies/EnablinUnit";
import ExtraCurricular from "./Pages/Societies/ExtraCurricular";
import Memesis from "./Pages/Societies/Memesis";

// import Research_Facilities from "./Pages/Research/Research_Facilities";
import Research_fac from "./Pages/Research/Research_Facilities/Research_fac";
import Publications_res from "./Pages/Research/Publications_res";
import Mag_New from "./Pages/Research/Mag_News/Mag_New";

import Admission_committee from "./Pages/Admission/Admission_committee";
import Fee_Structure from "./Pages/Admission/Fee_Structure";
import FAQs_Admission from "./Pages/Admission/FAQs_Admisssion";
import Admission_Grievence_comm from "./Pages/Admission/Admission_Grievence_comm";
import GE_Option from "./Pages/Admission/GE_Option";
import OnlineAdmission from "./Pages/Admission/OnlineAdmission";
import Helpdesk from "./Pages/Admission/Helpdesk";
import Guidelines_Admission from "./Pages/Admission/Guidelines/Guidelines";
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
import ICC from "./Pages/Student_zone/ICC";
import Resources from "./Pages/Academics/Resources/Resources";
import Courses from "./Pages/Academics/Add on courses/courses";
import Contact from "./Pages/Footer/Contact";
import Bulletins_page from "./Pages/Footer/Bulletins_page";
import Internal from "./Pages/Student_zone/Internal";
import Grievance from "./Pages/Student_zone/Grievance";
import Complaints from "./Pages/Student_zone/Complaints";
import First_year from "./Pages/Student_zone/Internals/First_year/First_year";
import Second_year from "./Pages/Student_zone/Internals/Second_year/Second_year";
import Third_year from "./Pages/Student_zone/Internals/Third_year/Third_year";
import Hostel from "./Pages/Student_zone/Hostel";
import Forms from "./Pages/Student_zone/Forms";
import Scholarship from "./Pages/Student_zone/Scholarship";
import Student_facilities from "./Pages/Student_zone/Student_Facilities/Student_Facilities";
import Eresources from "./Pages/Student_zone/Eresources";
import Antiragging from "./Pages/Student_zone/Antiragging";
import Societies from "./Pages/Societies";

// Chemistry
import Chem_About from "./Pages/Academics/Departments/Chemistry/Chem_About";
import Chemfaculty from "./Pages/Academics/Departments/Chemistry/Chemfaculty";
import Chemprogramoffered from "./Pages/Academics/Departments/Chemistry/Chemprogramoffered";
import Chemevents from "./Pages/Academics/Departments/Chemistry/Chem_Events";
import Chemstudachieve from "./Pages/Academics/Departments/Chemistry/Chemstudachieve";
import Chempublications from "./Pages/Academics/Departments/Chemistry/Chempublications";
import Chemfacilities from "./Pages/Academics/Departments/Chemistry/Chemfacilities";
import Chem_Awards from "./Pages/Academics/Departments/Chemistry/Awards";
import Chemassociation from "./Pages/Academics/Departments/Chemistry/Chemassociation";
import Chem_Gallery from "./Pages/Academics/Departments/Chemistry/Chem_Gallery";
// import Socities1 from "./Pages/Socities1";
import Student_Notice from "./Pages/Student_Notice";
import Staff_Notice from "./Pages/Staff_Notice";
import Public_Notice from "./Pages/Public_Notice";
import RTI from "./Pages/RTI/RTI";

import Undergraduate from "./Pages/Academics/Undergraduate";
import Postgraduate from "./Pages/Academics/Postgraduate";
import Teacher from "./Pages/Academics/teacher";
import Trainingp from "./Pages/Academics/trainingp";
import AcadCal from "./Pages/Academics/AcadCal";
import CAcadCal from "./Pages/Academics/CAcadCal";
import Addoncourses from "./Pages/Academics/Addoncourses";

import Tender from "./Pages/Tender/Tender";

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
import Comfacilities from "./Pages/Academics/Departments/Commerce/Facilities";
import Com_Awards from "./Pages/Academics/Departments/Commerce/Awards";
import Comassociation from "./Pages/Academics/Departments/Commerce/Association";
import Commerce_Gallery from "./Pages/Academics/Departments/Commerce/Com_Gallery";
//Economics
import Eco_about from "./Pages/Academics/Departments/Economics/Eco_about";
import Eco_faculty from "./Pages/Academics/Departments/Economics/Eco_faculty";
import Eco_programoffered from "./Pages/Academics/Departments/Economics/Eco_programoffered";
import Eco_events from "./Pages/Academics/Departments/Economics/Eco_events";
import Eco_publications from "./Pages/Academics/Departments/Economics/Eco_publications";
import Eco_association from "./Pages/Academics/Departments/Economics/Eco_association";
import Eco_photogallery from "./Pages/Academics/Departments/Economics/Eco_photogallery";
import Eco_Facs from "./Pages/Academics/Departments/Economics/Facilities";
import Eco_awards from "./Pages/Academics/Departments/Economics/Awards";
import Eco_StuAch from "./Pages/Academics/Departments/Economics/StudentAchievements";
// English
import Eng_about from "./Pages/Academics/Departments/English/Eng_about";
import Eng_faculty from "./Pages/Academics/Departments/English/Eng_faculty";
import Eng_programoffered from "./Pages/Academics/Departments/English/Eng_programoffered";
import Eng_Studachieve from "./Pages/Academics/Departments/English/Eng_Studachieve";
import Eng_association from "./Pages/Academics/Departments/English/Eng_association";
import Eng_photogallery from "./Pages/Academics/Departments/English/Eng_photogallery";
import Eng_publications from "./Pages/Academics/Departments/English/Eng_publications";
import NotFound from "./Pages/NotFound";
import Eng_Facs from "./Pages/Academics/Departments/English/Facilities";
import Eng_awards from "./Pages/Academics/Departments/English/Awards";
import Eng_Eve from "./Pages/Academics/Departments/English/Events";
import Psychology_Events from "./Pages/Academics/Departments/Psychology/Psychology_Events";
// Hindi
import Hindi_about from "./Pages/Academics/Departments/Hindi/Hindi_about";
import Hindi_fac from "./Pages/Academics/Departments/Hindi/Hindi_fac";
import Hindi_programoffered from "./Pages/Academics/Departments/Hindi/Hindi_programoffered";
import Hindi_events from "./Pages/Academics/Departments/Hindi/Hindi_events";
import Hindi_studachieve from "./Pages/Academics/Departments/Hindi/Hindi_studachieve";
import Hindi_publications from "./Pages/Academics/Departments/Hindi/Hindi_publications";
import Hindi_awards from "./Pages/Academics/Departments/Hindi/Awards";
import Hindi_association from "./Pages/Academics/Departments/Hindi/Hindi_association";
import Hindi_magazine from "./Pages/Academics/Departments/Hindi/Hindi_magazine";
import Hindi_Facs from "./Pages/Academics/Departments/Hindi/Facilities";
import Hindi_gallery from "./Pages/Academics/Departments/Hindi/Hin_Gallery";
// History
import Hist_about from "./Pages/Academics/Departments/History/Hist_about";
import Hist_fac from "./Pages/Academics/Departments/History/Hist_fac";
import Hist_programoffered from "./Pages/Academics/Departments/History/Hist_programoffered";
import Hist_publications from "./Pages/Academics/Departments/History/Hist_publications";
import Hist_awards from "./Pages/Academics/Departments/History/Hist_awards";
import Hist_association from "./Pages/Academics/Departments/History/Hist_association";
import Hist_events from "./Pages/Academics/Departments/History/Hist_events";
import Hist_stuAch from "./Pages/Academics/Departments/History/Hist_studachieve";
import Hist_facs from "./Pages/Academics/Departments/History/Facilities";
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
import Forgot from "./Pages/Admin/Forgot";
import ResetPassword from "./Pages/Admin/ResetPassword";
import Music_stuAch from "./Pages/Academics/Departments/Music/Music_studachieve";
import Music_association from "./Pages/Academics/Departments/Music/Music_association";
import Music_publications from "./Pages/Academics/Departments/Music/Music_publications";
import Music_facs from "./Pages/Academics/Departments/Music/Music_facilities";

// NHE
import Nhe_about from "./Pages/Academics/Departments/NHE/Nhe_about";
import Nhe_fac from "./Pages/Academics/Departments/NHE/Nhe_fac";
import NHE_stuAch from "./Pages/Academics/Departments/NHE/NHE_studachieve";
import NHE_association from "./Pages/Academics/Departments/NHE/NHE_association";
import NHE_publications from "./Pages/Academics/Departments/NHE/NHE_publications";
import Nhe_programoffered from "./Pages/Academics/Departments/NHE/Nhe_programoffered";
// Philosophy
import Philosophy_about from "./Pages/Academics/Departments/Philosophy/Philosophy_about";
import Philosophy_fac from "./Pages/Academics/Departments/Philosophy/Philosophy_fac";
import Philosophy_programoffered from "./Pages/Academics/Departments/Philosophy/Philosophy_programoffered";
import Philosophy_events from "./Pages/Academics/Departments/Philosophy/Philosophy_events";
import Philosophy_studachieve from "./Pages/Academics/Departments/Philosophy/Philosophy_studachieve";
import Philosophy_publications from "./Pages/Academics/Departments/Philosophy/Philosophy_publications";
import Philosophy_association from "./Pages/Academics/Departments/Philosophy/Philosophy_association";
// Physical Education
import PhysicalEdu_about from "./Pages/Academics/Departments/Physical_Education/PhysicalEdu_about";
import PhysicalEdu_programoffered from "./Pages/Academics/Departments/Physical_Education/PhysicalEdu_programoffered";
import PhysicalEdu_fac from "./Pages/Academics/Departments/Physical_Education/PhysicalEdu_fac";
import PhysicalEdu_awards from "./Pages/Academics/Departments/Physical_Education/PhysicalEdu_awards";
import PE_stuAch from "./Pages/Academics/Departments/Physical_Education/PE_studachieve";
import PE_association from "./Pages/Academics/Departments/Physical_Education/PE_association";
import PE_publications from "./Pages/Academics/Departments/Physical_Education/PE_publications";

// Physics
import Physics_about from "./Pages/Academics/Departments/Physics/Physics_about";
import Physics_fac from "./Pages/Academics/Departments/Physics/Physics_fac";
import Physics_programoffered from "./Pages/Academics/Departments/Physics/Physics_programoffered";
import Physics_events from "./Pages/Academics/Departments/Physics/Phy_Events";
import Physics_studachieve from "./Pages/Academics/Departments/Physics/Physics_studachieve";
import Physics_publications from "./Pages/Academics/Departments/Physics/Physics_publications";
import Physics_facilities from "./Pages/Academics/Departments/Physics/Physics_facilities";
import Physics_labstaff from "./Pages/Academics/Departments/Physics/Physics_labstaff";
import Physics_association from "./Pages/Academics/Departments/Physics/Physics_association";
import Physics_news_magazines from "./Pages/Academics/Departments/Physics/Physics_news_magazines";
import Physics_awards from "./Pages/Academics/Departments/Physics/Physics_awards";

// Political Science
import Pol_Sci_about from "./Pages/Academics/Departments/Political_Science/Pol_Sci_about";
import Pol_Sci_fac from "./Pages/Academics/Departments/Political_Science/Pol_Sci_fac";
import Pol_Sci_programoffered from "./Pages/Academics/Departments/Political_Science/Pol_Sci_programoffered";
import PolSci_awards from "./Pages/Academics/Departments/Political_Science/PolSci_awards";
import Pol_Sci_association from "./Pages/Academics/Departments/Political_Science/Pol_Sci_association";
import Pol_Sci_publications from "./Pages/Academics/Departments/Political_Science/Pol_Sci_publications";
import Pol_Sci_events from "./Pages/Academics/Departments/Political_Science/Pol_Sci_events";
import PS_stuAch from "./Pages/Academics/Departments/Political_Science/PS_studachieve";
// Psychology
import Psycho_about from "./Pages/Academics/Departments/Psychology/Psycho_about";
import Psycho_fac from "./Pages/Academics/Departments/Psychology/Psycho_fac";
import Psycho_awards from "./Pages/Academics/Departments/Psychology/Psycho_awards";
import Psycho_publications from "./Pages/Academics/Departments/Psychology/Psycho_publications";
import Psycho_programoffered from "./Pages/Academics/Departments/Psychology/Psycho_programoffered";
import Psy_stuAch from "./Pages/Academics/Departments/Psychology/Psy_studachieve";
import Psycho_association from "./Pages/Academics/Departments/Psychology/Psycho_association";

// Sanskriti
import Sans_about from "./Pages/Academics/Departments/Sanskrit/Sans_about";
import Sans_fac from "./Pages/Academics/Departments/Sanskrit/Sans_fac";
import Sans_programoffered from "./Pages/Academics/Departments/Sanskrit/Sans_programoffered";
import Sans_events from "./Pages/Academics/Departments/Sanskrit/Sans_events";
import Sans_studachieve from "./Pages/Academics/Departments/Sanskrit/Sans_studachieve";
import Sans_publications from "./Pages/Academics/Departments/Sanskrit/Sans_publications";
import Sans_awards from "./Pages/Academics/Departments/Sanskrit/Sans_awards";
import Sans_association from "./Pages/Academics/Departments/Sanskrit/Sans_association";

// Zoology
import Zoo_about from "./Pages/Academics/Departments/Zoology/Zoo_about";
import Zoo_fac from "./Pages/Academics/Departments/Zoology/Zoo_fac";
import Zoo_publications from "./Pages/Academics/Departments/Zoology/Zoo_publications";
import Zoo_programoffered from "./Pages/Academics/Departments/Zoology/Zoo_programoffered";
import Zoo_events from "./Pages/Academics/Departments/Zoology/Zoo_events";
import Zoo_studachieve from "./Pages/Academics/Departments/Zoology/Zoo_studachieve";
import Zoo_facilities from "./Pages/Academics/Departments/Zoology/Zoo_facilities";
import Zoo_association from "./Pages/Academics/Departments/Zoology/Zoo_association";
import Zoo_labstaff from "./Pages/Academics/Departments/Zoology/Zoo_labstaff";
import Zoo_awards from "./Pages/Academics/Departments/Zoology/Zoo_awards";
import Gallery_about from "./Pages/AboutUs/Gallery_about";
import Archives_Notice from "./Pages/Archives_Notice";
import Biochem_Gallery from "./Pages/Academics/Departments/Biochemistry/Biochem_Gallery";
import Hist_Gallery from "./Pages/Academics/Departments/History/Hist_Gallery";
import Math_Gallery from "./Pages/Academics/Departments/Mathematics/Math_Gallery";
import Music_Gallery from "./Pages/Academics/Departments/Music/Music_Gallery";
// import NHE_Photo_Gallery from "../../server/models/Academics/Departments/NHE/NHE_Photo_Gallery_Schema";
import NHE_Gallery from "./Pages/Academics/Departments/NHE/NHE_Gallery";
import Philo_Gallery from "./Pages/Academics/Departments/Philosophy/Philo_Gallery";
import Library from "./Pages/Library/Library";
import PE_gallery from "./Pages/Academics/Departments/Physical_Education/PE_gallery";
import PE_Events from "./Pages/Academics/Departments/Physical_Education/PE_Events";
import Physics_gallery from "./Pages/Academics/Departments/Physics/Physics_gallery";
import PS_gallery from "./Pages/Academics/Departments/Political_Science/PS_gallery";
import Psycho_gallery from "./Pages/Academics/Departments/Psychology/Psycho_gallery";
import Sanskrit_gallery from "./Pages/Academics/Departments/Sanskrit/Sanskrit_gallery";
import Zoo_gallery from "./Pages/Academics/Departments/Zoology/Zoo_gallery";

import Stud_Feedback from "./Pages/Student_zone/Stud_Feedback";
import Student_feepayment from "./Pages/Student_zone/Student_feepayment";
import Accreditation from "./Pages/Accreditation/accred";
import Useful from "./Pages/UsefulLinks/Useful";
import Student_Union from "./Pages/Student_zone/Student_union";
import Student_examform from "./Pages/Student_zone/Examform_datesheet";
import Placement_cell from "./Pages/Student_zone/Placement_cell";

import Equal_opp from "./Pages/Student_zone/Equal_opp";

import Music_Events from "./Pages/Academics/Departments/Music/Music_Events";
import Phy_Events from "./Pages/Academics/Departments/Physics/Phy_Events";
import Vidyavistar from "./Pages/Events&Activities/Vidyavistar";
import IQAC from "./Pages/Events&Activities/IQAC";
import Studentact from "./Pages/Events&Activities/Studentact";
import Music_Awards from "./Pages/Academics/Departments/Music/Music_awards";
import NHE_Awards from "./Pages/Academics/Departments/NHE/NHE_awards";
import Math_Awards from "./Pages/Academics/Departments/Mathematics/Math_awards";
import Philo_Awards from "./Pages/Academics/Departments/Philosophy/philo_awards";
import NHE_facilities from "./Pages/Academics/Departments/NHE/NHE_facilities";
import Philo_facilities from "./Pages/Academics/Departments/Philosophy/Philo_facilities";
import PE_Facilities from "./Pages/Academics/Departments/Physical_Education/PE_Facilities";
import PS_Facilities from "./Pages/Academics/Departments/Political_Science/PS_Facilities";
import Psycho_Facilities from "./Pages/Academics/Departments/Psychology/Psycho_Facilities";
import Sanskrit_Facilities from "./Pages/Academics/Departments/Sanskrit/Sanskrit_Facilities";
import Scholarships from "./Pages/Student_zone/Scholarship";
import Anti_Harassment from "./Pages/Footer/Anti_Harassment";

function App() {
  const { auth, setAuth } = useContext(AuthContext);

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
                <Forgot />
              </>
            }
            path="/forgot"
          ></Route>{" "}
          <Route
            element={
              <>
                <Useful />
              </>
            }
            path="/UsefulLinks"
          ></Route>{" "}
          <Route
            element={
              <>
                <ResetPassword />
              </>
            }
            path="/reset/:Token"
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
                <Gallery_about />
              </>
            }
            path="/about/Gallery"
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
                <Botany_Events />
              </>
            }
            path="/academics/departments/Botany/events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Vidyavistar />
              </>
            }
            path="/Vidyavistar"
          ></Route>{" "}
          <Route
            element={
              <>
                <IQAC />
              </>
            }
            path="/IQAC"
          ></Route>{" "}
          <Route
            element={
              <>
                <Studentact />
              </>
            }
            path="/StudentActivities"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_Events />
              </>
            }
            path="/academics/departments/NHE/events"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_Events />
              </>
            }
            path="/academics/departments/Physical_Education/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psychology_Events />
              </>
            }
            path="/academics/departments/Psychology/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Biochem_Gallery />
              </>
            }
            path="/academics/departments/biochem/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_Gallery />
              </>
            }
            path="/academics/departments/History/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_Gallery />
              </>
            }
            path="/academics/departments/Mathematics/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_Gallery />
              </>
            }
            path="/academics/departments/Music/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_Gallery />
              </>
            }
            path="/academics/departments/NHE/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philo_Gallery />
              </>
            }
            path="/academics/departments/Philosophy/photogallery"
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
                <Postgraduate />
              </>
            }
            path="/academics/PG_courses"
          ></Route>{" "}
          {/* <Route
                                                                        element={
                                                                          <>
                                                                            <Addoncourses />
                                                                          </>
                                                                        }
                                                                        path="/academics/Add_on_courses"
                                                                      ></Route>{" "} */}{" "}
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
                <Placement_cell />
              </>
            }
            path="/Student_Zone/placements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Student_Union />
              </>
            }
            path="/Student_Zone/Student_Union"
          ></Route>{" "}
          <Route
            element={
              <>
                <Student_examform />
              </>
            }
            path="/Student_Zone/Examination_Form_&_Database"
          ></Route>{" "}
          <Route
            element={
              <>
                <Equal_opp />
              </>
            }
            path="/Student_Zone/Equal_Opportunities_Cell"
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
            path="/admission/OBC_SC_ST_EWS"
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
          <Route
            element={
              <>
                <Mag_New />
              </>
            }
            path="/research/publications/Magzines_and_Newsletter"
          ></Route>{" "}
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
                <Bot_awards />
              </>
            }
            path="/academics/departments/Botany/awards"
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
                <Courses />
              </>
            }
            path="/academics/Add_on_courses"
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
                <Botany_Gallery />
              </>
            }
            path="/academics/departments/Botany/photogallery"
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
                <Student_feepayment />
              </>
            }
            path="/Student_Zone/Fee_Payment_Portal"
          ></Route>{" "}
          <Route
            element={
              <>
                <ICC />
              </>
            }
            path="/Student_Zone/ICC"
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
                <Grievance />
              </>
            }
            path="/Student_Zone/Grievance_Redressal"
          ></Route>{" "}
          <Route
            element={
              <>
                <Complaints />
              </>
            }
            path="/Student_Zone/Complainst_&_Suggetions"
          ></Route>{" "}
          <Route
            element={
              <>
                <Stud_Feedback />
              </>
            }
            path="/Student_Zone/Student_Feedback"
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
                <Scholarships />
              </>
            }
            path="/Student_Zone/Scholarship"
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
                <Archives_Notice />
              </>
            }
            path="/Archives"
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
          {/* ** ** ** ** ** ** ** ** ** ** ** * */} {/* Footer */}{" "}
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
                <Anti_Harassment/>
              </>
            }
            path="/Anti_Sexual_Harrasement"
          ></Route>{" "}
          {auth && (
            <Route
              element={
                <>
                  <Bulletins_page />
                </>
              }
              path="/Bulletin"
            ></Route>
          )}{" "}
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
                <Chem_Gallery />
              </>
            }
            path="/academics/departments/Chemistry/photogallery"
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
                <Chem_Awards />
              </>
            }
            path="/academics/departments/Chemistry/awards"
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
                <Commerce_Gallery />
              </>
            }
            path="/academics/departments/Commerce/photogallery"
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
                <Music_Events />
              </>
            }
            path="/academics/departments/Music/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_stuAch />
              </>
            }
            path="/academics/departments/Music/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_Awards />
              </>
            }
            path="/academics/departments/Music/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_Awards />
              </>
            }
            path="/academics/departments/NHE/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_facilities />
              </>
            }
            path="/academics/departments/NHE/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_facilities />
              </>
            }
            path="/academics/departments/NHE/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philo_facilities />
              </>
            }
            path="/academics/departments/Philosophy/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_Facilities />
              </>
            }
            path="/academics/departments/Physical_Education/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <PS_Facilities />
              </>
            }
            path="/academics/departments/Political_Science/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_Facilities />
              </>
            }
            path="/academics/departments/Psychology/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sanskrit_Facilities />
              </>
            }
            path="/academics/departments/Sanskrit/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Math_Awards />
              </>
            }
            path="/academics/departments/Mathematics/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philo_Awards />
              </>
            }
            path="/academics/departments/Philosophy/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_stuAch />
              </>
            }
            path="/academics/departments/NHE/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_stuAch />
              </>
            }
            path="/academics/departments/Physical_Education/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <PS_stuAch />
              </>
            }
            path="/academics/departments/Political_Science/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psy_stuAch />
              </>
            }
            path="/academics/departments/Psychology/Students'_achievements"
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
                <Comfacilities />
              </>
            }
            path="/academics/departments/Commerce/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Comassociation />
              </>
            }
            path="/academics/departments/Commerce/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Com_Awards />
              </>
            }
            path="/academics/departments/Commerce/awards"
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
          <Route
            element={
              <>
                <Eco_awards />
              </>
            }
            path="/academics/departments/Economics/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_StuAch />
              </>
            }
            path="/academics/departments/Economics/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eco_Facs />
              </>
            }
            path="/academics/departments/Economics/Facilities"
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
          <Route
            element={
              <>
                <Eng_awards />
              </>
            }
            path="/academics/departments/English/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_Eve />
              </>
            }
            path="/academics/departments/English/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Eng_Facs />
              </>
            }
            path="/academics/departments/English/Facilities"
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
                <Hindi_Facs />
              </>
            }
            path="/academics/departments/Hindi/Facilities"
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
          <Route
            element={
              <>
                <Hindi_gallery />
              </>
            }
            path="/academics/departments/Hindi/photogallery"
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
                <Hist_facs />
              </>
            }
            path="/academics/departments/History/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Hist_stuAch />
              </>
            }
            path="/academics/departments/History/Students'_achievements"
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
          <Route
            element={
              <>
                <Music_association />
              </>
            }
            path="/academics/departments/Music/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_publications />
              </>
            }
            path="/academics/departments/Music/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Music_facs />
              </>
            }
            path="/academics/departments/Music/Facilities"
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
                <NHE_association />
              </>
            }
            path="/academics/departments/NHE/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <NHE_publications />
              </>
            }
            path="/academics/departments/NHE/Publications"
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
                <Philosophy_events />
              </>
            }
            path="/academics/departments/Philosophy/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philosophy_studachieve />
              </>
            }
            path="/academics/departments/Philosophy/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philosophy_publications />
              </>
            }
            path="/academics/departments/Philosophy/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Philosophy_association />
              </>
            }
            path="/academics/departments/Philosophy/association"
          ></Route>{" "}
          // Physical Education
          <Route
            element={
              <>
                <PhysicalEdu_about />
              </>
            }
            path="/academics/departments/Physical_Education/"
          ></Route>{" "}
          <Route
            element={
              <>
                <PhysicalEdu_programoffered />
              </>
            }
            path="/academics/departments/Physical_Education/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <PhysicalEdu_fac />
              </>
            }
            path="/academics/departments/Physical_Education/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_gallery />
              </>
            }
            path="/academics/departments/Physical_Education/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_association />
              </>
            }
            path="/academics/departments/Physical_Education/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_publications />
              </>
            }
            path="/academics/departments/Physical_Education/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <PhysicalEdu_awards />
              </>
            }
            path="/academics/departments/Physical_Education/awards"
          ></Route>{" "}
          {/* Physics */}{" "}
          <Route
            element={
              <>
                <Physics_about />
              </>
            }
            path="/academics/departments/Physics/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_fac />
              </>
            }
            path="/academics/departments/Physics/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_gallery />
              </>
            }
            path="/academics/departments/Physics/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_programoffered />
              </>
            }
            path="/academics/departments/Physics/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_awards />
              </>
            }
            path="/academics/departments/Physics/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Phy_Events />
              </>
            }
            path="/academics/departments/Physics/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_studachieve />
              </>
            }
            path="/academics/departments/Physics/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_publications />
              </>
            }
            path="/academics/departments/Physics/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_facilities />
              </>
            }
            path="/academics/departments/Physics/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_labstaff />
              </>
            }
            path="/academics/departments/Physics/laboratorystaff"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_association />
              </>
            }
            path="/academics/departments/Physics/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Physics_news_magazines />
              </>
            }
            path="/academics/departments/Physics/newsletter_magazines"
          ></Route>{" "}
          // Political Science
          <Route
            element={
              <>
                <Pol_Sci_about />
              </>
            }
            path="/academics/departments/Political_Science/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Pol_Sci_fac />
              </>
            }
            path="/academics/departments/Political_Science/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <PS_gallery />
              </>
            }
            path="/academics/departments/Political_Science/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Pol_Sci_programoffered />
              </>
            }
            path="/academics/departments/Political_Science/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <PolSci_awards />
              </>
            }
            path="/academics/departments/Political_Science/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <PE_publications />
              </>
            }
            path="/academics/departments/Physical_Education/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Pol_Sci_publications />
              </>
            }
            path="/academics/departments/Political_Science/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Pol_Sci_association />
              </>
            }
            path="/academics/departments/Political_Science/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Pol_Sci_events />
              </>
            }
            path="/academics/departments/Political_Science/Events"
          ></Route>{" "}
          {/* Psychology */}{" "}
          <Route
            element={
              <>
                <Psycho_about />
              </>
            }
            path="/academics/departments/Psychology/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_awards />
              </>
            }
            path="/academics/departments/Psychology/Awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_fac />
              </>
            }
            path="/academics/departments/Psychology/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_gallery />
              </>
            }
            path="/academics/departments/Psychology/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_association />
              </>
            }
            path="/academics/departments/Psychology/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_programoffered />
              </>
            }
            path="/academics/departments/Psychology/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Psycho_publications />
              </>
            }
            path="/academics/departments/Psychology/Publications"
          ></Route>{" "}
          {/* Sanskriti */}{" "}
          <Route
            element={
              <>
                <Sans_about />
              </>
            }
            path="/academics/departments/Sanskrit/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_fac />
              </>
            }
            path="/academics/departments/Sanskrit/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_programoffered />
              </>
            }
            path="/academics/departments/Sanskrit/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sanskrit_gallery />
              </>
            }
            path="/academics/departments/Sanskrit/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_events />
              </>
            }
            path="/academics/departments/Sanskrit/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_studachieve />
              </>
            }
            path="/academics/departments/Sanskrit/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_publications />
              </>
            }
            path="/academics/departments/Sanskrit/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_awards />
              </>
            }
            path="/academics/departments/Sanskrit/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Sans_association />
              </>
            }
            path="/academics/departments/Sanskrit/association"
          ></Route>{" "}
          {/* Zoology */}{" "}
          <Route
            element={
              <>
                <Zoo_about />
              </>
            }
            path="/academics/departments/Zoology/"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_fac />
              </>
            }
            path="/academics/departments/Zoology/Faculty"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_association />
              </>
            }
            path="/academics/departments/Zoology/association"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_programoffered />
              </>
            }
            path="/academics/departments/Zoology/Programoffered"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_awards />
              </>
            }
            path="/academics/departments/Zoology/awards"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_publications />
              </>
            }
            path="/academics/departments/Zoology/Publications"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_gallery />
              </>
            }
            path="/academics/departments/Zoology/photogallery"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_events />
              </>
            }
            path="/academics/departments/Zoology/Events"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_studachieve />
              </>
            }
            path="/academics/departments/Zoology/Students'_achievements"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_facilities />
              </>
            }
            path="/academics/departments/Zoology/Facilities"
          ></Route>{" "}
          <Route
            element={
              <>
                <Zoo_labstaff />
              </>
            }
            path="/academics/departments/Zoology/laboratorystaff"
          ></Route>{" "}
          <Route
            element={
              <>
                <Library />
              </>
            }
            path="/Library"
          ></Route>{" "}
          <Route
            element={
              <>
                <Accreditation />
              </>
            }
            path="/Accreditation"
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
        <Upperfooter />
      </Router>{" "}
    </>
  );
}

export default App;
