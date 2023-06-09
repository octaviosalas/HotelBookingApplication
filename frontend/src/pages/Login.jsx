import React from 'react'
import "../styles/register.css"

import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import NavBar from '../components/Navbar';
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../store/usercontext.js'

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const userCtx = useContext(UserContext)

   
    

    const logIn = () => { 
        const userToInit = ({ 
            name: name,
            email: email,
            password: password
        })
        axios.post("http://localhost:4000/loginUser", userToInit)
             .then(({data}) => { 
              userCtx.updateUser(data.user.id)
              setTimeout(() => { 
                console.log(userCtx.userId)
                navigate(`/main/${userCtx.userId}`)
              }, 1500)
             })
             .catch((err) => { 
                console.log(err)
             })
    }


  return (
    <>

       <h1 className='title-login'>You have successfully registered. Now you can login</h1>
     <div className="formContainer">

    
         <h2 className='second-title-form'>Log in!</h2>

         <form >

                 


                 <div className="inputContainer">
                    <div className="left">
                        <label htmlFor="correo">Correo</label>
                        <input name="correo" id="correo" type="email" placeholder="Correo..."  autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                         <img src={pngemail} alt="" />
                </div>



               <div className="inputContainer">
                   <div className="left">
                      <label htmlFor="contraseña">Contraseña</label>
                      <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña..." autoComplete="off"  value={password} onChange={(e) => setPassword(e.target.value)} />
                   </div>
                      <img src={pngpassword} alt="" />
               </div>

                   <button type='button' className='btn-confirm' title='register' onClick={() => logIn()}> Log In</button>
                   <Link to={"/"}><p>If you dont have a count, lets Register!</p></Link>

               
        </form> 

     </div>
    
    </>
  )
}

export default Login
