import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";

import './App.css';
<<<<<<< HEAD
import Bulletin from './Components/Bulletin';
import Header from './Components/Header'
import Slider from './Components/Slider/Slider';


function App() {
  return (
    <>
      <Header />
       <Bulletin/> 
       {/* <Slideshow/>  */}
       <Slider/>
=======
import Navbar from './Components/Nav';
import Footer from './Components/Footer';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

function App() {
    return ( <
        >
        <
        Router >
        <
        Header / >
        <
        Bulletin / >
        <
        Navbar / >
        <
        Quicklinks / >
        <
        Footer / >
        <
        /Router>
>>>>>>> 88016f64afa8a45dcaf524a73254dbc008ef2171

        <
        />
    );
}

export default App;