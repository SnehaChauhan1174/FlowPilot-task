import { useState } from "react";
import '../../style/user/Register.css';

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
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input name="name"
                 placeholder="Enter name"
                 onChange={handleChange}>
                </input>
                <br></br>
                <input name="email"
                 placeholder="Enter email"
                 onChange={handleChange}>
                </input>
                <br></br>
                <input name="password"
                 placeholder="Enter password"
                 onChange={handleChange}>
                </input>
                <br></br>
                <button type="submit">Register</button>
            </form>
        </div>
      
    )
}

export default Register;