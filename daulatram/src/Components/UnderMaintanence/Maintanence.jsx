import React from "react";
import "./main.css"

const Maintanence = () => {
  return (
    <div className="mb-56 mt-44">
      <div className="cont">
        <div className="what-is-up">
          <div className="spinny-cogs">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <i className="fa fa-5x fa-cog fa-spin" aria-hidden="true"></i>
            <i className="fa fa-3x fa-cog" aria-hidden="true"></i>
          </div>
          <h1 className="md:maint mb-14 font-bold text-3xl ">coming soon</h1>
          <h2 className="md:text-xl text-sm m-5">
            Our developer team is hard at work updating our system. Please wait or you can browse other tabs and pages of our website.
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Maintanence;
