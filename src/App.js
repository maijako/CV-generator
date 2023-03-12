import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const navbarLinks = [
  {url: "#", title: "home"},
  {url: "#", title: "New starter"},
  {url: "#", title: "Some experience"},
  {url: "#", title: "Experienced dev"},
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
