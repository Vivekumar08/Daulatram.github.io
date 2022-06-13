import "./App.css";
import Header from "./Components/Header";
import Quicklinks from "./Components/Quicklinks";
import Bulletin from "./Components/Bulletin";

import './App.css';
import "./Components/Events/Events.css"

import Slider from './Components/Slider/Slider';
import Events from "./Components/Events/Events";


function App() {
  return (
    <>
      <Header />
       <Bulletin/> 
       
       <Slider/>
{/* <Events/> */}
        </>
    );
}

export default App;