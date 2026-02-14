import { useState } from "react";
import '../../style/user/Register.css';
import { FaUser,FaEnvelope , FaLock} from "react-icons/fa";

function Register(){
    const[form, setForm]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange = async(e)=>{
        setForm({...form,[e.target.name]:e.target.value});    
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:3000/auth/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(form)
        })
        const data=await res.json();
        alert(data.message);
        console.log(data.message);
    }
    return(
        <div className="register-component">
            <div className="header">
                <h>FlowPilot</h>
            </div>
            
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <div className="input-container">
                    <div className="input-wrapper">
                        <FaUser className="icon" />
                        <input className="form-input" name="name" placeholder="Enter name" onChange={handleChange}></input>
                    </div>
                    <br></br>
                    <div className="input-wrapper">
                        <FaEnvelope className="icon" />
                        <input className="form-input" name="email" placeholder="Enter email" onChange={handleChange}></input>
                    </div>
                    <br></br>
                    <div className="input-wrapper">
                        <FaLock className="icon" />
                        <input className="form-input" name="password" placeholder="Enter password" onChange={handleChange}></input>
                    </div>
                </div>
                <br></br>
                <button className="submit-btn" type="submit">Sign Up</button>
            </form>
        </div>
      
    )
}

export default Register;