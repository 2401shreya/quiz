import React from 'react'
 import { Link, useNavigate } from 'react-router-dom'
import Wrapper from './style'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const[contact,setContact] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()


    const login=(e)=>{
      e.target.value="Logging in..."
      e.target.disabled=true
      axios.post("https://quizattendace.onrender.com/api/user/login",{
        contact,password
      }).then((res)=>{
        console.log(res.data)
        if(res.data.user.role==="Student")
        {navigate("/student")
        alert("Welcome to App")}
        else
        {navigate("/teacher")
        alert("Welcome to App")}
      }).catch(err=>{
        console.log(err)
        alert("Wrong Credential")
      }).finally(()=>{
        console.log("Finally running")
        e.target.value="Logged in"
        e.target.disabled=false
      })

  }

  return (
    <Wrapper>
        <section>
        <div>
            
            <h1>LOGIN</h1>
            <input type="text" placeholder="Contact" value={contact} onChange={(e) =>{setContact(e.target.value)}}/> <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) =>{setPassword(e.target.value)}}/> <br/>
            <input type="button" onClick={login} disabled={false} value="Log In"/> <br/>
            <p>Are you a new user ?</p> <Link to="/register" class="link">Register User</Link>

            <footer>&copy; copyright 2023</footer>
        </div>
        </section>

    </Wrapper>
   
  )
}

export default Login




