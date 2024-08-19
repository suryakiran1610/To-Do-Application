
import React from "react";
import './todostatus.css';
import { useNavigate } from "react-router-dom";

const Todostatus = ({ filter_todo,reset_todo, }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logging out...");
        console.log("Logged out successfully.");
        navigate('/login');
      }

    return (
        <div className="status0">
            <div className="status1">
                <div className="status2">
                        <label className="status3">Status:</label>
                        <select className="status4" onChange={(e) => filter_todo(e.target.value)}>
                            <option value="">Select</option>
                            <option value="completed">completed</option>
                            <option value="notcompleted">notcompleted</option>
                        </select>
                        <button className="status5" type="button"onClick={reset_todo}>RESET</button>
                </div>
                <div className="logoutuser4box">
                    <button className="logoutuser4" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Todostatus;
