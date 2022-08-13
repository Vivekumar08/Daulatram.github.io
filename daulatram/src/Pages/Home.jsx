import React from "react";
import Slider from "../Components/Slider/Slider";
import Information from "../Components/Information";
import Campustour from "../Components/Campus Tour/Campustour";
import Quicklinks from "../Components/Quicklinks";
import Events1 from "../Components/Events/Events1";

function Home() {
  return (
    <>
      <Slider />
      <Information />
      <Campustour />
      <Quicklinks />
      <Events1/>
    </>
  );
}

export default Home;
