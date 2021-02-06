import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/About-me';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
const App =()=>(
    <div>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Skills/>
        <Contact/>
    </div>
);
export default App;