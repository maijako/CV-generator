import React from 'react';
// import background from "../assets/bckgr_loop.mp4";
import background from "../assets/engin-akyurt.jpg";
import "../styles/main.css";
import Slider from "./Slider";
import img1 from "../assets/Shutterstock_2170929773.png";
import img2 from "../assets/Shutterstock_2140212583.png";
import img3 from "../assets/Shutterstock_1843058941.png";


function Main() {
  return (
    <div className="main">
      <div className="overlay"></div>
      {/* <video src={background} autoPlay loop muted /> */}
      <img className="bgr" src={background} alt="blue background"/>
      <div className="welcome">
        <div className="border">
        <h1 className="title">CV BUILDER</h1>
        <p className="headline">Technical CV made easy</p>
        </div>
      </div>
      
  
      <Slider imageSrc={img1}
        title={"Enter your details"}
        subtitle={"Fill out a simple form to enter your skills, projects, education and experience"}
      />
      <Slider imageSrc={img2}
        title={"Enhance with AI"}
        subtitle={"Use the built-in AI tool to enhance your writing and sound professional"}
        flipped={true}
      />
      <Slider imageSrc={img3}
        
        title={"Generate CV"}
        subtitle={"Generate your styled professional technical CV to stand out from the crowd"}
      />
    </div>
  )
}

export default Main