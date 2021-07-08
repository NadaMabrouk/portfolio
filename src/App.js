import './App.css';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="wrapper">
        
        <Sidebar />
          
          <div className="content">
            <div id="home" >
              <Home /> 
            </div>
            <div id="about" >
              <About /> 
            </div>
            <div id="skills">
              <Skills />
            </div>
          </div>
            
        </div>
   
    )
  }
}


export default App;