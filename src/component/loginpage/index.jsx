import React from 'react'
 import { Link, useNavigate } from 'react-router-dom'
import Wrapper from './style'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const[contact,setContact] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()
  const login =(e) =>{
    axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
      contact,password
    }).then(res =>{
      console.log(res.data)
    }).catch(err =>{
      console.log(err.message)
      alert("Wrong Credentials")
    }).finally(() =>{
      console.log("Finally running")
      navigate("/register")
    })

  }

  return (
    <Wrapper>
        <section>
        <div>
            
            <h1>LOGIN</h1>
            <input type="text" placeholder="Contact" value={contact} onChange={(e) =>{setContact(e.target.value)}}/> <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) =>{setPassword(e.target.value)}}/> <br/>
            <input type="button" onClick={login} value="Log In"/> <br/>
            <p>Are you a new user ?</p> <Link to="/register" class="link">Register User</Link>

            <footer>&copy; copyright 2023</footer>
        </div>
        </section>

    </Wrapper>
   
  )
}

export default Login
