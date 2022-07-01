import React, { useState } from "react";
import "./Societies.css";
import { SocietiesInfo } from "./SocietiesInfo";
const Societies = () => {
  const [Info, setSocietiesInfo] = useState(SocietiesInfo);

  return (
    <>
    
      <div className="main_head">
        <h1>
          <span>Societies</span>
        </h1>
      </div>

      {Info.map((currElem) => {
        const { id, info, img, link } = currElem;
        return (
          <div class="first hero">
            <img class="hero-profile-img" src={img} alt="" />
            <div class="hero-description-bk"></div>
           
            <div class="hero-description">
              <p>{info}</p>
            </div>
            
            <a href={link}>
              <div class="hero-btn">Learn More</div>
            </a>
          </div>
        );
      })}

     
    </>
  );
};

export default Societies;
