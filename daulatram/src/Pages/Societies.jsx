import React,{useState} from 'react'
import "./Societies.css"
import {SocietiesInfo} from "./SocietiesInfo"
const Societies = () => {
  const [Info, setSocietiesInfo] = useState(SocietiesInfo);

  return (
    <>
<div className='main_head'>
    <h1><span>Societies</span></h1>
</div>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
{/* <div class="btn">
  <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <i class="fab fa-linkedin"></i>
  </a>
</div> */}
{Info.map((currElem)=>{
  const { id, info, img,link } = currElem;
return(
<div class="first hero">
  <img class="hero-profile-img" src={img} alt=""/>
  <div class="hero-description-bk"></div>
  {/* <div class="hero-logo">
    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt=""/>
  </div> */}
  <div class="hero-description">
    <p>{info}</p>
  </div>
  {/* <div  class="hero-date">
    <p>20.02.2019</p>
  </div> */}
  <div class="hero-btn">
    <a href={link}>Learn More</a>
  </div>
</div>
);
})}


{/* <div class="second hero">
  <img class="hero-profile-img" src="http://www.pennedpeeps.com/wp-content/uploads/2020/03/DSC_0346-768x555.jpg" alt=""/>
  <div class="hero-description-bk"></div>
  <div class="hero-logo">
    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt=""/>
  </div>
  <div class="hero-description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div  class="hero-date">
    <p>20.02.2019</p>
  </div>
  <div class="hero-btn">
    <a href="#">Learn More</a>
  </div>
</div> */}

    
    </>
  )
}

export default Societies