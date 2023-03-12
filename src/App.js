import React from "react";
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
    <div>
      <Navbar navbarLinks={navbarLinks}/>
      <Main />
      <BasicUserInfo />
    </div>
  );
}

export default App;
