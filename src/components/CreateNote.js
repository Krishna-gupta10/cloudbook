import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import './css/Notes.css'
import noteContext from '../context/notes/noteContext'

export default function CreateNote() {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", category: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.category);
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Sidebar />
            <div className="notes">

                <div className="row">
                    <div className="col-md-7 mb-3">
                        <h5>Title</h5>
                        <input type="text" id="title" name="title" className="form-control" onChange={onChange} />
                    </div>
                    <div className="col-md-5 mb-3">
                        <h5>Category</h5>
                        <input type="text" id="category" name="category" className="form-control" onChange={onChange} />
                    </div>

                </div>

                <div className="mb-3">
                    <textarea className="form-control custom-textarea" id="description" name="description" rows="20" onChange={onChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Add Note</button>
            </div>
        </>
    )
}   
