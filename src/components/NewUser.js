import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewUser() {
    const [credentials, setCredentials] = useState({ name: '', username: '', email: '', password: '', cpassword: '' });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.cpassword) {
            alert('Passwords Do Not match!');
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, username: credentials.username, email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        console.log(json);

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
                    <b>Create Account</b>
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-5">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter your Name"
                            autoComplete="name"
                            minLength={5}
                            value={credentials.name}
                            onChange={onChange}
                            style={{ width: '100%' }}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            value={credentials.username}
                            onChange={onChange}
                            style={{ width: '100%' }}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            value={credentials.email}
                            onChange={onChange}
                            style={{ width: '100%' }}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            minLength={8}
                            value={credentials.password}
                            onChange={onChange}
                            style={{ width: '100%' }}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name="cpassword"
                            placeholder="Confirm Password"
                            autoComplete="current-password"
                            value={credentials.cpassword}
                            onChange={onChange}
                            style={{ width: '100%' }}
                            required
                        />
                    </div>

                    <button className="btn btn-success my-4">
                        <b>Create Account</b>
                    </button>
                </form>
            </div>
        </div>
    );
}
