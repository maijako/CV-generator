import React from "react";
import { FaGithub } from "react-icons/fa";


function MainSectionOne() {
  return (
    <>
      <header className="candidateName">
        <h1>John Doe</h1>
      </header>

      <div class="section">
        <div class="section-header">Contact details:</div>
        <div class="section-content">
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: john.doe@gmail.com</li>
            <li>Location: New York, NY</li>
            <li>Website: www.johndoe.com</li>
            <li>LinkedIn: www.linkedin.com/in/johndoe</li>
            <li>GitHub: www.github.com/johndoe</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-header">Summary:</div>
        <div class="section-content">
          <p>A highly skilled software engineer with over 5 years of experience developing web applications using various programming languages and frameworks.</p>
        </div>
      </div>

      <div class="section">
        <div class="section-header">Technical skills:</div>
        <div class="section-content">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Git</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-header">Projects:</div>
        <div class="section-content">
          <h2>Project 1</h2>
          <p>A web application that allows users to create and share recipes.</p>
          <ul>
            <li>Developed using React, Node.js, and MongoDB.</li>
            <li>Implemented user authentication using JWT.</li>
            <li>Deployed on AWS using Elastic Beanstalk.</li>
          </ul>

          <h2>Project 2</h2>
          <p>A mobile app that helps users track their daily water intake.</p>
          <ul>
            <li>Developed using React Native and Firebase.</li>
            <li>Implemented push notifications using Firebase Cloud Messaging.</li>
            <li>Published on the App Store and Google Play.</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-header">Experience:</div>
        <div class="section-content">
          <h2>Software Engineer at ABC Company</h2>
          <p>June 2019 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Collaborated with designers to implement UI/UX designs.</li>
            <li>Integrated third-party APIs and services.</li>
            <li>Optimized web applications for performance and scalability.</li>
          </ul>

          <h2>Software Developer at XYZ Corporation</h2>
          <p>January 2017 - June 2019</p>
          <ul>
            <li>Developed and maintained web applications using AngularJS and Java.</li>
            <li>Implemented REST APIs for mobile applications.</li>
            <li>Created and executed test plans.</li>
            <li>Provided technical support to clients.</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-header">Education:</div>
        <div class="section-content">
          <h2>Bachelor of Science in Computer Science</h2>
          <p>University of California, Los Angeles (UCLA)</p>
          <p>September 2013 - June 2017</p>
        </div>
      </div>

    </>
  )
}

export default MainSectionOne