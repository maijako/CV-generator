import React from 'react';
import background from "../assets/bckgr_loop.mp4";

function Main() {
  return (
    <div className="main">
        <dv className="overlay"></dv>
        <video src={background} autoPlay loop muted />
        <div className="content">
           <h1>WELCOME</h1>
           <p>To your professional Tech CV Builder</p>

        </div>
    </div>
  )
}

export default Main