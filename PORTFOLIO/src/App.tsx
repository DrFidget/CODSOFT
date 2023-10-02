import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main.tsx";
import About from "./Components/About/About.tsx";
import Career from "./Components/Career/Career.tsx";
import Projects from "./Components/Projects/Projects.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-300 min-h-screen">
        <div className="flex flex-col h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
