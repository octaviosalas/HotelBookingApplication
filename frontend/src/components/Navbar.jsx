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
import { useNavigate } from 'react-router-dom';

const NavBar = ({}) => {

       const [userName, setUserName] = useState(true)
       const [didntGotUserName, setDidntGotUserName] = useState(true)
       const userCtx = useContext(UserContext)
       const navigate = useNavigate()
       console.log(userCtx.userId)

    const getUserNameToNavBar = () => { 
      axios.get(`http://localhost:4000/getUserById/${userCtx.userId}`)
         .then((res) => {
          console.log(res.data)
          setTimeout(() => { 
            setUserName(res.data.name)
            setDidntGotUserName(false)
            console.log("szhflksal")
          }, 1000)
    
        })
         .catch((err) => console.log(err))
   }

   useEffect(() => { 
     getUserNameToNavBar()
   }, [userCtx.userId])


   const goFavourites = () => { 
    navigate(`/favourites/${userCtx.userId}`)
   }

   const goMyReserves = () => { 
    navigate(`/myReserves/${userCtx.userId}`)
   }

   const signOf = () => { 
      userCtx.updateUser(null)
   }
 
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
                    <NavDropdown.Item   href="/twentyToFifty"> 20-50 USD</NavDropdown.Item>
                    <NavDropdown.Item  href="/fiftyToEighty"> 50-80 USD</NavDropdown.Item>
                    <NavDropdown.Item href="/eightyToTwoHundred"> 80-200 USD</NavDropdown.Item>
                 </NavDropdown>

                 <NavDropdown title="By Stars"> 
                    <NavDropdown.Item href="/threeStars"> ⭐⭐⭐ </NavDropdown.Item>
                    <NavDropdown.Item href="/fourStars"> ⭐⭐⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="/fiveStars"> ⭐⭐⭐⭐⭐</NavDropdown.Item>
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
                 <NavDropdown.Item className='nav-select' onClick={() => goMyReserves()}>My Reservations</NavDropdown.Item>
                   <NavDropdown.Item onClick={() => goFavourites()} className='nav-select'>Favourites</NavDropdown.Item>
                 <NavDropdown.Item className='nav-select'>Setting</NavDropdown.Item>
                 </NavDropdown>
                 <Link to={"/login"} className='lnk'><Nav.Link eventKey={2} href="#memes" className='item-nav' title='sign in' onClick={() => signOf()}>Sign Of</Nav.Link></Link> 
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