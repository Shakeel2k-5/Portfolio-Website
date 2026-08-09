import React from "react";
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom";
import "./index.css"
import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about"
import Projects from "./projects";
import Contact from "./contact"
import FooterDiv from "./footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode>
    <HashRouter>
        <div className="rootdiv">
            <Navbar/>
            
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
            <FooterDiv/>
        </div>
    </HashRouter>
    
</React.StrictMode>)
