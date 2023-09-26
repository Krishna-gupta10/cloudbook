import React from 'react';
import './Notes.css';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <div className="sidebar">
                <Link to="/createnote">Create a New Note</Link>
                <a href="/">Category 1</a>
                <a href="/">Category 2</a>
                <a href="/">Category 3</a>
                <a href="/">View All</a>
            </div>

            <div className="notes">
                <div className="mb-3">
                <h5>Title</h5>
                <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control custom-textarea" rows="25"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    );
}
