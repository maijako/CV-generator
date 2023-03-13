import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BasicUserInfo from "./components/BasicUserInfo";
import SamplePDF from "./components/SamplePDF";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="buildCV" element={<BasicUserInfo />} />
          <Route path="preview" element={<SamplePDF />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
