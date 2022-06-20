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
          <h1 className="maint">Under Maintenance</h1>
          <h2>
            Our developers are hard at work updating your system. Please wait
            while we do this. We have also made the spinning cogs to distract
            you.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Maintanence;
