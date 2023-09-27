import React from 'react';
import Navbar from './Navbar'

export default function About() {
    return (
        <>
            <div className="App">
                <Navbar title="Cloudbook" link1="About" />
            </div>

            <div className="container my-5">
                <h1>About Cloudbook</h1>
                <p>
                    Welcome to Cloudbook, your online cloud storage solution for notes.
                    Cloudbook is designed to help you store, organize, edit, and manage your notes with ease.
                </p>
                <ul>
                    <li>Effortlessly create and categorize your notes.</li>
                    <li>Ensure the security and privacy of your data.</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                    If you have any suggestions, or feedback, please feel free to contact me at krishna.22110152@viit.ac.in
                </p>
            </div>
        </>

    )
}
