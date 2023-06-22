import React, { useEffect } from 'react'
import ContinentsItems from '../components/ContinentsItems'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'


import "../styles/main.css"

const Main = () => {
  
  /*const {id} = useParams()
  console.log(id)
  const userCtx = useContext(UserContext)
 
  useEffect(() => { 
      userCtx.updateUser(id)
  }, [id])*/

  return (
    <div>     
           <ContinentsItems /> 
    </div>
  )
}

export default Main


