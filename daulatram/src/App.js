
import './App.css';
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

    </>
  );
}

export default App;
