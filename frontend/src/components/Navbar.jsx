import React, { useState } from 'react'
import plane from "../img/plane.png"
import hotel from "../img/hotel.png"
import "../styles/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext.js'

const NavBar = ({}) => {

       const [userName, setUserName] = useState(true)
       const [didntGotUserName, setDidntGotUserName] = useState(true)
       const userCtx = useContext(UserContext)
       console.log(userCtx.userId)

    const getUserNameToNavBar = () => { 
    axios.get(`http://localhost:4000/getUserById/${userCtx.userId}`)
         .then((res) => {
          console.log(res.data)
          setTimeout(() => { 
            setUserName(res.data.name)
            setDidntGotUserName(false)
          }, 500)
    
        })
         .catch((err) => console.log(err))
   }

   useEffect(() => { 
     getUserNameToNavBar()
   }, [])

  
  
  return (

    <div className='nav-container'>
    <Navbar className="transparent-navbar" collapseOnSelect expand="lg">
     <Link to={`/main/${userCtx.userId}`} className='lnk'><Navbar.Brand className='title-page'>FindYourDestiny</Navbar.Brand></Link><img src={plane} className='item-img'></img>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to={`/main/${userCtx.userId}`} className='lnk'><Nav.Link className='nav-sec'>Home</Nav.Link></Link>
          <NavDropdown title="Search"  id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Hotels</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Apartaments
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Oferts</NavDropdown.Item>
          

          </NavDropdown>
        </Nav>
         
           
      
        { didntGotUserName ?  
           <Nav> 
                 <Nav.Link href="/userRegister" className='item-nav' title='Register' >Register</Nav.Link>
                 <Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>Sign In</Nav.Link>
           </Nav>
                           :
            <Nav>
                 <Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>{userName}</Nav.Link>
                 <Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>Sign Of</Nav.Link>
            </Nav>
    }
   
    
      

          
      
      </Navbar.Collapse>

    </Navbar>

    </div>
   

 
   
   
  )
}

export default NavBar;
/*

*/