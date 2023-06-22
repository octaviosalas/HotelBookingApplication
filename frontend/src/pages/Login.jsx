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
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Buttonn from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Login = () => {

    
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [positiveMsj, setPositiveMsj] = useState(true)
    const [negativeMsj, setNegativeMsj] = useState(true)
    const navigate = useNavigate()
    const userCtx = useContext(UserContext)

   
    

    const logIn = () => { 
        const userToInit = ({ 
            email: email,
            password: password
        })
        axios.post("http://localhost:4000/loginUser", userToInit)
             .then(({data}) => { 
              setPositiveMsj(false)
              console.log(data)
              setTimeout(() => { 
                userCtx.updateUser(data.user.id)
                console.log("El ID del contexto ahora es:" + data.user.id)
              }, 500)
                 setTimeout(() => { 
                 console.log(userCtx.userId)
                 navigate(`/main/${data.user.id}`)
              }, 2000)
             })
             .catch((err) => { 
                console.log(err)
                setNegativeMsj(false)
             })
    }

    useEffect(() => { 
   console.log(password)
    }, [password])



  return (
    <>

    
     <div className="formContainer">

       
         <h2 className='second-title-form' style={{fontSize:"2.3vh", textAlign:"center"}}>Log in!</h2>

         <form >

          <Box sx={{ '& > :not(style)': { m: 1 } }} style={{marginLeft:"7vh"}}>
             

            <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="input-with-icon-textfield" label="Email"  style={{background:"rgb(207, 225, 236)"}} 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> <MailOutlineIcon /> </InputAdornment> ),}}variant="standard"/>
                    <br />
                    <br />
             <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                     <TextField id="input-with-sx" label="Password" type="password"  style={{background:"rgb(207, 225, 236)"}}  variant="standard"  value={password} onChange={(e) => setPassword(e.target.value)}/>
             </Box>
         </Box>


       <Stack direction="row" spacing={2}><Buttonn onClick={() => logIn()} variant="contained" endIcon={<SendIcon />} style={{marginLeft:"13vh"}}> Login </Buttonn></Stack>
       <Link to={"/"}><p>If you dont have a count, lets Register</p></Link>
       <Link to={"/"}><p>I forgot my password</p></Link>

                    {positiveMsj ? null : <p>Entering. The data was correct</p>}
                    {negativeMsj ? null : <p>The data entered was incorrect</p>}
     </form> 


     </div>
    
    </>
  )
}

export default Login


/*


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
    const [positiveMsj, setPositiveMsj] = useState(true)
    const [negativeMsj, setNegativeMsj] = useState(true)
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
              setPositiveMsj(false)
              setTimeout(() => { 
                console.log(userCtx.userId)
                navigate(`/main/${userCtx.userId}`)

              }, 1500)
             })
             .catch((err) => { 
                console.log(err)
                setNegativeMsj(false)
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
                   
                    {positiveMsj ? null : <p>Entering. The data was correct</p>}
                    {negativeMsj ? null : <p>The data entered was incorrect</p>}
        </form> 

     </div>
    
    </>
  )
}

export default Login
*/