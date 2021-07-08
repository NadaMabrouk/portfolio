import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

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
               <Navbar className="navbar" defaultactivekey="/home" expand="md" onToggle={this.toggle} expanded={this.state.collapse} >
                 <Navbar.Toggle aria-controls="basic-navbar-nav" className={this.state.collapse?"transformBtn":""}/>
                 <Navbar.Collapse  id="basic-navbar-nav" >
                    <Nav className="mr-auto flex-column sidebar" onClick={this.closeNav}>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://i.postimg.cc/8C4kjkSs/personal-Photo.jpg"
                                width="150"
                                height="150"
                                alt="Nada Mabrouk"
                            />
                        </Navbar.Brand>
                        <h4>Nada Mabrouk</h4>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link eventKey="#about">About</Nav.Link>
                        <Nav.Link eventKey="#skills">Skills</Nav.Link>
                        <Nav.Link eventKey="#projects">Projects</Nav.Link>
                        <Nav.Link eventKey="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Sidebar;

