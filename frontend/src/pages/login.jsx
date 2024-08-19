import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ handleLogin }) { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast("Please enter both username and password.");
      return; 
    }

    const data = {
      username: username,
      password: password
    };

    axios.post("http://127.0.0.1:8000/myapp/login/", data)
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
          toast(response.data.error);
        } else {
          console.log("Login successful:", response.data);
          localStorage.setItem("Token", response.data.token);
          localStorage.setItem("user",response.data.userid);
          navigate('/todomain');
          handleLogin();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <div className="login-wrap">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="un"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="logresbtn" type="submit"> Sign in </button>
          <Link to="/register">
            <button className="logresbtn" type="button">Register</button>
          </Link>
          <div>
            <ToastContainer />
          </div>  
        </form>
      </div>
    </>
  );
}

export default Login;
