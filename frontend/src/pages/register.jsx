import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './register.css'


function Register({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data={
    "username":username,
    "password":password
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/myapp/register/",data)
    .then((response)=>{
      if(response.data.error){
        setError(response.data.error)
      }else{
        console.log("Registration successful:", response.data);
        localStorage.setItem("Token",response.data.token)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  };  

  return (
    <>
      <div className="login-wrap">
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p>{error}</p>}
          <button className="logresbtn" type="submit"> Sign up </button>
        </form>
        <Link to="/login"><p>Already have an account? Sign in</p></Link>
      </div>
    </>
  );
}

export default Register;
