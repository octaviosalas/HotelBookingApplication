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
        <Nav.Link href={`/main/${userCtx.userId}`}  className='nav-sec'>Home</Nav.Link>

          <NavDropdown title="Filter"  id="collasible-nav-dropdown">
                 <NavDropdown title="By Price"> 
                    <NavDropdown.Item href="#action/3.2"> 20-50 USD</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> 50-80 USD</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> 80-200 USD</NavDropdown.Item>
                 </NavDropdown>

                 <NavDropdown title="By Stars"> 
                    <NavDropdown.Item href="#action/3.2"> ⭐⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> ⭐⭐⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> ⭐⭐⭐⭐⭐</NavDropdown.Item>
                 </NavDropdown>

                 <NavDropdown title="By Punctuation"> 
                    <NavDropdown.Item href="#action/3.2">6+ acceptable  </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">7+ Good </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">8+ VeryGood </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">9+ Excelent </NavDropdown.Item>
                 </NavDropdown>
          </NavDropdown>

        </Nav>
         
           
      
        { didntGotUserName ?  
           <Nav> 
                 <Nav.Link href="/userRegister" className='item-nav' title='Register' >Register</Nav.Link>
                 <Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>Sign In</Nav.Link>
           </Nav>
                           :
            <Nav>
                 <NavDropdown title={userName}  id="collasible-nav-dropdown">
                 <NavDropdown.Item className='nav-select'>My Reservations</NavDropdown.Item>
                 <NavDropdown.Item className='nav-select'>Favourites</NavDropdown.Item>
                 <NavDropdown.Item className='nav-select'>Setting</NavDropdown.Item>
                 </NavDropdown>
                 <Link to={"/login"} className='lnk'><Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in'>Sign Of</Nav.Link></Link> 
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