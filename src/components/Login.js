import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    let history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: credentials.username, password: credentials.password }),
        });

        const json = await response.json();


        if (json.success) {
            localStorage.setItem('token', json.authToken);
            history('/createnote');
        } else {
            alert('Invalid Credentials!');
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
            <div
                className="container"
                style={{
                    backgroundColor: 'white',
                    border: '4px solid #2b3035',
                    borderRadius: '15px',
                    width: '90%', // Increase the width as desired
                    maxWidth: '500px', // Increase the maxWidth as desired
                    padding: '40px 40px',
                    textAlign: 'center',
                }}
            >
                <h2>
                    <b>Login</b>
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3 my-5">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            value={credentials.username}
                            onChange={onChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="mb-3 my-4">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={credentials.password}
                            onChange={onChange}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <button className="btn btn-success my-4">
                        <b>Login</b>
                    </button>
                </form>
            </div>
        </div>
    );
}
