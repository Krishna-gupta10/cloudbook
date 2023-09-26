import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/createnote">Create a New Note</Link>
            <a href="/">Category 1</a>
            <a href="/">Category 2</a>
            <a href="/">Category 3</a>
            <Link to="/notes">View All</Link>
        </div>
    )
}
