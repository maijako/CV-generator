import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { GiEarthAmerica } from "react-icons/gi";
import { BsGearFill, BsFillPersonFill, BsFillRocketTakeoffFill, BsBriefcaseFill, BsFillMortarboardFill } from "react-icons/bs";



function MainSectionOne() {
  return (
    <>
      <header className="candidateName">
        <h1>Miles O'Brien</h1>
        <p className="contact__details">
          <FaPhone className="header__icon" /> +44 789654321
          <FaEnvelope className="header__icon" /> obrien@starfleet.com
          <ImLocation2 className="header__icon" /> Deep Space 9
        </p>
      </header>

      <div className="websites">
        <p className="website__details">
          <GiEarthAmerica className="website__icon" /> www.spacemiles.com
          <FaGithub className="website__icon" /> www.github.com/starbrien
          <FaLinkedin className="website__icon" /> www.linkedin.com/in/mobrien
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <BsFillPersonFill className="cv__icon" />
        </div>
        <div className="section-content">
          <p>A highly skilled software engineer with over 5 years of experience developing web applications using various programming languages and frameworks.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsGearFill className="cv__icon" />
        </div>
        <div className="section-skills">
          <ul className="skills-ul">
            <li className="skills-li">JavaScript</li>
            <li className="skills-li">React</li>
            <li className="skills-li">Node.js</li>
            <li className="skills-li">Express.js</li>
            <li className="skills-li">SQL</li>
            <li className="skills-li">NoSQL</li>
            <li className="skills-li">Git</li>
            <li className="skills-li">AWS</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div className="section-header">
          <BsFillRocketTakeoffFill className="cv__icon" />
        </div>
        <div class="section-content">
          <div className="projects">Recipe App
            <p>
              <FaLink className="pro__icon" />
              www.netlify.com</p>

            <p>
              <FaGithub className="pro__icon" />
              www.github.com/water-tracker</p>
          </div>
          <p>A web application that allows users to create and share recipes.</p>
          <ul>
            <li>Developed using React, Node.js, and MongoDB.</li>
            <li>Implemented user authentication using JWT.</li>
            <li>Deployed on AWS using Elastic Beanstalk.</li>
          </ul>

          <div className="projects">Water Tracker

            <p>
              <FaLink className="pro__icon" />
              www.netlify.com</p>

            <p>
              <FaGithub className="pro__icon" />
              www.github.com/water-tracker</p>
          </div>
          <p>A mobile app that helps users track their daily water intake.</p>
          <ul>
            <li>Developed using React Native and Firebase.</li>
            <li>Implemented push notifications using Firebase Cloud Messaging.</li>
            <li>Published on the App Store and Google Play.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsBriefcaseFill className="cv__icon" />
        </div>
        <div className="section-content">
          <div className="job">CTO
            <p className="dates">June 2019 - Present</p>
          </div>

          <p>Starfleet</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Collaborated with designers to implement UI/UX designs.</li>
            <li>Integrated third-party APIs and services.</li>
            <li>Optimized web applications for performance and scalability.</li>
          </ul>

          <div className="job">Software Engineer
            <p className="dates">June 2015 - June 2019</p>
          </div>
          <p>Starfleet</p>
          <ul>
            <li>Developed and maintained web applications using AngularJS and Java.</li>
            <li>Implemented REST APIs for mobile applications.</li>
            <li>Created and executed test plans.</li>
            <li>Provided technical support to clients.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsFillMortarboardFill className="cv__icon" />
        </div>
        <div class="section-content">
          <div className="edu">Front-end Web Development Bootcamp Certificate
            <p className="edu__dates">Nov 2022 - March 2023</p>
          </div>
          <p className="school">EdX</p>


          <div className="edu">BSc, Computer Science
            <p className="edu__dates">June 2010 - June 2015</p>
          </div>
          <p className="school">Starfleet Academy</p>
        </div>
      </div>
    </>
  )
}

export default MainSectionOne