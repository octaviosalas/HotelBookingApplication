import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/register.css"
import pngname from "../img/name.png"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import NavBar from '../components/Navbar';
import axios from "axios"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {

    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const registerUser = () => { 
      const dataNewUserToBeRegistered = { 
         name: name,
         password: password,
         email: email
      }
      axios.post("http://localhost:4000/registerUser", dataNewUserToBeRegistered)
           .then(({data}) => { 
                console.log(data)
                navigate("/login")
           })
           .catch((err) => { 
            console.log(err)
           })
    }



  return (
    <>

    
     <div className="formContainer">

         <h3 className='form-title'>Welcome to FindYourDestinity</h3>
         <h2 className='second-title-form'>Register to start!</h2>

         <form >

                 <div className="inputContainer">
                   <div className="left">
                       <label htmlFor="nombre">Nombre</label>
                       <input name="nombre" id="nombre" type="text" placeholder="Nombre..." autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                       <img src={pngname} alt="" />
                </div>


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
                      <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña..." autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                   </div>
                      <img src={pngpassword} alt="" />
               </div>

                   <button type='button' className='btn-confirm' title='register' onClick={() => registerUser()}> Register</button>

                   <p className='do-you-have'> Do you have a count?{" "}<Link to={"/login"}><b className='inicia' title='sign in'>Lets Sign In!</b></Link></p>
                 <b><p className='user-created'></p></b>
        </form> 

     </div>
    
    </>
  )
}

export default Register



