import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SamplePDF from "./components/SamplePDF";
import PrintCV from "./components/printCV";
import CVBuilderInfoPage from "./components/cvcomponents/CVBuilderInfoPage";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="buildCV" element={<CVBuilderInfoPage />} />
          <Route path="preview" element={<PrintCV />} />
          <Route path="PDF" element={<SamplePDF />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
