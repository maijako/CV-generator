import React from 'react';
// import background from "../assets/codioful.jpg";
import hero from "../assets/shutterstock_1490541647.jpg";
import "../styles/main.css";
import Slider from "./Slider";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from "../assets/Shutterstock_2170929773.png";
import img2 from "../assets/Shutterstock_2140212583.png";
import img3 from "../assets/Shutterstock_1843058941.png";


function Main() {
  return (

    <div className="main-container">
      <div className="main">
        {/* <img className="bgr" src={background} alt="blue background"/> */}
        <div className="overlay"></div>
        <div className="hero">
          <img className="hero__image" src={hero} alt="futuristic coding" />
        </div>

        <div className="welcome">
          <div className="border">
            <h1 className="title">CV BUILDER</h1>
            <p className="headline">Technical CV made easy</p>
          </div>
        </div>

        <div className="colorBackground">
          <Slider imageSrc={img1}
            title={"Enter your details"}
            subtitle={"Fill out a simple form to enter your skills, projects, education and experience"}
          />
          <Slider imageSrc={img2}
            title={"Enhance with AI"}
            subtitle={"Use the built-in AI tool to enhance your writing and sound professional"}
            flipped={true}
          />
          <Slider
            imageSrc={img3}
            title={"Generate CV"}
            subtitle={"Generate your styled professional technical CV to stand out from the crowd"}
          />
        </div>
      </div>
      <div className="start-building-container">
      <Link to="/build-cv">
          <Button className="btn-lg btn-primary start-building-button wiggle-btn">START BUILDING</Button>
          </Link>
      </div>
      </div>
  );
}


export default Main;