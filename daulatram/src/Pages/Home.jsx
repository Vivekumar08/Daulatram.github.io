import React from "react";
import Slider from "../Components/Slider/Slider";
import Information from "../Components/Information";
import Campustour from "../Components/Campus Tour/Campustour";
import Quicklinks from "../Components/Quicklinks";
import Events from "../Components/Events/Events";

function Home() {
  return (
    <>
      <Slider />
      <Information />
      <Campustour />
      <Quicklinks />
      <Events />
    </>
  );
}

export default Home;
