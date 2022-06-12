import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";

import './App.css';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Bulletin />
        <Navbar />
        <Quicklinks/>
        <Footer />
      </Router>

    </>
  );
}

export default App;
