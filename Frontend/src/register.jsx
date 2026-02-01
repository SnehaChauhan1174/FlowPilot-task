import { useState } from "react";

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
        e.preventDeafult();
        const res=await fetch("http://localhost:3000/auth/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:json.stringify(form)
        })
        const data=await res.json();
        alert(data.message);


    }
    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
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