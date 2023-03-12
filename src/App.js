import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BasicUserInfo from "./components/BasicUserInfo";

const navbarLinks = [
  {url: "#", title: "HOME"},
  {url: "#", title: "ABOUT"},
  {url: "#", title: "BUILD CV"},
  {url: "#", title: "CONTACT"},
];


function App() {
  return (
    <Router>
      <div>
        <Navbar navbarLinks={navbarLinks}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="buildCV" element={<BasicUserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
