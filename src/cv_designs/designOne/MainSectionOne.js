import React from "react";


function MainSectionOne() {
  return (
    <>
      <div className="profileText">
        <h1>CANDIDATE NAME</h1>
        <span>Job Title</span>
      </div>
      
      <div className="right__side">
        <div className="about profile">
          <h2>Summary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus urna, finibus pharetra tellus a, blandit condimentum erat. Proin sed metus non ipsum interdum fermentum. Nullam aliquet nunc massa, nec molestie risus consectetur a. Maecenas mollis tellus quis massa auctor, vitae euismod tortor dapibus.
          </p>
        </div>

        <div className="about projects">
          <h2>Projects</h2>
          <div className="box">
            <div className="year__company">
              <h5>2020 - Present</h5>
              <h5>Company Name</h5>
            </div>
            <div className="text">
              <h4>Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus urna, finibus pharetra tellus a, blandit condimentum erat. Proin sed metus non ipsum interdum fermentum. Nullam aliquet nunc massa, nec molestie risus consectetur a. Maecenas mollis tellus quis massa auctor, vitae euismod tortor dapibus.
              </p>
            </div>
          </div>
        </div>

        <div className="about experience">
          <h2>Experience</h2>
          <div className="box">
            <div className="year__company">
              <h5>2020 - Present</h5>
              <h5>Company Name</h5>
            </div>
            <div className="text">
              <h4>Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus urna, finibus pharetra tellus a, blandit condimentum erat. Proin sed metus non ipsum interdum fermentum. Nullam aliquet nunc massa, nec molestie risus consectetur a. Maecenas mollis tellus quis massa auctor, vitae euismod tortor dapibus.
              </p>
            </div>
          </div>
        </div>

        <div className="about education">
          <h2>Education</h2>
          <div className="box">
            <div className="year__company">
              <h5>2020 - Present</h5>
              <h5>Educational Institution</h5>
            </div>
            <div className="text">
              <h4>Degree</h4>
              <p>
                Degree description
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default MainSectionOne