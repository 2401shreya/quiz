import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./style";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const[name, setName] = useState("");
  const[contact, setContact] = useState("");
  const[password, setPassword] = useState("");
   const [role,setRole]=useState("")
  const navigate = useNavigate()
const handleChange = (event) => {
 const selectedValue = event.target.value; 
 setRole(selectedValue); 
};
  
  const add =(e)=>{  
    e.target.value="Registering..."
    e.target.disabled=true
   e.preventDefault()
   console.log(e.target)

    axios.post("https://quizattendace.onrender.com/api/user/add",
{
  name,contact,password,role
  }
).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err.message)
}).finally(()=>{
  console.log("Finally Running")
  e.target.value="Register"
  e.target.disabled=false
  navigate("/")
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
          <select  id="dropdown" value={role} onChange={handleChange}>
                  <option value="Select Role" disabled="" >Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                </select>
          <input type="button" disabled={false} value="Register" onClick={add} />
          <p>Already Registered ? <Link to="/" class="link">
            Log In
          </Link></p>
          &nbsp;
          <footer>&copy; copyright 2023</footer>
        </div>
      </section>
    </Wrapper>
  );
};

export default RegistrationForm;





