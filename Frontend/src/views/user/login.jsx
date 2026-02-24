import React, {useState} from 'react';
import { FaUser,FaEnvelope , FaLock} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value}); 
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:3000/auth/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data = await res.json();
        alert(data.message);
        if(data.message=="login successful"){
            navigate("/",{replace:true});
        }
        
    }
    return(
        <div className="login-component">
            <div className="header">
                <h>FlowPilot</h>
            </div>
            <form onSubmit = {handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="input-container">
                    <div className="input-wrapper">
                        <FaEnvelope className="icon" />
                        <input className="form-input" name="email" placeholder="Enter email" 
                               onChange={handleChange}></input>
                    </div>
                    <br></br>
                    <div className="input-wrapper">
                        <FaLock className="icon" />
                        <input className="form-input" name="password" placeholder="Enter password" 
                               onChange={handleChange}></input>
                    </div>
                </div>
                <br></br>
                <button className="submit-btn" type="submit">Log In</button>
            </form>
        </div>
    );

}
export default Login;