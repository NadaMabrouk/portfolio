import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import '../styles/sidebar.css'

class Sidebar extends Component{
    state = {
        collapse: false,
    }

    toggle = (expanded) => {
        this.setState( {
            collapse: expanded
        })
    }
    closeNav = () => {
        this.setState({
            collapse: false
        })
    }
 
    render(){  
        
        return(
               <Navbar className="navbar" expand="md" onToggle={this.toggle} expanded={this.state.collapse} >
                 <Navbar.Toggle aria-controls="basic-navbar-nav" className={this.state.collapse?"transformBtn":""}/>
                 <Navbar.Collapse  id="basic-navbar-nav" >
                    <Nav className="mr-auto flex-column sidebar" id="side-bar" onClick={this.closeNav}>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://i.postimg.cc/8C4kjkSs/personal-Photo.jpg"
                                width="150"
                                height="150"
                                alt="Nada Mabrouk"
                            />
                        </Navbar.Brand>
                        <h4>Nada Mabrouk</h4>
                        <Scrollspy items={ ['home', 'about', 'skills','projects','contact']} offset={-40} currentClassName="active">
                            <a href="#home" className="nav-link">Home</a>
                            <a href="#about" className="nav-link">About</a>
                            <a href="#skills" className="nav-link">Skills</a>
                            <a href="#projects" className="nav-link">Projects</a>
                            <a href="#contact" className="nav-link">Contact</a>
                        </Scrollspy>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Sidebar;

