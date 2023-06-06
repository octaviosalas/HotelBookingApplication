import React from 'react'
import plane from "../img/plane.png"
import hotel from "../img/hotel.png"
import "../styles/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

const NavBar = () => {

  const aer = () => { 
    console.log("aa")
  }

  return (
    <Navbar className="transparent-navbar" collapseOnSelect expand="lg">
      
      <Navbar.Brand href="/" className='title-page'>Airbnb</Navbar.Brand><img src={plane} className='item-img'></img>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className='nav-sec'>Home</Nav.Link>
          <NavDropdown title="Search"  id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Hotels</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Apartaments
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Oferts</NavDropdown.Item>
          

          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/a" className='item-nav' title='Register' >Register</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>
           Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
   
  </Navbar>
   
   
  )
}

export default NavBar;
