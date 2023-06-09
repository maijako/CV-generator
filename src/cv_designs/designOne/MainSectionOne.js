import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { GiEarthAmerica } from "react-icons/gi";
import { BsGearFill, BsFillPersonFill, BsFillRocketTakeoffFill, BsBriefcaseFill, BsFillMortarboardFill } from "react-icons/bs";
//import useSelector from react-redux
import { useSelector } from 'react-redux';


function MainSectionOne() {
  //useSelectors for accessing data from the redux store
  const profile = useSelector(state => state.profile);
  console.log(profile);
  const projects = useSelector(state => state.project);
  const technologies = useSelector(state => state.technologies.technologies);
  const summary = useSelector(state => state.summary.summary);
  const experienceDetails = useSelector(state => state.experience);
  const educationDetails = useSelector(state => state.education);


  return (
    <>
      <header className="candidateName">
        <h1>{profile.firstName} {profile.lastName}</h1>
        <p className="contact__details">
          <FaPhone className="header__icon" /> {profile.phone}
          <FaEnvelope className="header__icon" /> {profile.email}
          <ImLocation2 className="header__icon" /> {profile.userLocation}
        </p>
      </header>

      <div className="websites">
        <p className="website__details">
          <GiEarthAmerica className="website__icon" /> {profile.webPortfolio}
          <FaGithub className="website__icon" /> {profile.userNameGitHub === '' ? '' : "www.github.com/"+profile.userNameGitHub}
          <FaLinkedin className="website__icon" />{profile.userNameLinkedIn === '' ? '' : "www.linkedin.com/in/"+profile.userNameLinkedIn}
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <BsFillPersonFill className="cv__icon" />
        </div>
        <div className="section-content">
          {/* <p>A highly skilled software engineer with over 5 years of experience developing web applications using various programming languages and frameworks.</p> */}
          <p>{summary}</p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsGearFill className="cv__icon" />
        </div>
        <div className="section-skills">
          <ul className="skills-ul">
            {technologies.map((technology, index) => (
              <li key={index} className="skills-li">{technology.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsFillRocketTakeoffFill className="cv__icon" />
        </div>
        <div className="section-content">

          {
            projects.map((project, index) => (
              <div key={index}>
                <div className="projects">{project.projectTitle}
                  <p>
                    <FaLink className="pro__icon" />
                    {project.deployedLink}</p>

                  <p>
                    <FaGithub className="pro__icon" />
                    {project.gitHubLink}</p>
                </div>
                <p>{project.projectSummary}</p>
                
                <ul>
                  <li>{project.projectContribution}</li>
                  <li>
                    Skills Used:&nbsp;&nbsp;
                    {
                      project.skillsUsed.map((skill, skillIndex, skillsList) => {
                        
                        if(skillsList.length-1 === skillIndex){
                          return(skill.title);
                        } else {
                          return(skill.title+', ');
                        }
                        
                      })
                    }
                  </li>
                </ul>
              </div>
            ))
          }
          {/* <div className="projects">Recipe App
            <p>
              <FaLink className="pro__icon" />
              www.netlify.com</p> */}

          {/* <p>
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
          </ul> */}
        </div>
      </div>

      {/* <div className="section">
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
      </div> */}

      <div className="section">
        <div className="section-header">
          <BsBriefcaseFill className="cv__icon" />
        </div>
        <div className="section-content">
          {experienceDetails.map((experience, index) => (
            <div key={index}>
              <div className="job">{experience.jobTitle}
                <p className="dates">{experience.startDate} - {experience.endDate === '' ? "Present" : experience.endDate}</p>
              </div>
              <p>{experience.companyName}</p>
              <ul>
                <li>{experience.roleDetails}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <BsFillMortarboardFill className="cv__icon" />
        </div>
        <div className="section-content">
          {/* <div className="edu">Front-end Web Development Bootcamp Certificate
            <p className="edu__dates">Nov 2022 - March 2023</p>
          </div>
          <p className="school">EdX</p>


          <div className="edu">BSc, Computer Science
            <p className="edu__dates">June 2010 - June 2015</p>
          </div>
          <p className="school">Starfleet Academy</p> */}

          {educationDetails.map((education, index) => (
            <div key={index}>
              <div className="edu">{education.degreeLevel}, {education.courseName}
                <p className="edu__dates">{education.startDate} - {education.endDate}</p>
              </div>
              <p className="school">{education.uniName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainSectionOne