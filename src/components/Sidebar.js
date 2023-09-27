import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Sidebar.css';

export default function Sidebar() {
    //eslint-disable-next-line
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([]);
    const history = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/api/notes/fetchnotes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNotes(data);

                const uniqueCategories = [...new Set(data.map(note => note.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => {
                console.error('Error fetching notes data:', error);
            });
    }, []);

    const handleCategoryClick = (category) => {
        history(`/notes?category=${category}`);
    };

    return (
        <div className="sidebar">
            <Link to="/createnote">Create a New Note</Link>

            {
                categories.map(category => (
                    //eslint-disable-next-line
                    <a
                        key={category}

                        href="#"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </a>
                ))
            }
            <Link to="/notes">View All Notes</Link>
        </div >
    );
}
