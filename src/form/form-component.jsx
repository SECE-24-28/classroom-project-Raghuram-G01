import React, { useState } from "react";
import {FormStyle} from "./form-style.js";
const UsestateformComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [details, setDetails] = useState({name:"", email:"", password:""});
  const fun1 = (e) => {
    //console.log("Hello this is changed", e.target.value);
    if(e.target.name==="name")
    setName(e.target.value);
    else if(e.target.name==="email")
    setEmail(e.target.value);
    else if(e.target.name==="password")
    setPassword(e.target.value);
  };
//   const fun2 = (e) => {
//     setEmail(e.target.value);
//   }
//   const fun3=(e)=>{
//     setPassword(e.target.value);
//   }
  const submitthings = () => {
    console.log("The name is :", name);
    console.log("The email is :", email);
    console.log("The password is :", password);
  };
  return (
    <FormStyle>
    <div>
      <h1>Log in</h1>
      <form action={submitthings}>
        <div>
        <label htmlFor="name">User Name: </label> <br></br>
        <input type="text" id="name" name="name" onChange={fun1} placeholder="Enter a User Name"/>
        </div>
        <br></br>
        {/* <div>
        <label htmlFor="email">Email: </label>  <br></br>
        <input type="email" id="email" name="email" onChange={fun1} placeholder="Enter an email"/>
        </div> */}
         <br></br>
        <div>
        <label htmlFor="password">Password: </label>  <br></br>
        <input type="password" id="password" name="password" onChange={fun1} placeholder="Enter a password"/>
        </div>
         <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
    </FormStyle>
  );
};
export default UsestateformComponent;