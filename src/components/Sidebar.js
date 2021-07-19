import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import '../styles/sidebar.css'

class Sidebar extends Component{
    state = {
        collapse: false,
        activeKey: "#home"
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
    handleSelect = (selectedKey) => {
        this.setState({activeKey: selectedKey});
    }
    render(){  
        
        return(
               <Navbar className="navbar" expand="md" onToggle={this.toggle} expanded={this.state.collapse} >
                 <Navbar.Toggle aria-controls="basic-navbar-nav" className={this.state.collapse?"transformBtn":""}/>
                 <Navbar.Collapse  id="basic-navbar-nav" >
                    <Nav className="mr-auto flex-column sidebar" id="side-bar" activeKey={this.state.activeKey} onSelect={this.handleSelect} onClick={this.closeNav}>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://i.postimg.cc/8C4kjkSs/personal-Photo.jpg"
                                width="150"
                                height="150"
                                alt="Nada Mabrouk"
                            />
                        </Navbar.Brand>
                        <h4>Nada Mabrouk</h4>
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Sidebar;

