import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
