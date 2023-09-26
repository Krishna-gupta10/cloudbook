import React from 'react'

export default function Noteitem(props) {
    const { note } = props;
    return (
        <div className="container">
            <div className="card my-3" style={{ width: '70rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-solid fa-pencil mx-2"></i>
                </div>
            </div>
        </div>
    )
} 
