import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './css/Login.css'

export default function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    let history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: credentials.username, password: credentials.password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history("/createnote");
        }

        else {
            alert("Invalid Credentials!");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (

        <div className="container my-4" style={{
            backgroundColor: 'white',
            border: '2px solid #2b3035',
            borderRadius: '15px',
            width: '30%',
            height: '60vh',
            padding: '40px 40px',
            textAlign: 'center',
            justifyContent: 'center'
        }}>

            <h2><b>Login</b></h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3 my-5">
                    <input type="text" className="form-control" name="username" placeholder="Username" value={credentials.username} onChange={onChange} />
                </div>
                <div className="mb-3 my-4">
                    <input type="password" className="form-control" name="password" placeholder="Password" value={credentials.password} onChange={onChange} />
                </div>

                <button className="btn btn-success my-4"><b> Login</b></button>
            </form>
        </div>
    )
}
