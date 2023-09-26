import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import Sidebar from './Sidebar';
import Noteitem from './Noteitem';


export default function Notes() {

    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    const [note, setNote] = useState({ title: "", description: "", category: "" })

    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, [])
    const ref = useRef(null);

    const updateNote = () => {
        ref.current.click();
    }

    const handleClick = (e) => {
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
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
                </div>
            </div>
            <Sidebar />
            <div className="container" style={{ marginLeft: '350px' }}>
                <h1 className="my-3 mx-2">Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote} />;
                })
                }
            </div>
        </>

    )
}
