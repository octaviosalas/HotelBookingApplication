
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

         <h3 className='form-title' style={{fontSize:"2vh"}}>Welcome to FindYourDestinity</h3>
         <h2 className='second-title-form' style={{fontSize:"1.6vh"}}>Register to start!</h2>

         <form >

            <Box sx={{ '& > :not(style)': { m: 1 } }} style={{marginLeft:"7vh"}}>
                         <FormControl variant="standard">
                             <InputLabel htmlFor="input-with-icon-adornment" >Name</InputLabel>
                                <Input id="input-with-icon-adornment" value={name} onChange={(e) => setName(e.target.value)} startAdornment={
                                  <InputAdornment position="start"> <AccountCircle /> </InputAdornment> } />
                         </FormControl>

                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="input-with-icon-textfield" label="Email" style={{background:"rgb(207, 225, 236)"}}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start"> <MailOutlineIcon /> </InputAdornment> ),}}variant="standard"/>
            
                         <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                              <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                 <TextField id="input-with-sx" label="Password" type="password" variant="standard"  style={{background:"rgb(207, 225, 236)"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
                         </Box>
            </Box>


                   <Stack direction="row" spacing={2}><Buttonn onClick={() => registerUser()} variant="contained" endIcon={<SendIcon />} style={{marginLeft:"13vh"}}> Register </Buttonn></Stack>

                   <p className='do-you-have'> Do you have a count?{" "}<Link to={"/login"}><b className='inicia' title='sign in'>Lets Sign In!</b></Link></p>
                 <b><p className='user-created'></p></b>
        </form> 

     </div>
    
    </>
  )
}

export default Register



/*



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

import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

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



*/