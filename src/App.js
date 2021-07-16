import './App.css';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  
  render(){
    return (
      <div className="wrapper">
        <Sidebar />
          <div className="content">
            <section id="home">
              <Home /> 
            </section>
            <section id="about">
              <About /> 
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <ContactUs />
            </section>
          </div>
        </div>
   
    )
  }
}


export default App;