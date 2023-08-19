import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./style";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const[name, setName] = useState("");
  const[contact, setContact] = useState("");
  const[password, setPassword] = useState("");

  const add =(e)=>{
    e.target.value="Registering..."
    e.target.disabled=true
   axios.post("https://server-api1-li2k.onrender.com/api/user/add",{
    name,contact,password
   }).then(res => {
    console.log(res.data)
   }).catch(err => {
    console.log(err.message)
   }).finally(()=>{
    e.target.value="Register"
    e.target.disabled=false
    console.log("Finally running")
   })
  }
  return (
    <Wrapper>
      <section>
        <div>
          <h1>Registration Form</h1>
          <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/> <br />
          <input type="text" placeholder="Contact" value={contact} onChange={(e) => {setContact(e.target.value)}} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <input type="button" disabled={false} value="Register" onClick={add} />
          <p>Already Registered ?</p>
          <Link to="/" class="link">
            Log In
          </Link>{" "}
          &nbsp;
          <footer>&copy; copyright 2023</footer>
        </div>
      </section>
    </Wrapper>
  );
};

export default RegistrationForm;
