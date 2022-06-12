
import './App.css';
import Bulletin from './Components/Bulletin';
import Header from './Components/Header'
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
        <Navbar />
        <Bulletin />
        <Footer />
      </Router>

    </>
  );
}

export default App;
