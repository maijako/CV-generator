import React from 'react';
import background from "../assets/bckgr_loop.mp4";
import "../styles/main.css";
import { useRef } from 'react';
import Slider from "./Slider";
import img1 from "../assets/mick-haupt-baby.jpg";
import img2 from "../assets/artur-tumasjan-padawan.jpg";
import img3 from "../assets/remy_loz_master.jpg";


function Main() {
  const baby = useRef(null);
  const padawan = useRef(null);
  const master = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="main">
      <dv className="overlay"></dv>
      <video src={background} autoPlay loop muted />
      <div className="welcome">
        <h1>WELCOME</h1>
        <p>To your professional Tech CV Builder</p>
        <br></br>
        <p>Select your level of experience</p>
        <button onClick={() => scrollToSection(baby)} >Baby Yoda</button>
        <button onClick={() => scrollToSection(padawan)}>Padawan</button>
        <button onClick={() => scrollToSection(master)}>Jedi Master</button>
      </div>
      <div ref={baby}>
      <Slider imageSrc={img1}
        
        title={"Baby Yoda"}
        subtitle={"I have never had a developer job, I'm only starting out"}
      />
      </div>

      <div ref={padawan}>
      <Slider imageSrc={img2}
        title={"Young Padawan"}
        subtitle={"I have had some coding jobs before"}
        flipped={true}
      />
      </div>

      <div ref={master}>
      <Slider imageSrc={img3}
        
        title={"Jedi Master"}
        subtitle={"I have lots of experience"}
      />
      </div>



    </div>
  )
}

export default Main