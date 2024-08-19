import React, {useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Todomain from './pages/todomain';
import Register from './pages/register';
import Login from './pages/login';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Router>
        <div className='app1'>
          <div className='app3'>
            <div className='app2'>
              <h1 id="title">To-Do List App</h1>
            </div>  
          </div>    
          <Routes>
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todomain" element={<Todomain />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
