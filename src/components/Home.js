import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'


export default function Home() {
  return (
    <div>
      <Link to="/createnote"></Link>
      <div className="container text-center my-5">
        <h1><b>Welcome to Cloudbook</b></h1>
        <h2><b>Create and Access your notes on the GO!</b></h2>

        <div>
          <Link to="/login"><button className="loginbutton my-5 mx-5"><i className="fa-solid fa-right-to-bracket"></i><b> Login</b></button></Link>
          <Link to="/createaccount"><button className="signupbutton mx-5"><i class="fa-solid fa-user-plus"></i><b> Create Account</b></button></Link>

        </div>
      </div>

    </div>
  )
}
